/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable max-len */
import {isConvertible} from './isConvertible';

/**
 * @param mg miligramos
 * @param cg centigramos
 * @param dg decigramos
 * @param g gramos
 * @param dag decagramos
 * @param hg hectogramos
 * @param km kilogramos
 * @param t tonelada
 */
export enum MassUnits {
  mg = 0.000001,
  cg = 0.00001,
  dg = 0.0001,
  g = 0.001,
  dag = 0.01,
  hg = 0.1,
  kg = 1,
  t = 1000
};

/**
 * @class Distancia.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de longitud y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda que siempre serán metros
 */
export class Mass implements isConvertible<[MassUnits, number, MassUnits]> {
  constructor() {}
  conversion(data: [MassUnits, number, MassUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] < data[2] || data[0] > data[2] && data[2] == MassUnits.kg) {
      result = data[0] * value;
      return result;
    } else if (data[0] == data[2]) {
      result = data[2];
      return result;
    } else {
      console.log('Error, conversor a kilogramos y no se especifican' +
                                            ' kilogramos en ningún parámetro');
      return -1;
    }
  }
}

const masses = new Mass();
masses.conversion([MassUnits.g, 97, MassUnits.kg]);
console.log('Gramos: 97');
console.log('El resultado es: ' + masses.conversion([MassUnits.g,
                    97, MassUnits.kg]) + ' kilogramos\n');
