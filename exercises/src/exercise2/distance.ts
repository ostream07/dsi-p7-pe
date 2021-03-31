/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable max-len */
import {isConvertible} from './isConvertible';

/**
 * @param mm milímetros
 * @param cm centímetros
 * @param dm decímetros
 * @param m metros
 * @param dam decámetros
 * @param hm hectómetros
 * @param km kilómetros
 * @param milla millas
 */
export enum DistanceUnits {
  mm = 0.001,
  cm = 0.01,
  dm = 0.1,
  m = 1,
  dam = 10,
  hm = 100,
  km = 1000,
  milla = 0.000621371
};

/**
 * @class Distancia.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de longitud y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda que siempre serán metros
 */
export class Distance implements isConvertible<[DistanceUnits, number, DistanceUnits]> {
  constructor() {}
  conversion(data: [DistanceUnits, number, DistanceUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] < data[2] || data[0] > data[2] && data[2] == DistanceUnits.m) {
      result = data[0] * value;
      return result;
    } else if (data[0] == data[2]) {
      result = data[2];
      return result;
    } else {
      console.log('Error, conversor a metros y no se especifican' +
                                            ' metros en ningún parámetro');
      return -1;
    }
  }
}

const distances = new Distance();
distances.conversion([DistanceUnits.km, 15, DistanceUnits.m]);
console.log('Kilometros: 15');
console.log('El resultado es: ' + distances.conversion([DistanceUnits.km,
                    15, DistanceUnits.m]) + ' metros\n');
