/*
interface isConvertible<T> {
  addMagnitude(newItem: T): void;
  getMagnitude(index: number): T;
}

abstract class Magnitude<T> implements isConvertible<T> {
  constructor(protected items: T) {
  }
  addMagnitude(newItem: T) {
    this.items = newItem;
  }

  getMagnitude() {
    return this.items;
  }
};

class Speed extends Magnitude<T> {
  constructor()
}
*/
