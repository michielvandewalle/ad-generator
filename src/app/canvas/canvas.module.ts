import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CanvasComponent } from "./canvas.component";

@NgModule({
  declarations: [CanvasComponent],
  exports: [CanvasComponent],
  imports: [BrowserModule],
})
export class CanvasModule {}
