// Failbot needs to load first so we get errors from system lite.
import '@github-ui/failbot/failbot-error'

// Browser polyfills
import '@github/arianotify-polyfill'

import applyFetchPatch from '@github-ui/fetch-patch'
import {applyRemoveChildPatch} from '@github-ui/remove-child-patch'
import {applyInsertBeforePatch} from '@github-ui/insert-before-patch'
import {apply} from '@github/browser-support'
import '@github-ui/fetch-overrides'
import {setupInitialNonce} from '@github-ui/fetch-nonce'
import {initRequestIdFromMeta} from '@github-ui/recent-request-ids'

apply()
if (typeof document !== 'undefined') {
  applyFetchPatch()
  applyRemoveChildPatch()
  applyInsertBeforePatch()
  setupInitialNonce()
  initRequestIdFromMeta()
}
