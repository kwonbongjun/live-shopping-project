"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveEventService = void 0;
const common_1 = require("@nestjs/common");
const live_event_entity_1 = require("./entities/live-event.entity");
let LiveEventService = class LiveEventService {
    constructor(liveEvents) {
        this.liveEvents = liveEvents;
        this.counter = liveEvents.length;
    }
    create(createLiveEventDto) {
        this.counter++;
        const liveEvent = new live_event_entity_1.LiveEvent(`${this.counter}`, createLiveEventDto.title, createLiveEventDto.status, createLiveEventDto.productIds);
        this.liveEvents.push(liveEvent);
        return liveEvent;
    }
    findAll() {
        return this.liveEvents;
    }
    findOne(id) {
        const liveEvent = this.liveEvents.find((liveEvent) => id === liveEvent.id);
        if (!liveEvent) {
            throw new common_1.NotFoundException();
        }
        return liveEvent;
    }
    update(id, updateLiveEventDto) {
        const liveEvent = this.findOne(id);
        if (updateLiveEventDto.title) {
            liveEvent.title = updateLiveEventDto.title;
        }
        if (updateLiveEventDto.status) {
            liveEvent.status = this.updateLiveEvent(liveEvent.status, updateLiveEventDto.status);
        }
    }
    remove(id) {
        const index = this.liveEvents.findIndex((liveEvent) => liveEvent.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException();
        }
        this.liveEvents.splice(index, 1);
    }
    updateLiveEvent(originStatus, newStatus) {
        if (originStatus === live_event_entity_1.LiveStatus.SCHEDULED &&
            newStatus === live_event_entity_1.LiveStatus.FINISHED) {
            throw new common_1.BadRequestException();
        }
        if (originStatus === live_event_entity_1.LiveStatus.LIVE &&
            newStatus === live_event_entity_1.LiveStatus.SCHEDULED) {
            throw new common_1.BadRequestException();
        }
        if (originStatus === live_event_entity_1.LiveStatus.FINISHED &&
            (newStatus === live_event_entity_1.LiveStatus.LIVE || newStatus === live_event_entity_1.LiveStatus.SCHEDULED)) {
            throw new common_1.BadRequestException();
        }
        return newStatus;
    }
};
LiveEventService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Array])
], LiveEventService);
exports.LiveEventService = LiveEventService;
//# sourceMappingURL=live-event.service.js.map