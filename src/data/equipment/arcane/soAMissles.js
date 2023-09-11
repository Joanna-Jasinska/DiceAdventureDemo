export const scrollOfArcaneMissles = {
  id: "Scroll of Arcane Missles|INVOKE ARCANE|",
  name: "Scroll of Arcane Missles",
  alt: "📜",
  skill: {
    name: "INVOKE ARCANE",
    txt: "divide 1 into 3 ✨ dices - rerolled to same or lower value",
    id: "Scroll of Arcane Missles|INVOKE ARCANE|",
    displayCost: [{ value: "", type: "magic" }],
  },
  statsTxT: "~ +1/4 per lv",
  stats: [
    {
      item: "dice",
      diceMax: 3,
      value: 1,
      type: "mana",
      existSinceLv: 0,
      duplicateAtLv: 10,
      lvlsToRaiseValue: 4,
      lvlsToRaiseDiceMax: 3,
    },
  ],
};
export const scrollOfArcaneMissles_ev = {};
export const scrollOfArcaneMissles_ex = {};
