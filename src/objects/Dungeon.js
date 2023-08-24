import { getDungeon, DUNGEONS } from "data/dungeons";
export const Dungeon = {
  getDungeonById: getDungeon,

  getRandom() {
    return DUNGEONS[0];
  },
};
