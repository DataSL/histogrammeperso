import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG: IVisualPlugin = {
    name: 'histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG',
    displayName: 'histogrammeperso',
    class: 'Visual',
    apiVersion: '5.10.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = (<any>globalThis).dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG"] = histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG;
}
export default histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG;