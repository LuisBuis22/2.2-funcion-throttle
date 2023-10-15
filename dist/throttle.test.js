"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle_1 = require("./throttle");
describe('Creando función throttle', () => {
    test('Debería no permitir ejecutar de nuevo la función antes de el delay especificado', () => {
        const mockFunction = jest.fn();
        const throttleFunction = (0, throttle_1.throttle)(mockFunction, 1000);
        throttleFunction();
        throttleFunction();
        throttleFunction();
        jest.advanceTimersByTime(1000);
        throttleFunction();
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=throttle.test.js.map