export declare enum LiveStatus {
    LIVE = "live",
    SCHEDULED = "scheduled",
    FINISHED = "finished"
}
export declare class LiveEvent {
    id: string;
    title: string;
    status: LiveStatus;
    productIds: string[];
    constructor(id: string, title: string, status: LiveStatus, productIds?: string[]);
}
