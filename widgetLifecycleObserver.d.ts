import { IWidgetInstanceInternal } from "../orchestrator/IWidgetInstanceInternal";
import { WidgetState } from "../orchestrator/orchestrator.types";
import { IWidgetLifecycleObserver } from "../widgetApis/widgetInternalApi.interfaces";
export declare class WidgetLifecycleObserver implements IWidgetLifecycleObserver {
    private _activated;
    private _callback;
    private _callbackWrapperWithContext;
    private _counterSet;
    private _id;
    private _stateCurrent;
    private _threshold;
    private _thresholdDivisor;
    private _widgets;
    constructor();
    setNumWidgets(numWidgets: number): void;
    registerTrigger(triggerThresholdDivisor: number, currentState: WidgetState, callback: (widgetIds: Array<string>, threshold: number, numWidgets: number) => void): void;
    registerWidget(widget: IWidgetInstanceInternal): void;
    unregisterTrigger(): void;
    private callbackWrapper;
    private updateWidgetState;
}
export declare function getLoadingWidgetLifecycleObserver(): IWidgetLifecycleObserver;
export declare function getErrorWidgetLifecycleObserver(): IWidgetLifecycleObserver;
