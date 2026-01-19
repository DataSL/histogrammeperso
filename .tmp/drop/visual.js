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
    titleText = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "titleText",
        displayName: "Titre du graphique (DSP)",
        value: "DSP",
        placeholder: "Titre du graphique"
    });
    titleFontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "titleFontFamily",
        displayName: "Police du titre",
        value: "Segoe UI",
        placeholder: "e.g. Segoe UI, Arial"
    });
    titleFontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "titleFontSize",
        displayName: "Taille du titre (px)",
        value: 20
    });
    titleFontBold = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "titleFontBold",
        displayName: "Titre en gras",
        value: true
    });
    titleFontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "titleFontColor",
        displayName: "Couleur du titre",
        value: { value: "#222222" }
    });
    name = "layout";
    displayName = "Mise en page";
    slices = [
        this.showBackground,
        this.titleText,
        this.titleFontFamily,
        this.titleFontSize,
        this.titleFontBold,
        this.titleFontColor
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

// eslint-disable-next-line powerbi-visuals/no-http-string
const SVG_NS = "http://www.w3.org/2000/svg";
function createSvgElement(tagName) {
    return document.createElementNS(SVG_NS, tagName);
}



class Visual {
    target;
    formattingSettings;
    formattingSettingsService;
    svg;
    container;
    selectionManager;
    host;
    licenseManager;
    currentUserValidPlans;
    hasServicePlans;
    isLicenseUnsupportedEnv;
    isNotificationDisplayed = false;
    dataPoints;
    events;
    constructor(options) {
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.FormattingSettingsService();
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
    checkLicense() {
        if (!this.licenseManager) {
            return;
        }
        this.licenseManager.getAvailableServicePlans()
            .then((result) => {
            this.isLicenseUnsupportedEnv = result.isLicenseUnsupportedEnv;
            if (result.isLicenseInfoAvailable && !this.isLicenseUnsupportedEnv) {
                this.currentUserValidPlans = result.plans?.filter((plan) => (plan.state === 1 /* powerbi.ServicePlanState.Active */ || plan.state === 2 /* powerbi.ServicePlanState.Warning */));
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
    notifyLicenseRequired() {
        if (this.isNotificationDisplayed)
            return;
        const notificationType = this.isLicenseUnsupportedEnv
            ? 1 /* powerbi.LicenseNotificationType.UnsupportedEnv */
            : 2 /* powerbi.LicenseNotificationType.VisualIsBlocked */;
        this.licenseManager.notifyLicenseRequired(notificationType)
            .then((value) => {
            this.isNotificationDisplayed = value;
        })
            .catch((err) => {
            console.error("Error notifying license:", err);
        });
    }
    update(options) {
        this.events.renderingStarted(options);
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
        if (!dataView || !dataView.categorical) {
            this.events.renderingFinished(options);
            return;
        }
        const categories = dataView.categorical.categories[0];
        const categoryValues = categories.values;
        const values = dataView.categorical.values[0].values;
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
        const formatBarValue = (raw) => {
            if (valueDisplayMode === 0)
                return (raw * 100).toFixed(decimalPlaces).replace('.', ',') + "%";
            if (valueDisplayMode === 1)
                return raw.toFixed(decimalPlaces).replace('.', ',');
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
        }
        else {
            this.svg.style.background = "transparent";
        }
        // DETECTION MODE "NARROW" (peut ajuster seuil)
        const slotWidth = barWidth + barSpacing;
        const narrowMode = slotWidth < 70 || width < 480 || svgWidth > width;
        // Dessin des barres (déclaré ici pour être accessible dans le click handler du fond)
        const barGroups = [];
        // Fond cliquable, titre et légende
        this.renderBackgroundRect(svgWidth, svgHeight, showBackground, barGroups);
        this.renderTitle(titleText, titleFontSize, titleFontFamily, titleFontBold, titleFontColor);
        if (!narrowMode)
            this.svg.appendChild(this.renderLegend(fillColor, colorNon));
        // defs pour clipPaths (nouveau à chaque update)
        const defs = createSvgElement("defs");
        this.svg.appendChild(defs);
        // Déterminer si les labels nécessitent une rotation
        const needsRotation = this.checkLabelRotation(sortedCategories, barWidth, barSpacing, xAxisFontSize, xAxisFontFamily);
        const availableSpaceForLabel = bottomMargin - 25;
        sortedCategories.forEach((cat, i) => {
            const ctx = {
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
    getDataPointOptions(objects, width, categoryCount) {
        let fillColor = "#2F6FE7";
        if (objects && objects["dataPoint"] && objects["dataPoint"]["fill"]) {
            const colorObj = objects["dataPoint"]["fill"];
            if (colorObj.solid && colorObj.solid.color)
                fillColor = colorObj.solid.color;
        }
        const colorNon = lightenColor(fillColor, 0.6, 0.5);
        const barRadius = objects && objects["dataPoint"] && typeof objects["dataPoint"]["barRadius"] === "number"
            ? objects["dataPoint"]["barRadius"] : 30;
        const fontSize = objects && objects["dataPoint"] && typeof objects["dataPoint"]["fontSize"] === "number"
            ? objects["dataPoint"]["fontSize"] : 18;
        const dpObj = (objects && objects["dataPoint"]) || {};
        const valueDisplayMode = typeof dpObj["valueDisplayMode"] === "number" ? dpObj["valueDisplayMode"] : 0;
        const decimalPlaces = typeof dpObj["decimalPlaces"] === "number" ? Math.max(0, dpObj["decimalPlaces"]) : 2;
        const barValueFontSize = typeof dpObj["fontSize"] === "number" ? dpObj["fontSize"] : 18;
        const barValueFontFamily = typeof dpObj["fontFamily"] === "string" ? dpObj["fontFamily"] : "Segoe UI";
        const barValueFontColor = readColor(dpObj["fontColor"]) || "#ffffff";
        let barWidth = Math.min(60, Math.max(10, Math.floor(width / Math.max(1, categoryCount) * 0.6)));
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
        catch { /* fallback */ }
        return { fillColor, colorNon, barRadius, fontSize, barValueFontSize, barValueFontFamily, barValueFontColor, valueDisplayMode, decimalPlaces, barWidth, barSpacing };
    }
    getXAxisOptions(objects) {
        const xAxisObj = (objects && objects["xAxis"]) || {};
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
    getLayoutOptions(objects) {
        let showBackground = true, titleText = "DSP", titleFontFamily = "Segoe UI";
        let titleFontSize = 20, titleFontBold = true, titleFontColor = "#222";
        if (this.formattingSettings && this.formattingSettings.layoutCard) {
            const lc = this.formattingSettings.layoutCard;
            if (lc.showBackground)
                showBackground = lc.showBackground.value;
            if (lc.titleText && typeof lc.titleText.value === "string")
                titleText = lc.titleText.value || "DSP";
            if (lc.titleFontFamily && typeof lc.titleFontFamily.value === "string")
                titleFontFamily = lc.titleFontFamily.value || "Segoe UI";
            if (lc.titleFontSize && typeof lc.titleFontSize.value === "number")
                titleFontSize = lc.titleFontSize.value || 20;
            if (lc.titleFontBold && typeof lc.titleFontBold.value === "boolean")
                titleFontBold = lc.titleFontBold.value;
            if (lc.titleFontColor)
                titleFontColor = readColor(lc.titleFontColor.value) || "#222";
        }
        else if (objects && objects["layout"]) {
            const lo = objects["layout"];
            if (typeof lo["showBackground"] === "boolean")
                showBackground = lo["showBackground"];
            if (typeof lo["titleText"] === "string")
                titleText = lo["titleText"] || "DSP";
            if (typeof lo["titleFontFamily"] === "string")
                titleFontFamily = lo["titleFontFamily"] || "Segoe UI";
            if (typeof lo["titleFontSize"] === "number")
                titleFontSize = lo["titleFontSize"] || 20;
            if (typeof lo["titleFontBold"] === "boolean")
                titleFontBold = lo["titleFontBold"];
            if (lo["titleFontColor"])
                titleFontColor = readColor(lo["titleFontColor"]) || "#222";
        }
        return { showBackground, titleText, titleFontFamily, titleFontSize, titleFontBold, titleFontColor };
    }
    prepareDataPoints(categories, categoryValues, values) {
        this.dataPoints = categoryValues.map((cat, i) => ({
            category: cat.toString(),
            value: values[i],
            selectionId: this.host.createSelectionIdBuilder().withCategory(categories, i).createSelectionId()
        }));
        const areYears = this.dataPoints.every(dp => {
            const num = parseInt(dp.category);
            return !isNaN(num) && num >= 1900 && num <= 2100 && dp.category.length === 4;
        });
        if (areYears)
            this.dataPoints.sort((a, b) => parseInt(a.category) - parseInt(b.category));
    }
    checkLabelRotation(categories, barWidth, barSpacing, xAxisFontSize, xAxisFontFamily) {
        for (const cat of categories) {
            const tempText = createSvgElement("text");
            tempText.setAttribute("font-size", xAxisFontSize.toString());
            tempText.setAttribute("font-family", xAxisFontFamily);
            tempText.textContent = cat;
            tempText.style.visibility = "hidden";
            this.svg.appendChild(tempText);
            const textWidth = tempText.getBBox().width;
            this.svg.removeChild(tempText);
            if (textWidth > barWidth + barSpacing - 4)
                return true;
        }
        return false;
    }
    renderBackgroundRect(svgWidth, svgHeight, showBackground, barGroups) {
        const bgRect = createSvgElement("rect");
        bgRect.setAttribute("x", "0");
        bgRect.setAttribute("y", "0");
        bgRect.setAttribute("width", svgWidth.toString());
        bgRect.setAttribute("height", svgHeight.toString());
        bgRect.setAttribute("fill", showBackground ? "#f7fbff" : "transparent");
        bgRect.style.cursor = "pointer";
        bgRect.addEventListener("click", (event) => {
            event.stopPropagation();
            this.selectionManager.clear().then(() => {
                this.updateSelection([], barGroups);
                const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true, view: window });
                this.svg.dispatchEvent(clickEvent);
            });
        });
        if (this.svg.firstChild) {
            this.svg.insertBefore(bgRect, this.svg.firstChild);
        }
        else {
            this.svg.appendChild(bgRect);
        }
    }
    renderTitle(titleText, titleFontSize, titleFontFamily, titleFontBold, titleFontColor) {
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
    renderXAxisTitle(xAxisTitle, paddingLeft, categoryCount, barWidth, barSpacing, baseY, xAxisFontSize, xAxisFontColor, xAxisFontFamily) {
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
    renderLegend(fillColor, colorNon) {
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
    renderBar(ctx, barGroups, selectionIds) {
        const { cat, index, rawValue, x, barWidth, barSpacing, baseY, maxBarHeight, barRadius, fontSize, fillColor, colorNon, barValueFontSize, barValueFontFamily, barValueFontColor, narrowMode, showXAxis, xAxisFontSize, xAxisFontFamily, xAxisFontColor, labelRotation, needsRotation, availableSpaceForLabel, formatBarValue, defs } = ctx;
        const percentValue = rawValue * 100;
        const formattedValue = formatBarValue(rawValue);
        const rawBarHeight = Math.max(0, Math.min(1, rawValue)) * maxBarHeight;
        const visibleHeight = rawBarHeight > 0 ? rawBarHeight : 0;
        const effectiveRx = Math.min(barRadius, Math.floor(barWidth / 2));
        const barGroup = createSvgElement("g");
        barGroup.style.cursor = "pointer";
        barGroup.setAttribute("data-index", index.toString());
        barGroup.addEventListener("contextmenu", (event) => {
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
        }
        else if (visibleHeight > 0) {
            this.renderHighValueBar(barGroup, x, baseY, barWidth, visibleHeight, maxBarHeight, effectiveRx, fillColor, formattedValue, fontSize, barValueFontSize, barValueFontFamily, barValueFontColor, narrowMode);
        }
        else {
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
            const mouseEvent = event;
            const isCtrlPressed = mouseEvent.ctrlKey || mouseEvent.metaKey;
            this.selectionManager.select(selectionIds[index], isCtrlPressed)
                .then((ids) => { this.updateSelection(ids, barGroups); });
        });
        return barGroup;
    }
    renderLowValueBar(barGroup, defs, index, x, baseY, barWidth, maxBarHeight, visibleHeight, effectiveRx, fillColor, formattedValue, barValueFontSize, barValueFontFamily, barValueFontColor, narrowMode) {
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
    renderHighValueBar(barGroup, x, baseY, barWidth, visibleHeight, maxBarHeight, effectiveRx, fillColor, formattedValue, fontSize, barValueFontSize, barValueFontFamily, barValueFontColor, narrowMode) {
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
    renderXAxisLabel(barGroup, cat, x, barWidth, barSpacing, baseY, xAxisFontSize, xAxisFontFamily, xAxisFontColor, labelRotation, needsRotation, availableSpaceForLabel) {
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
        }
        else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBQ0YsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN4RCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3REFBd0QsQ0FBQyxHQUFHLHNEQUFzRCxDQUFDO0FBQy9JLENBQUM7QUFDRCxpRUFBZSxzREFBc0QsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL3NyYy92aXN1YWwudHMiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHLy4vc3R5bGUvdmlzdWFsLmxlc3M/MTRiMCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvZXh0ZXJuYWwgdmFyIFwibnVsbFwiIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvLi8udG1wL3ByZWNvbXBpbGUvdmlzdWFsUGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUG93ZXJiaSB1dGlscyBjb21wb25lbnRzIGNsYXNzZXMgZm9yIGN1c3RvbSB2aXN1YWwgZm9ybWF0dGluZyBwYW5lIG9iamVjdHNcbiAqXG4gKi9cbmltcG9ydCAqIGFzIEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlciBmcm9tIFwiLi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlsc1wiO1xuY2xhc3MgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIENhcmRHcm91cEVudGl0eSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG59XG4vKiogQ29tcG9zaXRlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSB3aXRoIG11bHRpcGxlIGdyb3VwcyAqL1xuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUNhcmQgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuLyoqIFNpbXBsZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgaW4gYSBzaW5nbGUgZ3JvdXAgKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVDYXJkIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBTaW1wbGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBzbGljZURpc3BsYXlOYW1lID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEZXNjcmlwdGlvbiA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHNsaWNlRGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc2xpY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcilcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRvcjogRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgdGhpcyksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgICAgIH1dO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IChfYSA9IGRhdGFWaWV3T2JqZWN0cyA9PT0gbnVsbCB8fCBkYXRhVmlld09iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3T2JqZWN0c1tvYmplY3ROYW1lXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW3RoaXMubmFtZV07XG4gICAgICAgIHRoaXMudmFsdWUgPSBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBuZXdWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFsaWdubWVudEdyb3VwIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkFsaWdubWVudEdyb3VwXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkFsaWdubWVudEdyb3VwICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbW9kZTogdGhpcy5tb2RlLCBzdXBwb3J0c05vU2VsZWN0aW9uOiB0aGlzLnN1cHBvcnRzTm9TZWxlY3Rpb24gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVN3aXRjaCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUb2dnbGVTd2l0Y2hcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVG9nZ2xlU3dpdGNoICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJDb2xvclBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Db2xvclBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGRlZmF1bHRDb2xvcjogdGhpcy5kZWZhdWx0Q29sb3IsIGlzTm9GaWxsSXRlbVN1cHBvcnRlZDogdGhpcy5pc05vRmlsbEl0ZW1TdXBwb3J0ZWQgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE51bVVwRG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJOdW1VcERvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTnVtVXBEb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBOdW1VcERvd24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNsaWRlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TbGlkZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRGF0ZVBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EYXRlUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMucGxhY2Vob2xkZXJLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLnBsYWNlaG9sZGVyS2V5KSA6IHRoaXMucGxhY2Vob2xkZXIsIHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbURyb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1lcmdlVmFsdWVzOiB0aGlzLm1lcmdlVmFsdWVzLCBmaWx0ZXJWYWx1ZXM6IHRoaXMuZmlsdGVyVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEdXJhdGlvblBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EdXJhdGlvblBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXJyb3JSYW5nZUNvbnRyb2wgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRXJyb3JSYW5nZUNvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRXJyb3JSYW5nZUNvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZpZWxkUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZpZWxkUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZpZWxkUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzLCBhbGxvd011bHRpcGxlVmFsdWVzOiB0aGlzLmFsbG93TXVsdGlwbGVWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0SW5wdXRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dElucHV0ICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgVGV4dElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0QXJlYVwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0QXJlYSAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250UGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRQaWNrZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYWRpZW50QmFyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkdyYWRpZW50QmFyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkdyYWRpZW50QmFyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJJbWFnZVVwbG9hZFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5JbWFnZVVwbG9hZCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGlzdEVkaXRvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJMaXN0RWRpdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lkxpc3RFZGl0b3IgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlYWRPbmx5VGV4dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJSZWFkT25seVRleHRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuUmVhZE9ubHlUZXh0ICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFwZU1hcFNlbGVjdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNoYXBlTWFwU2VsZWN0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2hhcGVNYXBTZWxlY3RvciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvcjogdGhpcy5pc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3IgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRDb250cm9sIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHkuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib2xkOiAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgaXRhbGljOiAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB1bmRlcmxpbmU6IChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZm9udFNpemUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib2xkID8gdGhpcy5ib2xkLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5pdGFsaWMgPyB0aGlzLml0YWxpYy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudW5kZXJsaW5lID8gdGhpcy51bmRlcmxpbmUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuZm9udFNpemUuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWFyZ2luUGFkZGluZyBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJNYXJnaW5QYWRkaW5nXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk1hcmdpblBhZGRpbmcgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICByaWdodDogdGhpcy5yaWdodC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5yaWdodC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnRvcC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvdHRvbS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5sZWZ0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5yaWdodC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMudG9wLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5ib3R0b20uc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVySXRlbSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMubWFwIiwiaW1wb3J0IHsgQ29tcG9zaXRlQ2FyZCwgU2ltcGxlQ2FyZCB9IGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmV4cG9ydCBjbGFzcyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciA9IGxvY2FsaXphdGlvbk1hbmFnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIGZyb20gbWV0YWRhdGEgZGF0YVZpZXdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhVmlld3MgbWV0YWRhdGEgZGF0YVZpZXcgb2JqZWN0XG4gICAgICogQHJldHVybnMgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWxcbiAgICAgKi9cbiAgICBwb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKHR5cGVDbGFzcywgZGF0YVZpZXcpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgbGV0IGRlZmF1bHRTZXR0aW5ncyA9IG5ldyB0eXBlQ2xhc3MoKTtcbiAgICAgICAgbGV0IGRhdGFWaWV3T2JqZWN0cyA9IChfYSA9IGRhdGFWaWV3ID09PSBudWxsIHx8IGRhdGFWaWV3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlldy5tZXRhZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9iamVjdHM7XG4gICAgICAgIGlmIChkYXRhVmlld09iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBlYWNoIGZvcm1hdHRpbmcgcHJvcGVydHkgYW5kIHNldCBpdHMgbmV3IHZhbHVlIGlmIGV4aXN0c1xuICAgICAgICAgICAgKF9iID0gZGVmYXVsdFNldHRpbmdzLmNhcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQpXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/IFtjYXJkXSA6IGNhcmQuZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgY3VycmVudCB0b3AgbGV2ZWwgdG9nZ2xlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250YWluZXJJdGVtID09PSBudWxsIHx8IGNvbnRhaW5lckl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRhaW5lckl0ZW0uc2xpY2VzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmb3JtYXR0aW5nIG1vZGVsIGJ5IHBhcnNpbmcgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHBvd2VyYmkgdmlzdWFsIGZvcm1hdHRpbmcgbW9kZWxcbiAgICAgKi9cbiAgICBidWlsZEZvcm1hdHRpbmdNb2RlbChmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCkge1xuICAgICAgICBsZXQgZm9ybWF0dGluZ01vZGVsID0ge1xuICAgICAgICAgICAgY2FyZHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLmNhcmRzXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdDYXJkID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGlzcGxheU5hbWVLZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGlzcGxheU5hbWVLZXkpIDogY2FyZC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRlc2NyaXB0aW9uS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1aWQ6IGNhcmQubmFtZSArIFwiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBhbmFseXRpY3NQYW5lOiBjYXJkLmFuYWx5dGljc1BhbmUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXJkLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmQudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGNhcmQub25QcmVQcm9jZXNzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjYXJkKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2ltcGxlQ2FyZCA9IGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkO1xuICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGlzU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlc1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVWlkID0gY2FyZEdyb3VwSW5zdGFuY2UubmFtZSArIFwiLWdyb3VwXCI7XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBncm91cCBmb3IgZWFjaCBncm91cFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdHcm91cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBncm91cFVpZCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IGNhcmRHcm91cEluc3RhbmNlLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBkZWxheVNhdmVTbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLmRlbGF5U2F2ZVNsaWNlcyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFJlYXNvbjogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWRSZWFzb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5ncm91cHMucHVzaChmb3JtYXR0aW5nR3JvdXApO1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgZm9ybWF0dGluZyBtb2RlbCBhZGRzIGRhdGEgcG9pbnRzIG9yIHRvcCBjYXRlZ29yaWVzIChMaWtlIHdoZW4geW91IG1vZGlmeSBzcGVjaWZpYyB2aXN1YWwgY2F0ZWdvcnkgY29sb3IpLlxuICAgICAgICAgICAgICAgIC8vIHRoZXNlIGNhdGVnb3JpZXMgdXNlIHNhbWUgb2JqZWN0IG5hbWUgYW5kIHByb3BlcnR5IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXMgYW5kIHRoZSBnZW5lcmF0ZWQgdWlkIHdpbGwgYmUgdGhlIHNhbWUgZm9yIHRoZXNlIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gU29sdXRpb24gPT4gU2F2ZSBzbGljZSBuYW1lcyB0byBtb2RpZnkgZWFjaCBzbGljZSB1aWQgdG8gYmUgdW5pcXVlIGJ5IGFkZGluZyBjb3VudGVyIHZhbHVlIHRvIHRoZSBuZXcgc2xpY2UgdWlkXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclVpZCA9IGdyb3VwVWlkICsgXCItY29udGFpbmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDb250YWluZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGVzY3JpcHRpb25LZXkpIDogY29udGFpbmVyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJVaWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW0gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJZW1OYW1lID0gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA/IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySXRlbVVpZCA9IGNvbnRhaW5lclVpZCArIGNvbnRhaW5lckllbU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJJdGVtVWlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZXMgYW5kIGFkZCB0aGVtIHRvIGN1cnJlbnQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nQ29udGFpbmVySXRlbS5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLnB1c2goZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0dyb3VwLmNvbnRhaW5lciA9IGZvcm1hdHRpbmdDb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9ybWF0dGluZ0dyb3VwLmRpc3BsYXlOYW1lID09IHVuZGVmaW5lZCA/IGZvcm1hdHRpbmdDYXJkIDogZm9ybWF0dGluZ0dyb3VwKS50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nR3JvdXAuc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQucmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nTW9kZWwuY2FyZHMucHVzaChmb3JtYXR0aW5nQ2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGluZ01vZGVsO1xuICAgIH1cbiAgICBidWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXMgfSkge1xuICAgICAgICAvLyBGaWx0ZXIgc2xpY2VzIGJhc2VkIG9uIHRoZWlyIHZpc2liaWxpdHlcbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdTbGljZSA9IHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXR0aW5nU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBNb2RpZnkgZm9ybWF0dGluZyBzbGljZSB1aWQgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0rKztcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlLnVpZCA9IGAke2Zvcm1hdHRpbmdTbGljZS51aWR9LSR7c2xpY2VOYW1lc1tzbGljZS5uYW1lXX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2VzLnB1c2goZm9ybWF0dGluZ1NsaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFByb2NlZWRlZCBzbGljZSBuYW1lcyBhcmUgc2F2ZWQgdG8gcHJldmVudCBkdXBsaWNhdGVkIGRlZmF1bHQgZGVzY3JpcHRvcnMgaW4gY2FzZSBvZiB1c2luZyBcbiAgICAgICAgLy8gZm9ybWF0dGluZyBjYXRlZ29yaWVzICYgc2VsZWN0b3JzLCBzaW5jZSB0aGV5IGhhdmUgdGhlIHNhbWUgZGVzY3JpcHRvciBvYmplY3ROYW1lIGFuZCBwcm9wZXJ0eU5hbWVcbiAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgbGV0IGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgICAgIGxldCBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZCAmJiBjYXJkLnRvcExldmVsU2xpY2UpXG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLihfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lKSk7XG4gICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIHNsaWNlTmFtZXMsIGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpO1xuICAgICAgICAgICAgKF9iID0gKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBzbGljZU5hbWVzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycykpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbiAgICBnZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lLCBzbGljZXMsIHNsaWNlTmFtZXMsIHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmICh0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICBzbGljZU5hbWVzW3RvcExldmVsU2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodG9wTGV2ZWxTbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2xpY2UgJiYgIXNsaWNlTmFtZXNbc2xpY2UubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChzbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMubWFwIiwiaW1wb3J0ICogYXMgZm9ybWF0dGluZ1NldHRpbmdzIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2VcIjtcbmV4cG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncywgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBCdWlsZCBhbmQgcmV0dXJuIGZvcm1hdHRpbmcgZGVzY3JpcHRvciBmb3Igc2ltcGxlIHNsaWNlXG4gKlxuICogQHBhcmFtIG9iamVjdE5hbWUgT2JqZWN0IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXNcbiAqIEBwYXJhbSBzbGljZSBmb3JtYXR0aW5nIHNpbXBsZSBzbGljZVxuICogQHJldHVybnMgc2ltcGxlIHNsaWNlIGZvcm1hdHRpbmcgZGVzY3JpcHRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCBzbGljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgIHByb3BlcnR5TmFtZTogc2xpY2UubmFtZSxcbiAgICAgICAgc2VsZWN0b3I6IHNsaWNlLnNlbGVjdG9yLFxuICAgICAgICBhbHRDb25zdGFudFZhbHVlU2VsZWN0b3I6IHNsaWNlLmFsdENvbnN0YW50U2VsZWN0b3IsXG4gICAgICAgIGluc3RhbmNlS2luZDogc2xpY2UuaW5zdGFuY2VLaW5kXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHByb3BlcnR5IHZhbHVlIGZyb20gZGF0YXZpZXcgb2JqZWN0cyBpZiBleGlzdHNcbiAqIEVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGZyb20gZm9ybWF0dGluZyBzZXR0aW5ncyBvYmplY3RcbiAqXG4gKiBAcGFyYW0gdmFsdWUgZGF0YXZpZXcgb2JqZWN0IHZhbHVlXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGZvcm1hdHRpbmcgc2V0dGluZ3MgZGVmYXVsdCB2YWx1ZVxuICogQHJldHVybnMgZm9ybWF0dGluZyBwcm9wZXJ0eSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShzbGljZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIXZhbHVlLnNvbGlkKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5zb2xpZC5jb2xvciB9O1xuICAgIH1cbiAgICBpZiAoc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLml0ZW1zKSB7XG4gICAgICAgIGxldCBpdGVtc0FycmF5ID0gc2xpY2UuaXRlbXM7XG4gICAgICAgIHJldHVybiBpdGVtc0FycmF5LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMubWFwIiwiLypcclxuICogIFBvd2VyIEJJIFZpc3VhbGl6YXRpb25zXHJcbiAqXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxyXG4gKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlwiU29mdHdhcmVcIlwiKSwgdG8gZGVhbFxyXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBcclxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7IC8vIEltcG9ydCBuw6ljZXNzYWlyZSBwb3VyIFZhbGlkYXRvclR5cGVcclxuXHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkID0gZm9ybWF0dGluZ1NldHRpbmdzLlNpbXBsZUNhcmQ7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZSA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TbGljZTtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsID0gZm9ybWF0dGluZ1NldHRpbmdzLk1vZGVsO1xyXG5cclxuLyoqXHJcbiAqIERhdGEgUG9pbnQgRm9ybWF0dGluZyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBEYXRhUG9pbnRDYXJkU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIGZpbGwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImZpbGxcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYXIgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBTaXplXCIsXHJcbiAgICAgICAgdmFsdWU6IDE4XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgZmFtaWx5IGZvciB2YWx1ZXNcIixcclxuICAgICAgICB2YWx1ZTogXCJTZWdvZSBVSVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcImUuZy4gU2Vnb2UgVUksIEFyaWFsXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBjb2xvciBmb3IgdmFsdWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2ZmZmZmZlwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJhclJhZGl1cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJhclJhZGl1c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhciBSYWRpdXNcIixcclxuICAgICAgICB2YWx1ZTogMzBcclxuICAgIH0pO1xyXG5cclxuICAgIGJhcldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYmFyV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYXIgV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogNjBcclxuICAgIH0pO1xyXG5cclxuICAgIGJhclNwYWNpbmcgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJiYXJTcGFjaW5nXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFyIFNwYWNpbmdcIixcclxuICAgICAgICB2YWx1ZTogMzZcclxuICAgIH0pO1xyXG5cclxuICAgIHZhbHVlRGlzcGxheU1vZGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2YWx1ZURpc3BsYXlNb2RlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmFsdWUgZGlzcGxheSBtb2RlICgwPSUsMT1kZWNpbWFsLDI9aW50ZWdlcilcIixcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGVjaW1hbFBsYWNlcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImRlY2ltYWxQbGFjZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEZWNpbWFsIHBsYWNlcyBmb3IgdmFsdWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IDJcclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YVBvaW50XCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJEYXRhIGNvbG9yc1wiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5maWxsLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZm9udENvbG9yLFxyXG4gICAgICAgIHRoaXMuYmFyUmFkaXVzLFxyXG4gICAgICAgIHRoaXMuYmFyV2lkdGgsXHJcbiAgICAgICAgdGhpcy5iYXJTcGFjaW5nLFxyXG4gICAgICAgIHRoaXMudmFsdWVEaXNwbGF5TW9kZSxcclxuICAgICAgICB0aGlzLmRlY2ltYWxQbGFjZXNcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgRm9ybWF0dGluZyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBMYXlvdXRDYXJkU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuXHJcbiAgICBzaG93QmFja2dyb3VuZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgZm9uZCBwYXIgZMOpZmF1dFwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGl0bGVUZXh0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVUZXh0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGl0cmUgZHUgZ3JhcGhpcXVlIChEU1ApXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiRFNQXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGl0cmUgZHUgZ3JhcGhpcXVlXCJcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlRm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlRm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlBvbGljZSBkdSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlNlZ29lIFVJXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiZS5nLiBTZWdvZSBVSSwgQXJpYWxcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVGb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlRm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZHUgdGl0cmUgKHB4KVwiLFxyXG4gICAgICAgIHZhbHVlOiAyMFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVGb250Qm9sZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlRm9udEJvbGRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUaXRyZSBlbiBncmFzXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlRm9udENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZUZvbnRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgZHUgdGl0cmVcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMjIyMjIyXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJsYXlvdXRcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIk1pc2UgZW4gcGFnZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93QmFja2dyb3VuZCxcclxuICAgICAgICB0aGlzLnRpdGxlVGV4dCxcclxuICAgICAgICB0aGlzLnRpdGxlRm9udEZhbWlseSxcclxuICAgICAgICB0aGlzLnRpdGxlRm9udFNpemUsXHJcbiAgICAgICAgdGhpcy50aXRsZUZvbnRCb2xkLFxyXG4gICAgICAgIHRoaXMudGl0bGVGb250Q29sb3JcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBYIEF4aXMgRm9ybWF0dGluZyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBYQXhpc0NhcmRTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IFggYXhpcyBsYWJlbHNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlggYXhpcyB0aXRsZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBsYWJlbFJvdGF0aW9uID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibGFiZWxSb3RhdGlvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhYmVsIHJvdGF0aW9uIChkZWcpXCIsXHJcbiAgICAgICAgdmFsdWU6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJYIGF4aXMgZm9udCBzaXplXCIsXHJcbiAgICAgICAgdmFsdWU6IDE0XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlggYXhpcyBmb250IGZhbWlseVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlNlZ29lIFVJXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiZS5nLiBTZWdvZSBVSSwgQXJpYWxcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmb250Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJYIGF4aXMgZm9udCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiM4ODg4ODhcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBib3R0b21NYXJnaW4gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3R0b21NYXJnaW5cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCb3R0b20gbWFyZ2luIChzcGFjaW5nIGZvciBYIGF4aXMpXCIsXHJcbiAgICAgICAgdmFsdWU6IDgwLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbWluVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHBvd2VyYmkudmlzdWFscy5WYWxpZGF0b3JUeXBlLk1pbixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiA0MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXhWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogcG93ZXJiaS52aXN1YWxzLlZhbGlkYXRvclR5cGUuTWF4LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDgwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInhBeGlzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJYIGF4aXNcIjtcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuc2hvdyxcclxuICAgICAgICB0aGlzLnRpdGxlLFxyXG4gICAgICAgIHRoaXMubGFiZWxSb3RhdGlvbixcclxuICAgICAgICB0aGlzLmZvbnRTaXplLFxyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSxcclxuICAgICAgICB0aGlzLmZvbnRDb2xvcixcclxuICAgICAgICB0aGlzLmJvdHRvbU1hcmdpblxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiogdmlzdWFsIHNldHRpbmdzIG1vZGVsIGNsYXNzXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIGRhdGFQb2ludENhcmQgPSBuZXcgRGF0YVBvaW50Q2FyZFNldHRpbmdzKCk7XHJcbiAgICB4QXhpc0NhcmQgPSBuZXcgWEF4aXNDYXJkU2V0dGluZ3MoKTtcclxuICAgIGxheW91dENhcmQgPSBuZXcgTGF5b3V0Q2FyZFNldHRpbmdzKCk7IC8vIEFKT1VURVIgQ0VDSVxyXG5cclxuICAgIGNhcmRzID0gW3RoaXMuZGF0YVBvaW50Q2FyZCwgdGhpcy54QXhpc0NhcmQsIHRoaXMubGF5b3V0Q2FyZF07IC8vIEFKT1VURVIgQ0VDSVxyXG59XHJcbiIsIi8qXHJcbiogIFBvd2VyIEJJIFZpc3VhbCBDTElcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxyXG4qICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qICBNSVQgTGljZW5zZVxyXG4qXHJcbiogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcclxuKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4qICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4qICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4qXHJcbiogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiogIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qXHJcbiogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4qICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4qICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4qICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiogIFRIRSBTT0ZUV0FSRS5cclxuKiBcclxuKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcG93ZXJiaS12aXN1YWxzL25vLWh0dHAtc3RyaW5nXHJcbmNvbnN0IFNWR19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQ8SyBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwPih0YWdOYW1lOiBLKTogU1ZHRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTlMsIHRhZ05hbWUpIGFzIFNWR0VsZW1lbnRUYWdOYW1lTWFwW0tdO1xyXG59XHJcblxyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5pbXBvcnQgeyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuaW1wb3J0IFwiLi8uLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XHJcbmltcG9ydCBWaXN1YWxVcGRhdGVPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxVcGRhdGVPcHRpb25zO1xyXG5pbXBvcnQgSVZpc3VhbCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbDtcclxuaW1wb3J0IElTZWxlY3Rpb25NYW5hZ2VyID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LklTZWxlY3Rpb25NYW5hZ2VyO1xyXG5pbXBvcnQgSVNlbGVjdGlvbklkID0gcG93ZXJiaS52aXN1YWxzLklTZWxlY3Rpb25JZDtcclxuaW1wb3J0IElWaXN1YWxFdmVudFNlcnZpY2UgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVZpc3VhbEV2ZW50U2VydmljZTtcclxuaW1wb3J0IHsgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuaW50ZXJmYWNlIERhdGFQb2ludE9wdGlvbnMge1xyXG4gICAgZmlsbENvbG9yOiBzdHJpbmc7XHJcbiAgICBjb2xvck5vbjogc3RyaW5nO1xyXG4gICAgYmFyUmFkaXVzOiBudW1iZXI7XHJcbiAgICBmb250U2l6ZTogbnVtYmVyO1xyXG4gICAgYmFyVmFsdWVGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgYmFyVmFsdWVGb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICBiYXJWYWx1ZUZvbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgdmFsdWVEaXNwbGF5TW9kZTogbnVtYmVyO1xyXG4gICAgZGVjaW1hbFBsYWNlczogbnVtYmVyO1xyXG4gICAgYmFyV2lkdGg6IG51bWJlcjtcclxuICAgIGJhclNwYWNpbmc6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFhBeGlzT3B0aW9ucyB7XHJcbiAgICBzaG93WEF4aXM6IGJvb2xlYW47XHJcbiAgICB4QXhpc1RpdGxlOiBzdHJpbmc7XHJcbiAgICBsYWJlbFJvdGF0aW9uOiBudW1iZXI7XHJcbiAgICB4QXhpc0ZvbnRTaXplOiBudW1iZXI7XHJcbiAgICB4QXhpc0ZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIHhBeGlzRm9udENvbG9yOiBzdHJpbmc7XHJcbiAgICBib3R0b21NYXJnaW46IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIExheW91dE9wdGlvbnMge1xyXG4gICAgc2hvd0JhY2tncm91bmQ6IGJvb2xlYW47XHJcbiAgICB0aXRsZVRleHQ6IHN0cmluZztcclxuICAgIHRpdGxlRm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgdGl0bGVGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgdGl0bGVGb250Qm9sZDogYm9vbGVhbjtcclxuICAgIHRpdGxlRm9udENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBCYXJSZW5kZXJDb250ZXh0IHtcclxuICAgIGNhdDogc3RyaW5nO1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIHJhd1ZhbHVlOiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICBiYXJXaWR0aDogbnVtYmVyO1xyXG4gICAgYmFyU3BhY2luZzogbnVtYmVyO1xyXG4gICAgYmFzZVk6IG51bWJlcjtcclxuICAgIG1heEJhckhlaWdodDogbnVtYmVyO1xyXG4gICAgYmFyUmFkaXVzOiBudW1iZXI7XHJcbiAgICBmb250U2l6ZTogbnVtYmVyO1xyXG4gICAgZmlsbENvbG9yOiBzdHJpbmc7XHJcbiAgICBjb2xvck5vbjogc3RyaW5nO1xyXG4gICAgYmFyVmFsdWVGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgYmFyVmFsdWVGb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICBiYXJWYWx1ZUZvbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgbmFycm93TW9kZTogYm9vbGVhbjtcclxuICAgIHNob3dYQXhpczogYm9vbGVhbjtcclxuICAgIHhBeGlzRm9udFNpemU6IG51bWJlcjtcclxuICAgIHhBeGlzRm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgeEF4aXNGb250Q29sb3I6IHN0cmluZztcclxuICAgIGxhYmVsUm90YXRpb246IG51bWJlcjtcclxuICAgIG5lZWRzUm90YXRpb246IGJvb2xlYW47XHJcbiAgICBhdmFpbGFibGVTcGFjZUZvckxhYmVsOiBudW1iZXI7XHJcbiAgICBmb3JtYXRCYXJWYWx1ZTogKHJhdzogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICBkZWZzOiBTVkdEZWZzRWxlbWVudDtcclxuICAgIHNlbGVjdGlvbklkOiBJU2VsZWN0aW9uSWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWwgaW1wbGVtZW50cyBJVmlzdWFsIHtcclxuICAgIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzOiBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbDtcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuICAgIHByaXZhdGUgc3ZnOiBTVkdTVkdFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25NYW5hZ2VyOiBJU2VsZWN0aW9uTWFuYWdlcjtcclxuICAgIHByaXZhdGUgaG9zdDogcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsSG9zdDtcclxuICAgIHByaXZhdGUgbGljZW5zZU1hbmFnZXI6IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JVmlzdWFsTGljZW5zZU1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyVmFsaWRQbGFuczogcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5TZXJ2aWNlUGxhbltdIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBoYXNTZXJ2aWNlUGxhbnM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGlzTGljZW5zZVVuc3VwcG9ydGVkRW52OiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBpc05vdGlmaWNhdGlvbkRpc3BsYXllZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkYXRhUG9pbnRzOiBBcnJheTx7IGNhdGVnb3J5OiBzdHJpbmc7IHZhbHVlOiBudW1iZXI7IHNlbGVjdGlvbklkOiBJU2VsZWN0aW9uSWQgfT47XHJcbiAgICBwcml2YXRlIGV2ZW50czogSVZpc3VhbEV2ZW50U2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgPSBuZXcgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy5lbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IG9wdGlvbnMuaG9zdDtcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyID0gdGhpcy5ob3N0LmxpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlciA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBvcHRpb25zLmhvc3QuZXZlbnRTZXJ2aWNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXQgbGljZW5zZSBjaGVja1xyXG4gICAgICAgIC8vdGhpcy5jaGVja0xpY2Vuc2UoKTtcclxuXHJcbiAgICAgICAgLy8gQ29udGFpbmVyIHNjcm9sbGFibGUgcG91ciBsZSBTVkdcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjsgLy8gcGVybWV0IHNjcm9sbCBob3Jpem9udGFsIGV0IHZlcnRpY2FsXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnN2ZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJzdmdcIik7XHJcbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjEwMCVcIik7XHJcbiAgICAgICAgdGhpcy5zdmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy8gw6l2aXRlIGdhcHMgZGFucyBjZXJ0YWlucyBuYXZpZ2F0ZXVyc1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3ZnKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhUG9pbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0xpY2Vuc2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpY2Vuc2VNYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLmdldEF2YWlsYWJsZVNlcnZpY2VQbGFucygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuTGljZW5zZUluZm9SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSByZXN1bHQuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNMaWNlbnNlSW5mb0F2YWlsYWJsZSAmJiAhdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJWYWxpZFBsYW5zID0gcmVzdWx0LnBsYW5zPy5maWx0ZXIoKHBsYW46IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuU2VydmljZVBsYW4pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGxhbi5zdGF0ZSA9PT0gcG93ZXJiaS5TZXJ2aWNlUGxhblN0YXRlLkFjdGl2ZSB8fCBwbGFuLnN0YXRlID09PSBwb3dlcmJpLlNlcnZpY2VQbGFuU3RhdGUuV2FybmluZylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2VydmljZVBsYW5zID0gISF0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucz8ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIG5vIHZhbGlkIHBsYW5zIGZvdW5kLCBub3RpZnkgdXNlclxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1NlcnZpY2VQbGFucyAmJiAhdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudikge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUxpY2Vuc2VSZXF1aXJlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGxpY2Vuc2VzOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5vdGlmeUxpY2Vuc2VSZXF1aXJlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc05vdGlmaWNhdGlvbkRpc3BsYXllZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25UeXBlID0gdGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudiBcclxuICAgICAgICAgICAgPyBwb3dlcmJpLkxpY2Vuc2VOb3RpZmljYXRpb25UeXBlLlVuc3VwcG9ydGVkRW52IFxyXG4gICAgICAgICAgICA6IHBvd2VyYmkuTGljZW5zZU5vdGlmaWNhdGlvblR5cGUuVmlzdWFsSXNCbG9ja2VkO1xyXG5cclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLm5vdGlmeUxpY2Vuc2VSZXF1aXJlZChub3RpZmljYXRpb25UeXBlKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNOb3RpZmljYXRpb25EaXNwbGF5ZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBub3RpZnlpbmcgbGljZW5zZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShvcHRpb25zOiBWaXN1YWxVcGRhdGVPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMucmVuZGVyaW5nU3RhcnRlZChvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5wb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLCBvcHRpb25zLmRhdGFWaWV3cyAmJiBvcHRpb25zLmRhdGFWaWV3c1swXSk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIHN2Z1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnN2Zy5maXJzdENoaWxkKSB0aGlzLnN2Zy5yZW1vdmVDaGlsZCh0aGlzLnN2Zy5maXJzdENoaWxkKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLnZpZXdwb3J0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wdGlvbnMudmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBGaXhlciBsYSB6b25lIHZpc2libGUgKGNvbnRhaW5lcikgw6AgbGEgdGFpbGxlIGR1IHZpZXdwb3J0IFBvd2VyIEJJXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlcyBkb25uw6llc1xyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3MgJiYgb3B0aW9ucy5kYXRhVmlld3NbMF07XHJcbiAgICAgICAgaWYgKCFkYXRhVmlldyB8fCAhZGF0YVZpZXcuY2F0ZWdvcmljYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMucmVuZGVyaW5nRmluaXNoZWQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWVzID0gY2F0ZWdvcmllcy52YWx1ZXMgYXMgKHN0cmluZyB8IG51bWJlcilbXTtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhVmlldy5jYXRlZ29yaWNhbC52YWx1ZXNbMF0udmFsdWVzIGFzIG51bWJlcltdO1xyXG5cclxuICAgICAgICB0aGlzLnByZXBhcmVEYXRhUG9pbnRzKGNhdGVnb3JpZXMsIGNhdGVnb3J5VmFsdWVzLCB2YWx1ZXMpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZENhdGVnb3JpZXMgPSB0aGlzLmRhdGFQb2ludHMubWFwKGQgPT4gZC5jYXRlZ29yeSk7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkVmFsdWVzID0gdGhpcy5kYXRhUG9pbnRzLm1hcChkID0+IGQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbklkcyA9IHRoaXMuZGF0YVBvaW50cy5tYXAoZCA9PiBkLnNlbGVjdGlvbklkKTtcclxuXHJcbiAgICAgICAgLy8gUsOpY3Vww6lyYXRpb24gZGVzIG9wdGlvbnMgdmlhIGhlbHBlcnNcclxuICAgICAgICBjb25zdCBvYmplY3RzID0gZGF0YVZpZXcubWV0YWRhdGEgJiYgZGF0YVZpZXcubWV0YWRhdGEub2JqZWN0cztcclxuICAgICAgICBjb25zdCBkcE9wdHMgPSB0aGlzLmdldERhdGFQb2ludE9wdGlvbnMob2JqZWN0cywgd2lkdGgsIHNvcnRlZENhdGVnb3JpZXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCB7IGZpbGxDb2xvciwgY29sb3JOb24sIGJhclJhZGl1cywgZm9udFNpemUsIGJhclZhbHVlRm9udFNpemUsIGJhclZhbHVlRm9udEZhbWlseSwgYmFyVmFsdWVGb250Q29sb3IsIHZhbHVlRGlzcGxheU1vZGUsIGRlY2ltYWxQbGFjZXMsIGJhcldpZHRoLCBiYXJTcGFjaW5nIH0gPSBkcE9wdHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHhPcHRzID0gdGhpcy5nZXRYQXhpc09wdGlvbnMob2JqZWN0cyk7XHJcbiAgICAgICAgY29uc3QgeyBzaG93WEF4aXMsIHhBeGlzVGl0bGUsIGxhYmVsUm90YXRpb24sIHhBeGlzRm9udFNpemUsIHhBeGlzRm9udEZhbWlseSwgeEF4aXNGb250Q29sb3IsIGJvdHRvbU1hcmdpbiB9ID0geE9wdHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheW91dE9wdHMgPSB0aGlzLmdldExheW91dE9wdGlvbnMob2JqZWN0cyk7XHJcbiAgICAgICAgY29uc3QgeyBzaG93QmFja2dyb3VuZCwgdGl0bGVUZXh0LCB0aXRsZUZvbnRGYW1pbHksIHRpdGxlRm9udFNpemUsIHRpdGxlRm9udEJvbGQsIHRpdGxlRm9udENvbG9yIH0gPSBsYXlvdXRPcHRzO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXRCYXJWYWx1ZSA9IChyYXc6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWVEaXNwbGF5TW9kZSA9PT0gMCkgcmV0dXJuIChyYXcgKiAxMDApLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykucmVwbGFjZSgnLicsICcsJykgKyBcIiVcIjtcclxuICAgICAgICAgICAgaWYgKHZhbHVlRGlzcGxheU1vZGUgPT09IDEpIHJldHVybiByYXcudG9GaXhlZChkZWNpbWFsUGxhY2VzKS5yZXBsYWNlKCcuJywgJywnKTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQocmF3KS50b1N0cmluZygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2VZID0gaGVpZ2h0IC0gYm90dG9tTWFyZ2luO1xyXG4gICAgICAgIGNvbnN0IG1heEJhckhlaWdodCA9IE1hdGguZmxvb3IoYmFzZVkgKiAwLjgpOyAvLyB1dGlsaXNlciA4MCUgZGUgbCdlc3BhY2UgZGlzcG9uaWJsZSBhdS1kZXNzdXMgZGUgbGEgbWFyZ2VcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsZXIgdGFpbGxlIFNWRyBuw6ljZXNzYWlyZSBldCBhZGFwdGVyIHBvdXIgYWN0aXZlciBzY3JvbGwgc2kgYmVzb2luXHJcbiAgICAgICAgY29uc3QgcGFkZGluZ0xlZnQgPSA0MDtcclxuICAgICAgICBjb25zdCBwYWRkaW5nUmlnaHQgPSA0MDtcclxuICAgICAgICBjb25zdCB0b3RhbE5lZWRlZFdpZHRoID0gcGFkZGluZ0xlZnQgKyBzb3J0ZWRDYXRlZ29yaWVzLmxlbmd0aCAqIChiYXJXaWR0aCArIGJhclNwYWNpbmcpIC0gYmFyU3BhY2luZyArIHBhZGRpbmdSaWdodDtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9IE1hdGgubWF4KHdpZHRoLCBNYXRoLmNlaWwodG90YWxOZWVkZWRXaWR0aCkpO1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgTWF0aC5jZWlsKG1heEJhckhlaWdodCArIGJvdHRvbU1hcmdpbiArIDYwKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHN2Z1dpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBzdmdIZWlnaHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIC8vIEFwcGxpcXVlciBvdSByZXRpcmVyIGwnYXJyacOocmUtcGxhbiBkeW5hbWlxdWVtZW50XHJcbiAgICAgICAgaWYgKHNob3dCYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLnN0eWxlLmJhY2tncm91bmQgPSBcIiNmN2ZiZmZcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gREVURUNUSU9OIE1PREUgXCJOQVJST1dcIiAocGV1dCBhanVzdGVyIHNldWlsKVxyXG4gICAgICAgIGNvbnN0IHNsb3RXaWR0aCA9IGJhcldpZHRoICsgYmFyU3BhY2luZztcclxuICAgICAgICBjb25zdCBuYXJyb3dNb2RlID0gc2xvdFdpZHRoIDwgNzAgfHwgd2lkdGggPCA0ODAgfHwgc3ZnV2lkdGggPiB3aWR0aDtcclxuXHJcbiAgICAgICAgLy8gRGVzc2luIGRlcyBiYXJyZXMgKGTDqWNsYXLDqSBpY2kgcG91ciDDqnRyZSBhY2Nlc3NpYmxlIGRhbnMgbGUgY2xpY2sgaGFuZGxlciBkdSBmb25kKVxyXG4gICAgICAgIGNvbnN0IGJhckdyb3VwczogU1ZHR0VsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBGb25kIGNsaXF1YWJsZSwgdGl0cmUgZXQgbMOpZ2VuZGVcclxuICAgICAgICB0aGlzLnJlbmRlckJhY2tncm91bmRSZWN0KHN2Z1dpZHRoLCBzdmdIZWlnaHQsIHNob3dCYWNrZ3JvdW5kLCBiYXJHcm91cHMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGl0bGUodGl0bGVUZXh0LCB0aXRsZUZvbnRTaXplLCB0aXRsZUZvbnRGYW1pbHksIHRpdGxlRm9udEJvbGQsIHRpdGxlRm9udENvbG9yKTtcclxuICAgICAgICBpZiAoIW5hcnJvd01vZGUpIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTGVnZW5kKGZpbGxDb2xvciwgY29sb3JOb24pKTtcclxuXHJcbiAgICAgICAgLy8gZGVmcyBwb3VyIGNsaXBQYXRocyAobm91dmVhdSDDoCBjaGFxdWUgdXBkYXRlKVxyXG4gICAgICAgIGNvbnN0IGRlZnMgPSBjcmVhdGVTdmdFbGVtZW50KFwiZGVmc1wiKTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcclxuXHJcbiAgICAgICAgLy8gRMOpdGVybWluZXIgc2kgbGVzIGxhYmVscyBuw6ljZXNzaXRlbnQgdW5lIHJvdGF0aW9uXHJcbiAgICAgICAgY29uc3QgbmVlZHNSb3RhdGlvbiA9IHRoaXMuY2hlY2tMYWJlbFJvdGF0aW9uKHNvcnRlZENhdGVnb3JpZXMsIGJhcldpZHRoLCBiYXJTcGFjaW5nLCB4QXhpc0ZvbnRTaXplLCB4QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVNwYWNlRm9yTGFiZWwgPSBib3R0b21NYXJnaW4gLSAyNTtcclxuXHJcbiAgICAgICAgc29ydGVkQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXQsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3R4OiBCYXJSZW5kZXJDb250ZXh0ID0ge1xyXG4gICAgICAgICAgICAgICAgY2F0LCBpbmRleDogaSwgcmF3VmFsdWU6IHNvcnRlZFZhbHVlc1tpXSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgeDogcGFkZGluZ0xlZnQgKyBpICogKGJhcldpZHRoICsgYmFyU3BhY2luZyksXHJcbiAgICAgICAgICAgICAgICBiYXJXaWR0aCwgYmFyU3BhY2luZywgYmFzZVksIG1heEJhckhlaWdodCwgYmFyUmFkaXVzLCBmb250U2l6ZSxcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvciwgY29sb3JOb24sIGJhclZhbHVlRm9udFNpemUsIGJhclZhbHVlRm9udEZhbWlseSwgYmFyVmFsdWVGb250Q29sb3IsXHJcbiAgICAgICAgICAgICAgICBuYXJyb3dNb2RlLCBzaG93WEF4aXMsIHhBeGlzRm9udFNpemUsIHhBeGlzRm9udEZhbWlseSwgeEF4aXNGb250Q29sb3IsXHJcbiAgICAgICAgICAgICAgICBsYWJlbFJvdGF0aW9uLCBuZWVkc1JvdGF0aW9uLCBhdmFpbGFibGVTcGFjZUZvckxhYmVsLCBmb3JtYXRCYXJWYWx1ZSwgZGVmcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbklkOiBzZWxlY3Rpb25JZHNbaV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYmFyR3JvdXAgPSB0aGlzLnJlbmRlckJhcihjdHgsIGJhckdyb3Vwcywgc2VsZWN0aW9uSWRzKTtcclxuICAgICAgICAgICAgYmFyR3JvdXBzLnB1c2goYmFyR3JvdXApO1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChiYXJHcm91cCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRlc3NpbmVyIGxlIHRpdHJlIGRlIGwnYXhlIFggc2kgZGVtYW5kw6lcclxuICAgICAgICBpZiAoc2hvd1hBeGlzICYmIHhBeGlzVGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJYQXhpc1RpdGxlKHhBeGlzVGl0bGUsIHBhZGRpbmdMZWZ0LCBzb3J0ZWRDYXRlZ29yaWVzLmxlbmd0aCwgYmFyV2lkdGgsIGJhclNwYWNpbmcsIGJhc2VZLCB4QXhpc0ZvbnRTaXplLCB4QXhpc0ZvbnRDb2xvciwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIChMZSBjbGljIGRlIGZvbmQgZXN0IG1haW50ZW5hbnQgZ8OpcsOpIHBhciBsZSByZWN0YW5nbGUgYmdSZWN0KVxyXG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbmRlcmluZ0ZpbmlzaGVkKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGF0YVBvaW50T3B0aW9ucyhvYmplY3RzOiBwb3dlcmJpLkRhdGFWaWV3T2JqZWN0cyB8IHVuZGVmaW5lZCwgd2lkdGg6IG51bWJlciwgY2F0ZWdvcnlDb3VudDogbnVtYmVyKTogRGF0YVBvaW50T3B0aW9ucyB7XHJcbiAgICAgICAgbGV0IGZpbGxDb2xvciA9IFwiIzJGNkZFN1wiO1xyXG4gICAgICAgIGlmIChvYmplY3RzICYmIG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gJiYgKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImZpbGxcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JPYmogPSAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiZmlsbFwiXTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yT2JqLnNvbGlkICYmIGNvbG9yT2JqLnNvbGlkLmNvbG9yKSBmaWxsQ29sb3IgPSBjb2xvck9iai5zb2xpZC5jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sb3JOb24gPSBsaWdodGVuQ29sb3IoZmlsbENvbG9yLCAwLjYsIDAuNSk7XHJcbiAgICAgICAgY29uc3QgYmFyUmFkaXVzID0gb2JqZWN0cyAmJiBvYmplY3RzW1wiZGF0YVBvaW50XCJdICYmIHR5cGVvZiAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiYmFyUmFkaXVzXCJdID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgID8gKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImJhclJhZGl1c1wiXSA6IDMwO1xyXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gb2JqZWN0cyAmJiBvYmplY3RzW1wiZGF0YVBvaW50XCJdICYmIHR5cGVvZiAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiZm9udFNpemVcIl0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgPyAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiZm9udFNpemVcIl0gOiAxODtcclxuICAgICAgICBjb25zdCBkcE9iajogYW55ID0gKG9iamVjdHMgJiYgb2JqZWN0c1tcImRhdGFQb2ludFwiXSkgfHwge307XHJcbiAgICAgICAgY29uc3QgdmFsdWVEaXNwbGF5TW9kZTogbnVtYmVyID0gdHlwZW9mIGRwT2JqW1widmFsdWVEaXNwbGF5TW9kZVwiXSA9PT0gXCJudW1iZXJcIiA/IGRwT2JqW1widmFsdWVEaXNwbGF5TW9kZVwiXSA6IDA7XHJcbiAgICAgICAgY29uc3QgZGVjaW1hbFBsYWNlczogbnVtYmVyID0gdHlwZW9mIGRwT2JqW1wiZGVjaW1hbFBsYWNlc1wiXSA9PT0gXCJudW1iZXJcIiA/IE1hdGgubWF4KDAsIGRwT2JqW1wiZGVjaW1hbFBsYWNlc1wiXSkgOiAyO1xyXG4gICAgICAgIGNvbnN0IGJhclZhbHVlRm9udFNpemU6IG51bWJlciA9IHR5cGVvZiBkcE9ialtcImZvbnRTaXplXCJdID09PSBcIm51bWJlclwiID8gZHBPYmpbXCJmb250U2l6ZVwiXSA6IDE4O1xyXG4gICAgICAgIGNvbnN0IGJhclZhbHVlRm9udEZhbWlseTogc3RyaW5nID0gdHlwZW9mIGRwT2JqW1wiZm9udEZhbWlseVwiXSA9PT0gXCJzdHJpbmdcIiA/IGRwT2JqW1wiZm9udEZhbWlseVwiXSA6IFwiU2Vnb2UgVUlcIjtcclxuICAgICAgICBjb25zdCBiYXJWYWx1ZUZvbnRDb2xvcjogc3RyaW5nID0gcmVhZENvbG9yKGRwT2JqW1wiZm9udENvbG9yXCJdKSB8fCBcIiNmZmZmZmZcIjtcclxuICAgICAgICBsZXQgYmFyV2lkdGggPSBNYXRoLm1pbig2MCwgTWF0aC5tYXgoMTAsIE1hdGguZmxvb3Iod2lkdGggLyBNYXRoLm1heCgxLCBjYXRlZ29yeUNvdW50KSAqIDAuNikpKTtcclxuICAgICAgICBpZiAob2JqZWN0cyAmJiBvYmplY3RzW1wiZGF0YVBvaW50XCJdICYmIHR5cGVvZiAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiYmFyV2lkdGhcIl0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgYmFyV2lkdGggPSAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiYmFyV2lkdGhcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYXJTcGFjaW5nID0gTWF0aC5yb3VuZChiYXJXaWR0aCAqIDAuNik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZnMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncyBhcyBhbnk7XHJcbiAgICAgICAgICAgIGlmIChmcyAmJiBmcy5kYXRhUG9pbnRDYXJkICYmIGZzLmRhdGFQb2ludENhcmQuYmFyU3BhY2luZyAmJiB0eXBlb2YgZnMuZGF0YVBvaW50Q2FyZC5iYXJTcGFjaW5nLnZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXJTcGFjaW5nID0gTWF0aC5yb3VuZChmcy5kYXRhUG9pbnRDYXJkLmJhclNwYWNpbmcudmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tcImRhdGFQb2ludFwiXSAmJiB0eXBlb2YgKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImJhclNwYWNpbmdcIl0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGJhclNwYWNpbmcgPSAob2JqZWN0c1tcImRhdGFQb2ludFwiXSBhcyBhbnkpW1wiYmFyU3BhY2luZ1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggeyAvKiBmYWxsYmFjayAqLyB9XHJcbiAgICAgICAgcmV0dXJuIHsgZmlsbENvbG9yLCBjb2xvck5vbiwgYmFyUmFkaXVzLCBmb250U2l6ZSwgYmFyVmFsdWVGb250U2l6ZSwgYmFyVmFsdWVGb250RmFtaWx5LCBiYXJWYWx1ZUZvbnRDb2xvciwgdmFsdWVEaXNwbGF5TW9kZSwgZGVjaW1hbFBsYWNlcywgYmFyV2lkdGgsIGJhclNwYWNpbmcgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFhBeGlzT3B0aW9ucyhvYmplY3RzOiBwb3dlcmJpLkRhdGFWaWV3T2JqZWN0cyB8IHVuZGVmaW5lZCk6IFhBeGlzT3B0aW9ucyB7XHJcbiAgICAgICAgY29uc3QgeEF4aXNPYmo6IGFueSA9IChvYmplY3RzICYmIG9iamVjdHNbXCJ4QXhpc1wiXSkgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2hvd1hBeGlzOiB0eXBlb2YgeEF4aXNPYmpbXCJzaG93XCJdID09PSBcImJvb2xlYW5cIiA/IHhBeGlzT2JqW1wic2hvd1wiXSA6IHRydWUsXHJcbiAgICAgICAgICAgIHhBeGlzVGl0bGU6IHR5cGVvZiB4QXhpc09ialtcInRpdGxlXCJdID09PSBcInN0cmluZ1wiID8geEF4aXNPYmpbXCJ0aXRsZVwiXSA6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhYmVsUm90YXRpb246IHR5cGVvZiB4QXhpc09ialtcImxhYmVsUm90YXRpb25cIl0gPT09IFwibnVtYmVyXCIgPyB4QXhpc09ialtcImxhYmVsUm90YXRpb25cIl0gOiAwLFxyXG4gICAgICAgICAgICB4QXhpc0ZvbnRTaXplOiB0eXBlb2YgeEF4aXNPYmpbXCJmb250U2l6ZVwiXSA9PT0gXCJudW1iZXJcIiA/IHhBeGlzT2JqW1wiZm9udFNpemVcIl0gOiAxNCxcclxuICAgICAgICAgICAgeEF4aXNGb250RmFtaWx5OiB0eXBlb2YgeEF4aXNPYmpbXCJmb250RmFtaWx5XCJdID09PSBcInN0cmluZ1wiID8geEF4aXNPYmpbXCJmb250RmFtaWx5XCJdIDogXCJTZWdvZSBVSVwiLFxyXG4gICAgICAgICAgICB4QXhpc0ZvbnRDb2xvcjogcmVhZENvbG9yKHhBeGlzT2JqW1wiZm9udENvbG9yXCJdKSB8fCBcIiM4ODhcIixcclxuICAgICAgICAgICAgYm90dG9tTWFyZ2luOiB0eXBlb2YgeEF4aXNPYmpbXCJib3R0b21NYXJnaW5cIl0gPT09IFwibnVtYmVyXCIgPyBNYXRoLm1heCg0MCwgeEF4aXNPYmpbXCJib3R0b21NYXJnaW5cIl0pIDogODBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TGF5b3V0T3B0aW9ucyhvYmplY3RzOiBwb3dlcmJpLkRhdGFWaWV3T2JqZWN0cyB8IHVuZGVmaW5lZCk6IExheW91dE9wdGlvbnMge1xyXG4gICAgICAgIGxldCBzaG93QmFja2dyb3VuZCA9IHRydWUsIHRpdGxlVGV4dCA9IFwiRFNQXCIsIHRpdGxlRm9udEZhbWlseSA9IFwiU2Vnb2UgVUlcIjtcclxuICAgICAgICBsZXQgdGl0bGVGb250U2l6ZSA9IDIwLCB0aXRsZUZvbnRCb2xkID0gdHJ1ZSwgdGl0bGVGb250Q29sb3IgPSBcIiMyMjJcIjtcclxuICAgICAgICBpZiAodGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MgJiYgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MubGF5b3V0Q2FyZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYyA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxheW91dENhcmQ7XHJcbiAgICAgICAgICAgIGlmIChsYy5zaG93QmFja2dyb3VuZCkgc2hvd0JhY2tncm91bmQgPSBsYy5zaG93QmFja2dyb3VuZC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKGxjLnRpdGxlVGV4dCAmJiB0eXBlb2YgbGMudGl0bGVUZXh0LnZhbHVlID09PSBcInN0cmluZ1wiKSB0aXRsZVRleHQgPSBsYy50aXRsZVRleHQudmFsdWUgfHwgXCJEU1BcIjtcclxuICAgICAgICAgICAgaWYgKGxjLnRpdGxlRm9udEZhbWlseSAmJiB0eXBlb2YgbGMudGl0bGVGb250RmFtaWx5LnZhbHVlID09PSBcInN0cmluZ1wiKSB0aXRsZUZvbnRGYW1pbHkgPSBsYy50aXRsZUZvbnRGYW1pbHkudmFsdWUgfHwgXCJTZWdvZSBVSVwiO1xyXG4gICAgICAgICAgICBpZiAobGMudGl0bGVGb250U2l6ZSAmJiB0eXBlb2YgbGMudGl0bGVGb250U2l6ZS52YWx1ZSA9PT0gXCJudW1iZXJcIikgdGl0bGVGb250U2l6ZSA9IGxjLnRpdGxlRm9udFNpemUudmFsdWUgfHwgMjA7XHJcbiAgICAgICAgICAgIGlmIChsYy50aXRsZUZvbnRCb2xkICYmIHR5cGVvZiBsYy50aXRsZUZvbnRCb2xkLnZhbHVlID09PSBcImJvb2xlYW5cIikgdGl0bGVGb250Qm9sZCA9IGxjLnRpdGxlRm9udEJvbGQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChsYy50aXRsZUZvbnRDb2xvcikgdGl0bGVGb250Q29sb3IgPSByZWFkQ29sb3IobGMudGl0bGVGb250Q29sb3IudmFsdWUpIHx8IFwiIzIyMlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqZWN0cyAmJiBvYmplY3RzW1wibGF5b3V0XCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvID0gb2JqZWN0c1tcImxheW91dFwiXSBhcyBhbnk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9bXCJzaG93QmFja2dyb3VuZFwiXSA9PT0gXCJib29sZWFuXCIpIHNob3dCYWNrZ3JvdW5kID0gbG9bXCJzaG93QmFja2dyb3VuZFwiXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb1tcInRpdGxlVGV4dFwiXSA9PT0gXCJzdHJpbmdcIikgdGl0bGVUZXh0ID0gbG9bXCJ0aXRsZVRleHRcIl0gfHwgXCJEU1BcIjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb1tcInRpdGxlRm9udEZhbWlseVwiXSA9PT0gXCJzdHJpbmdcIikgdGl0bGVGb250RmFtaWx5ID0gbG9bXCJ0aXRsZUZvbnRGYW1pbHlcIl0gfHwgXCJTZWdvZSBVSVwiO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvW1widGl0bGVGb250U2l6ZVwiXSA9PT0gXCJudW1iZXJcIikgdGl0bGVGb250U2l6ZSA9IGxvW1widGl0bGVGb250U2l6ZVwiXSB8fCAyMDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb1tcInRpdGxlRm9udEJvbGRcIl0gPT09IFwiYm9vbGVhblwiKSB0aXRsZUZvbnRCb2xkID0gbG9bXCJ0aXRsZUZvbnRCb2xkXCJdO1xyXG4gICAgICAgICAgICBpZiAobG9bXCJ0aXRsZUZvbnRDb2xvclwiXSkgdGl0bGVGb250Q29sb3IgPSByZWFkQ29sb3IobG9bXCJ0aXRsZUZvbnRDb2xvclwiXSkgfHwgXCIjMjIyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHNob3dCYWNrZ3JvdW5kLCB0aXRsZVRleHQsIHRpdGxlRm9udEZhbWlseSwgdGl0bGVGb250U2l6ZSwgdGl0bGVGb250Qm9sZCwgdGl0bGVGb250Q29sb3IgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXBhcmVEYXRhUG9pbnRzKGNhdGVnb3JpZXM6IHBvd2VyYmkuRGF0YVZpZXdDYXRlZ29yeUNvbHVtbiwgY2F0ZWdvcnlWYWx1ZXM6IChzdHJpbmcgfCBudW1iZXIpW10sIHZhbHVlczogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFQb2ludHMgPSBjYXRlZ29yeVZhbHVlcy5tYXAoKGNhdCwgaSkgPT4gKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25JZDogdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCBpKS5jcmVhdGVTZWxlY3Rpb25JZCgpXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGNvbnN0IGFyZVllYXJzID0gdGhpcy5kYXRhUG9pbnRzLmV2ZXJ5KGRwID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoZHAuY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICByZXR1cm4gIWlzTmFOKG51bSkgJiYgbnVtID49IDE5MDAgJiYgbnVtIDw9IDIxMDAgJiYgZHAuY2F0ZWdvcnkubGVuZ3RoID09PSA0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChhcmVZZWFycykgdGhpcy5kYXRhUG9pbnRzLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEuY2F0ZWdvcnkpIC0gcGFyc2VJbnQoYi5jYXRlZ29yeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tMYWJlbFJvdGF0aW9uKGNhdGVnb3JpZXM6IHN0cmluZ1tdLCBiYXJXaWR0aDogbnVtYmVyLCBiYXJTcGFjaW5nOiBudW1iZXIsIHhBeGlzRm9udFNpemU6IG51bWJlciwgeEF4aXNGb250RmFtaWx5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBUZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChcInRleHRcIik7XHJcbiAgICAgICAgICAgIHRlbXBUZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB4QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0ZW1wVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB4QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgICAgICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IGNhdDtcclxuICAgICAgICAgICAgdGVtcFRleHQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRlbXBUZXh0KTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gdGVtcFRleHQuZ2V0QkJveCgpLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5yZW1vdmVDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0V2lkdGggPiBiYXJXaWR0aCArIGJhclNwYWNpbmcgLSA0KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQmFja2dyb3VuZFJlY3Qoc3ZnV2lkdGg6IG51bWJlciwgc3ZnSGVpZ2h0OiBudW1iZXIsIHNob3dCYWNrZ3JvdW5kOiBib29sZWFuLCBiYXJHcm91cHM6IFNWR0dFbGVtZW50W10pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBiZ1JlY3QgPSBjcmVhdGVTdmdFbGVtZW50KFwicmVjdFwiKTtcclxuICAgICAgICBiZ1JlY3Quc2V0QXR0cmlidXRlKFwieFwiLCBcIjBcIik7XHJcbiAgICAgICAgYmdSZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgXCIwXCIpO1xyXG4gICAgICAgIGJnUmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBzdmdXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICBiZ1JlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHN2Z0hlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICBiZ1JlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBzaG93QmFja2dyb3VuZCA/IFwiI2Y3ZmJmZlwiIDogXCJ0cmFuc3BhcmVudFwiKTtcclxuICAgICAgICBiZ1JlY3Quc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgYmdSZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5jbGVhcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oW10sIGJhckdyb3Vwcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlja0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIHZpZXc6IHdpbmRvdyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnLmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnN2Zy5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLmluc2VydEJlZm9yZShiZ1JlY3QsIHRoaXMuc3ZnLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGJnUmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGl0bGUodGl0bGVUZXh0OiBzdHJpbmcsIHRpdGxlRm9udFNpemU6IG51bWJlciwgdGl0bGVGb250RmFtaWx5OiBzdHJpbmcsIHRpdGxlRm9udEJvbGQ6IGJvb2xlYW4sIHRpdGxlRm9udENvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInhcIiwgXCIxMFwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMjBcIik7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIHRpdGxlRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgdGl0bGVGb250RmFtaWx5KTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJmb250LXdlaWdodFwiLCB0aXRsZUZvbnRCb2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHRpdGxlRm9udENvbG9yKTtcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJYQXhpc1RpdGxlKHhBeGlzVGl0bGU6IHN0cmluZywgcGFkZGluZ0xlZnQ6IG51bWJlciwgY2F0ZWdvcnlDb3VudDogbnVtYmVyLCBiYXJXaWR0aDogbnVtYmVyLCBiYXJTcGFjaW5nOiBudW1iZXIsIGJhc2VZOiBudW1iZXIsIHhBeGlzRm9udFNpemU6IG51bWJlciwgeEF4aXNGb250Q29sb3I6IHN0cmluZywgeEF4aXNGb250RmFtaWx5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBheGlzVGl0bGUgPSBjcmVhdGVTdmdFbGVtZW50KFwidGV4dFwiKTtcclxuICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwieFwiLCAocGFkZGluZ0xlZnQgKyAoY2F0ZWdvcnlDb3VudCAqIChiYXJXaWR0aCArIGJhclNwYWNpbmcpIC0gYmFyU3BhY2luZykgLyAyKS50b1N0cmluZygpKTtcclxuICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwieVwiLCAoYmFzZVkgKyA0OCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYXhpc1RpdGxlLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgIGF4aXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgeEF4aXNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCB4QXhpc0ZvbnRDb2xvcik7XHJcbiAgICAgICAgYXhpc1RpdGxlLnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIHhBeGlzRm9udEZhbWlseSk7XHJcbiAgICAgICAgYXhpc1RpdGxlLnRleHRDb250ZW50ID0geEF4aXNUaXRsZTtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZChheGlzVGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyTGVnZW5kKGZpbGxDb2xvcjogc3RyaW5nLCBjb2xvck5vbjogc3RyaW5nKTogU1ZHR0VsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZEdyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChcImdcIik7XHJcbiAgICAgICAgbGV0IGxlZ2VuZFggPSAxMDtcclxuICAgICAgICBjb25zdCBsZWdlbmRZID0gMzA7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZ2VuZE5vbiA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJyZWN0XCIpO1xyXG4gICAgICAgIGxlZ2VuZE5vbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIGxlZ2VuZFgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGVnZW5kTm9uLnNldEF0dHJpYnV0ZShcInlcIiwgbGVnZW5kWS50b1N0cmluZygpKTtcclxuICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMFwiKTtcclxuICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTJcIik7XHJcbiAgICAgICAgbGVnZW5kTm9uLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcclxuICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvck5vbik7XHJcbiAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kTm9uKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVnZW5kTm9uVGV4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGxlZ2VuZE5vblRleHQuc2V0QXR0cmlidXRlKFwieFwiLCAobGVnZW5kWCArIDM1KS50b1N0cmluZygpKTtcclxuICAgICAgICBsZWdlbmROb25UZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgKGxlZ2VuZFkgKyAxMCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGVnZW5kTm9uVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCIxNFwiKTtcclxuICAgICAgICBsZWdlbmROb25UZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjMjIyXCIpO1xyXG4gICAgICAgIGxlZ2VuZE5vblRleHQudGV4dENvbnRlbnQgPSBcIk5vblwiO1xyXG4gICAgICAgIGxlZ2VuZEdyb3VwLmFwcGVuZENoaWxkKGxlZ2VuZE5vblRleHQpO1xyXG5cclxuICAgICAgICBsZWdlbmRYICs9IDgwO1xyXG5cclxuICAgICAgICBjb25zdCBsZWdlbmRPdWkgPSBjcmVhdGVTdmdFbGVtZW50KFwicmVjdFwiKTtcclxuICAgICAgICBsZWdlbmRPdWkuc2V0QXR0cmlidXRlKFwieFwiLCBsZWdlbmRYLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxlZ2VuZE91aS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIGxlZ2VuZFkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMzBcIik7XHJcbiAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjEyXCIpO1xyXG4gICAgICAgIGxlZ2VuZE91aS5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjZcIik7XHJcbiAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZmlsbENvbG9yKTtcclxuICAgICAgICBsZWdlbmRHcm91cC5hcHBlbmRDaGlsZChsZWdlbmRPdWkpO1xyXG5cclxuICAgICAgICBjb25zdCBsZWdlbmRPdWlUZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChcInRleHRcIik7XHJcbiAgICAgICAgbGVnZW5kT3VpVGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIChsZWdlbmRYICsgMzUpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxlZ2VuZE91aVRleHQuc2V0QXR0cmlidXRlKFwieVwiLCAobGVnZW5kWSArIDEwKS50b1N0cmluZygpKTtcclxuICAgICAgICBsZWdlbmRPdWlUZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjE0XCIpO1xyXG4gICAgICAgIGxlZ2VuZE91aVRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiMyMjJcIik7XHJcbiAgICAgICAgbGVnZW5kT3VpVGV4dC50ZXh0Q29udGVudCA9IFwiT3VpXCI7XHJcbiAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kT3VpVGV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBsZWdlbmRHcm91cDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckJhcihcclxuICAgICAgICBjdHg6IEJhclJlbmRlckNvbnRleHQsXHJcbiAgICAgICAgYmFyR3JvdXBzOiBTVkdHRWxlbWVudFtdLFxyXG4gICAgICAgIHNlbGVjdGlvbklkczogSVNlbGVjdGlvbklkW11cclxuICAgICk6IFNWR0dFbGVtZW50IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNhdCwgaW5kZXgsIHJhd1ZhbHVlLCB4LCBiYXJXaWR0aCwgYmFyU3BhY2luZywgYmFzZVksIG1heEJhckhlaWdodCwgYmFyUmFkaXVzLFxyXG4gICAgICAgICAgICBmb250U2l6ZSwgZmlsbENvbG9yLCBjb2xvck5vbiwgYmFyVmFsdWVGb250U2l6ZSwgYmFyVmFsdWVGb250RmFtaWx5LCBiYXJWYWx1ZUZvbnRDb2xvcixcclxuICAgICAgICAgICAgbmFycm93TW9kZSwgc2hvd1hBeGlzLCB4QXhpc0ZvbnRTaXplLCB4QXhpc0ZvbnRGYW1pbHksIHhBeGlzRm9udENvbG9yLFxyXG4gICAgICAgICAgICBsYWJlbFJvdGF0aW9uLCBuZWVkc1JvdGF0aW9uLCBhdmFpbGFibGVTcGFjZUZvckxhYmVsLCBmb3JtYXRCYXJWYWx1ZSwgZGVmc1xyXG4gICAgICAgIH0gPSBjdHg7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRWYWx1ZSA9IHJhd1ZhbHVlICogMTAwO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0QmFyVmFsdWUocmF3VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJhd0JhckhlaWdodCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHJhd1ZhbHVlKSkgKiBtYXhCYXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZUhlaWdodCA9IHJhd0JhckhlaWdodCA+IDAgPyByYXdCYXJIZWlnaHQgOiAwO1xyXG4gICAgICAgIGNvbnN0IGVmZmVjdGl2ZVJ4ID0gTWF0aC5taW4oYmFyUmFkaXVzLCBNYXRoLmZsb29yKGJhcldpZHRoIC8gMikpO1xyXG5cclxuICAgICAgICBjb25zdCBiYXJHcm91cCA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJnXCIpO1xyXG4gICAgICAgIGJhckdyb3VwLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGJhckdyb3VwLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGJhckdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShzZWxlY3Rpb25JZHNbaW5kZXhdLCB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhck5vbiA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJyZWN0XCIpO1xyXG4gICAgICAgIGJhck5vbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcInlcIiwgKGJhc2VZIC0gbWF4QmFySGVpZ2h0KS50b1N0cmluZygpKTtcclxuICAgICAgICBiYXJOb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYmFyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBtYXhCYXJIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcInJ4XCIsIGVmZmVjdGl2ZVJ4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGJhck5vbi5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGNvbG9yTm9uKTtcclxuICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZChiYXJOb24pO1xyXG5cclxuICAgICAgICBpZiAocGVyY2VudFZhbHVlIDwgMzUgJiYgdmlzaWJsZUhlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJMb3dWYWx1ZUJhcihiYXJHcm91cCwgZGVmcywgaW5kZXgsIHgsIGJhc2VZLCBiYXJXaWR0aCwgbWF4QmFySGVpZ2h0LCB2aXNpYmxlSGVpZ2h0LCBlZmZlY3RpdmVSeCwgZmlsbENvbG9yLCBmb3JtYXR0ZWRWYWx1ZSwgYmFyVmFsdWVGb250U2l6ZSwgYmFyVmFsdWVGb250RmFtaWx5LCBiYXJWYWx1ZUZvbnRDb2xvciwgbmFycm93TW9kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aXNpYmxlSGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckhpZ2hWYWx1ZUJhcihiYXJHcm91cCwgeCwgYmFzZVksIGJhcldpZHRoLCB2aXNpYmxlSGVpZ2h0LCBtYXhCYXJIZWlnaHQsIGVmZmVjdGl2ZVJ4LCBmaWxsQ29sb3IsIGZvcm1hdHRlZFZhbHVlLCBmb250U2l6ZSwgYmFyVmFsdWVGb250U2l6ZSwgYmFyVmFsdWVGb250RmFtaWx5LCBiYXJWYWx1ZUZvbnRDb2xvciwgbmFycm93TW9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gY3JlYXRlU3ZnRWxlbWVudChcInJlY3RcIik7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoXCJ4XCIsICh4ICsgMikudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChiYXNlWSAtIDIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgKGJhcldpZHRoIC0gNCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvck5vbik7XHJcbiAgICAgICAgICAgIGJhckdyb3VwLmFwcGVuZENoaWxkKG1hcmtlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2hvd1hBeGlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyWEF4aXNMYWJlbChiYXJHcm91cCwgY2F0LCB4LCBiYXJXaWR0aCwgYmFyU3BhY2luZywgYmFzZVksIHhBeGlzRm9udFNpemUsIHhBeGlzRm9udEZhbWlseSwgeEF4aXNGb250Q29sb3IsIGxhYmVsUm90YXRpb24sIG5lZWRzUm90YXRpb24sIGF2YWlsYWJsZVNwYWNlRm9yTGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmFyR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ3RybFByZXNzZWQgPSBtb3VzZUV2ZW50LmN0cmxLZXkgfHwgbW91c2VFdmVudC5tZXRhS2V5O1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2VsZWN0KHNlbGVjdGlvbklkc1tpbmRleF0sIGlzQ3RybFByZXNzZWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoaWRzOiBJU2VsZWN0aW9uSWRbXSkgPT4geyB0aGlzLnVwZGF0ZVNlbGVjdGlvbihpZHMsIGJhckdyb3Vwcyk7IH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFyR3JvdXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJMb3dWYWx1ZUJhcihcclxuICAgICAgICBiYXJHcm91cDogU1ZHR0VsZW1lbnQsIGRlZnM6IFNWR0RlZnNFbGVtZW50LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIsIGJhc2VZOiBudW1iZXIsXHJcbiAgICAgICAgYmFyV2lkdGg6IG51bWJlciwgbWF4QmFySGVpZ2h0OiBudW1iZXIsIHZpc2libGVIZWlnaHQ6IG51bWJlciwgZWZmZWN0aXZlUng6IG51bWJlcixcclxuICAgICAgICBmaWxsQ29sb3I6IHN0cmluZywgZm9ybWF0dGVkVmFsdWU6IHN0cmluZywgYmFyVmFsdWVGb250U2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIGJhclZhbHVlRm9udEZhbWlseTogc3RyaW5nLCBiYXJWYWx1ZUZvbnRDb2xvcjogc3RyaW5nLCBuYXJyb3dNb2RlOiBib29sZWFuXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbGlwSWQgPSBgY2xpcC1iYXItJHtpbmRleH0tJHtEYXRlLm5vdygpfWA7XHJcbiAgICAgICAgY29uc3QgY2xpcFBhdGggPSBjcmVhdGVTdmdFbGVtZW50KFwiY2xpcFBhdGhcIik7XHJcbiAgICAgICAgY2xpcFBhdGguc2V0QXR0cmlidXRlKFwiaWRcIiwgY2xpcElkKTtcclxuICAgICAgICBjb25zdCBjbGlwUmVjdCA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJyZWN0XCIpO1xyXG4gICAgICAgIGNsaXBSZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgeC50b1N0cmluZygpKTtcclxuICAgICAgICBjbGlwUmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChiYXNlWSAtIG1heEJhckhlaWdodCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY2xpcFJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYmFyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY2xpcFJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIG1heEJhckhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICBjbGlwUmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBlZmZlY3RpdmVSeC50b1N0cmluZygpKTtcclxuICAgICAgICBjbGlwUGF0aC5hcHBlbmRDaGlsZChjbGlwUmVjdCk7XHJcbiAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChjbGlwUGF0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbGxSZWN0ID0gY3JlYXRlU3ZnRWxlbWVudChcInJlY3RcIik7XHJcbiAgICAgICAgZmlsbFJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGZpbGxSZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgKGJhc2VZIC0gdmlzaWJsZUhlaWdodCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZmlsbFJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYmFyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZmlsbFJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHZpc2libGVIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZmlsbFJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBmaWxsQ29sb3IpO1xyXG4gICAgICAgIGZpbGxSZWN0LnNldEF0dHJpYnV0ZShcImNsaXAtcGF0aFwiLCBgdXJsKCMke2NsaXBJZH0pYCk7XHJcbiAgICAgICAgYmFyR3JvdXAuYXBwZW5kQ2hpbGQoZmlsbFJlY3QpO1xyXG5cclxuICAgICAgICBjb25zdCB0eHQgPSBjcmVhdGVTdmdFbGVtZW50KFwidGV4dFwiKTtcclxuICAgICAgICBjb25zdCB0eHRYID0geCArIGJhcldpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB0eHRZID0gYmFzZVkgLSBtYXhCYXJIZWlnaHQgLyAyO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHR4dFgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInlcIiwgdHh0WS50b1N0cmluZygpKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgYmFyVmFsdWVGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBiYXJWYWx1ZUZvbnRDb2xvcik7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIGJhclZhbHVlRm9udEZhbWlseSk7XHJcbiAgICAgICAgdHh0LnRleHRDb250ZW50ID0gZm9ybWF0dGVkVmFsdWU7XHJcbiAgICAgICAgaWYgKG5hcnJvd01vZGUpIHtcclxuICAgICAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgcm90YXRlKC05MCAke3R4dFh9ICR7dHh0WX0pYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhckdyb3VwLmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJIaWdoVmFsdWVCYXIoXHJcbiAgICAgICAgYmFyR3JvdXA6IFNWR0dFbGVtZW50LCB4OiBudW1iZXIsIGJhc2VZOiBudW1iZXIsIGJhcldpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgdmlzaWJsZUhlaWdodDogbnVtYmVyLCBtYXhCYXJIZWlnaHQ6IG51bWJlciwgZWZmZWN0aXZlUng6IG51bWJlciwgZmlsbENvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgZm9ybWF0dGVkVmFsdWU6IHN0cmluZywgZm9udFNpemU6IG51bWJlciwgYmFyVmFsdWVGb250U2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIGJhclZhbHVlRm9udEZhbWlseTogc3RyaW5nLCBiYXJWYWx1ZUZvbnRDb2xvcjogc3RyaW5nLCBuYXJyb3dNb2RlOiBib29sZWFuXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSB2aXNpYmxlSGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGJhck91aSA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJyZWN0XCIpO1xyXG4gICAgICAgIGJhck91aS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcInlcIiwgKGJhc2VZIC0gYmFySGVpZ2h0KS50b1N0cmluZygpKTtcclxuICAgICAgICBiYXJPdWkuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYmFyV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBiYXJIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY29uc3QgcnhGb3JPdWkgPSBNYXRoLm1pbihlZmZlY3RpdmVSeCwgTWF0aC5mbG9vcihiYXJIZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcInJ4XCIsIHJ4Rm9yT3VpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGJhck91aS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGZpbGxDb2xvcik7XHJcbiAgICAgICAgYmFyR3JvdXAuYXBwZW5kQ2hpbGQoYmFyT3VpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHh0ID0gY3JlYXRlU3ZnRWxlbWVudChcInRleHRcIik7XHJcbiAgICAgICAgY29uc3QgdHh0WCA9IHggKyBiYXJXaWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgdHh0WSA9IG5hcnJvd01vZGUgPyAoYmFzZVkgLSBtYXhCYXJIZWlnaHQgLyAyKSA6IChiYXNlWSAtIGJhckhlaWdodCAvIDIpO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHR4dFgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInlcIiwgdHh0WS50b1N0cmluZygpKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImRvbWluYW50LWJhc2VsaW5lXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgIGNvbnN0IGlubmVyRm9udFNpemUgPSBuYXJyb3dNb2RlID8gZm9udFNpemUgOiAoKGJhckhlaWdodCA8IGZvbnRTaXplKSA/IE1hdGgubWF4KDgsIE1hdGgucm91bmQoYmFySGVpZ2h0ICogMC42KSkgOiBmb250U2l6ZSk7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBpbm5lckZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGJhclZhbHVlRm9udENvbG9yKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgYmFyVmFsdWVGb250RmFtaWx5KTtcclxuICAgICAgICB0eHQudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICBpZiAobmFycm93TW9kZSkge1xyXG4gICAgICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoLTkwICR7dHh0WH0gJHt0eHRZfSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFyR3JvdXAuYXBwZW5kQ2hpbGQodHh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclhBeGlzTGFiZWwoXHJcbiAgICAgICAgYmFyR3JvdXA6IFNWR0dFbGVtZW50LCBjYXQ6IHN0cmluZywgeDogbnVtYmVyLCBiYXJXaWR0aDogbnVtYmVyLCBiYXJTcGFjaW5nOiBudW1iZXIsXHJcbiAgICAgICAgYmFzZVk6IG51bWJlciwgeEF4aXNGb250U2l6ZTogbnVtYmVyLCB4QXhpc0ZvbnRGYW1pbHk6IHN0cmluZywgeEF4aXNGb250Q29sb3I6IHN0cmluZyxcclxuICAgICAgICBsYWJlbFJvdGF0aW9uOiBudW1iZXIsIG5lZWRzUm90YXRpb246IGJvb2xlYW4sIGF2YWlsYWJsZVNwYWNlRm9yTGFiZWw6IG51bWJlclxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgeWVhclR4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHllYXJYID0geCArIGJhcldpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB5ZWFyWSA9IGJhc2VZICsgMjA7XHJcbiAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHllYXJYLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwieVwiLCB5ZWFyWS50b1N0cmluZygpKTtcclxuICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB4QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCB4QXhpc0ZvbnRDb2xvcik7XHJcbiAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB4QXhpc0ZvbnRGYW1pbHkpO1xyXG5cclxuICAgICAgICBsZXQgZGlzcGxheVRleHQgPSBjYXQ7XHJcbiAgICAgICAgY29uc3QgbWF4TGFiZWxXaWR0aCA9IGJhcldpZHRoICsgYmFyU3BhY2luZyAtIDQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXBUZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChcInRleHRcIik7XHJcbiAgICAgICAgdGVtcFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIHhBeGlzRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGVtcFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IGNhdDtcclxuICAgICAgICB0ZW1wVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gdGVtcFRleHQuZ2V0QkJveCgpLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc3ZnLnJlbW92ZUNoaWxkKHRlbXBUZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKG5lZWRzUm90YXRpb24gfHwgbGFiZWxSb3RhdGlvbiAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByb3RhdGlvbiA9IGxhYmVsUm90YXRpb24gIT09IDAgPyBsYWJlbFJvdGF0aW9uIDogNDU7XHJcbiAgICAgICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XHJcbiAgICAgICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoJHstcm90YXRpb259ICR7eWVhclh9ICR7eWVhcll9KWApO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhSb3RhdGVkTGVuZ3RoID0gTWF0aC5mbG9vcihhdmFpbGFibGVTcGFjZUZvckxhYmVsICogMS4yKTtcclxuICAgICAgICAgICAgaWYgKHRleHRXaWR0aCA+IG1heFJvdGF0ZWRMZW5ndGggJiYgY2F0Lmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyc1RvS2VlcCA9IE1hdGguZmxvb3IoY2F0Lmxlbmd0aCAqIChtYXhSb3RhdGVkTGVuZ3RoIC8gdGV4dFdpZHRoKSkgLSAzO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRleHQgPSBjYXQuc3Vic3RyaW5nKDAsIE1hdGgubWF4KDEsIGNoYXJzVG9LZWVwKSkgKyBcIi4uLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICAgICAgaWYgKHRleHRXaWR0aCA+IG1heExhYmVsV2lkdGggJiYgY2F0Lmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0cnVuY2F0ZUxlbmd0aCA9IE1hdGguZmxvb3IoY2F0Lmxlbmd0aCAqIChtYXhMYWJlbFdpZHRoIC8gdGV4dFdpZHRoKSkgLSAzO1xyXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGVMZW5ndGggPSBNYXRoLm1heCgxLCB0cnVuY2F0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dCA9IGNhdC5zdWJzdHJpbmcoMCwgdHJ1bmNhdGVMZW5ndGgpICsgXCIuLi5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeWVhclR4dC50ZXh0Q29udGVudCA9IGRpc3BsYXlUZXh0O1xyXG4gICAgICAgIGJhckdyb3VwLmFwcGVuZENoaWxkKHllYXJUeHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkSWRzOiBJU2VsZWN0aW9uSWRbXSwgYmFyR3JvdXBzOiBTVkdHRWxlbWVudFtdKSB7XHJcbiAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCdvcGFjaXTDqSBkZXMgYmFycmVzIHNlbG9uIGxhIHPDqWxlY3Rpb25cclxuICAgICAgICBiYXJHcm91cHMuZm9yRWFjaCgoZ3JvdXAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZElkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZElkcy5zb21lKHNlbGVjdGVkSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkS2V5ID0gKHNlbGVjdGVkSWQgYXMgYW55KS5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVBvaW50S2V5ID0gKHRoaXMuZGF0YVBvaW50c1tpbmRleF0/LnNlbGVjdGlvbklkIGFzIGFueSk/LmtleTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRLZXkgPT09IGRhdGFQb2ludEtleTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAuc3R5bGUub3BhY2l0eSA9IGlzU2VsZWN0ZWQgPyBcIjFcIiA6IFwiMC4zXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Rm9ybWF0dGluZ01vZGVsKCk6IHBvd2VyYmkudmlzdWFscy5Gb3JtYXR0aW5nTW9kZWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuYnVpbGRGb3JtYXR0aW5nTW9kZWwodGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBoZWxwZXIgdG8gZ2V0IGNvbG9yIHZhbHVlIChoYW5kbGVzIENvbG9yUGlja2VyIG9iamVjdClcclxuZnVuY3Rpb24gcmVhZENvbG9yKG9iajogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghb2JqKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cclxuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7IHJldHVybiBvYmo7IH1cclxuICAgIGlmIChvYmouc29saWQgJiYgb2JqLnNvbGlkLmNvbG9yKSB7IHJldHVybiBvYmouc29saWQuY29sb3I7IH1cclxuICAgIGlmIChvYmoudmFsdWUpIHsgcmV0dXJuIG9iai52YWx1ZTsgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gbGlnaHRlbkNvbG9yKGhleDogc3RyaW5nLCBwZXJjZW50OiBudW1iZXIsIGFscGhhOiBudW1iZXIgPSAwLjUpOiBzdHJpbmcge1xyXG4gICAgLy8gQ29udmVydCBoZXggdG8gUkdCXHJcbiAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcclxuICAgIGlmIChoZXgubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgICAgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpO1xyXG4gICAgICAgIGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KTtcclxuICAgICAgICBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XHJcbiAgICB9XHJcbiAgICAvLyBMaWdodGVuXHJcbiAgICByID0gTWF0aC5yb3VuZChyICsgKDI1NSAtIHIpICogcGVyY2VudCk7XHJcbiAgICBnID0gTWF0aC5yb3VuZChnICsgKDI1NSAtIGcpICogcGVyY2VudCk7XHJcbiAgICBiID0gTWF0aC5yb3VuZChiICsgKDI1NSAtIGIpICogcGVyY2VudCk7XHJcbiAgICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthbHBoYX0pYDtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gbnVsbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy92aXN1YWxcIjtcbmltcG9ydCBwb3dlcmJpVmlzdWFsc0FwaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xuaW1wb3J0IElWaXN1YWxQbHVnaW4gPSBwb3dlcmJpVmlzdWFsc0FwaS52aXN1YWxzLnBsdWdpbnMuSVZpc3VhbFBsdWdpbjtcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zO1xudmFyIHBvd2VyYmlLZXk6IGFueSA9IFwicG93ZXJiaVwiO1xudmFyIHBvd2VyYmk6IGFueSA9IHdpbmRvd1twb3dlcmJpS2V5XTtcbnZhciBoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUc6IElWaXN1YWxQbHVnaW4gPSB7XG4gICAgbmFtZTogJ2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRycsXG4gICAgZGlzcGxheU5hbWU6ICdoaXN0b2dyYW1tZXBlcnNvJyxcbiAgICBjbGFzczogJ1Zpc3VhbCcsXG4gICAgYXBpVmVyc2lvbjogJzUuMy4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUdcIl0gPSBoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUc7XG59XG5leHBvcnQgZGVmYXVsdCBoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==