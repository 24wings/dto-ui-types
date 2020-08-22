import { StableTableData } from "../ui/theme/stable/stable-table";
export declare class StableTableDecoratorParser {
    getStableTableData(target: new () => any): StableTableData;
    getFieldsByTarget(target: new () => any): import("..").FormItem[];
}
