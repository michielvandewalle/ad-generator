import { Injectable } from "@angular/core";
import { State } from "../model/state.model";

@Injectable()
export class StateService {
  constructor() {}

  public getModel(): State {
    return new State({
      brand: "K I D D Y B I P S",
      font: "Noto Sans",
      textSize: 18,
      lineHeight: 24,
      compositionId: "v1",
      layoutId: "v1",
      colorId: "plum",
    });
  }
}
