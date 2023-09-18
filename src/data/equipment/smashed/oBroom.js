import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const oBroom = {
  id: "Old Broom|WITCH'S BROOM|",
  name: "Old Broom",
  alt: "🧹",
  skill: {
    name: "WITCH'S BROOM",
    txt: "reroll and change into one of 🔥❄️⚡ at random",
    id: "Old Broom|WITCH'S BROOM|",
    displayCost: [{ value: "", type: "mana" }],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 2 },
    {
      item: "dice",
      diceMax: 1,
      // value: undefined,
      type: "smashed",
      existSinceLv: 1,
      duplicateAtLv: 30,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1.5,
    },
    {
      item: "dice",
      diceMax: 1,
      // value: undefined,
      type: "mana",
      existSinceLv: 2,
      duplicateAtLv: 40,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 3,
    },
  ],
};
export const oBroom_ev = [
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
export const oBroom_ex = [
  [
    DICE_SEX,
    "Change to Random Array",
    {
      value: 1,
      obj: {
        type: ["heat", "ice", "shock"],
        // diceMax: [],
        // value: [],
      },
    },
  ],
  [
    DICE_SEX,
    "Reroll",
    {
      value: 1, //1 dice to reroll
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
