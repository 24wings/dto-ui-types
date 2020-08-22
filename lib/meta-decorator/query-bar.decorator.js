"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryBar = exports.QueryBar = exports.queryBarKey = void 0;
exports.queryBarKey = Symbol("query-bar");
function QueryBar(queryBar, iifs) {
    if (iifs === void 0) { iifs = []; }
    return function (target) {
        Reflect.defineMetadata(exports.queryBarKey, queryBar, target);
    };
}
exports.QueryBar = QueryBar;
function getQueryBar(target) {
    return Reflect.getMetadata(exports.queryBarKey, target);
}
exports.getQueryBar = getQueryBar;
