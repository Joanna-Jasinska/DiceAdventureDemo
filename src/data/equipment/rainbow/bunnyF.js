import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const bunnyF = {
  name: "Bunny Familiar",
  id: "Bunny Familiar|BUNNY MAGIC|",
  alt: "🐇",
  skill: {
    name: "BUNNY MAGIC",
    txt: "Duplicate",
    id: "Bunny Familiar|BUNNY MAGIC|",
    displayCost: [
      { value: "", type: "rainbow" },
      { value: "", type: "mana" },
    ],
  },
  statsTxT: "~ +1/4 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 2 },
    {
      item: "dice",
      diceMax: 1,
      // value: 2,
      type: "rainbow",
      existSinceLv: 1,
      duplicateAtLv: 6,
      // lvlsToRaiseValue: 4,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};

export const bunnyF_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["rainbow", "mana"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const bunnyF_ex = [
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
        extraCopies: [2],
      },
    },
  ],
];
