import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const katana = {
  id: "Katana|SWORD SLASH ++1|",
  name: "Katana",
  alt: "🗡️",
  skill: {
    name: "SWORD SLASH ++1",
    txt: "reroll to higher value",
    id: "Katana|SWORD SLASH ++1|",
    displayCost: [
      { value: "", type: "slashed" },
      // { value: "", type: "trait" },
    ],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    {
      item: "dice",
      diceMax: 2,
      // value: undefined,
      type: "slashed",
      existSinceLv: 1,
      duplicateAtLv: 18,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const katana_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["slashed"] },
        requires: { minDices: 1, maxDices: 1, valueSpace: 1 },
      },
    },
  ],
];
export const katana_ex = [
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "slashed",
        // diceMax: 1,
        value: 1,
      },
    },
  ],
  [
    DICE_SEX,
    "Reroll+",
    {
      value: 1, //1 dice to reroll
    },
  ],
];
