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
exports.StableFormDecoratorParser = void 0;
var abstract_form_decorator_parser_1 = require("./abstract-form-decorator.parser");
var form_decorator_1 = require("../meta-decorator/form.decorator");
var form_item_decorator_1 = require("../meta-decorator/form-item.decorator");
var StableFormDecoratorParser = /** @class */ (function (_super) {
    __extends(StableFormDecoratorParser, _super);
    function StableFormDecoratorParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StableFormDecoratorParser.prototype.getFormByTarget = function (target) {
        return Object.assign(form_decorator_1.getFormMeta(target), { formItems: this.getFieldsByTarget(target) });
    };
    StableFormDecoratorParser.prototype.getFieldsByTarget = function (target) {
        return form_item_decorator_1.getFields(target.prototype);
    };
    return StableFormDecoratorParser;
}(abstract_form_decorator_parser_1.AbstractFormDecoratorParser));
exports.StableFormDecoratorParser = StableFormDecoratorParser;
