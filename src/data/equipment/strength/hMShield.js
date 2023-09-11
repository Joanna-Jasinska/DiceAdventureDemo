import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const hMShield = {
  //not done exe and evalu
  id: "Heavy Metal Shield|SHIELD BASH +2|",
  name: "Heavy Metal Shield",
  alt: "⚪️",
  skill: {
    name: "SHIELD BASH +2",
    txt: "transform into 🔨+2",
    id: "Heavy Metal Shield|SHIELD BASH +2|",
    displayCost: [{ value: "", type: "strength" }],
  },
  statsTxT: "~ +1/3 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 5 },
    {
      item: "dice",
      diceMax: 7,
      // value: undefined,
      type: "strength",
      existSinceLv: 0,
      duplicateAtLv: 39,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 3,
    },
  ],
};
export const hMShield_ev = [
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
export const hMShield_ex = [
  // "1|ACC|SMASHED|+2":
  [
    DICE_SEX,
    "Acc into 1 Dice & Remove",
    {
      value: 1,
      obj: {
        type: "smashed",
        diceMax: 2,
        value: 2,
      },
    },
  ],
];
