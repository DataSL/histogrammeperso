/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
* 
*/
"use strict";

// eslint-disable-next-line powerbi-visuals/no-http-string
const SVG_NS = "http://www.w3.org/2000/svg";

function createSvgElement<K extends keyof SVGElementTagNameMap>(tagName: K): SVGElementTagNameMap[K] {
    return document.createElementNS(SVG_NS, tagName) as SVGElementTagNameMap[K];
}

import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import ISelectionId = powerbi.visuals.ISelectionId;
import IVisualEventService = powerbi.extensibility.IVisualEventService;
import { VisualFormattingSettingsModel } from "./settings";

interface DataPointOptions {
    fillColor: string;
    colorNon: string;
    barRadius: number;
    fontSize: number;
    barValueFontSize: number;
    barValueFontFamily: string;
    barValueFontColor: string;
    valueDisplayMode: number;
    decimalPlaces: number;
    barWidth: number;
    barSpacing: number;
}

interface XAxisOptions {
    showXAxis: boolean;
    xAxisTitle: string;
    labelRotation: number;
    xAxisFontSize: number;
    xAxisFontFamily: string;
    xAxisFontColor: string;
    bottomMargin: number;
}

interface LayoutOptions {
    showBackground: boolean;
    titleText: string;
    titleFontFamily: string;
    titleFontSize: number;
    titleFontBold: boolean;
    titleFontColor: string;
}

interface BarRenderContext {
    cat: string;
    index: number;
    rawValue: number;
    x: number;
    barWidth: number;
    barSpacing: number;
    baseY: number;
    maxBarHeight: number;
    barRadius: number;
    fontSize: number;
    fillColor: string;
    colorNon: string;
    barValueFontSize: number;
    barValueFontFamily: string;
    barValueFontColor: string;
    narrowMode: boolean;
    showXAxis: boolean;
    xAxisFontSize: number;
    xAxisFontFamily: string;
    xAxisFontColor: string;
    labelRotation: number;
    needsRotation: boolean;
    availableSpaceForLabel: number;
    formatBarValue: (raw: number) => string;
    defs: SVGDefsElement;
    selectionId: ISelectionId;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    private svg: SVGSVGElement;
    private container: HTMLElement;
    private selectionManager: ISelectionManager;
    private host: powerbi.extensibility.visual.IVisualHost;
    private licenseManager: powerbi.extensibility.IVisualLicenseManager;
    private currentUserValidPlans: powerbi.extensibility.visual.ServicePlan[] | undefined;
    private hasServicePlans: boolean | undefined;
    private isLicenseUnsupportedEnv: boolean | undefined;
    private isNotificationDisplayed: boolean = false;
    private dataPoints: Array<{ category: string; value: number; selectionId: ISelectionId }>;
    private events: IVisualEventService;

    constructor(options: VisualConstructorOptions) {
        this.formattingSettingsService = new FormattingSettingsService();
        this.target = options.element;
        this.host = options.host;
        this.licenseManager = this.host.licenseManager;
        this.selectionManager = this.host.createSelectionManager();
        this.events = options.host.eventService;
        
        // Init license check
        //this.checkLicense();

        // Container scrollable pour le SVG
        this.container = document.createElement('div');
        this.container.style.width = "100%";
        this.container.style.height = "100%";
        this.container.style.overflow = "auto"; // permet scroll horizontal et vertical
        this.container.style.position = "relative";
        this.target.appendChild(this.container);

        this.svg = createSvgElement("svg");
        this.svg.setAttribute("width", "100%");
        this.svg.setAttribute("height", "100%");
        this.svg.style.display = "block"; // évite gaps dans certains navigateurs
        this.container.appendChild(this.svg);

        this.dataPoints = [];
    }

