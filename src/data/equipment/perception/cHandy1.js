import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const cHandy1 = {
  id: "Caravan Handyman|I'LL FIX THIS|",
  name: "Caravan Handyman",
  alt: "👨‍🏭",
  skill: {
    name: "I'LL FIX THIS",
    txt: "reroll 2, create random 🧠",
    id: "Caravan Handyman|I'LL FIX THIS|",
    displayCost: [
      { value: "", type: "elemental" },
      { value: "", type: "physical" },
      { value: "", type: "trait" },
    ],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 2 },
    {
      item: "dice",
      diceMax: 1,
      // value: 3,
      type: "perception",
      existSinceLv: 1,
      duplicateAtLv: 18,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const cHandy1_ev = [
  [OTHER_SEV, "NUMDICES", { value: 2 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["elemental", "physical", "trait"] },
        requires: { minDices: 2, maxDices: 2 },
      },
    },
  ],
];
export const cHandy1_ex = [
  [
    DICE_SEX,
    "Reroll",
    {
      value: 2, //1 dice to reroll
    },
  ],
  // [
  //   DICE_SEX,
  //   "Keep",
  //   {
  //     value: 1,
  //   },
  // ],
  [
    DICE_SEX,
    "Value Manipulation Array",
    {
      value: 1,
      obj: {
        // setTo: ["diceMax"],
        multiplyBy: [1],
        // divideBy: [3],
        // add: [1],
        extraCopies: [1],
      },
    },
  ],
  [
    DICE_SEX,
    "Reroll & Remove",
    {
      value: 1, //1 dice to reroll
    },
  ],
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "wits",
        // diceMax: 1,
        // value: 1,
      },
    },
  ],
  [
    DICE_SEX,
    "Reroll & Remove",
    {
      value: 1, //1 dice to reroll
    },
  ],
];
