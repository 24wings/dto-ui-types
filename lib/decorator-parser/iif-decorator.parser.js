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
exports.IifDecoratorParser = void 0;
var abstract_iif_decorator_parser_1 = require("./abstract-iif-decorator.parser");
var IifDecoratorParser = /** @class */ (function (_super) {
    __extends(IifDecoratorParser, _super);
    function IifDecoratorParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IifDecoratorParser;
}(abstract_iif_decorator_parser_1.AbstractIIfDecoratorParser));
exports.IifDecoratorParser = IifDecoratorParser;
