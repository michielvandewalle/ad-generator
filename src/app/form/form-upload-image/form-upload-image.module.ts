import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormUploadImageComponent } from "./form-upload-image.component";

@NgModule({
  declarations: [FormUploadImageComponent],
  exports: [FormUploadImageComponent],
  imports: [BrowserModule, FormsModule],
})
export class FormUploadImageModule {}
