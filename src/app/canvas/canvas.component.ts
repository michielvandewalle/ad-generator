import { Component, Input, OnInit } from "@angular/core";
import * as p5 from "p5";
import { CanvasModel } from "./canvas.model";
import { Layout } from "../model/layout.model";
import { Color } from "../model/color.model";
import { Composition } from "../model/composition.model";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
})
export class CanvasComponent implements OnInit {
  @Input() public model: CanvasModel;

  @Input() public layout: Layout;

  private ctx: p5;
  private canvas: p5.Renderer;

  constructor() {
    this.sketch = this.sketch.bind(this);
  }

  public ngOnInit(): void {
    this.createCanvas();
  }

  public download(): void {
    this.ctx.saveCanvas(this.canvas, "screenshot", "png");
  }

  private createCanvas() {
    this.ctx = new p5(this.sketch);
  }

  private sketch(ctx) {
    ctx.setup = () => {
      this.canvas = this.ctx.createCanvas(
        this.layout.width,
        this.layout.height
      );
      this.canvas.parent("sketch-container");
      this.ctx.frameRate(1);
    };

    ctx.draw = () => {
      this.drawBackground();
      this.drawShape();
      this.drawText();
      this.drawFooter();
      this.drawBrand();
      this.drawImage();
    };
  }

  private drawShape(): void {
    const composition = this.getCompositionById(this.model.compositionId);

    if (composition.hasOwnProperty("shape")) {
      const coordinates = composition.shape;
      const color = this.getColorById(this.model.colorId);

      this.ctx.noStroke();
      this.ctx.fill(color.shape);

      this.ctx.rect(
        coordinates.x,
        coordinates.y,
        coordinates.width,
        coordinates.height
      );
    }
  }

  private drawText(): void {
    if (this.model.text) {
      const color = this.getColorById(this.model.colorId);

      this.ctx.textFont(this.model.font, this.model.textSize);
      this.ctx.textSize(this.model.textSize);
      this.ctx.textAlign(this.ctx.LEFT, this.ctx.BASELINE);
      this.ctx.fill(color.text);

      const coordinates = this.getCompositionById(this.model.compositionId)
        .text;

      this.ctx.text(
        this.model.text,
        coordinates.x,
        coordinates.y,
        coordinates.width,
        coordinates.height
      );
    }
  }

  private drawFooter(): void {
    if (this.model.footer) {
      const color = this.getColorById(this.model.colorId);

      this.ctx.textFont(this.model.font, this.model.textSize);
      this.ctx.textSize(this.model.textSize);
      this.ctx.textAlign(this.ctx.LEFT);
      this.ctx.fill(color.text);
      this.ctx.text(
        this.model.footer,
        this.layout.footer.x,
        this.layout.footer.y,
        this.layout.footer.width,
        this.layout.footer.height
      );
    }
  }

  public drawBrand(): void {
    const coordinates = this.getCompositionById(this.model.compositionId).brand;
    const color = this.getColorById(this.model.colorId);

    // Ellipse
    this.ctx.fill(color.brandBackground);
    this.ctx.noStroke();
    this.ctx.ellipseMode(this.ctx.CORNER);
    this.ctx.ellipse(coordinates.x, coordinates.y, coordinates.width);

    // Brand name
    this.ctx.textFont(this.model.font, this.model.textSize);
    this.ctx.textSize(this.model.textSize);
    this.ctx.fill(color.brandText);
    this.ctx.textAlign(this.ctx.CENTER, this.ctx.CENTER);
    this.ctx.text(
      this.model.brand,
      coordinates.x,
      coordinates.y,
      coordinates.width,
      coordinates.height
    );
  }

  public drawImage(): void {
    if (this.model.image) {
      const coordinates = this.getCompositionById(this.model.compositionId)
        .image;

      const crop = this.getImageCropCoordinates(this.model.image);
      this.ctx.image(
        this.model.image,
        coordinates.x,
        coordinates.y,
        coordinates.width,
        coordinates.height,
        crop.sx,
        crop.sy,
        crop.sw,
        crop.sw
      );
    }
  }

  public drawBackground(): void {
    this.ctx.background(this.getColorById(this.model.colorId).background);
  }

  public uploadLogo(data): void {
    this.model.logo = this.ctx.createImg(data, "").hide();
  }

  public uploadImage(data): void {
    this.model.image = this.ctx.createImg(data, "").hide();
  }

  private getImageCropCoordinates(image): any {
    const cw = image / 2; // image center width
    const ch = image / 2; // image center height
    const isLandscape = image.width > image.height;
    const sx = isLandscape ? cw - ch / 2 : 0;
    const sy = isLandscape ? 0 : ch - cw / 2;
    const sw = isLandscape ? image.height : image.width;

    return { sx, sy, sw };
  }

  private getColorById(id: string): Color {
    return this.layout.colors.find((color: Color) => color.id === id);
  }

  private getCompositionById(id: string): Composition {
    return this.layout.composition.find(
      (composition: Composition) => composition.id === id
    );
  }
}
