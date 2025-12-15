import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
export declare class Visual implements IVisual {
    private target;
    private formattingSettings;
    private formattingSettingsService;
    private svg;
    private container;
    private selectionManager;
    private host;
    private licenseManager;
    private currentUserValidPlans;
    private hasServicePlans;
    private isLicenseUnsupportedEnv;
    private isNotificationDisplayed;
    private dataPoints;
    constructor(options: VisualConstructorOptions);
    private checkLicense;
    private notifyLicenseRequired;
    update(options: VisualUpdateOptions): void;
    private updateSelection;
    getFormattingModel(): powerbi.visuals.FormattingModel;
}
