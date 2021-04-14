/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable max-len */

/**
 * Clase Solver. Solucionará nuestra problemática
 */
export class Solver {
    /**
     * Referencia a un objeto constante
     */
    constructor(private data: number[], private strategy: Strategy) {
    }
  
    /**
     * Setter que permitirá cambiar la estrategia en tiempo de ejecución
     * @param strategy Estrategia aplicada
     */
    setStrategy(strategy: Strategy) {
      this.strategy = strategy;
    }
  
    /**
     * Delegamos sobre un objeto estrateia
     */
    logic() {
      this.strategy.execute(this.data);
    }
  }
  
  /**
   * Interfaz estrategia para todos los objetos de tipo Strategy
   */
  export interface Strategy {
    execute(data: number[]): void;
  }


