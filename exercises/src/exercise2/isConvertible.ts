/**
 * Interfaz genérica isConvertible
 */

export interface isConvertible<T> {
  conversion(data: T): number;
}
