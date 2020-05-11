export class Canvas {
  public width: number;

  public height: number;

  public margin: number;

  constructor(init?: Partial<Canvas>) {
    Object.assign(this, init);
  }
}
