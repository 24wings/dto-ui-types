import "reflect-metadata";
import { FormItem } from "../ui/controls/form-item";

export const formItemMetadataKey = Symbol("field");


export function Field(formItem: FormItem) {
  return function (target: any, propertyKey: string) {
    const formItems = getFields(target)
    formItem.field = propertyKey;
    formItems.push(formItem);
    Reflect.defineMetadata(formItemMetadataKey, formItems, target);
  };

}

export function getFields(target: any): FormItem[] {
  return Reflect.getMetadata(formItemMetadataKey, target) || [];

}