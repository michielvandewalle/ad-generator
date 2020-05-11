import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormRadioLayoutComponent } from "./form-radio-layout.component";

@NgModule({
  declarations: [FormRadioLayoutComponent],
  exports: [FormRadioLayoutComponent],
  imports: [BrowserModule, FormsModule],
})
export class FormRadioLayoutModule {}
