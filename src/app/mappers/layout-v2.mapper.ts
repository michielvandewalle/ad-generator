import { Injectable } from "@angular/core";
import { Layout } from "../model/layout.model";
import { Composition } from "../model/composition.model";
import { Coordinates } from "../model/coordinates.model";
import { Canvas } from "../model/canvas.model";
import { Graphic } from "../model/graphic.model";
import { Font } from "../model/font/font.model";
import { TextAlignment } from "../model/font/text-alignment.model";

@Injectable()
export class LayoutV2Mapper {
  constructor() {}

  public map(): Layout {
    const canvas = new Canvas({
      width: 874,
      height: 1240,
      margin: 48,
    });

    return new Layout({
      id: "v5",
      label: "A7",
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
            width - margin - 180,
            width / 2 - margin,
            180
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        image: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              margin,
              width - margin * 2,
              width - margin * 2
            ),
          }),
        ],
        text: new Graphic({
          coordinates: new Coordinates(
            margin + margin,
            width - margin + margin,
            width - margin * 4,
            height - width - margin * 2
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        shape: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              width - margin,
              width - margin * 2,
              height - width
            ),
          }),
        ],
      })
    );

    composition.push(
      new Composition({
        id: "v2",
        brand: new Graphic({
          coordinates: new Coordinates(
            width / 2,
            width - margin - 180,
            width / 2 - margin,
            180
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        image: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              margin,
              width - margin * 2,
              width - margin * 2
            ),
          }),
        ],
        text: new Graphic({
          coordinates: new Coordinates(
            margin + margin,
            width - margin + margin,
            width - margin * 4,
            height - width - margin * 2
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        shape: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              width - margin,
              width - margin * 2,
              height - width
            ),
          }),
        ],
      })
    );

    composition.push(
      new Composition({
        id: "v3",
        brand: new Graphic({
          coordinates: new Coordinates(
            margin,
            height - width + margin,
            width / 2 - margin,
            180
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        image: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              height - width + margin,
              width - margin * 2,
              width - margin * 2
            ),
          }),
        ],
        text: new Graphic({
          coordinates: new Coordinates(
            margin + margin,
            margin + margin,
            width - margin * 4,
            height - width - margin * 2
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        shape: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              margin,
              width - margin * 2,
              height - width
            ),
          }),
        ],
      })
    );

    composition.push(
      new Composition({
        id: "v4",
        brand: new Graphic({
          coordinates: new Coordinates(
            width / 2,
            height - width + margin,
            width / 2 - margin,
            180
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        image: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              height - width + margin,
              width - margin * 2,
              width - margin * 2
            ),
          }),
        ],
        text: new Graphic({
          coordinates: new Coordinates(
            margin + margin,
            margin + margin,
            width - margin * 4,
            height - width - margin * 2
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 32,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 22,
          }),
        }),
        shape: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              margin,
              width - margin * 2,
              height - width
            ),
          }),
        ],
      })
    );

    return composition;
  }
}
