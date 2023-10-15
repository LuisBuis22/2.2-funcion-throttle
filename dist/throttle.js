"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
function throttle(func, delay) {
    let throttling = false;
    return function () {
        if (!throttling) {
            func();
            throttling = true;
            setTimeout(() => {
                throttling = false;
            }, delay);
        }
    };
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map