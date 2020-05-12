import { Color } from "./color.model";
import { Composition } from "./composition.model";
import { Coordinates } from "./coordinates.model";
import { State } from "./state.model";
import { Canvas } from "./canvas.model";

export class Layout {
  public id: string;

  public label: string;

  public colors: Color[];

  public composition: Composition[];

  public canvas: Canvas;

  constructor(init?: Partial<Layout>) {
    Object.assign(this, init);
  }
}
