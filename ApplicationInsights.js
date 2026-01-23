var _a;
import { __extends } from "tslib";
/**
* ApplicationInsights.ts
* @author Abhilash Panwar (abpanwar) and Hector Hernandez (hectorh)
* @copyright Microsoft 2018
* Main class containing all the APIs.
*/
import dynamicProto from "@microsoft/dynamicproto-js";
import { AppInsightsCore, _throwInternal, arrIndexOf, createDynamicConfig, doPerf, dumpObj, isArray, isFunction, isNullOrUndefined, isString, objForEachKey, proxyAssign, proxyFunctions, throwError } from "@microsoft/1ds-core-js";
import { PostChannel } from "@microsoft/1ds-post-js";
import { PropertiesPlugin } from "@microsoft/1ds-properties-js";
import { ApplicationInsights as WebAnalytics } from "@microsoft/1ds-wa-js";
import { arrAppend, objDeepFreeze, objDefineProps } from "@nevware21/ts-utils";
/**
 * The default settings for the config.
 * WE MUST include all defaults here to ensure that the config is created with all of the properties
 * defined as dynamic.
 */
var defaultConfig = objDeepFreeze({
    cookieCfg: { ref: true, v: {} },
    extensions: { rdOnly: true, ref: true, v: [] },
    channels: { rdOnly: true, ref: true, v: [] },
    featureOptIn: (_a = {},
        _a["zipPayload"] = { mode: 1 },
        _a),
    extensionConfig: { ref: true, v: {} }
});
// This is an exclude list of properties that should not be updated during initialization
// They include a combination of private and internal property names and properties
var _ignoreUpdateSnippetProperties = [
    "snippet", "_webAnalytics", "_postChannel", "_propertyManager", "_extensions"
];
// This is an exclude list of properties that may exist on both the snippet and the instance that
// should not be updated during definition assignment
var _ignoreUpdateDefineSnippetProperties = [
    "queue", "extensions", "version", "sv"
];
var ApplicationInsights = /** @class */ (function (_super) {
    __extends(ApplicationInsights, _super);
    function ApplicationInsights() {
        var _this = _super.call(this) || this;
        var _snippetVersion;
        var _webAnalytics;
        var _postChannel;
        var _propertyManager;
        dynamicProto(ApplicationInsights, _this, function (_self, _base) {
            _initDefaults();
            _self.initialize = function (config, extensions) {
                doPerf(_self, function () { return "ApplicationInsights:initialize"; }, function () {
                    config = createDynamicConfig(config, defaultConfig, _self.logger, false).cfg;
                    var plugins = [_propertyManager, _webAnalytics];
                    if (extensions) {
                        plugins = plugins.concat(extensions);
                    }
                    if (!config) {
                        throwError("You must provide a config object!");
                    }
                    if (config.channels && config.channels.length > 0) {
                        // Add post channel to first fork if not available
                        var postFound = false;
                        for (var j = 0; j < config.channels[0].length; j++) {
                            if (config.channels[0][j].identifier === _postChannel.identifier) {
                                postFound = true;
                                break;
                            }
                        }
                        if (!postFound) {
                            arrAppend(config.channels[0], _postChannel);
                        }
                    }
                    else {
                        // Push the subsequent channels
                        config.channels.push([_postChannel]);
                    }
                    // Add configurations
                    var extConfig = config.extensionConfig = config.extensionConfig || [];
                    extConfig[_postChannel.identifier] = extConfig[_postChannel.identifier] || (config && config.channelConfiguration) || {};
                    extConfig[_propertyManager.identifier] = extConfig[_propertyManager.identifier] || (config && config.propertyConfiguration) || {};
                    extConfig[_webAnalytics.identifier] = extConfig[_webAnalytics.identifier] || (config && config.webAnalyticsConfiguration) || {};
                    try {
                        _base.initialize(config, plugins);
                        if (_self.isInitialized()) {
                            // Update the shared config to map the channelConfiguration and propertyConfiguration to return the extensionConfig values
                            objDefineProps(config, {
                                channelConfiguration: { g: function () { return config.extensionConfig[_postChannel.identifier]; } },
                                propertyConfiguration: { g: function () { return config.extensionConfig[_propertyManager.identifier]; } },
                                webAnalyticsConfiguration: { g: function () { return config.extensionConfig[_webAnalytics.identifier]; } }
                            });
                        }
                    }
                    catch (error) {
                        _throwInternal(_self.logger, 1 /* eLoggingSeverity.CRITICAL */, 514 /* _eExtendedInternalMessageId.FailedToInitializeSDK */, "Failed to initialize SDK." + dumpObj(error));
                    }
                }, function () { return ({ config: config, extensions: extensions }); });
            };
            _self.getPropertyManager = function () {
                return _propertyManager;
            };
            _self.getPostChannel = function () {
                return _postChannel;
            };
            _self.getWebAnalyticsExtension = function () {
                return _webAnalytics;
            };
            // Expose these _webAnalytics functions directly on self
            proxyFunctions(_self, function () { return _webAnalytics; }, [
                "trackEvent",
                "trackPageView",
                "trackPageAction",
                "trackContentUpdate",
                "trackPageUnload",
                "trackException",
                "trackPageViewPerformance",
                "capturePageView",
                "capturePageViewPerformance",
                "capturePageAction",
                "captureContentUpdate",
                "capturePageUnload",
                "_onerror"
            ]);
            _self.emptySnippetQueue = function (snippet) {
                function _updateSnippetProperties() {
                    if (snippet) {
                        var snippetVer = "";
                        if (!isNullOrUndefined(_snippetVersion)) {
                            snippetVer += _snippetVersion;
                        }
                        // TODO (newylie): Need somewhere in Common Schema to put this value
                        // let propManager = _self.getPropertyManager();
                        // if (propManager) {
                        //     let context = propManager.getPropertiesContext();
                        //     if (_self.context && _self.context.internal) {
                        //         _self.context.internal.snippetVer = snippetVer || "-";
                        //     }
                        // }
                        // apply updated properties to the global instance (snippet)
                        objForEachKey(_self, function (field, value) {
                            if (isString(field) &&
                                !isFunction(value) &&
                                field && field[0] !== "_" && // Don't copy "internal" values
                                arrIndexOf(_ignoreUpdateSnippetProperties, field) === -1) {
                                try {
                                    snippet[field] = value;
                                }
                                catch (error) {
                                    // Unable to set the property -- so just ignore as it's probably a setter
                                    _throwInternal(_self.logger, 2 /* eLoggingSeverity.WARNING */, 514 /* _eExtendedInternalMessageId.FailedToInitializeSDK */, "Failed to set [" + field + "] during initialization." + dumpObj(error));
                                }
                            }
                        });
                    }
                }
                // call functions that were queued before the main script was loaded
                try {
                    _updateSnippetProperties();
                    if (isArray(snippet.queue)) {
                        // note: do not check length in the for-loop conditional in case something goes wrong and the stub methods are not overridden.
                        var length = snippet.queue.length;
                        for (var i = 0; i < length; i++) {
                            var call = snippet.queue[i];
                            call();
                        }
                        snippet.queue = undefined;
                        delete snippet.queue;
                    }
                }
                catch (exception) {
                    var properties = {};
                    if (exception && isFunction(exception.toString)) {
                        properties.exception = exception.toString();
                    }
                }
            };
            /**
            * Overwrite the lazy loaded fields of global window snippet to contain the
            * actual initialized API methods
            * @param snippet
            */
            _self.updateSnippetDefinitions = function (snippet) {
                var _self = _this;
                // Assign the snippet to this instance
                _self.snippet = snippet;
                _snippetVersion = "" + (snippet.sv || snippet.version || "");
                // The config (may) exist on both the snippet definition and the current instance, which by default would cause the
                // snippet version to be overwritten (even with a value of null or undefined - which is now the default to properly
                // support unloading
                var snipCfg = snippet.config;
                if (snipCfg) {
                    // Update/Merge the existing config (if present)
                    _self.updateCfg(snippet.config, true);
                }
                // apply full appInsights to the global instance
                // Note: This will be called BEFORE this instance has been initialized
                proxyAssign(snippet, _self, function (name) {
                    // Not excluding names prefixed with "_" as we need to proxy some functions like _onError
                    return name && arrIndexOf(_ignoreUpdateSnippetProperties, name) === -1 && arrIndexOf(_ignoreUpdateDefineSnippetProperties, name) === -1;
                });
            };
            _self.unload = function (isAsync, unloadComplete, cbTimeout) {
                if (isAsync === void 0) { isAsync = true; }
                return _base.unload(isAsync, function (unloadState) {
                    _initDefaults();
                    unloadComplete && unloadComplete(unloadState);
                }, cbTimeout);
            };
        });
        function _initDefaults() {
            // Initialize plugins
            _postChannel = new PostChannel();
            _propertyManager = new PropertiesPlugin();
            _webAnalytics = new WebAnalytics();
        }
        return _this;
    }
    /**
     * Initialize the SKU.
     * @param config        - SKU configuration.
     * @param extensions          - An array of extensions that are to be used by the core.
     */
    ApplicationInsights.prototype.initialize = function (config, extensions) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
     * Gets the property manager to set custom properties and system properties (part A), that should be applied
     * to all events or events with a specific instrumentation key.
     * @returns {PropertiesPlugin} The property manager object.
     */
    ApplicationInsights.prototype.getPropertyManager = function () {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    };
    /**
     * Gets the post channel to configure and set the transmission profiles.
     * @returns {PostChannel} The post channel object.
     */
    ApplicationInsights.prototype.getPostChannel = function () {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    };
    /**
     * Gets the Web Analytics extension.
     * @returns {WebAnalytics} The Web Analytics extension.
     */
    ApplicationInsights.prototype.getWebAnalyticsExtension = function () {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        return null;
    };
    /**
    * API to send custom event
    * @param event - Custom event
    * @param properties - Custom event properties (part C)
    */
    ApplicationInsights.prototype.trackEvent = function (event, customProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send pageView event
    * @param pageViewEvent - PageView event
    * @param properties - PageView properties (part C)
    */
    ApplicationInsights.prototype.trackPageView = function (pageViewEvent, pageViewProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to send pageAction event
   * @param pageActionEvent - PageAction event
   * @param properties - PageAction properties(Part C)
   */
    ApplicationInsights.prototype.trackPageAction = function (pageActionEvent, pageActionProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send ContentUpdate event
    * @param contentUpdateEvent - ContentUpdate event
    * @param properties - ContentUpdate properties(Part C)
    */
    ApplicationInsights.prototype.trackContentUpdate = function (contentUpdateEvent, properties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to send PageUnload event
   * @param pageUnloadEvent - PageUnload event
   * @param properties - PageUnload properties(Part C)
   */
    ApplicationInsights.prototype.trackPageUnload = function (pageUnloadEvent, properties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send Exception event
    * @param exception - Exception event
    * @param customProperties - Exception properties (part C)
    */
    ApplicationInsights.prototype.trackException = function (exception, customProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to send PageViewPerformance event
    * @param pageViewPerformance - PageViewPerformance event
    * @param customProperties - PageViewPerformance properties (part C)
    */
    ApplicationInsights.prototype.trackPageViewPerformance = function (pageViewPerformance, customProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to create and send a populated PageView event
    * @param overrideValues - Override values
    * @param customProperties - Custom properties(Part C)
    */
    ApplicationInsights.prototype.capturePageView = function (overrideValues, customProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to create and send a populated PageViewPerformance event
   * @param pageViewPerformance - PageViewPerformance event
   * @param customProperties - Custom properties(Part C)
   */
    ApplicationInsights.prototype.capturePageViewPerformance = function (overrideValues, customProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to create and send a populated PageAction event
    * @param element - DOM element
    * @param overrideValues - PageAction overrides
    * @param customProperties - Custom properties(Part C)
    * @param isRightClick - Flag for mouse right clicks
    */
    ApplicationInsights.prototype.capturePageAction = function (element, overrideValues, customProperties, isRightClick) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * API to create and send a populated ContentUpdate event
    * @param overrideValues - ContentUpdate overrides
    * @param customProperties - Custom properties(Part C)
    */
    ApplicationInsights.prototype.captureContentUpdate = function (overrideValues, customProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
   * API to create and send a populated PageUnload event
   * @param overrideValues - PageUnload overrides
   * @param customProperties - Custom properties(Part C)
   */
    ApplicationInsights.prototype.capturePageUnload = function (overrideValues, customProperties) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * @description Custom error handler for Application Insights Analytics
    * @param exception
    */
    ApplicationInsights.prototype._onerror = function (exception) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * Call any functions that were queued before the main script was loaded
    * @param snippet
    */
    ApplicationInsights.prototype.emptySnippetQueue = function (snippet) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
    * Overwrite the lazy loaded fields of global window snippet to contain the
    * actual initialized API methods
    * @param snippet
    */
    ApplicationInsights.prototype.updateSnippetDefinitions = function (snippet) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    /**
     * Unload and Tear down the SDK and any initialized plugins, after calling this the SDK will be considered
     * to be un-initialized and non-operational, re-initializing the SDK should only be attempted if the previous
     * unload call return `true` stating that all plugins reported that they also unloaded, the recommended
     * approach is to create a new instance and initialize that instance.
     * This is due to possible unexpected side effects caused by plugins not supporting unload / teardown, unable
     * to successfully remove any global references or they may just be completing the unload process asynchronously.
     * If you pass isAsync as `true` (also the default) and DO NOT pass a callback function then an [IPromise](https://nevware21.github.io/ts-async/typedoc/interfaces/IPromise.html)
     * will be returned which will resolve once the unload is complete. The actual implementation of the `IPromise`
     * will be a native Promise (if supported) or the default as supplied by [ts-async library](https://github.com/nevware21/ts-async)
     * @param isAsync - Can the unload be performed asynchronously (default)
     * @param unloadComplete - An optional callback that will be called once the unload has completed
     * @param cbTimeout - An optional timeout to wait for any flush operations to complete before proceeding with the
     * unload. Defaults to 5 seconds.
     * @return Nothing or if occurring asynchronously a [IPromise](https://nevware21.github.io/ts-async/typedoc/interfaces/IPromise.html)
     * which will be resolved once the unload is complete, the [IPromise](https://nevware21.github.io/ts-async/typedoc/interfaces/IPromise.html)
     * will only be returned when no callback is provided and isAsync is true
     */
    ApplicationInsights.prototype.unload = function (isAsync, unloadComplete, cbTimeout) {
        // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
    };
    return ApplicationInsights;
}(AppInsightsCore));
export { ApplicationInsights };
//# sourceMappingURL=ApplicationInsights.js.map