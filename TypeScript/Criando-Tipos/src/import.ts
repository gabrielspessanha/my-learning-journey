import { Spaceship } from "./export";
import * as lodash from "lodash"

interface BattleSpaceShip extends Spaceship{
  weapons: number
}

const xwing : BattleSpaceShip = {
  name: "X-wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4
}

console.log(lodash.camelCase(xwing.pilot))