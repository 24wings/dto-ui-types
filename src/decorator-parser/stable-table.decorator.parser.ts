import { getFields } from "../meta-decorator";
import { StableTableData } from "../ui/theme/stable/stable-table";
import { getStableTableData } from "../meta-decorator/stable.decorator";
import { getColumns } from "../meta-decorator/column.decorator";

export class StableTableDecoratorParser {
  getStableTableData(target: new () => any): StableTableData {
    return Object.assign(getStableTableData(target), { columns: this.getFieldsByTarget(target) });
  }


  getFieldsByTarget(target: new () => any) {
    return getColumns(target.prototype)
  }
}