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
      diceMax: 4,
      value: 2,
      type: "rainbow",
      existSinceLv: 1,
      duplicateAtLv: 80,
      lvlsToRaiseValue: 4,
      lvlsToRaiseDiceMax: 5,
    },
  ],
};
