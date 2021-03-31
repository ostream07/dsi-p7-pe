/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {isConvertible} from './isConvertible';

/**
 * @param n newton
 * @param p poundal
 * @param din dina
 */
export enum StrengthUnits {
  n,
  p,
  din,
};

/**
 * @class Strenght.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de fuerza y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda
 */
export class Strenght implements isConvertible<[StrengthUnits, number, StrengthUnits]> {
  constructor() {}
  conversion(data: [StrengthUnits, number, StrengthUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] == StrengthUnits.p && data[2] == StrengthUnits.n) {
      result = value / 7.233;
      return result;
    } else if (data[0] == StrengthUnits.din && data[2] == StrengthUnits.n) {
      result = value / 100000;
      return result;
    } else {
      console.log('Error, conversor de newtons a otras unidades y ' +
                          'no se especifican newtons en ningún parámetro');
      return -1;
    }
  }
}

const strengths = new Strenght();
strengths.conversion([StrengthUnits.din, 15, StrengthUnits.n]);
console.log('Dinas: 30');
console.log('El resultado es: ' + strengths.conversion([StrengthUnits.din,
                    30, StrengthUnits.n]) + ' newtons\n');
