import { StableQueryBar } from "../ui/theme/stable/query-bar";
import { AbstractQueryBarDecoratorParser } from "./abstract-query-bar-decorator.parser";
export declare class StableQueryBarDecoratorParser extends AbstractQueryBarDecoratorParser {
    getQueryBarByTarget(target: new () => any): StableQueryBar;
    getFieldsByTarget(target: new () => any): import("..").FormItem[];
}
