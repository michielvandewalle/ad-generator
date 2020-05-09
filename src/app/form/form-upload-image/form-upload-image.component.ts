import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { FormInputTextComponent } from "../form-input-text/form-input-text.component";

@Component({
  selector: "app-form-upload-image",
  templateUrl: "./form-upload-image.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormUploadImageComponent),
      multi: true,
    },
  ],
})
export class FormUploadImageComponent implements ControlValueAccessor, OnInit {
  @Input() public id: string;

  public label: string;

  private val: string | ArrayBuffer;

  constructor() {
    this.label = "Upload image";
  }

  public ngOnInit(): void {}

  public get value(): any {
    return this.val;
  }

  public set value(val: any) {
    if (val !== undefined && val !== null && val !== this.val) {
      console.log(val);
      // if (event.target.files && event.target.files[0]) {
      //   const reader = new FileReader();
      //   reader.onload = (event) => {
      //     this.label = "Upload successfully";
      //     this.val = event.target.result;
      //   };
      //   reader.readAsDataURL(event.target.files[0]);
      // }
    }

    this.onChange(this.val);
  }

  public writeValue(value: any) {
    if (value !== this.val) {
      this.val = value;
    }
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public clear(): void {
    this.val = null;
    this.onChange(this.val);
  }

  private onChange = (_: any) => {};

  private onTouched = () => {};
}
