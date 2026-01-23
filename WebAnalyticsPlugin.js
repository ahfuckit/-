import { __extends } from "tslib";
/**
* WebAnalyticsPlugin.ts
* @author Ram Thiru (ramthi) and Hector Hernandez (hectorh)
* @copyright Microsoft 2018
* File containing the interfaces for WebAnalytics SDK.
*/
import dynamicProto from "@microsoft/dynamicproto-js";
import { _throwInternal, createGuid, createProcessTelemetryContext, extend, isDocumentObjectAvailable, isValueAssigned, objForEachKey, onConfigChange, setProcessTelemetryTimings } from "@microsoft/1ds-core-js";
import { AnalyticsPlugin } from "@microsoft/applicationinsights-analytics-js";
import { cfgDfFunc, cfgDfMerge } from "@microsoft/applicationinsights-core-js";
import { objDeepFreeze } from "@nevware21/ts-utils";
import { onDomLoaded } from "./DataCollector";
import { Id } from "./Id";
import { Timespan } from "./Timespan";
import { _isClickTelemetryAllowed } from "./common/Utils";
import { ContentUpdate } from "./events/ContentUpdate";
import { PageAction } from "./events/PageAction";
import { PageUnload } from "./events/PageUnload";
import { PageView } from "./events/PageView";
import { PageViewPerformance } from "./events/PageViewPerformance";
import { AutoCaptureHandler } from "./handlers/AutoCaptureHandler";
import { DomContentHandler } from "./handlers/DomContentHandler";
var defaultConfig = objDeepFreeze({
    // General library settings
    useDefaultContentName: true,
    useShortNameForContentBlob: true,
    debounceMs: cfgDfMerge({
        scroll: 600,
        resize: 3000
    }),
    biBlobAttributeTag: "data-m",
    isLoggedIn: false,
    shareAuthStatus: false,
    cookiesToCollect: ["MSFPC", "ANON"],
    autoCapture: cfgDfMerge({
        pageView: true,
        onLoad: true,
        onUnload: true,
        click: true,
        scroll: false,
        resize: false,
        lineage: false,
        jsError: true,
        msTags: true
    }),
    callback: cfgDfMerge({
        pageName: cfgDfFunc(),
        pageActionPageTags: cfgDfFunc(),
        pageViewPageTags: cfgDfFunc(),
        contentUpdatePageTags: cfgDfFunc(),
        pageActionContentTags: cfgDfFunc(),
        signedinStatus: cfgDfFunc()
    }),
    // overrideValues to use instead of collecting automatically
    coreData: cfgDfMerge({
        referrerUri: isDocumentObjectAvailable ? document.referrer : "",
        requestUri: "",
        pageName: "",
        pageType: "",
        product: "",
        market: "",
        pageTags: {}
    }),
    autoPopulateParentIdAndParentName: false,
    syncMuid: false,
    muidDomain: "microsoft.com",
    mscomCookies: false,
    manageCv: false,
    urlCollectHash: false,
    urlCollectQuery: false,
    manualPageUnload: false,
    syncPageActionNavClick: true,
    syncUnloadAction: true,
});
var ApplicationInsights = /** @class */ (function (_super) {
    __extends(ApplicationInsights, _super);
    /**
     * @constructor
     * @param WebAnalytics module configuration object.
     */
    function ApplicationInsights() {
        var _this = _super.call(this) || this;
        _this.identifier = "WebAnalyticsPlugin";
        _this.version = '4.3.12';
        var _pageView;
        var _pageAction;
        var _contentUpdate;
        var _pageUnload;
        var _pageViewPerformance;
        var _cvPlugin;
        var _theConfig;
        var _maxScroll;
        var _isPageUnloadFired = false;
        var _timespan;
        var _contentHandler;
        var _autoCaptureHandler;
        var _autoCaptureConfig;
        var _syncMuid;
        var _muidDomain;
        var _userSetContentHandler; // the value set from _self.setContentHandler, this will overwrite any dynamic config changes
        dynamicProto(ApplicationInsights, _this, function (_self, _base) {
            _initDefaults();
            _self.updateCoreDataConfig = function (coreData) {
                _theConfig.coreData = extend(true, _theConfig.coreData, coreData);
            };
            _self.refreshMetadata = function () {
                var metaTags = _contentHandler.getMetadata();
                _pageView.metaTags = metaTags;
                _contentUpdate.metaTags = metaTags;
                _pageAction.metaTags = metaTags;
                _pageViewPerformance.metaTags = metaTags;
            };
            _self.initialize = function (coreConfig, core, extensions) {
                _base.initialize(coreConfig, core, extensions);
                _populateDefaults(coreConfig, extensions);
            };
            _self.processTelemetry = function (evt, itemCtx) {
                setProcessTelemetryTimings(evt, _self.identifier);
                var event = evt;
                if (event.baseType === "PageviewData") {
                    event.name = "Ms.Web.PageView";
                    event.latency = 3 /* EventLatencyValue.RealTime */;
                }
                else if (event.baseType === "ExceptionData") {
                    event.name = "Ms.Web.ClientError";
                    event.latency = 1 /* EventLatencyValue.Normal */;
                    // Remove extra AI properties
                    delete (event.baseData["aiDataContract"]);
                }
                else if (event.baseType === "PageviewPerformanceData") {
                    event.name = "Ms.Web.PageViewPerformance";
                    event.latency = 1 /* EventLatencyValue.Normal */;
                    // Remove extra AI properties
                    delete (event.baseData["isValid"]);
                    delete (event.baseData["durationMs"]);
                }
                // Correlation
                var cv = null;
                if (event.baseType !== "PageviewData") {
                    // If automatic cV management is desired and cV plugin is available
                    if (_theConfig.manageCv) {
                        cv = _cvPlugin.getCv();
                        if (cv) {
                            cv.increment();
                        }
                    }
                }
                else {
                    if (_theConfig.manageCv) {
                        cv = _cvPlugin.getCv();
                        // Seed a new cV for each event
                        if (!cv) {
                            cv = _cvPlugin.getCv();
                        }
                        else {
                            cv.seed();
                        }
                    }
                }
                _base.processTelemetry(event, itemCtx);
            };
            _self.trackEvent = function (event, customProperties) {
                event.latency = event.latency || 1 /* EventLatencyValue.Normal */;
                event.baseData = event.baseData || {};
                event.data = event.data || {};
                // Add extra Part C
                if (isValueAssigned(customProperties)) {
                    objForEachKey(customProperties, function (prop, value) {
                        event.data[prop] = value;
                    });
                }
                _self.core.track(event);
            };
            _self.trackPageView = function (pageViewEvent, properties) {
                _resetPageUnloadProperties();
                // Initialize IDs to be used as parent and trace IDs
                _self.id.initializeIds();
                pageViewEvent.id = _self.id.getLastPageViewId();
                _base.sendPageViewInternal(pageViewEvent, properties, _getSystemProperties(pageViewEvent));
            };
            _self.capturePageView = function (overrideValues, customProperties) {
                _pageView.capturePageView(overrideValues, customProperties);
            };
            _self.trackPageViewPerformance = function (pageViewPerformance, customProperties) {
                _base.sendPageViewPerformanceInternal(pageViewPerformance, customProperties, _getSystemProperties(pageViewPerformance));
            };
            _self.capturePageViewPerformance = function (overrideValues, customProperties) {
                _pageViewPerformance.capturePageViewPerformance(overrideValues, customProperties);
            };
            _self.trackException = function (exception, customProperties) {
                exception.id = exception.id || createGuid();
                _base.sendExceptionInternal(exception, customProperties, _getSystemProperties(exception));
            };
            _self.trackPageAction = function (pageActionEvent, pageActionProperties) {
                _pageAction.trackPageAction(pageActionEvent, pageActionProperties);
            };
            _self.capturePageAction = function (element, overrideValues, customProperties, isRightClick) {
                if (_isClickTelemetryAllowed(element, overrideValues)) {
                    _pageAction.capturePageAction(element, overrideValues, customProperties, isRightClick);
                }
            };
            _self.trackContentUpdate = function (contentUpdateEvent, properties) {
                _contentUpdate.trackContentUpdate(contentUpdateEvent, properties);
            };
            _self.captureContentUpdate = function (overrideValues, customProperties) {
                _contentUpdate.captureContentUpdate(overrideValues, customProperties);
            };
            _self.trackPageUnload = function (pageUnloadEvent, properties) {
                if (!_isPageUnloadFired) {
                    _isPageUnloadFired = true;
                    _pageUnload.trackPageUnload(pageUnloadEvent, properties);
                }
            };
            _self.capturePageUnload = function (overrideValues, customProperties) {
                if (!_isPageUnloadFired) {
                    _isPageUnloadFired = true;
                    _pageUnload.capturePageUnload(overrideValues, customProperties);
                }
            };
            _self._populatePageViewPerformance = function (pageViewPerformance) {
                var perfManager = _self._pageViewPerformanceManager;
                if (perfManager) {
                    perfManager.populatePageViewPerformanceEvent(pageViewPerformance);
                }
            };
            _self.setContentHandler = function (contentHandler) {
                _contentHandler = _userSetContentHandler = contentHandler; // be sure to set handler before initialization
            };
            _self.setAutoCaptureHandler = function (autoCaptureHandler) {
                if (_autoCaptureHandler !== autoCaptureHandler) {
                    // Make sure it removes any event handlers
                    _autoCaptureHandler && _autoCaptureHandler.teardown();
                    _autoCaptureHandler = autoCaptureHandler;
                    _setupAutoCapture(false);
                }
            };
            _self._doTeardown = function (unloadCtx, unloadState) {
                _autoCaptureHandler && _autoCaptureHandler.teardown(unloadCtx, unloadState);
                _base._doTeardown(unloadCtx, unloadState);
                _initDefaults();
            };
            _self["_getDbgPlgTargets"] = function () {
                return [_theConfig];
            };
            function _populateDefaults(coreConfig, extensions) {
                var core = _self.core;
                var logger = _self.diagLog();
                _self.id = new Id(core);
                _timespan = new Timespan();
                // Default to DOM content handler
                _autoCaptureHandler = _autoCaptureHandler ? _autoCaptureHandler : new AutoCaptureHandler(_self, logger);
                _self._addHook(onConfigChange(coreConfig, function () {
                    var ctx = createProcessTelemetryContext(null, coreConfig, core);
                    var extConfig = ctx.getExtCfg(_self.identifier, defaultConfig);
                    _theConfig = extConfig;
                    _autoCaptureConfig = _theConfig.autoCapture;
                    var existingGetWParamMethod = core.getWParam;
                    core.getWParam = function () {
                        var wparam = 0;
                        if (_theConfig.mscomCookies) {
                            wparam = wparam | 1;
                        }
                        return wparam | existingGetWParamMethod.call(core);
                    };
                    _theConfig.disableExceptionTracking = coreConfig.extensionConfig[_self.identifier].disableExceptionTracking = !_autoCaptureConfig.jsError;
                    if (_theConfig.manageCv) {
                        for (var i = 0; i < extensions.length; i++) {
                            if ((extensions[i]).identifier === "CorrelationVectorPlugin") {
                                _theConfig.manageCv = true;
                                _cvPlugin = extensions[i];
                                break;
                            }
                        }
                        if (!_cvPlugin) {
                            _throwInternal(_self.diagLog(), 2 /* eLoggingSeverity.WARNING */, 508 /* _eExtendedInternalMessageId.CVPluginNotAvailable */, "Automatic Cv management is set to \"true\" in config.  However, cv plugin is not available. Disabling automatic Cv management");
                            _theConfig.manageCv = false;
                        }
                    }
                    _contentHandler = _userSetContentHandler || new DomContentHandler(_theConfig, logger);
                    var callback = _theConfig.callback;
                    var metaTags = _contentHandler.getMetadata();
                    var id = _self.id;
                    _contentUpdate = new ContentUpdate(_self, _theConfig, _contentHandler, id, callback.contentUpdatePageTags, metaTags, logger);
                    _pageView = new PageView(_self, _theConfig, _contentHandler, id, callback.pageViewPageTags, metaTags, logger);
                    _pageAction = new PageAction(_self, _theConfig, _contentHandler, id, callback.pageActionPageTags, metaTags, logger);
                    _contentUpdate = new ContentUpdate(_self, _theConfig, _contentHandler, id, callback.contentUpdatePageTags, metaTags, logger);
                    _pageUnload = new PageUnload(_self, _theConfig, id, logger, _timespan, _maxScroll);
                    _pageViewPerformance = new PageViewPerformance(_self, _theConfig, _contentHandler, id, callback.pageViewPageTags, metaTags, logger);
                    _updateMuid();
                    _syncMuid = !!_theConfig.syncMuid;
                    _muidDomain = _theConfig.muidDomain;
                }));
                _setupAutoCapture(true);
            }
            function _updateMuid() {
                var syncMuid = !!_theConfig.syncMuid;
                var shouldUpdate = !_syncMuid || (_muidDomain !== _theConfig.muidDomain);
                // Note: PageView is sent as soon as init is called (i.e. right after the Web Analytics script is loaded).
                // No Muid Sync will happen as we wait to send PV as soon as possible while Muid Sync requires document ready to happen.
                // This matches WEDCS in way of when they send PV without Muid Sync.
                if (syncMuid && shouldUpdate) {
                    onDomLoaded(function () {
                        var muidDomain = _self.id.getMuidHost(_theConfig.muidDomain);
                        _self.id.syncMuid(muidDomain);
                    }, _self._evtNamespace);
                }
                // if syncMuid is set to false currently, do nothing
            }
            function _initDefaults() {
                _pageView = null;
                _pageAction = null;
                _contentUpdate = null;
                _pageUnload = null;
                _pageViewPerformance = null;
                _cvPlugin = null;
                _theConfig = null;
                _maxScroll = { h: 0, v: 0 };
                _isPageUnloadFired = false;
                _timespan = null;
                _contentHandler = null;
                _autoCaptureHandler = null;
                _autoCaptureConfig = null;
                _syncMuid = false;
                _muidDomain = null;
            }
            function _setupAutoCapture(isInitialize) {
                if (_autoCaptureHandler) {
                    if (isInitialize) {
                        // Initialize only events
                        if (_autoCaptureConfig.pageView) {
                            _autoCaptureHandler.pageView();
                        }
                        if (_autoCaptureConfig.onLoad) {
                            _autoCaptureHandler.onLoad();
                        }
                    }
                    // handle automatic event firing on user click
                    if (_autoCaptureConfig.click) {
                        _autoCaptureHandler.click();
                    }
                    // handle automatic event firing on user scroll
                    if (_autoCaptureConfig.scroll) {
                        _autoCaptureHandler.scroll(_theConfig.debounceMs);
                    }
                    // handle automatic event firing on user resize
                    if (_autoCaptureConfig.resize) {
                        _autoCaptureHandler.resize(_theConfig.debounceMs);
                    }
                    // measure maxScroll
                    if (_autoCaptureConfig.onUnload || _theConfig.manualPageUnload) {
                        _autoCaptureHandler.maxScroll(_maxScroll);
                    }
                    if (_autoCaptureConfig.onUnload) {
                        _autoCaptureHandler.onUnload();
                    }
                }
            }
            function _getSystemProperties(event) {
                var ext = {};
                if (event.isManual !== undefined) {
                    ext["web"] = {};
                    ext["web"]["isManual"] = event.isManual !== undefined ? event.isManual : true;
                    delete (event.isManual);
                }
                return ext;
            }
            /**
             * @ignore
             * Resets the values used for pageUnload.
             */
            function _resetPageUnloadProperties() {
                _timespan._recordTimeSpan("dwellTime", false);
                _maxScroll.v = 0;
                _isPageUnloadFired = false;
            }
        });
        return _this;
    }
    /**
    * Update coreData configuration
    * @param coreData
    */
    ApplicationInsights.prototype.updateCoreDataConfig = function (coreData) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * Refresh metadata reference traversing the DOM again
    */
    ApplicationInsights.prototype.refreshMetadata = function () {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
     * Starts the WebAnalytics plugin
     * @param config The core configuration.
     */
    ApplicationInsights.prototype.initialize = function (coreConfig, core, extensions) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
     * Process a given event.
     * Hydrate with appropriate PartB and PartC data
     * @param evt - The event to be hydrated.
     * @param itemCtx - This is the context for the current request, ITelemetryPlugin instances
     * can optionally use this to access the current core instance or define / pass additional information
     * to later plugins (vs appending items to the telemetry item)
     */
    ApplicationInsights.prototype.processTelemetry = function (evt, itemCtx) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to send custom event
   * @param event - Custom event
   * @param properties - Custom event properties (part C)
   */
    ApplicationInsights.prototype.trackEvent = function (event, customProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send pageView event
    * @param pageViewEvent - PageView event
    * @param properties - PageView properties (part C)
    */
    ApplicationInsights.prototype.trackPageView = function (pageViewEvent, properties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to create and send a populated PageView event
    * @param overrideValues - Override values
    * @param customProperties - Custom properties(Part C)
    */
    ApplicationInsights.prototype.capturePageView = function (overrideValues, customProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send PageViewPerformance event
    * @param pageViewPerformance - PageViewPerformance event
    * @param customProperties - PageViewPerformance properties (part C)
    */
    ApplicationInsights.prototype.trackPageViewPerformance = function (pageViewPerformance, customProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to create and send a populated PageViewPerformance event
   * @param pageViewPerformance - PageViewPerformance event
   * @param customProperties - Custom properties(Part C)
   */
    ApplicationInsights.prototype.capturePageViewPerformance = function (overrideValues, customProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send Exception event
    * @param exception - Exception event
    * @param customProperties - Exception properties (part C)
    */
    ApplicationInsights.prototype.trackException = function (exception, customProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send pageAction event
    * @param pageActionEvent - PageAction event
    * @param properties - PageAction properties(Part C)
    */
    ApplicationInsights.prototype.trackPageAction = function (pageActionEvent, pageActionProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to create and send a populated PageAction event
    * @param element - DOM element
    * @param overrideValues - PageAction overrides
    * @param customProperties - Custom properties(Part C)
    * @param isRightClick - Flag for mouse right clicks
    */
    ApplicationInsights.prototype.capturePageAction = function (element, overrideValues, customProperties, isRightClick) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send ContentUpdate event
    * @param contentUpdateEvent - ContentUpdate event
    * @param properties - ContentUpdate properties(Part C)
    */
    ApplicationInsights.prototype.trackContentUpdate = function (contentUpdateEvent, properties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
  * API to create and send a populated ContentUpdate event
  * @param overrideValues - ContentUpdate overrides
  * @param customProperties - Custom properties(Part C)
  */
    ApplicationInsights.prototype.captureContentUpdate = function (overrideValues, customProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to send PageUnload event
   * @param pageUnloadEvent - PageUnload event
   * @param properties - PageUnload properties(Part C)
   */
    ApplicationInsights.prototype.trackPageUnload = function (pageUnloadEvent, properties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to create and send a populated PageUnload event
   * @param overrideValues - PageUnload overrides
   * @param customProperties - Custom properties(Part C)
   */
    ApplicationInsights.prototype.capturePageUnload = function (overrideValues, customProperties) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    ApplicationInsights.prototype._populatePageViewPerformance = function (pageViewPerformance) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * Set custom content handler, need to be set before initialization
    * @param contentHandler - Content handler instance
    */
    ApplicationInsights.prototype.setContentHandler = function (contentHandler) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    /**
    * Set custom auto capture handler, need to be set before initialization
    * @param autoCaptureHandler - Content handler instance
    */
    ApplicationInsights.prototype.setAutoCaptureHandler = function (autoCaptureHandler) {
        // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
    };
    return ApplicationInsights;
}(AnalyticsPlugin));
export { ApplicationInsights };
//# sourceMappingURL=WebAnalyticsPlugin.js.map