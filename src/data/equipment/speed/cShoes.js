import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const cShoes = {
  id: "Comfy Shoes|HURRY UP|",
  name: "Comfy Shoes",
  alt: "👞",
  skill: {
    name: "HURRY UP",
    txt: "transform into 🕒 and reroll to same or higher value",
    id: "Comfy Shoes|HURRY UP|",
    displayCost: [
      { value: "", type: "stamina" },
      { value: "", type: "speed" },
    ],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 1 },
    {
      item: "dice",
      diceMax: 1,
      value: 1,
      type: "stamina",
      existSinceLv: -1,
      duplicateAtLv: 18,
      lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const cShoes_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["stamina", "speed"] },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const cShoes_ex = [
  // "1|ACC|SMASHED|+1":
  [
    DICE_SEX,
    "Acc into 1 Dice",
    {
      value: 1,
      obj: {
        type: "speed",
        // diceMax: 1,
        // value: 1,
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
