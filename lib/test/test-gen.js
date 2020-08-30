"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Mustache = __importStar(require("mustache"));
var __1 = require("..");
var tenant_test_1 = require("./tenant.test");
var templates_1 = require("./templates");
var stableFormDecoratorParser = new __1.StableFormDecoratorParser();
var stableQueryBarDecoratorParser = new __1.StableQueryBarDecoratorParser();
var stableTableDecoratorParser = new __1.StableTableDecoratorParser();
console.log(stableFormDecoratorParser.getFormByTarget(tenant_test_1.TenantCreateForm));
var querybar = stableQueryBarDecoratorParser.getQueryBarByTarget(tenant_test_1.TenantQueryBar);
var table = stableTableDecoratorParser.getStableTableData(tenant_test_1.TenantList);
var output = Mustache.render(templates_1.tableFile, { table: table, toolbar: querybar }, {
    licenseInfo: templates_1.licenseInfoFile,
    formItems: templates_1.formItemsFile
});
console.log(output.replace(/&lt;/g, '{').replace(/&gt;/g, '}'));
