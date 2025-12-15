var histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentGroup: () => (/* binding */ AlignmentGroup),
/* harmony export */   AutoDropdown: () => (/* binding */ AutoDropdown),
/* harmony export */   AutoFlagsSelection: () => (/* binding */ AutoFlagsSelection),
/* harmony export */   CardGroupEntity: () => (/* binding */ CardGroupEntity),
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker),
/* harmony export */   CompositeCard: () => (/* binding */ CompositeCard),
/* harmony export */   CompositeSlice: () => (/* binding */ CompositeSlice),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   ContainerItem: () => (/* binding */ ContainerItem),
/* harmony export */   DatePicker: () => (/* binding */ DatePicker),
/* harmony export */   DurationPicker: () => (/* binding */ DurationPicker),
/* harmony export */   ErrorRangeControl: () => (/* binding */ ErrorRangeControl),
/* harmony export */   FieldPicker: () => (/* binding */ FieldPicker),
/* harmony export */   FontControl: () => (/* binding */ FontControl),
/* harmony export */   FontPicker: () => (/* binding */ FontPicker),
/* harmony export */   GradientBar: () => (/* binding */ GradientBar),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   ImageUpload: () => (/* binding */ ImageUpload),
/* harmony export */   ItemDropdown: () => (/* binding */ ItemDropdown),
/* harmony export */   ItemFlagsSelection: () => (/* binding */ ItemFlagsSelection),
/* harmony export */   ListEditor: () => (/* binding */ ListEditor),
/* harmony export */   MarginPadding: () => (/* binding */ MarginPadding),
/* harmony export */   Model: () => (/* binding */ Model),
/* harmony export */   NumUpDown: () => (/* binding */ NumUpDown),
/* harmony export */   ReadOnlyText: () => (/* binding */ ReadOnlyText),
/* harmony export */   ShapeMapSelector: () => (/* binding */ ShapeMapSelector),
/* harmony export */   SimpleCard: () => (/* binding */ SimpleCard),
/* harmony export */   SimpleSlice: () => (/* binding */ SimpleSlice),
/* harmony export */   Slider: () => (/* binding */ Slider),
/* harmony export */   TextArea: () => (/* binding */ TextArea),
/* harmony export */   TextInput: () => (/* binding */ TextInput),
/* harmony export */   ToggleSwitch: () => (/* binding */ ToggleSwitch)
/* harmony export */ });
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/FormattingSettingsUtils */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js");
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
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getDescriptor(objectName, this),
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
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getPropertyValue(this, newValue, this.value);
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
class ContainerItem extends NamedEntity {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* binding */ FormattingSettingsService),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");

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
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ? [card] : card.groups);
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
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard;
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
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ?
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

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   formattingSettings: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingSettingsService */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDescriptor: () => (/* binding */ getDescriptor),
/* harmony export */   getPropertyValue: () => (/* binding */ getPropertyValue)
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

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualFormattingSettingsModel: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! powerbi-visuals-api */ "powerbi-visuals-api");
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_1__);
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


 // Import nécessaire pour ValidatorType
var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.SimpleCard;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Model;
/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Bar Color",
        value: { value: "" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Text Size",
        value: 18
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "fontFamily",
        displayName: "Font family for values",
        value: "Segoe UI",
        placeholder: "e.g. Segoe UI, Arial"
    });
    fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "Font color for values",
        value: { value: "#ffffff" }
    });
    barRadius = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "barRadius",
        displayName: "Bar Radius",
        value: 30
    });
    barWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "barWidth",
        displayName: "Bar Width",
        value: 60
    });
    barSpacing = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "barSpacing",
        displayName: "Bar Spacing",
        value: 36
    });
    valueDisplayMode = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "valueDisplayMode",
        displayName: "Value display mode (0=%,1=decimal,2=integer)",
        value: 0
    });
    decimalPlaces = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
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
 * Layout Formatting Card
 */
class LayoutCardSettings extends FormattingSettingsCard {
    showBackground = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "showBackground",
        displayName: "Afficher fond par défaut",
        value: true
    });
    name = "layout";
    displayName = "Mise en page";
    slices = [
        this.showBackground
    ];
}
/**
 * X Axis Formatting Card
 */
class XAxisCardSettings extends FormattingSettingsCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Show X axis labels",
        value: true
    });
    title = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "title",
        displayName: "X axis title",
        value: "",
        placeholder: ""
    });
    labelRotation = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "labelRotation",
        displayName: "Label rotation (deg)",
        value: 0
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "X axis font size",
        value: 14
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "fontFamily",
        displayName: "X axis font family",
        value: "Segoe UI",
        placeholder: "e.g. Segoe UI, Arial"
    });
    fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "fontColor",
        displayName: "X axis font color",
        value: { value: "#888888" }
    });
    bottomMargin = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
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
    layoutCard = new LayoutCardSettings(); // AJOUTER CECI
    cards = [this.dataPointCard, this.xAxisCard, this.layoutCard]; // AJOUTER CECI
}


/***/ }),

/***/ "./src/visual.ts":
/*!***********************!*\
  !*** ./src/visual.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Visual: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var _style_visual_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../style/visual.less */ "./style/visual.less");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
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
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.FormattingSettingsService();
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
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_2__.VisualFormattingSettingsModel, options.dataViews && options.dataViews[0]);
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
            category: cat.toString(), // Convertir en string pour supporter tous types
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
        // MODIFIER LA RÉCUPÉRATION DU PARAMÈTRE
        let showBackground = true;
        // Vérifier d'abord via formattingSettings (nouvelle carte layoutCard)
        if (this.formattingSettings && this.formattingSettings.layoutCard && this.formattingSettings.layoutCard.showBackground) {
            showBackground = this.formattingSettings.layoutCard.showBackground.value;
        }
        // Fallback sur objects (pour compatibilité ou si formattingSettings échoue)
        else if (objects && objects["layout"] && typeof objects["layout"]["showBackground"] === "boolean") {
            showBackground = objects["layout"]["showBackground"];
        }
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
        // Appliquer ou retirer l'arrière-plan dynamiquement
        if (showBackground) {
            this.svg.style.background = "#f7fbff";
        }
        else {
            this.svg.style.background = "transparent";
        }
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
            // Gestion du menu contextuel (clic droit)
            barGroup.addEventListener("contextmenu", (event) => {
                event.preventDefault();
                this.selectionManager.showContextMenu(selectionIds[i], {
                    x: event.clientX,
                    y: event.clientY
                });
            });
            // background rounded rect
            const barNon = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            barNon.setAttribute("x", x.toString());
            barNon.setAttribute("y", (baseY - maxBarHeight).toString());
            barNon.setAttribute("width", barWidth.toString());
            barNon.setAttribute("height", maxBarHeight.toString());
            barNon.setAttribute("rx", effectiveRx.toString());
            barNon.setAttribute("fill", colorNon);
            barGroup.appendChild(barNon);
            if (percentValue < 35 && visibleHeight > 0) {
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

/***/ "./style/visual.less":
/*!***************************!*\
  !*** ./style/visual.less ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "powerbi-visuals-api":
/*!***********************!*\
  !*** external "null" ***!
  \***********************/
/***/ ((module) => {

module.exports = null;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./.tmp/precompile/visualPlugin.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/visual */ "./src/visual.ts");

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG = {
    name: 'histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG',
    displayName: 'histogrammeperso',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual(options);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG);

})();

