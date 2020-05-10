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

  /**
   * @description shuffle between layout compositions
   */
  public shuffle(): void {
    let id = this.canvasModel.compositionId;
    const index = this.layout.composition.findIndex(
      (composition: Composition) => composition.id === id
    );

    if (index === this.layout.composition.length - 1) {
      this.canvasModel.compositionId = this.layout.composition[0].id;
    } else {
      this.canvasModel.compositionId = this.layout.composition[index + 1].id;
    }

    console.log(this.canvasModel.compositionId);
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
        brandText: "#CEA193",
        brandBackground: "#F5D3C9",
        text: "#B9A4C5",
        shape: "#fce7dd",
      }),
      new Color({
        id: "rose",
        background: "#fce7dd",
        brandText: "#6D5B51",
        brandBackground: "#CAF4EB",
        text: "#6D5B51",
        shape: "#BCA79D",
      }),
      new Color({
        id: "sage",
        background: "#e8f3ec",
        brandText: "#D6F5FF",
        brandBackground: "#85B1CC",
        text: "#8CB49C",
        shape: "#516258",
      }),
      new Color({
        id: "sand",
        background: "#e6f1e4",
        brandText: "#566254",
        brandBackground: "#A2AF9F",
        text: "#A2AF9F",
        shape: "#566254",
      }),
      new Color({
        id: "sea",
        background: "#d7efee",
        brandText: "#324B4A",
        brandBackground: "#7BB6B4",
        text: "#fff",
        shape: "#ADB1CA",
      }),
      new Color({
        id: "sky",
        background: "#e2eff9",
        brandText: "#374955",
        brandBackground: "#FFE5F7",
        text: "#fff",
        shape: "#C9AEBF",
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
      new Composition({
        id: "v3",
        image: new Coordinates(
          this.layout.width / 3,
          this.layout.padding,
          (this.layout.width / 3) * 2 - this.layout.padding,
          this.layout.height - this.layout.padding * 2
        ),
        brand: new Coordinates(
          this.layout.padding,
          (this.layout.height / 3) * 2,
          this.layout.width / 3 - this.layout.padding,
          this.layout.width / 3 - this.layout.padding
        ),
        text: new Coordinates(
          this.layout.padding + this.layout.padding / 2,
          this.layout.padding + this.layout.padding / 2,
          this.layout.width / 3 - this.layout.padding - this.layout.padding,
          this.layout.width / 3 - this.layout.padding - this.layout.padding / 2
        ),
        shape: new Coordinates(
          this.layout.padding,
          this.layout.padding,
          this.layout.width / 3 - this.layout.padding,
          this.layout.width / 3 - this.layout.padding
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
