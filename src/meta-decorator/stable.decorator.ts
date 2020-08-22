import { IifData } from "../ui/condition/iif";
import { StableTableData } from "../ui/theme/stable/stable-table";
export const stableTableMetadataKey = Symbol("stable-table");

export function StableTable<T>(form: StableTableData) {
  return function (target: any) {
    Reflect.defineMetadata(stableTableMetadataKey, form, target);
  };


}

export function getStableTableData(target: any) {
  return Reflect.getMetadata(stableTableMetadataKey, target);

}
