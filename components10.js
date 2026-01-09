import"../../../../ui/legacy/components/data_grid/data_grid.js";import*as e from"../../../../core/i18n/i18n.js";import*as t from"../../../../core/sdk/sdk.js";import*as r from"../../../../third_party/diff/diff.js";import*as a from"../../../../ui/components/legacy_wrapper/legacy_wrapper.js";import*as i from"../../../../ui/lit/lit.js";import{assertNotNullOrUndefined as n}from"../../../../core/platform/platform.js";import*as s from"../../../../models/bindings/bindings.js";import"../../../../ui/components/report_view/report_view.js";import"../../../../ui/components/request_link_icon/request_link_icon.js";import*as o from"../../../../core/common/common.js";import*as d from"../../../../models/logs/logs.js";import"../../../../ui/components/buttons/buttons.js";import*as l from"../../../../ui/components/render_coordinator/render_coordinator.js";import*as c from"../../../../ui/legacy/legacy.js";import*as u from"../../../../ui/visual_logging/visual_logging.js";import*as p from"../helper/helper.js";import*as g from"../../../../ui/components/chrome_link/chrome_link.js";import"../../../../ui/components/dialogs/dialogs.js";import"../../../../ui/components/icon_button/icon_button.js";import*as h from"../../../../models/formatter/formatter.js";import*as v from"../../../../third_party/codemirror.next/codemirror.next.js";import*as f from"../../../../ui/components/code_highlighter/code_highlighter.js";import*as m from"../../../../ui/components/text_editor/text_editor.js";import*as b from"../../../network/forward/forward.js";const S={PrefetchFailedIneligibleRedirect:"The prefetch was redirected, but the redirect URL is not eligible for prefetch.",PrefetchFailedInvalidRedirect:"The prefetch was redirected, but there was a problem with the redirect.",PrefetchFailedMIMENotSupported:"The prefetch failed because the response's Content-Type header was not supported.",PrefetchFailedNetError:"The prefetch failed because of a network error.",PrefetchFailedNon2XX:"The prefetch failed because of a non-2xx HTTP response status code.",PrefetchIneligibleRetryAfter:"A previous prefetch to the origin got a HTTP 503 response with an Retry-After header that has not elapsed yet.",PrefetchIsPrivacyDecoy:"The URL was not eligible to be prefetched because there was a registered service worker or cross-site cookies for that origin, but the prefetch was put on the network anyways and not used, to disguise that the user had some kind of previous relationship with the origin.",PrefetchIsStale:"Too much time elapsed between the prefetch and usage, so the prefetch was discarded.",PrefetchNotEligibleBrowserContextOffTheRecord:"The prefetch was not performed because the browser is in InPrivate or Guest mode.",PrefetchNotEligibleDataSaverEnabled:"The prefetch was not performed because the operating system is in Data Saver mode.",PrefetchNotEligibleExistingProxy:"The URL is not eligible to be prefetched, because in the default network context it is configured to use a proxy server.",PrefetchNotEligibleHostIsNonUnique:"The URL was not eligible to be prefetched because its host was not unique (e.g., a non publicly routable IP address or a hostname which is not registry-controlled), but the prefetch was required to be proxied.",PrefetchNotEligibleNonDefaultStoragePartition:"The URL was not eligible to be prefetched because it uses a non-default storage partition.",PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy:"The URL was not eligible to be prefetched because the default network context cannot be configured to use the prefetch proxy for a same-site cross-origin prefetch request.",PrefetchNotEligibleSchemeIsNotHttps:"The URL was not eligible to be prefetched because its scheme was not https:.",PrefetchNotEligibleUserHasCookies:"The URL was not eligible to be prefetched because it was cross-site, but the user had cookies for that origin.",PrefetchNotEligibleUserHasServiceWorker:"The URL was not eligible to be prefetched because there was a registered service worker for that origin, which is currently not supported.",PrefetchNotUsedCookiesChanged:"The prefetch was not used because it was a cross-site prefetch, and cookies were added for that URL while the prefetch was ongoing, so the prefetched response is now out-of-date.",PrefetchProxyNotAvailable:"A network error was encountered when trying to set up a connection to the prefetching proxy.",PrefetchNotUsedProbeFailed:"The prefetch was blocked by your Internet Service Provider or network administrator.",PrefetchEvictedForNewerPrefetch:"The prefetch was discarded because the initiating page has too many prefetches ongoing, and this was one of the oldest.",PrefetchEvictedAfterCandidateRemoved:"The prefetch was discarded because no speculation rule in the initating page triggers a prefetch for this URL anymore.",PrefetchNotEligibleBatterySaverEnabled:"The prefetch was not performed because the Battery Saver setting was enabled.",PrefetchNotEligiblePreloadingDisabled:"The prefetch was not performed because speculative loading was disabled.",PrefetchEvictedAfterBrowsingDataRemoved:"The prefetch was discarded because browsing data was removed.",prerenderFinalStatusLowEndDevice:"The prerender was not performed because this device does not have enough total system memory to support prerendering.",prerenderFinalStatusInvalidSchemeRedirect:"The prerendering navigation failed because it redirected to a URL whose scheme was not http: or https:.",prerenderFinalStatusInvalidSchemeNavigation:"The URL was not eligible to be prerendered because its scheme was not http: or https:.",prerenderFinalStatusNavigationRequestBlockedByCsp:"The prerendering navigation was blocked by a Content Security Policy.",prerenderFinalStatusMojoBinderPolicy:"The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: {PH1})",prerenderFinalStatusRendererProcessCrashed:"The prerendered page crashed.",prerenderFinalStatusRendererProcessKilled:"The prerendered page was killed.",prerenderFinalStatusDownload:"The prerendered page attempted to initiate a download, which is currently not supported.",prerenderFinalStatusNavigationBadHttpStatus:"The prerendering navigation failed because of a non-2xx HTTP response status code.",prerenderFinalStatusClientCertRequested:"The prerendering navigation required a HTTP client certificate.",prerenderFinalStatusNavigationRequestNetworkError:"The prerendering navigation encountered a network error.",prerenderFinalStatusSslCertificateError:"The prerendering navigation failed because of an invalid SSL certificate.",prerenderFinalStatusLoginAuthRequested:"The prerendering navigation required HTTP authentication, which is currently not supported.",prerenderFinalStatusUaChangeRequiresReload:"Changing User Agent occurred in prerendering navigation.",prerenderFinalStatusBlockedByClient:"Some resource load was blocked.",prerenderFinalStatusAudioOutputDeviceRequested:"The prerendered page requested audio output, which is currently not supported.",prerenderFinalStatusMixedContent:"The prerendered page contained mixed content.",prerenderFinalStatusTriggerBackgrounded:"The initiating page was backgrounded, so the prerendered page was discarded.",prerenderFinalStatusMemoryLimitExceeded:"The prerender was not performed because the browser exceeded the prerendering memory limit.",prerenderFinalStatusDataSaverEnabled:"The prerender was not performed because the user requested that the browser use less data.",prerenderFinalStatusHasEffectiveUrl:"The initiating page cannot perform prerendering, because it has an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusTimeoutBackgrounded:"The initiating page was backgrounded for a long time, so the prerendered page was discarded.",prerenderFinalStatusCrossSiteRedirectInInitialNavigation:"The prerendering navigation failed because the prerendered URL redirected to a cross-site URL.",prerenderFinalStatusCrossSiteNavigationInInitialNavigation:"The prerendering navigation failed because it targeted a cross-site URL.",prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInInitialNavigation:"The prerendering navigation failed because the prerendered URL redirected to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInInitialNavigation:"The prerendering navigation failed because it was to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusActivationNavigationParameterMismatch:"The prerender was not used because during activation time, different navigation parameters (e.g., HTTP headers) were calculated than during the original prerendering navigation request.",prerenderFinalStatusPrimaryMainFrameRendererProcessCrashed:"The initiating page crashed.",prerenderFinalStatusPrimaryMainFrameRendererProcessKilled:"The initiating page was killed.",prerenderFinalStatusActivationFramePolicyNotCompatible:"The prerender was not used because the sandboxing flags or permissions policy of the initiating page was not compatible with those of the prerendering page.",prerenderFinalStatusPreloadingDisabled:"The prerender was not performed because the user disabled preloading in their browser settings.",prerenderFinalStatusBatterySaverEnabled:"The prerender was not performed because the user requested that the browser use less battery.",prerenderFinalStatusActivatedDuringMainFrameNavigation:"Prerendered page activated during initiating page's main frame navigation.",prerenderFinalStatusCrossSiteRedirectInMainFrameNavigation:"The prerendered page navigated to a URL which redirected to a cross-site URL.",prerenderFinalStatusCrossSiteNavigationInMainFrameNavigation:"The prerendered page navigated to a cross-site URL.",prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInMainFrameNavigation:"The prerendered page navigated to a URL which redirected to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInMainFrameNavigation:"The prerendered page navigated to a cross-origin same-site URL, but the destination response did not include the appropriate Supports-Loading-Mode header.",prerenderFinalStatusMemoryPressureOnTrigger:"The prerender was not performed because the browser was under critical memory pressure.",prerenderFinalStatusMemoryPressureAfterTriggered:"The prerendered page was unloaded because the browser came under critical memory pressure.",prerenderFinalStatusPrerenderingDisabledByDevTools:"The prerender was not performed because DevTools has been used to disable prerendering.",prerenderFinalStatusSpeculationRuleRemoved:'The prerendered page was unloaded because the initiating page removed the corresponding prerender rule from <script type="speculationrules">.',prerenderFinalStatusActivatedWithAuxiliaryBrowsingContexts:"The prerender was not used because during activation time, there were other windows with an active opener reference to the initiating page, which is currently not supported.",prerenderFinalStatusMaxNumOfRunningEagerPrerendersExceeded:'The prerender whose eagerness is "eager" was not performed because the initiating page already has too many prerenders ongoing. Remove other speculation rules with "eager" to enable further prerendering.',prerenderFinalStatusMaxNumOfRunningEmbedderPrerendersExceeded:"The browser-triggered prerender was not performed because the initiating page already has too many prerenders ongoing.",prerenderFinalStatusMaxNumOfRunningNonEagerPrerendersExceeded:'The old non-eager prerender (with a "moderate" or "conservative" eagerness and triggered by hovering or clicking links) was automatically canceled due to starting a new non-eager prerender. It can be retriggered by interacting with the link again.',prerenderFinalStatusPrerenderingUrlHasEffectiveUrl:"The prerendering navigation failed because it has an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusRedirectedPrerenderingUrlHasEffectiveUrl:"The prerendering navigation failed because it redirected to an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusActivationUrlHasEffectiveUrl:"The prerender was not used because during activation time, navigation has an effective URL that is different from its normal URL. (For example, the New Tab Page, or hosted apps.)",prerenderFinalStatusJavaScriptInterfaceAdded:"The prerendered page was unloaded because a new JavaScript interface has been injected by WebView.addJavascriptInterface().",prerenderFinalStatusJavaScriptInterfaceRemoved:"The prerendered page was unloaded because a JavaScript interface has been removed by WebView.removeJavascriptInterface().",prerenderFinalStatusAllPrerenderingCanceled:"All prerendered pages were unloaded by the browser for some reason (For example, WebViewCompat.addWebMessageListener() was called during prerendering.)",prerenderFinalStatusWindowClosed:"The prerendered page was unloaded because it called window.close().",prerenderFinalStatusBrowsingDataRemoved:"The prerendered page was unloaded because browsing data was removed.",statusNotTriggered:"Not triggered",statusPending:"Pending",statusRunning:"Running",statusReady:"Ready",statusSuccess:"Success",statusFailure:"Failure"},P=e.i18n.registerUIStrings("panels/application/preloading/components/PreloadingString.ts",S),y=e.i18n.getLazilyComputedLocalizedString.bind(void 0,P),w=e.i18n.getLocalizedString.bind(void 0,P),R={PrefetchFailedIneligibleRedirect:{name:y(S.PrefetchFailedIneligibleRedirect)},PrefetchFailedInvalidRedirect:{name:y(S.PrefetchFailedInvalidRedirect)},PrefetchFailedMIMENotSupported:{name:y(S.PrefetchFailedMIMENotSupported)},PrefetchFailedNetError:{name:y(S.PrefetchFailedNetError)},PrefetchFailedNon2XX:{name:y(S.PrefetchFailedNon2XX)},PrefetchIneligibleRetryAfter:{name:y(S.PrefetchIneligibleRetryAfter)},PrefetchIsPrivacyDecoy:{name:y(S.PrefetchIsPrivacyDecoy)},PrefetchIsStale:{name:y(S.PrefetchIsStale)},PrefetchNotEligibleBrowserContextOffTheRecord:{name:y(S.PrefetchNotEligibleBrowserContextOffTheRecord)},PrefetchNotEligibleDataSaverEnabled:{name:y(S.PrefetchNotEligibleDataSaverEnabled)},PrefetchNotEligibleExistingProxy:{name:y(S.PrefetchNotEligibleExistingProxy)},PrefetchNotEligibleHostIsNonUnique:{name:y(S.PrefetchNotEligibleHostIsNonUnique)},PrefetchNotEligibleNonDefaultStoragePartition:{name:y(S.PrefetchNotEligibleNonDefaultStoragePartition)},PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy:{name:y(S.PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy)},PrefetchNotEligibleSchemeIsNotHttps:{name:y(S.PrefetchNotEligibleSchemeIsNotHttps)},PrefetchNotEligibleUserHasCookies:{name:y(S.PrefetchNotEligibleUserHasCookies)},PrefetchNotEligibleUserHasServiceWorker:{name:y(S.PrefetchNotEligibleUserHasServiceWorker)},PrefetchNotUsedCookiesChanged:{name:y(S.PrefetchNotUsedCookiesChanged)},PrefetchProxyNotAvailable:{name:y(S.PrefetchProxyNotAvailable)},PrefetchNotUsedProbeFailed:{name:y(S.PrefetchNotUsedProbeFailed)},PrefetchEvictedForNewerPrefetch:{name:y(S.PrefetchEvictedForNewerPrefetch)},PrefetchEvictedAfterCandidateRemoved:{name:y(S.PrefetchEvictedAfterCandidateRemoved)},PrefetchNotEligibleBatterySaverEnabled:{name:y(S.PrefetchNotEligibleBatterySaverEnabled)},PrefetchNotEligiblePreloadingDisabled:{name:y(S.PrefetchNotEligiblePreloadingDisabled)},PrefetchNotEligibleUserHasServiceWorkerNoFetchHandler:{name:()=>e.i18n.lockedString("Unknown")},PrefetchNotEligibleRedirectFromServiceWorker:{name:()=>e.i18n.lockedString("Unknown")},PrefetchNotEligibleRedirectToServiceWorker:{name:()=>e.i18n.lockedString("Unknown")},PrefetchEvictedAfterBrowsingDataRemoved:{name:y(S.PrefetchEvictedAfterBrowsingDataRemoved)}};function N({prefetchStatus:t}){switch(t){case null:case"PrefetchNotStarted":case"PrefetchNotFinishedInTime":case"PrefetchResponseUsed":case"PrefetchAllowed":case"PrefetchHeldback":case"PrefetchSuccessfulButNotUsed":return null;case"PrefetchFailedIneligibleRedirect":return R.PrefetchFailedIneligibleRedirect.name();case"PrefetchFailedInvalidRedirect":return R.PrefetchFailedInvalidRedirect.name();case"PrefetchFailedMIMENotSupported":return R.PrefetchFailedMIMENotSupported.name();case"PrefetchFailedNetError":return R.PrefetchFailedNetError.name();case"PrefetchFailedNon2XX":return R.PrefetchFailedNon2XX.name();case"PrefetchIneligibleRetryAfter":return R.PrefetchIneligibleRetryAfter.name();case"PrefetchEvictedForNewerPrefetch":return R.PrefetchEvictedForNewerPrefetch.name();case"PrefetchEvictedAfterCandidateRemoved":return R.PrefetchEvictedAfterCandidateRemoved.name();case"PrefetchIsPrivacyDecoy":return R.PrefetchIsPrivacyDecoy.name();case"PrefetchIsStale":return R.PrefetchIsStale.name();case"PrefetchNotEligibleBrowserContextOffTheRecord":return R.PrefetchNotEligibleBrowserContextOffTheRecord.name();case"PrefetchNotEligibleDataSaverEnabled":return R.PrefetchNotEligibleDataSaverEnabled.name();case"PrefetchNotEligibleExistingProxy":return R.PrefetchNotEligibleExistingProxy.name();case"PrefetchNotEligibleHostIsNonUnique":return R.PrefetchNotEligibleHostIsNonUnique.name();case"PrefetchNotEligibleNonDefaultStoragePartition":return R.PrefetchNotEligibleNonDefaultStoragePartition.name();case"PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy":return R.PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy.name();case"PrefetchNotEligibleSchemeIsNotHttps":return R.PrefetchNotEligibleSchemeIsNotHttps.name();case"PrefetchNotEligibleUserHasCookies":return R.PrefetchNotEligibleUserHasCookies.name();case"PrefetchNotEligibleUserHasServiceWorker":return R.PrefetchNotEligibleUserHasServiceWorker.name();case"PrefetchNotUsedCookiesChanged":return R.PrefetchNotUsedCookiesChanged.name();case"PrefetchProxyNotAvailable":return R.PrefetchProxyNotAvailable.name();case"PrefetchNotUsedProbeFailed":return R.PrefetchNotUsedProbeFailed.name();case"PrefetchNotEligibleBatterySaverEnabled":return R.PrefetchNotEligibleBatterySaverEnabled.name();case"PrefetchNotEligiblePreloadingDisabled":return R.PrefetchNotEligiblePreloadingDisabled.name();case"PrefetchNotEligibleUserHasServiceWorkerNoFetchHandler":return R.PrefetchNotEligibleUserHasServiceWorkerNoFetchHandler.name();case"PrefetchNotEligibleRedirectFromServiceWorker":return R.PrefetchNotEligibleRedirectFromServiceWorker.name();case"PrefetchNotEligibleRedirectToServiceWorker":return R.PrefetchNotEligibleRedirectToServiceWorker.name();case"PrefetchEvictedAfterBrowsingDataRemoved":return R.PrefetchEvictedAfterBrowsingDataRemoved.name();default:return e.i18n.lockedString(`Unknown failure reason: ${t}`)}}function k(t){switch(t.prerenderStatus){case null:case"Activated":return null;case"Destroyed":case"DidFailLoad":case"Stop":return e.i18n.lockedString("Unknown");case"LowEndDevice":return w(S.prerenderFinalStatusLowEndDevice);case"InvalidSchemeRedirect":return w(S.prerenderFinalStatusInvalidSchemeRedirect);case"InvalidSchemeNavigation":return w(S.prerenderFinalStatusInvalidSchemeNavigation);case"NavigationRequestBlockedByCsp":return w(S.prerenderFinalStatusNavigationRequestBlockedByCsp);case"MojoBinderPolicy":return n(t.disallowedMojoInterface),w(S.prerenderFinalStatusMojoBinderPolicy,{PH1:t.disallowedMojoInterface});case"RendererProcessCrashed":return w(S.prerenderFinalStatusRendererProcessCrashed);case"RendererProcessKilled":return w(S.prerenderFinalStatusRendererProcessKilled);case"Download":return w(S.prerenderFinalStatusDownload);case"TriggerDestroyed":case"NavigationNotCommitted":case"ActivatedBeforeStarted":case"InactivePageRestriction":case"StartFailed":case"ActivatedInBackground":case"ActivationNavigationDestroyedBeforeSuccess":return e.i18n.lockedString("Internal error");case"NavigationBadHttpStatus":return w(S.prerenderFinalStatusNavigationBadHttpStatus);case"ClientCertRequested":return w(S.prerenderFinalStatusClientCertRequested);case"NavigationRequestNetworkError":return w(S.prerenderFinalStatusNavigationRequestNetworkError);case"CancelAllHostsForTesting":case"EmbedderHostDisallowed":case"TabClosedByUserGesture":case"TabClosedWithoutUserGesture":case"PreloadingUnsupportedByWebContents":throw new Error("unreachable");case"SslCertificateError":return w(S.prerenderFinalStatusSslCertificateError);case"LoginAuthRequested":return w(S.prerenderFinalStatusLoginAuthRequested);case"UaChangeRequiresReload":return w(S.prerenderFinalStatusUaChangeRequiresReload);case"BlockedByClient":return w(S.prerenderFinalStatusBlockedByClient);case"AudioOutputDeviceRequested":return w(S.prerenderFinalStatusAudioOutputDeviceRequested);case"MixedContent":return w(S.prerenderFinalStatusMixedContent);case"TriggerBackgrounded":return w(S.prerenderFinalStatusTriggerBackgrounded);case"MemoryLimitExceeded":return w(S.prerenderFinalStatusMemoryLimitExceeded);case"DataSaverEnabled":return w(S.prerenderFinalStatusDataSaverEnabled);case"TriggerUrlHasEffectiveUrl":return w(S.prerenderFinalStatusHasEffectiveUrl);case"TimeoutBackgrounded":return w(S.prerenderFinalStatusTimeoutBackgrounded);case"CrossSiteRedirectInInitialNavigation":return w(S.prerenderFinalStatusCrossSiteRedirectInInitialNavigation);case"CrossSiteNavigationInInitialNavigation":return w(S.prerenderFinalStatusCrossSiteNavigationInInitialNavigation);case"SameSiteCrossOriginRedirectNotOptInInInitialNavigation":return w(S.prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInInitialNavigation);case"SameSiteCrossOriginNavigationNotOptInInInitialNavigation":return w(S.prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInInitialNavigation);case"ActivationNavigationParameterMismatch":return w(S.prerenderFinalStatusActivationNavigationParameterMismatch);case"PrimaryMainFrameRendererProcessCrashed":return w(S.prerenderFinalStatusPrimaryMainFrameRendererProcessCrashed);case"PrimaryMainFrameRendererProcessKilled":return w(S.prerenderFinalStatusPrimaryMainFrameRendererProcessKilled);case"ActivationFramePolicyNotCompatible":return w(S.prerenderFinalStatusActivationFramePolicyNotCompatible);case"PreloadingDisabled":return w(S.prerenderFinalStatusPreloadingDisabled);case"BatterySaverEnabled":return w(S.prerenderFinalStatusBatterySaverEnabled);case"ActivatedDuringMainFrameNavigation":return w(S.prerenderFinalStatusActivatedDuringMainFrameNavigation);case"CrossSiteRedirectInMainFrameNavigation":return w(S.prerenderFinalStatusCrossSiteRedirectInMainFrameNavigation);case"CrossSiteNavigationInMainFrameNavigation":return w(S.prerenderFinalStatusCrossSiteNavigationInMainFrameNavigation);case"SameSiteCrossOriginRedirectNotOptInInMainFrameNavigation":return w(S.prerenderFinalStatusSameSiteCrossOriginRedirectNotOptInInMainFrameNavigation);case"SameSiteCrossOriginNavigationNotOptInInMainFrameNavigation":return w(S.prerenderFinalStatusSameSiteCrossOriginNavigationNotOptInInMainFrameNavigation);case"MemoryPressureOnTrigger":return w(S.prerenderFinalStatusMemoryPressureOnTrigger);case"MemoryPressureAfterTriggered":return w(S.prerenderFinalStatusMemoryPressureAfterTriggered);case"PrerenderingDisabledByDevTools":return w(S.prerenderFinalStatusPrerenderingDisabledByDevTools);case"SpeculationRuleRemoved":return w(S.prerenderFinalStatusSpeculationRuleRemoved);case"ActivatedWithAuxiliaryBrowsingContexts":return w(S.prerenderFinalStatusActivatedWithAuxiliaryBrowsingContexts);case"MaxNumOfRunningEagerPrerendersExceeded":return w(S.prerenderFinalStatusMaxNumOfRunningEagerPrerendersExceeded);case"MaxNumOfRunningEmbedderPrerendersExceeded":return w(S.prerenderFinalStatusMaxNumOfRunningEmbedderPrerendersExceeded);case"MaxNumOfRunningNonEagerPrerendersExceeded":return w(S.prerenderFinalStatusMaxNumOfRunningNonEagerPrerendersExceeded);case"PrerenderingUrlHasEffectiveUrl":return w(S.prerenderFinalStatusPrerenderingUrlHasEffectiveUrl);case"RedirectedPrerenderingUrlHasEffectiveUrl":return w(S.prerenderFinalStatusRedirectedPrerenderingUrlHasEffectiveUrl);case"ActivationUrlHasEffectiveUrl":return w(S.prerenderFinalStatusActivationUrlHasEffectiveUrl);case"JavaScriptInterfaceAdded":return w(S.prerenderFinalStatusJavaScriptInterfaceAdded);case"JavaScriptInterfaceRemoved":return w(S.prerenderFinalStatusJavaScriptInterfaceRemoved);case"AllPrerenderingCanceled":return w(S.prerenderFinalStatusAllPrerenderingCanceled);case"WindowClosed":return w(S.prerenderFinalStatusWindowClosed);case"BrowsingDataRemoved":return w(S.prerenderFinalStatusBrowsingDataRemoved);case"SlowNetwork":case"OtherPrerenderedPageActivated":case"V8OptimizerDisabled":case"PrerenderFailedDuringPrefetch":return"";default:return e.i18n.lockedString(`Unknown failure reason: ${t.prerenderStatus}`)}}function F(e,t){const r=void 0===e.url?t:e.url;return s.ResourceUtils.displayNameForURL(r)}function T(e,t){return!e.errorMessage&&e.tag?'"'+e.tag+'"':F(e,t)}function E(t){switch(t){case"Prefetch":return e.i18n.lockedString("Prefetch");case"Prerender":return e.i18n.lockedString("Prerender");case"PrerenderUntilScript":return e.i18n.lockedString("Prerender until script")}}function I(t){const r=function(t){switch(t){case"NotTriggered":return w(S.statusNotTriggered);case"Pending":return w(S.statusPending);case"Running":return w(S.statusRunning);case"Ready":return w(S.statusReady);case"Success":return w(S.statusSuccess);case"Failure":return w(S.statusFailure);case"NotSupported":return e.i18n.lockedString("Internal error")}}(t.status);if("Failure"!==t.status)return r;switch(t.action){case"Prefetch":return r+" - "+(N(t)??e.i18n.lockedString("Internal error"));case"Prerender":case"PrerenderUntilScript":{const e=k(t);return n(e),r+" - "+e}}}const{charDiff:$}=r.Diff.DiffWrapper,{render:U,html:x,Directives:{styleMap:C}}=i,D={url:"URL",action:"Action",status:"Status",statusNotTriggered:"Not triggered",statusPending:"Pending",statusRunning:"Running",statusReady:"Ready",statusSuccess:"Success",statusFailure:"Failure"},L=e.i18n.registerUIStrings("panels/application/preloading/components/MismatchedPreloadingGrid.ts",D),B=e.i18n.getLocalizedString.bind(void 0,L);let M=class{static status(t){switch(t){case"NotTriggered":return B(D.statusNotTriggered);case"Pending":return B(D.statusPending);case"Running":return B(D.statusRunning);case"Ready":return B(D.statusReady);case"Success":return B(D.statusSuccess);case"Failure":return B(D.statusFailure);case"NotSupported":return e.i18n.lockedString("Internal error")}}};class H extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t=null;connectedCallback(){this.#r()}set data(e){this.#t=e,this.#r()}#r(){if(!this.#t)return;const{pageURL:e}=this.#t;U(x`<devtools-data-grid striped inline>
          <table>
            <tr>
              <th id="url" weight="40" sortable>
                ${B(D.url)}
              </th>
              <th id="action" weight="15" sortable>
                ${B(D.action)}
              </th>
              <th id="status" weight="15" sortable>
                ${B(D.status)}
              </th>
            </tr>
            ${this.#t.rows.map(t=>({row:t,diffScore:r.Diff.DiffWrapper.characterScore(t.url,e)})).sort((e,t)=>t.diffScore-e.diffScore).map(({row:t})=>x`
                <tr>
                  <td>
                    <div>${$(t.url,e).map(e=>{const t=e[1];switch(e[0]){case r.Diff.Operation.Equal:return x`<span>${t}</span>`;case r.Diff.Operation.Insert:return x`<span style=${C({color:"var(--sys-color-green)","text-decoration":"line-through"})}
                               >${t}</span>`;case r.Diff.Operation.Delete:return x`<span style=${C({color:"var(--sys-color-error)"})}>${t}</span>`;case r.Diff.Operation.Edit:return x`<span style=${C({color:"var(--sys-color-green","text-decoration":"line-through"})}
                            >${t}</span>`;default:throw new Error("unreachable")}})}
                    </div>
                  </td>
                  <td>${E(t.action)}</td>
                  <td>${M.status(t.status)}</td>
                </tr>
              `)}
          </table>
        </devtools-data-grid>`,this.#e,{host:this})}}customElements.define("devtools-resources-mismatched-preloading-grid",H);var A=Object.freeze({__proto__:null,MismatchedPreloadingGrid:H,i18nString:B}),O=`:host{display:flex;height:100%}devtools-report{flex-grow:1}button.link{color:var(--sys-color-primary);text-decoration:underline;padding:0;border:none;background:none;font-family:inherit;font-size:inherit;height:16px}button.link devtools-icon{vertical-align:sub}.link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer}\n/*# sourceURL=${import.meta.resolve("./preloadingDetailsReportView.css")} */`;const{html:W}=i,q={noElementSelected:"No element selected",selectAnElementForMoreDetails:"Select an element for more details",detailsDetailedInformation:"Detailed information",detailsAction:"Action",detailsStatus:"Status",detailsTargetHint:"Target hint",detailsFailureReason:"Failure reason",detailsRuleSet:"Rule set",automaticallyFellBackToPrefetch:"(automatically fell back to prefetch)",detailedStatusNotTriggered:"Speculative load attempt is not yet triggered.",detailedStatusPending:"Speculative load attempt is eligible but pending.",detailedStatusRunning:"Speculative load is running.",detailedStatusReady:"Speculative load finished and the result is ready for the next navigation.",detailedStatusSuccess:"Speculative load finished and used for a navigation.",detailedStatusFailure:"Speculative load failed.",detailedStatusFallbackToPrefetch:"Speculative load failed, but fallback to prefetch succeeded.",buttonInspect:"Inspect",buttonClickToInspect:"Click to inspect prerendered page",buttonClickToRevealRuleSet:"Click to reveal rule set"},_=e.i18n.registerUIStrings("panels/application/preloading/components/PreloadingDetailsReportView.ts",q),j=e.i18n.getLocalizedString.bind(void 0,_);class V{static detailedStatus({status:t}){switch(t){case"NotTriggered":return j(q.detailedStatusNotTriggered);case"Pending":return j(q.detailedStatusPending);case"Running":return j(q.detailedStatusRunning);case"Ready":return j(q.detailedStatusReady);case"Success":return j(q.detailedStatusSuccess);case"Failure":return j(q.detailedStatusFailure);case"NotSupported":return e.i18n.lockedString("Internal error")}}static detailedTargetHint(e){switch(n(e.targetHint),e.targetHint){case"Blank":return"_blank";case"Self":return"_self"}}}class z extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t=null;set data(e){this.#t=e,this.#r()}async#r(){await l.write("PreloadingDetailsReportView render",()=>{if(null===this.#t)return void i.render(W`
          <style>${O}</style>
          <style>${c.inspectorCommonStyles}</style>
          <div class="empty-state">
            <span class="empty-state-header">${j(q.noElementSelected)}</span>
            <span class="empty-state-description">${j(q.selectAnElementForMoreDetails)}</span>
          </div>
        `,this.#e,{host:this});const e=this.#t.pipeline,t=this.#t.pageURL,r="Failure"===e.getPrerender()?.status&&("Ready"===e.getPrefetch()?.status||"Success"===e.getPrefetch()?.status);i.render(W`
        <style>${O}</style>
        <style>${c.inspectorCommonStyles}</style>
        <devtools-report
          .data=${{reportTitle:"Speculative Loading Attempt"}}
          jslog=${u.section("preloading-details")}>
          <devtools-report-section-header>${j(q.detailsDetailedInformation)}</devtools-report-section-header>

          ${this.#a()}
          ${this.#i(r)}
          ${this.#n(r)}
          ${this.#s()}
          ${this.#o()}
          ${this.#d()}

          ${this.#t.ruleSets.map(e=>this.#l(e,t))}
        </devtools-report>
      `,this.#e,{host:this})})}#a(){n(this.#t);const t=this.#t.pipeline.getOriginallyTriggered(),r=this.#t.pipeline.getPrefetch()?.status;let a;if("Prefetch"===t.action&&void 0!==t.requestId&&"NotTriggered"!==r){const{requestId:e,key:{url:r}}=t;a=W`
          <devtools-request-link-icon
            .data=${{affectedRequest:{requestId:e,url:r},requestResolver:this.#t.requestResolver||new d.RequestResolver.RequestResolver,displayURL:!0,urlToDisplay:r}}
          >
          </devtools-request-link-icon>
      `}else a=W`
          <div class="text-ellipsis" title=${t.key.url}>${t.key.url}</div>
      `;return W`
        <devtools-report-key>${e.i18n.lockedString("URL")}</devtools-report-key>
        <devtools-report-value>
          ${a}
        </devtools-report-value>
    `}#c(e){return["Prerender","PrerenderUntilScript"].includes(e)}#i(e){n(this.#t);const r=this.#t.pipeline.getOriginallyTriggered(),a=E(r.action);let s=i.nothing;e&&(s=W`${j(q.automaticallyFellBackToPrefetch)}`);let o=i.nothing;return(()=>{if(!this.#c(r.action))return;if(null===t.TargetManager.TargetManager.instance().primaryPageTarget())return;const e=t.TargetManager.TargetManager.instance().targets().find(e=>"prerender"===e.targetInfo()?.subtype&&e.inspectedURL()===r.key.url),a=void 0===e;o=W`
          <devtools-button
            @click=${()=>{void 0!==e&&c.Context.Context.instance().setFlavor(t.Target.Target,e)}}
            .title=${j(q.buttonClickToInspect)}
            .size=${"SMALL"}
            .variant=${"outlined"}
            .disabled=${a}
            jslog=${u.action("inspect-prerendered-page").track({click:!0})}
          >
            ${j(q.buttonInspect)}
          </devtools-button>
      `})(),W`
        <devtools-report-key>${j(q.detailsAction)}</devtools-report-key>
        <devtools-report-value>
          <div class="text-ellipsis" title="">
            ${a} ${s} ${o}
          </div>
        </devtools-report-value>
    `}#n(e){n(this.#t);const t=this.#t.pipeline.getOriginallyTriggered(),r=e?j(q.detailedStatusFallbackToPrefetch):V.detailedStatus(t);return W`
        <devtools-report-key>${j(q.detailsStatus)}</devtools-report-key>
        <devtools-report-value>
          ${r}
        </devtools-report-value>
    `}#o(){n(this.#t);const e=this.#t.pipeline.getOriginallyTriggered();if("Prefetch"!==e.action)return i.nothing;const t=N(e);return null===t?i.nothing:W`
        <devtools-report-key>${j(q.detailsFailureReason)}</devtools-report-key>
        <devtools-report-value>
          ${t}
        </devtools-report-value>
    `}#s(){n(this.#t);const e=this.#t.pipeline.getOriginallyTriggered();return this.#c(e.action)&&void 0!==e.key.targetHint?W`
        <devtools-report-key>${j(q.detailsTargetHint)}</devtools-report-key>
        <devtools-report-value>
          ${V.detailedTargetHint(e.key)}
        </devtools-report-value>
    `:i.nothing}#d(){n(this.#t);const e=this.#t.pipeline.getOriginallyTriggered();if(!this.#c(e.action))return i.nothing;const t=k(e);return null===t?i.nothing:W`
        <devtools-report-key>${j(q.detailsFailureReason)}</devtools-report-key>
        <devtools-report-value>
          ${t}
        </devtools-report-value>
    `}#l(e,t){const r=F(e,t);return W`
      <devtools-report-key>${j(q.detailsRuleSet)}</devtools-report-key>
      <devtools-report-value>
        <div class="text-ellipsis" title="">
          <button class="link" role="link"
            @click=${()=>{o.Revealer.reveal(new p.PreloadingForward.RuleSetView(e.id))}}
            title=${j(q.buttonClickToRevealRuleSet)}
            style=${i.Directives.styleMap({color:"var(--sys-color-primary)","text-decoration":"underline"})}
            jslog=${u.action("reveal-rule-set").track({click:!0})}
          >
            ${r}
          </button>
        </div>
      </devtools-report-value>
    `}}customElements.define("devtools-resources-preloading-details-report-view",z);var G=Object.freeze({__proto__:null,PreloadingDetailsReportView:z}),X=`#container{padding:6px 12px;border-bottom:1px solid var(--sys-color-divider);align-items:center;display:flex}#contents .key{grid-column-start:span 2;font-weight:bold}#contents .value{grid-column-start:span 2;margin-top:var(--sys-size-6)}#footer{margin-top:var(--sys-size-6);margin-bottom:var(--sys-size-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;grid-column-start:span 2}x-link{color:var(--sys-color-primary);text-decoration-line:underline}\n/*# sourceURL=${import.meta.resolve("./preloadingDisabledInfobar.css")} */`;const{html:J}=i,K={infobarPreloadingIsDisabled:"Speculative loading is disabled",infobarPreloadingIsForceEnabled:"Speculative loading is force-enabled",titleReasonsPreventingPreloading:"Reasons preventing speculative loading",headerDisabledByPreference:"User settings or extensions",descriptionDisabledByPreference:"Speculative loading is disabled because of user settings or an extension. Go to {PH1} to update your preference. Go to {PH2} to disable any extension that blocks speculative loading.",preloadingPagesSettings:"Preload pages settings",extensionsSettings:"Extensions settings",headerDisabledByDataSaver:"Data Saver",descriptionDisabledByDataSaver:"Speculative loading is disabled because of the operating system's Data Saver mode.",headerDisabledByBatterySaver:"Battery Saver",descriptionDisabledByBatterySaver:"Speculative loading is disabled because of the operating system's Battery Saver mode.",headerDisabledByHoldbackPrefetchSpeculationRules:"Prefetch was disabled, but is force-enabled now",descriptionDisabledByHoldbackPrefetchSpeculationRules:"Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.",headerDisabledByHoldbackPrerenderSpeculationRules:"Prerendering was disabled, but is force-enabled now",descriptionDisabledByHoldbackPrerenderSpeculationRules:"Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.",footerLearnMore:"Learn more"},Q=e.i18n.registerUIStrings("panels/application/preloading/components/PreloadingDisabledInfobar.ts",K),Y=e.i18n.getLocalizedString.bind(void 0,Q);class Z extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t={disabledByPreference:!1,disabledByDataSaver:!1,disabledByBatterySaver:!1,disabledByHoldbackPrefetchSpeculationRules:!1,disabledByHoldbackPrerenderSpeculationRules:!1};connectedCallback(){this.#r()}set data(e){this.#t=e,this.#r()}async#r(){await l.write("PreloadingDisabledInfobar render",()=>{i.render(this.#u(),this.#e,{host:this})})}#u(){const e=this.#t.disabledByHoldbackPrefetchSpeculationRules||this.#t.disabledByHoldbackPrerenderSpeculationRules;let t;if(this.#t.disabledByPreference||this.#t.disabledByDataSaver||this.#t.disabledByBatterySaver)t=Y(K.infobarPreloadingIsDisabled);else{if(!e)return i.nothing;t=Y(K.infobarPreloadingIsForceEnabled)}return J`
      <style>${X}</style>
      <div id='container'>
        <span id='header'>
          ${t}
        </span>

        <devtools-button-dialog
          .data=${{iconName:"info",variant:"icon",closeButton:!0,position:"auto",horizontalAlignment:"auto",closeOnESC:!0,closeOnScroll:!1,dialogTitle:Y(K.titleReasonsPreventingPreloading)}}
          jslog=${u.dialog("preloading-disabled").track({resize:!0,keydown:"Escape"})}
        >
          ${this.#p()}
        </devtools-button-dialog>
      </div>
    `}#p(){const e="https://developer.chrome.com/blog/prerender-pages/",t=c.XLink.XLink.create(e,Y(K.footerLearnMore),void 0,void 0,"learn-more"),r=c.Fragment.html`
      <x-link class="icon-link devtools-link" tabindex="0" href="${e}"></x-link>
    `;return J`
      <div id='contents'>
        <devtools-report>
          ${this.#g()}
          ${this.#h()}
          ${this.#v()}
          ${this.#f()}
          ${this.#m()}
        </devtools-report>
        <div id='footer'>
          ${t}
          ${r}
        </div>
      </div>
    `}#b(e,t,r){return e?J`
      <div class='key'>
        ${t}
      </div>
      <div class='value'>
        ${r}
      </div>
    `:i.nothing}#g(){const t=new g.ChromeLink.ChromeLink;t.href="chrome://settings/performance",t.textContent=Y(K.preloadingPagesSettings);const r=new g.ChromeLink.ChromeLink;r.href="chrome://extensions",r.textContent=Y(K.extensionsSettings);const a=e.i18n.getFormatLocalizedString(Q,K.descriptionDisabledByPreference,{PH1:t,PH2:r});return this.#b(this.#t.disabledByPreference,Y(K.headerDisabledByPreference),a)}#h(){return this.#b(this.#t.disabledByDataSaver,Y(K.headerDisabledByDataSaver),Y(K.descriptionDisabledByDataSaver))}#v(){return this.#b(this.#t.disabledByBatterySaver,Y(K.headerDisabledByBatterySaver),Y(K.descriptionDisabledByBatterySaver))}#f(){return this.#b(this.#t.disabledByHoldbackPrefetchSpeculationRules,Y(K.headerDisabledByHoldbackPrefetchSpeculationRules),Y(K.descriptionDisabledByHoldbackPrefetchSpeculationRules))}#m(){return this.#b(this.#t.disabledByHoldbackPrerenderSpeculationRules,Y(K.headerDisabledByHoldbackPrerenderSpeculationRules),Y(K.descriptionDisabledByHoldbackPrerenderSpeculationRules))}}customElements.define("devtools-resources-preloading-disabled-infobar",Z);var ee=Object.freeze({__proto__:null,PreloadingDisabledInfobar:Z}),te=`:host{overflow:auto;height:100%}.preloading-container{height:100%;display:flex;flex-direction:column}.preloading-header{font-size:15px;background-color:var(--sys-color-cdt-base-container);padding:1px 4px}.preloading-placeholder{flex-grow:1;display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--sys-color-token-subtle)}devtools-data-grid{flex:auto}.inline-icon{vertical-align:text-bottom}\n/*# sourceURL=${import.meta.resolve("./preloadingGrid.css")} */`;const{PreloadingStatus:re}=t.PreloadingModel,ae={action:"Action",ruleSet:"Rule set",status:"Status",prefetchFallbackReady:"Prefetch fallback ready"},ie=e.i18n.registerUIStrings("panels/application/preloading/components/PreloadingGrid.ts",ae),ne=e.i18n.getLocalizedString.bind(void 0,ie),{render:se,html:oe,Directives:{styleMap:de}}=i;class le extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t=null;connectedCallback(){this.#r()}update(e){this.#t=e,this.#r()}#r(){if(!this.#t)return;const{rows:t,pageURL:r}=this.#t,a=""===r?null:new o.ParsedURL.ParsedURL(r).securityOrigin();se(oe`
      <style>${te}</style>
      <div class="preloading-container">
        <devtools-data-grid striped>
          <table>
            <tr>
              <th id="url" weight="40" sortable>${e.i18n.lockedString("URL")}</th>
              <th id="action" weight="15" sortable>${ne(ae.action)}</th>
              <th id="rule-set" weight="20" sortable>${ne(ae.ruleSet)}</th>
              <th id="status" weight="40" sortable>${ne(ae.status)}</th>
            </tr>
            ${t.map(e=>{const t=e.pipeline.getOriginallyTriggered(),i=e.pipeline.getPrefetch()?.status,n=e.pipeline.getPrerender()?.status,s="Failure"===n&&("Ready"===i||"Success"===i),o="Failure"===e.pipeline.getOriginallyTriggered().status;return oe`<tr @select=${()=>this.dispatchEvent(new CustomEvent("select",{detail:e.id}))}>
                <td title=${t.key.url}>${this.#S(e,a)}</td>
                <td>${E(t.action)}</td>
                <td>${0===e.ruleSets.length?"":T(e.ruleSets[0],r)}</td>
                <td>
                  <div style=${de({color:s?"var(--sys-color-orange-bright)":o?"var(--sys-color-error)":"var(--sys-color-on-surface)"})}>
                    ${o||s?oe`
                      <devtools-icon
                        name=${s?"warning-filled":"cross-circle-filled"}
                        class='medium'
                        style=${de({"vertical-align":"sub"})}
                      ></devtools-icon>`:""}
                    ${s?ne(ae.prefetchFallbackReady):I(t)}
                  </div>
                </td>
              </tr>`})}
          </table>
        </devtools-data-grid>
      </div>
    `,this.#e,{host:this})}#S(e,t){const r=e.pipeline.getOriginallyTriggered().key.url;return t&&r.startsWith(t)?r.slice(t.length):r}}customElements.define("devtools-resources-preloading-grid",le);var ce=Object.freeze({__proto__:null,PreloadingGrid:le,i18nString:ne});const ue={headerName:"Header name",initialNavigationValue:"Value in initial navigation",activationNavigationValue:"Value in activation navigation",missing:"(missing)"},pe=e.i18n.registerUIStrings("panels/application/preloading/components/PreloadingMismatchedHeadersGrid.ts",ue),ge=e.i18n.getLocalizedString.bind(void 0,pe),{render:he,html:ve}=i;class fe extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t=null;connectedCallback(){this.#r()}set data(e){null!==e.mismatchedHeaders&&(this.#t=e,this.#r())}#r(){this.#t?.mismatchedHeaders&&he(ve`
        <style>${te}</style>
        <div class="preloading-container">
          <devtools-data-grid striped inline>
            <table>
              <tr>
                <th id="header-name" weight="30" sortable>
                  ${ge(ue.headerName)}
                </th>
                <th id="initial-value" weight="30" sortable>
                  ${ge(ue.initialNavigationValue)}
                </th>
                <th id="activation-value" weight="30" sortable>
                  ${ge(ue.activationNavigationValue)}
                </th>
              </tr>
              ${this.#t.mismatchedHeaders.map(e=>ve`
                <tr>
                  <td>${e.headerName}</td>
                  <td>${e.initialValue??ge(ue.missing)}</td>
                  <td>${e.activationValue??ge(ue.missing)}</td>
                </tr>
              `)}
            </table>
          </devtools-data-grid>
        </div>
      `,this.#e,{host:this})}}customElements.define("devtools-resources-preloading-mismatched-headers-grid",fe);var me=Object.freeze({__proto__:null,PreloadingMismatchedHeadersGrid:fe,i18nString:ge}),be=`:host{display:block;height:100%}.placeholder{display:flex;height:100%}.ruleset-header{padding:4px 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:1px solid var(--sys-color-divider)}.ruleset-header devtools-icon{vertical-align:sub}\n/*# sourceURL=${import.meta.resolve("./RuleSetDetailsView.css")} */`;const{html:Se}=i,Pe={noElementSelected:"No element selected",selectAnElementForMoreDetails:"Select an element for more details"},ye=e.i18n.registerUIStrings("panels/application/preloading/components/RuleSetDetailsView.ts",Pe),we=e.i18n.getLocalizedString.bind(void 0,ye),Re=await f.CodeHighlighter.languageFromMIME("application/json");class Ne extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t=null;#P=!0;#y;set data(e){this.#t=e,this.#r()}set shouldPrettyPrint(e){this.#P=e}async#r(){await l.write("RuleSetDetailsView render",async()=>{if(null===this.#t)return void i.render(Se`
          <style>${be}</style>
          <style>${c.inspectorCommonStyles}</style>
          <div class="placeholder">
            <div class="empty-state">
              <span class="empty-state-header">${we(Pe.noElementSelected)}</span>
              <span class="empty-state-description">${we(Pe.selectAnElementForMoreDetails)}</span>
            </div>
          </div>
      `,this.#e,{host:this});const e=await this.#w();i.render(Se`
        <style>${be}</style>
        <style>${c.inspectorCommonStyles}</style>
        <div class="content">
          <div class="ruleset-header" id="ruleset-url">${this.#t?.url||t.TargetManager.TargetManager.instance().inspectedURL()}</div>
          ${this.#R()}
        </div>
        <div class="text-ellipsis">
          ${this.#N(e)}
        </div>
      `,this.#e,{host:this})})}#R(){return n(this.#t),void 0===this.#t.errorMessage?i.nothing:Se`
      <div class="ruleset-header">
        <devtools-icon name="cross-circle" class="medium">
        </devtools-icon>
        <span id="error-message-text">${this.#t.errorMessage}</span>
      </div>
    `}#N(e){return this.#y=v.EditorState.create({doc:e,extensions:[m.Config.baseConfiguration(e||""),v.lineNumbers(),v.EditorState.readOnly.of(!0),Re,v.syntaxHighlighting(f.CodeHighlighter.highlightStyle)]}),Se`
      <devtools-text-editor .style.flexGrow=${"1"} .state=${this.#y}></devtools-text-editor>
    `}async#w(){if(this.#P&&void 0!==this.#t?.sourceText){return(await h.ScriptFormatter.formatScriptContent("application/json",this.#t.sourceText)).formattedContent}return this.#t?.sourceText||""}}customElements.define("devtools-resources-rulesets-details-view",Ne);var ke=Object.freeze({__proto__:null,RuleSetDetailsView:Ne}),Fe=`:host{overflow:auto;height:100%}.ruleset-container{height:100%;display:flex;flex-direction:column}devtools-data-grid{flex:auto}.inline-icon{vertical-align:text-bottom}\n/*# sourceURL=${import.meta.resolve("./ruleSetGrid.css")} */`;const{html:Te,Directives:{styleMap:Ee}}=i,Ie={ruleSet:"Rule set",status:"Status",clickToOpenInElementsPanel:"Click to open in Elements panel",clickToOpenInNetworkPanel:"Click to open in Network panel",errors:"{errorCount, plural, =1 {# error} other {# errors}}",buttonRevealPreloadsAssociatedWithRuleSet:"Reveal speculative loads associated with this rule set"},$e=e.i18n.registerUIStrings("panels/application/preloading/components/RuleSetGrid.ts",Ie),Ue=e.i18n.getLocalizedString.bind(void 0,$e);class xe extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t=null;connectedCallback(){this.#r()}update(e){this.#t=e,this.#r()}async#k(e){void 0!==e.backendNodeId?await this.#F(e):void 0!==e.url&&e.requestId&&await this.#T(e)}async#F(e){n(e.backendNodeId);const r=t.TargetManager.TargetManager.instance().scopeTarget();null!==r&&await o.Revealer.reveal(new t.DOMModel.DeferredDOMNode(r,e.backendNodeId))}async#T(e){n(e.requestId);const r=t.TargetManager.TargetManager.instance().scopeTarget()?.model(t.NetworkManager.NetworkManager)?.requestForId(e.requestId)||null;if(null===r)return;const a=b.UIRequestLocation.UIRequestLocation.tab(r,"preview",{clearFilter:!1});await o.Revealer.reveal(a)}async#E(e){await o.Revealer.reveal(new p.PreloadingForward.AttemptViewWithFilter(e.id))}#r(){if(null===this.#t)return;const{rows:e,pageURL:t}=this.#t;i.render(Te`
        <style>${Fe}</style>
        <div class="ruleset-container" jslog=${u.pane("preloading-rules")}>
          <devtools-data-grid striped>
            <table>
              <tr>
                <th id="rule-set" weight="20" sortable>
                  ${Ue(Ie.ruleSet)}
                </th>
                <th id="status" weight="80" sortable>
                  ${Ue(Ie.status)}
                </th>
              </tr>
              ${e.map(({ruleSet:e,preloadsStatusSummary:r})=>{const a=T(e,t),i=void 0!==e.backendNodeId,n=void 0!==e.url&&e.requestId;return Te`
                  <tr @select=${()=>this.dispatchEvent(new CustomEvent("select",{detail:e.id}))}>
                    <td>
                      ${i||n?Te`
                        <button class="link" role="link"
                            @click=${()=>this.#k(e)}
                            title=${Ue(i?Ie.clickToOpenInElementsPanel:Ie.clickToOpenInNetworkPanel)}
                            style=${Ee({border:"none",background:"none",color:"var(--icon-link)",cursor:"pointer","text-decoration":"underline","padding-inline-start":"0","padding-inline-end":"0"})}
                            jslog=${u.action(i?"reveal-in-elements":"reveal-in-network").track({click:!0})}
                          >
                            <devtools-icon name=${i?"code-circle":"arrow-up-down-circle"} class="medium"
                              style=${Ee({color:"var(--icon-link)","vertical-align":"sub"})}
                            ></devtools-icon>
                            ${a}
                          </button>`:a}
                  </td>
                  <td>
                    ${void 0!==e.errorType?Te`
                      <span style=${Ee({color:"var(--sys-color-error)"})}>
                        ${Ue(Ie.errors,{errorCount:1})}
                      </span>`:""} ${"SourceIsNotJsonObject"!==e.errorType&&"InvalidRulesetLevelTag"!==e.errorType?Te`
                      <button class="link" role="link"
                        @click=${()=>this.#E(e)}
                        title=${Ue(Ie.buttonRevealPreloadsAssociatedWithRuleSet)}
                        style=${Ee({color:"var(--sys-color-primary)","text-decoration":"underline",cursor:"pointer",border:"none",background:"none","padding-inline-start":"0","padding-inline-end":"0"})}
                        jslog=${u.action("reveal-preloads").track({click:!0})}>
                        ${r}
                      </button>`:""}
                  </td>
                </tr>
              `})}
            </table>
          </devtools-data-grid>
        </div>
      `,this.#e,{host:this})}}customElements.define("devtools-resources-ruleset-grid",xe);var Ce=Object.freeze({__proto__:null,RuleSetGrid:xe,i18nString:Ue}),De=`:host{overflow:auto;height:100%}button{font-size:inherit}devtools-report{padding:1em 0}devtools-report-section-header{padding-bottom:0;margin-bottom:-1.5em}devtools-report-section{min-width:fit-content}devtools-report-divider{margin:1em 0}.reveal-links{white-space:nowrap}.link{border:none;background:none;color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px;padding:0}.status-badge-container{white-space:nowrap;margin:8px 0 24px}.status-badge-container span{margin-right:2px}.status-badge{border-radius:4px;padding:4px;devtools-icon{width:16px;height:16px}}.status-badge-success{background:var(--sys-color-surface-green)}.status-badge-failure{background:var(--sys-color-error-container)}.status-badge-neutral{background:var(--sys-color-neutral-container)}\n/*# sourceURL=${import.meta.resolve("./usedPreloadingView.css")} */`;const{html:Le}=i,Be={speculativeLoadingStatusForThisPage:"Speculative loading status for this page",detailsFailureReason:"Failure reason",downgradedPrefetchUsed:"The initiating page attempted to prerender this page's URL. The prerender failed, but the resulting response body was still used as a prefetch.",prefetchUsed:"This page was successfully prefetched.",prerenderUsed:"This page was successfully prerendered.",prefetchFailed:"The initiating page attempted to prefetch this page's URL, but the prefetch failed, so a full navigation was performed instead.",prerenderFailed:"The initiating page attempted to prerender this page's URL, but the prerender failed, so a full navigation was performed instead.",noPreloads:"The initiating page did not attempt to speculatively load this page's URL.",currentURL:"Current URL",preloadedURLs:"URLs being speculatively loaded by the initiating page",speculationsInitiatedByThisPage:"Speculations initiated by this page",viewAllRules:"View all speculation rules",viewAllSpeculations:"View all speculations",learnMore:"Learn more",mismatchedHeadersDetail:"Mismatched HTTP request headers",badgeSuccess:"Success",badgeFailure:"Failure",badgeNoSpeculativeLoads:"No speculative loads",badgeNotTriggeredWithCount:"{n, plural, =1 {# not triggered} other {# not triggered}}",badgeInProgressWithCount:"{n, plural, =1 {# in progress} other {# in progress}}",badgeSuccessWithCount:"{n, plural, =1 {# success} other {# success}}",badgeFailureWithCount:"{n, plural, =1 {# failure} other {# failures}}"},Me=e.i18n.registerUIStrings("panels/application/preloading/components/UsedPreloadingView.ts",Be),He=e.i18n.getLocalizedString.bind(void 0,Me);class Ae extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t={pageURL:"",previousAttempts:[],currentAttempts:[]};set data(e){this.#t=e,this.#r()}async#r(){await l.write("UsedPreloadingView render",()=>{i.render(this.#u(),this.#e,{host:this})})}#u(){return Le`
      <style>${De}</style>
      <devtools-report>
        ${this.#I()}

        <devtools-report-divider></devtools-report-divider>

        ${this.#$()}

        <devtools-report-divider></devtools-report-divider>

        <devtools-report-section>
          ${c.XLink.XLink.create("https://permanently-removed.invalid//blog/prerender-pages/",He(Be.learnMore),"link")}
        </devtools-report-section>
      </devtools-report>
    `}#c(e){return["Prerender","PrerenderUntilScript"].includes(e)}#U(e){return this.#c(e.action)}#I(){const e=o.ParsedURL.ParsedURL.urlWithoutHash(this.#t.pageURL),t=this.#t.previousAttempts.filter(t=>o.ParsedURL.ParsedURL.urlWithoutHash(t.key.url)===e),r=t.filter(e=>"Prefetch"===e.key.action)[0],a=t.filter(e=>this.#c(e.action))[0];let s,d,l,c="NoPreloads";switch(c="Failure"===a?.status&&"Success"===r?.status?"DowngradedPrerenderToPrefetchAndUsed":"Success"===r?.status?"PrefetchUsed":"Success"===a?.status?"PrerenderUsed":"Failure"===r?.status?"PrefetchFailed":"Failure"===a?.status?"PrerenderFailed":"NoPreloads",c){case"DowngradedPrerenderToPrefetchAndUsed":s=this.#x(),d=Le`${He(Be.downgradedPrefetchUsed)}`;break;case"PrefetchUsed":s=this.#x(),d=Le`${He(Be.prefetchUsed)}`;break;case"PrerenderUsed":s=this.#x(),d=Le`${He(Be.prerenderUsed)}`;break;case"PrefetchFailed":s=this.#C(),d=Le`${He(Be.prefetchFailed)}`;break;case"PrerenderFailed":s=this.#C(),d=Le`${He(Be.prerenderFailed)}`;break;case"NoPreloads":s=this.#D(He(Be.badgeNoSpeculativeLoads)),d=Le`${He(Be.noPreloads)}`}"PrefetchFailed"===c?(n(r),l=N(r)):"PrerenderFailed"!==c&&"DowngradedPrerenderToPrefetchAndUsed"!==c||(n(a),l=k(a));let u=i.nothing;return void 0!==l&&(u=Le`
      <devtools-report-section-header>${He(Be.detailsFailureReason)}</devtools-report-section-header>
      <devtools-report-section>
        ${l}
      </devtools-report-section>
      `),Le`
      <devtools-report-section-header>${He(Be.speculativeLoadingStatusForThisPage)}</devtools-report-section-header>
      <devtools-report-section>
        <div>
          <div class="status-badge-container">
            ${s}
          </div>
          <div>
            ${d}
          </div>
        </div>
      </devtools-report-section>

      ${u}

      ${this.#L(c)}
      ${this.#B()}
    `}#L(e){if("NoPreloads"!==e||0===this.#t.previousAttempts.length)return i.nothing;const t=this.#t.previousAttempts.map(e=>({url:e.key.url,action:e.key.action,status:e.status})),r={pageURL:this.#t.pageURL,rows:t};return Le`
      <devtools-report-section-header>${He(Be.currentURL)}</devtools-report-section-header>
      <devtools-report-section>
        ${c.XLink.XLink.create(this.#t.pageURL,void 0,"link",void 0,"current-url")}
      </devtools-report-section>

      <devtools-report-section-header>${He(Be.preloadedURLs)}</devtools-report-section-header>
      <devtools-report-section
      jslog=${u.section("preloaded-urls")}>
        <devtools-resources-mismatched-preloading-grid
          .data=${r}></devtools-resources-mismatched-preloading-grid>
      </devtools-report-section>
    `}#B(){const e=this.#t.previousAttempts.find(e=>this.#U(e)&&null!==e.mismatchedHeaders);if(void 0===e)return i.nothing;if(e.key.url!==this.#t.pageURL)throw new Error("unreachable");return Le`
      <devtools-report-section-header>${He(Be.mismatchedHeadersDetail)}</devtools-report-section-header>
      <devtools-report-section>
        <devtools-resources-preloading-mismatched-headers-grid
          .data=${e}></devtools-resources-preloading-mismatched-headers-grid>
      </devtools-report-section>
    `}#$(){const e=this.#t.currentAttempts.reduce((e,t)=>(e.set(t.status,(e.get(t.status)??0)+1),e),new Map),t=e.get("NotTriggered")??0,r=e.get("Ready")??0,a=e.get("Failure")??0,i=(e.get("Pending")??0)+(e.get("Running")??0),n=[];0===this.#t.currentAttempts.length&&n.push(this.#D(He(Be.badgeNoSpeculativeLoads))),t>0&&n.push(this.#D(He(Be.badgeNotTriggeredWithCount,{n:t}))),i>0&&n.push(this.#D(He(Be.badgeInProgressWithCount,{n:i}))),r>0&&n.push(this.#x(r)),a>0&&n.push(this.#C(a));return Le`
      <devtools-report-section-header>${He(Be.speculationsInitiatedByThisPage)}</devtools-report-section-header>
      <devtools-report-section>
        <div>
          <div class="status-badge-container">
            ${n}
          </div>

          <div class="reveal-links">
            <button class="link devtools-link" @click=${()=>{o.Revealer.reveal(new p.PreloadingForward.RuleSetView(null))}}
            jslog=${u.action("view-all-rules").track({click:!0})}>
              ${He(Be.viewAllRules)}
            </button>
           ・
            <button class="link devtools-link" @click=${()=>{o.Revealer.reveal(new p.PreloadingForward.AttemptViewWithFilter(null))}}
            jslog=${u.action("view-all-speculations").track({click:!0})}>
             ${He(Be.viewAllSpeculations)}
            </button>
          </div>
        </div>
      </devtools-report-section>
    `}#x(e){let t;return t=void 0===e?He(Be.badgeSuccess):He(Be.badgeSuccessWithCount,{n:e}),this.#M("status-badge status-badge-success","check-circle",t)}#C(e){let t;return t=void 0===e?He(Be.badgeFailure):He(Be.badgeFailureWithCount,{n:e}),this.#M("status-badge status-badge-failure","cross-circle",t)}#D(e){return this.#M("status-badge status-badge-neutral","clear",e)}#M(e,t,r){return Le`
      <span class=${e}>
        <devtools-icon name=${t}></devtools-icon>
        <span>
          ${r}
        </span>
      </span>
    `}}customElements.define("devtools-resources-used-preloading-view",Ae);var Oe=Object.freeze({__proto__:null,UsedPreloadingView:Ae});export{A as MismatchedPreloadingGrid,G as PreloadingDetailsReportView,ee as PreloadingDisabledInfobar,ce as PreloadingGrid,me as PreloadingMismatchedHeadersGrid,ke as RuleSetDetailsView,Ce as RuleSetGrid,Oe as UsedPreloadingView};
//# sourceMappingURL=components.js.map
