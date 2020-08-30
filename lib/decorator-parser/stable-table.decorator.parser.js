"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StableTableDecoratorParser = void 0;
var stable_decorator_1 = require("../meta-decorator/stable.decorator");
var column_decorator_1 = require("../meta-decorator/column.decorator");
var StableTableDecoratorParser = /** @class */ (function () {
    function StableTableDecoratorParser() {
    }
    StableTableDecoratorParser.prototype.getStableTableData = function (target) {
        return Object.assign(stable_decorator_1.getStableTableData(target), { columns: this.getFieldsByTarget(target) });
    };
    StableTableDecoratorParser.prototype.getFieldsByTarget = function (target) {
        return column_decorator_1.getColumns(target.prototype);
    };
    return StableTableDecoratorParser;
}());
exports.StableTableDecoratorParser = StableTableDecoratorParser;
