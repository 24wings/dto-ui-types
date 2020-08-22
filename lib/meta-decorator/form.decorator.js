"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormMeta = exports.Form = exports.formMetadataKey = void 0;
exports.formMetadataKey = Symbol("form");
function Form(form, iifs) {
    if (iifs === void 0) { iifs = []; }
    return function (target) {
        Reflect.defineMetadata(exports.formMetadataKey, form, target);
    };
}
exports.Form = Form;
function getFormMeta(target) {
    return Reflect.getMetadata(exports.formMetadataKey, target);
}
exports.getFormMeta = getFormMeta;
