import { getDungeon, DUNGEONS } from "data/dungeons";
import { getRandomNum } from "./Dice";
export const Dungeon = {
  getDungeonById: getDungeon,

  getRandom() {
    const n = getRandomNum(0, 4);
    return DUNGEONS[n];
  },
};
