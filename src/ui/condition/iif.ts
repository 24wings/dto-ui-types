export type ValueType = number | string | Date;

export type IifCondition = string | number | boolean | { gt?: ValueType, lt?: ValueType, eq?: ValueType, bewtten?: [ValueType, ValueType], in: ValueType[] };
export type IifData<T> = { [p in keyof T]?: IifCondition }
