import { Color } from "./color.model";
import { Composition } from "./composition.model";
import { Coordinates } from "./coordinates.model";

export class Layout {
  public colors: Color[];

  public composition: Composition[];

  public footer: Coordinates;

  public height: number;

  public padding: number;

  public width: number;

  constructor(init?: Partial<Layout>) {
    Object.assign(this, init);
  }
}
