import { IifData } from "../ui/condition/iif";
export declare const iifDataMetadataKey: unique symbol;
export declare function Iif<T>(formItem: IifData<T>): (target: any, propertyKey: string) => void;
export declare function getIifData<T>(target: any): IifData<T>[];