histogrammeperso617D19C842BC4DB48BE9AA56788C1821_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MjFfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcyIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL3NyYy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzPzE0YjAiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHL2V4dGVybmFsIHZhciBcIm51bGxcIiIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHLy4vLnRtcC9wcmVjb21waWxlL3Zpc3VhbFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBvd2VyYmkgdXRpbHMgY29tcG9uZW50cyBjbGFzc2VzIGZvciBjdXN0b20gdmlzdWFsIGZvcm1hdHRpbmcgcGFuZSBvYmplY3RzXG4gKlxuICovXG5pbXBvcnQgKiBhcyBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIgZnJvbSBcIi4vdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHNcIjtcbmNsYXNzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBDYXJkR3JvdXBFbnRpdHkgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgTW9kZWwge1xufVxuLyoqIENvbXBvc2l0ZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgd2l0aCBtdWx0aXBsZSBncm91cHMgKi9cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVDYXJkIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbi8qKiBTaW1wbGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIGluIGEgc2luZ2xlIGdyb3VwICovXG5leHBvcnQgY2xhc3MgU2ltcGxlQ2FyZCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgU2ltcGxlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEaXNwbGF5TmFtZSA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGVzY3JpcHRpb24gPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBzbGljZURpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNsaWNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHRoaXMpLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogdGhpcy5uYW1lXG4gICAgICAgICAgICB9XTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSAoX2EgPSBkYXRhVmlld09iamVjdHMgPT09IG51bGwgfHwgZGF0YVZpZXdPYmplY3RzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlld09iamVjdHNbb2JqZWN0TmFtZV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVt0aGlzLm5hbWVdO1xuICAgICAgICB0aGlzLnZhbHVlID0gRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldFByb3BlcnR5VmFsdWUodGhpcywgbmV3VmFsdWUsIHRoaXMudmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBbGlnbm1lbnRHcm91cCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJBbGlnbm1lbnRHcm91cFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5BbGlnbm1lbnRHcm91cCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1vZGU6IHRoaXMubW9kZSwgc3VwcG9ydHNOb1NlbGVjdGlvbjogdGhpcy5zdXBwb3J0c05vU2VsZWN0aW9uIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUb2dnbGVTd2l0Y2ggZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVG9nZ2xlU3dpdGNoXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRvZ2dsZVN3aXRjaCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29sb3JQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQ29sb3JQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQ29sb3JQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBkZWZhdWx0Q29sb3I6IHRoaXMuZGVmYXVsdENvbG9yLCBpc05vRmlsbEl0ZW1TdXBwb3J0ZWQ6IHRoaXMuaXNOb0ZpbGxJdGVtU3VwcG9ydGVkIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOdW1VcERvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTnVtVXBEb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk51bVVwRG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG9wdGlvbnM6IHRoaXMub3B0aW9ucyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgTnVtVXBEb3duIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTbGlkZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2xpZGVyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRhdGVQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRGF0ZVBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLnBsYWNlaG9sZGVyS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5wbGFjZWhvbGRlcktleSkgOiB0aGlzLnBsYWNlaG9sZGVyLCB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtZXJnZVZhbHVlczogdGhpcy5tZXJnZVZhbHVlcywgZmlsdGVyVmFsdWVzOiB0aGlzLmZpbHRlclZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRHVyYXRpb25QaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHVyYXRpb25QaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHVyYXRpb25QaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVycm9yUmFuZ2VDb250cm9sIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkVycm9yUmFuZ2VDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkVycm9yUmFuZ2VDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGaWVsZFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGaWVsZFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GaWVsZFBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycywgYWxsb3dNdWx0aXBsZVZhbHVlczogdGhpcy5hbGxvd011bHRpcGxlVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0ZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dElucHV0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRJbnB1dCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUZXh0QXJlYSBleHRlbmRzIFRleHRJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiVGV4dEFyZWFcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dEFyZWEgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udFBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250UGlja2VyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcmFkaWVudEJhciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJHcmFkaWVudEJhclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5HcmFkaWVudEJhciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiSW1hZ2VVcGxvYWRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuSW1hZ2VVcGxvYWQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIExpc3RFZGl0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTGlzdEVkaXRvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5MaXN0RWRpdG9yICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWFkT25seVRleHQgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiUmVhZE9ubHlUZXh0XCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlJlYWRPbmx5VGV4dCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2hhcGVNYXBTZWxlY3RvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJTaGFwZU1hcFNlbGVjdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNoYXBlTWFwU2VsZWN0b3IgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3I6IHRoaXMuaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnREaXNwbGF5TmFtZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1aWQ6IG9iamVjdE5hbWUgKyAnLScgKyBwcm9wZXJ0eU5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERpc3BsYXlOYW1lKSwgeyBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udHJvbFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogdGhpcy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250Q29udHJvbCBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250Q29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Gb250Q29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5mb250RmFtaWx5LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm9sZDogKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGl0YWxpYzogKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdW5kZXJsaW5lOiAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRGYW1pbHkuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmZvbnRTaXplLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm9sZCA/IHRoaXMuYm9sZC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuaXRhbGljID8gdGhpcy5pdGFsaWMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnVuZGVybGluZSA/IHRoaXMudW5kZXJsaW5lLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHkuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmZvbnRTaXplLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9hID0gdGhpcy5ib2xkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1hcmdpblBhZGRpbmcgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiTWFyZ2luUGFkZGluZ1wiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5NYXJnaW5QYWRkaW5nICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20uZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVmdC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMucmlnaHQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy50b3AuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib3R0b20uZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGVmdC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMucmlnaHQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnRvcC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuYm90dG9tLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckl0ZW0gZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzLm1hcCIsImltcG9ydCB7IENvbXBvc2l0ZUNhcmQsIFNpbXBsZUNhcmQgfSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgPSBsb2NhbGl6YXRpb25NYW5hZ2VyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBmcm9tIG1ldGFkYXRhIGRhdGFWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVZpZXdzIG1ldGFkYXRhIGRhdGFWaWV3IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsXG4gICAgICovXG4gICAgcG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCh0eXBlQ2xhc3MsIGRhdGFWaWV3KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGxldCBkZWZhdWx0U2V0dGluZ3MgPSBuZXcgdHlwZUNsYXNzKCk7XG4gICAgICAgIGxldCBkYXRhVmlld09iamVjdHMgPSAoX2EgPSBkYXRhVmlldyA9PT0gbnVsbCB8fCBkYXRhVmlldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXcubWV0YWRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vYmplY3RzO1xuICAgICAgICBpZiAoZGF0YVZpZXdPYmplY3RzKSB7XG4gICAgICAgICAgICAvLyBsb29wIG92ZXIgZWFjaCBmb3JtYXR0aW5nIHByb3BlcnR5IGFuZCBzZXQgaXRzIG5ldyB2YWx1ZSBpZiBleGlzdHNcbiAgICAgICAgICAgIChfYiA9IGRlZmF1bHRTZXR0aW5ncy5jYXJkcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkKVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgPyBbY2FyZF0gOiBjYXJkLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnQgdG9wIGxldmVsIHRvZ2dsZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgKF9kID0gKF9jID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gY29udGFpbmVySXRlbSA9PT0gbnVsbCB8fCBjb250YWluZXJJdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250YWluZXJJdGVtLnNsaWNlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgZm9ybWF0dGluZyBtb2RlbCBieSBwYXJzaW5nIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBwb3dlcmJpIHZpc3VhbCBmb3JtYXR0aW5nIG1vZGVsXG4gICAgICovXG4gICAgYnVpbGRGb3JtYXR0aW5nTW9kZWwoZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwpIHtcbiAgICAgICAgbGV0IGZvcm1hdHRpbmdNb2RlbCA9IHtcbiAgICAgICAgICAgIGNhcmRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbC5jYXJkc1xuICAgICAgICAgICAgLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKVxuICAgICAgICAgICAgLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ2FyZCA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRpc3BsYXlOYW1lS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmQuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kZXNjcmlwdGlvbktleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kZXNjcmlwdGlvbktleSkgOiBjYXJkLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgdWlkOiBjYXJkLm5hbWUgKyBcIi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgYW5hbHl0aWNzUGFuZTogY2FyZC5hbmFseXRpY3NQYW5lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBjYXJkLm5hbWU7XG4gICAgICAgICAgICBpZiAoY2FyZC50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBjYXJkLm9uUHJlUHJvY2VzcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoY2FyZCk7XG4gICAgICAgICAgICBjb25zdCBpc1NpbXBsZUNhcmQgPSBjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZDtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChpc1NpbXBsZUNhcmQgP1xuICAgICAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXNcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFVpZCA9IGNhcmRHcm91cEluc3RhbmNlLm5hbWUgKyBcIi1ncm91cFwiO1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgZ3JvdXAgZm9yIGVhY2ggZ3JvdXBcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nR3JvdXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpc1NpbXBsZUNhcmQgPyB1bmRlZmluZWQgOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpIDogY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHVpZDogZ3JvdXBVaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBjYXJkR3JvdXBJbnN0YW5jZS5jb2xsYXBzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTYXZlU2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5kZWxheVNhdmVTbGljZXMsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRSZWFzb246IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkUmVhc29uLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQuZ3JvdXBzLnB1c2goZm9ybWF0dGluZ0dyb3VwKTtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIGZvcm1hdHRpbmcgbW9kZWwgYWRkcyBkYXRhIHBvaW50cyBvciB0b3AgY2F0ZWdvcmllcyAoTGlrZSB3aGVuIHlvdSBtb2RpZnkgc3BlY2lmaWMgdmlzdWFsIGNhdGVnb3J5IGNvbG9yKS5cbiAgICAgICAgICAgICAgICAvLyB0aGVzZSBjYXRlZ29yaWVzIHVzZSBzYW1lIG9iamVjdCBuYW1lIGFuZCBwcm9wZXJ0eSBuYW1lIGZyb20gY2FwYWJpbGl0aWVzIGFuZCB0aGUgZ2VuZXJhdGVkIHVpZCB3aWxsIGJlIHRoZSBzYW1lIGZvciB0aGVzZSBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIC8vIFNvbHV0aW9uID0+IFNhdmUgc2xpY2UgbmFtZXMgdG8gbW9kaWZ5IGVhY2ggc2xpY2UgdWlkIHRvIGJlIHVuaXF1ZSBieSBhZGRpbmcgY291bnRlciB2YWx1ZSB0byB0aGUgbmV3IHNsaWNlIHVpZFxuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJVaWQgPSBncm91cFVpZCArIFwiLWNvbnRhaW5lclwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0aW5nQ29udGFpbmVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KSA6IGNvbnRhaW5lci5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVyVWlkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jb250YWluZXJJdGVtcy5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySWVtTmFtZSA9IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgPyBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5IDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckl0ZW1VaWQgPSBjb250YWluZXJVaWQgKyBjb250YWluZXJJZW1OYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdDb250YWluZXJJdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogY29udGFpbmVySXRlbVVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2VzIGFuZCBhZGQgdGhlbSB0byBjdXJyZW50IGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjb250YWluZXJJdGVtLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0uc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NvbnRhaW5lci5jb250YWluZXJJdGVtcy5wdXNoKGZvcm1hdHRpbmdDb250YWluZXJJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdHcm91cC5jb250YWluZXIgPSBmb3JtYXR0aW5nQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZvcm1hdHRpbmdHcm91cC5kaXNwbGF5TmFtZSA9PSB1bmRlZmluZWQgPyBmb3JtYXR0aW5nQ2FyZCA6IGZvcm1hdHRpbmdHcm91cCkudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlczogZm9ybWF0dGluZ0dyb3VwLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpO1xuICAgICAgICAgICAgZm9ybWF0dGluZ01vZGVsLmNhcmRzLnB1c2goZm9ybWF0dGluZ0NhcmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRpbmdNb2RlbDtcbiAgICB9XG4gICAgYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzIH0pIHtcbiAgICAgICAgLy8gRmlsdGVyIHNsaWNlcyBiYXNlZCBvbiB0aGVpciB2aXNpYmlsaXR5XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nU2xpY2UgPSBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAoZm9ybWF0dGluZ1NsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGZvcm1hdHRpbmcgc2xpY2UgdWlkIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChzbGljZU5hbWVzW3NsaWNlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdKys7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZS51aWQgPSBgJHtmb3JtYXR0aW5nU2xpY2UudWlkfS0ke3NsaWNlTmFtZXNbc2xpY2UubmFtZV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlcy5wdXNoKGZvcm1hdHRpbmdTbGljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBQcm9jZWVkZWQgc2xpY2UgbmFtZXMgYXJlIHNhdmVkIHRvIHByZXZlbnQgZHVwbGljYXRlZCBkZWZhdWx0IGRlc2NyaXB0b3JzIGluIGNhc2Ugb2YgdXNpbmcgXG4gICAgICAgIC8vIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyAmIHNlbGVjdG9ycywgc2luY2UgdGhleSBoYXZlIHRoZSBzYW1lIGRlc2NyaXB0b3Igb2JqZWN0TmFtZSBhbmQgcHJvcGVydHlOYW1lXG4gICAgICAgIGNvbnN0IHNsaWNlTmFtZXMgPSB7fTtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGxldCBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgICAgICBsZXQgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQgJiYgY2FyZC50b3BMZXZlbFNsaWNlKVxuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi4oX2EgPSBjYXJkLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSkpO1xuICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQgP1xuICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBjYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gdGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBzbGljZU5hbWVzLCBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlKTtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRhaW5lckl0ZW1zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjb250YWluZXJJdGVtLnNsaWNlcywgc2xpY2VOYW1lcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLmNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG4gICAgZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSwgc2xpY2VzLCBzbGljZU5hbWVzLCB0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBpZiAodG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgc2xpY2VOYW1lc1t0b3BMZXZlbFNsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRvcExldmVsU2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHNsaWNlcyA9PT0gbnVsbCB8fCBzbGljZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlcy5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNsaWNlICYmICFzbGljZU5hbWVzW3NsaWNlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoc2xpY2UuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzLm1hcCIsImltcG9ydCAqIGFzIGZvcm1hdHRpbmdTZXR0aW5ncyBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzXCI7XG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSBmcm9tIFwiLi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlXCI7XG5leHBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MsIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQnVpbGQgYW5kIHJldHVybiBmb3JtYXR0aW5nIGRlc2NyaXB0b3IgZm9yIHNpbXBsZSBzbGljZVxuICpcbiAqIEBwYXJhbSBvYmplY3ROYW1lIE9iamVjdCBuYW1lIGZyb20gY2FwYWJpbGl0aWVzXG4gKiBAcGFyYW0gc2xpY2UgZm9ybWF0dGluZyBzaW1wbGUgc2xpY2VcbiAqIEByZXR1cm5zIHNpbXBsZSBzbGljZSBmb3JtYXR0aW5nIGRlc2NyaXB0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgc2xpY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvYmplY3ROYW1lOiBvYmplY3ROYW1lLFxuICAgICAgICBwcm9wZXJ0eU5hbWU6IHNsaWNlLm5hbWUsXG4gICAgICAgIHNlbGVjdG9yOiBzbGljZS5zZWxlY3RvcixcbiAgICAgICAgYWx0Q29uc3RhbnRWYWx1ZVNlbGVjdG9yOiBzbGljZS5hbHRDb25zdGFudFNlbGVjdG9yLFxuICAgICAgICBpbnN0YW5jZUtpbmQ6IHNsaWNlLmluc3RhbmNlS2luZFxuICAgIH07XG59XG4vKipcbiAqIEdldCBwcm9wZXJ0eSB2YWx1ZSBmcm9tIGRhdGF2aWV3IG9iamVjdHMgaWYgZXhpc3RzXG4gKiBFbHNlIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZSBmcm9tIGZvcm1hdHRpbmcgc2V0dGluZ3Mgb2JqZWN0XG4gKlxuICogQHBhcmFtIHZhbHVlIGRhdGF2aWV3IG9iamVjdCB2YWx1ZVxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBmb3JtYXR0aW5nIHNldHRpbmdzIGRlZmF1bHQgdmFsdWVcbiAqIEByZXR1cm5zIGZvcm1hdHRpbmcgcHJvcGVydHkgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5VmFsdWUoc2xpY2UsIHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICF2YWx1ZS5zb2xpZCkpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLnNvbGlkKSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWUuc29saWQuY29sb3IgfTtcbiAgICB9XG4gICAgaWYgKHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5pdGVtcykge1xuICAgICAgICBsZXQgaXRlbXNBcnJheSA9IHNsaWNlLml0ZW1zO1xuICAgICAgICByZXR1cm4gaXRlbXNBcnJheS5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzLm1hcCIsIi8qXHJcbiAqICBQb3dlciBCSSBWaXN1YWxpemF0aW9uc1xyXG4gKlxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb25cclxuICogIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBNSVQgTGljZW5zZVxyXG4gKlxyXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcclxuICogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4gKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogXHJcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gKiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gKiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuICogIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqICBUSEUgU09GVFdBUkUuXHJcbiAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiOyAvLyBJbXBvcnQgbsOpY2Vzc2FpcmUgcG91ciBWYWxpZGF0b3JUeXBlXHJcblxyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TaW1wbGVDYXJkO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2xpY2UgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2U7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5Nb2RlbDtcclxuXHJcbi8qKlxyXG4gKiBEYXRhIFBvaW50IEZvcm1hdHRpbmcgQ2FyZFxyXG4gKi9cclxuY2xhc3MgRGF0YVBvaW50Q2FyZFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBmaWxsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmaWxsXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFyIENvbG9yXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlRleHQgU2l6ZVwiLFxyXG4gICAgICAgIHZhbHVlOiAxOFxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJGb250IGZhbWlseSBmb3IgdmFsdWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiU2Vnb2UgVUlcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJlLmcuIFNlZ29lIFVJLCBBcmlhbFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgY29sb3IgZm9yIHZhbHVlc1wiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiNmZmZmZmZcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBiYXJSYWRpdXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJiYXJSYWRpdXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYXIgUmFkaXVzXCIsXHJcbiAgICAgICAgdmFsdWU6IDMwXHJcbiAgICB9KTtcclxuXHJcbiAgICBiYXJXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJhcldpZHRoXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFyIFdpZHRoXCIsXHJcbiAgICAgICAgdmFsdWU6IDYwXHJcbiAgICB9KTtcclxuXHJcbiAgICBiYXJTcGFjaW5nID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYmFyU3BhY2luZ1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhciBTcGFjaW5nXCIsXHJcbiAgICAgICAgdmFsdWU6IDM2XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YWx1ZURpc3BsYXlNb2RlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwidmFsdWVEaXNwbGF5TW9kZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlZhbHVlIGRpc3BsYXkgbW9kZSAoMD0lLDE9ZGVjaW1hbCwyPWludGVnZXIpXCIsXHJcbiAgICAgICAgdmFsdWU6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIGRlY2ltYWxQbGFjZXMgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJkZWNpbWFsUGxhY2VzXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRGVjaW1hbCBwbGFjZXMgZm9yIHZhbHVlc1wiLFxyXG4gICAgICAgIHZhbHVlOiAyXHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImRhdGFQb2ludFwiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiRGF0YSBjb2xvcnNcIjtcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuZmlsbCxcclxuICAgICAgICB0aGlzLmZvbnRTaXplLFxyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSxcclxuICAgICAgICB0aGlzLmZvbnRDb2xvcixcclxuICAgICAgICB0aGlzLmJhclJhZGl1cyxcclxuICAgICAgICB0aGlzLmJhcldpZHRoLFxyXG4gICAgICAgIHRoaXMuYmFyU3BhY2luZyxcclxuICAgICAgICB0aGlzLnZhbHVlRGlzcGxheU1vZGUsXHJcbiAgICAgICAgdGhpcy5kZWNpbWFsUGxhY2VzXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogTGF5b3V0IEZvcm1hdHRpbmcgQ2FyZFxyXG4gKi9cclxuY2xhc3MgTGF5b3V0Q2FyZFNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBzaG93QmFja2dyb3VuZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgZm9uZCBwYXIgZMOpZmF1dFwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcImxheW91dFwiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiTWlzZSBlbiBwYWdlXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3dCYWNrZ3JvdW5kXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICogWCBBeGlzIEZvcm1hdHRpbmcgQ2FyZFxyXG4gKi9cclxuY2xhc3MgWEF4aXNDYXJkU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU2hvdyBYIGF4aXMgbGFiZWxzXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJYIGF4aXMgdGl0bGVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgbGFiZWxSb3RhdGlvbiA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImxhYmVsUm90YXRpb25cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJMYWJlbCByb3RhdGlvbiAoZGVnKVwiLFxyXG4gICAgICAgIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiWCBheGlzIGZvbnQgc2l6ZVwiLFxyXG4gICAgICAgIHZhbHVlOiAxNFxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJYIGF4aXMgZm9udCBmYW1pbHlcIixcclxuICAgICAgICB2YWx1ZTogXCJTZWdvZSBVSVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcImUuZy4gU2Vnb2UgVUksIEFyaWFsXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiWCBheGlzIGZvbnQgY29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjODg4ODg4XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYm90dG9tTWFyZ2luID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYm90dG9tTWFyZ2luXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQm90dG9tIG1hcmdpbiAoc3BhY2luZyBmb3IgWCBheGlzKVwiLFxyXG4gICAgICAgIHZhbHVlOiA4MCxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG1pblZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBwb3dlcmJpLnZpc3VhbHMuVmFsaWRhdG9yVHlwZS5NaW4sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogNDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWF4VmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHBvd2VyYmkudmlzdWFscy5WYWxpZGF0b3JUeXBlLk1heCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiA4MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ4QXhpc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiWCBheGlzXCI7XHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csXHJcbiAgICAgICAgdGhpcy50aXRsZSxcclxuICAgICAgICB0aGlzLmxhYmVsUm90YXRpb24sXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSxcclxuICAgICAgICB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy5mb250Q29sb3IsXHJcbiAgICAgICAgdGhpcy5ib3R0b21NYXJnaW5cclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4qIHZpc3VhbCBzZXR0aW5ncyBtb2RlbCBjbGFzc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBkYXRhUG9pbnRDYXJkID0gbmV3IERhdGFQb2ludENhcmRTZXR0aW5ncygpO1xyXG4gICAgeEF4aXNDYXJkID0gbmV3IFhBeGlzQ2FyZFNldHRpbmdzKCk7XHJcbiAgICBsYXlvdXRDYXJkID0gbmV3IExheW91dENhcmRTZXR0aW5ncygpOyAvLyBBSk9VVEVSIENFQ0lcclxuXHJcbiAgICBjYXJkcyA9IFt0aGlzLmRhdGFQb2ludENhcmQsIHRoaXMueEF4aXNDYXJkLCB0aGlzLmxheW91dENhcmRdOyAvLyBBSk9VVEVSIENFQ0lcclxufVxyXG4iLCIvKlxyXG4qICBQb3dlciBCSSBWaXN1YWwgQ0xJXHJcbipcclxuKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb25cclxuKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKiAgTUlUIExpY2Vuc2VcclxuKlxyXG4qICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiogIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiXCJTb2Z0d2FyZVwiXCIpLCB0byBkZWFsXHJcbiogIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4qICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuKiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuKlxyXG4qICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4qICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuKlxyXG4qICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgKkFTIElTKiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4qICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuKiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiogIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuKiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4qICBUSEUgU09GVFdBUkUuXHJcbiogXHJcbiovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IHsgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCBcIi4vLi4vc3R5bGUvdmlzdWFsLmxlc3NcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBJU2VsZWN0aW9uTWFuYWdlciA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JU2VsZWN0aW9uTWFuYWdlcjtcclxuaW1wb3J0IElTZWxlY3Rpb25JZCA9IHBvd2VyYmkudmlzdWFscy5JU2VsZWN0aW9uSWQ7XHJcbmltcG9ydCB7IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWwgaW1wbGVtZW50cyBJVmlzdWFsIHtcclxuICAgIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzOiBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuICAgIHByaXZhdGUgc3ZnOiBTVkdTVkdFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25NYW5hZ2VyOiBJU2VsZWN0aW9uTWFuYWdlcjtcclxuICAgIHByaXZhdGUgaG9zdDogcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsSG9zdDtcclxuICAgIHByaXZhdGUgZGF0YVBvaW50czogQXJyYXk8eyBjYXRlZ29yeTogc3RyaW5nOyB2YWx1ZTogbnVtYmVyOyBzZWxlY3Rpb25JZDogSVNlbGVjdGlvbklkIH0+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSA9IG5ldyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gb3B0aW9ucy5ob3N0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlciA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25NYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciBzY3JvbGxhYmxlIHBvdXIgbGUgU1ZHXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7IC8vIHBlcm1ldCBzY3JvbGwgaG9yaXpvbnRhbCBldCB2ZXJ0aWNhbFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKTtcclxuICAgICAgICB0aGlzLnN2Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAvLyDDqXZpdGUgZ2FwcyBkYW5zIGNlcnRhaW5zIG5hdmlnYXRldXJzXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5zdmcpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFQb2ludHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG9wdGlvbnM6IFZpc3VhbFVwZGF0ZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5wb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLCBvcHRpb25zLmRhdGFWaWV3cyAmJiBvcHRpb25zLmRhdGFWaWV3c1swXSk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIHN2Z1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnN2Zy5maXJzdENoaWxkKSB0aGlzLnN2Zy5yZW1vdmVDaGlsZCh0aGlzLnN2Zy5maXJzdENoaWxkKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLnZpZXdwb3J0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMudmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBGaXhlciBsYSB6b25lIHZpc2libGUgKGNvbnRhaW5lcikgw6AgbGEgdGFpbGxlIGR1IHZpZXdwb3J0IFBvd2VyIEJJXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlcyBkb25uw6llc1xyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3MgJiYgb3B0aW9ucy5kYXRhVmlld3NbMF07XHJcbiAgICAgICAgaWYgKCFkYXRhVmlldyB8fCAhZGF0YVZpZXcuY2F0ZWdvcmljYWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLmNhdGVnb3JpZXNbMF07XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlWYWx1ZXMgPSBjYXRlZ29yaWVzLnZhbHVlcyBhcyAoc3RyaW5nIHwgbnVtYmVyKVtdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGRhdGFWaWV3LmNhdGVnb3JpY2FsLnZhbHVlc1swXS52YWx1ZXMgYXMgbnVtYmVyW107XHJcblxyXG4gICAgICAgIC8vIENyw6lhdGlvbiBkZXMgSVNlbGVjdGlvbklkIHBvdXIgY2hhcXVlIGNhdMOpZ29yaWUgLSBzdG9ja2VyIGRhbnMgdGhpcy5kYXRhUG9pbnRzXHJcbiAgICAgICAgdGhpcy5kYXRhUG9pbnRzID0gY2F0ZWdvcnlWYWx1ZXMubWFwKChjYXQsIGkpID0+ICh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBjYXQudG9TdHJpbmcoKSwgLy8gQ29udmVydGlyIGVuIHN0cmluZyBwb3VyIHN1cHBvcnRlciB0b3VzIHR5cGVzXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXNbaV0sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbklkOiB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgaSlcclxuICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAvLyBEw6l0ZWN0ZXIgc2kgdG91dGVzIGxlcyBjYXTDqWdvcmllcyBzb250IGRlcyBhbm7DqWVzIChub21icmVzIMOgIDQgY2hpZmZyZXMpXHJcbiAgICAgICAgY29uc3QgYXJlWWVhcnMgPSB0aGlzLmRhdGFQb2ludHMuZXZlcnkoZHAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChkcC5jYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIHJldHVybiAhaXNOYU4obnVtKSAmJiBudW0gPj0gMTkwMCAmJiBudW0gPD0gMjEwMCAmJiBkcC5jYXRlZ29yeS5sZW5ndGggPT09IDQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRyaWVyIHBhciBhbm7DqWUgc2kgZMOpdGVjdMOpLCBzaW5vbiBnYXJkZXIgbCdvcmRyZSBkJ29yaWdpbmVcclxuICAgICAgICBpZiAoYXJlWWVhcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhUG9pbnRzLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEuY2F0ZWdvcnkpIC0gcGFyc2VJbnQoYi5jYXRlZ29yeSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc29ydGVkQ2F0ZWdvcmllcyA9IHRoaXMuZGF0YVBvaW50cy5tYXAoZCA9PiBkLmNhdGVnb3J5KTtcclxuICAgICAgICBjb25zdCBzb3J0ZWRWYWx1ZXMgPSB0aGlzLmRhdGFQb2ludHMubWFwKGQgPT4gZC52YWx1ZSk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWRzID0gdGhpcy5kYXRhUG9pbnRzLm1hcChkID0+IGQuc2VsZWN0aW9uSWQpO1xyXG5cclxuICAgICAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZXMgcHJvcHJpw6l0w6lzIHBlcnNvbm5hbGlzYWJsZXNcclxuICAgICAgICBjb25zdCBvYmplY3RzID0gZGF0YVZpZXcubWV0YWRhdGEgJiYgZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cztcclxuICAgICAgICBsZXQgZmlsbENvbG9yID0gXCIjMkY2RkU3XCI7XHJcbiAgICAgICAgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tcImRhdGFQb2ludFwiXSAmJiAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiZmlsbFwiXSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvck9iaiA9IChvYmplY3RzW1wiZGF0YVBvaW50XCJdIGFzIGFueSlbXCJmaWxsXCJdO1xyXG4gICAgICAgICAgICBpZiAoY29sb3JPYmouc29saWQgJiYgY29sb3JPYmouc29saWQuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9IGNvbG9yT2JqLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbG9yTm9uID0gbGlnaHRlbkNvbG9yKGZpbGxDb2xvciwgMC42LCAwLjUpO1xyXG5cclxuICAgICAgICBjb25zdCBiYXJSYWRpdXMgPSBvYmplY3RzICYmIG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gJiYgdHlwZW9mIChvYmplY3RzW1wiZGF0YVBvaW50XCJdIGFzIGFueSlbXCJiYXJSYWRpdXNcIl0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgPyAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiYmFyUmFkaXVzXCJdXHJcbiAgICAgICAgICAgIDogMzA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gb2JqZWN0cyAmJiBvYmplY3RzW1wiZGF0YVBvaW50XCJdICYmIHR5cGVvZiAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiZm9udFNpemVcIl0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgPyAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiZm9udFNpemVcIl1cclxuICAgICAgICAgICAgOiAxODtcclxuXHJcbiAgICAgICAgLy8gdmFsZXVyIC8gZm9ybWF0IGRlcyBiYXJyZXMgKG5vdXZlYXV0w6kpXHJcbiAgICAgICAgY29uc3QgZHBPYmo6IGFueSA9IChvYmplY3RzICYmIG9iamVjdHNbXCJkYXRhUG9pbnRcIl0pIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IHZhbHVlRGlzcGxheU1vZGU6IG51bWJlciA9IHR5cGVvZiBkcE9ialtcInZhbHVlRGlzcGxheU1vZGVcIl0gPT09IFwibnVtYmVyXCIgPyBkcE9ialtcInZhbHVlRGlzcGxheU1vZGVcIl0gOiAwOyAvLyAwPSUsMT1kZWNpbWFsLDI9aW50ZWdlclxyXG4gICAgICAgIGNvbnN0IGRlY2ltYWxQbGFjZXM6IG51bWJlciA9IHR5cGVvZiBkcE9ialtcImRlY2ltYWxQbGFjZXNcIl0gPT09IFwibnVtYmVyXCIgPyBNYXRoLm1heCgwLCBkcE9ialtcImRlY2ltYWxQbGFjZXNcIl0pIDogMjtcclxuXHJcbiAgICAgICAgLy8gcG9saWNlIC8gY291bGV1ciAvIHRhaWxsZSBkZXMgdmFsZXVycyBkYW5zIGxlcyBiYXJyZXNcclxuICAgICAgICBjb25zdCBiYXJWYWx1ZUZvbnRTaXplOiBudW1iZXIgPSB0eXBlb2YgZHBPYmpbXCJmb250U2l6ZVwiXSA9PT0gXCJudW1iZXJcIiA/IGRwT2JqW1wiZm9udFNpemVcIl0gOiAxODtcclxuICAgICAgICBjb25zdCBiYXJWYWx1ZUZvbnRGYW1pbHk6IHN0cmluZyA9IHR5cGVvZiBkcE9ialtcImZvbnRGYW1pbHlcIl0gPT09IFwic3RyaW5nXCIgPyBkcE9ialtcImZvbnRGYW1pbHlcIl0gOiBcIlNlZ29lIFVJXCI7XHJcbiAgICAgICAgY29uc3QgYmFyVmFsdWVGb250Q29sb3I6IHN0cmluZyA9IHJlYWRDb2xvcihkcE9ialtcImZvbnRDb2xvclwiXSkgfHwgXCIjZmZmZmZmXCI7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdEJhclZhbHVlKHJhdzogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZURpc3BsYXlNb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gcmF3ICogMTAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYudG9GaXhlZChkZWNpbWFsUGxhY2VzKS5yZXBsYWNlKCcuJywgJywnKSArIFwiJVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlRGlzcGxheU1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYXcudG9GaXhlZChkZWNpbWFsUGxhY2VzKS5yZXBsYWNlKCcuJywgJywnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHJhdykudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gWCBheGlzIG9wdGlvbnNcclxuICAgICAgICBjb25zdCB4QXhpc09iajogYW55ID0gKG9iamVjdHMgJiYgb2JqZWN0c1tcInhBeGlzXCJdKSB8fCB7fTtcclxuICAgICAgICBjb25zdCBzaG93WEF4aXM6IGJvb2xlYW4gPSB0eXBlb2YgeEF4aXNPYmpbXCJzaG93XCJdID09PSBcImJvb2xlYW5cIiA/IHhBeGlzT2JqW1wic2hvd1wiXSA6IHRydWU7XHJcbiAgICAgICAgY29uc3QgeEF4aXNUaXRsZTogc3RyaW5nID0gdHlwZW9mIHhBeGlzT2JqW1widGl0bGVcIl0gPT09IFwic3RyaW5nXCIgPyB4QXhpc09ialtcInRpdGxlXCJdIDogXCJcIjtcclxuICAgICAgICBjb25zdCBsYWJlbFJvdGF0aW9uOiBudW1iZXIgPSB0eXBlb2YgeEF4aXNPYmpbXCJsYWJlbFJvdGF0aW9uXCJdID09PSBcIm51bWJlclwiID8geEF4aXNPYmpbXCJsYWJlbFJvdGF0aW9uXCJdIDogMDtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRTaXplOiBudW1iZXIgPSB0eXBlb2YgeEF4aXNPYmpbXCJmb250U2l6ZVwiXSA9PT0gXCJudW1iZXJcIiA/IHhBeGlzT2JqW1wiZm9udFNpemVcIl0gOiAxNDtcclxuICAgICAgICBjb25zdCB4QXhpc0ZvbnRGYW1pbHk6IHN0cmluZyA9IHR5cGVvZiB4QXhpc09ialtcImZvbnRGYW1pbHlcIl0gPT09IFwic3RyaW5nXCIgPyB4QXhpc09ialtcImZvbnRGYW1pbHlcIl0gOiBcIlNlZ29lIFVJXCI7XHJcbiAgICAgICAgY29uc3QgeEF4aXNGb250Q29sb3I6IHN0cmluZyA9IHJlYWRDb2xvcih4QXhpc09ialtcImZvbnRDb2xvclwiXSkgfHwgXCIjODg4XCI7XHJcbiAgICAgICAgY29uc3QgYm90dG9tTWFyZ2luOiBudW1iZXIgPSB0eXBlb2YgeEF4aXNPYmpbXCJib3R0b21NYXJnaW5cIl0gPT09IFwibnVtYmVyXCIgPyBNYXRoLm1heCg0MCwgeEF4aXNPYmpbXCJib3R0b21NYXJnaW5cIl0pIDogODA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTU9ESUZJRVIgTEEgUsOJQ1VQw4lSQVRJT04gRFUgUEFSQU3DiFRSRVxyXG4gICAgICAgIGxldCBzaG93QmFja2dyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgLy8gVsOpcmlmaWVyIGQnYWJvcmQgdmlhIGZvcm1hdHRpbmdTZXR0aW5ncyAobm91dmVsbGUgY2FydGUgbGF5b3V0Q2FyZClcclxuICAgICAgICBpZiAodGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MgJiYgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGF5b3V0Q2FyZCAmJiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sYXlvdXRDYXJkLnNob3dCYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHNob3dCYWNrZ3JvdW5kID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGF5b3V0Q2FyZC5zaG93QmFja2dyb3VuZC52YWx1ZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC8vIEZhbGxiYWNrIHN1ciBvYmplY3RzIChwb3VyIGNvbXBhdGliaWxpdMOpIG91IHNpIGZvcm1hdHRpbmdTZXR0aW5ncyDDqWNob3VlKVxyXG4gICAgICAgIGVsc2UgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tcImxheW91dFwiXSAmJiB0eXBlb2YgKG9iamVjdHNbXCJsYXlvdXRcIl0gYXMgYW55KVtcInNob3dCYWNrZ3JvdW5kXCJdID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICBzaG93QmFja2dyb3VuZCA9IChvYmplY3RzW1wibGF5b3V0XCJdIGFzIGFueSlbXCJzaG93QmFja2dyb3VuZFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGVyIGJhcldpZHRoIGV0IGVzcGFjZW1lbnQgKHVuZSBzZXVsZSBkw6ljbGFyYXRpb24pXHJcbiAgICAgICAgbGV0IGJhcldpZHRoID0gTWF0aC5taW4oNjAsIE1hdGgubWF4KDEwLCBNYXRoLmZsb29yKHdpZHRoIC8gTWF0aC5tYXgoMSwgc29ydGVkQ2F0ZWdvcmllcy5sZW5ndGgpICogMC42KSkpO1xyXG4gICAgICAgIGlmIChvYmplY3RzICYmIG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gJiYgdHlwZW9mIChvYmplY3RzW1wiZGF0YVBvaW50XCJdIGFzIGFueSlbXCJiYXJXaWR0aFwiXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBiYXJXaWR0aCA9IChvYmplY3RzW1wiZGF0YVBvaW50XCJdIGFzIGFueSlbXCJiYXJXaWR0aFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiYXJTcGFjaW5nID0gTWF0aC5yb3VuZChiYXJXaWR0aCAqIDAuNik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZnMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncyBhcyBhbnk7XHJcbiAgICAgICAgICAgIGlmIChmcyAmJiBmcy5kYXRhUG9pbnRDYXJkICYmIGZzLmRhdGFQb2ludENhcmQuYmFyU3BhY2luZyAmJiB0eXBlb2YgZnMuZGF0YVBvaW50Q2FyZC5iYXJTcGFjaW5nLnZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXJTcGFjaW5nID0gTWF0aC5yb3VuZChmcy5kYXRhUG9pbnRDYXJkLmJhclNwYWNpbmcudmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tcImRhdGFQb2ludFwiXSAmJiB0eXBlb2YgKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImJhclNwYWNpbmdcIl0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGJhclNwYWNpbmcgPSAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiYmFyU3BhY2luZ1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY29uc2VydmF0ZXVyIOKAlCBsYWlzc2VyIGJhclNwYWNpbmcgY2FsY3Vsw6lcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGJvdHRvbU1hcmdpbiByZXN0ZSBlbiBwaXhlbHNcclxuICAgICAgICBjb25zdCBiYXNlWSA9IGhlaWdodCAtIGJvdHRvbU1hcmdpbjtcclxuICAgICAgICBjb25zdCBtYXhCYXJIZWlnaHQgPSBNYXRoLmZsb29yKGJhc2VZICogMC44KTsgLy8gdXRpbGlzZXIgODAlIGRlIGwnZXNwYWNlIGRpc3BvbmlibGUgYXUtZGVzc3VzIGRlIGxhIG1hcmdlXHJcblxyXG4gICAgICAgIC8vIENhbGN1bGVyIHRhaWxsZSBTVkcgbsOpY2Vzc2FpcmUgZXQgYWRhcHRlciBwb3VyIGFjdGl2ZXIgc2Nyb2xsIHNpIGJlc29pblxyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gNDA7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gNDA7XHJcbiAgICAgICAgY29uc3QgdG90YWxOZWVkZWRXaWR0aCA9IHBhZGRpbmdMZWZ0ICsgc29ydGVkQ2F0ZWdvcmllcy5sZW5ndGggKiAoYmFyV2lkdGggKyBiYXJTcGFjaW5nKSAtIGJhclNwYWNpbmcgKyBwYWRkaW5nUmlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSBNYXRoLm1heCh3aWR0aCwgTWF0aC5jZWlsKHRvdGFsTmVlZGVkV2lkdGgpKTtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIE1hdGguY2VpbChtYXhCYXJIZWlnaHQgKyBib3R0b21NYXJnaW4gKyA2MCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBzdmdXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgc3ZnSGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBsaXF1ZXIgb3UgcmV0aXJlciBsJ2FycmnDqHJlLXBsYW4gZHluYW1pcXVlbWVudFxyXG4gICAgICAgIGlmIChzaG93QmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZjdmYmZmXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdmcuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERFVEVDVElPTiBNT0RFIFwiTkFSUk9XXCIgKHBldXQgYWp1c3RlciBzZXVpbClcclxuICAgICAgICBjb25zdCBzbG90V2lkdGggPSBiYXJXaWR0aCArIGJhclNwYWNpbmc7XHJcbiAgICAgICAgY29uc3QgbmFycm93TW9kZSA9IHNsb3RXaWR0aCA8IDcwIHx8IHdpZHRoIDwgNDgwIHx8IHN2Z1dpZHRoID4gd2lkdGg7XHJcblxyXG4gICAgICAgIC8vIFRpdHJlXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRleHRcIik7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwieFwiLCBcIjEwXCIpO1xyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInlcIiwgXCIyMFwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCIyMFwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJmb250LXdlaWdodFwiLCBcImJvbGRcIik7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiMyMjJcIik7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkRTUFwiO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgLy8gTMOpZ2VuZGUg4oCUIHNpIG5hcnJvd01vZGUgb24gbGEgbWFzcXVlIChuZSBwYXMgcGFzc2VyIGVuIHZlcnRpY2FsZSlcclxuICAgICAgICBjb25zdCBsZWdlbmRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcclxuICAgICAgICBpZiAoIW5hcnJvd01vZGUpIHtcclxuICAgICAgICAgICAgLy8gaG9yaXpvbnRhbGUgKGFuY2llbiBjb21wb3J0ZW1lbnQpXHJcbiAgICAgICAgICAgIGxldCBsZWdlbmRYID0gMTA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZFkgPSAzMDtcclxuICAgICAgICAgICAgY29uc3QgbGVnZW5kTm9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpO1xyXG4gICAgICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwieFwiLCBsZWdlbmRYLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwieVwiLCBsZWdlbmRZLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMFwiKTtcclxuICAgICAgICAgICAgbGVnZW5kTm9uLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjEyXCIpO1xyXG4gICAgICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xyXG4gICAgICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvck5vbik7XHJcbiAgICAgICAgICAgIGxlZ2VuZEdyb3VwLmFwcGVuZENoaWxkKGxlZ2VuZE5vbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZE5vblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgIGxlZ2VuZE5vblRleHQuc2V0QXR0cmlidXRlKFwieFwiLCAobGVnZW5kWCArIDM1KS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbGVnZW5kTm9uVGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChsZWdlbmRZICsgMTApLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZWdlbmROb25UZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjE0XCIpO1xyXG4gICAgICAgICAgICBsZWdlbmROb25UZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjMjIyXCIpO1xyXG4gICAgICAgICAgICBsZWdlbmROb25UZXh0LnRleHRDb250ZW50ID0gXCJOb25cIjtcclxuICAgICAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kTm9uVGV4dCk7XHJcbiAgICAgICAgICAgIGxlZ2VuZFggKz0gODA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZ2VuZE91aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKTtcclxuICAgICAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcInhcIiwgbGVnZW5kWC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcInlcIiwgbGVnZW5kWS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMzBcIik7XHJcbiAgICAgICAgICAgIGxlZ2VuZE91aS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMlwiKTtcclxuICAgICAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcclxuICAgICAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZmlsbENvbG9yKTtcclxuICAgICAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kT3VpKTtcclxuICAgICAgICAgICAgY29uc3QgbGVnZW5kT3VpVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgbGVnZW5kT3VpVGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIChsZWdlbmRYICsgMzUpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZWdlbmRPdWlUZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgKGxlZ2VuZFkgKyAxMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGxlZ2VuZE91aVRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiMTRcIik7XHJcbiAgICAgICAgICAgIGxlZ2VuZE91aVRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiMyMjJcIik7XHJcbiAgICAgICAgICAgIGxlZ2VuZE91aVRleHQudGV4dENvbnRlbnQgPSBcIk91aVwiO1xyXG4gICAgICAgICAgICBsZWdlbmRHcm91cC5hcHBlbmRDaGlsZChsZWdlbmRPdWlUZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGxlZ2VuZEdyb3VwKTtcclxuICAgICAgICB9IC8vIGVsc2UgOiBuYXJyb3dNb2RlIC0+IG5lIHJpZW4gYWZmaWNoZXIgKG1hc3F1w6kpXHJcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICAvLyBkZWZzIHBvdXIgY2xpcFBhdGhzIChub3V2ZWF1IMOgIGNoYXF1ZSB1cGRhdGUpXHJcbiAgICAgICAgY29uc3QgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZGVmc1wiKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcclxuXHJcbiAgICAgICAgLy8gRGVzc2luIGRlcyBiYXJyZXNcclxuICAgICAgICBjb25zdCBiYXJHcm91cHM6IFNWR0dFbGVtZW50W10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDDiVRBUEUgMTogRMOpdGVybWluZXIgc2kgQVUgTU9JTlMgVU4gbGFiZWwgbsOpY2Vzc2l0ZSB1bmUgcm90YXRpb25cclxuICAgICAgICBsZXQgbmVlZHNSb3RhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVNwYWNlRm9yTGFiZWwgPSBib3R0b21NYXJnaW4gLSAyNTsgLy8gZXNwYWNlIGRpc3BvbmlibGUgcG91ciBsZSBsYWJlbCAoZW4gcmV0aXJhbnQgcGFkZGluZylcclxuICAgICAgICBcclxuICAgICAgICBzb3J0ZWRDYXRlZ29yaWVzLmZvckVhY2goKGNhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgdGVtcFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIHhBeGlzRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRlbXBUZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIHhBeGlzRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgIHRlbXBUZXh0LnRleHRDb250ZW50ID0gY2F0O1xyXG4gICAgICAgICAgICB0ZW1wVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSB0ZW1wVGV4dC5nZXRCQm94KCkud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnJlbW92ZUNoaWxkKHRlbXBUZXh0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1heExhYmVsV2lkdGggPSBiYXJXaWR0aCArIGJhclNwYWNpbmcgLSA0O1xyXG4gICAgICAgICAgICAvLyBTaSBsZSB0ZXh0ZSBkw6lwYXNzZSBsJ2VzcGFjZSBob3Jpem9udGFsIE9VIHNpIGxhYmVscyBtdWx0aXBsZXMgc2UgY2hldmF1Y2hlbnRcclxuICAgICAgICAgICAgaWYgKHRleHRXaWR0aCA+IG1heExhYmVsV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG5lZWRzUm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNvcnRlZENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhd1ZhbHVlID0gc29ydGVkVmFsdWVzW2ldIHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRWYWx1ZSA9IHJhd1ZhbHVlICogMTAwO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdEJhclZhbHVlKHJhd1ZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IHBhZGRpbmdMZWZ0ICsgaSAqIChiYXJXaWR0aCArIGJhclNwYWNpbmcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmF3QmFySGVpZ2h0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmF3VmFsdWUpKSAqIG1heEJhckhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUhlaWdodCA9IHJhd0JhckhlaWdodCA+IDAgPyByYXdCYXJIZWlnaHQgOiAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWZmZWN0aXZlUnggPSBNYXRoLm1pbihiYXJSYWRpdXMsIE1hdGguZmxvb3IoYmFyV2lkdGggLyAyKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcclxuICAgICAgICAgICAgYmFyR3JvdXAuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIGJhckdyb3VwLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdlc3Rpb24gZHUgbWVudSBjb250ZXh0dWVsIChjbGljIGRyb2l0KVxyXG4gICAgICAgICAgICBiYXJHcm91cC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShzZWxlY3Rpb25JZHNbaV0sIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQgcm91bmRlZCByZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGJhck5vbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKTtcclxuICAgICAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcInhcIiwgeC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcInlcIiwgKGJhc2VZIC0gbWF4QmFySGVpZ2h0KS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGJhcldpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBiYXJOb24uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIG1heEJhckhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcInJ4XCIsIGVmZmVjdGl2ZVJ4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBiYXJOb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvck5vbik7XHJcbiAgICAgICAgICAgIGJhckdyb3VwLmFwcGVuZENoaWxkKGJhck5vbik7XHJcblxyXG4gICAgICAgICAgICBpZiAocGVyY2VudFZhbHVlIDwgMzUgJiYgdmlzaWJsZUhlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsaXAgKyBmaWxsIHNvIGZpbGwgcmVzcGVjdHMgcm91bmRlZCBiYWNrZ3JvdW5kIHNoYXBlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlwSWQgPSBgY2xpcC1iYXItJHtpfS0ke0RhdGUubm93KCl9YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaXBQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjbGlwUGF0aFwiKTtcclxuICAgICAgICAgICAgICAgIGNsaXBQYXRoLnNldEF0dHJpYnV0ZShcImlkXCIsIGNsaXBJZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlwUmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKTtcclxuICAgICAgICAgICAgICAgIGNsaXBSZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGNsaXBSZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgKGJhc2VZIC0gbWF4QmFySGVpZ2h0KS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGNsaXBSZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGJhcldpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgY2xpcFJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIG1heEJhckhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGNsaXBSZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIGVmZmVjdGl2ZVJ4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgY2xpcFBhdGguYXBwZW5kQ2hpbGQoY2xpcFJlY3QpO1xyXG4gICAgICAgICAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChjbGlwUGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbFJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICBmaWxsUmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBmaWxsUmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChiYXNlWSAtIHZpc2libGVIZWlnaHQpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgZmlsbFJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYmFyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBmaWxsUmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgdmlzaWJsZUhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGZpbGxSZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZmlsbENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGZpbGxSZWN0LnNldEF0dHJpYnV0ZShcImNsaXAtcGF0aFwiLCBgdXJsKCMke2NsaXBJZH0pYCk7XHJcbiAgICAgICAgICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZChmaWxsUmVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGV4dGUgdG91am91cnMgYXUgbWlsaWV1IGRlIGwnYXJyacOocmUtcGxhbiBlbiBuYXJyb3dNb2RlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eHRYID0gKHggKyBiYXJXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHh0WSA9IG5hcnJvd01vZGUgPyAoYmFzZVkgLSAobWF4QmFySGVpZ2h0IC8gMikpIDogKGJhc2VZIC0gKG1heEJhckhlaWdodCAvIDIpKTtcclxuICAgICAgICAgICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHR4dFgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwieVwiLCB0eHRZLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBiYXJWYWx1ZUZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgYmFyVmFsdWVGb250Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIGJhclZhbHVlRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICB0eHQudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChuYXJyb3dNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgcm90YXRlKC05MCAke3R4dFh9ICR7dHh0WX0pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZpc2libGVIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXJPdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInJlY3RcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSB2aXNpYmxlSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcInhcIiwgeC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGJhck91aS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChiYXNlWSAtIGJhckhlaWdodCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBiYXJPdWkuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYmFyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBiYXJPdWkuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGJhckhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ4Rm9yT3VpID0gTWF0aC5taW4oZWZmZWN0aXZlUngsIE1hdGguZmxvb3IoYmFySGVpZ2h0IC8gMikpO1xyXG4gICAgICAgICAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcInJ4XCIsIHJ4Rm9yT3VpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZmlsbENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGJhckdyb3VwLmFwcGVuZENoaWxkKGJhck91aSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGV4dGUgYXUgbWlsaWV1IGRlIGwnYXJyacOocmUtcGxhbiBlbiBuYXJyb3dNb2RlLCBzaW5vbiBhdSBtaWxpZXUgZGUgbGEgYmFycmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4dFggPSAoeCArIGJhcldpZHRoIC8gMik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eHRZID0gbmFycm93TW9kZSA/IChiYXNlWSAtIChtYXhCYXJIZWlnaHQgLyAyKSkgOiAoYmFzZVkgLSAoYmFySGVpZ2h0IC8gMikpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInhcIiwgdHh0WC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHR4dFkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lckZvbnRTaXplID0gbmFycm93TW9kZSA/IGZvbnRTaXplIDogKChiYXJIZWlnaHQgPCBmb250U2l6ZSkgPyBNYXRoLm1heCg4LCBNYXRoLnJvdW5kKGJhckhlaWdodCAqIDAuNikpIDogZm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBpbm5lckZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgYmFyVmFsdWVGb250Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIGJhclZhbHVlRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICB0eHQudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChuYXJyb3dNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgcm90YXRlKC05MCAke3R4dFh9ICR7dHh0WX0pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldEF0dHJpYnV0ZShcInhcIiwgKHggKyAyKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChiYXNlWSAtIDIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIChiYXJXaWR0aCAtIDQpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjJcIik7XHJcbiAgICAgICAgICAgICAgICBtYXJrZXIuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvck5vbik7XHJcbiAgICAgICAgICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZChtYXJrZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB5ZWFyIGxhYmVsIOKAlCB0b3VzIGlkZW50aXF1ZXMgKHJvdGF0aW9uIHNpIEFVIE1PSU5TIDEgbsOpY2Vzc2l0ZSlcclxuICAgICAgICAgICAgaWYgKHNob3dYQXhpcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhclR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJYID0gKHggKyBiYXJXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhclkgPSAoYmFzZVkgKyAyMCk7XHJcbiAgICAgICAgICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcInhcIiwgeWVhclgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcInlcIiwgeWVhclkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB4QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHhBeGlzRm9udENvbG9yKTtcclxuICAgICAgICAgICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeEF4aXNGb250RmFtaWx5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheVRleHQgPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhMYWJlbFdpZHRoID0gYmFyV2lkdGggKyBiYXJTcGFjaW5nIC0gNDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTWVzdXJlciBsYXJnZXVyIHRleHRlIHBvdXIgdHJvbmNhdHVyZSDDqXZlbnR1ZWxsZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgeEF4aXNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRlbXBUZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIHhBeGlzRm9udEZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IGNhdDtcclxuICAgICAgICAgICAgICAgIHRlbXBUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gdGVtcFRleHQuZ2V0QkJveCgpLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdmcucmVtb3ZlQ2hpbGQodGVtcFRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChuZWVkc1JvdGF0aW9uIHx8IGxhYmVsUm90YXRpb24gIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSb3RhdGlvbiBhcHBsaXF1w6llIMOgIFRPVVMgKGTDqWNpc2lvbiBnbG9iYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gbGFiZWxSb3RhdGlvbiAhPT0gMCA/IGxhYmVsUm90YXRpb24gOiA0NTtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoJHstcm90YXRpb259ICR7eWVhclh9ICR7eWVhcll9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyb25xdWVyIHNpIHRleHRlIHRyb3AgbG9uZyBtw6ptZSBlbiByb3RhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFV0aWxpc2VyIGJvdHRvbU1hcmdpbiBwb3VyIGNhbGN1bGVyIGwnZXNwYWNlIGRpc3BvbmlibGUgZW4gcm90YXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhSb3RhdGVkTGVuZ3RoID0gTWF0aC5mbG9vcihhdmFpbGFibGVTcGFjZUZvckxhYmVsICogMS4yKTsgLy8gYXBwcm94aW1hdGlvbiBwb3VyIHRleHRlIGVuIGRpYWdvbmFsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0V2lkdGggPiBtYXhSb3RhdGVkTGVuZ3RoICYmIGNhdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyc1RvS2VlcCA9IE1hdGguZmxvb3IoY2F0Lmxlbmd0aCAqIChtYXhSb3RhdGVkTGVuZ3RoIC8gdGV4dFdpZHRoKSkgLSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dCA9IGNhdC5zdWJzdHJpbmcoMCwgTWF0aC5tYXgoMSwgY2hhcnNUb0tlZXApKSArIFwiLi4uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNb2RlIGhvcml6b250YWwgOiB0cm9ucXVlciBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgICAgICAgICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRXaWR0aCA+IG1heExhYmVsV2lkdGggJiYgY2F0Lmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRydW5jYXRlTGVuZ3RoID0gTWF0aC5mbG9vcihjYXQubGVuZ3RoICogKG1heExhYmVsV2lkdGggLyB0ZXh0V2lkdGgpKSAtIDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW5jYXRlTGVuZ3RoID0gTWF0aC5tYXgoMSwgdHJ1bmNhdGVMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dCA9IGNhdC5zdWJzdHJpbmcoMCwgdHJ1bmNhdGVMZW5ndGgpICsgXCIuLi5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgeWVhclR4dC50ZXh0Q29udGVudCA9IGRpc3BsYXlUZXh0O1xyXG4gICAgICAgICAgICAgICAgYmFyR3JvdXAuYXBwZW5kQ2hpbGQoeWVhclR4dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNsaWNrIHNlbGVjdGlvblxyXG4gICAgICAgICAgICBiYXJHcm91cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNDdHJsUHJlc3NlZCA9IG1vdXNlRXZlbnQuY3RybEtleSB8fCBtb3VzZUV2ZW50Lm1ldGFLZXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2VsZWN0KHNlbGVjdGlvbklkc1tpXSwgaXNDdHJsUHJlc3NlZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoaWRzOiBJU2VsZWN0aW9uSWRbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbihpZHMsIGJhckdyb3Vwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYmFyR3JvdXBzLnB1c2goYmFyR3JvdXApO1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChiYXJHcm91cCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRlc3NpbmVyIGxlIHRpdHJlIGRlIGwnYXhlIFggc2kgZGVtYW5kw6lcclxuICAgICAgICBpZiAoc2hvd1hBeGlzICYmIHhBeGlzVGl0bGUpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwieFwiLCAocGFkZGluZ0xlZnQgKyAoc29ydGVkQ2F0ZWdvcmllcy5sZW5ndGggKiAoYmFyV2lkdGggKyBiYXJTcGFjaW5nKSAtIGJhclNwYWNpbmcpIC8gMikudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGF4aXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChiYXNlWSArIDQ4KS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgYXhpc1RpdGxlLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsICh4QXhpc0ZvbnRTaXplKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgYXhpc1RpdGxlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgeEF4aXNGb250Q29sb3IpO1xyXG4gICAgICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgYXhpc1RpdGxlLnRleHRDb250ZW50ID0geEF4aXNUaXRsZTtcclxuICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQoYXhpc1RpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsaWMgc3VyIGZvbmQgcG91ciBkw6lzw6lsZWN0aW9ubmVyXHJcbiAgICAgICAgdGhpcy5zdmcub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLmNsZWFyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbihbXSwgYmFyR3JvdXBzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZElkczogSVNlbGVjdGlvbklkW10sIGJhckdyb3VwczogU1ZHR0VsZW1lbnRbXSkge1xyXG4gICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGwnb3BhY2l0w6kgZGVzIGJhcnJlcyBzZWxvbiBsYSBzw6lsZWN0aW9uXHJcbiAgICAgICAgYmFyR3JvdXBzLmZvckVhY2goKGdyb3VwLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncm91cC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJZHMuc29tZShzZWxlY3RlZElkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEtleSA9IChzZWxlY3RlZElkIGFzIGFueSkua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFQb2ludEtleSA9ICh0aGlzLmRhdGFQb2ludHNbaW5kZXhdPy5zZWxlY3Rpb25JZCBhcyBhbnkpPy5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkS2V5ID09PSBkYXRhUG9pbnRLZXk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGdyb3VwLnN0eWxlLm9wYWNpdHkgPSBpc1NlbGVjdGVkID8gXCIxXCIgOiBcIjAuM1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZvcm1hdHRpbmdNb2RlbCgpOiBwb3dlcmJpLnZpc3VhbHMuRm9ybWF0dGluZ01vZGVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmJ1aWxkRm9ybWF0dGluZ01vZGVsKHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gaGVscGVyIHRvIGdldCBjb2xvciB2YWx1ZSAoaGFuZGxlcyBDb2xvclBpY2tlciBvYmplY3QpXHJcbmZ1bmN0aW9uIHJlYWRDb2xvcihvYmo6IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoIW9iaikgeyByZXR1cm4gdW5kZWZpbmVkOyB9XHJcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikgeyByZXR1cm4gb2JqOyB9XHJcbiAgICBpZiAob2JqLnNvbGlkICYmIG9iai5zb2xpZC5jb2xvcikgeyByZXR1cm4gb2JqLnNvbGlkLmNvbG9yOyB9XHJcbiAgICBpZiAob2JqLnZhbHVlKSB7IHJldHVybiBvYmoudmFsdWU7IH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpZ2h0ZW5Db2xvcihoZXg6IHN0cmluZywgcGVyY2VudDogbnVtYmVyLCBhbHBoYTogbnVtYmVyID0gMC41KTogc3RyaW5nIHtcclxuICAgIC8vIENvbnZlcnQgaGV4IHRvIFJHQlxyXG4gICAgbGV0IHIgPSAwLCBnID0gMCwgYiA9IDA7XHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNykge1xyXG4gICAgICAgIHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KTtcclxuICAgICAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNik7XHJcbiAgICAgICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xyXG4gICAgfVxyXG4gICAgLy8gTGlnaHRlblxyXG4gICAgciA9IE1hdGgucm91bmQociArICgyNTUgLSByKSAqIHBlcmNlbnQpO1xyXG4gICAgZyA9IE1hdGgucm91bmQoZyArICgyNTUgLSBnKSAqIHBlcmNlbnQpO1xyXG4gICAgYiA9IE1hdGgucm91bmQoYiArICgyNTUgLSBiKSAqIHBlcmNlbnQpO1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7cn0sJHtnfSwke2J9LCR7YWxwaGF9KWA7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IG51bGw7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpc3VhbCB9IGZyb20gXCIuLi8uLi9zcmMvdmlzdWFsXCI7XG5pbXBvcnQgcG93ZXJiaVZpc3VhbHNBcGkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcbmltcG9ydCBJVmlzdWFsUGx1Z2luID0gcG93ZXJiaVZpc3VhbHNBcGkudmlzdWFscy5wbHVnaW5zLklWaXN1YWxQbHVnaW47XG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLkRpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucztcbnZhciBwb3dlcmJpS2V5OiBhbnkgPSBcInBvd2VyYmlcIjtcbnZhciBwb3dlcmJpOiBhbnkgPSB3aW5kb3dbcG93ZXJiaUtleV07XG52YXIgaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICdoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcnLFxuICAgIGRpc3BsYXlOYW1lOiAnaGlzdG9ncmFtbWVwZXJzbycsXG4gICAgY2xhc3M6ICdWaXN1YWwnLFxuICAgIGFwaVZlcnNpb246ICc1LjMuMCcsXG4gICAgY3JlYXRlOiAob3B0aW9ucz86IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoVmlzdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpc3VhbChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnVmlzdWFsIGluc3RhbmNlIG5vdCBmb3VuZCc7XG4gICAgfSxcbiAgICBjcmVhdGVNb2RhbERpYWxvZzogKGRpYWxvZ0lkOiBzdHJpbmcsIG9wdGlvbnM6IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucywgaW5pdGlhbFN0YXRlOiBvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVnaXN0cnkgPSAoPGFueT5nbG9iYWxUaGlzKS5kaWFsb2dSZWdpc3RyeTtcbiAgICAgICAgaWYgKGRpYWxvZ0lkIGluIGRpYWxvZ1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICBuZXcgZGlhbG9nUmVnaXN0cnlbZGlhbG9nSWRdKG9wdGlvbnMsIGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1c3RvbTogdHJ1ZVxufTtcbmlmICh0eXBlb2YgcG93ZXJiaSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHBvd2VyYmkudmlzdWFscyA9IHBvd2VyYmkudmlzdWFscyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyA9IHBvd2VyYmkudmlzdWFscy5wbHVnaW5zIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zW1wiaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHXCJdID0gaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHO1xufVxuZXhwb3J0IGRlZmF1bHQgaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=