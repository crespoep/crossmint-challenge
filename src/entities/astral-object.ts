import {saveObject} from "../api-sender";
import IEntity from "./IEntity";

export abstract class AstralObject implements IEntity {
  protected readonly BASE_API_URL ="https://challenge.crossmint.io/api"
  protected row;
  protected column;
  
  protected constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }
  
  async save(RESOURCE_URL: string, params: object) {
    await saveObject(RESOURCE_URL, params)
  }
}
