import "reflect-metadata";
import { FormItem } from "../ui/controls/form-item";
export declare const formItemMetadataKey: unique symbol;
export declare function Field(formItem: FormItem): (target: any, propertyKey: string) => void;
export declare function getFields(target: any): FormItem[];
