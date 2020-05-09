import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormRadioCompositionComponent } from "./form-radio-composition.component";

@NgModule({
  declarations: [FormRadioCompositionComponent],
  exports: [FormRadioCompositionComponent],
  imports: [BrowserModule, FormsModule],
})
export class FormRadioCompositionModule {}
