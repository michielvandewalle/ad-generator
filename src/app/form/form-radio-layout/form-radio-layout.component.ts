import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormRadioLayout } from "./form-radio-layout.model";

@Component({
  selector: "app-form-radio-layout",
  templateUrl: "./form-radio-layout.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormRadioLayoutComponent),
      multi: true,
    },
  ],
})
export class FormRadioLayoutComponent implements ControlValueAccessor, OnInit {
  @Input() public id: string;

  @Input() public label: string;

  @Input() public options: FormRadioLayout[];

  private val: string;

  constructor() {}

  public ngOnInit(): void {}

  public get value(): any {
    return this.val;
  }

  public set value(val: any) {
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
