import { throttle } from './throttle'

describe('Creando función throttle', () => {
  test('Debería no permitir ejecutar de nuevo la función antes de el delay especificado', () => {
    const mockFunction = jest.fn();
    const throttleFunction = throttle(mockFunction, 1000);

    throttleFunction();
    throttleFunction();
    throttleFunction();

    jest.advanceTimersByTime(1000);

    throttleFunction();

    expect(mockFunction).toHaveBeenCalledTimes(1);

  })
})