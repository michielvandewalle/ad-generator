import * as p5 from "p5";

export class CanvasModel {
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

  public logo: any;

  public image: any;

  public filename: string;

  constructor(init?: Partial<CanvasModel>) {
    Object.assign(this, init);
  }
}
