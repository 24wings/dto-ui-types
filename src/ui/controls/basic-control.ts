import { IifData } from "../condition/iif";

export class BasicControls {
  label: string;
  control?: 'text' | 'checkbox' | 'textarea' | 'number' | 'enum' | 'select' | 'date';
  field?: string;
  enum?: string[] | { label: string, value: string }
  iif?: IifData<any>[];
  required?: boolean;
  loadOptionsUrl?: string
  loadOptionsKey?: string;
  loadOptionsValue?: string;
}