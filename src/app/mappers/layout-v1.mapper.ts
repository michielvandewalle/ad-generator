import { Injectable } from "@angular/core";
import { Layout } from "../model/layout.model";
import { Composition } from "../model/composition.model";
import { Coordinates } from "../model/coordinates.model";
import { Canvas } from "../model/canvas.model";
import { Graphic } from "../model/graphic.model";

@Injectable()
export class LayoutV1Mapper {
  constructor() {}

  public map(): Layout {
    const canvas = new Canvas({
      width: 1080,
      height: 1080,
      margin: 48,
    });

    return new Layout({
      id: "v1",
      canvas: canvas,
      composition: this.getComposition(
        canvas.width,
        canvas.height,
        canvas.margin
      ),
    });
  }

  private getComposition(
    width: number,
    height: number,
    margin: number
  ): Composition[] {
    const composition: Composition[] = [];

    composition.push(
      new Composition({
        id: "v1",
        brand: new Graphic({
          coordinates: new Coordinates(
            margin,
            margin,
            width / 2 - margin,
            height / 2 - margin
          ),
        }),
        image: new Graphic({
          coordinates: new Coordinates(
            width / 2,
            margin,
            width / 2 - margin,
            height / 2 - margin
          ),
        }),
        text: new Graphic({
          coordinates: new Coordinates(
            width / 2,
            height / 2,
            width / 2 - margin,
            height / 2 - margin
          ),
        }),
        shape: this.getShape(width, height, margin),
      })
    );

    return composition;
  }

  private getShape(width: number, height: number, margin: number): Graphic[] {
    return [
      new Graphic({
        coordinates: new Coordinates(
          margin,
          height / 2 + margin * 2,
          width - margin * 2,
          height / 2 - margin * 3.5
        ),
      }),
      new Graphic({
        coordinates: new Coordinates(
          width / 2,
          height / 2,
          width / 2 - margin,
          height / 2 - margin
        ),
      }),
    ];
  }
}
