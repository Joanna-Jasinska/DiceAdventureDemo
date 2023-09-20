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

  getCurrentDungeons(journey) {
    const pathsAmount =
      journey + PATHS_AMOUNT <= JOURNEY.length - 5 ? PATHS_AMOUNT : 5;
    const paths = [...JOURNEY.slice(journey, pathsAmount + journey)];
    // while (paths.length < pathsAmount) {
    //   paths.push(JOURNEY[getRandomNum(0, JOURNEY.length - 1)]);
    // }
    return paths;
  },
};
