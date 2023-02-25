import { getGoalMapCoordinates } from "./api-sender";

export async function provideObjectsCoordinates() {
  const res = await getGoalMapCoordinates();
  return res.data.goal
}
