"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveEvent = exports.LiveStatus = void 0;
var LiveStatus;
(function (LiveStatus) {
    LiveStatus["LIVE"] = "live";
    LiveStatus["SCHEDULED"] = "scheduled";
    LiveStatus["FINISHED"] = "finished";
})(LiveStatus = exports.LiveStatus || (exports.LiveStatus = {}));
class LiveEvent {
    constructor(id, title, status, productIds = []) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.productIds = productIds;
    }
}
exports.LiveEvent = LiveEvent;
//# sourceMappingURL=live-event.entity.js.map