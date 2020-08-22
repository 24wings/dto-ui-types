import { TenantQueryBar, TenantCreateForm, TenantList } from "./tenant.test";
import { StableFormDecoratorParser } from "../decorator-parser/stable-form-decorator.parser";
import { StableQueryBarDecoratorParser } from "../decorator-parser/stable-query-bar.decorator.parser";
import { StableTableDecoratorParser } from "../decorator-parser/stable-table.decorator.parser";
const stableFormDecoratorParser = new StableFormDecoratorParser();
const stableQueryBarDecoratorParser = new StableQueryBarDecoratorParser()
const stableTableDecoratorParser = new StableTableDecoratorParser();
console.log(stableFormDecoratorParser.getFormByTarget(TenantCreateForm));
console.log(stableQueryBarDecoratorParser.getQueryBarByTarget(TenantQueryBar));
console.log(stableFormDecoratorParser.getFormByTarget(TenantCreateForm));
console.log(stableQueryBarDecoratorParser.getQueryBarByTarget(TenantQueryBar));
console.log(stableTableDecoratorParser.getStableTableData(TenantList));