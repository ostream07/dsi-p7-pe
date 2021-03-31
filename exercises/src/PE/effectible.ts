/* eslint-disable max-len */
/**
 * Interfaz genérica Effectible
 */
/*
 interface Effectible<T> {
  add(num1: T, num2: T): number;
  substract(num1: T, num2: T): number;
  multiply(num1: T, num2: T): number;
  divide(num1: T, num2: T): number;
}
*/
/**
 * Clase genérica EffectibleCllections que implementa a la interfaz Effectible
 */
/*
class EffectibleCollection<T extends Effectible<T>> {
  constructor(protected items: T[]) {}

  addEffectible(num: T) {
    this.items.push(num);
  }

  getEffectible(i: number): T {
    return this.items[i];
  }

  getNumberOfEffectibles(): number {
    return this.items.length;
  }
}
*/
/**
 * Tipo complejo
 */
/*
 type complex = {
  real: number;
  imaginary: number;
}
*/
/**
 * Class Complex
 * @implements Operations with complex numbers
 */
/*
class Complex implements Effectible<Complex> {
  public comp: complex;
  constructor(i: number, j: number) {
    this.comp.real = i;
    this.comp.imaginary = j;
  }

  add(n1: complex): complex {
    return {real: this.comp.real + n1.real, imaginary: this.comp.imaginary + n1.imaginary};
  }

  substract(n1: complex): complex {
    return {real: this.comp.real - n1.real, imaginary: this.comp.imaginary - n1.imaginary};
  }

  multiply(n1: complex): complex {
    return {real: this.comp.real * n1.real, imaginary: this.comp.imaginary * n1.imaginary};
  }

  divide(n1: complex): complex {
    return {real: this.comp.real / n1.real, imaginary: this.comp.imaginary / n1.imaginary};
  }
}
*/
/**
 * Tipo Rational
 */
/*
 type rational = {
  a: number;
  b: number;
}
*/
/**
 * Class Rational
 * @implements Operations with natural numbers
 */
/*
class Rational implements Effectible<rational> {
  public rat: rational;
  constructor(i: number, j: number) {
    this.rat.a = i;
    this.rat.b = j;
  }

  add(n1: rational): rational {
    return {a: this.rat.a + n1.a, b: this.rat.b + n1.b};
  }

  substract(n1: rational): rational {
    return {a: this.rat.a - n1.a, b: this.rat.b - n1.b};
  }

  multiply(n1: rational): rational {
    return {a: this.rat.a * n1.a, b: this.rat.b * n1.b};
  }

  divide(n1: rational): rational {
    return {a: this.rat.a * n1.b, b: this.rat.b * n1.a};
  }
}

*/
