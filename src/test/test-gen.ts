import * as Mustache from 'mustache';
import { StableTableDecoratorParser, StableQueryBarDecoratorParser, StableFormDecoratorParser } from '..';
import { TenantList, TenantCreateForm, TenantQueryBar } from './tenant.test';
import { tableFile, licenseInfoFile, formItemsFile } from './templates';
const stableFormDecoratorParser = new StableFormDecoratorParser();
const stableQueryBarDecoratorParser = new StableQueryBarDecoratorParser()
const stableTableDecoratorParser = new StableTableDecoratorParser();
console.log(stableFormDecoratorParser.getFormByTarget(TenantCreateForm));
const querybar = stableQueryBarDecoratorParser.getQueryBarByTarget(TenantQueryBar);
const table = stableTableDecoratorParser.getStableTableData(TenantList);

var output = Mustache.render(tableFile, { table, toolbar: querybar }, {
  licenseInfo: licenseInfoFile,
  formItems: formItemsFile
});
console.log(output.replace(/&lt;/g, '{').replace(/&gt;/g, '}'))