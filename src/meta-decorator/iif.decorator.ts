import { IifData } from "../ui/condition/iif";

export const iifDataMetadataKey = Symbol("iif-data");


export function Iif<T>(formItem: IifData<T>) {
  return function (target: any, propertyKey: string) {
    const formItems = getIifData(target)
    formItems.push(formItem);
    Reflect.defineMetadata(iifDataMetadataKey, formItems, target);
  };

}

export function getIifData<T>(target: any): IifData<T>[] {
  return Reflect.getMetadata(iifDataMetadataKey, target) || [];

}