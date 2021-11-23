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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveEventController = void 0;
const common_1 = require("@nestjs/common");
const live_event_service_1 = require("./live-event.service");
const create_live_event_dto_1 = require("./dto/create-live-event.dto");
const update_live_event_dto_1 = require("./dto/update-live-event.dto");
const live_event_response_1 = require("./response/live-event.response");
const product_service_1 = require("../product/product.service");
const product_response_1 = require("../product/response/product.response");
let LiveEventController = class LiveEventController {
    constructor(liveEventService, productService) {
        this.liveEventService = liveEventService;
        this.productService = productService;
    }
    create(createLiveEventDto) {
        this.productService.checkForItemExistence(createLiveEventDto.productIds);
        return this.liveEventService.create(createLiveEventDto);
    }
    findAll() {
        return {
            liveEvents: this.liveEventService.findAll(),
        };
    }
    findOne(id) {
        return this.liveEventService.findOne(id);
    }
    findProducts(id) {
        const event = this.liveEventService.findOne(id);
        return {
            products: this.productService.findMany(event.productIds),
        };
    }
    update(id, updateLiveEventDto) {
        return this.liveEventService.update(id, updateLiveEventDto);
    }
    remove(id) {
        return this.liveEventService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_live_event_dto_1.CreateLiveEventDto]),
    __metadata("design:returntype", void 0)
], LiveEventController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", live_event_response_1.LiveEventsResponse)
], LiveEventController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LiveEventController.prototype, "findOne", null);
__decorate([
    common_1.Get(':id/products'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", product_response_1.ProductsResponse)
], LiveEventController.prototype, "findProducts", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_live_event_dto_1.UpdateLiveEventDto]),
    __metadata("design:returntype", void 0)
], LiveEventController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LiveEventController.prototype, "remove", null);
LiveEventController = __decorate([
    common_1.Controller('live-event'),
    __metadata("design:paramtypes", [live_event_service_1.LiveEventService,
        product_service_1.ProductService])
], LiveEventController);
exports.LiveEventController = LiveEventController;
//# sourceMappingURL=live-event.controller.js.map