    private checkLicense() {
        if (!this.licenseManager) {
             return;
        }

        this.licenseManager.getAvailableServicePlans()
            .then((result: powerbi.extensibility.visual.LicenseInfoResult) => {
                this.isLicenseUnsupportedEnv = result.isLicenseUnsupportedEnv;
                
                if (result.isLicenseInfoAvailable && !this.isLicenseUnsupportedEnv) {
                    this.currentUserValidPlans = result.plans?.filter((plan: powerbi.extensibility.visual.ServicePlan) => 
                        (plan.state === powerbi.ServicePlanState.Active || plan.state === powerbi.ServicePlanState.Warning)
                    );
                    this.hasServicePlans = !!this.currentUserValidPlans?.length;
                }

                // If no valid plans found, notify user
                if (!this.hasServicePlans && !this.isLicenseUnsupportedEnv) {
                     this.notifyLicenseRequired();
                }
            })
            .catch((err) => {
                console.error("Error fetching licenses:", err);
            });
    }

    private notifyLicenseRequired() {
        if (this.isNotificationDisplayed) return;

        const notificationType = this.isLicenseUnsupportedEnv 
            ? powerbi.LicenseNotificationType.UnsupportedEnv 
            : powerbi.LicenseNotificationType.VisualIsBlocked;

        this.licenseManager.notifyLicenseRequired(notificationType)
            .then((value) => {
                this.isNotificationDisplayed = value;
            })
            .catch((err) => {
                console.error("Error notifying license:", err);
            });
    }

    public update(options: VisualUpdateOptions) {
        this.events.renderingStarted(options);
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews && options.dataViews[0]);

        // clear svg
        while (this.svg.firstChild) this.svg.removeChild(this.svg.firstChild);

        const width = options.viewport.width;
        const height = options.viewport.height;

        // Fixer la zone visible (container) à la taille du viewport Power BI
        this.container.style.width = width + "px";
        this.container.style.height = height + "px";

        // Récupération des données
        const dataView = options.dataViews && options.dataViews[0];
        if (!dataView || !dataView.categorical) {
            this.events.renderingFinished(options);
            return;
        }

        const categories = dataView.categorical.categories[0];
        const categoryValues = categories.values as (string | number)[];
        const values = dataView.categorical.values[0].values as number[];

        this.prepareDataPoints(categories, categoryValues, values);
        const sortedCategories = this.dataPoints.map(d => d.category);
        const sortedValues = this.dataPoints.map(d => d.value);
        const selectionIds = this.dataPoints.map(d => d.selectionId);

        // Récupération des options via helpers
        const objects = dataView.metadata && dataView.metadata.objects;
        const dpOpts = this.getDataPointOptions(objects, width, sortedCategories.length);
        const { fillColor, colorNon, barRadius, fontSize, barValueFontSize, barValueFontFamily, barValueFontColor, valueDisplayMode, decimalPlaces, barWidth, barSpacing } = dpOpts;

        const xOpts = this.getXAxisOptions(objects);
        const { showXAxis, xAxisTitle, labelRotation, xAxisFontSize, xAxisFontFamily, xAxisFontColor, bottomMargin } = xOpts;

        const layoutOpts = this.getLayoutOptions(objects);
        const { showBackground, titleText, titleFontFamily, titleFontSize, titleFontBold, titleFontColor } = layoutOpts;

        const formatBarValue = (raw: number) => {
            if (valueDisplayMode === 0) return (raw * 100).toFixed(decimalPlaces).replace('.', ',') + "%";
            if (valueDisplayMode === 1) return raw.toFixed(decimalPlaces).replace('.', ',');
            return Math.round(raw).toString();
        };

        const baseY = height - bottomMargin;
        const maxBarHeight = Math.floor(baseY * 0.8); // utiliser 80% de l'espace disponible au-dessus de la marge

        // Calculer taille SVG nécessaire et adapter pour activer scroll si besoin
        const paddingLeft = 40;
        const paddingRight = 40;
        const totalNeededWidth = paddingLeft + sortedCategories.length * (barWidth + barSpacing) - barSpacing + paddingRight;
        const svgWidth = Math.max(width, Math.ceil(totalNeededWidth));
        const svgHeight = Math.max(height, Math.ceil(maxBarHeight + bottomMargin + 60));

        this.svg.setAttribute("width", svgWidth.toString());
        this.svg.setAttribute("height", svgHeight.toString());

