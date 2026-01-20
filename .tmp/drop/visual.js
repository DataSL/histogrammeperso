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
    tooltipService;
    constructor(options) {
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.FormattingSettingsService();
        this.target = options.element;
        this.host = options.host;
        this.licenseManager = this.host.licenseManager;
        this.selectionManager = this.host.createSelectionManager();
        this.events = options.host.eventService;
        this.tooltipService = this.host.tooltipService;
        // Init license check
        // this.checkLicense();
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
        bgRect.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            this.selectionManager.showContextMenu({}, { x: event.clientX, y: event.clientY });
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
        // Tooltip events
        barGroup.addEventListener("mouseover", (event) => {
            const tooltipData = [
                {
                    displayName: cat,
                    value: formatBarValue(rawValue)
                }
            ];
            this.tooltipService.show({
                dataItems: tooltipData,
                identities: [selectionIds[index]],
                coordinates: [event.clientX, event.clientY],
                isTouchEvent: false
            });
        });
        barGroup.addEventListener("mousemove", (event) => {
            const tooltipData = [
                {
                    displayName: cat,
                    value: formatBarValue(rawValue)
                }
            ];
            this.tooltipService.move({
                dataItems: tooltipData,
                identities: [selectionIds[index]],
                coordinates: [event.clientX, event.clientY],
                isTouchEvent: false
            });
        });
        barGroup.addEventListener("mouseout", () => {
            this.tooltipService.hide({
                immediately: true,
                isTouchEvent: false
            });
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
    apiVersion: '5.10.0',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzdWFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDNEU7QUFDNUU7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDJCQUEyQjtBQUN4RTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5RUFBc0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEVBQXlDO0FBQzlEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0NBQStDLGdFQUFnRTtBQUM1SjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQyxvRkFBb0Y7QUFDaEw7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQ0FBK0MsdUJBQXVCO0FBQ25IO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0NBQStDLHFLQUFxSztBQUNqUTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQyxtQkFBbUI7QUFDL0c7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQ0FBK0MsZ0VBQWdFO0FBQzVKO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0NBQStDLDZCQUE2QjtBQUN6SDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQyw2QkFBNkI7QUFDekg7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQ0FBK0MsNEVBQTRFO0FBQ3hLO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0NBQStDLG1CQUFtQjtBQUMvRztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQywrQkFBK0I7QUFDM0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQ0FBK0MseURBQXlEO0FBQ3JKO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywyQkFBMkI7QUFDeEU7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDblQyRTtBQUNwRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0VBQWE7QUFDakQ7QUFDQSw0REFBNEQscUVBQVU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxxRUFBVTtBQUMzRDtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQsc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHdHQUF3RztBQUM3SjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsb0dBQW9HO0FBQ3JKO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QixrREFBa0Q7QUFDOUU7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsb0JBQW9CLEdBQUcsdUJBQXVCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0VBQWE7QUFDekM7QUFDQSxvREFBb0QscUVBQVU7QUFDOUQsNkJBQTZCLGdCQUFnQjtBQUM3QyxrQ0FBa0MsZ0JBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUVBQWUseUJBQXlCLEVBQUM7QUFDekMscUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0xxRTtBQUNEO0FBQ1g7QUFDekQsaUM7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFFVTtBQUU4RDtBQUNqQyxDQUFDLHVDQUF1QztBQUVsRixJQUFPLHNCQUFzQixHQUFHLGdHQUE2QixDQUFDO0FBRTlELElBQU8sdUJBQXVCLEdBQUcsMkZBQXdCLENBQUM7QUFFMUQ7O0dBRUc7QUFDSCxNQUFNLHFCQUFzQixTQUFRLHNCQUFzQjtJQUN0RCxJQUFJLEdBQUcsSUFBSSxpR0FBOEIsQ0FBQztRQUN0QyxJQUFJLEVBQUUsTUFBTTtRQUNaLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7S0FDdkIsQ0FBQyxDQUFDO0lBRUgsUUFBUSxHQUFHLElBQUksK0ZBQTRCLENBQUM7UUFDeEMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsS0FBSyxFQUFFLEVBQUU7S0FDWixDQUFDLENBQUM7SUFFSCxVQUFVLEdBQUcsSUFBSSwrRkFBNEIsQ0FBQztRQUMxQyxJQUFJLEVBQUUsWUFBWTtRQUNsQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxHQUFHLElBQUksaUdBQThCLENBQUM7UUFDM0MsSUFBSSxFQUFFLFdBQVc7UUFDakIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0tBQzlCLENBQUMsQ0FBQztJQUVILFNBQVMsR0FBRyxJQUFJLCtGQUE0QixDQUFDO1FBQ3pDLElBQUksRUFBRSxXQUFXO1FBQ2pCLFdBQVcsRUFBRSxZQUFZO1FBQ3pCLEtBQUssRUFBRSxFQUFFO0tBQ1osQ0FBQyxDQUFDO0lBRUgsUUFBUSxHQUFHLElBQUksK0ZBQTRCLENBQUM7UUFDeEMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsS0FBSyxFQUFFLEVBQUU7S0FDWixDQUFDLENBQUM7SUFFSCxVQUFVLEdBQUcsSUFBSSwrRkFBNEIsQ0FBQztRQUMxQyxJQUFJLEVBQUUsWUFBWTtRQUNsQixXQUFXLEVBQUUsYUFBYTtRQUMxQixLQUFLLEVBQUUsRUFBRTtLQUNaLENBQUMsQ0FBQztJQUVILGdCQUFnQixHQUFHLElBQUksK0ZBQTRCLENBQUM7UUFDaEQsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixXQUFXLEVBQUUsOENBQThDO1FBQzNELEtBQUssRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsYUFBYSxHQUFHLElBQUksK0ZBQTRCLENBQUM7UUFDN0MsSUFBSSxFQUFFLGVBQWU7UUFDckIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FBQztJQUVILElBQUksR0FBVyxXQUFXLENBQUM7SUFDM0IsV0FBVyxHQUFXLGFBQWEsQ0FBQztJQUNwQyxNQUFNLEdBQW1DO1FBQ3JDLElBQUksQ0FBQyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFFBQVE7UUFDYixJQUFJLENBQUMsVUFBVTtRQUNmLElBQUksQ0FBQyxTQUFTO1FBQ2QsSUFBSSxDQUFDLFNBQVM7UUFDZCxJQUFJLENBQUMsUUFBUTtRQUNiLElBQUksQ0FBQyxVQUFVO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsYUFBYTtLQUNyQixDQUFDO0NBQ0w7QUFFRDs7R0FFRztBQUNILE1BQU0sa0JBQW1CLFNBQVEsc0JBQXNCO0lBRW5ELGNBQWMsR0FBRyxJQUFJLGtHQUErQixDQUFDO1FBQ2pELElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztJQUdILFNBQVMsR0FBRyxJQUFJLCtGQUE0QixDQUFDO1FBQ3pDLElBQUksRUFBRSxXQUFXO1FBQ2pCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsS0FBSyxFQUFFLEtBQUs7UUFDWixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUMsQ0FBQztJQUVILGVBQWUsR0FBRyxJQUFJLCtGQUE0QixDQUFDO1FBQy9DLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixLQUFLLEVBQUUsVUFBVTtRQUNqQixXQUFXLEVBQUUsc0JBQXNCO0tBQ3RDLENBQUMsQ0FBQztJQUVILGFBQWEsR0FBRyxJQUFJLCtGQUE0QixDQUFDO1FBQzdDLElBQUksRUFBRSxlQUFlO1FBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsS0FBSyxFQUFFLEVBQUU7S0FDWixDQUFDLENBQUM7SUFFSCxhQUFhLEdBQUcsSUFBSSxrR0FBK0IsQ0FBQztRQUNoRCxJQUFJLEVBQUUsZUFBZTtRQUNyQixXQUFXLEVBQUUsZUFBZTtRQUM1QixLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztJQUVILGNBQWMsR0FBRyxJQUFJLGlHQUE4QixDQUFDO1FBQ2hELElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsV0FBVyxFQUFFLGtCQUFrQjtRQUMvQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0tBQzlCLENBQUMsQ0FBQztJQUVILElBQUksR0FBVyxRQUFRLENBQUM7SUFDeEIsV0FBVyxHQUFXLGNBQWMsQ0FBQztJQUNyQyxNQUFNLEdBQW1DO1FBQ3JDLElBQUksQ0FBQyxjQUFjO1FBQ25CLElBQUksQ0FBQyxTQUFTO1FBQ2QsSUFBSSxDQUFDLGVBQWU7UUFDcEIsSUFBSSxDQUFDLGFBQWE7UUFDbEIsSUFBSSxDQUFDLGFBQWE7UUFDbEIsSUFBSSxDQUFDLGNBQWM7S0FDdEIsQ0FBQztDQUNMO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLGlCQUFrQixTQUFRLHNCQUFzQjtJQUNsRCxJQUFJLEdBQUcsSUFBSSxrR0FBK0IsQ0FBQztRQUN2QyxJQUFJLEVBQUUsTUFBTTtRQUNaLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsS0FBSyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUM7SUFFSCxLQUFLLEdBQUcsSUFBSSwrRkFBNEIsQ0FBQztRQUNyQyxJQUFJLEVBQUUsT0FBTztRQUNiLFdBQVcsRUFBRSxjQUFjO1FBQzNCLEtBQUssRUFBRSxFQUFFO1FBQ1QsV0FBVyxFQUFFLEVBQUU7S0FDbEIsQ0FBQyxDQUFDO0lBRUgsYUFBYSxHQUFHLElBQUksK0ZBQTRCLENBQUM7UUFDN0MsSUFBSSxFQUFFLGVBQWU7UUFDckIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxLQUFLLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FBQztJQUVILFFBQVEsR0FBRyxJQUFJLCtGQUE0QixDQUFDO1FBQ3hDLElBQUksRUFBRSxVQUFVO1FBQ2hCLFdBQVcsRUFBRSxrQkFBa0I7UUFDL0IsS0FBSyxFQUFFLEVBQUU7S0FDWixDQUFDLENBQUM7SUFFSCxVQUFVLEdBQUcsSUFBSSwrRkFBNEIsQ0FBQztRQUMxQyxJQUFJLEVBQUUsWUFBWTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLEtBQUssRUFBRSxVQUFVO1FBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxHQUFHLElBQUksaUdBQThCLENBQUM7UUFDM0MsSUFBSSxFQUFFLFdBQVc7UUFDakIsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0tBQzlCLENBQUMsQ0FBQztJQUVILFlBQVksR0FBRyxJQUFJLCtGQUE0QixDQUFDO1FBQzVDLElBQUksRUFBRSxjQUFjO1FBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUU7WUFDTCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSwyQ0FBbUM7Z0JBQ3ZDLEtBQUssRUFBRSxFQUFFO2FBQ1o7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sSUFBSSwyQ0FBbUM7Z0JBQ3ZDLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjtLQUNKLENBQUMsQ0FBQztJQUVILElBQUksR0FBVyxPQUFPLENBQUM7SUFDdkIsV0FBVyxHQUFXLFFBQVEsQ0FBQztJQUMvQixNQUFNLEdBQW1DO1FBQ3JDLElBQUksQ0FBQyxJQUFJO1FBQ1QsSUFBSSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsYUFBYTtRQUNsQixJQUFJLENBQUMsUUFBUTtRQUNiLElBQUksQ0FBQyxVQUFVO1FBQ2YsSUFBSSxDQUFDLFNBQVM7UUFDZCxJQUFJLENBQUMsWUFBWTtLQUNwQixDQUFDO0NBQ0w7QUFFRDs7RUFFRTtBQUNLLE1BQU0sNkJBQThCLFNBQVEsdUJBQXVCO0lBQ3RFLGFBQWEsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7SUFDNUMsU0FBUyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQUNwQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUMsZUFBZTtJQUV0RCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZTtDQUNqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeUJFO0FBQ1c7QUFFYiwwREFBMEQ7QUFDMUQsTUFBTSxNQUFNLEdBQUcsNEJBQTRCLENBQUM7QUFFNUMsU0FBUyxnQkFBZ0IsQ0FBdUMsT0FBVTtJQUN0RSxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBNEIsQ0FBQztBQUNoRixDQUFDO0FBR2lGO0FBQ2xEO0FBUzJCO0FBZ0VwRCxNQUFNLE1BQU07SUFDUCxNQUFNLENBQWM7SUFDcEIsa0JBQWtCLENBQWdDO0lBQ2xELHlCQUF5QixDQUE0QjtJQUNyRCxHQUFHLENBQWdCO0lBQ25CLFNBQVMsQ0FBYztJQUN2QixnQkFBZ0IsQ0FBb0I7SUFDcEMsSUFBSSxDQUEyQztJQUMvQyxjQUFjLENBQThDO0lBQzVELHFCQUFxQixDQUF5RDtJQUM5RSxlQUFlLENBQXNCO0lBQ3JDLHVCQUF1QixDQUFzQjtJQUM3Qyx1QkFBdUIsR0FBWSxLQUFLLENBQUM7SUFDekMsVUFBVSxDQUF3RTtJQUNsRixNQUFNLENBQXNCO0lBQzVCLGNBQWMsQ0FBa0I7SUFFeEMsWUFBWSxPQUFpQztRQUN6QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSw0RkFBeUIsRUFBRSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUUvQyxxQkFBcUI7UUFDdEIsdUJBQXVCO1FBRXRCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyx1Q0FBdUM7UUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyx1Q0FBdUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxZQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsT0FBTztRQUNaLENBQUM7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixFQUFFO2FBQ3pDLElBQUksQ0FBQyxDQUFDLE1BQXNELEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1lBRTlELElBQUksTUFBTSxDQUFDLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQThDLEVBQUUsRUFBRSxDQUNqRyxDQUFDLElBQUksQ0FBQyxLQUFLLDRDQUFvQyxJQUFJLElBQUksQ0FBQyxLQUFLLDZDQUFxQyxDQUFDLENBQ3RHLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQztZQUNoRSxDQUFDO1lBRUQsdUNBQXVDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2xDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8scUJBQXFCO1FBQ3pCLElBQUksSUFBSSxDQUFDLHVCQUF1QjtZQUFFLE9BQU87UUFFekMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCO1lBQ2pELENBQUM7WUFDRCxDQUFDLHdEQUFnRCxDQUFDO1FBRXRELElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7YUFDdEQsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBNEI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLCtCQUErQixDQUFDLG9FQUE2QixFQUFFLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5LLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEUsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDckMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFdkMscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTVDLDJCQUEyQjtRQUMzQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87UUFDWCxDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQTZCLENBQUM7UUFDaEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBa0IsQ0FBQztRQUVqRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTdELHVDQUF1QztRQUN2QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQy9ELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFFNUssTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBRXJILE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxNQUFNLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFFaEgsTUFBTSxjQUFjLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUNuQyxJQUFJLGdCQUFnQixLQUFLLENBQUM7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDOUYsSUFBSSxnQkFBZ0IsS0FBSyxDQUFDO2dCQUFFLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxDQUFDLENBQUM7UUFFRixNQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQ3BDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsNERBQTREO1FBRTFHLDBFQUEwRTtRQUMxRSxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdkIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ3JILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzlELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFdEQsb0RBQW9EO1FBQ3BELElBQUksY0FBYyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUMxQyxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDOUMsQ0FBQztRQUVELCtDQUErQztRQUMvQyxNQUFNLFNBQVMsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3hDLE1BQU0sVUFBVSxHQUFHLFNBQVMsR0FBRyxFQUFFLElBQUksS0FBSyxHQUFHLEdBQUcsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXJFLHFGQUFxRjtRQUNyRixNQUFNLFNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBRXBDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTlFLGdEQUFnRDtRQUNoRCxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixvREFBb0Q7UUFDcEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3RILE1BQU0sc0JBQXNCLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUVqRCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsTUFBTSxHQUFHLEdBQXFCO2dCQUMxQixHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzdDLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztnQkFDNUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRO2dCQUM5RCxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQjtnQkFDNUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGNBQWM7Z0JBQ3JFLGFBQWEsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLElBQUk7Z0JBQzFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQy9CLENBQUM7WUFDRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDOUQsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILDBDQUEwQztRQUMxQyxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN6SixDQUFDO1FBRUQsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVPLG1CQUFtQixDQUFDLE9BQTRDLEVBQUUsS0FBYSxFQUFFLGFBQXFCO1FBQzFHLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMxQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUssT0FBTyxDQUFDLFdBQVcsQ0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDM0UsTUFBTSxRQUFRLEdBQUksT0FBTyxDQUFDLFdBQVcsQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQUUsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pGLENBQUM7UUFDRCxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRCxNQUFNLFNBQVMsR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQVEsT0FBTyxDQUFDLFdBQVcsQ0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVE7WUFDL0csQ0FBQyxDQUFFLE9BQU8sQ0FBQyxXQUFXLENBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RELE1BQU0sUUFBUSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksT0FBUSxPQUFPLENBQUMsV0FBVyxDQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUTtZQUM3RyxDQUFDLENBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQVEsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNELE1BQU0sZ0JBQWdCLEdBQVcsT0FBTyxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0csTUFBTSxhQUFhLEdBQVcsT0FBTyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ILE1BQU0sZ0JBQWdCLEdBQVcsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRyxNQUFNLGtCQUFrQixHQUFXLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDOUcsTUFBTSxpQkFBaUIsR0FBVyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDO1FBQzdFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksT0FBUSxPQUFPLENBQUMsV0FBVyxDQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDbkcsUUFBUSxHQUFJLE9BQU8sQ0FBQyxXQUFXLENBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDO1lBQ0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUF5QixDQUFDO1lBQzFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ2pILFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9ELENBQUM7aUJBQU0sSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQVEsT0FBTyxDQUFDLFdBQVcsQ0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUM1RyxVQUFVLEdBQUksT0FBTyxDQUFDLFdBQVcsQ0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzdELENBQUM7UUFDTCxDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3hLLENBQUM7SUFFTyxlQUFlLENBQUMsT0FBNEM7UUFDaEUsTUFBTSxRQUFRLEdBQVEsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFELE9BQU87WUFDSCxTQUFTLEVBQUUsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDMUUsVUFBVSxFQUFFLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFFLGFBQWEsRUFBRSxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RixhQUFhLEVBQUUsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkYsZUFBZSxFQUFFLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQ2pHLGNBQWMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksTUFBTTtZQUMxRCxZQUFZLEVBQUUsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUMzRyxDQUFDO0lBQ04sQ0FBQztJQUVPLGdCQUFnQixDQUFDLE9BQTRDO1FBQ2pFLElBQUksY0FBYyxHQUFHLElBQUksRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDM0UsSUFBSSxhQUFhLEdBQUcsRUFBRSxFQUFFLGFBQWEsR0FBRyxJQUFJLEVBQUUsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztZQUM5QyxJQUFJLEVBQUUsQ0FBQyxjQUFjO2dCQUFFLGNBQWMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUNoRSxJQUFJLEVBQUUsQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxRQUFRO2dCQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7WUFDcEcsSUFBSSxFQUFFLENBQUMsZUFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEtBQUssUUFBUTtnQkFBRSxlQUFlLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDO1lBQ2pJLElBQUksRUFBRSxDQUFDLGFBQWEsSUFBSSxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLFFBQVE7Z0JBQUUsYUFBYSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNqSCxJQUFJLEVBQUUsQ0FBQyxhQUFhLElBQUksT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssS0FBSyxTQUFTO2dCQUFFLGFBQWEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM1RyxJQUFJLEVBQUUsQ0FBQyxjQUFjO2dCQUFFLGNBQWMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUM7UUFDekYsQ0FBQzthQUFNLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQVEsQ0FBQztZQUNwQyxJQUFJLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssU0FBUztnQkFBRSxjQUFjLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckYsSUFBSSxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRO2dCQUFFLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDO1lBQzlFLElBQUksT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxRQUFRO2dCQUFFLGVBQWUsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUM7WUFDckcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRO2dCQUFFLGFBQWEsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZGLElBQUksT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssU0FBUztnQkFBRSxhQUFhLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xGLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUFFLGNBQWMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7UUFDekYsQ0FBQztRQUNELE9BQU8sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQ3hHLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxVQUEwQyxFQUFFLGNBQW1DLEVBQUUsTUFBZ0I7UUFDdkgsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7U0FDcEcsQ0FBQyxDQUFDLENBQUM7UUFDSixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN4QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFVBQW9CLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLGFBQXFCLEVBQUUsZUFBdUI7UUFDakksS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUMzQixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM3RCxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN0RCxRQUFRLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUMzQixRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLFNBQVMsR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7UUFDM0QsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxRQUFnQixFQUFFLFNBQWlCLEVBQUUsY0FBdUIsRUFBRSxTQUF3QjtRQUMvRyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDbkQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUN6RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsQ0FBQzthQUFNLENBQUM7WUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVcsQ0FBQyxTQUFpQixFQUFFLGFBQXFCLEVBQUUsZUFBdUIsRUFBRSxhQUFzQixFQUFFLGNBQXNCO1FBQ2pJLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ25ELEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsVUFBa0IsRUFBRSxXQUFtQixFQUFFLGFBQXFCLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLEtBQWEsRUFBRSxhQUFxQixFQUFFLGNBQXNCLEVBQUUsZUFBdUI7UUFDaE4sTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuSCxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELFNBQVMsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlELFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxZQUFZLENBQUMsU0FBaUIsRUFBRSxRQUFnQjtRQUNwRCxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRW5CLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbkMsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRCxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdkMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUVkLE1BQU0sU0FBUyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbkMsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRCxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdkMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVPLFNBQVMsQ0FDYixHQUFxQixFQUNyQixTQUF3QixFQUN4QixZQUE0QjtRQUU1QixNQUFNLEVBQ0YsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQzdFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUN0RixVQUFVLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUNyRSxhQUFhLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQzdFLEdBQUcsR0FBRyxDQUFDO1FBRVIsTUFBTSxZQUFZLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQyxNQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDdkUsTUFBTSxhQUFhLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDbEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFdEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUMzRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkcsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0IsSUFBSSxZQUFZLEdBQUcsRUFBRSxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoTixDQUFDO2FBQU0sSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5TSxDQUFDO2FBQU0sQ0FBQztZQUNKLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELElBQUksU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQy9LLENBQUM7UUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sVUFBVSxHQUFHLEtBQW1CLENBQUM7WUFDdkMsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWEsQ0FBQztpQkFDM0QsSUFBSSxDQUFDLENBQUMsR0FBbUIsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFpQjtRQUNqQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQ3pELE1BQU0sV0FBVyxHQUE0QjtnQkFDekM7b0JBQ0ksV0FBVyxFQUFFLEdBQUc7b0JBQ2hCLEtBQUssRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDO2lCQUNsQzthQUNKLENBQUM7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDckIsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUMzQyxZQUFZLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDekQsTUFBTSxXQUFXLEdBQTRCO2dCQUN6QztvQkFDSSxXQUFXLEVBQUUsR0FBRztvQkFDaEIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUM7aUJBQ2xDO2FBQ0osQ0FBQztZQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUNyQixTQUFTLEVBQUUsV0FBVztnQkFDdEIsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzNDLFlBQVksRUFBRSxLQUFLO2FBQ3RCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixZQUFZLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxpQkFBaUIsQ0FDckIsUUFBcUIsRUFBRSxJQUFvQixFQUFFLEtBQWEsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUNwRixRQUFnQixFQUFFLFlBQW9CLEVBQUUsYUFBcUIsRUFBRSxXQUFtQixFQUNsRixTQUFpQixFQUFFLGNBQXNCLEVBQUUsZ0JBQXdCLEVBQ25FLGtCQUEwQixFQUFFLGlCQUF5QixFQUFFLFVBQW1CO1FBRTFFLE1BQU0sTUFBTSxHQUFHLFlBQVksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ2pELE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDOUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekQsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDMUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0IsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRCxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNELEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxHQUFHLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztRQUNqQyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsY0FBYyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sa0JBQWtCLENBQ3RCLFFBQXFCLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUNqRSxhQUFxQixFQUFFLFlBQW9CLEVBQUUsV0FBbUIsRUFBRSxTQUFpQixFQUNuRixjQUFzQixFQUFFLFFBQWdCLEVBQUUsZ0JBQXdCLEVBQ2xFLGtCQUEwQixFQUFFLGlCQUF5QixFQUFFLFVBQW1CO1FBRTFFLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUNoQyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9FLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdILEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxHQUFHLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztRQUNqQyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsY0FBYyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sZ0JBQWdCLENBQ3BCLFFBQXFCLEVBQUUsR0FBVyxFQUFFLENBQVMsRUFBRSxRQUFnQixFQUFFLFVBQWtCLEVBQ25GLEtBQWEsRUFBRSxhQUFxQixFQUFFLGVBQXVCLEVBQUUsY0FBc0IsRUFDckYsYUFBcUIsRUFBRSxhQUFzQixFQUFFLHNCQUE4QjtRQUU3RSxNQUFNLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMvQixNQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXJELElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN0QixNQUFNLGFBQWEsR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUVoRCxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RCxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN0RCxRQUFRLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvQixJQUFJLGFBQWEsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdkMsTUFBTSxRQUFRLEdBQUcsYUFBYSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUQsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLFFBQVEsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM1RSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbEUsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hGLFdBQVcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNyRSxDQUFDO1FBQ0wsQ0FBQzthQUFNLENBQUM7WUFDSixPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLFNBQVMsR0FBRyxhQUFhLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzdDLFdBQVcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDM0QsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNsQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxlQUFlLENBQUMsV0FBMkIsRUFBRSxTQUF3QjtRQUN6RSx3REFBd0Q7UUFDeEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUM5QixDQUFDO2lCQUFNLENBQUM7Z0JBQ0osTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDN0MsTUFBTSxXQUFXLEdBQUksVUFBa0IsQ0FBQyxHQUFHLENBQUM7b0JBQzVDLE1BQU0sWUFBWSxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBbUIsRUFBRSxHQUFHLENBQUM7b0JBQ3ZFLE9BQU8sV0FBVyxLQUFLLFlBQVksQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sa0JBQWtCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Q0FDSjtBQUVELHlEQUF5RDtBQUN6RCxTQUFTLFNBQVMsQ0FBQyxHQUFRO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUFDLE9BQU8sU0FBUyxDQUFDO0lBQUMsQ0FBQztJQUMvQixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQUMsT0FBTyxHQUFHLENBQUM7SUFBQyxDQUFDO0lBQzVDLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUFDLENBQUM7SUFDN0QsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFBQyxDQUFDO0lBQ3BDLE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFXLEVBQUUsT0FBZSxFQUFFLFFBQWdCLEdBQUc7SUFDbkUscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxVQUFVO0lBQ1YsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQzNDLENBQUM7Ozs7Ozs7Ozs7OztBQ3R3QkQ7Ozs7Ozs7Ozs7O0FDQUEsc0I7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFLMUMsSUFBSSxVQUFVLEdBQVEsU0FBUyxDQUFDO0FBQ2hDLElBQUksT0FBTyxHQUFRLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxJQUFJLHNEQUFzRCxHQUFrQjtJQUN4RSxJQUFJLEVBQUUsd0RBQXdEO0lBQzlELFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsS0FBSyxFQUFFLFFBQVE7SUFDZixVQUFVLEVBQUUsUUFBUTtJQUNwQixNQUFNLEVBQUUsQ0FBQyxPQUFrQyxFQUFFLEVBQUU7UUFDM0MsSUFBSSwrQ0FBTSxFQUFFLENBQUM7WUFDVCxPQUFPLElBQUksK0NBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsTUFBTSwyQkFBMkIsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsaUJBQWlCLEVBQUUsQ0FBQyxRQUFnQixFQUFFLE9BQWlDLEVBQUUsWUFBb0IsRUFBRSxFQUFFO1FBQzdGLE1BQU0sY0FBYyxHQUFTLFVBQVcsQ0FBQyxjQUFjLENBQUM7UUFDeEQsSUFBSSxRQUFRLElBQUksY0FBYyxFQUFFLENBQUM7WUFDN0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxFQUFFLElBQUk7Q0FDZixDQUFDO0FBQ0YsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN4RCxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx3REFBd0QsQ0FBQyxHQUFHLHNEQUFzRCxDQUFDO0FBQy9JLENBQUM7QUFDRCxpRUFBZSxzREFBc0QsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy8uL3NyYy92aXN1YWwudHMiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHLy4vc3R5bGUvdmlzdWFsLmxlc3M/MTRiMCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvZXh0ZXJuYWwgdmFyIFwibnVsbFwiIiwid2VicGFjazovL2hpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUcvLi8udG1wL3ByZWNvbXBpbGUvdmlzdWFsUGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUG93ZXJiaSB1dGlscyBjb21wb25lbnRzIGNsYXNzZXMgZm9yIGN1c3RvbSB2aXN1YWwgZm9ybWF0dGluZyBwYW5lIG9iamVjdHNcbiAqXG4gKi9cbmltcG9ydCAqIGFzIEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlciBmcm9tIFwiLi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlsc1wiO1xuY2xhc3MgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIENhcmRHcm91cEVudGl0eSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG59XG4vKiogQ29tcG9zaXRlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSB3aXRoIG11bHRpcGxlIGdyb3VwcyAqL1xuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUNhcmQgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuLyoqIFNpbXBsZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgaW4gYSBzaW5nbGUgZ3JvdXAgKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVDYXJkIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBTaW1wbGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBzbGljZURpc3BsYXlOYW1lID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEZXNjcmlwdGlvbiA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHNsaWNlRGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc2xpY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcilcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRvcjogRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgdGhpcyksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgICAgIH1dO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IChfYSA9IGRhdGFWaWV3T2JqZWN0cyA9PT0gbnVsbCB8fCBkYXRhVmlld09iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3T2JqZWN0c1tvYmplY3ROYW1lXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW3RoaXMubmFtZV07XG4gICAgICAgIHRoaXMudmFsdWUgPSBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBuZXdWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFsaWdubWVudEdyb3VwIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkFsaWdubWVudEdyb3VwXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkFsaWdubWVudEdyb3VwICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbW9kZTogdGhpcy5tb2RlLCBzdXBwb3J0c05vU2VsZWN0aW9uOiB0aGlzLnN1cHBvcnRzTm9TZWxlY3Rpb24gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVN3aXRjaCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUb2dnbGVTd2l0Y2hcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVG9nZ2xlU3dpdGNoICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJDb2xvclBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Db2xvclBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGRlZmF1bHRDb2xvcjogdGhpcy5kZWZhdWx0Q29sb3IsIGlzTm9GaWxsSXRlbVN1cHBvcnRlZDogdGhpcy5pc05vRmlsbEl0ZW1TdXBwb3J0ZWQgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE51bVVwRG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJOdW1VcERvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTnVtVXBEb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBOdW1VcERvd24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNsaWRlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TbGlkZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRGF0ZVBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EYXRlUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMucGxhY2Vob2xkZXJLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLnBsYWNlaG9sZGVyS2V5KSA6IHRoaXMucGxhY2Vob2xkZXIsIHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbURyb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1lcmdlVmFsdWVzOiB0aGlzLm1lcmdlVmFsdWVzLCBmaWx0ZXJWYWx1ZXM6IHRoaXMuZmlsdGVyVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEdXJhdGlvblBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EdXJhdGlvblBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXJyb3JSYW5nZUNvbnRyb2wgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRXJyb3JSYW5nZUNvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRXJyb3JSYW5nZUNvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZpZWxkUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZpZWxkUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZpZWxkUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzLCBhbGxvd011bHRpcGxlVmFsdWVzOiB0aGlzLmFsbG93TXVsdGlwbGVWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0SW5wdXRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dElucHV0ICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgVGV4dElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0QXJlYVwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0QXJlYSAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250UGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRQaWNrZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYWRpZW50QmFyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkdyYWRpZW50QmFyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkdyYWRpZW50QmFyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJJbWFnZVVwbG9hZFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5JbWFnZVVwbG9hZCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGlzdEVkaXRvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJMaXN0RWRpdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lkxpc3RFZGl0b3IgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlYWRPbmx5VGV4dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJSZWFkT25seVRleHRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuUmVhZE9ubHlUZXh0ICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFwZU1hcFNlbGVjdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNoYXBlTWFwU2VsZWN0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2hhcGVNYXBTZWxlY3RvciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvcjogdGhpcy5pc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3IgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRDb250cm9sIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHkuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib2xkOiAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgaXRhbGljOiAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB1bmRlcmxpbmU6IChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZm9udFNpemUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib2xkID8gdGhpcy5ib2xkLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5pdGFsaWMgPyB0aGlzLml0YWxpYy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudW5kZXJsaW5lID8gdGhpcy51bmRlcmxpbmUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuZm9udFNpemUuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWFyZ2luUGFkZGluZyBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJNYXJnaW5QYWRkaW5nXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk1hcmdpblBhZGRpbmcgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICByaWdodDogdGhpcy5yaWdodC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5yaWdodC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnRvcC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvdHRvbS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5sZWZ0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5yaWdodC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMudG9wLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5ib3R0b20uc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVySXRlbSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMubWFwIiwiaW1wb3J0IHsgQ29tcG9zaXRlQ2FyZCwgU2ltcGxlQ2FyZCB9IGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmV4cG9ydCBjbGFzcyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciA9IGxvY2FsaXphdGlvbk1hbmFnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIGZyb20gbWV0YWRhdGEgZGF0YVZpZXdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhVmlld3MgbWV0YWRhdGEgZGF0YVZpZXcgb2JqZWN0XG4gICAgICogQHJldHVybnMgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWxcbiAgICAgKi9cbiAgICBwb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKHR5cGVDbGFzcywgZGF0YVZpZXcpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgbGV0IGRlZmF1bHRTZXR0aW5ncyA9IG5ldyB0eXBlQ2xhc3MoKTtcbiAgICAgICAgbGV0IGRhdGFWaWV3T2JqZWN0cyA9IChfYSA9IGRhdGFWaWV3ID09PSBudWxsIHx8IGRhdGFWaWV3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlldy5tZXRhZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9iamVjdHM7XG4gICAgICAgIGlmIChkYXRhVmlld09iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBlYWNoIGZvcm1hdHRpbmcgcHJvcGVydHkgYW5kIHNldCBpdHMgbmV3IHZhbHVlIGlmIGV4aXN0c1xuICAgICAgICAgICAgKF9iID0gZGVmYXVsdFNldHRpbmdzLmNhcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQpXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/IFtjYXJkXSA6IGNhcmQuZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgY3VycmVudCB0b3AgbGV2ZWwgdG9nZ2xlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250YWluZXJJdGVtID09PSBudWxsIHx8IGNvbnRhaW5lckl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRhaW5lckl0ZW0uc2xpY2VzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmb3JtYXR0aW5nIG1vZGVsIGJ5IHBhcnNpbmcgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHBvd2VyYmkgdmlzdWFsIGZvcm1hdHRpbmcgbW9kZWxcbiAgICAgKi9cbiAgICBidWlsZEZvcm1hdHRpbmdNb2RlbChmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCkge1xuICAgICAgICBsZXQgZm9ybWF0dGluZ01vZGVsID0ge1xuICAgICAgICAgICAgY2FyZHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLmNhcmRzXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdDYXJkID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGlzcGxheU5hbWVLZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGlzcGxheU5hbWVLZXkpIDogY2FyZC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRlc2NyaXB0aW9uS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1aWQ6IGNhcmQubmFtZSArIFwiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBhbmFseXRpY3NQYW5lOiBjYXJkLmFuYWx5dGljc1BhbmUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXJkLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmQudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGNhcmQub25QcmVQcm9jZXNzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjYXJkKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2ltcGxlQ2FyZCA9IGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkO1xuICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGlzU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlc1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVWlkID0gY2FyZEdyb3VwSW5zdGFuY2UubmFtZSArIFwiLWdyb3VwXCI7XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBncm91cCBmb3IgZWFjaCBncm91cFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdHcm91cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBncm91cFVpZCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IGNhcmRHcm91cEluc3RhbmNlLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBkZWxheVNhdmVTbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLmRlbGF5U2F2ZVNsaWNlcyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFJlYXNvbjogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWRSZWFzb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5ncm91cHMucHVzaChmb3JtYXR0aW5nR3JvdXApO1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgZm9ybWF0dGluZyBtb2RlbCBhZGRzIGRhdGEgcG9pbnRzIG9yIHRvcCBjYXRlZ29yaWVzIChMaWtlIHdoZW4geW91IG1vZGlmeSBzcGVjaWZpYyB2aXN1YWwgY2F0ZWdvcnkgY29sb3IpLlxuICAgICAgICAgICAgICAgIC8vIHRoZXNlIGNhdGVnb3JpZXMgdXNlIHNhbWUgb2JqZWN0IG5hbWUgYW5kIHByb3BlcnR5IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXMgYW5kIHRoZSBnZW5lcmF0ZWQgdWlkIHdpbGwgYmUgdGhlIHNhbWUgZm9yIHRoZXNlIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gU29sdXRpb24gPT4gU2F2ZSBzbGljZSBuYW1lcyB0byBtb2RpZnkgZWFjaCBzbGljZSB1aWQgdG8gYmUgdW5pcXVlIGJ5IGFkZGluZyBjb3VudGVyIHZhbHVlIHRvIHRoZSBuZXcgc2xpY2UgdWlkXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclVpZCA9IGdyb3VwVWlkICsgXCItY29udGFpbmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDb250YWluZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGVzY3JpcHRpb25LZXkpIDogY29udGFpbmVyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJVaWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW0gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJZW1OYW1lID0gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA/IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySXRlbVVpZCA9IGNvbnRhaW5lclVpZCArIGNvbnRhaW5lckllbU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJJdGVtVWlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZXMgYW5kIGFkZCB0aGVtIHRvIGN1cnJlbnQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nQ29udGFpbmVySXRlbS5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLnB1c2goZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0dyb3VwLmNvbnRhaW5lciA9IGZvcm1hdHRpbmdDb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9ybWF0dGluZ0dyb3VwLmRpc3BsYXlOYW1lID09IHVuZGVmaW5lZCA/IGZvcm1hdHRpbmdDYXJkIDogZm9ybWF0dGluZ0dyb3VwKS50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nR3JvdXAuc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQucmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nTW9kZWwuY2FyZHMucHVzaChmb3JtYXR0aW5nQ2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGluZ01vZGVsO1xuICAgIH1cbiAgICBidWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXMgfSkge1xuICAgICAgICAvLyBGaWx0ZXIgc2xpY2VzIGJhc2VkIG9uIHRoZWlyIHZpc2liaWxpdHlcbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdTbGljZSA9IHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXR0aW5nU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBNb2RpZnkgZm9ybWF0dGluZyBzbGljZSB1aWQgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0rKztcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlLnVpZCA9IGAke2Zvcm1hdHRpbmdTbGljZS51aWR9LSR7c2xpY2VOYW1lc1tzbGljZS5uYW1lXX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2VzLnB1c2goZm9ybWF0dGluZ1NsaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFByb2NlZWRlZCBzbGljZSBuYW1lcyBhcmUgc2F2ZWQgdG8gcHJldmVudCBkdXBsaWNhdGVkIGRlZmF1bHQgZGVzY3JpcHRvcnMgaW4gY2FzZSBvZiB1c2luZyBcbiAgICAgICAgLy8gZm9ybWF0dGluZyBjYXRlZ29yaWVzICYgc2VsZWN0b3JzLCBzaW5jZSB0aGV5IGhhdmUgdGhlIHNhbWUgZGVzY3JpcHRvciBvYmplY3ROYW1lIGFuZCBwcm9wZXJ0eU5hbWVcbiAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgbGV0IGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgICAgIGxldCBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZCAmJiBjYXJkLnRvcExldmVsU2xpY2UpXG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLihfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lKSk7XG4gICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIHNsaWNlTmFtZXMsIGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpO1xuICAgICAgICAgICAgKF9iID0gKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBzbGljZU5hbWVzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycykpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbiAgICBnZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lLCBzbGljZXMsIHNsaWNlTmFtZXMsIHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmICh0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICBzbGljZU5hbWVzW3RvcExldmVsU2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodG9wTGV2ZWxTbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2xpY2UgJiYgIXNsaWNlTmFtZXNbc2xpY2UubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChzbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMubWFwIiwiaW1wb3J0ICogYXMgZm9ybWF0dGluZ1NldHRpbmdzIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2VcIjtcbmV4cG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncywgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBCdWlsZCBhbmQgcmV0dXJuIGZvcm1hdHRpbmcgZGVzY3JpcHRvciBmb3Igc2ltcGxlIHNsaWNlXG4gKlxuICogQHBhcmFtIG9iamVjdE5hbWUgT2JqZWN0IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXNcbiAqIEBwYXJhbSBzbGljZSBmb3JtYXR0aW5nIHNpbXBsZSBzbGljZVxuICogQHJldHVybnMgc2ltcGxlIHNsaWNlIGZvcm1hdHRpbmcgZGVzY3JpcHRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCBzbGljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgIHByb3BlcnR5TmFtZTogc2xpY2UubmFtZSxcbiAgICAgICAgc2VsZWN0b3I6IHNsaWNlLnNlbGVjdG9yLFxuICAgICAgICBhbHRDb25zdGFudFZhbHVlU2VsZWN0b3I6IHNsaWNlLmFsdENvbnN0YW50U2VsZWN0b3IsXG4gICAgICAgIGluc3RhbmNlS2luZDogc2xpY2UuaW5zdGFuY2VLaW5kXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHByb3BlcnR5IHZhbHVlIGZyb20gZGF0YXZpZXcgb2JqZWN0cyBpZiBleGlzdHNcbiAqIEVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGZyb20gZm9ybWF0dGluZyBzZXR0aW5ncyBvYmplY3RcbiAqXG4gKiBAcGFyYW0gdmFsdWUgZGF0YXZpZXcgb2JqZWN0IHZhbHVlXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGZvcm1hdHRpbmcgc2V0dGluZ3MgZGVmYXVsdCB2YWx1ZVxuICogQHJldHVybnMgZm9ybWF0dGluZyBwcm9wZXJ0eSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShzbGljZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIXZhbHVlLnNvbGlkKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5zb2xpZC5jb2xvciB9O1xuICAgIH1cbiAgICBpZiAoc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLml0ZW1zKSB7XG4gICAgICAgIGxldCBpdGVtc0FycmF5ID0gc2xpY2UuaXRlbXM7XG4gICAgICAgIHJldHVybiBpdGVtc0FycmF5LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMubWFwIiwiLypcclxuICogIFBvd2VyIEJJIFZpc3VhbGl6YXRpb25zXHJcbiAqXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxyXG4gKiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIE1JVCBMaWNlbnNlXHJcbiAqXHJcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiAqICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlwiU29mdHdhcmVcIlwiKSwgdG8gZGVhbFxyXG4gKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4gKiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gKiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4gKlxyXG4gKiBcclxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuICpcclxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuICogIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuICogIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7IC8vIEltcG9ydCBuw6ljZXNzYWlyZSBwb3VyIFZhbGlkYXRvclR5cGVcclxuXHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkID0gZm9ybWF0dGluZ1NldHRpbmdzLlNpbXBsZUNhcmQ7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTbGljZSA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TbGljZTtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsID0gZm9ybWF0dGluZ1NldHRpbmdzLk1vZGVsO1xyXG5cclxuLyoqXHJcbiAqIERhdGEgUG9pbnQgRm9ybWF0dGluZyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBEYXRhUG9pbnRDYXJkU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIGZpbGwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImZpbGxcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYXIgQ29sb3JcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGV4dCBTaXplXCIsXHJcbiAgICAgICAgdmFsdWU6IDE4XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkZvbnQgZmFtaWx5IGZvciB2YWx1ZXNcIixcclxuICAgICAgICB2YWx1ZTogXCJTZWdvZSBVSVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcImUuZy4gU2Vnb2UgVUksIEFyaWFsXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udENvbG9yXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiRm9udCBjb2xvciBmb3IgdmFsdWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwiI2ZmZmZmZlwiIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJhclJhZGl1cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJhclJhZGl1c1wiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkJhciBSYWRpdXNcIixcclxuICAgICAgICB2YWx1ZTogMzBcclxuICAgIH0pO1xyXG5cclxuICAgIGJhcldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYmFyV2lkdGhcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCYXIgV2lkdGhcIixcclxuICAgICAgICB2YWx1ZTogNjBcclxuICAgIH0pO1xyXG5cclxuICAgIGJhclNwYWNpbmcgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJiYXJTcGFjaW5nXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQmFyIFNwYWNpbmdcIixcclxuICAgICAgICB2YWx1ZTogMzZcclxuICAgIH0pO1xyXG5cclxuICAgIHZhbHVlRGlzcGxheU1vZGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJ2YWx1ZURpc3BsYXlNb2RlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVmFsdWUgZGlzcGxheSBtb2RlICgwPSUsMT1kZWNpbWFsLDI9aW50ZWdlcilcIixcclxuICAgICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGVjaW1hbFBsYWNlcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImRlY2ltYWxQbGFjZXNcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJEZWNpbWFsIHBsYWNlcyBmb3IgdmFsdWVzXCIsXHJcbiAgICAgICAgdmFsdWU6IDJcclxuICAgIH0pO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZyA9IFwiZGF0YVBvaW50XCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJEYXRhIGNvbG9yc1wiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5maWxsLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsXHJcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LFxyXG4gICAgICAgIHRoaXMuZm9udENvbG9yLFxyXG4gICAgICAgIHRoaXMuYmFyUmFkaXVzLFxyXG4gICAgICAgIHRoaXMuYmFyV2lkdGgsXHJcbiAgICAgICAgdGhpcy5iYXJTcGFjaW5nLFxyXG4gICAgICAgIHRoaXMudmFsdWVEaXNwbGF5TW9kZSxcclxuICAgICAgICB0aGlzLmRlY2ltYWxQbGFjZXNcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgRm9ybWF0dGluZyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBMYXlvdXRDYXJkU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuXHJcbiAgICBzaG93QmFja2dyb3VuZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXIgZm9uZCBwYXIgZMOpZmF1dFwiLFxyXG4gICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGl0bGVUZXh0ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwidGl0bGVUZXh0XCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiVGl0cmUgZHUgZ3JhcGhpcXVlIChEU1ApXCIsXHJcbiAgICAgICAgdmFsdWU6IFwiRFNQXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGl0cmUgZHUgZ3JhcGhpcXVlXCJcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlRm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlRm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlBvbGljZSBkdSB0aXRyZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlNlZ29lIFVJXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiZS5nLiBTZWdvZSBVSSwgQXJpYWxcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVGb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlRm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUYWlsbGUgZHUgdGl0cmUgKHB4KVwiLFxyXG4gICAgICAgIHZhbHVlOiAyMFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVGb250Qm9sZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInRpdGxlRm9udEJvbGRcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJUaXRyZSBlbiBncmFzXCIsXHJcbiAgICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlRm9udENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZUZvbnRDb2xvclwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgZHUgdGl0cmVcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCIjMjIyMjIyXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJsYXlvdXRcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIk1pc2UgZW4gcGFnZVwiO1xyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93QmFja2dyb3VuZCxcclxuICAgICAgICB0aGlzLnRpdGxlVGV4dCxcclxuICAgICAgICB0aGlzLnRpdGxlRm9udEZhbWlseSxcclxuICAgICAgICB0aGlzLnRpdGxlRm9udFNpemUsXHJcbiAgICAgICAgdGhpcy50aXRsZUZvbnRCb2xkLFxyXG4gICAgICAgIHRoaXMudGl0bGVGb250Q29sb3JcclxuICAgIF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBYIEF4aXMgRm9ybWF0dGluZyBDYXJkXHJcbiAqL1xyXG5jbGFzcyBYQXhpc0NhcmRTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJTaG93IFggYXhpcyBsYWJlbHNcIixcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0aXRsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlggYXhpcyB0aXRsZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBsYWJlbFJvdGF0aW9uID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibGFiZWxSb3RhdGlvblwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkxhYmVsIHJvdGF0aW9uIChkZWcpXCIsXHJcbiAgICAgICAgdmFsdWU6IDBcclxuICAgIH0pO1xyXG5cclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJYIGF4aXMgZm9udCBzaXplXCIsXHJcbiAgICAgICAgdmFsdWU6IDE0XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udEZhbWlseVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlggYXhpcyBmb250IGZhbWlseVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlNlZ29lIFVJXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiZS5nLiBTZWdvZSBVSSwgQXJpYWxcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9udENvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmb250Q29sb3JcIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJYIGF4aXMgZm9udCBjb2xvclwiLFxyXG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiBcIiM4ODg4ODhcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBib3R0b21NYXJnaW4gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3R0b21NYXJnaW5cIixcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJCb3R0b20gbWFyZ2luIChzcGFjaW5nIGZvciBYIGF4aXMpXCIsXHJcbiAgICAgICAgdmFsdWU6IDgwLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbWluVmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHBvd2VyYmkudmlzdWFscy5WYWxpZGF0b3JUeXBlLk1pbixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiA0MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXhWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogcG93ZXJiaS52aXN1YWxzLlZhbGlkYXRvclR5cGUuTWF4LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDgwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInhBeGlzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJYIGF4aXNcIjtcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuc2hvdyxcclxuICAgICAgICB0aGlzLnRpdGxlLFxyXG4gICAgICAgIHRoaXMubGFiZWxSb3RhdGlvbixcclxuICAgICAgICB0aGlzLmZvbnRTaXplLFxyXG4gICAgICAgIHRoaXMuZm9udEZhbWlseSxcclxuICAgICAgICB0aGlzLmZvbnRDb2xvcixcclxuICAgICAgICB0aGlzLmJvdHRvbU1hcmdpblxyXG4gICAgXTtcclxufVxyXG5cclxuLyoqXHJcbiogdmlzdWFsIHNldHRpbmdzIG1vZGVsIGNsYXNzXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIGRhdGFQb2ludENhcmQgPSBuZXcgRGF0YVBvaW50Q2FyZFNldHRpbmdzKCk7XHJcbiAgICB4QXhpc0NhcmQgPSBuZXcgWEF4aXNDYXJkU2V0dGluZ3MoKTtcclxuICAgIGxheW91dENhcmQgPSBuZXcgTGF5b3V0Q2FyZFNldHRpbmdzKCk7IC8vIEFKT1VURVIgQ0VDSVxyXG5cclxuICAgIGNhcmRzID0gW3RoaXMuZGF0YVBvaW50Q2FyZCwgdGhpcy54QXhpc0NhcmQsIHRoaXMubGF5b3V0Q2FyZF07IC8vIEFKT1VURVIgQ0VDSVxyXG59XHJcbiIsIi8qXHJcbiogIFBvd2VyIEJJIFZpc3VhbCBDTElcclxuKlxyXG4qICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvblxyXG4qICBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qICBNSVQgTGljZW5zZVxyXG4qXHJcbiogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuKiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJcIlNvZnR3YXJlXCJcIiksIHRvIGRlYWxcclxuKiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG4qICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcbiogIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG4qICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG4qXHJcbiogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiogIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4qXHJcbiogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAqQVMgSVMqLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiogIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4qICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuKiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4qICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4qICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiogIFRIRSBTT0ZUV0FSRS5cclxuKiBcclxuKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcG93ZXJiaS12aXN1YWxzL25vLWh0dHAtc3RyaW5nXHJcbmNvbnN0IFNWR19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQ8SyBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwPih0YWdOYW1lOiBLKTogU1ZHRWxlbWVudFRhZ05hbWVNYXBbS10ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTlMsIHRhZ05hbWUpIGFzIFNWR0VsZW1lbnRUYWdOYW1lTWFwW0tdO1xyXG59XHJcblxyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5pbXBvcnQgeyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuaW1wb3J0IFwiLi8uLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XHJcbmltcG9ydCBWaXN1YWxVcGRhdGVPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxVcGRhdGVPcHRpb25zO1xyXG5pbXBvcnQgSVZpc3VhbCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbDtcclxuaW1wb3J0IElTZWxlY3Rpb25NYW5hZ2VyID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LklTZWxlY3Rpb25NYW5hZ2VyO1xyXG5pbXBvcnQgSVNlbGVjdGlvbklkID0gcG93ZXJiaS52aXN1YWxzLklTZWxlY3Rpb25JZDtcclxuaW1wb3J0IElWaXN1YWxFdmVudFNlcnZpY2UgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVZpc3VhbEV2ZW50U2VydmljZTtcclxuaW1wb3J0IElUb29sdGlwU2VydmljZSA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JVG9vbHRpcFNlcnZpY2U7XHJcbmltcG9ydCBWaXN1YWxUb29sdGlwRGF0YUl0ZW0gPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkuVmlzdWFsVG9vbHRpcERhdGFJdGVtO1xyXG5pbXBvcnQgeyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5pbnRlcmZhY2UgRGF0YVBvaW50T3B0aW9ucyB7XHJcbiAgICBmaWxsQ29sb3I6IHN0cmluZztcclxuICAgIGNvbG9yTm9uOiBzdHJpbmc7XHJcbiAgICBiYXJSYWRpdXM6IG51bWJlcjtcclxuICAgIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBiYXJWYWx1ZUZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBiYXJWYWx1ZUZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIGJhclZhbHVlRm9udENvbG9yOiBzdHJpbmc7XHJcbiAgICB2YWx1ZURpc3BsYXlNb2RlOiBudW1iZXI7XHJcbiAgICBkZWNpbWFsUGxhY2VzOiBudW1iZXI7XHJcbiAgICBiYXJXaWR0aDogbnVtYmVyO1xyXG4gICAgYmFyU3BhY2luZzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgWEF4aXNPcHRpb25zIHtcclxuICAgIHNob3dYQXhpczogYm9vbGVhbjtcclxuICAgIHhBeGlzVGl0bGU6IHN0cmluZztcclxuICAgIGxhYmVsUm90YXRpb246IG51bWJlcjtcclxuICAgIHhBeGlzRm9udFNpemU6IG51bWJlcjtcclxuICAgIHhBeGlzRm9udEZhbWlseTogc3RyaW5nO1xyXG4gICAgeEF4aXNGb250Q29sb3I6IHN0cmluZztcclxuICAgIGJvdHRvbU1hcmdpbjogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0T3B0aW9ucyB7XHJcbiAgICBzaG93QmFja2dyb3VuZDogYm9vbGVhbjtcclxuICAgIHRpdGxlVGV4dDogc3RyaW5nO1xyXG4gICAgdGl0bGVGb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICB0aXRsZUZvbnRTaXplOiBudW1iZXI7XHJcbiAgICB0aXRsZUZvbnRCb2xkOiBib29sZWFuO1xyXG4gICAgdGl0bGVGb250Q29sb3I6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJhclJlbmRlckNvbnRleHQge1xyXG4gICAgY2F0OiBzdHJpbmc7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgcmF3VmFsdWU6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIGJhcldpZHRoOiBudW1iZXI7XHJcbiAgICBiYXJTcGFjaW5nOiBudW1iZXI7XHJcbiAgICBiYXNlWTogbnVtYmVyO1xyXG4gICAgbWF4QmFySGVpZ2h0OiBudW1iZXI7XHJcbiAgICBiYXJSYWRpdXM6IG51bWJlcjtcclxuICAgIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBmaWxsQ29sb3I6IHN0cmluZztcclxuICAgIGNvbG9yTm9uOiBzdHJpbmc7XHJcbiAgICBiYXJWYWx1ZUZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBiYXJWYWx1ZUZvbnRGYW1pbHk6IHN0cmluZztcclxuICAgIGJhclZhbHVlRm9udENvbG9yOiBzdHJpbmc7XHJcbiAgICBuYXJyb3dNb2RlOiBib29sZWFuO1xyXG4gICAgc2hvd1hBeGlzOiBib29sZWFuO1xyXG4gICAgeEF4aXNGb250U2l6ZTogbnVtYmVyO1xyXG4gICAgeEF4aXNGb250RmFtaWx5OiBzdHJpbmc7XHJcbiAgICB4QXhpc0ZvbnRDb2xvcjogc3RyaW5nO1xyXG4gICAgbGFiZWxSb3RhdGlvbjogbnVtYmVyO1xyXG4gICAgbmVlZHNSb3RhdGlvbjogYm9vbGVhbjtcclxuICAgIGF2YWlsYWJsZVNwYWNlRm9yTGFiZWw6IG51bWJlcjtcclxuICAgIGZvcm1hdEJhclZhbHVlOiAocmF3OiBudW1iZXIpID0+IHN0cmluZztcclxuICAgIGRlZnM6IFNWR0RlZnNFbGVtZW50O1xyXG4gICAgc2VsZWN0aW9uSWQ6IElTZWxlY3Rpb25JZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbCBpbXBsZW1lbnRzIElWaXN1YWwge1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3M6IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsO1xyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlOiBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzdmc6IFNWR1NWR0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNlbGVjdGlvbk1hbmFnZXI6IElTZWxlY3Rpb25NYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBob3N0OiBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWxIb3N0O1xyXG4gICAgcHJpdmF0ZSBsaWNlbnNlTWFuYWdlcjogcG93ZXJiaS5leHRlbnNpYmlsaXR5LklWaXN1YWxMaWNlbnNlTWFuYWdlcjtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXJWYWxpZFBsYW5zOiBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlNlcnZpY2VQbGFuW10gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGhhc1NlcnZpY2VQbGFuczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGlzTm90aWZpY2F0aW9uRGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRhdGFQb2ludHM6IEFycmF5PHsgY2F0ZWdvcnk6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgc2VsZWN0aW9uSWQ6IElTZWxlY3Rpb25JZCB9PjtcclxuICAgIHByaXZhdGUgZXZlbnRzOiBJVmlzdWFsRXZlbnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB0b29sdGlwU2VydmljZTogSVRvb2x0aXBTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSA9IG5ldyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gb3B0aW9ucy5ob3N0O1xyXG4gICAgICAgIHRoaXMubGljZW5zZU1hbmFnZXIgPSB0aGlzLmhvc3QubGljZW5zZU1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbk1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IG9wdGlvbnMuaG9zdC5ldmVudFNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy50b29sdGlwU2VydmljZSA9IHRoaXMuaG9zdC50b29sdGlwU2VydmljZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0IGxpY2Vuc2UgY2hlY2tcclxuICAgICAgIC8vIHRoaXMuY2hlY2tMaWNlbnNlKCk7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciBzY3JvbGxhYmxlIHBvdXIgbGUgU1ZHXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7IC8vIHBlcm1ldCBzY3JvbGwgaG9yaXpvbnRhbCBldCB2ZXJ0aWNhbFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdmcgPSBjcmVhdGVTdmdFbGVtZW50KFwic3ZnXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTAwJVwiKTtcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMDAlXCIpO1xyXG4gICAgICAgIHRoaXMuc3ZnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIMOpdml0ZSBnYXBzIGRhbnMgY2VydGFpbnMgbmF2aWdhdGV1cnNcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnN2Zyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YVBvaW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tMaWNlbnNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saWNlbnNlTWFuYWdlcikge1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5nZXRBdmFpbGFibGVTZXJ2aWNlUGxhbnMoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLkxpY2Vuc2VJbmZvUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52ID0gcmVzdWx0LmlzTGljZW5zZVVuc3VwcG9ydGVkRW52O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlzTGljZW5zZUluZm9BdmFpbGFibGUgJiYgIXRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucyA9IHJlc3VsdC5wbGFucz8uZmlsdGVyKChwbGFuOiBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlNlcnZpY2VQbGFuKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW4uc3RhdGUgPT09IHBvd2VyYmkuU2VydmljZVBsYW5TdGF0ZS5BY3RpdmUgfHwgcGxhbi5zdGF0ZSA9PT0gcG93ZXJiaS5TZXJ2aWNlUGxhblN0YXRlLldhcm5pbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1NlcnZpY2VQbGFucyA9ICEhdGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnM/Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBubyB2YWxpZCBwbGFucyBmb3VuZCwgbm90aWZ5IHVzZXJcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNTZXJ2aWNlUGxhbnMgJiYgIXRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlMaWNlbnNlUmVxdWlyZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBsaWNlbnNlczpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBub3RpZnlMaWNlbnNlUmVxdWlyZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOb3RpZmljYXRpb25EaXNwbGF5ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZSA9IHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgXHJcbiAgICAgICAgICAgID8gcG93ZXJiaS5MaWNlbnNlTm90aWZpY2F0aW9uVHlwZS5VbnN1cHBvcnRlZEVudiBcclxuICAgICAgICAgICAgOiBwb3dlcmJpLkxpY2Vuc2VOb3RpZmljYXRpb25UeXBlLlZpc3VhbElzQmxvY2tlZDtcclxuXHJcbiAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5ub3RpZnlMaWNlbnNlUmVxdWlyZWQobm90aWZpY2F0aW9uVHlwZSlcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTm90aWZpY2F0aW9uRGlzcGxheWVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igbm90aWZ5aW5nIGxpY2Vuc2U6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUob3B0aW9uczogVmlzdWFsVXBkYXRlT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLnJlbmRlcmluZ1N0YXJ0ZWQob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UucG9wdWxhdGVGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbChWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCwgb3B0aW9ucy5kYXRhVmlld3MgJiYgb3B0aW9ucy5kYXRhVmlld3NbMF0pO1xyXG5cclxuICAgICAgICAvLyBjbGVhciBzdmdcclxuICAgICAgICB3aGlsZSAodGhpcy5zdmcuZmlyc3RDaGlsZCkgdGhpcy5zdmcucmVtb3ZlQ2hpbGQodGhpcy5zdmcuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy52aWV3cG9ydC53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBvcHRpb25zLnZpZXdwb3J0LmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gRml4ZXIgbGEgem9uZSB2aXNpYmxlIChjb250YWluZXIpIMOgIGxhIHRhaWxsZSBkdSB2aWV3cG9ydCBQb3dlciBCSVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICAgICAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXNcclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzICYmIG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG4gICAgICAgIGlmICghZGF0YVZpZXcgfHwgIWRhdGFWaWV3LmNhdGVnb3JpY2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnJlbmRlcmluZ0ZpbmlzaGVkKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlcyA9IGNhdGVnb3JpZXMudmFsdWVzIGFzIChzdHJpbmcgfCBudW1iZXIpW107XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gZGF0YVZpZXcuY2F0ZWdvcmljYWwudmFsdWVzWzBdLnZhbHVlcyBhcyBudW1iZXJbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmVwYXJlRGF0YVBvaW50cyhjYXRlZ29yaWVzLCBjYXRlZ29yeVZhbHVlcywgdmFsdWVzKTtcclxuICAgICAgICBjb25zdCBzb3J0ZWRDYXRlZ29yaWVzID0gdGhpcy5kYXRhUG9pbnRzLm1hcChkID0+IGQuY2F0ZWdvcnkpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZFZhbHVlcyA9IHRoaXMuZGF0YVBvaW50cy5tYXAoZCA9PiBkLnZhbHVlKTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25JZHMgPSB0aGlzLmRhdGFQb2ludHMubWFwKGQgPT4gZC5zZWxlY3Rpb25JZCk7XHJcblxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlcyBvcHRpb25zIHZpYSBoZWxwZXJzXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IGRhdGFWaWV3Lm1ldGFkYXRhICYmIGRhdGFWaWV3Lm1ldGFkYXRhLm9iamVjdHM7XHJcbiAgICAgICAgY29uc3QgZHBPcHRzID0gdGhpcy5nZXREYXRhUG9pbnRPcHRpb25zKG9iamVjdHMsIHdpZHRoLCBzb3J0ZWRDYXRlZ29yaWVzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgeyBmaWxsQ29sb3IsIGNvbG9yTm9uLCBiYXJSYWRpdXMsIGZvbnRTaXplLCBiYXJWYWx1ZUZvbnRTaXplLCBiYXJWYWx1ZUZvbnRGYW1pbHksIGJhclZhbHVlRm9udENvbG9yLCB2YWx1ZURpc3BsYXlNb2RlLCBkZWNpbWFsUGxhY2VzLCBiYXJXaWR0aCwgYmFyU3BhY2luZyB9ID0gZHBPcHRzO1xyXG5cclxuICAgICAgICBjb25zdCB4T3B0cyA9IHRoaXMuZ2V0WEF4aXNPcHRpb25zKG9iamVjdHMpO1xyXG4gICAgICAgIGNvbnN0IHsgc2hvd1hBeGlzLCB4QXhpc1RpdGxlLCBsYWJlbFJvdGF0aW9uLCB4QXhpc0ZvbnRTaXplLCB4QXhpc0ZvbnRGYW1pbHksIHhBeGlzRm9udENvbG9yLCBib3R0b21NYXJnaW4gfSA9IHhPcHRzO1xyXG5cclxuICAgICAgICBjb25zdCBsYXlvdXRPcHRzID0gdGhpcy5nZXRMYXlvdXRPcHRpb25zKG9iamVjdHMpO1xyXG4gICAgICAgIGNvbnN0IHsgc2hvd0JhY2tncm91bmQsIHRpdGxlVGV4dCwgdGl0bGVGb250RmFtaWx5LCB0aXRsZUZvbnRTaXplLCB0aXRsZUZvbnRCb2xkLCB0aXRsZUZvbnRDb2xvciB9ID0gbGF5b3V0T3B0cztcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0QmFyVmFsdWUgPSAocmF3OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlRGlzcGxheU1vZGUgPT09IDApIHJldHVybiAocmF3ICogMTAwKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpLnJlcGxhY2UoJy4nLCAnLCcpICsgXCIlXCI7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZURpc3BsYXlNb2RlID09PSAxKSByZXR1cm4gcmF3LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykucmVwbGFjZSgnLicsICcsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHJhdykudG9TdHJpbmcoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlWSA9IGhlaWdodCAtIGJvdHRvbU1hcmdpbjtcclxuICAgICAgICBjb25zdCBtYXhCYXJIZWlnaHQgPSBNYXRoLmZsb29yKGJhc2VZICogMC44KTsgLy8gdXRpbGlzZXIgODAlIGRlIGwnZXNwYWNlIGRpc3BvbmlibGUgYXUtZGVzc3VzIGRlIGxhIG1hcmdlXHJcblxyXG4gICAgICAgIC8vIENhbGN1bGVyIHRhaWxsZSBTVkcgbsOpY2Vzc2FpcmUgZXQgYWRhcHRlciBwb3VyIGFjdGl2ZXIgc2Nyb2xsIHNpIGJlc29pblxyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gNDA7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gNDA7XHJcbiAgICAgICAgY29uc3QgdG90YWxOZWVkZWRXaWR0aCA9IHBhZGRpbmdMZWZ0ICsgc29ydGVkQ2F0ZWdvcmllcy5sZW5ndGggKiAoYmFyV2lkdGggKyBiYXJTcGFjaW5nKSAtIGJhclNwYWNpbmcgKyBwYWRkaW5nUmlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSBNYXRoLm1heCh3aWR0aCwgTWF0aC5jZWlsKHRvdGFsTmVlZGVkV2lkdGgpKTtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIE1hdGguY2VpbChtYXhCYXJIZWlnaHQgKyBib3R0b21NYXJnaW4gKyA2MCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBzdmdXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgc3ZnSGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAvLyBBcHBsaXF1ZXIgb3UgcmV0aXJlciBsJ2FycmnDqHJlLXBsYW4gZHluYW1pcXVlbWVudFxyXG4gICAgICAgIGlmIChzaG93QmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZjdmYmZmXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdmcuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERFVEVDVElPTiBNT0RFIFwiTkFSUk9XXCIgKHBldXQgYWp1c3RlciBzZXVpbClcclxuICAgICAgICBjb25zdCBzbG90V2lkdGggPSBiYXJXaWR0aCArIGJhclNwYWNpbmc7XHJcbiAgICAgICAgY29uc3QgbmFycm93TW9kZSA9IHNsb3RXaWR0aCA8IDcwIHx8IHdpZHRoIDwgNDgwIHx8IHN2Z1dpZHRoID4gd2lkdGg7XHJcblxyXG4gICAgICAgIC8vIERlc3NpbiBkZXMgYmFycmVzIChkw6ljbGFyw6kgaWNpIHBvdXIgw6p0cmUgYWNjZXNzaWJsZSBkYW5zIGxlIGNsaWNrIGhhbmRsZXIgZHUgZm9uZClcclxuICAgICAgICBjb25zdCBiYXJHcm91cHM6IFNWR0dFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gRm9uZCBjbGlxdWFibGUsIHRpdHJlIGV0IGzDqWdlbmRlXHJcbiAgICAgICAgdGhpcy5yZW5kZXJCYWNrZ3JvdW5kUmVjdChzdmdXaWR0aCwgc3ZnSGVpZ2h0LCBzaG93QmFja2dyb3VuZCwgYmFyR3JvdXBzKTtcclxuICAgICAgICB0aGlzLnJlbmRlclRpdGxlKHRpdGxlVGV4dCwgdGl0bGVGb250U2l6ZSwgdGl0bGVGb250RmFtaWx5LCB0aXRsZUZvbnRCb2xkLCB0aXRsZUZvbnRDb2xvcik7XHJcbiAgICAgICAgaWYgKCFuYXJyb3dNb2RlKSB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckxlZ2VuZChmaWxsQ29sb3IsIGNvbG9yTm9uKSk7XHJcblxyXG4gICAgICAgIC8vIGRlZnMgcG91ciBjbGlwUGF0aHMgKG5vdXZlYXUgw6AgY2hhcXVlIHVwZGF0ZSlcclxuICAgICAgICBjb25zdCBkZWZzID0gY3JlYXRlU3ZnRWxlbWVudChcImRlZnNcIik7XHJcbiAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XHJcblxyXG4gICAgICAgIC8vIETDqXRlcm1pbmVyIHNpIGxlcyBsYWJlbHMgbsOpY2Vzc2l0ZW50IHVuZSByb3RhdGlvblxyXG4gICAgICAgIGNvbnN0IG5lZWRzUm90YXRpb24gPSB0aGlzLmNoZWNrTGFiZWxSb3RhdGlvbihzb3J0ZWRDYXRlZ29yaWVzLCBiYXJXaWR0aCwgYmFyU3BhY2luZywgeEF4aXNGb250U2l6ZSwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVTcGFjZUZvckxhYmVsID0gYm90dG9tTWFyZ2luIC0gMjU7XHJcblxyXG4gICAgICAgIHNvcnRlZENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eDogQmFyUmVuZGVyQ29udGV4dCA9IHtcclxuICAgICAgICAgICAgICAgIGNhdCwgaW5kZXg6IGksIHJhd1ZhbHVlOiBzb3J0ZWRWYWx1ZXNbaV0gfHwgMCxcclxuICAgICAgICAgICAgICAgIHg6IHBhZGRpbmdMZWZ0ICsgaSAqIChiYXJXaWR0aCArIGJhclNwYWNpbmcpLFxyXG4gICAgICAgICAgICAgICAgYmFyV2lkdGgsIGJhclNwYWNpbmcsIGJhc2VZLCBtYXhCYXJIZWlnaHQsIGJhclJhZGl1cywgZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IsIGNvbG9yTm9uLCBiYXJWYWx1ZUZvbnRTaXplLCBiYXJWYWx1ZUZvbnRGYW1pbHksIGJhclZhbHVlRm9udENvbG9yLFxyXG4gICAgICAgICAgICAgICAgbmFycm93TW9kZSwgc2hvd1hBeGlzLCB4QXhpc0ZvbnRTaXplLCB4QXhpc0ZvbnRGYW1pbHksIHhBeGlzRm9udENvbG9yLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxSb3RhdGlvbiwgbmVlZHNSb3RhdGlvbiwgYXZhaWxhYmxlU3BhY2VGb3JMYWJlbCwgZm9ybWF0QmFyVmFsdWUsIGRlZnMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25JZDogc2VsZWN0aW9uSWRzW2ldXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGJhckdyb3VwID0gdGhpcy5yZW5kZXJCYXIoY3R4LCBiYXJHcm91cHMsIHNlbGVjdGlvbklkcyk7XHJcbiAgICAgICAgICAgIGJhckdyb3Vwcy5wdXNoKGJhckdyb3VwKTtcclxuICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQoYmFyR3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBkZXNzaW5lciBsZSB0aXRyZSBkZSBsJ2F4ZSBYIHNpIGRlbWFuZMOpXHJcbiAgICAgICAgaWYgKHNob3dYQXhpcyAmJiB4QXhpc1RpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyWEF4aXNUaXRsZSh4QXhpc1RpdGxlLCBwYWRkaW5nTGVmdCwgc29ydGVkQ2F0ZWdvcmllcy5sZW5ndGgsIGJhcldpZHRoLCBiYXJTcGFjaW5nLCBiYXNlWSwgeEF4aXNGb250U2l6ZSwgeEF4aXNGb250Q29sb3IsIHhBeGlzRm9udEZhbWlseSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAoTGUgY2xpYyBkZSBmb25kIGVzdCBtYWludGVuYW50IGfDqXLDqSBwYXIgbGUgcmVjdGFuZ2xlIGJnUmVjdClcclxuICAgICAgICB0aGlzLmV2ZW50cy5yZW5kZXJpbmdGaW5pc2hlZChvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERhdGFQb2ludE9wdGlvbnMob2JqZWN0czogcG93ZXJiaS5EYXRhVmlld09iamVjdHMgfCB1bmRlZmluZWQsIHdpZHRoOiBudW1iZXIsIGNhdGVnb3J5Q291bnQ6IG51bWJlcik6IERhdGFQb2ludE9wdGlvbnMge1xyXG4gICAgICAgIGxldCBmaWxsQ29sb3IgPSBcIiMyRjZGRTdcIjtcclxuICAgICAgICBpZiAob2JqZWN0cyAmJiBvYmplY3RzW1wiZGF0YVBvaW50XCJdICYmIChvYmplY3RzW1wiZGF0YVBvaW50XCJdIGFzIGFueSlbXCJmaWxsXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yT2JqID0gKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImZpbGxcIl07XHJcbiAgICAgICAgICAgIGlmIChjb2xvck9iai5zb2xpZCAmJiBjb2xvck9iai5zb2xpZC5jb2xvcikgZmlsbENvbG9yID0gY29sb3JPYmouc29saWQuY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbG9yTm9uID0gbGlnaHRlbkNvbG9yKGZpbGxDb2xvciwgMC42LCAwLjUpO1xyXG4gICAgICAgIGNvbnN0IGJhclJhZGl1cyA9IG9iamVjdHMgJiYgb2JqZWN0c1tcImRhdGFQb2ludFwiXSAmJiB0eXBlb2YgKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImJhclJhZGl1c1wiXSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICA/IChvYmplY3RzW1wiZGF0YVBvaW50XCJdIGFzIGFueSlbXCJiYXJSYWRpdXNcIl0gOiAzMDtcclxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IG9iamVjdHMgJiYgb2JqZWN0c1tcImRhdGFQb2ludFwiXSAmJiB0eXBlb2YgKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImZvbnRTaXplXCJdID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgID8gKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImZvbnRTaXplXCJdIDogMTg7XHJcbiAgICAgICAgY29uc3QgZHBPYmo6IGFueSA9IChvYmplY3RzICYmIG9iamVjdHNbXCJkYXRhUG9pbnRcIl0pIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IHZhbHVlRGlzcGxheU1vZGU6IG51bWJlciA9IHR5cGVvZiBkcE9ialtcInZhbHVlRGlzcGxheU1vZGVcIl0gPT09IFwibnVtYmVyXCIgPyBkcE9ialtcInZhbHVlRGlzcGxheU1vZGVcIl0gOiAwO1xyXG4gICAgICAgIGNvbnN0IGRlY2ltYWxQbGFjZXM6IG51bWJlciA9IHR5cGVvZiBkcE9ialtcImRlY2ltYWxQbGFjZXNcIl0gPT09IFwibnVtYmVyXCIgPyBNYXRoLm1heCgwLCBkcE9ialtcImRlY2ltYWxQbGFjZXNcIl0pIDogMjtcclxuICAgICAgICBjb25zdCBiYXJWYWx1ZUZvbnRTaXplOiBudW1iZXIgPSB0eXBlb2YgZHBPYmpbXCJmb250U2l6ZVwiXSA9PT0gXCJudW1iZXJcIiA/IGRwT2JqW1wiZm9udFNpemVcIl0gOiAxODtcclxuICAgICAgICBjb25zdCBiYXJWYWx1ZUZvbnRGYW1pbHk6IHN0cmluZyA9IHR5cGVvZiBkcE9ialtcImZvbnRGYW1pbHlcIl0gPT09IFwic3RyaW5nXCIgPyBkcE9ialtcImZvbnRGYW1pbHlcIl0gOiBcIlNlZ29lIFVJXCI7XHJcbiAgICAgICAgY29uc3QgYmFyVmFsdWVGb250Q29sb3I6IHN0cmluZyA9IHJlYWRDb2xvcihkcE9ialtcImZvbnRDb2xvclwiXSkgfHwgXCIjZmZmZmZmXCI7XHJcbiAgICAgICAgbGV0IGJhcldpZHRoID0gTWF0aC5taW4oNjAsIE1hdGgubWF4KDEwLCBNYXRoLmZsb29yKHdpZHRoIC8gTWF0aC5tYXgoMSwgY2F0ZWdvcnlDb3VudCkgKiAwLjYpKSk7XHJcbiAgICAgICAgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tcImRhdGFQb2ludFwiXSAmJiB0eXBlb2YgKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImJhcldpZHRoXCJdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGJhcldpZHRoID0gKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImJhcldpZHRoXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmFyU3BhY2luZyA9IE1hdGgucm91bmQoYmFyV2lkdGggKiAwLjYpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZzID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoZnMgJiYgZnMuZGF0YVBvaW50Q2FyZCAmJiBmcy5kYXRhUG9pbnRDYXJkLmJhclNwYWNpbmcgJiYgdHlwZW9mIGZzLmRhdGFQb2ludENhcmQuYmFyU3BhY2luZy52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgYmFyU3BhY2luZyA9IE1hdGgucm91bmQoZnMuZGF0YVBvaW50Q2FyZC5iYXJTcGFjaW5nLnZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmplY3RzICYmIG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gJiYgdHlwZW9mIChvYmplY3RzW1wiZGF0YVBvaW50XCJdIGFzIGFueSlbXCJiYXJTcGFjaW5nXCJdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXJTcGFjaW5nID0gKG9iamVjdHNbXCJkYXRhUG9pbnRcIl0gYXMgYW55KVtcImJhclNwYWNpbmdcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIHsgLyogZmFsbGJhY2sgKi8gfVxyXG4gICAgICAgIHJldHVybiB7IGZpbGxDb2xvciwgY29sb3JOb24sIGJhclJhZGl1cywgZm9udFNpemUsIGJhclZhbHVlRm9udFNpemUsIGJhclZhbHVlRm9udEZhbWlseSwgYmFyVmFsdWVGb250Q29sb3IsIHZhbHVlRGlzcGxheU1vZGUsIGRlY2ltYWxQbGFjZXMsIGJhcldpZHRoLCBiYXJTcGFjaW5nIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRYQXhpc09wdGlvbnMob2JqZWN0czogcG93ZXJiaS5EYXRhVmlld09iamVjdHMgfCB1bmRlZmluZWQpOiBYQXhpc09wdGlvbnMge1xyXG4gICAgICAgIGNvbnN0IHhBeGlzT2JqOiBhbnkgPSAob2JqZWN0cyAmJiBvYmplY3RzW1wieEF4aXNcIl0pIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNob3dYQXhpczogdHlwZW9mIHhBeGlzT2JqW1wic2hvd1wiXSA9PT0gXCJib29sZWFuXCIgPyB4QXhpc09ialtcInNob3dcIl0gOiB0cnVlLFxyXG4gICAgICAgICAgICB4QXhpc1RpdGxlOiB0eXBlb2YgeEF4aXNPYmpbXCJ0aXRsZVwiXSA9PT0gXCJzdHJpbmdcIiA/IHhBeGlzT2JqW1widGl0bGVcIl0gOiBcIlwiLFxyXG4gICAgICAgICAgICBsYWJlbFJvdGF0aW9uOiB0eXBlb2YgeEF4aXNPYmpbXCJsYWJlbFJvdGF0aW9uXCJdID09PSBcIm51bWJlclwiID8geEF4aXNPYmpbXCJsYWJlbFJvdGF0aW9uXCJdIDogMCxcclxuICAgICAgICAgICAgeEF4aXNGb250U2l6ZTogdHlwZW9mIHhBeGlzT2JqW1wiZm9udFNpemVcIl0gPT09IFwibnVtYmVyXCIgPyB4QXhpc09ialtcImZvbnRTaXplXCJdIDogMTQsXHJcbiAgICAgICAgICAgIHhBeGlzRm9udEZhbWlseTogdHlwZW9mIHhBeGlzT2JqW1wiZm9udEZhbWlseVwiXSA9PT0gXCJzdHJpbmdcIiA/IHhBeGlzT2JqW1wiZm9udEZhbWlseVwiXSA6IFwiU2Vnb2UgVUlcIixcclxuICAgICAgICAgICAgeEF4aXNGb250Q29sb3I6IHJlYWRDb2xvcih4QXhpc09ialtcImZvbnRDb2xvclwiXSkgfHwgXCIjODg4XCIsXHJcbiAgICAgICAgICAgIGJvdHRvbU1hcmdpbjogdHlwZW9mIHhBeGlzT2JqW1wiYm90dG9tTWFyZ2luXCJdID09PSBcIm51bWJlclwiID8gTWF0aC5tYXgoNDAsIHhBeGlzT2JqW1wiYm90dG9tTWFyZ2luXCJdKSA6IDgwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExheW91dE9wdGlvbnMob2JqZWN0czogcG93ZXJiaS5EYXRhVmlld09iamVjdHMgfCB1bmRlZmluZWQpOiBMYXlvdXRPcHRpb25zIHtcclxuICAgICAgICBsZXQgc2hvd0JhY2tncm91bmQgPSB0cnVlLCB0aXRsZVRleHQgPSBcIkRTUFwiLCB0aXRsZUZvbnRGYW1pbHkgPSBcIlNlZ29lIFVJXCI7XHJcbiAgICAgICAgbGV0IHRpdGxlRm9udFNpemUgPSAyMCwgdGl0bGVGb250Qm9sZCA9IHRydWUsIHRpdGxlRm9udENvbG9yID0gXCIjMjIyXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzICYmIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzLmxheW91dENhcmQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGMgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncy5sYXlvdXRDYXJkO1xyXG4gICAgICAgICAgICBpZiAobGMuc2hvd0JhY2tncm91bmQpIHNob3dCYWNrZ3JvdW5kID0gbGMuc2hvd0JhY2tncm91bmQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChsYy50aXRsZVRleHQgJiYgdHlwZW9mIGxjLnRpdGxlVGV4dC52YWx1ZSA9PT0gXCJzdHJpbmdcIikgdGl0bGVUZXh0ID0gbGMudGl0bGVUZXh0LnZhbHVlIHx8IFwiRFNQXCI7XHJcbiAgICAgICAgICAgIGlmIChsYy50aXRsZUZvbnRGYW1pbHkgJiYgdHlwZW9mIGxjLnRpdGxlRm9udEZhbWlseS52YWx1ZSA9PT0gXCJzdHJpbmdcIikgdGl0bGVGb250RmFtaWx5ID0gbGMudGl0bGVGb250RmFtaWx5LnZhbHVlIHx8IFwiU2Vnb2UgVUlcIjtcclxuICAgICAgICAgICAgaWYgKGxjLnRpdGxlRm9udFNpemUgJiYgdHlwZW9mIGxjLnRpdGxlRm9udFNpemUudmFsdWUgPT09IFwibnVtYmVyXCIpIHRpdGxlRm9udFNpemUgPSBsYy50aXRsZUZvbnRTaXplLnZhbHVlIHx8IDIwO1xyXG4gICAgICAgICAgICBpZiAobGMudGl0bGVGb250Qm9sZCAmJiB0eXBlb2YgbGMudGl0bGVGb250Qm9sZC52YWx1ZSA9PT0gXCJib29sZWFuXCIpIHRpdGxlRm9udEJvbGQgPSBsYy50aXRsZUZvbnRCb2xkLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAobGMudGl0bGVGb250Q29sb3IpIHRpdGxlRm9udENvbG9yID0gcmVhZENvbG9yKGxjLnRpdGxlRm9udENvbG9yLnZhbHVlKSB8fCBcIiMyMjJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKG9iamVjdHMgJiYgb2JqZWN0c1tcImxheW91dFwiXSkge1xyXG4gICAgICAgICAgICBjb25zdCBsbyA9IG9iamVjdHNbXCJsYXlvdXRcIl0gYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvW1wic2hvd0JhY2tncm91bmRcIl0gPT09IFwiYm9vbGVhblwiKSBzaG93QmFja2dyb3VuZCA9IGxvW1wic2hvd0JhY2tncm91bmRcIl07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9bXCJ0aXRsZVRleHRcIl0gPT09IFwic3RyaW5nXCIpIHRpdGxlVGV4dCA9IGxvW1widGl0bGVUZXh0XCJdIHx8IFwiRFNQXCI7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9bXCJ0aXRsZUZvbnRGYW1pbHlcIl0gPT09IFwic3RyaW5nXCIpIHRpdGxlRm9udEZhbWlseSA9IGxvW1widGl0bGVGb250RmFtaWx5XCJdIHx8IFwiU2Vnb2UgVUlcIjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb1tcInRpdGxlRm9udFNpemVcIl0gPT09IFwibnVtYmVyXCIpIHRpdGxlRm9udFNpemUgPSBsb1tcInRpdGxlRm9udFNpemVcIl0gfHwgMjA7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9bXCJ0aXRsZUZvbnRCb2xkXCJdID09PSBcImJvb2xlYW5cIikgdGl0bGVGb250Qm9sZCA9IGxvW1widGl0bGVGb250Qm9sZFwiXTtcclxuICAgICAgICAgICAgaWYgKGxvW1widGl0bGVGb250Q29sb3JcIl0pIHRpdGxlRm9udENvbG9yID0gcmVhZENvbG9yKGxvW1widGl0bGVGb250Q29sb3JcIl0pIHx8IFwiIzIyMlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBzaG93QmFja2dyb3VuZCwgdGl0bGVUZXh0LCB0aXRsZUZvbnRGYW1pbHksIHRpdGxlRm9udFNpemUsIHRpdGxlRm9udEJvbGQsIHRpdGxlRm9udENvbG9yIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlRGF0YVBvaW50cyhjYXRlZ29yaWVzOiBwb3dlcmJpLkRhdGFWaWV3Q2F0ZWdvcnlDb2x1bW4sIGNhdGVnb3J5VmFsdWVzOiAoc3RyaW5nIHwgbnVtYmVyKVtdLCB2YWx1ZXM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhUG9pbnRzID0gY2F0ZWdvcnlWYWx1ZXMubWFwKChjYXQsIGkpID0+ICh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBjYXQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpXSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uSWQ6IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKS53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgaSkuY3JlYXRlU2VsZWN0aW9uSWQoKVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBjb25zdCBhcmVZZWFycyA9IHRoaXMuZGF0YVBvaW50cy5ldmVyeShkcCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KGRwLmNhdGVnb3J5KTtcclxuICAgICAgICAgICAgcmV0dXJuICFpc05hTihudW0pICYmIG51bSA+PSAxOTAwICYmIG51bSA8PSAyMTAwICYmIGRwLmNhdGVnb3J5Lmxlbmd0aCA9PT0gNDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoYXJlWWVhcnMpIHRoaXMuZGF0YVBvaW50cy5zb3J0KChhLCBiKSA9PiBwYXJzZUludChhLmNhdGVnb3J5KSAtIHBhcnNlSW50KGIuY2F0ZWdvcnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrTGFiZWxSb3RhdGlvbihjYXRlZ29yaWVzOiBzdHJpbmdbXSwgYmFyV2lkdGg6IG51bWJlciwgYmFyU3BhY2luZzogbnVtYmVyLCB4QXhpc0ZvbnRTaXplOiBudW1iZXIsIHhBeGlzRm9udEZhbWlseTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wVGV4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICB0ZW1wVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgeEF4aXNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGVtcFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICAgICAgdGVtcFRleHQudGV4dENvbnRlbnQgPSBjYXQ7XHJcbiAgICAgICAgICAgIHRlbXBUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IHRlbXBUZXh0LmdldEJCb3goKS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5zdmcucmVtb3ZlQ2hpbGQodGVtcFRleHQpO1xyXG4gICAgICAgICAgICBpZiAodGV4dFdpZHRoID4gYmFyV2lkdGggKyBiYXJTcGFjaW5nIC0gNCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckJhY2tncm91bmRSZWN0KHN2Z1dpZHRoOiBudW1iZXIsIHN2Z0hlaWdodDogbnVtYmVyLCBzaG93QmFja2dyb3VuZDogYm9vbGVhbiwgYmFyR3JvdXBzOiBTVkdHRWxlbWVudFtdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYmdSZWN0ID0gY3JlYXRlU3ZnRWxlbWVudChcInJlY3RcIik7XHJcbiAgICAgICAgYmdSZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgXCIwXCIpO1xyXG4gICAgICAgIGJnUmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMFwiKTtcclxuICAgICAgICBiZ1JlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgc3ZnV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmdSZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBzdmdIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmdSZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgc2hvd0JhY2tncm91bmQgPyBcIiNmN2ZiZmZcIiA6IFwidHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgYmdSZWN0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGJnUmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuY2xlYXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKFtdLCBiYXJHcm91cHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCB2aWV3OiB3aW5kb3cgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN2Zy5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBiZ1JlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHt9LCB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ZnLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdmcuaW5zZXJ0QmVmb3JlKGJnUmVjdCwgdGhpcy5zdmcuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQoYmdSZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUaXRsZSh0aXRsZVRleHQ6IHN0cmluZywgdGl0bGVGb250U2l6ZTogbnVtYmVyLCB0aXRsZUZvbnRGYW1pbHk6IHN0cmluZywgdGl0bGVGb250Qm9sZDogYm9vbGVhbiwgdGl0bGVGb250Q29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlU3ZnRWxlbWVudChcInRleHRcIik7XHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwieFwiLCBcIjEwXCIpO1xyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInlcIiwgXCIyMFwiKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgdGl0bGVGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB0aXRsZUZvbnRGYW1pbHkpO1xyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImZvbnQtd2VpZ2h0XCIsIHRpdGxlRm9udEJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCIpO1xyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgdGl0bGVGb250Q29sb3IpO1xyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclhBeGlzVGl0bGUoeEF4aXNUaXRsZTogc3RyaW5nLCBwYWRkaW5nTGVmdDogbnVtYmVyLCBjYXRlZ29yeUNvdW50OiBudW1iZXIsIGJhcldpZHRoOiBudW1iZXIsIGJhclNwYWNpbmc6IG51bWJlciwgYmFzZVk6IG51bWJlciwgeEF4aXNGb250U2l6ZTogbnVtYmVyLCB4QXhpc0ZvbnRDb2xvcjogc3RyaW5nLCB4QXhpc0ZvbnRGYW1pbHk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGF4aXNUaXRsZSA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGF4aXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIChwYWRkaW5nTGVmdCArIChjYXRlZ29yeUNvdW50ICogKGJhcldpZHRoICsgYmFyU3BhY2luZykgLSBiYXJTcGFjaW5nKSAvIDIpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGF4aXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChiYXNlWSArIDQ4KS50b1N0cmluZygpKTtcclxuICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgYXhpc1RpdGxlLnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCB4QXhpc0ZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGF4aXNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHhBeGlzRm9udENvbG9yKTtcclxuICAgICAgICBheGlzVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgeEF4aXNGb250RmFtaWx5KTtcclxuICAgICAgICBheGlzVGl0bGUudGV4dENvbnRlbnQgPSB4QXhpc1RpdGxlO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKGF4aXNUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJMZWdlbmQoZmlsbENvbG9yOiBzdHJpbmcsIGNvbG9yTm9uOiBzdHJpbmcpOiBTVkdHRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgbGVnZW5kR3JvdXAgPSBjcmVhdGVTdmdFbGVtZW50KFwiZ1wiKTtcclxuICAgICAgICBsZXQgbGVnZW5kWCA9IDEwO1xyXG4gICAgICAgIGNvbnN0IGxlZ2VuZFkgPSAzMDtcclxuXHJcbiAgICAgICAgY29uc3QgbGVnZW5kTm9uID0gY3JlYXRlU3ZnRWxlbWVudChcInJlY3RcIik7XHJcbiAgICAgICAgbGVnZW5kTm9uLnNldEF0dHJpYnV0ZShcInhcIiwgbGVnZW5kWC50b1N0cmluZygpKTtcclxuICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwieVwiLCBsZWdlbmRZLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxlZ2VuZE5vbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMwXCIpO1xyXG4gICAgICAgIGxlZ2VuZE5vbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMlwiKTtcclxuICAgICAgICBsZWdlbmROb24uc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xyXG4gICAgICAgIGxlZ2VuZE5vbi5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGNvbG9yTm9uKTtcclxuICAgICAgICBsZWdlbmRHcm91cC5hcHBlbmRDaGlsZChsZWdlbmROb24pO1xyXG5cclxuICAgICAgICBjb25zdCBsZWdlbmROb25UZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChcInRleHRcIik7XHJcbiAgICAgICAgbGVnZW5kTm9uVGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIChsZWdlbmRYICsgMzUpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxlZ2VuZE5vblRleHQuc2V0QXR0cmlidXRlKFwieVwiLCAobGVnZW5kWSArIDEwKS50b1N0cmluZygpKTtcclxuICAgICAgICBsZWdlbmROb25UZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjE0XCIpO1xyXG4gICAgICAgIGxlZ2VuZE5vblRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiMyMjJcIik7XHJcbiAgICAgICAgbGVnZW5kTm9uVGV4dC50ZXh0Q29udGVudCA9IFwiTm9uXCI7XHJcbiAgICAgICAgbGVnZW5kR3JvdXAuYXBwZW5kQ2hpbGQobGVnZW5kTm9uVGV4dCk7XHJcblxyXG4gICAgICAgIGxlZ2VuZFggKz0gODA7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZ2VuZE91aSA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJyZWN0XCIpO1xyXG4gICAgICAgIGxlZ2VuZE91aS5zZXRBdHRyaWJ1dGUoXCJ4XCIsIGxlZ2VuZFgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcInlcIiwgbGVnZW5kWS50b1N0cmluZygpKTtcclxuICAgICAgICBsZWdlbmRPdWkuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMFwiKTtcclxuICAgICAgICBsZWdlbmRPdWkuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTJcIik7XHJcbiAgICAgICAgbGVnZW5kT3VpLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcclxuICAgICAgICBsZWdlbmRPdWkuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBmaWxsQ29sb3IpO1xyXG4gICAgICAgIGxlZ2VuZEdyb3VwLmFwcGVuZENoaWxkKGxlZ2VuZE91aSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZ2VuZE91aVRleHQgPSBjcmVhdGVTdmdFbGVtZW50KFwidGV4dFwiKTtcclxuICAgICAgICBsZWdlbmRPdWlUZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgKGxlZ2VuZFggKyAzNSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbGVnZW5kT3VpVGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIChsZWdlbmRZICsgMTApLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxlZ2VuZE91aVRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiMTRcIik7XHJcbiAgICAgICAgbGVnZW5kT3VpVGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiIzIyMlwiKTtcclxuICAgICAgICBsZWdlbmRPdWlUZXh0LnRleHRDb250ZW50ID0gXCJPdWlcIjtcclxuICAgICAgICBsZWdlbmRHcm91cC5hcHBlbmRDaGlsZChsZWdlbmRPdWlUZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxlZ2VuZEdyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyQmFyKFxyXG4gICAgICAgIGN0eDogQmFyUmVuZGVyQ29udGV4dCxcclxuICAgICAgICBiYXJHcm91cHM6IFNWR0dFbGVtZW50W10sXHJcbiAgICAgICAgc2VsZWN0aW9uSWRzOiBJU2VsZWN0aW9uSWRbXVxyXG4gICAgKTogU1ZHR0VsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY2F0LCBpbmRleCwgcmF3VmFsdWUsIHgsIGJhcldpZHRoLCBiYXJTcGFjaW5nLCBiYXNlWSwgbWF4QmFySGVpZ2h0LCBiYXJSYWRpdXMsXHJcbiAgICAgICAgICAgIGZvbnRTaXplLCBmaWxsQ29sb3IsIGNvbG9yTm9uLCBiYXJWYWx1ZUZvbnRTaXplLCBiYXJWYWx1ZUZvbnRGYW1pbHksIGJhclZhbHVlRm9udENvbG9yLFxyXG4gICAgICAgICAgICBuYXJyb3dNb2RlLCBzaG93WEF4aXMsIHhBeGlzRm9udFNpemUsIHhBeGlzRm9udEZhbWlseSwgeEF4aXNGb250Q29sb3IsXHJcbiAgICAgICAgICAgIGxhYmVsUm90YXRpb24sIG5lZWRzUm90YXRpb24sIGF2YWlsYWJsZVNwYWNlRm9yTGFiZWwsIGZvcm1hdEJhclZhbHVlLCBkZWZzXHJcbiAgICAgICAgfSA9IGN0eDtcclxuXHJcbiAgICAgICAgY29uc3QgcGVyY2VudFZhbHVlID0gcmF3VmFsdWUgKiAxMDA7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXRCYXJWYWx1ZShyYXdWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgcmF3QmFySGVpZ2h0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcmF3VmFsdWUpKSAqIG1heEJhckhlaWdodDtcclxuICAgICAgICBjb25zdCB2aXNpYmxlSGVpZ2h0ID0gcmF3QmFySGVpZ2h0ID4gMCA/IHJhd0JhckhlaWdodCA6IDA7XHJcbiAgICAgICAgY29uc3QgZWZmZWN0aXZlUnggPSBNYXRoLm1pbihiYXJSYWRpdXMsIE1hdGguZmxvb3IoYmFyV2lkdGggLyAyKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhckdyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChcImdcIik7XHJcbiAgICAgICAgYmFyR3JvdXAuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgYmFyR3JvdXAuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgYmFyR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkc1tpbmRleF0sIHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYmFyTm9uID0gY3JlYXRlU3ZnRWxlbWVudChcInJlY3RcIik7XHJcbiAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcInhcIiwgeC50b1N0cmluZygpKTtcclxuICAgICAgICBiYXJOb24uc2V0QXR0cmlidXRlKFwieVwiLCAoYmFzZVkgLSBtYXhCYXJIZWlnaHQpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGJhck5vbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBiYXJXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICBiYXJOb24uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIG1heEJhckhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICBiYXJOb24uc2V0QXR0cmlidXRlKFwicnhcIiwgZWZmZWN0aXZlUngudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmFyTm9uLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3JOb24pO1xyXG4gICAgICAgIGJhckdyb3VwLmFwcGVuZENoaWxkKGJhck5vbik7XHJcblxyXG4gICAgICAgIGlmIChwZXJjZW50VmFsdWUgPCAzNSAmJiB2aXNpYmxlSGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxvd1ZhbHVlQmFyKGJhckdyb3VwLCBkZWZzLCBpbmRleCwgeCwgYmFzZVksIGJhcldpZHRoLCBtYXhCYXJIZWlnaHQsIHZpc2libGVIZWlnaHQsIGVmZmVjdGl2ZVJ4LCBmaWxsQ29sb3IsIGZvcm1hdHRlZFZhbHVlLCBiYXJWYWx1ZUZvbnRTaXplLCBiYXJWYWx1ZUZvbnRGYW1pbHksIGJhclZhbHVlRm9udENvbG9yLCBuYXJyb3dNb2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpc2libGVIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySGlnaFZhbHVlQmFyKGJhckdyb3VwLCB4LCBiYXNlWSwgYmFyV2lkdGgsIHZpc2libGVIZWlnaHQsIG1heEJhckhlaWdodCwgZWZmZWN0aXZlUngsIGZpbGxDb2xvciwgZm9ybWF0dGVkVmFsdWUsIGZvbnRTaXplLCBiYXJWYWx1ZUZvbnRTaXplLCBiYXJWYWx1ZUZvbnRGYW1pbHksIGJhclZhbHVlRm9udENvbG9yLCBuYXJyb3dNb2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBjcmVhdGVTdmdFbGVtZW50KFwicmVjdFwiKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldEF0dHJpYnV0ZShcInhcIiwgKHggKyAyKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldEF0dHJpYnV0ZShcInlcIiwgKGJhc2VZIC0gMikudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCAoYmFyV2lkdGggLSA0KS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjJcIik7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGNvbG9yTm9uKTtcclxuICAgICAgICAgICAgYmFyR3JvdXAuYXBwZW5kQ2hpbGQobWFya2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaG93WEF4aXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJYQXhpc0xhYmVsKGJhckdyb3VwLCBjYXQsIHgsIGJhcldpZHRoLCBiYXJTcGFjaW5nLCBiYXNlWSwgeEF4aXNGb250U2l6ZSwgeEF4aXNGb250RmFtaWx5LCB4QXhpc0ZvbnRDb2xvciwgbGFiZWxSb3RhdGlvbiwgbmVlZHNSb3RhdGlvbiwgYXZhaWxhYmxlU3BhY2VGb3JMYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYXJHcm91cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQgYXMgTW91c2VFdmVudDtcclxuICAgICAgICAgICAgY29uc3QgaXNDdHJsUHJlc3NlZCA9IG1vdXNlRXZlbnQuY3RybEtleSB8fCBtb3VzZUV2ZW50Lm1ldGFLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zZWxlY3Qoc2VsZWN0aW9uSWRzW2luZGV4XSwgaXNDdHJsUHJlc3NlZClcclxuICAgICAgICAgICAgICAgIC50aGVuKChpZHM6IElTZWxlY3Rpb25JZFtdKSA9PiB7IHRoaXMudXBkYXRlU2VsZWN0aW9uKGlkcywgYmFyR3JvdXBzKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvb2x0aXAgZXZlbnRzXHJcbiAgICAgICAgYmFyR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcERhdGE6IFZpc3VhbFRvb2x0aXBEYXRhSXRlbVtdID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdEJhclZhbHVlKHJhd1ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTZXJ2aWNlLnNob3coe1xyXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW1zOiB0b29sdGlwRGF0YSxcclxuICAgICAgICAgICAgICAgIGlkZW50aXRpZXM6IFtzZWxlY3Rpb25JZHNbaW5kZXhdXSxcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WV0sXHJcbiAgICAgICAgICAgICAgICBpc1RvdWNoRXZlbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBiYXJHcm91cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwRGF0YTogVmlzdWFsVG9vbHRpcERhdGFJdGVtW10gPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGNhdCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0QmFyVmFsdWUocmF3VmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNlcnZpY2UubW92ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhSXRlbXM6IHRvb2x0aXBEYXRhLFxyXG4gICAgICAgICAgICAgICAgaWRlbnRpdGllczogW3NlbGVjdGlvbklkc1tpbmRleF1dLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXSxcclxuICAgICAgICAgICAgICAgIGlzVG91Y2hFdmVudDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJhckdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNlcnZpY2UuaGlkZSh7XHJcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGVseTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzVG91Y2hFdmVudDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBiYXJHcm91cDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckxvd1ZhbHVlQmFyKFxyXG4gICAgICAgIGJhckdyb3VwOiBTVkdHRWxlbWVudCwgZGVmczogU1ZHRGVmc0VsZW1lbnQsIGluZGV4OiBudW1iZXIsIHg6IG51bWJlciwgYmFzZVk6IG51bWJlcixcclxuICAgICAgICBiYXJXaWR0aDogbnVtYmVyLCBtYXhCYXJIZWlnaHQ6IG51bWJlciwgdmlzaWJsZUhlaWdodDogbnVtYmVyLCBlZmZlY3RpdmVSeDogbnVtYmVyLFxyXG4gICAgICAgIGZpbGxDb2xvcjogc3RyaW5nLCBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nLCBiYXJWYWx1ZUZvbnRTaXplOiBudW1iZXIsXHJcbiAgICAgICAgYmFyVmFsdWVGb250RmFtaWx5OiBzdHJpbmcsIGJhclZhbHVlRm9udENvbG9yOiBzdHJpbmcsIG5hcnJvd01vZGU6IGJvb2xlYW5cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNsaXBJZCA9IGBjbGlwLWJhci0ke2luZGV4fS0ke0RhdGUubm93KCl9YDtcclxuICAgICAgICBjb25zdCBjbGlwUGF0aCA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJjbGlwUGF0aFwiKTtcclxuICAgICAgICBjbGlwUGF0aC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjbGlwSWQpO1xyXG4gICAgICAgIGNvbnN0IGNsaXBSZWN0ID0gY3JlYXRlU3ZnRWxlbWVudChcInJlY3RcIik7XHJcbiAgICAgICAgY2xpcFJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNsaXBSZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgKGJhc2VZIC0gbWF4QmFySGVpZ2h0KS50b1N0cmluZygpKTtcclxuICAgICAgICBjbGlwUmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBiYXJXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICBjbGlwUmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgbWF4QmFySGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNsaXBSZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIGVmZmVjdGl2ZVJ4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNsaXBQYXRoLmFwcGVuZENoaWxkKGNsaXBSZWN0KTtcclxuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKGNsaXBQYXRoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsbFJlY3QgPSBjcmVhdGVTdmdFbGVtZW50KFwicmVjdFwiKTtcclxuICAgICAgICBmaWxsUmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZmlsbFJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCAoYmFzZVkgLSB2aXNpYmxlSGVpZ2h0KS50b1N0cmluZygpKTtcclxuICAgICAgICBmaWxsUmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBiYXJXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICBmaWxsUmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgdmlzaWJsZUhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICBmaWxsUmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGZpbGxDb2xvcik7XHJcbiAgICAgICAgZmlsbFJlY3Quc2V0QXR0cmlidXRlKFwiY2xpcC1wYXRoXCIsIGB1cmwoIyR7Y2xpcElkfSlgKTtcclxuICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZChmaWxsUmVjdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHR4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGNvbnN0IHR4dFggPSB4ICsgYmFyV2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IHR4dFkgPSBiYXNlWSAtIG1heEJhckhlaWdodCAvIDI7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInhcIiwgdHh0WC50b1N0cmluZygpKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwieVwiLCB0eHRZLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBiYXJWYWx1ZUZvbnRTaXplLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGJhclZhbHVlRm9udENvbG9yKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwiZm9udC1mYW1pbHlcIiwgYmFyVmFsdWVGb250RmFtaWx5KTtcclxuICAgICAgICB0eHQudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRWYWx1ZTtcclxuICAgICAgICBpZiAobmFycm93TW9kZSkge1xyXG4gICAgICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoLTkwICR7dHh0WH0gJHt0eHRZfSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFyR3JvdXAuYXBwZW5kQ2hpbGQodHh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckhpZ2hWYWx1ZUJhcihcclxuICAgICAgICBiYXJHcm91cDogU1ZHR0VsZW1lbnQsIHg6IG51bWJlciwgYmFzZVk6IG51bWJlciwgYmFyV2lkdGg6IG51bWJlcixcclxuICAgICAgICB2aXNpYmxlSGVpZ2h0OiBudW1iZXIsIG1heEJhckhlaWdodDogbnVtYmVyLCBlZmZlY3RpdmVSeDogbnVtYmVyLCBmaWxsQ29sb3I6IHN0cmluZyxcclxuICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogc3RyaW5nLCBmb250U2l6ZTogbnVtYmVyLCBiYXJWYWx1ZUZvbnRTaXplOiBudW1iZXIsXHJcbiAgICAgICAgYmFyVmFsdWVGb250RmFtaWx5OiBzdHJpbmcsIGJhclZhbHVlRm9udENvbG9yOiBzdHJpbmcsIG5hcnJvd01vZGU6IGJvb2xlYW5cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJhckhlaWdodCA9IHZpc2libGVIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgYmFyT3VpID0gY3JlYXRlU3ZnRWxlbWVudChcInJlY3RcIik7XHJcbiAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcInhcIiwgeC50b1N0cmluZygpKTtcclxuICAgICAgICBiYXJPdWkuc2V0QXR0cmlidXRlKFwieVwiLCAoYmFzZVkgLSBiYXJIZWlnaHQpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGJhck91aS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBiYXJXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICBiYXJPdWkuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGJhckhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICBjb25zdCByeEZvck91aSA9IE1hdGgubWluKGVmZmVjdGl2ZVJ4LCBNYXRoLmZsb29yKGJhckhlaWdodCAvIDIpKTtcclxuICAgICAgICBiYXJPdWkuc2V0QXR0cmlidXRlKFwicnhcIiwgcnhGb3JPdWkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYmFyT3VpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZmlsbENvbG9yKTtcclxuICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZChiYXJPdWkpO1xyXG5cclxuICAgICAgICBjb25zdCB0eHQgPSBjcmVhdGVTdmdFbGVtZW50KFwidGV4dFwiKTtcclxuICAgICAgICBjb25zdCB0eHRYID0geCArIGJhcldpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB0eHRZID0gbmFycm93TW9kZSA/IChiYXNlWSAtIG1heEJhckhlaWdodCAvIDIpIDogKGJhc2VZIC0gYmFySGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcInhcIiwgdHh0WC50b1N0cmluZygpKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwieVwiLCB0eHRZLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgY29uc3QgaW5uZXJGb250U2l6ZSA9IG5hcnJvd01vZGUgPyBmb250U2l6ZSA6ICgoYmFySGVpZ2h0IDwgZm9udFNpemUpID8gTWF0aC5tYXgoOCwgTWF0aC5yb3VuZChiYXJIZWlnaHQgKiAwLjYpKSA6IGZvbnRTaXplKTtcclxuICAgICAgICB0eHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIGlubmVyRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdHh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgYmFyVmFsdWVGb250Q29sb3IpO1xyXG4gICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBiYXJWYWx1ZUZvbnRGYW1pbHkpO1xyXG4gICAgICAgIHR4dC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFZhbHVlO1xyXG4gICAgICAgIGlmIChuYXJyb3dNb2RlKSB7XHJcbiAgICAgICAgICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHJvdGF0ZSgtOTAgJHt0eHRYfSAke3R4dFl9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXJHcm91cC5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyWEF4aXNMYWJlbChcclxuICAgICAgICBiYXJHcm91cDogU1ZHR0VsZW1lbnQsIGNhdDogc3RyaW5nLCB4OiBudW1iZXIsIGJhcldpZHRoOiBudW1iZXIsIGJhclNwYWNpbmc6IG51bWJlcixcclxuICAgICAgICBiYXNlWTogbnVtYmVyLCB4QXhpc0ZvbnRTaXplOiBudW1iZXIsIHhBeGlzRm9udEZhbWlseTogc3RyaW5nLCB4QXhpc0ZvbnRDb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIGxhYmVsUm90YXRpb246IG51bWJlciwgbmVlZHNSb3RhdGlvbjogYm9vbGVhbiwgYXZhaWxhYmxlU3BhY2VGb3JMYWJlbDogbnVtYmVyXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB5ZWFyVHh0ID0gY3JlYXRlU3ZnRWxlbWVudChcInRleHRcIik7XHJcbiAgICAgICAgY29uc3QgeWVhclggPSB4ICsgYmFyV2lkdGggLyAyO1xyXG4gICAgICAgIGNvbnN0IHllYXJZID0gYmFzZVkgKyAyMDtcclxuICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcInhcIiwgeWVhclgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHllYXJZLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHllYXJUeHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIHhBeGlzRm9udFNpemUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHhBeGlzRm9udENvbG9yKTtcclxuICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIHhBeGlzRm9udEZhbWlseSk7XHJcblxyXG4gICAgICAgIGxldCBkaXNwbGF5VGV4dCA9IGNhdDtcclxuICAgICAgICBjb25zdCBtYXhMYWJlbFdpZHRoID0gYmFyV2lkdGggKyBiYXJTcGFjaW5nIC0gNDtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcFRleHQgPSBjcmVhdGVTdmdFbGVtZW50KFwidGV4dFwiKTtcclxuICAgICAgICB0ZW1wVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgeEF4aXNGb250U2l6ZS50b1N0cmluZygpKTtcclxuICAgICAgICB0ZW1wVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCB4QXhpc0ZvbnRGYW1pbHkpO1xyXG4gICAgICAgIHRlbXBUZXh0LnRleHRDb250ZW50ID0gY2F0O1xyXG4gICAgICAgIHRlbXBUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRlbXBUZXh0KTtcclxuICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSB0ZW1wVGV4dC5nZXRCQm94KCkud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zdmcucmVtb3ZlQ2hpbGQodGVtcFRleHQpO1xyXG5cclxuICAgICAgICBpZiAobmVlZHNSb3RhdGlvbiB8fCBsYWJlbFJvdGF0aW9uICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gbGFiZWxSb3RhdGlvbiAhPT0gMCA/IGxhYmVsUm90YXRpb24gOiA0NTtcclxuICAgICAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcclxuICAgICAgICAgICAgeWVhclR4dC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHJvdGF0ZSgkey1yb3RhdGlvbn0gJHt5ZWFyWH0gJHt5ZWFyWX0pYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFJvdGF0ZWRMZW5ndGggPSBNYXRoLmZsb29yKGF2YWlsYWJsZVNwYWNlRm9yTGFiZWwgKiAxLjIpO1xyXG4gICAgICAgICAgICBpZiAodGV4dFdpZHRoID4gbWF4Um90YXRlZExlbmd0aCAmJiBjYXQubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJzVG9LZWVwID0gTWF0aC5mbG9vcihjYXQubGVuZ3RoICogKG1heFJvdGF0ZWRMZW5ndGggLyB0ZXh0V2lkdGgpKSAtIDM7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGV4dCA9IGNhdC5zdWJzdHJpbmcoMCwgTWF0aC5tYXgoMSwgY2hhcnNUb0tlZXApKSArIFwiLi4uXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5ZWFyVHh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGV4dFdpZHRoID4gbWF4TGFiZWxXaWR0aCAmJiBjYXQubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRydW5jYXRlTGVuZ3RoID0gTWF0aC5mbG9vcihjYXQubGVuZ3RoICogKG1heExhYmVsV2lkdGggLyB0ZXh0V2lkdGgpKSAtIDM7XHJcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZUxlbmd0aCA9IE1hdGgubWF4KDEsIHRydW5jYXRlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0ID0gY2F0LnN1YnN0cmluZygwLCB0cnVuY2F0ZUxlbmd0aCkgKyBcIi4uLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB5ZWFyVHh0LnRleHRDb250ZW50ID0gZGlzcGxheVRleHQ7XHJcbiAgICAgICAgYmFyR3JvdXAuYXBwZW5kQ2hpbGQoeWVhclR4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWRJZHM6IElTZWxlY3Rpb25JZFtdLCBiYXJHcm91cHM6IFNWR0dFbGVtZW50W10pIHtcclxuICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsJ29wYWNpdMOpIGRlcyBiYXJyZXMgc2Vsb24gbGEgc8OpbGVjdGlvblxyXG4gICAgICAgIGJhckdyb3Vwcy5mb3JFYWNoKChncm91cCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSWRzLnNvbWUoc2VsZWN0ZWRJZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRLZXkgPSAoc2VsZWN0ZWRJZCBhcyBhbnkpLmtleTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhUG9pbnRLZXkgPSAodGhpcy5kYXRhUG9pbnRzW2luZGV4XT8uc2VsZWN0aW9uSWQgYXMgYW55KT8ua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEtleSA9PT0gZGF0YVBvaW50S2V5O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBncm91cC5zdHlsZS5vcGFjaXR5ID0gaXNTZWxlY3RlZCA/IFwiMVwiIDogXCIwLjNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0aW5nTW9kZWwoKTogcG93ZXJiaS52aXN1YWxzLkZvcm1hdHRpbmdNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5idWlsZEZvcm1hdHRpbmdNb2RlbCh0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGhlbHBlciB0byBnZXQgY29sb3IgdmFsdWUgKGhhbmRsZXMgQ29sb3JQaWNrZXIgb2JqZWN0KVxyXG5mdW5jdGlvbiByZWFkQ29sb3Iob2JqOiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCFvYmopIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxyXG4gICAgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHsgcmV0dXJuIG9iajsgfVxyXG4gICAgaWYgKG9iai5zb2xpZCAmJiBvYmouc29saWQuY29sb3IpIHsgcmV0dXJuIG9iai5zb2xpZC5jb2xvcjsgfVxyXG4gICAgaWYgKG9iai52YWx1ZSkgeyByZXR1cm4gb2JqLnZhbHVlOyB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaWdodGVuQ29sb3IoaGV4OiBzdHJpbmcsIHBlcmNlbnQ6IG51bWJlciwgYWxwaGE6IG51bWJlciA9IDAuNSk6IHN0cmluZyB7XHJcbiAgICAvLyBDb252ZXJ0IGhleCB0byBSR0JcclxuICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwO1xyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDcpIHtcclxuICAgICAgICByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNik7XHJcbiAgICAgICAgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpO1xyXG4gICAgICAgIGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcclxuICAgIH1cclxuICAgIC8vIExpZ2h0ZW5cclxuICAgIHIgPSBNYXRoLnJvdW5kKHIgKyAoMjU1IC0gcikgKiBwZXJjZW50KTtcclxuICAgIGcgPSBNYXRoLnJvdW5kKGcgKyAoMjU1IC0gZykgKiBwZXJjZW50KTtcclxuICAgIGIgPSBNYXRoLnJvdW5kKGIgKyAoMjU1IC0gYikgKiBwZXJjZW50KTtcclxuICAgIHJldHVybiBgcmdiYSgke3J9LCR7Z30sJHtifSwke2FscGhhfSlgO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSBudWxsOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBWaXN1YWwgfSBmcm9tIFwiLi4vLi4vc3JjL3Zpc3VhbFwiO1xuaW1wb3J0IHBvd2VyYmlWaXN1YWxzQXBpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XG5pbXBvcnQgSVZpc3VhbFBsdWdpbiA9IHBvd2VyYmlWaXN1YWxzQXBpLnZpc3VhbHMucGx1Z2lucy5JVmlzdWFsUGx1Z2luO1xuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucztcbmltcG9ydCBEaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5EaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnM7XG52YXIgcG93ZXJiaUtleTogYW55ID0gXCJwb3dlcmJpXCI7XG52YXIgcG93ZXJiaTogYW55ID0gd2luZG93W3Bvd2VyYmlLZXldO1xudmFyIGhpc3RvZ3JhbW1lcGVyc282MTdEMTlDODQyQkM0REI0OEJFOUFBNTY3ODhDMTgyMV9ERUJVRzogSVZpc3VhbFBsdWdpbiA9IHtcbiAgICBuYW1lOiAnaGlzdG9ncmFtbWVwZXJzbzYxN0QxOUM4NDJCQzREQjQ4QkU5QUE1Njc4OEMxODIxX0RFQlVHJyxcbiAgICBkaXNwbGF5TmFtZTogJ2hpc3RvZ3JhbW1lcGVyc28nLFxuICAgIGNsYXNzOiAnVmlzdWFsJyxcbiAgICBhcGlWZXJzaW9uOiAnNS4xMC4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUdcIl0gPSBoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUc7XG59XG5leHBvcnQgZGVmYXVsdCBoaXN0b2dyYW1tZXBlcnNvNjE3RDE5Qzg0MkJDNERCNDhCRTlBQTU2Nzg4QzE4MjFfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==