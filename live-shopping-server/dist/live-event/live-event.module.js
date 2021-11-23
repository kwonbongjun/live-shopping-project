"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveEventModule = void 0;
const common_1 = require("@nestjs/common");
const live_event_service_1 = require("./live-event.service");
const live_event_controller_1 = require("./live-event.controller");
const product_module_1 = require("../product/product.module");
let LiveEventModule = class LiveEventModule {
};
LiveEventModule = __decorate([
    common_1.Module({
        controllers: [live_event_controller_1.LiveEventController],
        providers: [
            {
                provide: live_event_service_1.LiveEventService,
                useValue: new live_event_service_1.LiveEventService([]),
            },
        ],
        imports: [product_module_1.ProductModule],
    })
], LiveEventModule);
exports.LiveEventModule = LiveEventModule;
//# sourceMappingURL=live-event.module.js.map