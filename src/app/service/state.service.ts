import { Injectable } from "@angular/core";
import { State } from "../model/state.model";

@Injectable()
export class StateService {
  constructor() {}

  public getModel(): State {
    return new State({
      brand: "K I D D Y B I P S",
      layoutId: "v1",
      compositionId: "v1",
      colorId: "sand",
    });
  }
}
