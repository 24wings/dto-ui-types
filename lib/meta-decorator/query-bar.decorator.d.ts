import { StableQueryBar } from "../ui/theme/stable/query-bar";
import { IifData } from "../ui/condition/iif";
export declare const queryBarKey: unique symbol;
export declare function QueryBar<T>(queryBar: StableQueryBar, iifs?: IifData<T>[]): (target: any) => void;
export declare function getQueryBar(target: any): any;
