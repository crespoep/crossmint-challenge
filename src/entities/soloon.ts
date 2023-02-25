import {AstralObject} from "./astral-object";

export default class Soloon extends AstralObject {
  private readonly RESOURCE_URL = "/soloons"
  private readonly color;
  
  constructor(row: number, column: number, color?: string) {
    super(row, column);
    this.color = color?.toLowerCase();
  }
  
  async save() {
    await super.save(this.RESOURCE_URL, {
      row: this.row,
      column: this.column,
      color: this.color,
    })
  }
}
