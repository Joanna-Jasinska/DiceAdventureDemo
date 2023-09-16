import { Items } from "./Items";
import { QUESTS_WIZARD } from "data/allies/wizard";
import { QUESTS_BARBARIAN } from "data/allies/barbarian";
import { QUESTS_ROGUE } from "data/allies/rogue";
import { QUESTS_HUNTER } from "data/allies/hunter";
import { QUESTS_ARISTOCRAT } from "data/allies/aristocrat";

const getDungeonShortName = (id) => {
  switch (id) {
    case "dungeon|1|":
      return "Mountain";
    case "dungeon|2|":
      return "Forest";
    case "dungeon|3|":
      return "Valley";
    case "dungeon|4|":
      return "Island";
    case "dungeon|5|":
      return "Castle";
    default:
      return "Forest";
  }
};
export const Quest = {
  getAllyQuests(
    allyLv = 1,
    caravanLv = 1,
    dungeonLevels,
    amount = false,
    allyType
  ) {
    let collection = [];
    switch (allyType) {
      case "wizard":
        collection = QUESTS_WIZARD;
        break;
      case "barbarian":
        collection = QUESTS_BARBARIAN;
        break;
      case "rogue":
        collection = QUESTS_ROGUE;
        break;
      case "hunter":
        collection = QUESTS_HUNTER;
        break;
      case "aristocrat":
        collection = QUESTS_ARISTOCRAT;
        break;
      default:
        return [];
    }
    const questLevels = Object.keys(collection);
    let checkingLv;
    let checked = 0;
    let iteration = allyLv;
    let filtered = [];
    while (
      iteration < questLevels[questLevels.length - 1] &&
      (!amount || checked < amount)
    ) {
      checkingLv = questLevels[iteration];
      const q = collection[checkingLv] || false;
      if (q) {
        const reqCaravan = Math.floor((checkingLv || 0) / 3);
        let locked = false;
        if (dungeonLevels[q.dungeon] < checkingLv) {
          locked = `Reach Lv ${checkingLv}\n${getDungeonShortName(q.dungeon)}`;
        }
        if (caravanLv < reqCaravan) {
          locked = `Move cravan\nto unlock`;
        }
        const cost = 150 + (checkingLv >= 0 ? checkingLv * 10 : 0);
        filtered.push({
          dungeon: q.dungeon,
          item: Items.getItemById({ id: q.item }),
          locked,
          index: iteration,
          cost,
          ally: allyType,
        });
        checked = checked + 1;
      }
      iteration = iteration + 1;
    }
    return filtered.length > 0 ? filtered : [];
  },
  getAvailableQuests(allies, caravanLv = 1, dungeonLevels, amount = 1) {
    const wizard = this.getAllyQuests(
      allies["wizard"].lv,
      caravanLv,
      dungeonLevels,
      amount,
      "wizard"
    );
    const barbarian = this.getAllyQuests(
      allies["barbarian"].lv,
      caravanLv,
      dungeonLevels,
      amount,
      "barbarian"
    );
    const aristocrat = this.getAllyQuests(
      allies["aristocrat"].lv,
      caravanLv,
      dungeonLevels,
      amount,
      "aristocrat"
    );
    const hunter = this.getAllyQuests(
      allies["hunter"].lv,
      caravanLv,
      dungeonLevels,
      amount,
      "hunter"
    );
    const rogue = this.getAllyQuests(
      allies["rogue"].lv,
      caravanLv,
      dungeonLevels,
      amount,
      "rogue"
    );
    return [...barbarian, ...aristocrat, ...hunter, ...rogue, ...wizard];
  },
};
