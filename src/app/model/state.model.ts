import * as p5 from "p5";

export class State {
  public brand: string;

  public text: string =
    "Welkom bij Kiddybips, de ecologische babywinkel waar je naar hartelust wasbare luiers, ecologisch maandverband , draagdoeken , wollen kledij, oerdegelijke regenkledij, verantwoord speelgoed en nog zoveel meer basics en toffe spulletjes kan shoppen.";

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

  constructor(init?: Partial<State>) {
    Object.assign(this, init);
  }
}
