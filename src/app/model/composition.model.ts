import { Coordinates } from "./coordinates.model";
import { Graphic } from "./graphic.model";

export class Composition {
  public id: string;

  public brand: Graphic;

  public image: Graphic;

  public text: Graphic;

  public shape: Graphic[];

  constructor(init?: Partial<Composition>) {
    Object.assign(this, init);
  }
}
