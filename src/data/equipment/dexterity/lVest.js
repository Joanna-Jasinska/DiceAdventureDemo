import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const lVest = {
  id: "Leather Vest|THUMBLE -2|",
  name: "Leather Vest",
  alt: "🧥",
  skill: {
    name: "THUMBLE -2",
    txt: "change into universal -2",
    id: "Leather Vest|THUMBLE -2|",
    displayCost: [{ value: "", type: "dexterity" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 6 },
    {
      item: "dice",
      diceMax: 1,
      // value: undefined,
      type: "dexterity",
      existSinceLv: 1,
      duplicateAtLv: 12,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
// "Leather Vest|THUMBLE|": {
//   // "change 1 into ⬜️ of value -1"
//   evaluationId: "1|PIECE|dexterity",
//   actionId: "1|ACC|ANY|-2",
// },
export const lVest_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["dexterity"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const lVest_ex = [
  [
    DICE_SEX,
    "Acc into 1 Dice & Remove",
    {
      value: 1,
      obj: {
        type: "any",
        // diceMax: 1,
        value: -2,
      },
    },
  ],
];
