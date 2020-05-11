import { Injectable } from "@angular/core";
import { Color } from "../model/color.model";
import { FormRadioOptions } from "../model/form-radio-options.model";

Injectable();
export class ColorService {
  constructor() {}

  public getColors(): Color[] {
    return [
      new Color({
        id: "plum",
        background: "#dfd8e3",
        brandText: "#CEA193",
        brandBackground: "#F5D3C9",
        text: "#B9A4C5",
        shape: "#fce7dd",
      }),
      new Color({
        id: "rose",
        background: "#fce7dd",
        brandText: "#6D5B51",
        brandBackground: "#CAF4EB",
        text: "#6D5B51",
        shape: "#BCA79D",
      }),
      new Color({
        id: "sage",
        background: "#e8f3ec",
        brandText: "#D6F5FF",
        brandBackground: "#85B1CC",
        text: "#8CB49C",
        shape: "#516258",
      }),
      new Color({
        id: "sand",
        background: "#e6f1e4",
        brandText: "#566254",
        brandBackground: "#A2AF9F",
        text: "#A2AF9F",
        shape: "#566254",
      }),
      new Color({
        id: "sea",
        background: "#d7efee",
        brandText: "#324B4A",
        brandBackground: "#7BB6B4",
        text: "#fff",
        shape: "#ADB1CA",
      }),
      new Color({
        id: "sky",
        background: "#e2eff9",
        brandText: "#374955",
        brandBackground: "#FFE5F7",
        text: "#fff",
        shape: "#C9AEBF",
      }),
    ];
  }

  public getColorById(id: string): Color {
    return this.getColors().find((color: Color) => color.id === id);
  }
}
