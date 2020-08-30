"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumns = exports.Col = exports.columnMetadataKey = void 0;
require("reflect-metadata");
exports.columnMetadataKey = Symbol("column");
function Col(formItem) {
    return function (target, propertyKey) {
        var formItems = getColumns(target);
        formItem.index = propertyKey;
        formItems.push(formItem);
        Reflect.defineMetadata(exports.columnMetadataKey, formItems, target);
    };
}
exports.Col = Col;
function getColumns(target) {
    return Reflect.getMetadata(exports.columnMetadataKey, target) || [];
}
exports.getColumns = getColumns;
