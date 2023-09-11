export const leatherVest = {
  id: "Leather Vest|THUMBLE|",
  name: "Leather Vest",
  alt: "🧥",
  skill: {
    name: "THUMBLE",
    txt: "change 1 into ⬜️ of value -2",
    id: "Leather Vest|THUMBLE|",
    displayCost: [{ value: "", type: "dexterity" }],
  },
  statsTxT: "~ +1/4 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 8 },
    {
      item: "dice",
      diceMax: 6,
      // value: undefined,
      type: "dexterity",
      existSinceLv: 0,
      duplicateAtLv: 56,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 4,
    },
  ],
};
