import { Component, OnInit, ViewChild } from "@angular/core";
import { CanvasComponent } from "./canvas/canvas.component";
import { FormRadioLayout } from "./form/form-radio-layout/form-radio-layout.model";
import { Color } from "./model/color.model";
import { Composition } from "./model/composition.model";
import { Layout } from "./model/layout.model";
import { State } from "./model/state.model";
import { ColorService } from "./service/color.service";
import { LayoutService } from "./service/layout.service";
import { StateService } from "./service/state.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  @ViewChild(CanvasComponent) canvas: CanvasComponent;

  public layout: Layout[];

  public selectedLayout: Layout;

  public state: State;

  public layoutOptions: FormRadioLayout[] = [];

  public colorOptions: Color[] = [];

  public imageLabel: string;

  constructor(
    private stateService: StateService,
    private layoutService: LayoutService,
    private colorService: ColorService
  ) {
    this.imageLabel = "Choose image";
  }

  public ngOnInit(): void {
    this.state = this.stateService.getModel();
    this.layout = this.layoutService.getModel();
    this.layoutOptions = this.layoutService.getLayoutOptions();
    this.colorOptions = this.colorService.getColors();
    this.selectedLayout = this.layout[0];
  }

  public changeLayout(id: string): void {
    this.selectedLayout = this.layoutService.getById(id);
  }

  /**
   * @description shuffle between layout compositions
   */
  public shuffle(): void {
    const selectedLayout = this.layoutService.getById(this.state.layoutId);
    let id = this.state.compositionId;
    const index = selectedLayout.composition.findIndex(
      (composition: Composition) => composition.id === id
    );

    if (index === selectedLayout.composition.length - 1) {
      this.state.compositionId = selectedLayout.composition[0].id;
    } else {
      this.state.compositionId = selectedLayout.composition[index + 1].id;
    }
  }

  /**
   * @description Create screenshot from the canvas
   */
  public download(): void {
    this.canvas.download();
  }

  public uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageLabel = "Upload successfully";
        this.canvas.uploadImage(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
