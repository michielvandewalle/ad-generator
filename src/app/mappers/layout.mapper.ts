import { Injectable } from "@angular/core";
import { Layout } from "../model/layout.model";
import { LayoutV1Mapper } from "./layout-v1.mapper";

@Injectable()
export class LayoutMapper {
  constructor(private layoutV1: LayoutV1Mapper) {}

  public map(): Layout[] {
    const layout: Layout[] = [];

    layout.push(this.layoutV1.map());

    return layout;
  }
}
