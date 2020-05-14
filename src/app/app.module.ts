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
import { LayoutV1Mapper } from "./mappers/layout-v1.mapper";
import { LayoutV2Mapper } from "./mappers/layout-v2.mapper";
import { LayoutMapper } from "./mappers/layout.mapper";
import { ColorService } from "./service/color.service";
import { LayoutService } from "./service/layout.service";
import { StateService } from "./service/state.service";

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
  providers: [
    StateService,
    LayoutService,
    ColorService,
    LayoutMapper,
    LayoutV1Mapper,
    LayoutV2Mapper,
  ],
})
export class AppModule {}
