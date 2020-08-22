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
exports.StableForm = void 0;
var basic_form_1 = require("../../basic/basic-form");
var StableForm = /** @class */ (function (_super) {
    __extends(StableForm, _super);
    function StableForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StableForm;
}(basic_form_1.BasicForm));
exports.StableForm = StableForm;
