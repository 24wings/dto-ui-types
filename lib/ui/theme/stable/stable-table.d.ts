export declare class ColumnItem {
    index?: string;
    title: string;
    type?: 'string' | 'number' | 'text' | 'checkbox' | 'yn';
}
export declare class StableTableData {
    columns?: ColumnItem[];
    title: string;
    loadUrl?: string;
}
