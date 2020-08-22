import { AbstractFormDecoratorParser } from "./abstract-form-decorator.parser";
import { StableForm } from "../ui/theme/stable/stable-form";
export declare class StableFormDecoratorParser extends AbstractFormDecoratorParser {
    getFormByTarget(target: new () => any): StableForm;
    getFieldsByTarget(target: new () => any): import("..").FormItem[];
}
