import { LiveStatus } from '../entities/live-event.entity';
export declare class CreateLiveEventDto {
    title: string;
    status: LiveStatus;
    productIds: string[];
}
