/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable max-len */
import {isConvertible} from './isConvertible';

/**
 * @param mm3 milímetros cúbicos
 * @param cm3 centímetros cúbicos
 * @param dm3 decímetros cúbicos
 * @param mm3 metros cúbicos
 * @param dam3 decámetros cúbicos
 * @param hm3 hectómetros cúbicos
 * @param km3 kilómetros cúbicos
 */
export enum VolumnUnits {
  mm3 = 0.000000001,
  cm3 = 0.000001,
  dm3 = 0.001,
  m3 = 1,
  dam3 = 1000,
  hm3 = 1000000,
  km3 = 1000000000,
};

/**
 * @class Volumn.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de volúmenes y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda que siempre serán metros
 */
export class Volumn implements isConvertible<[VolumnUnits, number, VolumnUnits]> {
  constructor() {}
  conversion(data: [VolumnUnits, number, VolumnUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] < data[2] || data[0] > data[2] && data[2] == VolumnUnits.m3) {
      result = data[0] * value;
      return result;
    } else if (data[0] == data[2]) {
      result = data[2];
      return result;
    } else {
      console.log('Error, conversor a metros cúbicos y no se especifican' +
                                        ' metros cúbicos en ningún parámetro');
      return -1;
    }
  }
}

const volumns = new Volumn();
volumns.conversion([VolumnUnits.km3, 2, VolumnUnits.m3]);
console.log('Kilometros cúbicos: 2');
console.log('El resultado es: ' + volumns.conversion([VolumnUnits.km3,
                    2, VolumnUnits.m3]) + ' metros cúbicos\n');
