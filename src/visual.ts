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

import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import ISelectionId = powerbi.visuals.ISelectionId;
import { VisualFormattingSettingsModel } from "./settings";

export class Visual implements IVisual {
    private target: HTMLElement;
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    private svg: SVGSVGElement;
    private container: HTMLElement; // <--- ajouté
    private selectionManager: ISelectionManager;
    private host: powerbi.extensibility.visual.IVisualHost;
    private dataPoints: Array<{ year: number; value: number; selectionId: ISelectionId }>;

    constructor(options: VisualConstructorOptions) {
        this.formattingSettingsService = new FormattingSettingsService();
        this.target = options.element;
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager();

        // Container scrollable pour le SVG
        this.container = document.createElement('div');
        this.container.style.width = "100%";
        this.container.style.height = "100%";
        this.container.style.overflow = "auto"; // permet scroll horizontal et vertical
        this.container.style.position = "relative";
        this.target.appendChild(this.container);

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", "100%");
        this.svg.setAttribute("height", "100%");
        this.svg.style.display = "block"; // évite gaps dans certains navigateurs
        this.container.appendChild(this.svg);

        this.dataPoints = [];
    }

    public update(options: VisualUpdateOptions) {
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
        if (!dataView || !dataView.categorical) return;

        const categories = dataView.categorical.categories[0];
        const categoryValues = categories.values as (string | number)[];
        const values = dataView.categorical.values[0].values as number[];

        // Création des ISelectionId pour chaque catégorie - stocker dans this.dataPoints
        this.dataPoints = categoryValues.map((year, i) => ({
            year: typeof year === "string" ? parseInt(year as string, 10) : (year as number),
            value: values[i],
            selectionId: this.host.createSelectionIdBuilder()
                .withCategory(categories, i)
                .createSelectionId()
        })).sort((a, b) => a.year - b.year);

        const sortedCategories = this.dataPoints.map(d => d.year.toString());
        const sortedValues = this.dataPoints.map(d => d.value);
        const selectionIds = this.dataPoints.map(d => d.selectionId);

        // Récupération des propriétés personnalisables
        const objects = dataView.metadata && dataView.metadata.objects;
        let fillColor = "#2F6FE7";
        if (objects && objects["dataPoint"] && (objects["dataPoint"] as any)["fill"]) {
            const colorObj = (objects["dataPoint"] as any)["fill"];
            if (colorObj.solid && colorObj.solid.color) {
                fillColor = colorObj.solid.color;
            }
        }
        const colorNon = lightenColor(fillColor, 0.6, 0.5);

        const barRadius = objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["barRadius"] === "number"
            ? (objects["dataPoint"] as any)["barRadius"]
            : 30;

        const fontSize = objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["fontSize"] === "number"
            ? (objects["dataPoint"] as any)["fontSize"]
            : 18;

        // Calculer barWidth et espacement (une seule déclaration)
        let barWidth = Math.min(60, Math.max(10, Math.floor(width / Math.max(1, sortedCategories.length) * 0.6)));
        if (objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["barWidth"] === "number") {
            barWidth = (objects["dataPoint"] as any)["barWidth"];
        }

        let barSpacing = Math.round(barWidth * 0.6); // espace par défaut
        if (objects && objects["dataPoint"] && typeof (objects["dataPoint"] as any)["barSpacing"] === "number") {
            barSpacing = (objects["dataPoint"] as any)["barSpacing"];
        }

        const maxBarHeight = Math.floor(height * 0.6);
        const baseY = Math.floor(height * 0.8);

        // Calculer taille SVG nécessaire et adapter pour activer scroll si besoin
        const paddingLeft = 40;
        const paddingRight = 40;
        const totalNeededWidth = paddingLeft + sortedCategories.length * (barWidth + barSpacing) - barSpacing + paddingRight;
        const svgWidth = Math.max(width, Math.ceil(totalNeededWidth));
        const svgHeight = Math.max(height, Math.ceil(maxBarHeight + 120));

        this.svg.setAttribute("width", svgWidth.toString());
        this.svg.setAttribute("height", svgHeight.toString());

        // Titre + légende
        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
        title.setAttribute("x", "10");
        title.setAttribute("y", "20");
        title.setAttribute("font-size", "20");
        title.setAttribute("font-weight", "bold");
        title.setAttribute("fill", "#222");
        title.textContent = "DSP";
        this.svg.appendChild(title);

        const legendGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        let legendX = 10;
        const legendY = 30;
        const legendNon = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        legendNon.setAttribute("x", legendX.toString());
        legendNon.setAttribute("y", legendY.toString());
        legendNon.setAttribute("width", "30");
        legendNon.setAttribute("height", "12");
        legendNon.setAttribute("rx", "6");
        legendNon.setAttribute("fill", colorNon);
        legendGroup.appendChild(legendNon);
        const legendNonText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        legendNonText.setAttribute("x", (legendX + 35).toString());
        legendNonText.setAttribute("y", (legendY + 10).toString());
        legendNonText.setAttribute("font-size", "14");
        legendNonText.setAttribute("fill", "#222");
        legendNonText.textContent = "Non";
        legendGroup.appendChild(legendNonText);
        legendX += 80;
        const legendOui = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        legendOui.setAttribute("x", legendX.toString());
        legendOui.setAttribute("y", legendY.toString());
        legendOui.setAttribute("width", "30");
        legendOui.setAttribute("height", "12");
        legendOui.setAttribute("rx", "6");
        legendOui.setAttribute("fill", fillColor);
        legendGroup.appendChild(legendOui);
        const legendOuiText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        legendOuiText.setAttribute("x", (legendX + 35).toString());
        legendOuiText.setAttribute("y", (legendY + 10).toString());
        legendOuiText.setAttribute("font-size", "14");
        legendOuiText.setAttribute("fill", "#222");
        legendOuiText.textContent = "Oui";
        legendGroup.appendChild(legendOuiText);
        this.svg.appendChild(legendGroup);
        this.svg.appendChild(title);

        // defs pour clipPaths (nouveau à chaque update)
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this.svg.appendChild(defs);

        // Dessin des barres
        const barGroups: SVGGElement[] = [];
        sortedCategories.forEach((cat, i) => {
            const rawValue = sortedValues[i] || 0;
            const percentValue = rawValue * 100;
            const percent = percentValue.toFixed(2).replace('.', ',');
            const x = paddingLeft + i * (barWidth + barSpacing);

            const rawBarHeight = Math.max(0, Math.min(1, rawValue)) * maxBarHeight;
            const visibleHeight = rawBarHeight > 0 ? rawBarHeight : 0;

            const effectiveRx = Math.min(barRadius, Math.floor(barWidth / 2));

            const barGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            barGroup.style.cursor = "pointer";
            barGroup.setAttribute("data-index", i.toString());

            // background rounded rect
            const barNon = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            barNon.setAttribute("x", x.toString());
            barNon.setAttribute("y", (baseY - maxBarHeight).toString());
            barNon.setAttribute("width", barWidth.toString());
            barNon.setAttribute("height", maxBarHeight.toString());
            barNon.setAttribute("rx", effectiveRx.toString());
            barNon.setAttribute("fill", colorNon);
            barGroup.appendChild(barNon);

            if (percentValue < 5 && visibleHeight > 0) {
                // clip + fill so fill respects rounded background shape
                const clipId = `clip-bar-${i}-${Date.now()}`;
                const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
                clipPath.setAttribute("id", clipId);
                const clipRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                clipRect.setAttribute("x", x.toString());
                clipRect.setAttribute("y", (baseY - maxBarHeight).toString());
                clipRect.setAttribute("width", barWidth.toString());
                clipRect.setAttribute("height", maxBarHeight.toString());
                clipRect.setAttribute("rx", effectiveRx.toString());
                clipPath.appendChild(clipRect);
                defs.appendChild(clipPath);

                const fillRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                fillRect.setAttribute("x", x.toString());
                fillRect.setAttribute("y", (baseY - visibleHeight).toString());
                fillRect.setAttribute("width", barWidth.toString());
                fillRect.setAttribute("height", visibleHeight.toString());
                fillRect.setAttribute("fill", fillColor);
                fillRect.setAttribute("clip-path", `url(#${clipId})`);
                barGroup.appendChild(fillRect);

                // texte centré sur la barre entière
                const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
                txt.setAttribute("x", (x + barWidth / 2).toString());
                txt.setAttribute("y", (baseY - (maxBarHeight / 2)).toString());
                txt.setAttribute("text-anchor", "middle");
                txt.setAttribute("dominant-baseline", "middle");
                txt.setAttribute("font-size", fontSize.toString());
                txt.setAttribute("fill", "#fff");
                txt.textContent = percent + "%";
                barGroup.appendChild(txt);
            } else if (visibleHeight > 0) {
                // normal rounded filled rect
                const barOui = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                const barHeight = visibleHeight;
                barOui.setAttribute("x", x.toString());
                barOui.setAttribute("y", (baseY - barHeight).toString());
                barOui.setAttribute("width", barWidth.toString());
                barOui.setAttribute("height", barHeight.toString());
                const rxForOui = Math.min(effectiveRx, Math.floor(barHeight / 2));
                barOui.setAttribute("rx", rxForOui.toString());
                barOui.setAttribute("fill", fillColor);
                barGroup.appendChild(barOui);

                // texte centré dans la partie remplie
                const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
                txt.setAttribute("x", (x + barWidth / 2).toString());
                txt.setAttribute("y", (baseY - (barHeight / 2)).toString());
                txt.setAttribute("text-anchor", "middle");
                txt.setAttribute("dominant-baseline", "middle");
                const innerFontSize = (barHeight < fontSize) ? Math.max(8, Math.round(barHeight * 0.6)) : fontSize;
                txt.setAttribute("font-size", innerFontSize.toString());
                txt.setAttribute("fill", "#fff");
                txt.textContent = percent + "%";
                barGroup.appendChild(txt);
            } else {
                // zero value: optionally add a small baseline marker (keeps visuals consistent)
                const marker = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                marker.setAttribute("x", (x + 2).toString());
                marker.setAttribute("y", (baseY - 2).toString());
                marker.setAttribute("width", (barWidth - 4).toString());
                marker.setAttribute("height", "2");
                marker.setAttribute("fill", colorNon);
                barGroup.appendChild(marker);
            }

            // year label
            const yearTxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
            yearTxt.setAttribute("x", (x + barWidth / 2).toString());
            yearTxt.setAttribute("y", (baseY + 20).toString());
            yearTxt.setAttribute("text-anchor", "middle");
            yearTxt.setAttribute("font-size", "14");
            yearTxt.setAttribute("fill", "#888");
            yearTxt.textContent = cat;
            barGroup.appendChild(yearTxt);

            // click selection
            barGroup.addEventListener("click", (event) => {
                event.stopPropagation();
                const mouseEvent = event as MouseEvent;
                const isCtrlPressed = mouseEvent.ctrlKey || mouseEvent.metaKey;
                this.selectionManager.select(selectionIds[i], isCtrlPressed)
                    .then((ids: ISelectionId[]) => {
                        this.updateSelection(ids, barGroups);
                    });
            });

            barGroups.push(barGroup);
            this.svg.appendChild(barGroup);
        });

        // clic sur fond pour désélectionner
        this.svg.onclick = (event: MouseEvent) => {
            event.stopPropagation();
            this.selectionManager.clear().then(() => {
                this.updateSelection([], barGroups);
            });
        };
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