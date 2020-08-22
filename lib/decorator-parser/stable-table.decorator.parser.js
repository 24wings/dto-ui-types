"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StableTableDecoratorParser = void 0;
var meta_decorator_1 = require("../meta-decorator");
var stable_decorator_1 = require("../meta-decorator/stable.decorator");
var StableTableDecoratorParser = /** @class */ (function () {
    function StableTableDecoratorParser() {
    }
    StableTableDecoratorParser.prototype.getStableTableData = function (target) {
        return Object.assign(stable_decorator_1.getStableTableData(target), { formItems: this.getFieldsByTarget(target) });
    };
    StableTableDecoratorParser.prototype.getFieldsByTarget = function (target) {
        return meta_decorator_1.getFields(target.prototype);
    };
    return StableTableDecoratorParser;
}());
exports.StableTableDecoratorParser = StableTableDecoratorParser;
