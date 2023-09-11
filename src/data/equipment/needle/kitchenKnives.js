export const kitchenKnives = {
  id: "Kitchen Knives|KNIFE THROW|",
  name: "Kitchen Knives",
  alt: "🔪",
  skill: {
    name: "KNIFE THROW",
    txt: "reroll 1 into [1] or [max value]",
    id: "Kitchen Knives|KNIFE THROW|",
    displayCost: [{ value: "", type: "needle" }],
  },
  statsTxT: "~ +1/4 per lv",
  stats: [
    {
      item: "dice",
      diceMax: 4,
      // value: undefined,
      type: "needle",
      existSinceLv: 0,
      duplicateAtLv: 10,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 5,
    },
    {
      item: "dice",
      diceMax: 2,
      // value: undefined,
      type: "needle",
      existSinceLv: 2,
      duplicateAtLv: 14,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 15,
    },
  ],
};
