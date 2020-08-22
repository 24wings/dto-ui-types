import { formItemMetadataKey } from "./form-item.decorator";
import { StableForm } from "../ui/theme/stable/stable-form";
import { IifData } from "../ui/condition/iif";
export const formMetadataKey = Symbol("form");

export function Form<T>(form: StableForm, iifs: IifData<T>[] = []) {
  return function (target: any) {
    Reflect.defineMetadata(formMetadataKey, form, target);
  };


}

export function getFormMeta(target: any) {
  return Reflect.getMetadata(formMetadataKey, target);

}
