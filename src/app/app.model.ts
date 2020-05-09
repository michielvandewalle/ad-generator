export class AppModel {
  public imageLabel: string;

  constructor(init?: Partial<AppModel>) {
    Object.assign(this, init);
  }
}
