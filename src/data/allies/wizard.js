// wizard🧙 spells, familiars, potions
// "Bunny Familiar|BUNNY MAGIC|"
// const getWizardQuestCost = (q) => {
//     const index = QUESTS_WIZARD.indexOf(q);
//     const cost = 190 + (index >= 0 ? index * 10 : 0);
//     return cost;

import { Items } from "objects/Items";

//   };
export const getWizardQuests = (allyLv = 1, caravanLv = 1, dungeonLevels) => {
  //   const min = allyLv;
  const max = caravanLv;
  const filtered = QUESTS_WIZARD.map((q, index) => {
    let locked = false;
    if (dungeonLevels[q.dungeon] < index) {
      locked = "Path level too low";
    }
    if (caravanLv < index) {
      locked = "Move cravan to unlock";
    }
    // if (items.some((i) => i.itemId === q.item)){
    //     locked="owned";
    // };
    const cost = 190 + (index >= 0 ? index * 10 : 0);
    return {
      dungeon: q.dungeon,
      item: Items.getItemById(q.item),
      locked,
      index,
      cost,
    };
  }).slice(allyLv);
  return filtered.length > 0 ? filtered : false;
};
// const getWizardQuests = (allyLv = 1, caravanLv = 1, dungeonLevels, items) => {
//   const min = allyLv;
//   const max = caravanLv;
//   const filtered = QUESTS_WIZARD.filter((q, index) => {
//     if (index > min || dungeonLevels[q.dungeon] < index || caravanLv < index)
//       return false;
//     if (items.some((i) => i.itemId === q.item)) return false;
//     return true;
//   });
//   return filtered.length > 0 ? filtered : false;
// };
const QUESTS_WIZARD = [
  {},
  {
    item: "Bunny Familiar|BUNNY MAGIC|",
    dungeon: "dungeon|1|",
  },
];
