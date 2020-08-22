"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFields = exports.Field = exports.formItemMetadataKey = void 0;
require("reflect-metadata");
exports.formItemMetadataKey = Symbol("field");
function Field(formItem) {
    return function (target, propertyKey) {
        var formItems = getFields(target);
        formItem.field = propertyKey;
        formItems.push(formItem);
        Reflect.defineMetadata(exports.formItemMetadataKey, formItems, target);
    };
}
exports.Field = Field;
function getFields(target) {
    return Reflect.getMetadata(exports.formItemMetadataKey, target) || [];
}
exports.getFields = getFields;
