"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(fn, delay) {
    let throttling = false;
    return function () {
        if (!throttling) {
            fn();
            throttling = true;
            setTimeout(() => {
                throttling = false;
            }, 1000);
        }
    };
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map