import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
import { Color } from "../../model/color.model";

@Component({
  selector: "app-form-input-color",
  templateUrl: "./form-input-color.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputColorComponent),
      multi: true,
    },
  ],
})
export class FormInputColorComponent implements ControlValueAccessor, OnInit {
  @Input() public id: string;

  @Input() public options: Color[];

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
