export class Color {
  public id: string;

  public background: string;

  public brandText: string;

  public brandBackground: string;

  public text: string;

  public shape: string;

  constructor(init?: Partial<Color>) {
    Object.assign(this, init);
  }
}
