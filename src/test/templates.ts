import * as fs from 'fs';
import * as path from 'path';
export const tableFile = fs.readFileSync(path.resolve(__dirname, '../views/table.mustache'), { encoding: 'utf-8' });
export const licenseInfoFile = fs.readFileSync(path.resolve(__dirname, '../views/licenseInfo.mustache'), { encoding: 'utf-8' });
export const formItemsFile = fs.readFileSync(path.resolve(__dirname, '../views/controls/form-items.mustache'), { encoding: 'utf-8' });
