export declare class TenantQueryBar {
    Filter: string;
    EditionId: number;
    SubscriptionEndDateStart: Date;
    SubscriptionEndDateEnd: Date;
    CreationDateStart: Date;
    CreationDateEnd: Date;
}
export declare class TenantCreateForm {
    id: number;
    name: string;
    tenancyName: string;
    isActive: boolean;
    isInTrialPeriod: boolean;
    isRandomPassword: boolean;
    adminPassword: string;
    subscriptionEndDateUtc: Date;
    editionDisplayName: string;
    creationTime: Date;
    connectionString: string;
    editionId?: string;
}
export declare class TenantList {
    id: number;
    name: string;
    tenancyName: string;
    isActive: boolean;
    isInTrialPeriod: boolean;
    isRandomPassword: boolean;
    adminPassword: string;
    subscriptionEndDateUtc: Date;
    editionDisplayName: string;
    creationTime: Date;
    connectionString: string;
    editionId?: string;
}
