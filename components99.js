import"../../../ui/components/chrome_link/chrome_link.js";import"../../../ui/components/expandable_list/expandable_list.js";import"../../../ui/components/report_view/report_view.js";import"../../../ui/components/tree_outline/tree_outline.js";import*as e from"../../../core/common/common.js";import*as t from"../../../core/i18n/i18n.js";import*as r from"../../../core/sdk/sdk.js";import"../../../ui/components/buttons/buttons.js";import*as o from"../../../ui/components/legacy_wrapper/legacy_wrapper.js";import*as a from"../../../ui/components/render_coordinator/render_coordinator.js";import*as i from"../../../ui/legacy/components/utils/utils.js";import*as n from"../../../ui/lit/lit.js";import*as s from"../../../ui/visual_logging/visual_logging.js";import"../../../ui/legacy/components/data_grid/data_grid.js";import*as l from"../../../ui/legacy/legacy.js";import*as d from"../../../core/platform/platform.js";import*as c from"../../../core/root/root.js";import*as h from"../../../models/bindings/bindings.js";import*as u from"../../../models/workspace/workspace.js";import*as p from"../../network/forward/forward.js";import*as g from"../../../third_party/csp_evaluator/csp_evaluator.js";import"../../../ui/components/icon_button/icon_button.js";import*as m from"../../../ui/components/adorners/adorners.js";import*as v from"../../../core/host/host.js";import*as k from"../../../ui/components/input/input.js";const b={notMainFrame:"Navigation happened in a frame other than the main frame.",backForwardCacheDisabled:"Back/forward cache is disabled by flags. Visit edge://flags/#back-forward-cache to enable it locally on this device.",relatedActiveContentsExist:"The page was opened using '`window.open()`' and another tab has a reference to it, or the page opened a window.",HTTPStatusNotOK:"Only pages with a status code of 2XX can be cached.",schemeNotHTTPOrHTTPS:"Only pages whose URL scheme is HTTP / HTTPS can be cached.",loading:"The page did not finish loading before navigating away.",wasGrantedMediaAccess:"Pages that have granted access to record video or audio are not currently eligible for back/forward cache.",HTTPMethodNotGET:"Only pages loaded via a GET request are eligible for back/forward cache.",subframeIsNavigating:"An iframe on the page started a navigation that did not complete.",timeout:"The page exceeded the maximum time in back/forward cache and was expired.",cacheLimit:"The page was evicted from the cache to allow another page to be cached.",JavaScriptExecution:"Microsoft Edge detected an attempt to execute JavaScript while in the cache.",rendererProcessKilled:"The renderer process for the page in back/forward cache was killed.",rendererProcessCrashed:"The renderer process for the page in back/forward cache crashed.",grantedMediaStreamAccess:"Pages that have granted media stream access are not currently eligible for back/forward cache.",cacheFlushed:"The cache was intentionally cleared.",serviceWorkerVersionActivation:"The page was evicted from back/forward cache due to a service worker activation.",sessionRestored:"Microsoft Edge restarted and cleared the back/forward cache entries.",serviceWorkerPostMessage:"A service worker attempted to send the page in back/forward cache a `MessageEvent`.",enteredBackForwardCacheBeforeServiceWorkerHostAdded:"A service worker was activated while the page was in back/forward cache.",serviceWorkerClaim:"The page was claimed by a service worker while it is in back/forward cache.",haveInnerContents:"Pages that have certain kinds of embedded content (e.g. PDFs) are not currently eligible for back/forward cache.",timeoutPuttingInCache:"The page timed out entering back/forward cache (likely due to long-running pagehide handlers).",backForwardCacheDisabledByLowMemory:"Back/forward cache is disabled due to insufficient memory.",backForwardCacheDisabledByCommandLine:"Back/forward cache is disabled by the command line.",networkRequestDatapipeDrainedAsBytesConsumer:"Pages that have inflight fetch() or XHR are not currently eligible for back/forward cache.",networkRequestRedirected:"The page was evicted from back/forward cache because an active network request involved a redirect.",networkRequestTimeout:"The page was evicted from the cache because a network connection was open too long. Microsoft Edge limits the amount of time that a page may receive data while cached.",networkExceedsBufferLimit:"The page was evicted from the cache because an active network connection received too much data. Microsoft Edge limits the amount of data that a page may receive while cached.",navigationCancelledWhileRestoring:"Navigation was cancelled before the page could be restored from back/forward cache.",backForwardCacheDisabledForPrerender:"Back/forward cache is disabled for prerenderer.",userAgentOverrideDiffers:"Browser has changed the user agent override header.",foregroundCacheLimit:"The page was evicted from the cache to allow another page to be cached.",backForwardCacheDisabledForDelegate:"Back/forward cache is not supported by delegate.",unloadHandlerExistsInMainFrame:"The page has an unload handler in the main frame.",unloadHandlerExistsInSubFrame:"The page has an unload handler in a sub frame.",serviceWorkerUnregistration:"ServiceWorker was unregistered while a page was in back/forward cache.",noResponseHead:"Pages that do not have a valid response head cannot enter back/forward cache.",cacheControlNoStore:"Pages with cache-control:no-store header cannot enter back/forward cache.",ineligibleAPI:"Ineligible APIs were used.",internalError:"Internal error.",webSocket:"Pages with WebSocket cannot enter back/forward cache.",webTransport:"Pages with WebTransport cannot enter back/forward cache.",webRTC:"Pages with WebRTC cannot enter back/forward cache.",mainResourceHasCacheControlNoStore:"Pages whose main resource has cache-control:no-store cannot enter back/forward cache.",mainResourceHasCacheControlNoCache:"Pages whose main resource has cache-control:no-cache cannot enter back/forward cache.",subresourceHasCacheControlNoStore:"Pages whose subresource has cache-control:no-store cannot enter back/forward cache.",subresourceHasCacheControlNoCache:"Pages whose subresource has cache-control:no-cache cannot enter back/forward cache.",containsPlugins:"Pages containing plugins are not currently eligible for back/forward cache.",documentLoaded:"The document did not finish loading before navigating away.",dedicatedWorkerOrWorklet:"Pages that use a dedicated worker or worklet are not currently eligible for back/forward cache.",outstandingNetworkRequestOthers:"Pages with an in-flight network request are not currently eligible for back/forward cache.",outstandingIndexedDBTransaction:"Page with ongoing indexed DB transactions are not currently eligible for back/forward cache.",requestedNotificationsPermission:"Pages that have requested notifications permissions are not currently eligible for back/forward cache.",requestedMIDIPermission:"Pages that have requested MIDI permissions are not currently eligible for back/forward cache.",requestedAudioCapturePermission:"Pages that have requested audio capture permissions are not currently eligible for back/forward cache.",requestedVideoCapturePermission:"Pages that have requested video capture permissions are not currently eligible for back/forward cache.",requestedBackForwardCacheBlockedSensors:"Pages that have requested sensor permissions are not currently eligible for back/forward cache.",requestedBackgroundWorkPermission:"Pages that have requested background sync or fetch permissions are not currently eligible for back/forward cache.",broadcastChannel:"The page cannot be cached because it has a BroadcastChannel instance with registered listeners.",indexedDBConnection:"Pages that have an open IndexedDB connection are not currently eligible for back/forward cache.",webXR:"Pages that use WebXR are not currently eligible for back/forward cache.",sharedWorker:"Pages that use SharedWorker are not currently eligible for back/forward cache.",sharedWorkerMessage:"The page was evicted from the cache because it received a message from a SharedWorker",webLocks:"Pages that use WebLocks are not currently eligible for back/forward cache.",webHID:"Pages that use WebHID are not currently eligible for back/forward cache.",webShare:"Pages that use WebShare are not currently eligible for back/forwad cache.",requestedStorageAccessGrant:"Pages that have requested storage access are not currently eligible for back/forward cache.",webNfc:"Pages that use WebNfc are not currently eligible for back/forwad cache.",outstandingNetworkRequestFetch:"Pages with an in-flight fetch network request are not currently eligible for back/forward cache.",outstandingNetworkRequestXHR:"Pages with an in-flight XHR network request are not currently eligible for back/forward cache.",appBanner:"Pages that requested an AppBanner are not currently eligible for back/forward cache.",printing:"Pages that show Printing UI are not currently eligible for back/forward cache.",webDatabase:"Pages that use WebDatabase are not currently eligible for back/forward cache.",pictureInPicture:"Pages that use Picture-in-Picture are not currently eligible for back/forward cache.",speechRecognizer:"Pages that use SpeechRecognizer are not currently eligible for back/forward cache.",idleManager:"Pages that use IdleManager are not currently eligible for back/forward cache.",paymentManager:"Pages that use PaymentManager are not currently eligible for back/forward cache.",speechSynthesis:"Pages that use SpeechSynthesis are not currently eligible for back/forward cache.",keyboardLock:"Pages that use Keyboard lock are not currently eligible for back/forward cache.",webOTPService:"Pages that use WebOTPService are not currently eligible for bfcache.",outstandingNetworkRequestDirectSocket:"Pages with an in-flight network request are not currently eligible for back/forward cache.",injectedJavascript:"Pages that `JavaScript` is injected into by extensions are not currently eligible for back/forward cache.",injectedStyleSheet:"Pages that a `StyleSheet` is injected into by extensions are not currently eligible for back/forward cache.",contentDiscarded:"Undefined",contentSecurityHandler:"Pages that use SecurityHandler are not eligible for back/forward cache.",contentWebAuthenticationAPI:"Pages that use WebAuthetication API are not eligible for back/forward cache.",contentFileChooser:"Pages that use FileChooser API are not eligible for back/forward cache.",contentSerial:"Pages that use Serial API are not eligible for back/forward cache.",contentFileSystemAccess:"Pages that use File System Access API are not eligible for back/forward cache.",contentMediaDevicesDispatcherHost:"Pages that use Media Device Dispatcher are not eligible for back/forward cache.",contentWebBluetooth:"Pages that use WebBluetooth API are not eligible for back/forward cache.",contentWebUSB:"Pages that use WebUSB API are not eligible for back/forward cache.",contentMediaSession:"Pages that use MediaSession API and set a playback state are not eligible for back/forward cache.",contentMediaSessionService:"Pages that use MediaSession API and set action handlers are not eligible for back/forward cache.",contentMediaPlay:"A media player was playing upon navigating away.",contentScreenReader:"Back/forward cache is disabled due to screen reader.",embedderPopupBlockerTabHelper:"Popup blocker was present upon navigating away.",embedderSafeBrowsingTriggeredPopupBlocker:"Safe Browsing considered this page to be abusive and blocked popup.",embedderSafeBrowsingThreatDetails:"Safe Browsing details were shown upon navigating away.",embedderAppBannerManager:"App Banner was present upon navigating away.",embedderDomDistillerViewerSource:"DOM Distiller Viewer was present upon navigating away.",embedderDomDistillerSelfDeletingRequestDelegate:"DOM distillation was in progress upon navigating away.",embedderOomInterventionTabHelper:"Out-Of-Memory Intervention bar was present upon navigating away.",embedderOfflinePage:"The offline page was shown upon navigating away.",embedderChromePasswordManagerClientBindCredentialManager:"Microsoft Edge Password Manager was present upon navigating away.",embedderPermissionRequestManager:"There were permission requests upon navigating away.",embedderModalDialog:"Modal dialog such as form resubmission or http password dialog was shown for the page upon navigating away.",embedderExtensions:"Back/forward cache is disabled due to extensions.",embedderExtensionMessaging:"Back/forward cache is disabled due to extensions using messaging API.",embedderExtensionMessagingForOpenPort:"Extensions with long-lived connection should close the connection before entering back/forward cache.",embedderExtensionSentMessageToCachedFrame:"Extensions with long-lived connection attempted to send messages to frames in back/forward cache.",errorDocument:"Back/forward cache is disabled due to a document error.",fencedFramesEmbedder:"Pages using FencedFrames cannot be stored in bfcache.",keepaliveRequest:"Back/forward cache is disabled due to a keepalive request.",jsNetworkRequestReceivedCacheControlNoStoreResource:"Back/forward cache is disabled because some JavaScript network request received resource with `Cache-Control: no-store` header.",indexedDBEvent:"Back/forward cache is disabled due to an IndexedDB event.",cookieDisabled:"Back/forward cache is disabled because cookies are disabled on a page that uses `Cache-Control: no-store`.",webRTCUsedWithCCNS:"Back/forward cache is disabled because WebRTC has been used.",webTransportUsedWithCCNS:"Back/forward cache is disabled because WebTransport has been used.",webSocketUsedWithCCNS:"Back/forward cache is disabled because WebSocket has been used."},w=t.i18n.registerUIStrings("panels/application/components/BackForwardCacheStrings.ts",b),f=t.i18n.getLazilyComputedLocalizedString.bind(void 0,w),y={NotPrimaryMainFrame:{name:f(b.notMainFrame)},BackForwardCacheDisabled:{name:f(b.backForwardCacheDisabled)},RelatedActiveContentsExist:{name:f(b.relatedActiveContentsExist)},HTTPStatusNotOK:{name:f(b.HTTPStatusNotOK)},SchemeNotHTTPOrHTTPS:{name:f(b.schemeNotHTTPOrHTTPS)},Loading:{name:f(b.loading)},WasGrantedMediaAccess:{name:f(b.wasGrantedMediaAccess)},HTTPMethodNotGET:{name:f(b.HTTPMethodNotGET)},SubframeIsNavigating:{name:f(b.subframeIsNavigating)},Timeout:{name:f(b.timeout)},CacheLimit:{name:f(b.cacheLimit)},JavaScriptExecution:{name:f(b.JavaScriptExecution)},RendererProcessKilled:{name:f(b.rendererProcessKilled)},RendererProcessCrashed:{name:f(b.rendererProcessCrashed)},GrantedMediaStreamAccess:{name:f(b.grantedMediaStreamAccess)},CacheFlushed:{name:f(b.cacheFlushed)},ServiceWorkerVersionActivation:{name:f(b.serviceWorkerVersionActivation)},SessionRestored:{name:f(b.sessionRestored)},ServiceWorkerPostMessage:{name:f(b.serviceWorkerPostMessage)},EnteredBackForwardCacheBeforeServiceWorkerHostAdded:{name:f(b.enteredBackForwardCacheBeforeServiceWorkerHostAdded)},ServiceWorkerClaim:{name:f(b.serviceWorkerClaim)},HaveInnerContents:{name:f(b.haveInnerContents)},TimeoutPuttingInCache:{name:f(b.timeoutPuttingInCache)},BackForwardCacheDisabledByLowMemory:{name:f(b.backForwardCacheDisabledByLowMemory)},BackForwardCacheDisabledByCommandLine:{name:f(b.backForwardCacheDisabledByCommandLine)},NetworkRequestDatapipeDrainedAsBytesConsumer:{name:f(b.networkRequestDatapipeDrainedAsBytesConsumer)},NetworkRequestRedirected:{name:f(b.networkRequestRedirected)},NetworkRequestTimeout:{name:f(b.networkRequestTimeout)},NetworkExceedsBufferLimit:{name:f(b.networkExceedsBufferLimit)},NavigationCancelledWhileRestoring:{name:f(b.navigationCancelledWhileRestoring)},BackForwardCacheDisabledForPrerender:{name:f(b.backForwardCacheDisabledForPrerender)},UserAgentOverrideDiffers:{name:f(b.userAgentOverrideDiffers)},ForegroundCacheLimit:{name:f(b.foregroundCacheLimit)},BackForwardCacheDisabledForDelegate:{name:f(b.backForwardCacheDisabledForDelegate)},UnloadHandlerExistsInMainFrame:{name:f(b.unloadHandlerExistsInMainFrame)},UnloadHandlerExistsInSubFrame:{name:f(b.unloadHandlerExistsInSubFrame)},ServiceWorkerUnregistration:{name:f(b.serviceWorkerUnregistration)},NoResponseHead:{name:f(b.noResponseHead)},CacheControlNoStore:{name:f(b.cacheControlNoStore)},CacheControlNoStoreCookieModified:{name:f(b.cacheControlNoStore)},CacheControlNoStoreHTTPOnlyCookieModified:{name:f(b.cacheControlNoStore)},DisableForRenderFrameHostCalled:{name:f(b.ineligibleAPI)},BlocklistedFeatures:{name:f(b.ineligibleAPI)},SchedulerTrackedFeatureUsed:{name:f(b.ineligibleAPI)},DomainNotAllowed:{name:f(b.internalError)},ConflictingBrowsingInstance:{name:f(b.internalError)},NotMostRecentNavigationEntry:{name:f(b.internalError)},IgnoreEventAndEvict:{name:f(b.internalError)},BrowsingInstanceNotSwapped:{name:f(b.internalError)},ActivationNavigationsDisallowedForBug1234857:{name:f(b.internalError)},Unknown:{name:f(b.internalError)},RenderFrameHostReused_SameSite:{name:f(b.internalError)},RenderFrameHostReused_CrossSite:{name:f(b.internalError)},WebSocket:{name:f(b.webSocket)},WebTransport:{name:f(b.webTransport)},WebRTC:{name:f(b.webRTC)},MainResourceHasCacheControlNoStore:{name:f(b.mainResourceHasCacheControlNoStore)},MainResourceHasCacheControlNoCache:{name:f(b.mainResourceHasCacheControlNoCache)},SubresourceHasCacheControlNoStore:{name:f(b.subresourceHasCacheControlNoStore)},SubresourceHasCacheControlNoCache:{name:f(b.subresourceHasCacheControlNoCache)},ContainsPlugins:{name:f(b.containsPlugins)},DocumentLoaded:{name:f(b.documentLoaded)},DedicatedWorkerOrWorklet:{name:f(b.dedicatedWorkerOrWorklet)},OutstandingNetworkRequestOthers:{name:f(b.outstandingNetworkRequestOthers)},OutstandingIndexedDBTransaction:{name:f(b.outstandingIndexedDBTransaction)},RequestedNotificationsPermission:{name:f(b.requestedNotificationsPermission)},RequestedMIDIPermission:{name:f(b.requestedMIDIPermission)},RequestedAudioCapturePermission:{name:f(b.requestedAudioCapturePermission)},RequestedVideoCapturePermission:{name:f(b.requestedVideoCapturePermission)},RequestedBackForwardCacheBlockedSensors:{name:f(b.requestedBackForwardCacheBlockedSensors)},RequestedBackgroundWorkPermission:{name:f(b.requestedBackgroundWorkPermission)},BroadcastChannel:{name:f(b.broadcastChannel)},IndexedDBConnection:{name:f(b.indexedDBConnection)},WebXR:{name:f(b.webXR)},SharedWorker:{name:f(b.sharedWorker)},SharedWorkerMessage:{name:f(b.sharedWorkerMessage)},WebLocks:{name:f(b.webLocks)},WebHID:{name:f(b.webHID)},WebShare:{name:f(b.webShare)},RequestedStorageAccessGrant:{name:f(b.requestedStorageAccessGrant)},WebNfc:{name:f(b.webNfc)},OutstandingNetworkRequestFetch:{name:f(b.outstandingNetworkRequestFetch)},OutstandingNetworkRequestXHR:{name:f(b.outstandingNetworkRequestXHR)},AppBanner:{name:f(b.appBanner)},Printing:{name:f(b.printing)},WebDatabase:{name:f(b.webDatabase)},PictureInPicture:{name:f(b.pictureInPicture)},SpeechRecognizer:{name:f(b.speechRecognizer)},IdleManager:{name:f(b.idleManager)},PaymentManager:{name:f(b.paymentManager)},SpeechSynthesis:{name:f(b.speechSynthesis)},KeyboardLock:{name:f(b.keyboardLock)},WebOTPService:{name:f(b.webOTPService)},OutstandingNetworkRequestDirectSocket:{name:f(b.outstandingNetworkRequestDirectSocket)},InjectedJavascript:{name:f(b.injectedJavascript)},InjectedStyleSheet:{name:f(b.injectedStyleSheet)},Dummy:{name:f(b.internalError)},ContentDiscarded:{name:f(b.contentDiscarded)},ContentSecurityHandler:{name:f(b.contentSecurityHandler)},ContentWebAuthenticationAPI:{name:f(b.contentWebAuthenticationAPI)},ContentFileChooser:{name:f(b.contentFileChooser)},ContentSerial:{name:f(b.contentSerial)},ContentFileSystemAccess:{name:f(b.contentFileSystemAccess)},ContentMediaDevicesDispatcherHost:{name:f(b.contentMediaDevicesDispatcherHost)},ContentWebBluetooth:{name:f(b.contentWebBluetooth)},ContentWebUSB:{name:f(b.contentWebUSB)},ContentMediaSession:{name:f(b.contentMediaSession)},ContentMediaSessionService:{name:f(b.contentMediaSessionService)},ContentMediaPlay:{name:f(b.contentMediaPlay)},ContentScreenReader:{name:f(b.contentScreenReader)},EmbedderPopupBlockerTabHelper:{name:f(b.embedderPopupBlockerTabHelper)},EmbedderSafeBrowsingTriggeredPopupBlocker:{name:f(b.embedderSafeBrowsingTriggeredPopupBlocker)},EmbedderSafeBrowsingThreatDetails:{name:f(b.embedderSafeBrowsingThreatDetails)},EmbedderAppBannerManager:{name:f(b.embedderAppBannerManager)},EmbedderDomDistillerViewerSource:{name:f(b.embedderDomDistillerViewerSource)},EmbedderDomDistillerSelfDeletingRequestDelegate:{name:f(b.embedderDomDistillerSelfDeletingRequestDelegate)},EmbedderOomInterventionTabHelper:{name:f(b.embedderOomInterventionTabHelper)},EmbedderOfflinePage:{name:f(b.embedderOfflinePage)},EmbedderChromePasswordManagerClientBindCredentialManager:{name:f(b.embedderChromePasswordManagerClientBindCredentialManager)},EmbedderPermissionRequestManager:{name:f(b.embedderPermissionRequestManager)},EmbedderModalDialog:{name:f(b.embedderModalDialog)},EmbedderExtensions:{name:f(b.embedderExtensions)},EmbedderExtensionMessaging:{name:f(b.embedderExtensionMessaging)},EmbedderExtensionMessagingForOpenPort:{name:f(b.embedderExtensionMessagingForOpenPort)},EmbedderExtensionSentMessageToCachedFrame:{name:f(b.embedderExtensionSentMessageToCachedFrame)},ErrorDocument:{name:f(b.errorDocument)},FencedFramesEmbedder:{name:f(b.fencedFramesEmbedder)},KeepaliveRequest:{name:f(b.keepaliveRequest)},JsNetworkRequestReceivedCacheControlNoStoreResource:{name:f(b.jsNetworkRequestReceivedCacheControlNoStoreResource)},IndexedDBEvent:{name:f(b.indexedDBEvent)},CookieDisabled:{name:f(b.cookieDisabled)},WebRTCUsedWithCCNS:{name:f(b.webRTCUsedWithCCNS)},WebTransportUsedWithCCNS:{name:f(b.webTransportUsedWithCCNS)},WebSocketUsedWithCCNS:{name:f(b.webSocketUsedWithCCNS)},HTTPAuthRequired:{name:t.i18n.lockedLazyString("HTTPAuthRequired")},CookieFlushed:{name:t.i18n.lockedLazyString("CookieFlushed")},SmartCard:{name:t.i18n.lockedLazyString("SmartCard")},LiveMediaStreamTrack:{name:t.i18n.lockedLazyString("LiveMediaStreamTrack")},UnloadHandler:{name:t.i18n.lockedLazyString("UnloadHandler")},ParserAborted:{name:t.i18n.lockedLazyString("ParserAborted")},BroadcastChannelOnMessage:{name:t.i18n.lockedLazyString("BroadcastChannelOnMessage")},RequestedByWebViewClient:{name:t.i18n.lockedLazyString("RequestedByWebViewClient")},PostMessageByWebViewClient:{name:t.i18n.lockedLazyString("PostMessageByWebViewClient")},WebViewSettingsChanged:{name:t.i18n.lockedLazyString("WebViewSettingsChanged")},WebViewJavaScriptObjectChanged:{name:t.i18n.lockedLazyString("WebViewJavaScriptObjectChanged")},WebViewMessageListenerInjected:{name:t.i18n.lockedLazyString("WebViewMessageListenerInjected")},WebViewSafeBrowsingAllowlistChanged:{name:t.i18n.lockedLazyString("WebViewSafeBrowsingAllowlistChanged")},WebViewDocumentStartJavascriptChanged:{name:t.i18n.lockedLazyString("WebViewDocumentStartJavascriptChanged")},CacheControlNoStoreDeviceBoundSessionTerminated:{name:f(b.cacheControlNoStore)},CacheLimitPrunedOnModerateMemoryPressure:{name:t.i18n.lockedLazyString("CacheLimitPrunedOnModerateMemoryPressure")},CacheLimitPrunedOnCriticalMemoryPressure:{name:t.i18n.lockedLazyString("CacheLimitPrunedOnCriticalMemoryPressure")}};var S=`.inline-icon{vertical-align:sub}.gray-text{color:var(--sys-color-token-subtle);margin:0 0 5px 56px;display:flex;flex-direction:row;align-items:center;flex:auto;overflow-wrap:break-word;overflow:hidden;grid-column-start:span 2}.details-list{margin-left:56px;grid-column-start:span 2}.help-outline-icon{margin:0 2px}.circled-exclamation-icon{margin-right:10px;flex-shrink:0}.status{margin-right:11px;flex-shrink:0}.report-line{grid-column-start:span 2;display:flex;align-items:center;margin:0 30px;line-height:26px}.report-key{color:var(--sys-color-token-subtle);min-width:auto;overflow-wrap:break-word;align-self:start}.report-value{padding:0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}devtools-report-value:has(devtools-tree-outline){margin-left:var(--sys-size-7)}.tree-outline li .selection{margin-left:-5px}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=${import.meta.resolve("./backForwardCacheView.css")} */`;const{html:T}=n,$={mainFrame:"Main Frame",backForwardCacheTitle:"Back/forward cache",unavailable:"unavailable",url:"URL",unknown:"Unknown Status",normalNavigation:"Not served from back/forward cache: to trigger back/forward cache, use Microsoft Edge's back/forward buttons, or use the test button below to automatically navigate away and back.",restoredFromBFCache:"Successfully served from back/forward cache.",pageSupportNeeded:"Actionable",pageSupportNeededExplanation:"These reasons are actionable i.e. they can be cleaned up to make the page eligible for back/forward cache.",circumstantial:"Not Actionable",circumstantialExplanation:"These reasons are not actionable i.e. caching was prevented by something outside of the direct control of the page.",supportPending:"Pending Support",runTest:"Test back/forward cache",runningTest:"Running test",learnMore:"Learn more: back/forward cache eligibility",neverUseUnload:"Learn more: Never use unload handler",supportPendingExplanation:"Microsoft Edge support for these reasons is pending i.e. they will not prevent the page from being eligible for back/forward cache in a future version of Microsoft Edge.",blockingExtensionId:"Extension id: ",framesTitle:"Frames",issuesInSingleFrame:"{n, plural, =1 {# issue found in 1 frame.} other {# issues found in 1 frame.}}",issuesInMultipleFrames:"{n, plural, =1 {# issue found in {m} frames.} other {# issues found in {m} frames.}}",framesPerIssue:"{n, plural, =1 {# frame} other {# frames}}",blankURLTitle:"Blank URL [{PH1}]",filesPerIssue:"{n, plural, =1 {# file} other {# files}}"},x=t.i18n.registerUIStrings("panels/application/components/BackForwardCacheView.ts",$),C=t.i18n.getLocalizedString.bind(void 0,x);class P extends o.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t="Result";#r=0;#o=0;constructor(){super(),this.#a()?.addEventListener(r.ResourceTreeModel.Events.PrimaryPageChanged,this.render,this),this.#a()?.addEventListener(r.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated,this.render,this)}#a(){const e=r.TargetManager.TargetManager.instance().primaryPageTarget();return e?.model(r.ResourceTreeModel.ResourceTreeModel)||null}#i(){return this.#a()?.mainFrame||null}connectedCallback(){this.parentElement?.classList.add("overflow-auto")}async render(){await a.write("BackForwardCacheView render",()=>{n.render(T`
        <style>${S}</style>
        <devtools-report .data=${{reportTitle:C($.backForwardCacheTitle)}} jslog=${s.pane("back-forward-cache")}>

          ${this.#n()}
        </devtools-report>
      `,this.#e,{host:this})})}#s(){r.TargetManager.TargetManager.instance().removeModelListener(r.ResourceTreeModel.ResourceTreeModel,r.ResourceTreeModel.Events.FrameNavigated,this.#s,this),this.#t="Result",this.render()}async#l(){r.TargetManager.TargetManager.instance().removeModelListener(r.ResourceTreeModel.ResourceTreeModel,r.ResourceTreeModel.Events.FrameNavigated,this.#l,this),await this.#d(50)}async#d(e){const t=r.TargetManager.TargetManager.instance().primaryPageTarget(),o=t?.model(r.ResourceTreeModel.ResourceTreeModel),a=await(o?.navigationHistory());o&&a&&(a.currentIndex===this.#o?window.setTimeout(this.#d.bind(this,2*e),e):(r.TargetManager.TargetManager.instance().addModelListener(r.ResourceTreeModel.ResourceTreeModel,r.ResourceTreeModel.Events.FrameNavigated,this.#s,this),o.navigateToHistoryEntry(a.entries[a.currentIndex-1])))}async#c(){const e=r.TargetManager.TargetManager.instance().primaryPageTarget(),t=e?.model(r.ResourceTreeModel.ResourceTreeModel),o=await(t?.navigationHistory());t&&o&&(this.#o=o.currentIndex,this.#t="Running",this.render(),r.TargetManager.TargetManager.instance().addModelListener(r.ResourceTreeModel.ResourceTreeModel,r.ResourceTreeModel.Events.FrameNavigated,this.#l,this),t.navigate("chrome://terms"))}#n(){const t=this.#i();if(!t)return T`
        <devtools-report-key>
          ${C($.mainFrame)}
        </devtools-report-key>
        <devtools-report-value>
          ${C($.unavailable)}
        </devtools-report-value>
      `;const r="Running"===this.#t,o=e.ParsedURL.schemeIs(t.url,"devtools:");return T`
      ${this.#h(t.backForwardCacheDetails.restoredFromCache)}
      <devtools-report-key>${C($.url)}</devtools-report-key>
      <devtools-report-value>${t.url}</devtools-report-value>
      ${this.#u(t.backForwardCacheDetails.explanationsTree)}
      <devtools-report-section>
        <devtools-button
          aria-label=${C($.runTest)}
          .disabled=${r||o}
          .spinner=${r}
          .variant=${"primary"}
          @click=${this.#c}
          jslog=${s.action("back-forward-cache.run-test").track({click:!0})}>
          ${r?T`
            ${C($.runningTest)}`:`\n            ${C($.runTest)}\n          `}
        </devtools-button>
      </devtools-report-section>
      <devtools-report-divider>
      </devtools-report-divider>
      ${this.#p(t.backForwardCacheDetails.explanations,t.backForwardCacheDetails.explanationsTree)}
      <devtools-report-section>
        <x-link href="https://web.dev/bfcache/" class="link"
        jslog=${s.action("learn-more.eligibility").track({click:!0})}>
          ${C($.learnMore)}
        </x-link>
      </devtools-report-section>
    `}#u(e){if(!e||0===e.explanations.length&&0===e.children.length)return n.nothing;const t=this.#g(e,{blankCount:1});t.node.treeNodeData.iconName="frame";let r="";r=1===t.frameCount?C($.issuesInSingleFrame,{n:t.issueCount}):C($.issuesInMultipleFrames,{n:t.issueCount,m:t.frameCount});const o={treeNodeData:{text:r},id:"root",children:()=>Promise.resolve([t.node])};return T`
      <devtools-report-key jslog=${s.section("frames")}>${C($.framesTitle)}</devtools-report-key>
      <devtools-report-value>
        <devtools-tree-outline .data=${{tree:[o],defaultRenderer:function(e){return T`
        <div class="text-ellipsis">
          ${e.treeNodeData.iconName?T`
            <devtools-icon class="inline-icon extra-large" .name=${e.treeNodeData.iconName} style="margin-bottom: -3px;">
            </devtools-icon>
          `:n.nothing}
          ${e.treeNodeData.text}
        </div>
      `},compact:!0}}>
        </devtools-tree-outline>
      </devtools-report-value>
    `}#g(e,t){let r=1,o=0;const a=[];let i="";e.url.length?i=e.url:(i=C($.blankURLTitle,{PH1:t.blankCount}),t.blankCount+=1);for(const t of e.explanations){const e={treeNodeData:{text:t.reason},id:String(this.#r++)};o+=1,a.push(e)}for(const i of e.children){const e=this.#g(i,t);e.issueCount>0&&(a.push(e.node),o+=e.issueCount,r+=e.frameCount)}let n={treeNodeData:{text:`(${o}) ${i}`},id:String(this.#r++)};return a.length?(n={...n,children:()=>Promise.resolve(a)},n.treeNodeData.iconName="iframe"):e.url.length||(t.blankCount-=1),{node:n,frameCount:r,issueCount:o}}#h(e){switch(e){case!0:return T`
          <devtools-report-section>
            <div class="status extra-large">
              <devtools-icon class="inline-icon extra-large" name="check-circle" style="color: var(--icon-checkmark-green);">
              </devtools-icon>
            </div>
            ${C($.restoredFromBFCache)}
          </devtools-report-section>
        `;case!1:return T`
          <devtools-report-section>
            <div class="status">
              <devtools-icon class="inline-icon extra-large" name="clear">
              </devtools-icon>
            </div>
            ${C($.normalNavigation)}
          </devtools-report-section>
        `}return T`
    <devtools-report-section>
      ${C($.unknown)}
    </devtools-report-section>
    `}#m(e,t,r){let o=e.url;0===o.length&&(o=C($.blankURLTitle,{PH1:t.blankCount}),t.blankCount+=1),e.explanations.forEach(e=>{let t=r.get(e.reason);void 0===t?(t=[o],r.set(e.reason,t)):t.push(o)}),e.children.map(e=>{this.#m(e,t,r)})}#p(e,t){if(0===e.length)return n.nothing;const r=e.filter(e=>"PageSupportNeeded"===e.type),o=e.filter(e=>"SupportPending"===e.type),a=e.filter(e=>"Circumstantial"===e.type),i=new Map;return t&&this.#m(t,{blankCount:1},i),T`
      ${this.#v(C($.pageSupportNeeded),C($.pageSupportNeededExplanation),r,i)}
      ${this.#v(C($.supportPending),C($.supportPendingExplanation),o,i)}
      ${this.#v(C($.circumstantial),C($.circumstantialExplanation),a,i)}
    `}#v(e,t,r,o){return T`
      ${r.length>0?T`
        <devtools-report-section-header>
          ${e}
          <div class="help-outline-icon">
            <devtools-icon class="inline-icon medium" name="help" title=${t}>
            </devtools-icon>
          </div>
        </devtools-report-section-header>
        ${r.map(e=>this.#k(e,o.get(e.reason)))}
      `:n.nothing}
    `}#b(e){if("EmbedderExtensionSentMessageToCachedFrame"===e.reason&&e.context){const t="chrome://extensions/?id="+e.context;return T`${C($.blockingExtensionId)}
      <devtools-chrome-link .href=${t}>${e.context}</devtools-chrome-link>`}return n.nothing}#w(e){if(void 0===e||0===e.length)return n.nothing;const t=[T`<div>${C($.framesPerIssue,{n:e.length})}</div>`];return t.push(...e.map(e=>T`<div class="text-ellipsis" title=${e}
    jslog=${s.treeItem()}>${e}</div>`)),T`
      <div class="details-list"
      jslog=${s.tree("frames-per-issue")}>
        <devtools-expandable-list .data=${{rows:t,title:C($.framesPerIssue,{n:e.length})}}
        jslog=${s.treeItem()}></devtools-expandable-list>
      </div>
    `}#f(e){return"UnloadHandlerExistsInMainFrame"===e.reason||"UnloadHandlerExistsInSubFrame"===e.reason?T`
        <x-link href="https://web.dev/bfcache/#never-use-the-unload-event" class="link"
        jslog=${s.action("learn-more.never-use-unload").track({click:!0})}>
          ${C($.neverUseUnload)}
        </x-link>`:n.nothing}#y(e){if(void 0===e||0===e.length)return n.nothing;const t=new i.Linkifier.Linkifier(50),r=[T`<div>${C($.filesPerIssue,{n:e.length})}</div>`];return r.push(...e.map(e=>T`${t.linkifyScriptLocation(null,null,e.url,e.lineNumber,{columnNumber:e.columnNumber,showColumnNumber:!0,inlineFrameIndex:0})}`)),T`
      <div class="details-list">
        <devtools-expandable-list .data=${{rows:r}}></devtools-expandable-list>
      </div>
    `}#k(e,t){return T`
      <devtools-report-section>
        ${e.reason in y?T`
            <div class="circled-exclamation-icon">
              <devtools-icon class="inline-icon medium" style="color: var(--icon-warning)" name="warning">
              </devtools-icon>
            </div>
            <div>
              ${y[e.reason].name()}
              ${this.#f(e)}
              ${this.#b(e)}
           </div>`:n.nothing}
      </devtools-report-section>
      <div class="gray-text">
        ${e.reason}
      </div>
      ${this.#y(e.details)}
      ${this.#w(t)}
    `}}customElements.define("devtools-resources-back-forward-cache-view",P);var R=Object.freeze({__proto__:null,BackForwardCacheView:P}),M=`devtools-data-grid{margin-top:0}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=${import.meta.resolve("./bounceTrackingMitigationsView.css")} */`;const{html:D}=n,I={bounceTrackingMitigationsTitle:"Bounce tracking mitigations",forceRun:"Force run",runningMitigations:"Running",stateDeletedFor:"State was deleted for the following sites:",checkingPotentialTrackers:"Checking for potential bounce tracking sites.",learnMore:"Learn more: Bounce Tracking Mitigations",noPotentialBounceTrackersIdentified:"State was not cleared for any potential bounce tracking sites. Either none were identified or third-party cookies are not blocked.",featureDisabledStr:"Bounce tracking mitigations are disabled."},B=t.i18n.registerUIStrings("panels/application/components/BounceTrackingMitigationsView.ts",I),E=t.i18n.getLocalizedString.bind(void 0,B);class F extends o.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#S=[];#t="Result";#T=!1;#$=!1;connectedCallback(){this.#x(),this.parentElement?.classList.add("overflow-auto")}async#x(){n.render(D`
      <style>${M}</style>
      <devtools-report .data=${{reportTitle:E(I.bounceTrackingMitigationsTitle)}}
                       jslog=${s.pane("bounce-tracking-mitigations")}>
        ${await this.#n()}
      </devtools-report>
    `,this.#e,{host:this})}async#n(){return this.#T||await this.#C(),"Disabled"===this.#t?D`
        <devtools-report-section>
          ${E(I.featureDisabledStr)}
        </devtools-report-section>
      `:D`
      <devtools-report-section>
        ${this.#P()}
      </devtools-report-section>
      ${this.#R()}
      <devtools-report-divider>
      </devtools-report-divider>
      <devtools-report-section>
        <x-link href="https://privacycg.github.io/nav-tracking-mitigations/#bounce-tracking-mitigations" class="link"
        jslog=${s.link("learn-more").track({click:!0})}>
          ${E(I.learnMore)}
        </x-link>
      </devtools-report-section>
    `}#P(){const e="Running"===this.#t;return D`
      <devtools-button
        aria-label=${E(I.forceRun)}
        .disabled=${e}
        .spinner=${e}
        .variant=${"primary"}
        @click=${this.#M}
        jslog=${s.action("force-run").track({click:!0})}>
        ${e?D`
          ${E(I.runningMitigations)}`:`\n          ${E(I.forceRun)}\n        `}
      </devtools-button>
    `}#R(){return this.#$?0===this.#S.length?D`
        <devtools-report-section>
        ${"Running"===this.#t?D`
          ${E(I.checkingPotentialTrackers)}`:`\n          ${E(I.noPotentialBounceTrackersIdentified)}\n        `}
        </devtools-report-section>
      `:D`
      <devtools-report-section>
        <devtools-data-grid striped inline>
          <table>
            <tr>
              <th id="sites" weight="10" sortable>
                ${E(I.stateDeletedFor)}
              </th>
            </tr>
            ${this.#S.map(e=>D`
              <tr><td>${e}</td></tr>`)}
          </table>
        </devtools-data-grid>
      </devtools-report-section>
    `:n.nothing}async#M(){const e=r.TargetManager.TargetManager.instance().primaryPageTarget();if(!e)return;this.#$=!0,this.#t="Running",this.#x();const t=await e.storageAgent().invoke_runBounceTrackingMitigations();this.#S=[],t.deletedSites.forEach(e=>{this.#S.push(e)}),this.#D()}#D(){this.#t="Result",this.#x()}async#C(){this.#T=!0;const e=r.TargetManager.TargetManager.instance().primaryPageTarget();e&&((await e.systemInfo().invoke_getFeatureState({featureState:"DIPS"})).featureEnabled||(this.#t="Disabled"))}}customElements.define("devtools-bounce-tracking-mitigations-view",F);var A=Object.freeze({__proto__:null,BounceTrackingMitigationsView:F,i18nString:E}),L=`@scope to (devtools-widget > *){:scope{overflow:auto;height:100%}.endpoints-container{height:100%;display:flex;flex-direction:column;width:100%}.endpoints-header{font-size:15px;background-color:var(--sys-color-surface2);padding:1px 4px;flex-shrink:0}devtools-data-grid{flex:auto}}\n/*# sourceURL=${import.meta.resolve("./endpointsGrid.css")} */`;const N={noEndpointsToDisplay:"No endpoints to display",endpointsDescription:"Here you will find the list of endpoints that receive the reports"},O=t.i18n.registerUIStrings("panels/application/components/EndpointsGrid.ts",N),W=t.i18n.getLocalizedString.bind(void 0,O),{render:U,html:H}=n,q=(e,r,o)=>{U(H`
    <style>${L}</style>
    <style>${l.inspectorCommonStyles}</style>
    <div class="endpoints-container" jslog=${s.section("endpoints")}>
      <div class="endpoints-header">${t.i18n.lockedString("Endpoints")}</div>
      ${e.endpoints.size>0?H`
        <devtools-data-grid striped>
         <table>
          <tr>
            <th id="origin" weight="30">${t.i18n.lockedString("Origin")}</th>
            <th id="name" weight="20">${t.i18n.lockedString("Name")}</th>
            <th id="url" weight="30">${t.i18n.lockedString("URL")}</th>
          </tr>
          ${Array.from(e.endpoints).map(([e,t])=>t.map(t=>H`<tr>
                <td>${e}</td>
                <td>${t.groupName}</td>
                <td>${t.url}</td>
              </tr>`)).flat()}
          </table>
        </devtools-data-grid>
      `:H`
        <div class="empty-state">
          <span class="empty-state-header">${W(N.noEndpointsToDisplay)}</span>
          <span class="empty-state-description">${W(N.endpointsDescription)}</span>
        </div>
      `}
    </div>
  `,o)};class j extends l.Widget.Widget{endpoints=new Map;#I;constructor(e,t=q){super(e),this.#I=t,this.requestUpdate()}performUpdate(){this.#I({endpoints:this.endpoints},void 0,this.contentElement)}}var _=Object.freeze({__proto__:null,DEFAULT_VIEW:q,EndpointsGrid:j,i18nString:W}),V=`button.link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px;border:none;background:none;font-family:inherit;font-size:inherit}\n/*# sourceURL=${import.meta.resolve("./stackTraceLinkButton.css")} */`,z=`.stack-trace-row{display:flex}.stack-trace-function-name{width:100px}.stack-trace-source-location{display:flex;overflow:hidden}.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.stack-trace-source-location .text-ellipsis{padding-right:2px}.ignore-list-link{opacity:60%}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px;border:none;background:none;font-family:inherit;font-size:var(--sys-size-6);&:focus-visible{outline:2px solid var(--sys-color-state-focus-ring);outline-offset:0;border-radius:var(--sys-shape-corner-extra-small)}}\n/*# sourceURL=${import.meta.resolve("./stackTraceRow.css")} */`;const{html:G}=n,K={cannotRenderStackTrace:"Cannot render stack trace",showSMoreFrames:"{n, plural, =1 {Show # more frame} other {Show # more frames}}",showLess:"Show less",creationStackTrace:"Frame Creation `Stack Trace`"},X=t.i18n.registerUIStrings("panels/application/components/StackTrace.ts",K),J=t.i18n.getLocalizedString.bind(void 0,X);class Y extends HTMLElement{#e=this.attachShadow({mode:"open"});#B=null;set data(e){this.#B=e.stackTraceRowItem,this.#x()}#x(){this.#B&&n.render(G`
      <style>${z}</style>
      <div class="stack-trace-row">
              <div class="stack-trace-function-name text-ellipsis" title=${this.#B.functionName}>
                ${this.#B.functionName}
              </div>
              <div class="stack-trace-source-location">
                ${this.#B.link?G`<div class="text-ellipsis">\xA0@\xA0${this.#B.link}</div>`:n.nothing}
              </div>
            </div>
    `,this.#e,{host:this})}}class Q extends HTMLElement{#e=this.attachShadow({mode:"open"});#E=()=>{};#F=null;#A=!1;set data(e){this.#E=e.onShowAllClick,this.#F=e.hiddenCallFramesCount,this.#A=e.expandedView,this.#x()}#x(){if(!this.#F)return;const e=this.#A?J(K.showLess):J(K.showSMoreFrames,{n:this.#F});n.render(G`
      <style>${V}</style>
      <div class="stack-trace-row">
          <button class="link" @click=${()=>this.#E()}>
            ${e}
          </button>
        </div>
    `,this.#e,{host:this})}}class Z extends HTMLElement{#e=this.attachShadow({mode:"open"});#L=new i.Linkifier.Linkifier;#N=[];#O=!1;set data(e){const t=e.frame,{creationStackTrace:r,creationStackTraceTarget:o}=t.getCreationStackTraceData();r&&(this.#N=e.buildStackTraceRows(r,o,this.#L,!0,this.#W.bind(this))),this.#x()}#W(e){this.#N=e,this.#x()}#U(){this.#O=!this.#O,this.#x()}createRowTemplates(){const e=[];let t=0;for(const r of this.#N){let o=!1;if("link"in r&&r.link){const e=i.Linkifier.Linkifier.uiLocation(r.link);o=Boolean(e?.isIgnoreListed())}!this.#O&&o||("functionName"in r&&e.push(G`
          <devtools-stack-trace-row data-stack-trace-row .data=${{stackTraceRowItem:r}}></devtools-stack-trace-row>`),"asyncDescription"in r&&e.push(G`
            <div>${r.asyncDescription}</div>
          `)),"functionName"in r&&o&&t++}return t&&e.push(G`
      <devtools-stack-trace-link-button data-stack-trace-row .data=${{onShowAllClick:this.#U.bind(this),hiddenCallFramesCount:t,expandedView:this.#O}}></devtools-stack-trace-link-button>
      `),e}#x(){if(!this.#N.length)return void n.render(G`
          <span>${J(K.cannotRenderStackTrace)}</span>
        `,this.#e,{host:this});const e=this.createRowTemplates();n.render(G`
        <devtools-expandable-list .data=${{rows:e,title:J(K.creationStackTrace)}}
                                  jslog=${s.tree()}>
        </devtools-expandable-list>
      `,this.#e,{host:this})}}customElements.define("devtools-stack-trace-row",Y),customElements.define("devtools-stack-trace-link-button",Q),customElements.define("devtools-resources-stack-trace",Z);var ee=Object.freeze({__proto__:null,StackTrace:Z,StackTraceLinkButton:Q,StackTraceRow:Y}),te=`.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}button ~ .text-ellipsis{padding-left:2px}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px;padding:0;margin-left:var(--sys-size-3);white-space:nowrap}button.link{border:none;background:none;font-family:inherit;font-size:inherit;height:16px}button.link:has(devtools-icon){margin-top:5px}devtools-button.help-button{top:4px;position:relative}button.text-link{padding-left:2px;height:26px}.inline-button{padding-left:1ex}.inline-comment{padding-left:1ex;white-space:pre-line}.inline-comment::before{content:"("}.inline-comment::after{content:")"}.inline-name{color:var(--sys-color-token-subtle);padding-inline:4px;user-select:none;white-space:pre-line}.inline-items{display:flex}.span-cols{grid-column-start:span 2;margin-left:var(--sys-size-9);line-height:28px}.report-section:has(.link){line-height:var(--sys-size-12)}.without-min-width{min-width:auto}.bold{font-weight:bold}.link:not(button):has(devtools-icon){vertical-align:baseline;margin-inline-start:3px}.inline-icon{margin-bottom:-5px;width:18px;height:18px;vertical-align:baseline}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=${import.meta.resolve("./frameDetailsReportView.css")} */`,re=`:host .badge-error{--override-adorner-text-color:var(--sys-color-error-bright);--override-adorner-border-color:var(--sys-color-error-bright)}:host .badge-success{--override-adorner-text-color:var(--sys-color-tertiary);--override-adorner-border-color:var(--sys-color-tertiary)}:host .badge-secondary{--override-adorner-text-color:var(--sys-color-token-subtle);--override-adorner-border-color:var(--sys-color-token-subtle)}:host{font-family:var(--source-code-font-family)}\n/*# sourceURL=${import.meta.resolve("./badge.css")} */`,oe=`.content{display:grid;grid-template-columns:min-content 1fr}.key{color:var(--sys-color-token-subtle);padding:0 6px;text-align:right;white-space:pre}.value{color:var(--sys-color-token-subtle);margin-inline-start:0;padding:0 6px}.error-text{color:var(--sys-color-error-bright);font-weight:bold}\n/*# sourceURL=${import.meta.resolve("./originTrialTokenRows.css")} */`,ae=`.status-badge{border-radius:4px;padding:4px;background:var(--sys-color-neutral-container);& > devtools-icon{vertical-align:sub}}\n/*# sourceURL=${import.meta.resolve("./originTrialTreeView.css")} */`;const{html:ie,Directives:{ifDefined:ne}}=n,se={origin:"Origin",trialName:"Trial Name",expiryTime:"Expiry Time",usageRestriction:"Usage Restriction",isThirdParty:"Third Party",matchSubDomains:"Subdomain Matching",rawTokenText:"Raw Token",status:"Token Status",token:"Token",tokens:"{PH1} tokens",noTrialTokens:"No trial tokens"},le=t.i18n.registerUIStrings("panels/application/components/OriginTrialTreeView.ts",se),de=t.i18n.getLocalizedString.bind(void 0,le);class ce extends HTMLElement{#e=this.attachShadow({mode:"open"});#H=new m.Adorner.Adorner;set data(e){this.#x(e)}#x(e){const t=document.createElement("span");t.textContent=e.badgeContent,this.#H.data={name:"badge",content:t},this.#H.classList.add(`badge-${e.style}`),n.render(ie`
      <style>${re}</style>
      ${this.#H}
    `,this.#e,{host:this})}}function he(e){return{treeNodeData:e,id:"OriginTrialTreeNode#"+e.trialName,children:async()=>e.tokensWithStatus.length>1?e.tokensWithStatus.map(ue):ge(e.tokensWithStatus[0]),renderer:e=>{const t=e.treeNodeData,r=ie`
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:de(se.tokens,{PH1:t.tokensWithStatus.length}),style:"secondary"}}></devtools-resources-origin-trial-tree-view-badge>
      `;return ie`
        ${t.trialName}
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:t.status,style:"Enabled"===t.status?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>
        ${t.tokensWithStatus.length>1?r:n.nothing}
      `}}}function ue(e){return{treeNodeData:e.status,id:"TokenNode#"+e.rawTokenText,children:async()=>ge(e),renderer:(e,t)=>{const r=e.treeNodeData,o=ie`
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:r,style:"Success"===r?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>
      `;return ie`${de(se.token)} ${t.isExpanded?n.nothing:o}`}}}function pe(e){return ie`
    <devtools-resources-origin-trial-token-rows .data=${{node:e}}>
    </devtools-resources-origin-trial-token-rows>
    `}function ge(e){return[{treeNodeData:e,id:"TokenDetailsNode#"+e.rawTokenText,renderer:pe},(t=e.rawTokenText,{treeNodeData:de(se.rawTokenText),id:"TokenRawTextContainerNode#"+t,children:async()=>[{treeNodeData:t,id:"TokenRawTextNode#"+t,renderer:e=>{const t=e.treeNodeData;return ie`
        <div style="overflow-wrap: break-word;">
          ${t}
        </div>
        `}}]})];var t}function me(e){return ie`${String(e.treeNodeData)}`}customElements.define("devtools-resources-origin-trial-tree-view-badge",ce);class ve extends HTMLElement{#e=this.attachShadow({mode:"open"});#q=null;#j=[];#_=new Intl.DateTimeFormat(t.DevToolsLocale.DevToolsLocale.instance().locale,{dateStyle:"long",timeStyle:"long"});set data(e){this.#q=e.node.treeNodeData,this.#V()}connectedCallback(){this.#x()}#z=(e,t)=>ie`
        <div class=${ne(t?"error-text":void 0)}>
          ${e}
        </div>`;#V(){this.#q?.parsedToken&&(this.#j=[{name:de(se.origin),value:this.#z(this.#q.parsedToken.origin,"WrongOrigin"===this.#q.status)},{name:de(se.expiryTime),value:this.#z(this.#_.format(1e3*this.#q.parsedToken.expiryTime),"Expired"===this.#q.status)},{name:de(se.usageRestriction),value:this.#z(this.#q.parsedToken.usageRestriction)},{name:de(se.isThirdParty),value:this.#z(this.#q.parsedToken.isThirdParty.toString())},{name:de(se.matchSubDomains),value:this.#z(this.#q.parsedToken.matchSubDomains.toString())}],"UnknownTrial"===this.#q.status&&(this.#j=[{name:de(se.trialName),value:this.#z(this.#q.parsedToken.trialName)},...this.#j]))}#x(){if(!this.#q)return;const e=[{name:de(se.status),value:ie`
          <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:this.#q.status,style:"Success"===this.#q.status?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>`},...this.#j].map(e=>ie`
          <div class="key">${e.name}</div>
          <div class="value">${e.value}</div>
          `);n.render(ie`
      <style>${oe}</style>
      <div class="content">
        ${e}
      </div>
    `,this.#e,{host:this})}}customElements.define("devtools-resources-origin-trial-token-rows",ve);class ke extends HTMLElement{#e=this.attachShadow({mode:"open"});set data(e){this.#x(e.trials)}#x(e){e.length?n.render(ie`
      <style>${ae}</style>
      <devtools-tree-outline .data=${{tree:e.map(he),defaultRenderer:me}}>
      </devtools-tree-outline>
    `,this.#e,{host:this}):n.render(ie`
    <style>${ae}</style>
    <span class="status-badge">
      <devtools-icon class="medium" name="clear"></devtools-icon>
      <span>${de(se.noTrialTokens)}</span>
    </span>`,this.#e,{host:this})}}customElements.define("devtools-resources-origin-trial-tree-view",ke);var be=Object.freeze({__proto__:null,Badge:ce,OriginTrialTokenRows:ve,OriginTrialTreeView:ke}),we=`:host{display:contents}.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}button.link{border:none;background:none;font-family:inherit;font-size:inherit}.policies-list{padding-top:3px}.permissions-row{display:flex;line-height:22px}.permissions-row div{padding-right:5px}.feature-name{width:135px}.allowed-icon{vertical-align:sub}.block-reason{width:215px}.disabled-features-button{padding-left:var(--sys-size-3)}\n/*# sourceURL=${import.meta.resolve("./permissionsPolicySection.css")} */`;const{html:fe}=n,ye={showDetails:"Show details",hideDetails:"Hide details",allowedFeatures:"Allowed Features",disabledFeatures:"Disabled Features",clickToShowHeader:'Click to reveal the request whose "`Permissions-Policy`" HTTP header disables this feature.',clickToShowIframe:"Click to reveal the top-most iframe which does not allow this feature in the elements panel.",disabledByIframe:'missing in iframe "`allow`" attribute',disabledByHeader:'disabled by "`Permissions-Policy`" header',disabledByFencedFrame:"disabled inside a `fencedframe`"},Se=t.i18n.registerUIStrings("panels/application/components/PermissionsPolicySection.ts",ye),Te=t.i18n.getLocalizedString.bind(void 0,Se);function $e(e,t,r,o){return fe`
  <devtools-button
    .iconName=${e}
    title=${t}
    aria-label=${t}
    .variant=${"icon"}
    .size=${"SMALL"}
    @click=${r}
    jslog=${s.action().track({click:!0}).context(o)}></devtools-button>
  `}class xe extends HTMLElement{#e=this.attachShadow({mode:"open"});#G={policies:[],showDetails:!1};set data(e){this.#G=e,this.#x()}#K(){this.#G.showDetails=!this.#G.showDetails,this.#x()}#X(){const e=this.#G.policies.filter(e=>e.allowed).map(e=>e.feature).sort();return e.length?fe`
      <devtools-report-key>${Te(ye.allowedFeatures)}</devtools-report-key>
      <devtools-report-value>
        ${e.join(", ")}
      </devtools-report-value>
    `:n.nothing}async#J(){const t=this.#G.policies.filter(e=>!e.allowed).sort((e,t)=>e.feature.localeCompare(t.feature));if(!t.length)return n.nothing;if(!this.#G.showDetails)return fe`
        <devtools-report-key>${Te(ye.disabledFeatures)}</devtools-report-key>
        <devtools-report-value>
          ${t.map(e=>e.feature).join(", ")}
          <devtools-button
          class="disabled-features-button"
          .variant=${"outlined"}
          @click=${()=>this.#K()}
          jslog=${s.action("show-disabled-features-details").track({click:!0})}>${Te(ye.showDetails)}
        </devtools-button>
        </devtools-report-value>
      `;const o=r.FrameManager.FrameManager.instance(),a=await Promise.all(t.map(async t=>{const r=t.locator?o.getFrame(t.locator.frameId):null,a=t.locator?.blockReason,i=await("IframeAttribute"===a&&r?.getOwnerDOMNodeOrDocument()),s=r?.resourceForURL(r.url),l="Header"===a&&s?.request,d=(()=>{switch(a){case"IframeAttribute":return Te(ye.disabledByIframe);case"Header":return Te(ye.disabledByHeader);case"InFencedFrameTree":return Te(ye.disabledByFencedFrame);default:return""}})();return fe`
        <div class="permissions-row">
          <div>
            <devtools-icon class="allowed-icon extra-large" name="cross-circle">
            </devtools-icon>
          </div>
          <div class="feature-name text-ellipsis">
            ${t.feature}
          </div>
          <div class="block-reason">${d}</div>
          <div>
            ${i?$e("code-circle",Te(ye.clickToShowIframe),()=>e.Revealer.reveal(i),"reveal-in-elements"):n.nothing}
            ${l?$e("arrow-up-down-circle",Te(ye.clickToShowHeader),async()=>{if(!l)return;const t=l.responseHeaderValue("permissions-policy")?"permissions-policy":"feature-policy",r=p.UIRequestLocation.UIRequestLocation.responseHeaderMatch(l,{name:t,value:""});await e.Revealer.reveal(r)},"reveal-in-network"):n.nothing}
          </div>
        </div>
      `}));return fe`
      <devtools-report-key>${Te(ye.disabledFeatures)}</devtools-report-key>
      <devtools-report-value class="policies-list">
        ${a}
        <div class="permissions-row">
        <devtools-button
          .variant=${"outlined"}
          @click=${()=>this.#K()}
          jslog=${s.action("hide-disabled-features-details").track({click:!0})}>${Te(ye.hideDetails)}
        </devtools-button>
        </div>
      </devtools-report-value>
    `}async#x(){await a.write("PermissionsPolicySection render",()=>{n.render(fe`
          <style>${we}</style>
          <devtools-report-section-header>${t.i18n.lockedString("Permissions Policy")}</devtools-report-section-header>
          ${this.#X()}
          ${this.#G.policies.findIndex(e=>e.allowed)>0||this.#G.policies.findIndex(e=>!e.allowed)>0?fe`<devtools-report-divider class="subsection-divider"></devtools-report-divider>`:n.nothing}
          ${n.Directives.until(this.#J(),n.nothing)}
          <devtools-report-divider></devtools-report-divider>
        `,this.#e,{host:this})})}}customElements.define("devtools-resources-permissions-policy-section",xe);const{html:Ce}=n,Pe={additionalInformation:"Additional Information",thisAdditionalDebugging:"This additional (debugging) information is shown because the 'Protocol Monitor' experiment is enabled.",frameId:"Frame ID",document:"Document",url:"URL",clickToOpenInSourcesPanel:"Click to open in Sources panel",clickToOpenInNetworkPanel:"Click to open in Network panel",unreachableUrl:"Unreachable URL",clickToOpenInNetworkPanelMight:"Click to open in Network panel (might require page reload)",origin:"Origin",ownerElement:"Owner Element",clickToOpenInElementsPanel:"Click to open in Elements panel",adStatus:"Ad Status",rootDescription:"This frame has been identified as the root frame of an ad",root:"root",childDescription:"This frame has been identified as a child frame of an ad",child:"child",securityIsolation:"Security & Isolation",contentSecurityPolicy:"Content Security Policy (CSP)",secureContext:"Secure Context",yes:"Yes",no:"No",crossoriginIsolated:"Cross-Origin Isolated",localhostIsAlwaysASecureContext:"`Localhost` is always a secure context",aFrameAncestorIsAnInsecure:"A frame ancestor is an insecure context",theFramesSchemeIsInsecure:"The frame's scheme is insecure",reportingTo:"reporting to",apiAvailability:"API availability",availabilityOfCertainApisDepends:"Availability of certain APIs depends on the document being cross-origin isolated.",availableTransferable:"available, transferable",availableNotTransferable:"available, not transferable",unavailable:"unavailable",sharedarraybufferConstructorIs:"`SharedArrayBuffer` constructor is available and `SABs` can be transferred via `postMessage`",sharedarraybufferConstructorIsAvailable:"`SharedArrayBuffer` constructor is available but `SABs` cannot be transferred via `postMessage`",willRequireCrossoriginIsolated:"⚠︝ will require cross-origin isolated context in the future",requiresCrossoriginIsolated:"requires cross-origin isolated context",transferRequiresCrossoriginIsolatedPermission:"`SharedArrayBuffer` transfer requires enabling the permission policy:",available:"available",thePerformanceAPI:"The `performance.measureUserAgentSpecificMemory()` API is available",thePerformancemeasureuseragentspecificmemory:"The `performance.measureUserAgentSpecificMemory()` API is not available",measureMemory:"Measure Memory",learnMore:"Learn more",creationStackTrace:"Frame Creation `Stack Trace`",creationStackTraceExplanation:"This frame was created programmatically. The `stack trace` shows where this happened.",parentIsAdExplanation:"This frame is considered an ad frame because its parent frame is an ad frame.",matchedBlockingRuleExplanation:"This frame is considered an ad frame because its current (or previous) main document is an ad resource.",createdByAdScriptExplanation:"There was an ad script in the `(async) stack` when this frame was created. Examining the creation `stack trace` of this frame might provide more insight.",creatorAdScriptAncestry:"Creator Ad Script Ancestry",rootScriptFilterlistRule:"Root Script Filterlist Rule",none:"None",originTrialsExplanation:"Origin trials give you access to a new or experimental feature."},Re=t.i18n.registerUIStrings("panels/application/components/FrameDetailsView.ts",Pe),Me=t.i18n.getLocalizedString.bind(void 0,Re);class De extends o.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#Y;#Q=null;#Z=!1;#ee=null;#G={policies:[],showDetails:!1};#te=new ke;#L=new i.Linkifier.Linkifier;#re=null;constructor(e){super(),this.#Y=e,this.render()}connectedCallback(){this.parentElement?.classList.add("overflow-auto"),this.#Z=c.Runtime.experiments.isEnabled("protocol-monitor")}async render(){const e=await(this.#Y?.parentFrame()?.getAdScriptAncestry(this.#Y?.id));if(e&&e.ancestryChain.length>0){this.#re=e;const t=this.#re.ancestryChain[0],o=t?.debuggerId?await r.DebuggerModel.DebuggerModel.modelForDebuggerId(t.debuggerId):null;this.#Q=o?.target()??null}!this.#ee&&this.#Y&&(this.#ee=this.#Y.getPermissionsPolicyState()),await a.write("FrameDetailsView render",()=>{this.#Y&&n.render(Ce`
        <style>${te}</style>
        <devtools-report .data=${{reportTitle:this.#Y.displayName()}}
        jslog=${s.pane("frames")}>
          ${this.#oe()}
          ${this.#ae()}
          ${this.#ie()}
          ${this.#ne()}
          ${n.Directives.until(this.#ee?.then(e=>(this.#G.policies=e||[],Ce`
              <devtools-resources-permissions-policy-section
                .data=${this.#G}
              >
              </devtools-resources-permissions-policy-section>
            `)),n.nothing)}
          ${this.#Z?this.#se():n.nothing}
        </devtools-report>
      `,this.#e,{host:this})})}#ne(){return this.#Y?(this.#te.classList.add("span-cols"),this.#Y.getOriginTrials().then(e=>{this.#te.data={trials:e}}),Ce`
    <devtools-report-section-header>
      ${t.i18n.lockedString("Origin trials")}
    </devtools-report-section-header>
    <devtools-report-section>
      <span class="report-section">
        ${Me(Pe.originTrialsExplanation)}
        <x-link href="https://microsoftedge.github.io/MSEdgeExplainers/origin-trials/" class="link"
                jslog=${s.link("learn-more.origin-trials").track({click:!0})}>
          ${Me(Pe.learnMore)}
        </x-link>
      </span>
    </devtools-report-section>
    ${this.#te}
    <devtools-report-divider></devtools-report-divider>`):n.nothing}#oe(){return this.#Y?Ce`
      <devtools-report-section-header>${Me(Pe.document)}</devtools-report-section-header>
      <devtools-report-key>${Me(Pe.url)}</devtools-report-key>
      <devtools-report-value>
        <div class="inline-items">
          ${this.#le()}
          ${this.#de()}
          <div class="text-ellipsis" title=${this.#Y.url}>${this.#Y.url}</div>
        </div>
      </devtools-report-value>
      ${this.#ce()}
      ${this.#he()}
      ${n.Directives.until(this.#ue(),n.nothing)}
      ${this.#pe()}
      ${this.#ge()}
      ${this.#me()}
      <devtools-report-divider></devtools-report-divider>
    `:n.nothing}#le(){const t=this.#Y;return!t||t.unreachableUrl()?n.nothing:$e("label",Me(Pe.clickToOpenInSourcesPanel),async()=>{const r=this.#ve(t);r&&await e.Revealer.reveal(r)},"reveal-in-sources")}#de(){if(this.#Y){const t=this.#Y.resourceForURL(this.#Y.url);if(t?.request){const r=t.request;return $e("arrow-up-down-circle",Me(Pe.clickToOpenInNetworkPanel),()=>{const t=p.UIRequestLocation.UIRequestLocation.tab(r,"headers-component");return e.Revealer.reveal(t)},"reveal-in-network")}}return n.nothing}#ve(e){for(const t of u.Workspace.WorkspaceImpl.instance().projects()){const r=h.NetworkProject.NetworkProject.getTargetForProject(t);if(r&&r===e.resourceTreeModel().target()){const r=t.uiSourceCodeForURL(e.url);if(r)return r}}return null}#ce(){return this.#Y&&this.#Y.unreachableUrl()?Ce`
      <devtools-report-key>${Me(Pe.unreachableUrl)}</devtools-report-key>
      <devtools-report-value>
        <div class="inline-items">
          ${this.#ke()}
          <div class="text-ellipsis" title=${this.#Y.unreachableUrl()}>${this.#Y.unreachableUrl()}</div>
        </div>
      </devtools-report-value>
    `:n.nothing}#ke(){if(this.#Y){const t=e.ParsedURL.ParsedURL.fromString(this.#Y.unreachableUrl());if(t)return $e("arrow-up-down-circle",Me(Pe.clickToOpenInNetworkPanelMight),()=>{e.Revealer.reveal(p.UIFilter.UIRequestFilter.filters([{filterType:p.UIFilter.FilterType.Domain,filterValue:t.domain()},{filterType:null,filterValue:t.path}]))},"unreachable-url.reveal-in-network")}return n.nothing}#he(){return this.#Y&&this.#Y.securityOrigin&&"://"!==this.#Y.securityOrigin?Ce`
        <devtools-report-key>${Me(Pe.origin)}</devtools-report-key>
        <devtools-report-value>
          <div class="text-ellipsis" title=${this.#Y.securityOrigin}>${this.#Y.securityOrigin}</div>
        </devtools-report-value>
      `:n.nothing}async#ue(){if(this.#Y){const t=await this.#Y.getOwnerDOMNodeOrDocument();if(t)return Ce`
          <devtools-report-key>${Me(Pe.ownerElement)}</devtools-report-key>
          <devtools-report-value class="without-min-width">
            <div class="inline-items">
              <button class="link text-link" role="link" tabindex=0 title=${Me(Pe.clickToOpenInElementsPanel)}
                @mouseenter=${()=>this.#Y?.highlight()}
                @mouseleave=${()=>r.OverlayModel.OverlayModel.hideDOMNodeHighlight()}
                @click=${()=>e.Revealer.reveal(t)}
                jslog=${s.action("reveal-in-elements").track({click:!0})}
              >
                &lt;${t.nodeName().toLocaleLowerCase()}&gt;
              </button>
            </div>
          </devtools-report-value>
        `}return n.nothing}#pe(){const e=this.#Y?.getCreationStackTraceData();return e?.creationStackTrace?Ce`
        <devtools-report-key title=${Me(Pe.creationStackTraceExplanation)}>${Me(Pe.creationStackTrace)}</devtools-report-key>
        <devtools-report-value
        jslog=${s.section("frame-creation-stack-trace")}
        >
          <devtools-resources-stack-trace .data=${{frame:this.#Y,buildStackTraceRows:i.JSPresentationUtils.buildStackTraceRows}}>
          </devtools-resources-stack-trace>
        </devtools-report-value>
      `:n.nothing}#be(e){switch(e){case"child":return{value:Me(Pe.child),description:Me(Pe.childDescription)};case"root":return{value:Me(Pe.root),description:Me(Pe.rootDescription)}}}#we(e){switch(e){case"CreatedByAdScript":return Me(Pe.createdByAdScriptExplanation);case"MatchedBlockingRule":return Me(Pe.matchedBlockingRuleExplanation);case"ParentIsAd":return Me(Pe.parentIsAdExplanation)}}#ge(){if(!this.#Y)return n.nothing;const e=this.#Y.adFrameType();if("none"===e)return n.nothing;const t=this.#be(e),r=[Ce`<div title=${t.description}>${t.value}</div>`];for(const e of this.#Y.adFrameStatus()?.explanations||[])r.push(Ce`<div>${this.#we(e)}</div>`);return Ce`
      <devtools-report-key>${Me(Pe.adStatus)}</devtools-report-key>
      <devtools-report-value class="ad-status-list" jslog=${s.section("ad-status")}>
        <devtools-expandable-list .data=${{rows:r,title:Me(Pe.adStatus)}}>
        </devtools-expandable-list>
      </devtools-report-value>`}#me(){if(!this.#Y)return n.nothing;if("none"===this.#Y.adFrameType())return n.nothing;if(!this.#Q||!this.#re||0===this.#re.ancestryChain.length)return n.nothing;const e=this.#re.ancestryChain.map(e=>{const t=this.#L.linkifyScriptLocation(this.#Q,e.scriptId||null,d.DevToolsPath.EmptyUrlString,void 0,void 0);return t?.setAttribute("jslog",`${s.link("ad-script").track({click:!0})}`),Ce`<div>${t}</div>`}),t=void 0!==this.#re.rootScriptFilterlistRule;return Ce`
      <devtools-report-key>${Me(Pe.creatorAdScriptAncestry)}</devtools-report-key>
      <devtools-report-value class="creator-ad-script-ancestry-list" jslog=${s.section("creator-ad-script-ancestry")}>
        <devtools-expandable-list .data=${{rows:e,title:Me(Pe.creatorAdScriptAncestry)}}>
        </devtools-expandable-list>
      </devtools-report-value>
      ${t?Ce`
        <devtools-report-key>${Me(Pe.rootScriptFilterlistRule)}</devtools-report-key>
        <devtools-report-value jslog=${s.section("root-script-filterlist-rule")}>${this.#re.rootScriptFilterlistRule}</devtools-report-value>
      `:n.nothing}
    `}#ae(){return this.#Y?Ce`
      <devtools-report-section-header>${Me(Pe.securityIsolation)}</devtools-report-section-header>
      <devtools-report-key>${Me(Pe.secureContext)}</devtools-report-key>
      <devtools-report-value>
        ${this.#Y.isSecureContext()?Me(Pe.yes):Me(Pe.no)}\xA0${this.#fe()}
      </devtools-report-value>
      <devtools-report-key>${Me(Pe.crossoriginIsolated)}</devtools-report-key>
      <devtools-report-value>
        ${this.#Y.isCrossOriginIsolated()?Me(Pe.yes):Me(Pe.no)}
      </devtools-report-value>
      ${n.Directives.until(this.#ye(),n.nothing)}
      <devtools-report-divider></devtools-report-divider>
    `:n.nothing}#fe(){const e=this.#Se();return e?Ce`<span class="inline-comment">${e}</span>`:n.nothing}#Se(){switch(this.#Y?.getSecureContextType()){case"Secure":return null;case"SecureLocalhost":return Me(Pe.localhostIsAlwaysASecureContext);case"InsecureAncestor":return Me(Pe.aFrameAncestorIsAnInsecure);case"InsecureScheme":return Me(Pe.theFramesSchemeIsInsecure)}return null}async#ye(){if(this.#Y){const e=this.#Y.resourceTreeModel().target().model(r.NetworkManager.NetworkManager),o=e&&await e.getSecurityIsolationStatus(this.#Y.id);if(o)return Ce`
          ${this.#Te(o.coep,t.i18n.lockedString("Cross-Origin Embedder Policy (COEP)"),"None")}
          ${this.#Te(o.coop,t.i18n.lockedString("Cross-Origin Opener Policy (COOP)"),"UnsafeNone")}
          ${this.#$e(o.csp)}
        `}return n.nothing}#Te(e,t,r){if(!e)return n.nothing;const o=e.value!==r,a=!o&&e.reportOnlyValue!==r,i=o?e.reportingEndpoint:e.reportOnlyReportingEndpoint;return Ce`
      <devtools-report-key>${t}</devtools-report-key>
      <devtools-report-value>
        ${function(e){switch(e){case"Credentialless":return"credentialless";case"None":return"none";case"RequireCorp":return"require-corp";case"NoopenerAllowPopups":return"noopenener-allow-popups";case"SameOrigin":return"same-origin";case"SameOriginAllowPopups":return"same-origin-allow-popups";case"SameOriginPlusCoep":return"same-origin-plus-coep";case"RestrictProperties":return"restrict-properties";case"RestrictPropertiesPlusCoep":return"restrict-properties-plus-coep";case"UnsafeNone":return"unsafe-none"}}(o?e.value:e.reportOnlyValue)}
        ${a?Ce`<span class="inline-comment">report-only</span>`:n.nothing}
        ${i?Ce`<span class="inline-name">${Me(Pe.reportingTo)}</span>${i}`:n.nothing}
      </devtools-report-value>
    `}#xe(e){const t=new g.CspParser.CspParser(e).csp.directives,r=[];for(const e in t)r.push(Ce`
          <div>
            <span class="bold">${e}</span>
            ${": "+t[e]?.join(", ")}
          </div>`);return r}#Ce(e,r){return Ce`
      <devtools-report-key>
        ${e.isEnforced?t.i18n.lockedString("Content-Security-Policy"):Ce`
          ${t.i18n.lockedString("Content-Security-Policy-Report-Only")}
          <devtools-button
            .iconName=${"help"}
            class='help-button'
            .variant=${"icon"}
            .size=${"SMALL"}
            @click=${()=>{window.location.href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only"}}
            jslog=${s.link("learn-more.csp-report-only").track({click:!0})}
            ></devtools-button>`}
      </devtools-report-key>
      <devtools-report-value>
        ${"HTTP"===e.source?t.i18n.lockedString("HTTP header"):t.i18n.lockedString("Meta tag")}
        ${this.#xe(e.effectiveDirectives)}
      </devtools-report-value>
      ${r?Ce`<devtools-report-divider class="subsection-divider"></devtools-report-divider>`:n.nothing}
    `}#$e(e){return Ce`
      <devtools-report-divider></devtools-report-divider>
      <devtools-report-section-header>
        ${Me(Pe.contentSecurityPolicy)}
      </devtools-report-section-header>
      ${e?.length?e.map((t,r)=>this.#Ce(t,r<e?.length-1)):Ce`
        <devtools-report-key>
          ${t.i18n.lockedString("Content-Security-Policy")}
        </devtools-report-key>
        <devtools-report-value>
          ${Me(Pe.none)}
        </devtools-report-value>
      `}
    `}#ie(){return this.#Y?Ce`
      <devtools-report-section-header>
        ${Me(Pe.apiAvailability)}
      </devtools-report-section-header>
      <devtools-report-section>
        <span class="report-section">
          ${Me(Pe.availabilityOfCertainApisDepends)}
          <x-link
            href="https://web.dev/why-coop-coep/" class="link"
            jslog=${s.link("learn-more.coop-coep").track({click:!0})}>
            ${Me(Pe.learnMore)}
          </x-link>
        </span>
      </devtools-report-section>
      ${this.#Pe()}
      ${this.#Re()}
      <devtools-report-divider></devtools-report-divider>`:n.nothing}#Pe(){if(this.#Y){const e=this.#Y.getGatedAPIFeatures();if(e){const t=e.includes("SharedArrayBuffers"),r=t&&e.includes("SharedArrayBuffersTransferAllowed"),o=Me(r?Pe.availableTransferable:t?Pe.availableNotTransferable:Pe.unavailable),a=r?Me(Pe.sharedarraybufferConstructorIs):t?Me(Pe.sharedarraybufferConstructorIsAvailable):"";function i(e){switch(e.getCrossOriginIsolatedContextType()){case"Isolated":return n.nothing;case"NotIsolated":return t?Ce`
                  <span class="inline-comment">
                    ${Me(Pe.willRequireCrossoriginIsolated)}
                  </span>`:Ce`<span class="inline-comment">${Me(Pe.requiresCrossoriginIsolated)}</span>`;case"NotIsolatedFeatureDisabled":if(!r)return Ce`
                  <span class="inline-comment">
                    ${Me(Pe.transferRequiresCrossoriginIsolatedPermission)}
                    <code> cross-origin-isolated</code>
                  </span>`}return n.nothing}return Ce`
          <devtools-report-key>SharedArrayBuffers</devtools-report-key>
          <devtools-report-value title=${a}>
            ${o}\xA0${i(this.#Y)}
          </devtools-report-value>
        `}}return n.nothing}#Re(){if(this.#Y){const e=this.#Y.isCrossOriginIsolated(),t=Me(e?Pe.available:Pe.unavailable),r=Me(e?Pe.thePerformanceAPI:Pe.thePerformancemeasureuseragentspecificmemory);return Ce`
        <devtools-report-key>${Me(Pe.measureMemory)}</devtools-report-key>
        <devtools-report-value>
          <span title=${r}>${t}</span>\xA0<x-link class="link" href="https://web.dev/monitor-total-page-memory-usage/" jslog=${s.link("learn-more.monitor-memory-usage").track({click:!0})}>${Me(Pe.learnMore)}</x-link>
        </devtools-report-value>
      `}return n.nothing}#se(){return this.#Y?Ce`
      <devtools-report-section-header
        title=${Me(Pe.thisAdditionalDebugging)}
      >${Me(Pe.additionalInformation)}</devtools-report-section-header>
      <devtools-report-key>${Me(Pe.frameId)}</devtools-report-key>
      <devtools-report-value>
        <div class="text-ellipsis" title=${this.#Y.id}>${this.#Y.id}</div>
      </devtools-report-value>
      <devtools-report-divider></devtools-report-divider>
    `:n.nothing}}customElements.define("devtools-resources-frame-details-view",De);var Ie=Object.freeze({__proto__:null,FrameDetailsReportView:De}),Be=`:host{display:flex;padding:20px;height:100%}.heading{font-size:15px}devtools-data-grid{margin-top:20px}.info-icon{vertical-align:text-bottom;height:14px}.no-events-message{margin-top:20px}\n/*# sourceURL=${import.meta.resolve("./interestGroupAccessGrid.css")} */`;const{html:Ee}=n,Fe={allInterestGroupStorageEvents:"All interest group storage events.",eventTime:"Event Time",eventType:"Access Type",groupOwner:"Owner",groupName:"Name",noEvents:"No interest group events detected",interestGroupDescription:"On this page you can inspect and analyze interest groups"},Ae=t.i18n.registerUIStrings("panels/application/components/InterestGroupAccessGrid.ts",Fe),Le=t.i18n.getLocalizedString.bind(void 0,Ae);class Ne extends HTMLElement{#e=this.attachShadow({mode:"open"});#Me=[];connectedCallback(){this.#x()}set data(e){this.#Me=e,this.#x()}#x(){n.render(Ee`
      <style>${Be}</style>
      <style>${l.inspectorCommonStyles}</style>
      ${0===this.#Me.length?Ee`
          <div class="empty-state">
            <span class="empty-state-header">${Le(Fe.noEvents)}</span>
            <span class="empty-state-description">${Le(Fe.interestGroupDescription)}</span>
          </div>`:Ee`
          <div>
            <span class="heading">Interest Groups</span>
            <devtools-icon class="info-icon medium" name="info"
                          title=${Le(Fe.allInterestGroupStorageEvents)}>
            </devtools-icon>
            ${this.#De()}
          </div>`}
    `,this.#e,{host:this})}#De(){return Ee`
      <devtools-data-grid striped inline>
        <table>
          <tr>
            <th id="event-time" sortable weight="10">${Le(Fe.eventTime)}</td>
            <th id="event-type" sortable weight="5">${Le(Fe.eventType)}</td>
            <th id="event-group-owner" sortable weight="10">${Le(Fe.groupOwner)}</td>
            <th id="event-group-name" sortable weight="10">${Le(Fe.groupName)}</td>
          </tr>
          ${this.#Me.map(e=>Ee`
          <tr @select=${()=>this.dispatchEvent(new CustomEvent("select",{detail:e}))}>
            <td>${new Date(1e3*e.accessTime).toLocaleString()}</td>
            <td>${e.type}</td>
            <td>${e.ownerOrigin}</td>
            <td>${e.name}</td>
          </tr>
        `)}
        </table>
      </devtools-data-grid>`}}customElements.define("devtools-interest-group-access-grid",Ne);var Oe=Object.freeze({__proto__:null,InterestGroupAccessGrid:Ne,i18nString:Le}),We=`:host{display:flex;flex-direction:column}.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.devtools-link:focus-visible{outline-width:unset}input.devtools-text-input[type="text"]{padding:3px 6px;margin-left:4px;margin-right:4px;width:250px;height:25px}input.devtools-text-input[type="text"]::placeholder{color:var(--sys-color-token-subtle)}.protocol-handlers-row{margin:var(--sys-size-3) 0}.inline-icon{width:16px;height:16px;&[name="check-circle"]{color:var(--icon-checkmark-green)}}@media (forced-colors: active){.devtools-link:not(.devtools-link-prevent-click){color:linktext}.devtools-link:focus-visible{background:Highlight;color:HighlightText}}\n/*# sourceURL=${import.meta.resolve("./protocolHandlersView.css")} */`;const{html:Ue}=n,He={protocolDetected:"Found valid protocol handler registration in the {PH1}. With the app installed, test the registered protocols.",protocolNotDetected:"Define protocol handlers in the {PH1} to register your app as a handler for custom protocols when your app is installed.",needHelpReadOur:"Need help? Read {PH1}.",protocolHandlerRegistrations:"URL protocol handler registration for PWAs",manifest:"manifest",testProtocol:"Test protocol",dropdownLabel:"Select protocol handler",textboxLabel:"Query parameter or endpoint for protocol handler",textboxPlaceholder:"Enter URL"},qe=t.i18n.registerUIStrings("panels/application/components/ProtocolHandlersView.ts",He),je=t.i18n.getLocalizedString.bind(void 0,qe);class _e extends HTMLElement{#e=this.attachShadow({mode:"open"});#Ie=[];#Be=d.DevToolsPath.EmptyUrlString;#Ee="";#Fe="";set data(e){const t=this.#Be!==e.manifestLink;this.#Ie=e.protocolHandlers,this.#Be=e.manifestLink,t&&this.#Ae()}#Ae(){this.#Fe="",this.#Ee=this.#Ie[0]?.protocol??"",this.#x()}#Le(){const e=l.XLink.XLink.create(this.#Be,je(He.manifest),void 0,void 0,"manifest"),r=this.#Ie.length>0?He.protocolDetected:He.protocolNotDetected;return Ue`
    <div class="protocol-handlers-row status">
            <devtools-icon class="inline-icon"
                           name=${this.#Ie.length>0?"check-circle":"info"}>
            </devtools-icon>
            ${t.i18n.getFormatLocalizedString(qe,r,{PH1:e})}
    </div>
    `}#Ne(){if(0===this.#Ie.length)return n.nothing;const e=this.#Ie.filter(e=>e.protocol).map(e=>Ue`<option value=${e.protocol} jslog=${s.item(e.protocol).track({click:!0})}>${e.protocol}://</option>`);return Ue`
       <div class="protocol-handlers-row">
        <select class="protocol-select" @change=${this.#Oe} aria-label=${je(He.dropdownLabel)}>
           ${e}
        </select>
        <input .value=${this.#Fe} class="devtools-text-input" type="text" @change=${this.#We} aria-label=${je(He.textboxLabel)}
        placeholder=${je(He.textboxPlaceholder)} />
        <devtools-button .variant=${"primary"} @click=${this.#Ue}>
            ${je(He.testProtocol)}
        </devtools-button>
        </div>
      `}#Oe=e=>{this.#Ee=e.target.value};#We=e=>{this.#Fe=e.target.value,this.#x()};#Ue=()=>{const e=`${this.#Ee}://${this.#Fe}`;v.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(e),v.userMetrics.actionTaken(v.UserMetrics.Action.CaptureTestProtocolClicked)};#x(){const e=l.XLink.XLink.create("https://web.dev/url-protocol-handler/",je(He.protocolHandlerRegistrations),void 0,void 0,"learn-more");n.render(Ue`
      <style>${We}</style>
      <style>${l.inspectorCommonStyles}</style>
      <style>${k.textInputStyles}</style>
      ${this.#Le()}
      <div class="protocol-handlers-row">
          ${t.i18n.getFormatLocalizedString(qe,He.needHelpReadOur,{PH1:e})}
      </div>
      ${this.#Ne()}
    `,this.#e,{host:this})}}customElements.define("devtools-protocol-handlers-view",_e);var Ve=Object.freeze({__proto__:null,ProtocolHandlersView:_e}),ze=`@scope to (devtools-widget > *){:scope{overflow:auto;height:100%}.reporting-container{height:100%;display:flex;flex-direction:column;width:100%}.reporting-header{font-size:15px;background-color:var(--sys-color-surface2);padding:1px 4px;flex-shrink:0}devtools-data-grid{flex:auto}.inline-icon{vertical-align:text-bottom}}\n/*# sourceURL=${import.meta.resolve("./reportsGrid.css")} */`;const Ge={noReportsToDisplay:"No reports to display",reportingApiDescription:"Here you will find reporting api reports that are generated by the page.",learnMore:"Learn more",status:"Status",destination:"Destination",generatedAt:"Generated at"},Ke=t.i18n.registerUIStrings("panels/application/components/ReportsGrid.ts",Ge),Xe=t.i18n.getLocalizedString.bind(void 0,Ke),{render:Je,html:Ye}=n,Qe=(e,r,o)=>{Je(Ye`
    <style>${ze}</style>
    <style>${l.inspectorCommonStyles}</style>
    <div class="reporting-container" jslog=${s.section("reports")}>
      <div class="reporting-header">${t.i18n.lockedString("Reports")}</div>
      ${e.reports.length>0?Ye`
        <devtools-data-grid striped>
          <table>
            <tr>
              ${e.protocolMonitorExperimentEnabled?Ye`
                <th id="id" weight="30">${t.i18n.lockedString("ID")}</th>
              `:""}
              <th id="url" weight="30">${t.i18n.lockedString("URL")}</th>
              <th id="type" weight="20">${t.i18n.lockedString("Type")}</th>
              <th id="status" weight="20">
                <style>${ze}</style>
                <span class="status-header">${Xe(Ge.status)}</span>
                <x-link href="https://web.dev/reporting-api/#report-status"
                jslog=${s.link("report-status").track({click:!0})}>
                  <devtools-icon class="inline-icon medium" name="help" style="color: var(--icon-link);"
                  ></devtools-icon>
                </x-link>
              </th>
              <th id="destination" weight="20">${Xe(Ge.destination)}</th>
              <th id="timestamp" weight="20">${Xe(Ge.generatedAt)}</th>
              <th id="body" weight="20">${t.i18n.lockedString("Body")}</th>
            </tr>
            ${e.reports.map(t=>Ye`
              <tr @select=${()=>e.onSelect(t.id)}>
                ${e.protocolMonitorExperimentEnabled?Ye`<td>${t.id}</td>`:""}
                <td>${t.initiatorUrl}</td>
                <td>${t.type}</td>
                <td>${t.status}</td>
                <td>${t.destination}</td>
                <td>${new Date(1e3*t.timestamp).toLocaleString()}</td>
                <td>${JSON.stringify(t.body)}</td>
              </tr>
            `)}
          </table>
        </devtools-data-grid>
      `:Ye`
        <div class="empty-state">
          <span class="empty-state-header">${Xe(Ge.noReportsToDisplay)}</span>
          <div class="empty-state-description">
            <span>${Xe(Ge.reportingApiDescription)}</span>
            ${l.XLink.XLink.create("https://permanently-removed.invalid/docs/capabilities/web-apis/reporting-api",Xe(Ge.learnMore),void 0,void 0,"learn-more")}
          </div>
        </div>
      `}
    </div>
  `,o)};class Ze extends l.Widget.Widget{reports=[];#Z=!1;#I;onReportSelected=()=>{};constructor(e,t=Qe){super(e),this.#I=t,this.#Z=c.Runtime.experiments.isEnabled("protocol-monitor"),this.requestUpdate()}performUpdate(){const e={reports:this.reports,protocolMonitorExperimentEnabled:this.#Z,onSelect:this.onReportSelected};this.#I(e,void 0,this.contentElement)}}var et=Object.freeze({__proto__:null,DEFAULT_VIEW:Qe,ReportsGrid:Ze,i18nString:Xe}),tt=`:host{display:block;white-space:normal;max-width:400px}.router-rules{border:1px solid var(--sys-color-divider);border-spacing:0;padding-left:10px;padding-right:10px;line-height:initial;margin-top:0;padding-bottom:12px;text-wrap:balance}.router-rule{display:flex;margin-top:12px;flex-direction:column}.rule-id{color:var(--sys-color-token-subtle)}.item{display:flex;flex-direction:column;padding-left:10px}.condition,\n.source{list-style:none;display:flex;margin-top:4px;flex-direction:row}.condition > *,\n.source > *{word-break:break-all;line-height:1.5em}.rule-type{flex:0 0 18%}\n/*# sourceURL=${import.meta.resolve("./serviceWorkerRouterView.css")} */`;const{html:rt,render:ot}=n;class at extends o.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#He=[];update(e){this.#He=e,this.#He.length>0&&this.#x()}#x(){ot(rt`
      <style>${tt}</style>
      <ul class="router-rules">
        ${this.#He.map(this.#qe)}
      </ul>
    `,this.#e,{host:this})}#qe(e){return rt`
      <li class="router-rule">
        <div class="rule-id">Rule ${e.id}</div>
        <ul class="item">
          <li class="condition">
            <div class="rule-type">Condition</div>
            <div class="rule-value">${e.condition}</div>
          </li>
          <li class="source">
            <div class="rule-type">Source</div>
            <div class="rule-value">${e.source}</div>
          </li>
        </ul>
      </li>
    `}}customElements.define("devtools-service-worker-router-view",at);var it=Object.freeze({__proto__:null,ServiceWorkerRouterView:at}),nt=`@scope to (devtools-widget > *){:scope{padding:20px;height:100%;display:flex}.heading{font-size:15px}devtools-data-grid{margin-top:20px}.info-icon{vertical-align:text-bottom;height:14px}.no-events-message{margin-top:20px}}\n/*# sourceURL=${import.meta.resolve("./sharedStorageAccessGrid.css")} */`;const{render:st,html:lt}=n,dt={sharedStorage:"Shared storage",allSharedStorageEvents:"All shared storage events for this page.",eventTime:"Event Time",eventScope:"Access Scope",eventMethod:"Access Method",ownerOrigin:"Owner Origin",ownerSite:"Owner Site",eventParams:"Optional Event Params",noEvents:"No shared storage events detected",sharedStorageDescription:"On this page you can view, add, edit and delete shared storage key-value pairs and view shared storage events.",learnMore:"Learn more"},ct=t.i18n.registerUIStrings("panels/application/components/SharedStorageAccessGrid.ts",dt),ht=t.i18n.getLocalizedString.bind(void 0,ct),ut=(e,t,r)=>{st(lt`
    <style>${nt}</style>
    ${0===e.events.length?lt`
        <div class="empty-state" jslog=${s.section().context("empty-view")}>
          <div class="empty-state-header">${ht(dt.noEvents)}</div>
          <div class="empty-state-description">
            <span>${ht(dt.sharedStorageDescription)}</span>
            ${l.XLink.XLink.create("https://permanently-removed.invalid/privacy-sandbox/private-advertising/shared-storage",ht(dt.learnMore),"x-link",void 0,"learn-more")}
          </div>
        </div>`:lt`
        <div jslog=${s.section("events-table")}>
          <span class="heading">${ht(dt.sharedStorage)}</span>
          <devtools-icon class="info-icon medium" name="info"
                          title=${ht(dt.allSharedStorageEvents)}>
          </devtools-icon>
          <devtools-data-grid striped inline>
            <table>
              <thead>
                <tr>
                  <th id="event-time" weight="10" sortable>
                    ${ht(dt.eventTime)}
                  </th>
                  <th id="event-scope" weight="10" sortable>
                    ${ht(dt.eventScope)}
                  </th>
                  <th id="event-method" weight="10" sortable>
                    ${ht(dt.eventMethod)}
                  </th>
                  <th id="event-owner-origin" weight="10" sortable>
                    ${ht(dt.ownerOrigin)}
                  </th>
                  <th id="event-owner-site" weight="10" sortable>
                    ${ht(dt.ownerSite)}
                  </th>
                  <th id="event-params" weight="10" sortable>
                    ${ht(dt.eventParams)}
                  </th>
                </tr>
              </thead>
              <tbody>
                ${e.events.map(t=>lt`
                  <tr @select=${()=>e.onSelect(t)}>
                    <td data-value=${t.accessTime}>
                      ${new Date(1e3*t.accessTime).toLocaleString()}
                    </td>
                    <td>${t.scope}</td>
                    <td>${t.method}</td>
                    <td>${t.ownerOrigin}</td>
                    <td>${t.ownerSite}</td>
                    <td>${JSON.stringify(t.params)}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </devtools-data-grid>
        </div>`}`,r)};class pt extends l.Widget.Widget{#I;#je=[];#_e=()=>{};constructor(e,t=ut){super(e,{useShadowDom:!0}),this.#I=t,this.performUpdate()}set events(e){this.#je=e,this.performUpdate()}set onSelect(e){this.#_e=e,this.performUpdate()}get onSelect(){return this.#_e}performUpdate(){this.#I({events:this.#je,onSelect:this.#_e.bind(this)},{},this.contentElement)}}var gt=Object.freeze({__proto__:null,DEFAULT_VIEW:ut,SharedStorageAccessGrid:pt,i18nString:ht}),mt=`.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}devtools-icon{vertical-align:text-bottom;margin-left:var(--sys-size-3);width:16px;height:16px}devtools-button{vertical-align:sub;margin-left:var(--sys-size-3)}.entropy-budget{display:flex;align-items:center;height:18px}\n/*# sourceURL=${import.meta.resolve("./sharedStorageMetadataView.css")} */`,vt=`.default-bucket{font-style:italic}\n/*# sourceURL=${import.meta.resolve("./storageMetadataView.css")} */`;const{html:kt}=n,bt={origin:"Frame origin",topLevelSite:"Top-level site",opaque:"(opaque)",isOpaque:"Is opaque",isThirdParty:"Is third-party",yes:"Yes",no:"No",yesBecauseTopLevelIsOpaque:"Yes, because the top-level site is opaque",yesBecauseKeyIsOpaque:"Yes, because the storage key is opaque",yesBecauseOriginNotInTopLevelSite:"Yes, because the origin is outside of the top-level site",yesBecauseAncestorChainHasCrossSite:"Yes, because the ancestry chain contains a third-party origin",loading:"Loading…",bucketName:"Bucket name",defaultBucket:"Default bucket",persistent:"Is persistent",durability:"Durability",quota:"Quota",expiration:"Expiration",none:"None",deleteBucket:"Delete bucket",confirmBucketDeletion:'Delete the "{PH1}" bucket?',bucketWillBeRemoved:"The selected storage bucket and contained data will be removed."},wt=t.i18n.registerUIStrings("panels/application/components/StorageMetadataView.ts",bt),ft=t.i18n.getLocalizedString.bind(void 0,wt);class yt extends o.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#Ve;#ze=null;#Ge=null;#Ke=!0;setStorageKey(e){this.#ze=r.StorageKeyManager.parseStorageKey(e),this.render()}setStorageBucket(e){this.#Ge=e,this.setStorageKey(e.bucket.storageKey)}setShowOnlyBucket(e){this.#Ke=e}enableStorageBucketControls(e){this.#Ve=e,this.#ze&&this.render()}render(){return a.write("StorageMetadataView render",async()=>{n.render(kt`
        <style>
          ${vt}
        </style>
        <devtools-report .data=${{reportTitle:this.getTitle()??ft(bt.loading)}}>
          ${await this.renderReportContent()}
        </devtools-report>`,this.#e,{host:this})})}getTitle(){if(!this.#ze)return;const e=this.#ze.origin,t=this.#Ge?.bucket.name||ft(bt.defaultBucket);return this.#Ve?`${t} - ${e}`:e}key(e){return kt`<devtools-report-key>${e}</devtools-report-key>`}value(e){return kt`<devtools-report-value>${e}</devtools-report-value>`}async renderReportContent(){if(!this.#ze)return n.nothing;const e=this.#ze.origin,t=Boolean(this.#ze.components.get("3")),r=Boolean(this.#ze.components.get("1")),o=Boolean(this.#ze.components.get("4")),a=this.#ze.components.get("0"),i=t?ft(bt.yesBecauseAncestorChainHasCrossSite):r?ft(bt.yesBecauseKeyIsOpaque):o?ft(bt.yesBecauseTopLevelIsOpaque):a&&e!==a?ft(bt.yesBecauseOriginNotInTopLevelSite):null;return kt`
        ${a&&e!==a?kt`${this.key(ft(bt.origin))}
            ${this.value(kt`<div class="text-ellipsis" title=${e}>${e}</div>`)}`:n.nothing}
        ${a||o?this.key(ft(bt.topLevelSite)):n.nothing}
        ${a?this.value(a):n.nothing}
        ${o?this.value(ft(bt.opaque)):n.nothing}
        ${i?kt`${this.key(ft(bt.isThirdParty))}${this.value(i)}`:n.nothing}
        ${r||o?this.key(ft(bt.isOpaque)):n.nothing}
        ${r?this.value(ft(bt.yes)):n.nothing}
        ${o?this.value(ft(bt.yesBecauseTopLevelIsOpaque)):n.nothing}
        ${this.#Ge?this.#Xe():n.nothing}
        ${this.#Ve?this.#Je():n.nothing}`}#Xe(){if(!this.#Ge)throw new Error("Should not call #renderStorageBucketInfo if #bucket is null.");const{bucket:{name:e},persistent:r,durability:o,quota:a}=this.#Ge,i=!e;return this.#Ke?kt`
      ${this.key(ft(bt.bucketName))}
      ${this.value(e||kt`<span class="default-bucket">default</span>`)}
      ${this.key(ft(bt.persistent))}
      ${this.value(ft(r?bt.yes:bt.no))}
      ${this.key(ft(bt.durability))}
      ${this.value(o)}
      ${this.key(ft(bt.quota))}
      ${this.value(t.ByteUtilities.bytesToString(a))}
      ${this.key(ft(bt.expiration))}
      ${this.value(this.#Ye())}`:i?kt`
          ${this.key(ft(bt.bucketName))}
          ${this.value(kt`<span class="default-bucket">default</span>`)}`:kt`
        ${this.key(ft(bt.bucketName))}
        ${this.value(e)}`}#Ye(){if(!this.#Ge)throw new Error("Should not call #getExpirationString if #bucket is null.");const{expiration:e}=this.#Ge;return 0===e?ft(bt.none):new Date(1e3*e).toLocaleString()}#Je(){return kt`
      <devtools-report-divider></devtools-report-divider>
      <devtools-report-section>
        <devtools-button
          aria-label=${ft(bt.deleteBucket)}
          .variant=${"outlined"}
          @click=${this.#Qe}>
          ${ft(bt.deleteBucket)}
        </devtools-button>
      </devtools-report-section>`}async#Qe(){if(!this.#Ve||!this.#Ge)throw new Error("Should not call #deleteBucket if #storageBucketsModel or #storageBucket is null.");await l.UIUtils.ConfirmDialog.show(ft(bt.bucketWillBeRemoved),ft(bt.confirmBucketDeletion,{PH1:this.#Ge.bucket.name||""}),this,{jslogContext:"delete-bucket-confirmation"})&&this.#Ve.deleteBucket(this.#Ge.bucket)}}customElements.define("devtools-storage-metadata-view",yt);var St=Object.freeze({__proto__:null,StorageMetadataView:yt});const{html:Tt}=n,$t={sharedStorage:"Shared storage",creation:"Creation Time",notYetCreated:"Not yet created",numEntries:"Number of Entries",entropyBudget:"Entropy Budget for Fenced Frames",budgetExplanation:"Remaining data leakage allowed within a 24-hour period for this origin in bits of entropy",resetBudget:"Reset Budget",numBytesUsed:"Number of Bytes Used"},xt=t.i18n.registerUIStrings("panels/application/components/SharedStorageMetadataView.ts",$t),Ct=t.i18n.getLocalizedString.bind(void 0,xt);class Pt extends yt{#Ze;#et=null;#tt=0;#rt=0;#ot=0;constructor(e,t){super(),this.#Ze=e,this.classList.add("overflow-auto"),this.setStorageKey(t)}async#at(){await this.#Ze.resetBudget(),await this.render()}getTitle(){return Ct($t.sharedStorage)}async renderReportContent(){const e=await this.#Ze.getMetadata();return this.#et=e?.creationTime??null,this.#tt=e?.length??0,this.#rt=e?.bytesUsed??0,this.#ot=e?.remainingBudget??0,Tt`
      <style>${mt}</style>
      ${await super.renderReportContent()}
      ${this.key(Ct($t.creation))}
      ${this.value(this.#it())}
      ${this.key(Ct($t.numEntries))}
      ${this.value(String(this.#tt))}
      ${this.key(Ct($t.numBytesUsed))}
      ${this.value(String(this.#rt))}
      ${this.key(Tt`<span class="entropy-budget">${Ct($t.entropyBudget)}<devtools-icon name="info" title=${Ct($t.budgetExplanation)}></devtools-icon></span>`)}
      ${this.value(Tt`<span class="entropy-budget">${this.#ot}${this.#nt()}</span>`)}`}#it(){if(!this.#et)return Tt`${Ct($t.notYetCreated)}`;const e=new Date(1e3*this.#et);return Tt`${e.toLocaleString()}`}#nt(){return Tt`
      <devtools-button .iconName=${"undo"}
                       .jslogContext=${"reset-entropy-budget"}
                       .size=${"SMALL"}
                       .title=${Ct($t.resetBudget)}
                       .variant=${"icon"}
                       @click=${this.#at.bind(this)}></devtools-button>
    `}}customElements.define("devtools-shared-storage-metadata-view",Pt);var Rt=Object.freeze({__proto__:null,SharedStorageMetadataView:Pt}),Mt=`:host{padding:20px;height:100%;display:flex}.heading{font-size:15px}devtools-data-grid{margin-top:20px;& devtools-button{width:14px;height:14px}}devtools-icon{width:14px;height:14px}.no-tt-message{margin-top:20px}\n/*# sourceURL=${import.meta.resolve("./trustTokensView.css")} */`;const{html:Dt}=n,It={issuer:"Issuer",storedTokenCount:"Stored token count",allStoredTrustTokensAvailableIn:"All stored private state tokens available in this browser instance.",noTrustTokens:"No private state tokens detected",trustTokensDescription:"On this page you can view all available private state tokens in the current browsing context.",deleteTrustTokens:"Delete all stored private state tokens issued by {PH1}.",trustTokens:"Private state tokens",learnMore:"Learn more"},Bt=t.i18n.registerUIStrings("panels/application/components/TrustTokensView.ts",It),Et=t.i18n.getLocalizedString.bind(void 0,Bt);class Ft extends o.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#st(e){const t=r.TargetManager.TargetManager.instance().primaryPageTarget();t?.storageAgent().invoke_clearTrustTokens({issuerOrigin:e})}connectedCallback(){this.wrapper?.contentElement.classList.add("vbox"),this.render()}async render(){const e=r.TargetManager.TargetManager.instance().primaryPageTarget();if(!e)return;const{tokens:t}=await e.storageAgent().invoke_getTrustTokens();t.sort((e,t)=>e.issuerOrigin.localeCompare(t.issuerOrigin)),await a.write("Render TrustTokensView",()=>{n.render(Dt`
        <style>${Mt}</style>
        <style>${l.inspectorCommonStyles}</style>
        ${this.#lt(t)}
      `,this.#e,{host:this}),this.isConnected&&setTimeout(()=>this.render(),1e3)})}#lt(e){return 0===e.length?Dt`
        <div class="empty-state" jslog=${s.section().context("empty-view")}>
          <div class="empty-state-header">${Et(It.noTrustTokens)}</div>
          <div class="empty-state-description">
            <span>${Et(It.trustTokensDescription)}</span>
            ${l.XLink.XLink.create("https://permanently-removed.invalid/privacy-sandbox/protections/private-state-tokens",Et(It.learnMore),"x-link",void 0,"learn-more")}
          </div>
        </div>
      `:Dt`
      <div>
        <span class="heading">${Et(It.trustTokens)}</span>
        <devtools-icon name="info" title=${Et(It.allStoredTrustTokensAvailableIn)}></devtools-icon>
        <devtools-data-grid striped inline>
          <table>
            <tr>
              <th id="issuer" weight="10" sortable>${Et(It.issuer)}</th>
              <th id="count" weight="5" sortable>${Et(It.storedTokenCount)}</th>
              <th id="delete-button" weight="1" sortable></th>
            </tr>
            ${e.filter(e=>e.count>0).map(e=>Dt`
                <tr>
                  <td>${At(e.issuerOrigin)}</td>
                  <td>${e.count}</td>
                  <td>
                    <devtools-button .iconName=${"bin"}
                                    .jslogContext=${"delete-all"}
                                    .size=${"SMALL"}
                                    .title=${Et(It.deleteTrustTokens,{PH1:At(e.issuerOrigin)})}
                                    .variant=${"icon"}
                                    @click=${this.#st.bind(this,At(e.issuerOrigin))}></devtools-button>
                  </td>
                </tr>
              `)}
          </table>
        </devtools-data-grid>
      </div>
    `}}function At(e){return e.replace(/\/$/,"")}customElements.define("devtools-trust-tokens-storage-view",Ft);var Lt=Object.freeze({__proto__:null,TrustTokensView:Ft,i18nString:Et});export{R as BackForwardCacheView,A as BounceTrackingMitigationsView,_ as EndpointsGrid,Ie as FrameDetailsView,Oe as InterestGroupAccessGrid,be as OriginTrialTreeView,Ve as ProtocolHandlersView,et as ReportsGrid,it as ServiceWorkerRouterView,gt as SharedStorageAccessGrid,Rt as SharedStorageMetadataView,ee as StackTrace,St as StorageMetadataView,Lt as TrustTokensView};
//# sourceMappingURL=components.js.map
