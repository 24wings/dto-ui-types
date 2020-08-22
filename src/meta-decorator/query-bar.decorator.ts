import { StableQueryBar } from "../ui/theme/stable/query-bar";
import { IifData } from "../ui/condition/iif";

export const queryBarKey = Symbol("query-bar");
export function QueryBar<T>(queryBar: StableQueryBar, iifs: IifData<T>[] = []) {
  return function (target: any) {
    Reflect.defineMetadata(queryBarKey, queryBar, target);
  };
}

export function getQueryBar(target: any) {
  return Reflect.getMetadata(queryBarKey, target);

}