        // Appliquer ou retirer l'arrière-plan dynamiquement
        if (showBackground) {
            this.svg.style.background = "#f7fbff";
        } else {
            this.svg.style.background = "transparent";
        }

        // DETECTION MODE "NARROW" (peut ajuster seuil)
        const slotWidth = barWidth + barSpacing;
        const narrowMode = slotWidth < 70 || width < 480 || svgWidth > width;

        // Dessin des barres (déclaré ici pour être accessible dans le click handler du fond)
        const barGroups: SVGGElement[] = [];

        // Fond cliquable, titre et légende
        this.renderBackgroundRect(svgWidth, svgHeight, showBackground, barGroups);
        this.renderTitle(titleText, titleFontSize, titleFontFamily, titleFontBold, titleFontColor);
        if (!narrowMode) this.svg.appendChild(this.renderLegend(fillColor, colorNon));

        // defs pour clipPaths (nouveau à chaque update)
        const defs = createSvgElement("defs");
        this.svg.appendChild(defs);

        // Déterminer si les labels nécessitent une rotation
        const needsRotation = this.checkLabelRotation(sortedCategories, barWidth, barSpacing, xAxisFontSize, xAxisFontFamily);
        const availableSpaceForLabel = bottomMargin - 25;

        sortedCategories.forEach((cat, i) => {
            const ctx: BarRenderContext = {
                cat, index: i, rawValue: sortedValues[i] || 0,
                x: paddingLeft + i * (barWidth + barSpacing),
                barWidth, barSpacing, baseY, maxBarHeight, barRadius, fontSize,
                fillColor, colorNon, barValueFontSize, barValueFontFamily, barValueFontColor,
                narrowMode, showXAxis, xAxisFontSize, xAxisFontFamily, xAxisFontColor,
                labelRotation, needsRotation, availableSpaceForLabel, formatBarValue, defs,
                selectionId: selectionIds[i]
            };
            const barGroup = this.renderBar(ctx, barGroups, selectionIds);
            barGroups.push(barGroup);
            this.svg.appendChild(barGroup);
        });

        // dessiner le titre de l'axe X si demandé
        if (showXAxis && xAxisTitle) {
            this.renderXAxisTitle(xAxisTitle, paddingLeft, sortedCategories.length, barWidth, barSpacing, baseY, xAxisFontSize, xAxisFontColor, xAxisFontFamily);
        }

