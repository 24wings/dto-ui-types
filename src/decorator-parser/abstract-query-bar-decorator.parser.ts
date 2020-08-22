import { StableQueryBar } from "../ui/theme/stable/query-bar";

export abstract class AbstractQueryBarDecoratorParser {

  abstract getQueryBarByTarget(target: any): StableQueryBar
}