import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { CanvasModule } from "./canvas/canvas.module";
import { FormInputColorModule } from "./form/form-input-color/form-input-color.module";
import { FormInputTextModule } from "./form/form-input-text/form-input-text.module";
import { FormRadioLayoutModule } from "./form/form-radio-layout/form-radio-layout.module";
import { FormUploadImageModule } from "./form/form-upload-image/form-upload-image.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbAccordionModule,
    CanvasModule,
    FormInputTextModule,
    FormInputColorModule,
    FormUploadImageModule,
    FormRadioLayoutModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
