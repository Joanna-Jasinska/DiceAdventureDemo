import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const sGloves = {
  id: "Spark Gloves|STATIC SPREAD|",
  name: "Spark Gloves",
  alt: "🧤",
  skill: {
    name: "STATIC SPREAD",
    txt: "divide into two ⚡️dices",
    id: "Spark Gloves|STATIC SPREAD|",
    displayCost: [
      { value: "", type: "shock" },
      { value: "", type: "wits" },
    ],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    {
      item: "dice",
      diceMax: 2,
      // value: 1,
      type: "shock",
      existSinceLv: 1,
      duplicateAtLv: 17,
      // lvlsToRaiseValue: 4,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};

export const sGloves_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["shock", "wits"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];

export const sGloves_ex = [
  // txt: "divide 1 into 3 ✨ dices - rerolled to same or lower value",
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "shock",
        // diceMax: 1,
        // value: -2,
      },
    },
  ],
  [
    DICE_SEX,
    "Value Manipulation Array",
    {
      value: 1,
      obj: {
        // setTo: ["diceMax"],
        // multiplyBy: [10],
        divideBy: [2],
        // add: [1],
        extraCopies: [1],
      },
    },
  ],
  // [
  //   DICE_SEX,
  //   "Reroll-",
  //   {
  //     value: 3, //1 dice to reroll
  //   },
  // ],
];
