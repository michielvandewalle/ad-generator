import { Component, forwardRef, OnInit, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormRadioOptions } from "../../model/form-radio-options.model";

@Component({
  selector: "app-form-radio-composition",
  templateUrl: "./form-radio-composition.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormRadioCompositionComponent),
      multi: true,
    },
  ],
})
export class FormRadioCompositionComponent
  implements ControlValueAccessor, OnInit {
  @Input() public options: FormRadioOptions[];

  private val: string;

  constructor() {}

  public ngOnInit(): void {}

  public get value(): any {
    return this.val;
  }

  public set value(val: any) {
    console.log(val);
    if (val !== undefined && val !== null && val !== this.val) {
      this.val = val;
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
