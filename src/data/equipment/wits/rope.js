import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const rope = {
  name: "Rope",
  id: "Rope|CLEVER USE|",
  alt: "➰",
  skill: {
    name: "CLEVER USE",
    txt: "Change odd to max value",
    id: "Rope|CLEVER USE|",
    displayCost: [{ value: "", type: "trait" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    // { item: "stats", type: "life", maxHp: 2 },
    {
      item: "dice",
      diceMax: 1,
      // value: 2,
      type: "wits",
      existSinceLv: 1,
      duplicateAtLv: 20,
      // lvlsToRaiseValue: 4,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};

export const rope_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["trait"], exactValues: ["odd"] },
        requires: { minDices: 1, maxDices: 1, valueSpace: 1 },
      },
    },
  ],
];
export const rope_ex = [
  [
    DICE_SEX,
    "Value Manipulation Array",
    {
      value: 1,
      obj: {
        setTo: ["diceMax"],
        // multiplyBy: [10],
        // divideBy: [3],
        // add: [1],
        // extraCopies: [2],
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
];
