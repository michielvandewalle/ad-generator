import { Coordinates } from "./coordinates.model";
import { Font } from "p5";

export class Graphic {
  public id: string;

  public coordinates: Coordinates;

  public font: Font;

  constructor(init?: Partial<Graphic>) {
    Object.assign(this, init);
  }
}
