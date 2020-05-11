export class Font {
  public lineHeight: number;

  public type: string;

  constructor(init?: Partial<Font>) {
    Object.assign(this, init);
  }
}
