/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {isConvertible} from './isConvertible';

/**
 * @param pps Pies por segundo
 * @param ms metros por segundo
 * @param nu nudos por segundo
 * @param kmh kilómetros por segundo
 */
export enum SpeedUnits {
  pps,
  ms,
  nu,
  kmh,
};

/**
 * @class Speed.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de velocidad y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda
 */
export class Speed implements isConvertible<[SpeedUnits, number, SpeedUnits]> {
  constructor() {}
  conversion(data: [SpeedUnits, number, SpeedUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] == SpeedUnits.ms && data[0] > data[2]) {
      result = value / 3281;
      return result;
    } else if (data[2] == SpeedUnits.ms && data[0] == SpeedUnits.nu) {
      result = value * 1.94384;
      return result;
    } else if (data[2] == SpeedUnits.ms && data[0] == SpeedUnits.kmh) {
      result = value * 3.6;
      return result;
    } else {
      console.log('Error, la conversión solicitada no está disponible');
      return -1;
    }
  }
}

const velocity = new Speed();
velocity.conversion([SpeedUnits.kmh, 13, SpeedUnits.ms]);
console.log('Kilómetros hora: 13');
console.log('El resultado es: ' + velocity.conversion([SpeedUnits.kmh, 13,
                    SpeedUnits.ms]) + ' metros/segundo\n');

