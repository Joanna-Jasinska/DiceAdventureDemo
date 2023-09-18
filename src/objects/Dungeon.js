import { getDungeon, DUNGEONS } from "data/dungeons";
import { getRandomNum } from "./Dice";
import { PATHS_AMOUNT } from "data/settings";
import { JOURNEY } from "data/journey";
export const Dungeon = {
  getDungeonById: getDungeon,

  getRandom() {
    const n = getRandomNum(0, 4);
    return DUNGEONS[n];
  },

  getEventIdFromSelectedCurrentDungeon(selectedId, currentDungeons) {
    return currentDungeons.find(
      (eid, index) => eid.includes(selectedId)
      // (eid, index) => eid.slice(0, 10) === selectedId
    );
  },

  getCurrentDungeons(playerLv) {
    const paths = [...JOURNEY.slice(playerLv, PATHS_AMOUNT + playerLv)];
    while (paths.length < PATHS_AMOUNT) {
      paths.push(JOURNEY[getRandomNum(0, JOURNEY.length - 1)]);
    }
    return paths;
  },
};
