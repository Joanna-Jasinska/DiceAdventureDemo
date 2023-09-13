import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const rSword = {
  id: "Rusty Sword|SWORD SLASH|",
  name: "Rusty Sword",
  alt: "🗡️",
  skill: {
    name: "SWORD SLASH",
    txt: "transform into ⚔️ and reroll",
    id: "Rusty Sword|SWORD SLASH|",
    displayCost: [
      { value: "", type: "slashed" },
      { value: "", type: "trait" },
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
export const rSword_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["slashed", "trait"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const rSword_ex = [
  // "1|ACC|SMASHED|+1":
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "slashed",
        // diceMax: 1,
        // value: 1,
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
];
