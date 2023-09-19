import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const sofStr = {
  id: "Scroll of Strength|INVOKE STRENGTH +1|",
  name: "Scroll of Strength",
  alt: "📜",
  skill: {
    name: "INVOKE STRENGTH +1",
    txt: "transform into 💪 +1",
    id: "Scroll of Strength|INVOKE STRENGTH +1|",
    displayCost: [{ value: "", type: "mana" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    {
      item: "dice",
      diceMax: 1,
      // value: 1,
      type: "mana",
      existSinceLv: 1,
      duplicateAtLv: 11,
      // lvlsToRaiseValue: 4,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const sofStr_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["mana"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const sofStr_ex = [
  [
    DICE_SEX,
    "Acc into 1 Dice & Remove",
    {
      value: 1,
      obj: {
        type: "strength",
        diceMax: 1,
        value: 1,
      },
    },
  ],
];
