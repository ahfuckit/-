/**
 * Turbo Relay Cache Probe
 *
 * Checks IndexedDB for cached Relay queries before Turbo navigations.
 * When a cache hit is detected for a supported route (e.g., Issue Show),
 * we attach a header so the server can skip SSR and Relay preloads,
 * allowing the client to render from its local cache.
 */

import {getCurrentUserLogin} from '@github-ui/client-env'
import {isFeatureEnabled} from '@github-ui/feature-flags'
import {generateCacheKey} from '@github-ui/relay-query-cache/create-query-cache'
import {PERSISTER_KEY_PREFIX} from '@github-ui/relay-query-cache'
import {createSafeIndexedDbPersister} from '@github-ui/safe-indexed-db-storage'

// Cache header name - server checks for this to skip SSR/preloads
export const RELAY_CACHE_HEADER = 'X-Issues-React-Relay-Cache'

// Issue Show route pattern: /:owner/:repo/issues/:number
const ISSUE_SHOW_PATTERN = /^\/([^/]+)\/([^/]+)\/issues\/(\d+)$/

// Query metadata for Issue Show (from IssueViewerViewQuery.graphql.ts)
const ISSUE_SHOW_QUERY_NAME = 'IssueViewerViewQuery'

// Default values from the query's argumentDefinitions
const ISSUE_SHOW_DEFAULT_VALUES: Record<string, unknown> = {
  hideTimeline: false,
}

// Lazy-initialized storage persister
let storagePersister: ReturnType<typeof createSafeIndexedDbPersister> | null = null

function getStoragePersister() {
  if (!storagePersister) {
    storagePersister = createSafeIndexedDbPersister({
      validator: {
        Check: (value: unknown): value is unknown => {
          if (typeof value !== 'object' || value === null) return false
          const data = value as {data?: unknown; errors?: unknown}
          if (data.data !== undefined && typeof data.data !== 'object') return false
          if (data.errors !== undefined && !Array.isArray(data.errors)) return false
          return true
        },
        Code: () => 'manual-validator',
        Errors: () => [],
      },
      // No-op analytics for the probe (we don't want to double-count)
      sendAnalyticsEvent: () => {},
    })
  }
  return storagePersister
}

/**
 * Parse Issue Show URL and extract route variables
 */
export function parseIssueShowUrl(url: URL): {owner: string; repo: string; number: number} | null {
  const match = url.pathname.match(ISSUE_SHOW_PATTERN)
  if (!match) return null

  const [, owner, repo, numberStr] = match
  if (!owner || !repo || !numberStr) return null

  const number = parseInt(numberStr, 10)
  if (isNaN(number)) return null

  return {owner, repo, number}
}

/**
 * Compute Issue Show query variables from URL
 * Mirrors the logic in variable-transformers.ts for '/:owner/:repo/issues/:number'
 * Note: timeline_page is intentionally not handled here as it's only for crawlers
 */
export function computeIssueShowVariables(
  params: {owner: string; repo: string; number: number},
  _searchParams: URLSearchParams,
): Record<string, unknown> {
  return {
    owner: params.owner,
    repo: params.repo,
    number: params.number,
    count: 15,
  }
}

/**
 * Check if we have a cached Relay query for the given Issue Show URL
 */
async function probeIssueShowCache(url: URL): Promise<boolean> {
  const params = parseIssueShowUrl(url)
  if (!params) return false

  const userLogin = getCurrentUserLogin()
  if (!userLogin) return false

  const prefix = `${PERSISTER_KEY_PREFIX}-${userLogin}`
  const variables = computeIssueShowVariables(params, url.searchParams)
  const cacheKey = generateCacheKey(prefix, ISSUE_SHOW_QUERY_NAME, variables, ISSUE_SHOW_DEFAULT_VALUES)

  try {
    const storage = getStoragePersister()
    const cached = await storage.getItem(cacheKey)

    if (!cached || !cached.state?.data) {
      return false
    }

    return true
  } catch {
    return false
  }
}

export interface TurboRelayCacheProbeResult {
  shouldAttachHeader: boolean
  headerValue?: string
}

/**
 * Check if Turbo cache navigation feature flag is enabled.
 * This controls whether we probe the cache and attach headers for Turbo navigations.
 * Exported so events.ts can skip async work entirely when disabled.
 */
export function isTurboRelayCacheEnabled(): boolean {
  return isFeatureEnabled('issues_react_turbo_cache_navigation')
}

/**
 * Probe the Relay cache for a Turbo navigation destination URL.
 * Returns whether to attach the cache header and what value to use.
 */
export async function probeTurboRelayCache(destinationUrl: string): Promise<TurboRelayCacheProbeResult> {
  try {
    const url = new URL(destinationUrl, window.location.origin)

    // Check Issue Show route first (more specific pattern)
    if (ISSUE_SHOW_PATTERN.test(url.pathname)) {
      const hasCache = await probeIssueShowCache(url)
      if (hasCache) {
        return {
          shouldAttachHeader: true,
          headerValue: 'issue-show-hit=1',
        }
      }
    }

    // Add more route checks here as we expand support
    // e.g., Dashboard views, etc.
  } catch {
    // Cache probe failed, continue without header
  }

  return {shouldAttachHeader: false}
}
