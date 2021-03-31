/* eslint-disable max-len */
import {isConvertible} from './isConvertible';

/**
 * @param celsious grados celsious
 * @param fahrenheit grados fahrenheit
 * @param kelvin grados kelvin
 */
export enum MagnitudeUnits {
  celsious = 1,
  fahrenheit = (1-32)*5/9,
  kelvin = 1+273,
};

/**
 * @class Distancia.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de longitud y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda
 */
export class Temperature implements isConvertible<[MagnitudeUnits, number, MagnitudeUnits]> {
  constructor() {}
  static conversion(data: [MagnitudeUnits, number, MagnitudeUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] < data[2]) {
      result = data[0] * value;
    }
    return result;
  }
}

