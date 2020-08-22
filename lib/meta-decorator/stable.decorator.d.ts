import { StableTableData } from "../ui/theme/stable/stable-table";
export declare const stableTableMetadataKey: unique symbol;
export declare function StableTable<T>(form: StableTableData): (target: any) => void;
export declare function getStableTableData(target: any): any;
