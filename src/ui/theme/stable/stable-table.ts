import { FormItem } from "../../controls/form-item";
export class ColumnItem {
  index?: string;
  title: string;
  type?: 'string' | 'number' | 'text' | 'checkbox' | 'yn'
}

export class StableTableData {
  columns?: ColumnItem[];
  title: string;
  loadUrl?: string;
}