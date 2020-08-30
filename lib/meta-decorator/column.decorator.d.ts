import "reflect-metadata";
import { ColumnItem } from "../ui";
export declare const columnMetadataKey: unique symbol;
export declare function Col(formItem: ColumnItem): (target: any, propertyKey: string) => void;
export declare function getColumns(target: any): ColumnItem[];
