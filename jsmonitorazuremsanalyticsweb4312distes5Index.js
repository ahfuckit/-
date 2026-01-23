/**
* Index.ts
* @author Abhilash Panwar (abpanwar) and Hector Hernandez (hectorh)
* @copyright Microsoft 2018
* File to export public classes, interfaces and enums.
*/
import { AppInsightsCore, DiagnosticLogger, EventLatency, EventPersistence, EventsDiscardedReason, MinChannelPriorty, NotificationManager, TraceLevel, ValueKind, dumpObj, getGlobal } from "@microsoft/1ds-core-js";
import { BE_PROFILE, NRT_PROFILE, PostChannel, RT_PROFILE } from "@microsoft/1ds-post-js";
import { PropertiesPlugin } from "@microsoft/1ds-properties-js";
import { ActionType, ApplicationInsights as WebAnalytics, AutoCaptureHandler, Behavior } from "@microsoft/1ds-wa-js";
import { ApplicationInsights } from "./ApplicationInsights";
export { ApplicationInsights, MinChannelPriorty, ValueKind, EventLatency, EventPersistence, TraceLevel, NotificationManager, PropertiesPlugin, PostChannel, BE_PROFILE, NRT_PROFILE, RT_PROFILE, EventsDiscardedReason, DiagnosticLogger, ActionType, Behavior, WebAnalytics, AppInsightsCore, AutoCaptureHandler };
var Undefined = "undefined";
function _logWarn(aiName, message) {
    // TODO: Find better place to warn to console when SDK initialization fails
    var _console = typeof console !== Undefined ? console : null;
    if (_console) {
        var func = "warn";
        if (!_console[func]) {
            func = "log";
        }
        _console[func]("Failed to initialize AppInsights JS SDK for instance " + (aiName || "<unknown>") + " - " + message);
    }
}
(function () {
    // should be global function that should load as soon as SDK loads
    try {
        // E2E sku on load initializes core and pipeline using snippet as input for configuration
        var aiName = "oneDSWeb";
        var global = getGlobal();
        if (global) {
            if (typeof JSON !== "undefined") {
                // get snippet or initialize to an empty object
                aiName = global["onedsSDK"] || aiName;
                if (global[aiName] !== undefined) {
                    var snippet = global[aiName];
                    var ai = new ApplicationInsights();
                    ai.updateSnippetDefinitions(snippet);
                    ai.initialize(snippet.config, snippet.extensions);
                    // Update global instance
                    global[aiName] = ai;
                    ai.emptySnippetQueue(snippet);
                }
            }
            else {
                _logWarn(aiName, "Missing JSON - you must supply a JSON polyfill!");
            }
        }
        else {
            _logWarn(aiName, "Missing global/window");
        }
    }
    catch (e) {
        _logWarn(aiName, "Unexpected Error: " + dumpObj(e));
    }
})();
//# sourceMappingURL=Index.js.map