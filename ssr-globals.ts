// When using SSR, browser globals are not available. If you try to use them, Node.js will throw an error
type SSRSafeLocation = Pick<Location, 'pathname' | 'origin' | 'search' | 'hash' | 'href'>

// In some cases, we want to force the server environment to be used in the browser. This is useful for testing/profiling
const forceServer = typeof FORCE_SERVER_ENV !== 'undefined' ? FORCE_SERVER_ENV : false

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
export const ssrSafeDocument = typeof document === 'undefined' || forceServer ? undefined : document
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
export const ssrSafeWindow = typeof window === 'undefined' || forceServer ? undefined : window
// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope, no-restricted-globals
export const ssrSafeHistory = typeof history === 'undefined' || forceServer ? undefined : history

// Fallback location object that can be set via setLocation
let fallbackLocation: SSRSafeLocation = {pathname: '', origin: '', search: '', hash: '', href: ''}

// Server-specific getter that can be overridden by the server module
let getServerLocation: (() => URL | undefined) | null = null

// Create a location object with getters that check server getter first, then fallback
function createSSRSafeLocation(): SSRSafeLocation {
  return {
    get pathname() {
      const serverUrl = getServerLocation ? getServerLocation() : undefined
      return serverUrl?.pathname ?? fallbackLocation.pathname
    },
    get origin() {
      const serverUrl = getServerLocation ? getServerLocation() : undefined
      return serverUrl?.origin ?? fallbackLocation.origin
    },
    get search() {
      const serverUrl = getServerLocation ? getServerLocation() : undefined
      return serverUrl?.search ?? fallbackLocation.search
    },
    get hash() {
      const serverUrl = getServerLocation ? getServerLocation() : undefined
      return serverUrl?.hash ?? fallbackLocation.hash
    },
    get href() {
      const serverUrl = getServerLocation ? getServerLocation() : undefined
      return serverUrl?.href ?? fallbackLocation.href
    },
  }
}

export const ssrSafeLocation: SSRSafeLocation =
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  typeof location === 'undefined' || forceServer ? createSSRSafeLocation() : location

export function setLocation(url: string) {
  // eslint-disable-next-line no-restricted-syntax
  const parsedURL: SSRSafeLocation = new URL(url)
  const {pathname, origin, search, hash, href} = parsedURL

  fallbackLocation = {pathname, origin, search, hash, href}
}

// This is a special helper method for setting the location getter in the SSR environment only
export function setServerLocationGetter(getter: () => URL | undefined) {
  getServerLocation = getter
}
