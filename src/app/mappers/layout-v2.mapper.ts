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
      width: 1080,
      height: 1080,
      margin: 48,
    });

    return new Layout({
      id: "v2",
      label: "square",
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
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 24,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 18,
          }),
        }),
        image: [
          new Graphic({
            coordinates: new Coordinates(
              width / 2,
              margin,
              width / 2 - margin,
              height / 2 - margin
            ),
          }),
          new Graphic({
            coordinates: new Coordinates(
              margin,
              height / 2,
              width / 2 - margin,
              height / 2 - margin
            ),
          }),
        ],
        text: new Graphic({
          coordinates: new Coordinates(
            width / 2 + margin / 2,
            height / 2 + margin / 2,
            width / 2 - margin * 2,
            height / 2 - margin * 2
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 24,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 18,
          }),
        }),
        shape: [
          new Graphic({
            coordinates: new Coordinates(
              width / 2,
              height / 2,
              width / 2 - margin,
              height / 2 - margin
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
            margin,
            width / 2 - margin,
            height / 2 - margin
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 24,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 18,
          }),
        }),
        image: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              margin,
              width / 2 - margin,
              height / 2 - margin
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
        ],
        text: new Graphic({
          coordinates: new Coordinates(
            margin + margin / 2,
            height / 2 + margin / 2,
            width / 2 - margin * 2,
            height / 2 - margin * 2
          ),
          font: new Font({
            fontFamily: "Noto Sans",
            lineHeight: 24,
            textAlignment: new TextAlignment("center", "center"),
            textSize: 18,
          }),
        }),
        shape: [
          new Graphic({
            coordinates: new Coordinates(
              margin,
              height / 2,
              width / 2 - margin,
              height / 2 - margin
            ),
          }),
        ],
      })
    );

    return composition;
  }
}
