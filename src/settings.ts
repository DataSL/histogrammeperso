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

"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Bar Color",
        value: { value: "" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Text Size",
        value: 18
    });

    fontFamily = new formattingSettings.TextInput({
        name: "fontFamily",
        displayName: "Font family for values",
        value: "Segoe UI",
        placeholder: "e.g. Segoe UI, Arial"
    });

    fontColor = new formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "Font color for values",
        value: { value: "#ffffff" }
    });

    barRadius = new formattingSettings.NumUpDown({
        name: "barRadius",
        displayName: "Bar Radius",
        value: 30
    });

    barWidth = new formattingSettings.NumUpDown({
        name: "barWidth",
        displayName: "Bar Width",
        value: 60
    });

    barSpacing = new formattingSettings.NumUpDown({
        name: "barSpacing",
        displayName: "Bar Spacing",
        value: 36
    });

    valueDisplayMode = new formattingSettings.NumUpDown({
        name: "valueDisplayMode",
        displayName: "Value display mode (0=%,1=decimal,2=integer)",
        value: 0
    });

    decimalPlaces = new formattingSettings.NumUpDown({
        name: "decimalPlaces",
        displayName: "Decimal places for values",
        value: 2
    });

    name: string = "dataPoint";
    displayName: string = "Data colors";
    slices: Array<FormattingSettingsSlice> = [
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
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Show X axis labels",
        value: true
    });

    title = new formattingSettings.TextInput({
        name: "title",
        displayName: "X axis title",
        value: "",
        placeholder: ""
    });

    labelRotation = new formattingSettings.NumUpDown({
        name: "labelRotation",
        displayName: "Label rotation (deg)",
        value: 0
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "X axis font size",
        value: 14
    });

    fontFamily = new formattingSettings.TextInput({
        name: "fontFamily",
        displayName: "X axis font family",
        value: "Segoe UI",
        placeholder: "e.g. Segoe UI, Arial"
    });

    fontColor = new formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "X axis font color",
        value: { value: "#888888" }
    });

    bottomMargin = new formattingSettings.NumUpDown({
        name: "bottomMargin",
        displayName: "Bottom margin (spacing for X axis)",
        value: 80,
        options: {
            minValue: {
                type: powerbi.visuals.ValidatorType.Min,
                value: 40
            },
            maxValue: {
                type: powerbi.visuals.ValidatorType.Max,
                value: 80
            }
        }
    });

    name: string = "xAxis";
    displayName: string = "X axis";
    slices: Array<FormattingSettingsSlice> = [
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
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard = new DataPointCardSettings();
    xAxisCard = new XAxisCardSettings();

    cards = [this.dataPointCard, this.xAxisCard];
}
