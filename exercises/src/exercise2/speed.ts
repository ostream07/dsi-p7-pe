/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {isConvertible} from './isConvertible';

/**
 * @param pps Pies por segundo
 * @param ms metros por segundo
 * @param nu nudos por segundo
 * @param kmh kilómetros por segundo
 */
export enum MagnitudeUnits {
  pps = 1/3281,
  ms = 1,
  nu = 1.94384,
  kmh = 3.6,
};

/**
 * @class Speed.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de velocidad y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda
 */
export class Speed implements isConvertible<[MagnitudeUnits, number, MagnitudeUnits]> {
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
/*
const vel = new Speed();
vel.conversion([MagnitudeUnits.mm, 10, MagnitudeUnits.m]);
*/
