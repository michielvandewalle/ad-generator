import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormInputColorComponent } from "./form-input-color.component";

@NgModule({
  declarations: [FormInputColorComponent],
  exports: [FormInputColorComponent],
  imports: [BrowserModule, FormsModule],
})
export class FormInputColorModule {}
