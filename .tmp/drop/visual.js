var histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(587);
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




class Visual {
    target;
    formattingSettings;
    formattingSettingsService;
    svg;
    container;
    selectionManager;
    host;
    dataPoints;
    constructor(options) {
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .FormattingSettingsService */ .O();
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
    update(options) {
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_1__/* .VisualFormattingSettingsModel */ .S, options.dataViews && options.dataViews[0]);
        // clear svg
        while (this.svg.firstChild)
            this.svg.removeChild(this.svg.firstChild);
        const width = options.viewport.width;
        const height = options.viewport.height;
        // Fixer la zone visible (container) à la taille du viewport Power BI
        this.container.style.width = width + "px";
        this.container.style.height = height + "px";
        // Récupération des données
        const dataView = options.dataViews && options.dataViews[0];
        if (!dataView || !dataView.categorical)
            return;
        const categories = dataView.categorical.categories[0];
        const categoryValues = categories.values;
        const values = dataView.categorical.values[0].values;
        // Création des ISelectionId pour chaque catégorie - stocker dans this.dataPoints
        this.dataPoints = categoryValues.map((cat, i) => ({
            category: cat.toString(),
            value: values[i],
            selectionId: this.host.createSelectionIdBuilder()
                .withCategory(categories, i)
                .createSelectionId()
        }));
        // Détecter si toutes les catégories sont des années (nombres à 4 chiffres)
        const areYears = this.dataPoints.every(dp => {
            const num = parseInt(dp.category);
            return !isNaN(num) && num >= 1900 && num <= 2100 && dp.category.length === 4;
        });
        // Trier par année si détecté, sinon garder l'ordre d'origine
        if (areYears) {
            this.dataPoints.sort((a, b) => parseInt(a.category) - parseInt(b.category));
        }
        const sortedCategories = this.dataPoints.map(d => d.category);
        const sortedValues = this.dataPoints.map(d => d.value);
        const selectionIds = this.dataPoints.map(d => d.selectionId);
        // Récupération des propriétés personnalisables
        const objects = dataView.metadata && dataView.metadata.objects;
        let fillColor = "#2F6FE7";
        if (objects && objects["dataPoint"] && objects["dataPoint"]["fill"]) {
            const colorObj = objects["dataPoint"]["fill"];
            if (colorObj.solid && colorObj.solid.color) {
                fillColor = colorObj.solid.color;
            }
        }
        const colorNon = lightenColor(fillColor, 0.6, 0.5);
        const barRadius = objects && objects["dataPoint"] && typeof objects["dataPoint"]["barRadius"] === "number"
            ? objects["dataPoint"]["barRadius"]
            : 30;
        const fontSize = objects && objects["dataPoint"] && typeof objects["dataPoint"]["fontSize"] === "number"
            ? objects["dataPoint"]["fontSize"]
            : 18;
        // valeur / format des barres (nouveauté)
        const dpObj = (objects && objects["dataPoint"]) || {};
        const valueDisplayMode = typeof dpObj["valueDisplayMode"] === "number" ? dpObj["valueDisplayMode"] : 0; // 0=%,1=decimal,2=integer
        const decimalPlaces = typeof dpObj["decimalPlaces"] === "number" ? Math.max(0, dpObj["decimalPlaces"]) : 2;
        // police / couleur / taille des valeurs dans les barres
        const barValueFontSize = typeof dpObj["fontSize"] === "number" ? dpObj["fontSize"] : 18;
        const barValueFontFamily = typeof dpObj["fontFamily"] === "string" ? dpObj["fontFamily"] : "Segoe UI";
        const barValueFontColor = readColor(dpObj["fontColor"]) || "#ffffff";
        function formatBarValue(raw) {
            if (valueDisplayMode === 0) {
                const v = raw * 100;
                return v.toFixed(decimalPlaces).replace('.', ',') + "%";
            }
            else if (valueDisplayMode === 1) {
                return raw.toFixed(decimalPlaces).replace('.', ',');
            }
            else {
                return Math.round(raw).toString();
            }
        }
        // X axis options
        const xAxisObj = (objects && objects["xAxis"]) || {};
        const showXAxis = typeof xAxisObj["show"] === "boolean" ? xAxisObj["show"] : true;
        const xAxisTitle = typeof xAxisObj["title"] === "string" ? xAxisObj["title"] : "";
        const labelRotation = typeof xAxisObj["labelRotation"] === "number" ? xAxisObj["labelRotation"] : 0;
        const xAxisFontSize = typeof xAxisObj["fontSize"] === "number" ? xAxisObj["fontSize"] : 14;
        const xAxisFontFamily = typeof xAxisObj["fontFamily"] === "string" ? xAxisObj["fontFamily"] : "Segoe UI";
        const xAxisFontColor = readColor(xAxisObj["fontColor"]) || "#888";
        const bottomMargin = typeof xAxisObj["bottomMargin"] === "number" ? Math.max(40, xAxisObj["bottomMargin"]) : 80;
        // Calculer barWidth et espacement (une seule déclaration)
        let barWidth = Math.min(60, Math.max(10, Math.floor(width / Math.max(1, sortedCategories.length) * 0.6)));
        if (objects && objects["dataPoint"] && typeof objects["dataPoint"]["barWidth"] === "number") {
            barWidth = objects["dataPoint"]["barWidth"];
        }
        let barSpacing = Math.round(barWidth * 0.6);
        try {
            const fs = this.formattingSettings;
            if (fs && fs.dataPointCard && fs.dataPointCard.barSpacing && typeof fs.dataPointCard.barSpacing.value === "number") {
                barSpacing = Math.round(fs.dataPointCard.barSpacing.value);
            }
            else if (objects && objects["dataPoint"] && typeof objects["dataPoint"]["barSpacing"] === "number") {
                barSpacing = objects["dataPoint"]["barSpacing"];
            }
        }
        catch (e) {
            // fallback conservateur — laisser barSpacing calculé
        }
        // bottomMargin reste en pixels
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
        // DETECTION MODE "NARROW" (peut ajuster seuil)
        const slotWidth = barWidth + barSpacing;
        const narrowMode = slotWidth < 70 || width < 480 || svgWidth > width;
        // Titre
        const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
        title.setAttribute("x", "10");
        title.setAttribute("y", "20");
        title.setAttribute("font-size", "20");
        title.setAttribute("font-weight", "bold");
        title.setAttribute("fill", "#222");
        title.textContent = "DSP";
        this.svg.appendChild(title);
        // Légende — si narrowMode on la masque (ne pas passer en verticale)
        const legendGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        if (!narrowMode) {
            // horizontale (ancien comportement)
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
        } // else : narrowMode -> ne rien afficher (masqué)
        this.svg.appendChild(title);
        // defs pour clipPaths (nouveau à chaque update)
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this.svg.appendChild(defs);
        // Dessin des barres
        const barGroups = [];
        // ÉTAPE 1: Déterminer si AU MOINS UN label nécessite une rotation
        let needsRotation = false;
        const availableSpaceForLabel = bottomMargin - 25; // espace disponible pour le label (en retirant padding)
        sortedCategories.forEach((cat, i) => {
            const tempText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            tempText.setAttribute("font-size", xAxisFontSize.toString());
            tempText.setAttribute("font-family", xAxisFontFamily);
            tempText.textContent = cat;
            tempText.style.visibility = "hidden";
            this.svg.appendChild(tempText);
            const textWidth = tempText.getBBox().width;
            this.svg.removeChild(tempText);
            const maxLabelWidth = barWidth + barSpacing - 4;
            // Si le texte dépasse l'espace horizontal OU si labels multiples se chevauchent
            if (textWidth > maxLabelWidth) {
                needsRotation = true;
            }
        });
        sortedCategories.forEach((cat, i) => {
            const rawValue = sortedValues[i] || 0;
            const percentValue = rawValue * 100;
            const formattedValue = formatBarValue(rawValue);
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
            if (percentValue < 19.9 && visibleHeight > 0) {
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
                // Texte toujours au milieu de l'arrière-plan en narrowMode
                const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
                const txtX = (x + barWidth / 2);
                const txtY = narrowMode ? (baseY - (maxBarHeight / 2)) : (baseY - (maxBarHeight / 2));
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
            else if (visibleHeight > 0) {
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
                // Texte au milieu de l'arrière-plan en narrowMode, sinon au milieu de la barre
                const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
                const txtX = (x + barWidth / 2);
                const txtY = narrowMode ? (baseY - (maxBarHeight / 2)) : (baseY - (barHeight / 2));
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
            else {
                const marker = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                marker.setAttribute("x", (x + 2).toString());
                marker.setAttribute("y", (baseY - 2).toString());
                marker.setAttribute("width", (barWidth - 4).toString());
                marker.setAttribute("height", "2");
                marker.setAttribute("fill", colorNon);
                barGroup.appendChild(marker);
            }
            // year label — tous identiques (rotation si AU MOINS 1 nécessite)
            if (showXAxis) {
                const yearTxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
                const yearX = (x + barWidth / 2);
                const yearY = (baseY + 20);
                yearTxt.setAttribute("x", yearX.toString());
                yearTxt.setAttribute("y", yearY.toString());
                yearTxt.setAttribute("font-size", xAxisFontSize.toString());
                yearTxt.setAttribute("fill", xAxisFontColor);
                yearTxt.setAttribute("font-family", xAxisFontFamily);
                let displayText = cat;
                const maxLabelWidth = barWidth + barSpacing - 4;
                // Mesurer largeur texte pour troncature éventuelle
                const tempText = document.createElementNS("http://www.w3.org/2000/svg", "text");
                tempText.setAttribute("font-size", xAxisFontSize.toString());
                tempText.setAttribute("font-family", xAxisFontFamily);
                tempText.textContent = cat;
                tempText.style.visibility = "hidden";
                this.svg.appendChild(tempText);
                const textWidth = tempText.getBBox().width;
                this.svg.removeChild(tempText);
                if (needsRotation || labelRotation !== 0) {
                    // Rotation appliquée à TOUS (décision globale)
                    const rotation = labelRotation !== 0 ? labelRotation : 45;
                    yearTxt.setAttribute("text-anchor", "end");
                    yearTxt.setAttribute("transform", `rotate(${-rotation} ${yearX} ${yearY})`);
                    // Tronquer si texte trop long même en rotation
                    // Utiliser bottomMargin pour calculer l'espace disponible en rotation
                    const maxRotatedLength = Math.floor(availableSpaceForLabel * 1.2); // approximation pour texte en diagonale
                    if (textWidth > maxRotatedLength && cat.length > 10) {
                        const charsToKeep = Math.floor(cat.length * (maxRotatedLength / textWidth)) - 3;
                        displayText = cat.substring(0, Math.max(1, charsToKeep)) + "...";
                    }
                }
                else {
                    // Mode horizontal : tronquer si nécessaire
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
            // click selection
            barGroup.addEventListener("click", (event) => {
                event.stopPropagation();
                const mouseEvent = event;
                const isCtrlPressed = mouseEvent.ctrlKey || mouseEvent.metaKey;
                this.selectionManager.select(selectionIds[i], isCtrlPressed)
                    .then((ids) => {
                    this.updateSelection(ids, barGroups);
                });
            });
            barGroups.push(barGroup);
            this.svg.appendChild(barGroup);
        });
        // dessiner le titre de l'axe X si demandé
        if (showXAxis && xAxisTitle) {
            const axisTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
            axisTitle.setAttribute("x", (paddingLeft + (sortedCategories.length * (barWidth + barSpacing) - barSpacing) / 2).toString());
            axisTitle.setAttribute("y", (baseY + 48).toString());
            axisTitle.setAttribute("text-anchor", "middle");
            axisTitle.setAttribute("font-size", (xAxisFontSize).toString());
            axisTitle.setAttribute("fill", xAxisFontColor);
            axisTitle.setAttribute("font-family", xAxisFontFamily);
            axisTitle.textContent = xAxisTitle;
            this.svg.appendChild(axisTitle);
        }
        // clic sur fond pour désélectionner
        this.svg.onclick = (event) => {
            event.stopPropagation();
            this.selectionManager.clear().then(() => {
                this.updateSelection([], barGroups);
            });
        };
    }
    updateSelection(selectedIds, barGroups) {
        // Mettre à jour l'opacité des barres selon la sélection
        barGroups.forEach((group, index) => {
            if (selectedIds.length === 0) {
                group.style.opacity = "1";
            }
            else {
                const isSelected = selectedIds.some(selectedId => {
                    const selectedKey = selectedId.key;
                    const dataPointKey = this.dataPoints[index]?.selectionId?.key;
                    return selectedKey === dataPointKey;
                });
                group.style.opacity = isSelected ? "1" : "0.3";
            }
        });
    }
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
}
// helper to get color value (handles ColorPicker object)
function readColor(obj) {
    if (!obj) {
        return undefined;
    }
    if (typeof obj === "string") {
        return obj;
    }
    if (obj.solid && obj.solid.color) {
        return obj.solid.color;
    }
    if (obj.value) {
        return obj.value;
    }
    return undefined;
}
function lightenColor(hex, percent, alpha = 0.5) {
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


/***/ }),

/***/ 587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);
/*
 *  Power BI Visualizations
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
 */


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z.Tn;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.Model */ .z.Kx;
/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "fill",
        displayName: "Bar Color",
        value: { value: "" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize",
        displayName: "Text Size",
        value: 18
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "fontFamily",
        displayName: "Font family for values",
        value: "Segoe UI",
        placeholder: "e.g. Segoe UI, Arial"
    });
    fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "fontColor",
        displayName: "Font color for values",
        value: { value: "#ffffff" }
    });
    barRadius = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "barRadius",
        displayName: "Bar Radius",
        value: 30
    });
    barWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "barWidth",
        displayName: "Bar Width",
        value: 60
    });
    barSpacing = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "barSpacing",
        displayName: "Bar Spacing",
        value: 36
    });
    valueDisplayMode = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "valueDisplayMode",
        displayName: "Value display mode (0=%,1=decimal,2=integer)",
        value: 0
    });
    decimalPlaces = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "decimalPlaces",
        displayName: "Decimal places for values",
        value: 2
    });
    name = "dataPoint";
    displayName = "Data colors";
    slices = [
        this.fill,
        this.fontSize,
        this.fontFamily,
        this.fontColor,
        this.barRadius,
        this.barWidth,
        this.barSpacing,
        this.valueDisplayMode,
        this.decimalPlaces
    ];
}
/**
 * X Axis Formatting Card (Dropdown for font family)
 */
