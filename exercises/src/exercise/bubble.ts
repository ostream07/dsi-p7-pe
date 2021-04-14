import {Strategy} from './strategy';

/**
 * Clase Bubble, implementa el algoritmo BubbleShort
 */
export class Bubble implements Strategy {
  /**
   * Function execute, ejecuta el algoritmo seleccionado
   * @param data vector de números a ordenar
   */
  execute(data: number[]) {
    let data_copy = data.slice(); // creates a copy of the array

    for(let i = 0; i < data_copy.length; i++) {
        for(let j = 0; j < data_copy.length - 1; j++) {

            if(data_copy[j] > data_copy[j + 1]) {
                let swap = data_copy[j];
                data_copy[j] = data_copy[j + 1];
                data_copy[j + 1] = swap;
            }
        }
    }
    console.log(data_copy);
    return data_copy;
  }
}