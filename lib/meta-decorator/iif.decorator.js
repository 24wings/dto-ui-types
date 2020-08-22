"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIifData = exports.Iif = exports.iifDataMetadataKey = void 0;
exports.iifDataMetadataKey = Symbol("iif-data");
function Iif(formItem) {
    return function (target, propertyKey) {
        var formItems = getIifData(target);
        formItems.push(formItem);
        Reflect.defineMetadata(exports.iifDataMetadataKey, formItems, target);
    };
}
exports.Iif = Iif;
function getIifData(target) {
    return Reflect.getMetadata(exports.iifDataMetadataKey, target) || [];
}
exports.getIifData = getIifData;
