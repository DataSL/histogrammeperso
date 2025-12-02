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
    private selectionManager: ISelectionManager;
    private host: powerbi.extensibility.visual.IVisualHost;
    private dataPoints: Array<{ year: number; value: number; selectionId: ISelectionId }>;

    constructor(options: VisualConstructorOptions) {
        this.formattingSettingsService = new FormattingSettingsService();
        this.target = options.element;
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager();
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", "100%");
        this.svg.setAttribute("height", "100%");
        this.target.appendChild(this.svg);
        this.dataPoints = [];
    }

    public update(options: VisualUpdateOptions) {
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews[0]);
        while (this.svg.firstChild) this.svg.removeChild(this.svg.firstChild);

        const width = options.viewport.width;
        const height = options.viewport.height;
        this.svg.setAttribute("width", width.toString());
        this.svg.setAttribute("height", height.toString());

        // Récupération des données
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical) return;

        const categories = dataView.categorical.categories[0];
        const categoryValues = categories.values as (string | number)[];
        const values = dataView.categorical.values[0].values as number[];

        // Création des ISelectionId pour chaque catégorie - stocker dans this.dataPoints
        this.dataPoints = categoryValues.map((year, i) => ({
            year: typeof year === "string" ? parseInt(year, 10) : year,
            value: values[i],
            selectionId: this.host.createSelectionIdBuilder()
                .withCategory(categories, i)
                .createSelectionId()
        })).sort((a, b) => a.year - b.year);

        const sortedCategories = this.dataPoints.map(d => d.year.toString());
        const sortedValues = this.dataPoints.map(d => d.value);
        const selectionIds = this.dataPoints.map(d => d.selectionId);

        // Récupération des propriétés personnalisables
        const objects = dataView.metadata.objects;
        let fillColor = "#2F6FE7";
        if (objects && objects["dataPoint"] && objects["dataPoint"]["fill"]) {
            const colorObj = objects["dataPoint"]["fill"] as any;
            if (colorObj.solid && colorObj.solid.color) {
                fillColor = colorObj.solid.color;
            }
        }
        const colorNon = lightenColor(fillColor, 0.6, 0.5);
        
        let barRadius = 30;
        if (objects && objects["dataPoint"] && objects["dataPoint"]["barRadius"]) {
            const radiusProp = objects["dataPoint"]["barRadius"] as any;
            if (typeof radiusProp === "number") {
                barRadius = radiusProp;
            }
        }
        
        let fontSize = 18;
        if (objects && objects["dataPoint"] && objects["dataPoint"]["fontSize"]) {
            const fontSizeProp = objects["dataPoint"]["fontSize"] as any;
            if (typeof fontSizeProp === "number") {
                fontSize = fontSizeProp;
            }
        }

        // Paramètres du graphique
        const barWidth = Math.min(60, width / (sortedCategories.length * 1.2));
        const barSpacing = barWidth * 0.3;
        const maxBarHeight = height * 0.6;
        const baseY = height * 0.8;

        // Dessin de la légende
        const legendGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        let legendX = 10;
        let legendY = 30;
        
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

        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
        title.setAttribute("x", "10");
        title.setAttribute("y", "20");
        title.setAttribute("font-size", "20");
        title.setAttribute("font-weight", "bold");
        title.setAttribute("fill", "#222");
        title.textContent = "DSP";
        this.svg.appendChild(title);
        this.svg.appendChild(legendGroup);

        // Stocker les groupes de barres pour la sélection
        const barGroups: SVGGElement[] = [];

        // Dessin des barres avec gestion de la sélection
        sortedCategories.forEach((cat, i) => {
            const percent = Math.round(sortedValues[i]);
            const x = 40 + i * (barWidth + barSpacing);
            const barHeight = maxBarHeight * percent / 100;

            // Groupe pour chaque barre (pour gérer les événements)
            const barGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            barGroup.style.cursor = "pointer";
            barGroup.setAttribute("data-index", i.toString());

            // Barre "Non" (fond)
            const barNon = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            barNon.setAttribute("x", x.toString());
            barNon.setAttribute("y", (baseY - maxBarHeight).toString());
            barNon.setAttribute("width", barWidth.toString());
            barNon.setAttribute("height", maxBarHeight.toString());
            barNon.setAttribute("rx", barRadius.toString());
            barNon.setAttribute("fill", colorNon);
            barGroup.appendChild(barNon);

            // Barre "Oui" (valeur)
            const barOui = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            barOui.setAttribute("x", x.toString());
            barOui.setAttribute("y", (baseY - barHeight).toString());
            barOui.setAttribute("width", barWidth.toString());
            barOui.setAttribute("height", barHeight.toString());
            barOui.setAttribute("rx", barRadius.toString());
            barOui.setAttribute("fill", fillColor);
            barGroup.appendChild(barOui);

            // Texte du pourcentage
            const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
            txt.setAttribute("x", (x + barWidth / 2).toString());
            txt.setAttribute("y", (baseY - barHeight / 2).toString());
            txt.setAttribute("text-anchor", "middle");
            txt.setAttribute("dominant-baseline", "middle");
            txt.setAttribute("font-size", fontSize.toString());
            txt.setAttribute("fill", "#fff");
            txt.textContent = percent + "%";
            barGroup.appendChild(txt);

            // Texte de l'année
            const yearTxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
            yearTxt.setAttribute("x", (x + barWidth / 2).toString());
            yearTxt.setAttribute("y", (baseY + 20).toString());
            yearTxt.setAttribute("text-anchor", "middle");
            yearTxt.setAttribute("font-size", "14");
            yearTxt.setAttribute("fill", "#888");
            yearTxt.textContent = cat;
            barGroup.appendChild(yearTxt);

            // Gestion des événements de clic
            barGroup.addEventListener("click", (event) => {
                event.stopPropagation();
                const mouseEvent = event as MouseEvent;
                // Permet la sélection multiple avec Ctrl/Cmd
                const isCtrlPressed = mouseEvent.ctrlKey || mouseEvent.metaKey;
                
                this.selectionManager.select(selectionIds[i], isCtrlPressed)
                    .then((ids: ISelectionId[]) => {
                        // Mise à jour visuelle des barres sélectionnées
                        this.updateSelection(ids, barGroups);
                    });
            });

            barGroups.push(barGroup);
            this.svg.appendChild(barGroup);
        });

        // Clic sur le fond pour désélectionner
        const clearSelection = (event: MouseEvent) => {
            this.selectionManager.clear().then(() => {
                this.updateSelection([], barGroups);
            });
        };
        
        // Supprimer l'ancien listener s'il existe et ajouter le nouveau
        this.svg.onclick = clearSelection;
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