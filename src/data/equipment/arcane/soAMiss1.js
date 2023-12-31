import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const soAMiss1 = {
  id: "SoArcane Missles|INVOKE ARCANE|",
  name: "Scroll of Arcane Missles",
  alt: "📜",
  skill: {
    name: "INVOKE ARCANE",
    txt: "divide into three ✨dices - rerolled to same or lower value",
    id: "SoArcane Missles|INVOKE ARCANE|",
    displayCost: [{ value: "", type: "magic" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    {
      item: "dice",
      diceMax: 2,
      value: 1,
      type: "mana",
      existSinceLv: 0,
      duplicateAtLv: 15,
      lvlsToRaiseValue: 1,
      lvlsToRaiseDiceMax: 0.8,
    },
  ],
};

export const soAMiss1_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["magic"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];

export const soAMiss1_ex = [
  // txt: "divide 1 into 3 ✨ dices - rerolled to same or lower value",
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "arcane",
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
        divideBy: [3],
        // add: [1],
        extraCopies: [2],
      },
    },
  ],
  [
    DICE_SEX,
    "Reroll-",
    {
      value: 3, //1 dice to reroll
    },
  ],
];
