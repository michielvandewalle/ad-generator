import * as p5 from "p5";

export class TextAlignment {
  public horizontal: p5.HORIZ_ALIGN = "left";

  public vertical: p5.VERT_ALIGN = "bottom";

  constructor(horizontal: p5.HORIZ_ALIGN, vertical: p5.VERT_ALIGN) {
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
}
