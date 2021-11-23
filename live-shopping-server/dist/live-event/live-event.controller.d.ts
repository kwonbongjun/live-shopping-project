import { LiveEventService } from './live-event.service';
import { CreateLiveEventDto } from './dto/create-live-event.dto';
import { UpdateLiveEventDto } from './dto/update-live-event.dto';
import { LiveEventsResponse } from './response/live-event.response';
import { ProductService } from '../product/product.service';
import { ProductsResponse } from '../product/response/product.response';
export declare class LiveEventController {
    private readonly liveEventService;
    private readonly productService;
    constructor(liveEventService: LiveEventService, productService: ProductService);
    create(createLiveEventDto: CreateLiveEventDto): import("./entities/live-event.entity").LiveEvent;
    findAll(): LiveEventsResponse;
    findOne(id: string): import("./entities/live-event.entity").LiveEvent;
    findProducts(id: string): ProductsResponse;
    update(id: string, updateLiveEventDto: UpdateLiveEventDto): void;
    remove(id: string): void;
}
