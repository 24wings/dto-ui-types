import { StableForm } from "../ui/theme/stable/stable-form";
import { IifData } from "../ui/condition/iif";
export declare const formMetadataKey: unique symbol;
export declare function Form<T>(form: StableForm, iifs?: IifData<T>[]): (target: any) => void;
export declare function getFormMeta(target: any): any;
