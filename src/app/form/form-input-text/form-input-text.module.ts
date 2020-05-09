import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormInputTextComponent } from "./form-input-text.component";

@NgModule({
  declarations: [FormInputTextComponent],
  exports: [FormInputTextComponent],
  imports: [BrowserModule, FormsModule],
})
export class FormInputTextModule {}
