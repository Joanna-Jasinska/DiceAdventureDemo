import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const voIrop = {
  id: "Vial of Iroposion|MIX POISON|",
  name: "Vial of Iroposion",
  alt: "🧪",
  skill: {
    name: "MIX POISON",
    txt: "put 2 to create 1💚 with combined value",
    id: "Vial of Iroposion|MIX POISON|",
    displayCost: [
      { value: "", type: "speed" },
      { value: "", type: "wits" },
      { value: "", type: "poison" },
    ],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: -1 },
    {
      item: "dice",
      diceMax: 1,
      // value: 1,
      type: "poison",
      existSinceLv: 1,
      duplicateAtLv: 6,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1.5,
    },
    {
      item: "dice",
      diceMax: 1,
      // value: 1,
      type: "wits",
      existSinceLv: 2,
      duplicateAtLv: 57,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 3,
    },
  ],
};

// "Vial of Iroposion|MIX POISON|": {
//   // "2 of 🕒🧠💚 => create 1💚 with combined value"
//   evaluationId: "2|PIECE|speed/wits/poison",
//   actionId: "2|ACC|POISON|",
// },
export const voIrop_ev = [
  [OTHER_SEV, "NUMDICES", { value: 2 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["speed", "wits", "poison"] },
        requires: { minDices: 2, maxDices: 2 },
      },
    },
  ],
];
export const voIrop_ex = [
  [
    DICE_SEX,
    "Acc into 1 Dice & Remove",
    {
      value: 2,
      obj: {
        type: "poison",
        // diceMax: 8,
        // value: 1,
      },
    },
  ],
];
