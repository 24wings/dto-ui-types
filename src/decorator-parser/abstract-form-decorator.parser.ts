import { StableForm } from "../ui/theme/stable/stable-form";

export abstract class AbstractFormDecoratorParser {

  abstract getFormByTarget(target: any): StableForm
}