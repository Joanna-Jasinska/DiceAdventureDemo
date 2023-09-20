import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const lPackage = {
  id: "Lunch Package|PREPARE LUNCH|",
  name: "Lunch Package",
  alt: "🥪",
  skill: {
    name: "PREPARE LUNCH",
    txt: "transform into🥧 and duplicate",
    id: "Lunch Package|PREPARE LUNCH|",
    displayCost: [
      { value: "", type: "stamina" },
      { value: "", type: "speed" },
      { value: "", type: "rainbow" },
    ],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 2 },
    {
      item: "dice",
      diceMax: 2,
      // value: undefined,
      type: "stamina",
      existSinceLv: 1,
      duplicateAtLv: 18,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const lPackage_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["stamina", "speed", "rainbow"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const lPackage_ex = [
  // [
  //   DICE_SEX,
  //   "Reroll",
  //   {
  //     value: 1, //1 dice to reroll
  //   },
  // ],
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "stamina",
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
        // divideBy: [3],
        // add: [1],
        extraCopies: [1],
      },
    },
  ],
];
