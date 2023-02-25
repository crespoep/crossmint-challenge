import axios from 'axios'

const CANDIDATE_ID = process.env.CANDIDATE_ID
const API_URL = process.env.API_URL
const GOAL_MAP_ENDPOINT = `/map/${CANDIDATE_ID}/goal`

export async function getGoalMapCoordinates() {
  return await axios.get(API_URL + GOAL_MAP_ENDPOINT);
}

export async function saveObject(resourceURL: string, params: object) {
  await save(resourceURL, params)
}

/*
 * The purpose of this function is for adding delay to the request to avoid HTTP 429 code status
 */
function save(resourceURL: string, params: object) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(async () => {
      await axios.post(API_URL + resourceURL, {...params, CANDIDATE_ID})
      resolve()
    }, 2000)
  })
}