        // (Le clic de fond est maintenant géré par le rectangle bgRect)
        this.events.renderingFinished(options);
    }

    private getDataPointOptions(objects: powerbi.DataViewObjects | undefined, width: number, categoryCount: number): DataPointOptions {
        let fillColor = "#2F6FE7";
        if (objects && objects["dataPoint"] && (objects["dataPoint"] as any)["fill"]) {
            const colorObj = (objects["dataPoint"] as any)["fill"];
            if (colorObj.solid && colorObj.solid.color) fillColor = colorObj.solid.color;
        }
        const colorNon = lightenColor(fillColor, 0.6, 0.5);
        const barRadius = objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["barRadius"] === "number"
            ? (objects["dataPoint"] as any)["barRadius"] : 30;
        const fontSize = objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["fontSize"] === "number"
            ? (objects["dataPoint"] as any)["fontSize"] : 18;
        const dpObj: any = (objects && objects["dataPoint"]) || {};
        const valueDisplayMode: number = typeof dpObj["valueDisplayMode"] === "number" ? dpObj["valueDisplayMode"] : 0;
        const decimalPlaces: number = typeof dpObj["decimalPlaces"] === "number" ? Math.max(0, dpObj["decimalPlaces"]) : 2;
        const barValueFontSize: number = typeof dpObj["fontSize"] === "number" ? dpObj["fontSize"] : 18;
        const barValueFontFamily: string = typeof dpObj["fontFamily"] === "string" ? dpObj["fontFamily"] : "Segoe UI";
        const barValueFontColor: string = readColor(dpObj["fontColor"]) || "#ffffff";
        let barWidth = Math.min(60, Math.max(10, Math.floor(width / Math.max(1, categoryCount) * 0.6)));
        if (objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["barWidth"] === "number") {
            barWidth = (objects["dataPoint"] as any)["barWidth"];
        }
        let barSpacing = Math.round(barWidth * 0.6);
        try {
            const fs = this.formattingSettings as any;
            if (fs && fs.dataPointCard && fs.dataPointCard.barSpacing && typeof fs.dataPointCard.barSpacing.value === "number") {
                barSpacing = Math.round(fs.dataPointCard.barSpacing.value);
            } else if (objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["barSpacing"] === "number") {
                barSpacing = (objects["dataPoint"] as any)["barSpacing"];
            }
        } catch { /* fallback */ }
        return { fillColor, colorNon, barRadius, fontSize, barValueFontSize, barValueFontFamily, barValueFontColor, valueDisplayMode, decimalPlaces, barWidth, barSpacing };
    }

    private getXAxisOptions(objects: powerbi.DataViewObjects | undefined): XAxisOptions {
        const xAxisObj: any = (objects && objects["xAxis"]) || {};
        return {
            showXAxis: typeof xAxisObj["show"] === "boolean" ? xAxisObj["show"] : true,
            xAxisTitle: typeof xAxisObj["title"] === "string" ? xAxisObj["title"] : "",
            labelRotation: typeof xAxisObj["labelRotation"] === "number" ? xAxisObj["labelRotation"] : 0,
            xAxisFontSize: typeof xAxisObj["fontSize"] === "number" ? xAxisObj["fontSize"] : 14,
            xAxisFontFamily: typeof xAxisObj["fontFamily"] === "string" ? xAxisObj["fontFamily"] : "Segoe UI",
            xAxisFontColor: readColor(xAxisObj["fontColor"]) || "#888",
            bottomMargin: typeof xAxisObj["bottomMargin"] === "number" ? Math.max(40, xAxisObj["bottomMargin"]) : 80
        };
    }

    private getLayoutOptions(objects: powerbi.DataViewObjects | undefined): LayoutOptions {
        let showBackground = true, titleText = "DSP", titleFontFamily = "Segoe UI";
        let titleFontSize = 20, titleFontBold = true, titleFontColor = "#222";
        if (this.formattingSettings && this.formattingSettings.layoutCard) {
            const lc = this.formattingSettings.layoutCard;
            if (lc.showBackground) showBackground = lc.showBackground.value;
            if (lc.titleText && typeof lc.titleText.value === "string") titleText = lc.titleText.value || "DSP";
            if (lc.titleFontFamily && typeof lc.titleFontFamily.value === "string") titleFontFamily = lc.titleFontFamily.value || "Segoe UI";
            if (lc.titleFontSize && typeof lc.titleFontSize.value === "number") titleFontSize = lc.titleFontSize.value || 20;
            if (lc.titleFontBold && typeof lc.titleFontBold.value === "boolean") titleFontBold = lc.titleFontBold.value;
            if (lc.titleFontColor) titleFontColor = readColor(lc.titleFontColor.value) || "#222";
        } else if (objects && objects["layout"]) {
            const lo = objects["layout"] as any;
            if (typeof lo["showBackground"] === "boolean") showBackground = lo["showBackground"];
            if (typeof lo["titleText"] === "string") titleText = lo["titleText"] || "DSP";
            if (typeof lo["titleFontFamily"] === "string") titleFontFamily = lo["titleFontFamily"] || "Segoe UI";
            if (typeof lo["titleFontSize"] === "number") titleFontSize = lo["titleFontSize"] || 20;
            if (typeof lo["titleFontBold"] === "boolean") titleFontBold = lo["titleFontBold"];
            if (lo["titleFontColor"]) titleFontColor = readColor(lo["titleFontColor"]) || "#222";
        }
        return { showBackground, titleText, titleFontFamily, titleFontSize, titleFontBold, titleFontColor };
    }

    private prepareDataPoints(categories: powerbi.DataViewCategoryColumn, categoryValues: (string | number)[], values: number[]): void {
        this.dataPoints = categoryValues.map((cat, i) => ({
            category: cat.toString(),
            value: values[i],
            selectionId: this.host.createSelectionIdBuilder().withCategory(categories, i).createSelectionId()
        }));
        const areYears = this.dataPoints.every(dp => {
            const num = parseInt(dp.category);
            return !isNaN(num) && num >= 1900 && num <= 2100 && dp.category.length === 4;
        });
        if (areYears) this.dataPoints.sort((a, b) => parseInt(a.category) - parseInt(b.category));
    }

    private checkLabelRotation(categories: string[], barWidth: number, barSpacing: number, xAxisFontSize: number, xAxisFontFamily: string): boolean {
        for (const cat of categories) {
            const tempText = createSvgElement("text");
            tempText.setAttribute("font-size", xAxisFontSize.toString());
            tempText.setAttribute("font-family", xAxisFontFamily);
            tempText.textContent = cat;
            tempText.style.visibility = "hidden";
            this.svg.appendChild(tempText);
            const textWidth = tempText.getBBox().width;
            this.svg.removeChild(tempText);
            if (textWidth > barWidth + barSpacing - 4) return true;
        }
        return false;
    }

    private renderBackgroundRect(svgWidth: number, svgHeight: number, showBackground: boolean, barGroups: SVGGElement[]): void {
        const bgRect = createSvgElement("rect");
        bgRect.setAttribute("x", "0");
        bgRect.setAttribute("y", "0");
        bgRect.setAttribute("width", svgWidth.toString());
        bgRect.setAttribute("height", svgHeight.toString());
        bgRect.setAttribute("fill", showBackground ? "#f7fbff" : "transparent");
        bgRect.style.cursor = "pointer";
        bgRect.addEventListener("click", (event: MouseEvent) => {
            event.stopPropagation();
            this.selectionManager.clear().then(() => {
                this.updateSelection([], barGroups);
                const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
                this.svg.dispatchEvent(clickEvent);
            });
        });
        if (this.svg.firstChild) {
            this.svg.insertBefore(bgRect, this.svg.firstChild);
        } else {
            this.svg.appendChild(bgRect);
        }
    }

    private renderTitle(titleText: string, titleFontSize: number, titleFontFamily: string, titleFontBold: boolean, titleFontColor: string): void {
        const title = createSvgElement("text");
        title.setAttribute("x", "10");
        title.setAttribute("y", "20");
        title.setAttribute("font-size", titleFontSize.toString());
        title.setAttribute("font-family", titleFontFamily);
        title.setAttribute("font-weight", titleFontBold ? "bold" : "normal");
        title.setAttribute("fill", titleFontColor);
        title.textContent = titleText;
        this.svg.appendChild(title);
    }

    private renderXAxisTitle(xAxisTitle: string, paddingLeft: number, categoryCount: number, barWidth: number, barSpacing: number, baseY: number, xAxisFontSize: number, xAxisFontColor: string, xAxisFontFamily: string): void {
        const axisTitle = createSvgElement("text");
        axisTitle.setAttribute("x", (paddingLeft + (categoryCount * (barWidth + barSpacing) - barSpacing) / 2).toString());
        axisTitle.setAttribute("y", (baseY + 48).toString());
        axisTitle.setAttribute("text-anchor", "middle");
        axisTitle.setAttribute("font-size", xAxisFontSize.toString());
        axisTitle.setAttribute("fill", xAxisFontColor);
        axisTitle.setAttribute("font-family", xAxisFontFamily);
        axisTitle.textContent = xAxisTitle;
        this.svg.appendChild(axisTitle);
    }

    private renderLegend(fillColor: string, colorNon: string): SVGGElement {
        const legendGroup = createSvgElement("g");
        let legendX = 10;
        const legendY = 30;

        const legendNon = createSvgElement("rect");
        legendNon.setAttribute("x", legendX.toString());
        legendNon.setAttribute("y", legendY.toString());
        legendNon.setAttribute("width", "30");
        legendNon.setAttribute("height", "12");
        legendNon.setAttribute("rx", "6");
        legendNon.setAttribute("fill", colorNon);
        legendGroup.appendChild(legendNon);

        const legendNonText = createSvgElement("text");
        legendNonText.setAttribute("x", (legendX + 35).toString());
        legendNonText.setAttribute("y", (legendY + 10).toString());
        legendNonText.setAttribute("font-size", "14");
        legendNonText.setAttribute("fill", "#222");
        legendNonText.textContent = "Non";
        legendGroup.appendChild(legendNonText);

        legendX += 80;

        const legendOui = createSvgElement("rect");
        legendOui.setAttribute("x", legendX.toString());
        legendOui.setAttribute("y", legendY.toString());
        legendOui.setAttribute("width", "30");
        legendOui.setAttribute("height", "12");
        legendOui.setAttribute("rx", "6");
        legendOui.setAttribute("fill", fillColor);
        legendGroup.appendChild(legendOui);

        const legendOuiText = createSvgElement("text");
        legendOuiText.setAttribute("x", (legendX + 35).toString());
        legendOuiText.setAttribute("y", (legendY + 10).toString());
        legendOuiText.setAttribute("font-size", "14");
        legendOuiText.setAttribute("fill", "#222");
        legendOuiText.textContent = "Oui";
        legendGroup.appendChild(legendOuiText);

        return legendGroup;
    }

    private renderBar(
        ctx: BarRenderContext,
        barGroups: SVGGElement[],
        selectionIds: ISelectionId[]
    ): SVGGElement {
        const {
            cat, index, rawValue, x, barWidth, barSpacing, baseY, maxBarHeight, barRadius,
            fontSize, fillColor, colorNon, barValueFontSize, barValueFontFamily, barValueFontColor,
            narrowMode, showXAxis, xAxisFontSize, xAxisFontFamily, xAxisFontColor,
            labelRotation, needsRotation, availableSpaceForLabel, formatBarValue, defs
        } = ctx;

        const percentValue = rawValue * 100;
        const formattedValue = formatBarValue(rawValue);
        const rawBarHeight = Math.max(0, Math.min(1, rawValue)) * maxBarHeight;
        const visibleHeight = rawBarHeight > 0 ? rawBarHeight : 0;
        const effectiveRx = Math.min(barRadius, Math.floor(barWidth / 2));

        const barGroup = createSvgElement("g");
        barGroup.style.cursor = "pointer";
        barGroup.setAttribute("data-index", index.toString());

        barGroup.addEventListener("contextmenu", (event: MouseEvent) => {
            event.preventDefault();
            this.selectionManager.showContextMenu(selectionIds[index], { x: event.clientX, y: event.clientY });
        });

        const barNon = createSvgElement("rect");
        barNon.setAttribute("x", x.toString());
        barNon.setAttribute("y", (baseY - maxBarHeight).toString());
        barNon.setAttribute("width", barWidth.toString());
        barNon.setAttribute("height", maxBarHeight.toString());
        barNon.setAttribute("rx", effectiveRx.toString());
        barNon.setAttribute("fill", colorNon);
        barGroup.appendChild(barNon);

        if (percentValue < 35 && visibleHeight > 0) {
            this.renderLowValueBar(barGroup, defs, index, x, baseY, barWidth, maxBarHeight, visibleHeight, effectiveRx, fillColor, formattedValue, barValueFontSize, barValueFontFamily, barValueFontColor, narrowMode);
        } else if (visibleHeight > 0) {
            this.renderHighValueBar(barGroup, x, baseY, barWidth, visibleHeight, maxBarHeight, effectiveRx, fillColor, formattedValue, fontSize, barValueFontSize, barValueFontFamily, barValueFontColor, narrowMode);
        } else {
            const marker = createSvgElement("rect");
            marker.setAttribute("x", (x + 2).toString());
            marker.setAttribute("y", (baseY - 2).toString());
            marker.setAttribute("width", (barWidth - 4).toString());
            marker.setAttribute("height", "2");
            marker.setAttribute("fill", colorNon);
            barGroup.appendChild(marker);
        }

        if (showXAxis) {
            this.renderXAxisLabel(barGroup, cat, x, barWidth, barSpacing, baseY, xAxisFontSize, xAxisFontFamily, xAxisFontColor, labelRotation, needsRotation, availableSpaceForLabel);
        }

        barGroup.addEventListener("click", (event) => {
            event.stopPropagation();
            const mouseEvent = event as MouseEvent;
            const isCtrlPressed = mouseEvent.ctrlKey || mouseEvent.metaKey;
            this.selectionManager.select(selectionIds[index], isCtrlPressed)
                .then((ids: ISelectionId[]) => { this.updateSelection(ids, barGroups); });
        });

        return barGroup;
    }

    private renderLowValueBar(
        barGroup: SVGGElement, defs: SVGDefsElement, index: number, x: number, baseY: number,
        barWidth: number, maxBarHeight: number, visibleHeight: number, effectiveRx: number,
        fillColor: string, formattedValue: string, barValueFontSize: number,
        barValueFontFamily: string, barValueFontColor: string, narrowMode: boolean
    ): void {
        const clipId = `clip-bar-${index}-${Date.now()}`;
        const clipPath = createSvgElement("clipPath");
        clipPath.setAttribute("id", clipId);
        const clipRect = createSvgElement("rect");
        clipRect.setAttribute("x", x.toString());
        clipRect.setAttribute("y", (baseY - maxBarHeight).toString());
        clipRect.setAttribute("width", barWidth.toString());
        clipRect.setAttribute("height", maxBarHeight.toString());
        clipRect.setAttribute("rx", effectiveRx.toString());
        clipPath.appendChild(clipRect);
        defs.appendChild(clipPath);

        const fillRect = createSvgElement("rect");
        fillRect.setAttribute("x", x.toString());
        fillRect.setAttribute("y", (baseY - visibleHeight).toString());
        fillRect.setAttribute("width", barWidth.toString());
        fillRect.setAttribute("height", visibleHeight.toString());
        fillRect.setAttribute("fill", fillColor);
        fillRect.setAttribute("clip-path", `url(#${clipId})`);
        barGroup.appendChild(fillRect);

        const txt = createSvgElement("text");
        const txtX = x + barWidth / 2;
        const txtY = baseY - maxBarHeight / 2;
        txt.setAttribute("x", txtX.toString());
        txt.setAttribute("y", txtY.toString());
        txt.setAttribute("text-anchor", "middle");
        txt.setAttribute("dominant-baseline", "middle");
        txt.setAttribute("font-size", barValueFontSize.toString());
        txt.setAttribute("fill", barValueFontColor);
        txt.setAttribute("font-family", barValueFontFamily);
        txt.textContent = formattedValue;
        if (narrowMode) {
            txt.setAttribute("transform", `rotate(-90 ${txtX} ${txtY})`);
        }
        barGroup.appendChild(txt);
    }

    private renderHighValueBar(
        barGroup: SVGGElement, x: number, baseY: number, barWidth: number,
        visibleHeight: number, maxBarHeight: number, effectiveRx: number, fillColor: string,
        formattedValue: string, fontSize: number, barValueFontSize: number,
        barValueFontFamily: string, barValueFontColor: string, narrowMode: boolean
    ): void {
        const barHeight = visibleHeight;
        const barOui = createSvgElement("rect");
        barOui.setAttribute("x", x.toString());
        barOui.setAttribute("y", (baseY - barHeight).toString());
        barOui.setAttribute("width", barWidth.toString());
        barOui.setAttribute("height", barHeight.toString());
        const rxForOui = Math.min(effectiveRx, Math.floor(barHeight / 2));
        barOui.setAttribute("rx", rxForOui.toString());
        barOui.setAttribute("fill", fillColor);
        barGroup.appendChild(barOui);

        const txt = createSvgElement("text");
        const txtX = x + barWidth / 2;
        const txtY = narrowMode ? (baseY - maxBarHeight / 2) : (baseY - barHeight / 2);
        txt.setAttribute("x", txtX.toString());
        txt.setAttribute("y", txtY.toString());
        txt.setAttribute("text-anchor", "middle");
        txt.setAttribute("dominant-baseline", "middle");
        const innerFontSize = narrowMode ? fontSize : ((barHeight < fontSize) ? Math.max(8, Math.round(barHeight * 0.6)) : fontSize);
        txt.setAttribute("font-size", innerFontSize.toString());
        txt.setAttribute("fill", barValueFontColor);
        txt.setAttribute("font-family", barValueFontFamily);
        txt.textContent = formattedValue;
        if (narrowMode) {
            txt.setAttribute("transform", `rotate(-90 ${txtX} ${txtY})`);
        }
        barGroup.appendChild(txt);
    }

    private renderXAxisLabel(
        barGroup: SVGGElement, cat: string, x: number, barWidth: number, barSpacing: number,
        baseY: number, xAxisFontSize: number, xAxisFontFamily: string, xAxisFontColor: string,
        labelRotation: number, needsRotation: boolean, availableSpaceForLabel: number
    ): void {
        const yearTxt = createSvgElement("text");
        const yearX = x + barWidth / 2;
        const yearY = baseY + 20;
        yearTxt.setAttribute("x", yearX.toString());
        yearTxt.setAttribute("y", yearY.toString());
        yearTxt.setAttribute("font-size", xAxisFontSize.toString());
        yearTxt.setAttribute("fill", xAxisFontColor);
        yearTxt.setAttribute("font-family", xAxisFontFamily);

        let displayText = cat;
        const maxLabelWidth = barWidth + barSpacing - 4;

        const tempText = createSvgElement("text");
        tempText.setAttribute("font-size", xAxisFontSize.toString());
        tempText.setAttribute("font-family", xAxisFontFamily);
        tempText.textContent = cat;
        tempText.style.visibility = "hidden";
        this.svg.appendChild(tempText);
        const textWidth = tempText.getBBox().width;
        this.svg.removeChild(tempText);

        if (needsRotation || labelRotation !== 0) {
            const rotation = labelRotation !== 0 ? labelRotation : 45;
            yearTxt.setAttribute("text-anchor", "end");
            yearTxt.setAttribute("transform", `rotate(${-rotation} ${yearX} ${yearY})`);
            const maxRotatedLength = Math.floor(availableSpaceForLabel * 1.2);
            if (textWidth > maxRotatedLength && cat.length > 10) {
                const charsToKeep = Math.floor(cat.length * (maxRotatedLength / textWidth)) - 3;
                displayText = cat.substring(0, Math.max(1, charsToKeep)) + "...";
            }
        } else {
            yearTxt.setAttribute("text-anchor", "middle");
            if (textWidth > maxLabelWidth && cat.length > 3) {
                let truncateLength = Math.floor(cat.length * (maxLabelWidth / textWidth)) - 3;
                truncateLength = Math.max(1, truncateLength);
                displayText = cat.substring(0, truncateLength) + "...";
            }
        }

        yearTxt.textContent = displayText;
        barGroup.appendChild(yearTxt);
    }

    private updateSelection(selectedIds: ISelectionId[], barGroups: SVGGElement[]) {
        // Mettre à jour l'opacité des barres selon la sélection
        barGroups.forEach((group, index) => {
            if (selectedIds.length === 0) {
                group.style.opacity = "1";
            } else {
                const isSelected = selectedIds.some(selectedId => {
                    const selectedKey = (selectedId as any).key;
                    const dataPointKey = (this.dataPoints[index]?.selectionId as any)?.key;
                    return selectedKey === dataPointKey;
                });
                group.style.opacity = isSelected ? "1" : "0.3";
            }
        });
    }

    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
}

// helper to get color value (handles ColorPicker object)
function readColor(obj: any): string | undefined {
    if (!obj) { return undefined; }
    if (typeof obj === "string") { return obj; }
    if (obj.solid && obj.solid.color) { return obj.solid.color; }
    if (obj.value) { return obj.value; }
    return undefined;
}

function lightenColor(hex: string, percent: number, alpha: number = 0.5): string {
    // Convert hex to RGB
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    // Lighten
    r = Math.round(r + (255 - r) * percent);
    g = Math.round(g + (255 - g) * percent);
    b = Math.round(b + (255 - b) * percent);
    return `rgba(${r},${g},${b},${alpha})`;
}