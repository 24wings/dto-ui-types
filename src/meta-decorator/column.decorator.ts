import "reflect-metadata";
import { ColumnItem } from "../ui";

export const columnMetadataKey = Symbol("column");


export function Col(formItem: ColumnItem) {
  return function (target: any, propertyKey: string) {
    const formItems = getColumns(target)
    formItem.index = propertyKey;
    formItems.push(formItem);
    Reflect.defineMetadata(columnMetadataKey, formItems, target);
  };

}

export function getColumns(target: any): ColumnItem[] {
  return Reflect.getMetadata(columnMetadataKey, target) || [];

}