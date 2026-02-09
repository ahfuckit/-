import type {Author} from './commit-attribution-types'

export function isBotOrApp(author: Author) {
  const isApp = author.path?.startsWith('/apps/') ?? false

  // Copilot SWE agent should be rendered as circular, not square
  if (isApp && author.login?.toLowerCase() === 'copilot-swe-agent') {
    return false
  }

  return isApp
}
