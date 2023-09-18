import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const tBag = {
  id: "Travel Bag|COOKING UTENSIL TOSS|",
  name: "Travel Bag",
  alt: "👜",
  skill: {
    name: "COOKING UTENSIL TOSS",
    txt: "reroll",
    id: "Travel Bag|COOKING UTENSIL TOSS|",
    displayCost: [{ value: "", type: "physical" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 6 },
    {
      item: "dice",
      diceMax: 1,
      // value: undefined,
      type: "smashed",
      existSinceLv: 1,
      duplicateAtLv: 19,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const tBag_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["physical"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const tBag_ex = [
  [
    DICE_SEX,
    "Reroll",
    {
      value: 1, //1 dice to reroll
    },
  ],
];
