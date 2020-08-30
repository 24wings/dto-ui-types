"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantList = exports.TenantCreateForm = exports.TenantQueryBar = void 0;
var form_decorator_1 = require("../meta-decorator/form.decorator");
var form_item_decorator_1 = require("../meta-decorator/form-item.decorator");
var query_bar_decorator_1 = require("../meta-decorator/query-bar.decorator");
var stable_decorator_1 = require("../meta-decorator/stable.decorator");
var column_decorator_1 = require("../meta-decorator/column.decorator");
var TenantQueryBar = /** @class */ (function () {
    function TenantQueryBar() {
    }
    __decorate([
        form_item_decorator_1.Field({ label: '公司名称 公司代码' }),
        __metadata("design:type", String)
    ], TenantQueryBar.prototype, "Filter", void 0);
    __decorate([
        form_item_decorator_1.Field({
            label: '版本',
            loadOptionsUrl: 'Request URL: https://shop.fotaboss.com/api/services/app/Edition/GetEditionComboboxItems?selectedEditionId=0&addAllItem=true&onlyFreeItems=false',
            loadOptionsKey: 'displayText',
            loadOptionsValue: 'value',
            control: 'select'
        }),
        __metadata("design:type", Number)
    ], TenantQueryBar.prototype, "EditionId", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '订阅开始时间', control: 'date' }),
        __metadata("design:type", Date)
    ], TenantQueryBar.prototype, "SubscriptionEndDateStart", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '订阅结束时间', control: 'date' }),
        __metadata("design:type", Date)
    ], TenantQueryBar.prototype, "SubscriptionEndDateEnd", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '创建开始时间', control: 'date' }),
        __metadata("design:type", Date)
    ], TenantQueryBar.prototype, "CreationDateStart", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '创建结束时间', control: 'date' }),
        __metadata("design:type", Date)
    ], TenantQueryBar.prototype, "CreationDateEnd", void 0);
    TenantQueryBar = __decorate([
        query_bar_decorator_1.QueryBar({ loadUrl: '' })
    ], TenantQueryBar);
    return TenantQueryBar;
}());
exports.TenantQueryBar = TenantQueryBar;
var TenantCreateForm = /** @class */ (function () {
    function TenantCreateForm() {
    }
    __decorate([
        form_item_decorator_1.Field({ label: 'id', control: 'text' }),
        __metadata("design:type", Number)
    ], TenantCreateForm.prototype, "id", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '公司姓名', control: 'text' }),
        __metadata("design:type", String)
    ], TenantCreateForm.prototype, "name", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '租户姓名', control: 'text' }),
        __metadata("design:type", String)
    ], TenantCreateForm.prototype, "tenancyName", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '激活', control: 'checkbox' }),
        __metadata("design:type", Boolean)
    ], TenantCreateForm.prototype, "isActive", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '过渡期', control: 'checkbox' }),
        __metadata("design:type", Boolean)
    ], TenantCreateForm.prototype, "isInTrialPeriod", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '是否随机密码', control: 'checkbox' }),
        __metadata("design:type", Boolean)
    ], TenantCreateForm.prototype, "isRandomPassword", void 0);
    __decorate([
        form_item_decorator_1.Field({ label: '管理员密码', control: 'text' }),
        __metadata("design:type", String)
    ], TenantCreateForm.prototype, "adminPassword", void 0);
    TenantCreateForm = __decorate([
        form_decorator_1.Form({ title: '新增租户' })
    ], TenantCreateForm);
    return TenantCreateForm;
}());
exports.TenantCreateForm = TenantCreateForm;
var TenantList = /** @class */ (function () {
    function TenantList() {
    }
    __decorate([
        column_decorator_1.Col({ title: 'id', type: 'text' }),
        __metadata("design:type", Number)
    ], TenantList.prototype, "id", void 0);
    __decorate([
        column_decorator_1.Col({ title: '公司姓名', type: 'text' }),
        __metadata("design:type", String)
    ], TenantList.prototype, "name", void 0);
    __decorate([
        column_decorator_1.Col({ title: '租户姓名', type: 'text' }),
        __metadata("design:type", String)
    ], TenantList.prototype, "tenancyName", void 0);
    __decorate([
        column_decorator_1.Col({ title: '激活', type: 'checkbox' }),
        __metadata("design:type", Boolean)
    ], TenantList.prototype, "isActive", void 0);
    __decorate([
        column_decorator_1.Col({ title: '过渡期', type: 'checkbox' }),
        __metadata("design:type", Boolean)
    ], TenantList.prototype, "isInTrialPeriod", void 0);
    __decorate([
        column_decorator_1.Col({ title: '是否随机密码', type: 'checkbox' }),
        __metadata("design:type", Boolean)
    ], TenantList.prototype, "isRandomPassword", void 0);
    __decorate([
        column_decorator_1.Col({ title: '管理员密码', type: 'text' }),
        __metadata("design:type", String)
    ], TenantList.prototype, "adminPassword", void 0);
    TenantList = __decorate([
        stable_decorator_1.StableTable({ title: "租户" })
    ], TenantList);
    return TenantList;
}());
exports.TenantList = TenantList;
