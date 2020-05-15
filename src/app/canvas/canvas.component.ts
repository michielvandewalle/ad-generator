import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import * as p5 from "p5";
import { Composition } from "../model/composition.model";
import { Layout } from "../model/layout.model";
import { State } from "../model/state.model";
import { ColorService } from "../service/color.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
})
export class CanvasComponent implements OnInit, OnChanges {
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

  public ngOnChanges(changes: SimpleChanges): void {
    const isLayoutUpdate =
      changes.layout.currentValue !== undefined &&
      changes.layout.previousValue !== undefined &&
      changes.layout.currentValue !== changes.layout.previousValue;
    if (isLayoutUpdate) {
      this.ctx.resizeCanvas(
        this.layout.canvas.width,
        this.layout.canvas.height
      );
    }
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
      this.drawImage();
      this.drawText();
      this.drawBrand();
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
      const text = this.getCompositionById(this.state.compositionId).text;
      const color = this.colorService.getColorById(this.state.colorId);

      this.ctx.textFont(text.font.fontFamily, text.font.textSize);
      this.ctx.textAlign(
        text.font.textAlignment.horizontal,
        text.font.textAlignment.vertical
      );
      this.ctx.fill(color.text);

      this.ctx.text(
        this.state.text,
        text.coordinates.x,
        text.coordinates.y,
        text.coordinates.width,
        text.coordinates.height
      );
    }
  }

  public drawBrand(): void {
    const brand = this.getCompositionById(this.state.compositionId).brand;
    const color = this.colorService.getColorById(this.state.colorId);

    // Rectangle
    this.ctx.fill(color.brandBackground);
    this.ctx.noStroke();
    this.ctx.rectMode(this.ctx.CORNER);
    this.ctx.rect(
      brand.coordinates.x,
      brand.coordinates.y,
      brand.coordinates.width,
      brand.coordinates.height
    );

    // Brand name
    this.ctx.textFont(brand.font.fontFamily, brand.font.textSize);
    this.ctx.fill(color.brandText);
    this.ctx.textAlign(brand.font.textAlignment.horizontal, this.ctx.CENTER);
    this.ctx.text(
      this.state.brand,
      brand.coordinates.x,
      brand.coordinates.y,
      brand.coordinates.width,
      brand.coordinates.height
    );
  }

  public drawImage(): void {
    const composition = this.getCompositionById(this.state.compositionId);

    if (composition.hasOwnProperty("image")) {
      const images = composition.image;

      for (let i = 0; i < images.length; i++) {
        const coordinates = images[i].coordinates;

        // Check if image is already uploaded
        const image = this.state.image[i];
        if (image) {
          const crop = this.getImageCropCoordinates(this.state.image);
          this.ctx.image(
            this.state.image[i],
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
    }
  }

  public drawBackground(): void {
    this.ctx.background(
      this.colorService.getColorById(this.state.colorId).background
    );
  }

  public uploadImage(data): void {
    this.state.image.push(this.ctx.createImg(data, "").hide());
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
