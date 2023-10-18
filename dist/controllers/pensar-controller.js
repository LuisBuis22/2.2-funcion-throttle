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
function pensando() {
    console.log("Dame 5 segundos para pensar");
}
const throttlePensando = throttle(pensando, 5000);
//# sourceMappingURL=pensar-controller.js.map