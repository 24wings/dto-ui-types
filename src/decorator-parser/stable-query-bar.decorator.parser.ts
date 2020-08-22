import { getFields } from "../meta-decorator/form-item.decorator";
import { getQueryBar } from "../meta-decorator/query-bar.decorator";
import { StableQueryBar } from "../ui/theme/stable/query-bar";
import { AbstractQueryBarDecoratorParser } from "./abstract-query-bar-decorator.parser";

export class StableQueryBarDecoratorParser extends AbstractQueryBarDecoratorParser {
  getQueryBarByTarget(target: new () => any): StableQueryBar {
    return Object.assign(getQueryBar(target), { formItems: this.getFieldsByTarget(target) });
  }

  getFieldsByTarget(target: new () => any) {
    return getFields(target.prototype)
  }

}