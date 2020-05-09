import { Component, ViewChild } from "@angular/core";
import { AppModel } from "./app.model";
import { CanvasComponent } from "./canvas/canvas.component";
import { CanvasModel } from "./canvas/canvas.model";
import { Color } from "./model/color.model";
import { Layout } from "./model/layout.model";
import { Composition } from "./model/composition.model";
import { Coordinates } from "./model/coordinates.model";
import { FormRadioOptions } from "./model/form-radio-options.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  @ViewChild(CanvasComponent) canvas: CanvasComponent;

  public model: AppModel = new AppModel();

  public layout: Layout = new Layout();

  public compositionOptions: FormRadioOptions[] = [];

  public canvasModel: CanvasModel = new CanvasModel();

  constructor() {
    this.model.imageLabel = "Choose image";
    this.canvasModel.brand = "K I D D Y B I P S";
    this.canvasModel.font = "Noto Sans";
    this.canvasModel.footer =
      "Kiddybips.be - Dampoortstraat 23, 9000 Gent - +32 (0)9 / 278 46 47";
    this.canvasModel.textSize = 18;
    this.canvasModel.lineHeight = 24;
    this.canvasModel.textColor = "#000";
    this.canvasModel.bgColor = "#fff";
    this.canvasModel.filename = "kiddybips-ad.png";
    this.canvasModel.compositionId = "v1";
    this.canvasModel.colorId = "plum";
    this.layout.padding = 48;
    this.layout.width = 800;
    this.layout.height = 800;
    this.layout.colors = this.getColorOptions();
    this.layout.composition = this.getCompositions();
    this.layout.footer = this.getFooter();

    this.compositionOptions = this.getCompositionOptions();
  }

  public download(): void {
    this.canvas.download();
  }

  public uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.model.imageLabel = "Upload successfully";
        this.canvas.uploadImage(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  private getColorOptions(): Color[] {
    return [
      new Color({
        id: "plum",
        background: "#dfd8e3",
        brandText: "#fff",
        brandBackground: "#fce7dd",
        text: "#fff",
      }),
      new Color({
        id: "rose",
        background: "#fce7dd",
        brandText: "#fff",
        brandBackground: "#fce7dd",
        text: "#fff",
      }),
      new Color({
        id: "sage",
        background: "#e8f3ec",
        brandText: "#fff",
        brandBackground: "#fce7dd",
        text: "#fff",
      }),
      new Color({
        id: "sand",
        background: "#e6f1e4",
        brandText: "#fff",
        brandBackground: "#fce7dd",
        text: "#fff",
      }),
      new Color({
        id: "sea",
        background: "#d7efee",
        brandText: "#fff",
        brandBackground: "#fce7dd",
        text: "#fff",
      }),
      new Color({
        id: "sky",
        background: "#e2eff9",
        brandText: "#fff",
        brandBackground: "#fce7dd",
        text: "#fff",
      }),
    ];
  }

  private getCompositions(): Composition[] {
    return [
      new Composition({
        id: "v1",
        brand: new Coordinates(
          this.layout.padding,
          this.layout.padding,
          this.layout.width / 2 - this.layout.padding,
          this.layout.height / 2 - this.layout.padding
        ),
        image: new Coordinates(
          this.layout.width / 2,
          this.layout.padding,
          this.layout.width / 2 - this.layout.padding,
          this.layout.height / 2 - this.layout.padding
        ),
        text: new Coordinates(
          this.layout.padding,
          this.layout.height / 2 + this.layout.padding * 2,
          this.layout.width - this.layout.padding * 2,
          this.layout.height / 2 - this.layout.padding * 3.5
        ),
      }),
      new Composition({
        id: "v2",
        image: new Coordinates(
          this.layout.padding,
          this.layout.padding,
          this.layout.width / 2 - this.layout.padding,
          this.layout.height / 2 - this.layout.padding
        ),
        brand: new Coordinates(
          this.layout.width / 2,
          this.layout.padding,
          this.layout.width / 2 - this.layout.padding,
          this.layout.height / 2 - this.layout.padding
        ),
        text: new Coordinates(
          this.layout.padding,
          this.layout.height / 2 + this.layout.padding * 2,
          this.layout.width - this.layout.padding * 2,
          this.layout.height / 2 - this.layout.padding * 3.5
        ),
      }),
    ];
  }

  private getCompositionOptions(): FormRadioOptions[] {
    return [new FormRadioOptions("v1", "v1"), new FormRadioOptions("v2", "v2")];
  }

  private getFooter(): Coordinates {
    return new Coordinates(
      this.layout.padding,
      this.layout.height - this.layout.padding - 12,
      this.layout.width - this.layout.padding,
      40
    );
  }
}
