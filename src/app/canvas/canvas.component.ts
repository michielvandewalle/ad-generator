import { Component, Input, OnInit } from "@angular/core";
import * as p5 from "p5";
import { State } from "../model/state.model";
import { Layout } from "../model/layout.model";
import { Color } from "../model/color.model";
import { Composition } from "../model/composition.model";
import { ColorService } from "../service/color.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
})
export class CanvasComponent implements OnInit {
  @Input() public state: State;

  @Input() public layout: Layout;

  private ctx: p5;
  private canvas: p5.Renderer;

  constructor(private colorService: ColorService) {
    this.sketch = this.sketch.bind(this);
  }

  public ngOnInit(): void {
    this.createCanvas();
  }

  public download(): void {
    this.ctx.saveCanvas(this.canvas, `ad-${this.layout.id}`, "png");
  }

  private createCanvas() {
    this.ctx = new p5(this.sketch);
  }

  private sketch(ctx) {
    ctx.setup = () => {
      this.canvas = this.ctx.createCanvas(
        this.layout.canvas.width,
        this.layout.canvas.height
      );
      this.canvas.parent("sketch-container");
      this.ctx.frameRate(10);
    };

    ctx.draw = () => {
      this.drawBackground();
      this.drawShape();
      this.drawText();
      this.drawBrand();
      // this.drawImage();
    };
  }

  private drawShape(): void {
    const composition = this.getCompositionById(this.state.compositionId);

    if (composition.hasOwnProperty("shape")) {
      const shapes = composition.shape;
      const color = this.colorService.getColorById(this.state.colorId);

      for (let i = 0; i < shapes.length; i++) {
        const coordinates = shapes[i].coordinates;

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
  }

  private drawText(): void {
    if (this.state.text) {
      const color = this.colorService.getColorById(this.state.colorId);

      this.ctx.textFont(this.state.font, this.state.textSize);
      this.ctx.textSize(this.state.textSize);
      this.ctx.textAlign(this.ctx.LEFT, this.ctx.BASELINE);
      this.ctx.fill(color.text);

      const coordinates = this.getCompositionById(this.state.compositionId).text
        .coordinates;

      this.ctx.text(
        this.state.text,
        coordinates.x,
        coordinates.y,
        coordinates.width,
        coordinates.height
      );
    }
  }

  public drawBrand(): void {
    const coordinates = this.getCompositionById(this.state.compositionId).brand
      .coordinates;
    const color = this.colorService.getColorById(this.state.colorId);

    // Rectangle
    this.ctx.fill(color.brandBackground);
    this.ctx.noStroke();
    this.ctx.rectMode(this.ctx.CORNER);
    this.ctx.rect(
      coordinates.x,
      coordinates.y,
      coordinates.width,
      coordinates.height
    );

    // Brand name
    this.ctx.textFont(this.state.font, this.state.textSize);
    this.ctx.textSize(this.state.textSize);
    this.ctx.fill(color.brandText);
    this.ctx.textAlign(this.ctx.CENTER, this.ctx.CENTER);
    this.ctx.text(
      this.state.brand,
      coordinates.x,
      coordinates.y,
      coordinates.width,
      coordinates.height
    );
  }

  public drawImage(): void {
    if (this.state.image) {
      const coordinates = this.getCompositionById(this.state.compositionId)
        .image.coordinates;

      const crop = this.getImageCropCoordinates(this.state.image);
      this.ctx.image(
        this.state.image,
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
    this.ctx.background(
      this.colorService.getColorById(this.state.colorId).background
    );
  }

  public uploadLogo(data): void {
    this.state.logo = this.ctx.createImg(data, "").hide();
  }

  public uploadImage(data): void {
    this.state.image = this.ctx.createImg(data, "").hide();
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

  private getCompositionById(id: string): Composition {
    return this.layout.composition.find(
      (composition: Composition) => composition.id === id
    );
  }
}
