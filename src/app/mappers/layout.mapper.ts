import { Injectable } from "@angular/core";
import { Layout } from "../model/layout.model";
import { LayoutV1Mapper } from "./layout-v1.mapper";
import { LayoutV2Mapper } from "./layout-v2.mapper";

@Injectable()
export class LayoutMapper {
  constructor(
    private layoutV1: LayoutV1Mapper,
    private layoutV2: LayoutV2Mapper
  ) {}

  public map(): Layout[] {
    const layout: Layout[] = [];

    layout.push(this.layoutV1.map());
    layout.push(this.layoutV2.map());

    return layout;
  }
}
