import { TextAlignment } from "./text-alignment.model";

export class Font {
  public fontFamily: string;

  public lineHeight: number;

  public textAlignment: TextAlignment;

  public textSize: number;

  constructor(init?: Partial<Font>) {
    Object.assign(this, init);
  }
}
