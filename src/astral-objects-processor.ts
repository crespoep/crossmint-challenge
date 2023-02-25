import Cometh from "./entities/cometh";
import Polyanet from "./entities/polyanet";
import Soloon from "./entities/soloon";

export async function processObject(row: number, column: number, shape: string) {
  if(shape.includes("POLYANET")) {
    const astralObj = new Polyanet(row, column);
    await astralObj.save()
  } else if(shape.includes("SOLOON")) {
    const color = extractOption(shape)
    const astralObj = new Soloon(row, column, color);
    await astralObj.save()
  } else if (shape.includes("COMETH")) {
    const direction = extractOption(shape)
    const astralObj = new Cometh(row, column, direction);
    await astralObj.save()
  }
}

function extractOption(shape: string) {
  return shape.split("_")[0]
}
