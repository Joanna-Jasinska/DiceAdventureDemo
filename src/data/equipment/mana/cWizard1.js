import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const cWizard1 = {
  id: "Caravan Wizard|INVOKE ICECREAM|",
  name: "Caravan Wizard",
  alt: "🧙",
  skill: {
    name: "INVOKE ICECREAM",
    txt: "transform into ❄️+1",
    id: "Caravan Wizard|INVOKE ICECREAM|",
    displayCost: [{ value: "", type: "mana" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: -7 },
    {
      item: "dice",
      diceMax: 2,
      value: 3,
      type: "mana",
      existSinceLv: -1,
      duplicateAtLv: 18,
      lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const cWizard1_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["mana"] },
        requires: { minDices: 1, maxDices: 1, valueSpace: 1 },
      },
    },
  ],
];
export const cWizard1_ex = [
  // "1|ACC|SMASHED|+1":
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "ice",
        // diceMax: 1,
        value: 1,
      },
    },
  ],
  // [
  //   DICE_SEX,
  //   "Reroll+",
  //   {
  //     value: 1, //1 dice to reroll
  //   },
  // ],
];
