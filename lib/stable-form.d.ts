export declare type IifCondition = string | number | boolean | {
    gt: any;
};
export declare type Iif<T> = {
    [p in keyof T]?: IifCondition;
};
export declare class StableFormItem<T> {
    label: string;
    field: keyof T;
    control?: 'text' | 'checkbox' | 'textarea' | 'number' | 'enum';
    enum?: string[] | {
        label: string;
        value: string;
    };
    iif?: Iif<T>[];
    required?: boolean;
}
export declare class StableForm<T> {
    formItems: StableFormItem<T>[];
    title: string;
}
