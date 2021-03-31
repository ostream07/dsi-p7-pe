/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

import {isConvertible} from './isConvertible';

export enum TimeUnits {
  seg = 1,
  min = 60,
  h = 3600,
  day = 86400,
  week = 604800,
  month = 2592000,
  year = 31104000,

};

export class Time implements isConvertible<[TimeUnits, number, TimeUnits]> {
  constructor() {}
  conversion(data: [TimeUnits, number, TimeUnits]): number {
    const value: number = data[1];
    let result: number = 0;
    if (data[0] > data[2] && data[2] == TimeUnits.seg) {
      result = data[0] * value;
      return result;
    } else if (data[0] == data[2]) {
      result = data[0];
    } else {
      console.log('Error, conversor a segundos, ninguno de los' +
                ' parámetros especificados son segundos');
      return -1;
    }
  }
}

const times = new Time();
times.conversion([TimeUnits.min, 15, TimeUnits.seg]);
console.log('Minutos: 15');
console.log('El resultado es: ' + times.conversion([TimeUnits.min, 15, TimeUnits.seg]) + ' segundos\n');

