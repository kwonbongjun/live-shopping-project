"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLiveEventDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_live_event_dto_1 = require("./create-live-event.dto");
class UpdateLiveEventDto extends mapped_types_1.PartialType(create_live_event_dto_1.CreateLiveEventDto) {
}
exports.UpdateLiveEventDto = UpdateLiveEventDto;
//# sourceMappingURL=update-live-event.dto.js.map