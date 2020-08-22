"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStableTableData = exports.StableTable = exports.stableTableMetadataKey = void 0;
exports.stableTableMetadataKey = Symbol("stable-table");
function StableTable(form) {
    return function (target) {
        Reflect.defineMetadata(exports.stableTableMetadataKey, form, target);
    };
}
exports.StableTable = StableTable;
function getStableTableData(target) {
    return Reflect.getMetadata(exports.stableTableMetadataKey, target);
}
exports.getStableTableData = getStableTableData;
