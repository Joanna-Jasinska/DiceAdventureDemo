import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const kKnives = {
  id: "Kitchen Knives|KNIFE THROW|",
  name: "Kitchen Knives",
  alt: "🔪",
  skill: {
    name: "KNIFE THROW",
    txt: "reroll into [1] or [max value]",
    id: "Kitchen Knives|KNIFE THROW|",
    displayCost: [{ value: "", type: "needle" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    {
      item: "dice",
      diceMax: 1,
      // value: undefined,
      type: "needle",
      existSinceLv: 1,
      duplicateAtLv: 10,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1.5,
    },
    {
      item: "dice",
      diceMax: 1,
      // value: undefined,
      type: "needle",
      existSinceLv: 2,
      duplicateAtLv: 14,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 3,
    },
  ],
};
export const kKnives_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["needle"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const kKnives_ex = [
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "needle",
        // diceMax: 1,
        // value: -2,
      },
    },
  ],
  [
    DICE_SEX,
    "Change to Random Array",
    {
      value: 1,
      obj: {
        // type: ["heat", "ice", "shock"],
        // diceMax: [],
        value: [1, "diceMax"],
      },
    },
  ],
];