class XAxisCardSettings extends FormattingSettingsCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "show",
        displayName: "Show X axis labels",
        value: true
    });
    title = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "title",
        displayName: "X axis title",
        value: "",
        placeholder: ""
    });
    labelRotation = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "labelRotation",
        displayName: "Label rotation (deg)",
        value: 0
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize",
        displayName: "X axis font size",
        value: 14
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "fontFamily",
        displayName: "X axis font family",
        value: "Segoe UI",
        placeholder: "e.g. Segoe UI, Arial"
    });
    fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "fontColor",
        displayName: "X axis font color",
        value: { value: "#888888" }
    });
    bottomMargin = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "bottomMargin",
        displayName: "Bottom margin (spacing for X axis)",
        value: 80,
        options: {
            minValue: {
                type: 0 /* powerbi.visuals.ValidatorType.Min */,
                value: 40
            },
            maxValue: {
                type: 1 /* powerbi.visuals.ValidatorType.Max */,
                value: 80
            }
        }
    });
    name = "xAxis";
    displayName = "X axis";
    slices = [
        this.show,
        this.title,
        this.labelRotation,
        this.fontSize,
        this.fontFamily,
        this.fontColor,
        this.bottomMargin
    ];
}
/**
* visual settings model class
*/
class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard = new DataPointCardSettings();
    xAxisCard = new XAxisCardSettings();
    cards = [this.dataPointCard, this.xAxisCard];
}


