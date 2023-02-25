import {AstralObject} from "./astral-object";

export default class Cometh extends AstralObject{
  private readonly RESOURCE_URL = "/comeths"
  private readonly direction;
  
  constructor(row: number, column: number, direction?: string) {
    super(row, column);
    this.direction = direction?.toLowerCase();
  }
  
  async save() {
    await super.save(this.RESOURCE_URL, {
      row: this.row,
      column: this.column,
      direction: this.direction,
    })
  }
}
