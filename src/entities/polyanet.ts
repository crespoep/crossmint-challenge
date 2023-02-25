import {AstralObject} from "./astral-object";

export default class Polyanet extends AstralObject{
  private readonly RESOURCE_URL = "/polyanets"
  
  constructor(row: number, column: number) {
    super(row, column);
  }
  
  async save() {
    await super.save(this.RESOURCE_URL, {
      row: this.row,
      column: this.column,
    })
  }
}