/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getPropertyValue),
/* harmony export */   y: () => (/* binding */ getDescriptor)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if (slice === null || slice === void 0 ? void 0 : slice.items) {
        let itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);

class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataView) {
        var _a, _b;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_a = dataView === null || dataView === void 0 ? void 0 : dataView.metadata) === null || _a === void 0 ? void 0 : _a.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_b = defaultSettings.cards) === null || _b === void 0 ? void 0 : _b.forEach((card) => {
                var _a;
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ? [card] : card.groups);
                cardGroupInstances.forEach((cardGroupInstance) => {
                    var _a, _b, _c, _d;
                    // Set current top level toggle value
                    (_a = cardGroupInstance.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                    (_b = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.slices) === null || _b === void 0 ? void 0 : _b.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                    (_d = (_c = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.container) === null || _c === void 0 ? void 0 : _c.containerItems) === null || _d === void 0 ? void 0 : _d.forEach((containerItem) => {
                        var _a;
                        (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                            slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                        });
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        let formattingModel = {
            cards: []
        };
        formattingSettingsModel.cards
            .filter(({ visible = true }) => visible)
            .forEach((card) => {
            var _a;
            let formattingCard = {
                displayName: (this.localizationManager && card.displayNameKey) ? this.localizationManager.getDisplayName(card.displayNameKey) : card.displayName,
                description: (this.localizationManager && card.descriptionKey) ? this.localizationManager.getDisplayName(card.descriptionKey) : card.description,
                groups: [],
                uid: card.name + "-card",
                analyticsPane: card.analyticsPane,
            };
            const objectName = card.name;
            if (card.topLevelSlice) {
                let topLevelToggleSlice = card.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                topLevelToggleSlice.suppressDisplayName = true;
                formattingCard.topLevelToggle = topLevelToggleSlice;
            }
            (_a = card.onPreProcess) === null || _a === void 0 ? void 0 : _a.call(card);
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn;
            const cardGroupInstances = (isSimpleCard ?
                [card].filter(({ visible = true }) => visible) :
                card.groups.filter(({ visible = true }) => visible));
            cardGroupInstances
                .forEach((cardGroupInstance) => {
                const groupUid = cardGroupInstance.name + "-group";
                // Build formatting group for each group
                const formattingGroup = {
                    displayName: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.displayNameKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.displayNameKey) : cardGroupInstance.displayName,
                    description: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.descriptionKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.descriptionKey) : cardGroupInstance.description,
                    slices: [],
                    uid: groupUid,
                    collapsible: cardGroupInstance.collapsible,
                    delaySaveSlices: cardGroupInstance.delaySaveSlices,
                    disabled: cardGroupInstance.disabled,
                    disabledReason: cardGroupInstance.disabledReason,
                };
                formattingCard.groups.push(formattingGroup);
                // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
                // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
                // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
                const sliceNames = {};
                // Build formatting container slice for each property
                if (cardGroupInstance.container) {
                    const container = cardGroupInstance.container;
                    const containerUid = groupUid + "-container";
                    const formattingContainer = {
                        displayName: (this.localizationManager && container.displayNameKey)
                            ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                        description: (this.localizationManager && container.descriptionKey)
                            ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                        containerItems: [],
                        uid: containerUid
                    };
                    container.containerItems.forEach((containerItem) => {
                        // Build formatting container item object
                        const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                        const containerItemUid = containerUid + containerIemName;
                        let formattingContainerItem = {
                            displayName: (this.localizationManager && containerItem.displayNameKey)
                                ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                            slices: [],
                            uid: containerItemUid
                        };
                        // Build formatting slices and add them to current formatting container item
                        this.buildFormattingSlices({ slices: containerItem.slices, objectName, sliceNames, formattingSlices: formattingContainerItem.slices });
                        formattingContainer.containerItems.push(formattingContainerItem);
                    });
                    formattingGroup.container = formattingContainer;
                }
                if (cardGroupInstance.slices) {
                    if (cardGroupInstance.topLevelSlice) {
                        let topLevelToggleSlice = cardGroupInstance.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                        topLevelToggleSlice.suppressDisplayName = true;
                        (formattingGroup.displayName == undefined ? formattingCard : formattingGroup).topLevelToggle = topLevelToggleSlice;
                    }
                    // Build formatting slice for each property
                    this.buildFormattingSlices({ slices: cardGroupInstance.slices, objectName, sliceNames, formattingSlices: formattingGroup.slices });
                }
            });
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
            formattingModel.cards.push(formattingCard);
        });
        return formattingModel;
    }
    buildFormattingSlices({ slices, objectName, sliceNames, formattingSlices }) {
        // Filter slices based on their visibility
        slices === null || slices === void 0 ? void 0 : slices.filter(({ visible = true }) => visible).forEach((slice) => {
            let formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                formattingSlices.push(formattingSlice);
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors;
        let cardContainerSlicesDefaultDescriptors = [];
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ?
            [card].filter(({ visible = true }) => visible) :
            card.groups.filter(({ visible = true }) => visible));
        cardGroupInstances.forEach((cardGroupInstance) => {
            var _a, _b;
            cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, cardGroupInstance.slices, sliceNames, cardGroupInstance.topLevelSlice);
            (_b = (_a = cardGroupInstance.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
                cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
            });
            revertToDefaultDescriptors.push(...cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors));
        });
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames, topLevelSlice) {
        let revertToDefaultDescriptors = [];
        if (topLevelSlice) {
            sliceNames[topLevelSlice.name] = true;
            revertToDefaultDescriptors = revertToDefaultDescriptors.concat(topLevelSlice.getRevertToDefaultDescriptor(cardName));
        }
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   z: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kx: () => (/* binding */ Model),
/* harmony export */   St: () => (/* binding */ CompositeCard),
/* harmony export */   Tn: () => (/* binding */ SimpleCard),
/* harmony export */   iB: () => (/* binding */ NumUpDown),
/* harmony export */   jF: () => (/* binding */ ToggleSwitch),
/* harmony export */   ks: () => (/* binding */ TextInput),
/* harmony export */   sk: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports CardGroupEntity, Group, SimpleSlice, AlignmentGroup, Slider, DatePicker, ItemDropdown, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextArea, FontPicker, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class CardGroupEntity extends NamedEntity {
}
class Model {
}
/** CompositeCard is use to populate a card into the formatting pane with multiple groups */
class CompositeCard extends NamedEntity {
}
class Group extends CardGroupEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
/** SimpleCard is use to populate a card into the formatting pane in a single group */
class SimpleCard extends CardGroupEntity {
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .y(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        let newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .D(this, newValue, this.value);
    }
}
class AlignmentGroup extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends NumUpDown {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends TextInput {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it declares 'histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG' on top-level, which conflicts with the current library output.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (visualPlugin)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG = {
    name: 'histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG',
    displayName: 'histogrammeperso',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
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
/* harmony default export */ const visualPlugin = (histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG);

})();

histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map