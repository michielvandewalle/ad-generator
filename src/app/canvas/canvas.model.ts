import * as p5 from "p5";

export class Canvas {
  public brand: string;

  public text: string;

  public footer: string;

  public font: string;

  public lineHeight: number;

  public textColor: string;

  public textSize: number;

  public bgColor: string;

  public colorId: string;

  public compositionId: string;

  public layoutId: string;

  public logo: any;

  public image: any;

  public filename: string;

  constructor(init?: Partial<Canvas>) {
    Object.assign(this, init);
  }
}
