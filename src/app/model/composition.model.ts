import { Coordinates } from "./coordinates.model";

export class Composition {
  public id: string;

  public brand: Coordinates;

  public image: Coordinates;

  public text: Coordinates;

  constructor(init?: Partial<Composition>) {
    Object.assign(this, init);
  }
}
