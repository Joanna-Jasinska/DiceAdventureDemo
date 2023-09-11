import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const torch = {
  id: "Torch|WAVE MENACINGLY|",
  name: "Torch",
  alt: "🥢",
  skill: {
    name: "WAVE MENACINGLY",
    txt: "change value to half of maximum, create 🕒 of 1-10 value",
    id: "Torch|WAVE MENACINGLY|",
    displayCost: [{ value: "", type: "heat" }],
  },
  statsTxT: "~ +1/5 per lv",
  stats: [
    // { item: "stats", type: "life", maxHp: -1 },
    {
      item: "dice",
      diceMax: 3,
      // value: undefined,
      type: "heat",
      existSinceLv: -2,
      duplicateAtLv: 85,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 5,
    },
  ],
};
export const torch_ev = [
  // "1|PIECE|heat":
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["heat"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const torch_ex = [
  // "1|VALUE|half|CREATE|speed|1-10":
  [
    DICE_SEX,
    "Value Manipulation Array",
    {
      value: 1,
      obj: {
        setTo: ["diceMax"],
        // multiplyBy: [10],
        divideBy: [2],
        // add: [1],
      },
    },
  ],
  [
    DICE_SEX,
    "Keep",
    {
      value: 1,
    },
  ],
  [
    DICE_SEX,
    "Create",
    {
      value: 1,
      // arr:[1,"max"],
      obj: {
        type: "speed",
        diceMax: 10,
        // value: 1,
      },
    },
  ],
];
