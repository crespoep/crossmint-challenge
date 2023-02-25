import * as dotenv from 'dotenv'
dotenv.config()
import { fillMapWithAstralObjects } from './astral-objects-map-creator'

fillMapWithAstralObjects()
  .then(res => console.log("Megaverse was successfully created!"))
  .catch(err => console.log("There was an error during the creation: ", err))
