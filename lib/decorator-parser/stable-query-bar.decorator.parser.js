"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StableQueryBarDecoratorParser = void 0;
var form_item_decorator_1 = require("../meta-decorator/form-item.decorator");
var query_bar_decorator_1 = require("../meta-decorator/query-bar.decorator");
var abstract_query_bar_decorator_parser_1 = require("./abstract-query-bar-decorator.parser");
var StableQueryBarDecoratorParser = /** @class */ (function (_super) {
    __extends(StableQueryBarDecoratorParser, _super);
    function StableQueryBarDecoratorParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StableQueryBarDecoratorParser.prototype.getQueryBarByTarget = function (target) {
        return Object.assign(query_bar_decorator_1.getQueryBar(target), { formItems: this.getFieldsByTarget(target) });
    };
    StableQueryBarDecoratorParser.prototype.getFieldsByTarget = function (target) {
        return form_item_decorator_1.getFields(target.prototype);
    };
    return StableQueryBarDecoratorParser;
}(abstract_query_bar_decorator_parser_1.AbstractQueryBarDecoratorParser));
exports.StableQueryBarDecoratorParser = StableQueryBarDecoratorParser;
