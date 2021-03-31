/* eslint-disable max-len */
import {isConvertible} from './isConvertible';

/**
 * @param celsius grados celsius
 * @param fahrenheit grados fahrenheit
 * @param kelvin grados kelvin
 */
export enum TemperatureUnits {
  celsius,
  fahrenheit,
  kelvin,
};

/**
 * @class Temperatura.
 * @param Recibe un dato tipo T como vector con tres valores, dos unidades
 * de temperatura y un valor
 * @function conversion Convierte el valor de la primera unidad en lo
 * corespondiente a la segunda
 */
export class Temperature implements isConvertible<[TemperatureUnits, number, TemperatureUnits]> {
  constructor() {}
  conversion(data: [TemperatureUnits, number, TemperatureUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] == TemperatureUnits.celsius && data[2] == TemperatureUnits.kelvin) {
      result = value + 273;
      return result;
    } else if (data[0] == TemperatureUnits.celsius && data[2] == TemperatureUnits.fahrenheit) {
      result = (value * 9 / 5) + 32;
      return result;
    } else {
      console.log('Error, conversor de celsius a otras unidades y no se especifican metros en ningún parámetro');
      return -1;
    }
  }
}

const grades = new Temperature();
grades.conversion([TemperatureUnits.celsius, 15, TemperatureUnits.kelvin]);
console.log('Grados celsius: 15');
console.log('El resultado es: ' + grades.conversion([TemperatureUnits.celsius, 15, TemperatureUnits.kelvin]) + ' kelvin');
