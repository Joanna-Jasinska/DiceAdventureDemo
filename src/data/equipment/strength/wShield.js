import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const wShield = {
  id: "Wooden Shield|SHIELD BASH +1|",
  name: "Wooden Shield",
  alt: "🌰",
  skill: {
    name: "SHIELD BASH +1",
    txt: "transform into 🔨+1",
    id: "Wooden Shield|SHIELD BASH +1|",
    displayCost: [{ value: "", type: "strength" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 8 },
    {
      item: "dice",
      diceMax: 1,
      // value: undefined,
      type: "strength",
      existSinceLv: 1,
      duplicateAtLv: 19,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const wShield_ev = [
  // "1|PIECE|strength":
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["strength"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const wShield_ex = [
  // "1|ACC|SMASHED|+1":
  [
    DICE_SEX,
    "Acc into 1 Dice & Remove",
    {
      value: 1,
      obj: {
        type: "smashed",
        diceMax: 1,
        value: 1,
      },
    },
  ],
];
