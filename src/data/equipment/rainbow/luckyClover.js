export const luckyClover = {
  name: "Lucky Clover",
  id: "Lucky Clover|LUCKY ROLL|",
  alt: "🍀",
  skill: {
    name: "LUCKY ROLL",
    txt: " reroll 1 for same or higher value ",
    id: "Lucky Clover|LUCKY ROLL|",
    displayCost: [{ value: "", type: "any" }],
  },
  statsTxT: "~ +1/4 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 7 },
    {
      item: "dice",
      diceMax: 3,
      value: 1,
      type: "rainbow",
      existSinceLv: 1,
      duplicateAtLv: 18,
      lvlsToRaiseValue: 1,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
