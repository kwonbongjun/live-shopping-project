import { CreateLiveEventDto } from './dto/create-live-event.dto';
import { UpdateLiveEventDto } from './dto/update-live-event.dto';
import { LiveEvent, LiveStatus } from './entities/live-event.entity';
export declare class LiveEventService {
    private liveEvents;
    private counter;
    constructor(liveEvents: LiveEvent[]);
    create(createLiveEventDto: CreateLiveEventDto): LiveEvent;
    findAll(): LiveEvent[];
    findOne(id: string): LiveEvent;
    update(id: string, updateLiveEventDto: UpdateLiveEventDto): void;
    remove(id: string): void;
    updateLiveEvent(originStatus: LiveStatus, newStatus: LiveStatus): LiveStatus;
}
