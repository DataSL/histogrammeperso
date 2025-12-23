import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Data Point Formatting Card
 */
declare class DataPointCardSettings extends FormattingSettingsCard {
    fill: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.TextInput;
    fontColor: formattingSettings.ColorPicker;
    barRadius: formattingSettings.NumUpDown;
    barWidth: formattingSettings.NumUpDown;
    barSpacing: formattingSettings.NumUpDown;
    valueDisplayMode: formattingSettings.NumUpDown;
    decimalPlaces: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Layout Formatting Card
 */
declare class LayoutCardSettings extends FormattingSettingsCard {
    showBackground: formattingSettings.ToggleSwitch;
    titleText: formattingSettings.TextInput;
    titleFontFamily: formattingSettings.TextInput;
    titleFontSize: formattingSettings.NumUpDown;
    titleFontBold: formattingSettings.ToggleSwitch;
    titleFontColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * X Axis Formatting Card
 */
declare class XAxisCardSettings extends FormattingSettingsCard {
    show: formattingSettings.ToggleSwitch;
    title: formattingSettings.TextInput;
    labelRotation: formattingSettings.NumUpDown;
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.TextInput;
    fontColor: formattingSettings.ColorPicker;
    bottomMargin: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
* visual settings model class
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard: DataPointCardSettings;
    xAxisCard: XAxisCardSettings;
    layoutCard: LayoutCardSettings;
    cards: (DataPointCardSettings | XAxisCardSettings | LayoutCardSettings)[];
}
export {};
