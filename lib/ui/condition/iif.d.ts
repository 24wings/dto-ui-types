export declare type ValueType = number | string | Date;
export declare type IifCondition = string | number | boolean | {
    gt?: ValueType;
    lt?: ValueType;
    eq?: ValueType;
    bewtten?: [ValueType, ValueType];
    in: ValueType[];
};
export declare type IifData<T> = {
    [p in keyof T]?: IifCondition;
};
