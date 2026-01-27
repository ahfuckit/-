import {ssrSafeDocument, IS_SERVER, wasServerRendered} from '@github-ui/ssr-utils'
import {loaded} from '@github-ui/document-ready'
import {bundler} from '@github-ui/runtime-environment'
import {isFeatureEnabled} from '@github-ui/feature-flags'
import {isLoggedIn} from '@github-ui/client-env'
import {throttle} from '@github/mini-throttle'
import {CUSTOM_METRIC_REGISTRY, type CustomMetricKey} from './registry'
import {SOFT_NAV_STATE} from '@github-ui/soft-nav/states'
import {getCurrentReactAppName} from '@github-ui/stats-metadata'

// eslint-disable-next-line no-barrel-files/no-barrel-files
export type {CustomMetricKey}

let stats: PlatformBrowserStat[] = []
const chunkSize = 64 * 1024

// Load app state when hard navigating
let appName = getCurrentReactAppName() || 'rails'
let renderIsSSR = wasServerRendered()

// We update the app state after each soft navigation to ensure
// INP is correctly tagged.
ssrSafeDocument?.addEventListener(SOFT_NAV_STATE.END, () => {
  appName = getCurrentReactAppName() || 'rails'
  renderIsSSR = wasServerRendered()
})

export function sendCustomMetric(
  {
    name,
    value,
    tags,
    requestUrl,
  }: {
    name: CustomMetricKey
    value: number
    tags?: PlatformBrowserCustomMetricTags
    requestUrl?: string
  },
  flushImmediately?: boolean,
  samplingProbability?: number,
): void {
  const customMetric = CUSTOM_METRIC_REGISTRY[name]
  sendStats(
    {
      requestUrl,
      customMetric: {
        ...customMetric,
        value,
        tags,
      },
      ui: bundler === 'vite-tss' ? true : false,
    },
    flushImmediately,
    samplingProbability,
  )
}

export function sendStats(stat: PlatformBrowserStat, flushImmediately = false, samplingProbability = 0.5): void {
  if (IS_SERVER || isFeatureEnabled('browser_stats_disabled') === true) {
    return
  }
  if (samplingProbability < 0 || samplingProbability > 1) {
    throw new RangeError('Sampling probability must be between 0 and 1')
  }

  if (stat.timestamp === undefined) stat.timestamp = Date.now()
  stat.loggedIn = isLoggedIn()
  stat.staff = isStaff()
  stat.bundler = bundler
  stat.ui = bundler === 'vite-tss' ? true : false
  stat.app = appName
  stat.ssr = String(renderIsSSR)

  if (Math.random() < samplingProbability) {
    stats.push(stat)
  }

  if (flushImmediately) {
    flushStats()
  } else {
    throttledScheduleSendStats()
  }
}

let queued: number | null = null

const throttledScheduleSendStats = throttle(async function scheduleSendStats() {
  await loaded
  if (queued == null) {
    queued = window.requestIdleCallback(flushStats)
  }
}, 5000)

function flushStats() {
  queued = null
  if (!stats.length) {
    return
  }

  const url = ssrSafeDocument?.head?.querySelector<HTMLMetaElement>('meta[name="browser-stats-url"]')?.content
  if (!url) {
    return
  }

  const batches = getBatches(stats)

  for (const batch of batches) {
    safeSend(url, `{"stats": [${batch.join(',')}], "target": "${getUITarget()}"}`)
  }

  stats = []
}

// getBatches breaks up the list of stats into smaller batches
// that are less than 64kb in size. This is to avoid hitting the
// size limit of the beacon API.
function getBatches(items: PlatformBrowserStat[]): string[][] {
  const batches: string[][] = []
  const itemStrings = items.map(item => JSON.stringify(item))

  while (itemStrings.length > 0) {
    batches.push(makeBatch(itemStrings))
  }

  return batches
}

// makeBatch walks the items and collects batches of items that are within
// the 64kb limit. If an item is too big to fit in a batch, it is sent alone.
function makeBatch(itemStrings: string[]): string[] {
  const firstItem = itemStrings.shift()!
  const batch: string[] = [firstItem]
  let size = firstItem.length

  while (itemStrings.length > 0 && size <= chunkSize) {
    const nextItemSize = itemStrings[0]!.length

    if (size + nextItemSize <= chunkSize) {
      const itemString = itemStrings.shift()!
      batch.push(itemString)
      size += nextItemSize
    } else {
      break
    }
  }

  return batch
}

function safeSend(url: string, data: string) {
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, data)
    }
  } catch {
    // Silently ignore errors: https://github.com/github/github/issues/178088#issuecomment-829936461
  }
}

export function isStaff(): boolean {
  return !!ssrSafeDocument?.head?.querySelector<HTMLMetaElement>('meta[name="user-staff"]')?.content
}

function getUITarget() {
  return ssrSafeDocument?.head?.querySelector<HTMLMetaElement>('meta[name="ui-target"]')?.content || 'full'
}

// Flush stats before users navigate away from the page
ssrSafeDocument?.addEventListener('pagehide', flushStats)
ssrSafeDocument?.addEventListener('visibilitychange', flushStats)
