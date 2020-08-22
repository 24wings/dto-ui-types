import { AbstractFormDecoratorParser } from "./abstract-form-decorator.parser";
import { getFormMeta } from "../meta-decorator/form.decorator";
import { getFields } from "../meta-decorator/form-item.decorator";
import { StableForm } from "../ui/theme/stable/stable-form";

export class StableFormDecoratorParser extends AbstractFormDecoratorParser {
  getFormByTarget(target: new () => any): StableForm {
    return Object.assign(getFormMeta(target), { formItems: this.getFieldsByTarget(target) });
  }

  getFieldsByTarget(target: new () => any) {
    return getFields(target.prototype)
  }

}