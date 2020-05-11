import { Injectable } from "@angular/core";
import { LayoutMapper } from "../mappers/layout.mapper";
import { Layout } from "../model/layout.model";
import { FormRadioLayout } from "../form/form-radio-layout/form-radio-layout.model";

@Injectable()
export class LayoutService {
  constructor(private layoutMapper: LayoutMapper) {}

  public getModel(): Layout[] {
    return this.layoutMapper.map();
  }

  public getById(id: string): Layout {
    const layout = this.layoutMapper
      .map()
      .find((layout: Layout) => layout.id === id);

    if (!layout) {
      throw new Error(`Could not find layout with id ${id}`);
    }

    return layout;
  }

  /**
   * @description Get form radio layout options
   */
  public getLayoutOptions(): FormRadioLayout[] {
    return this.getModel().map(
      (item) =>
        new FormRadioLayout(item.id, item.id, `../assets/images/${item.id}.png`)
    );
  }
}
