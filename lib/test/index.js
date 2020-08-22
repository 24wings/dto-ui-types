"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tenant_test_1 = require("./tenant.test");
var stable_form_decorator_parser_1 = require("../decorator-parser/stable-form-decorator.parser");
var stable_query_bar_decorator_parser_1 = require("../decorator-parser/stable-query-bar.decorator.parser");
var stable_table_decorator_parser_1 = require("../decorator-parser/stable-table.decorator.parser");
var stableFormDecoratorParser = new stable_form_decorator_parser_1.StableFormDecoratorParser();
var stableQueryBarDecoratorParser = new stable_query_bar_decorator_parser_1.StableQueryBarDecoratorParser();
var stableTableDecoratorParser = new stable_table_decorator_parser_1.StableTableDecoratorParser();
console.log(stableFormDecoratorParser.getFormByTarget(tenant_test_1.TenantCreateForm));
console.log(stableQueryBarDecoratorParser.getQueryBarByTarget(tenant_test_1.TenantQueryBar));
console.log(stableFormDecoratorParser.getFormByTarget(tenant_test_1.TenantCreateForm));
console.log(stableQueryBarDecoratorParser.getQueryBarByTarget(tenant_test_1.TenantQueryBar));
console.log(stableTableDecoratorParser.getStableTableData(tenant_test_1.TenantList));