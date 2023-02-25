import { processObject } from "./astral-objects-processor";
import { provideObjectsCoordinates } from "./data-provider";

async function processFromCoordinates(coordinates) {
  const numberOfRows = coordinates.length
  const numberOfColumns = coordinates[0].length
  for(let i = 0; i < numberOfRows; i++) {
    for(let j = 0; j < numberOfColumns; j++) {
      await processObject(i, j, coordinates[i][j])
    }
  }
}

export async function fillMapWithAstralObjects() {
  const objectsCoordinates = await provideObjectsCoordinates();
  await processFromCoordinates(objectsCoordinates)
}
