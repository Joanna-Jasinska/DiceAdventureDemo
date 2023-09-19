import { OTHER_SEV } from "data/skillEvaluation/other";
import { PIECE_SEV } from "data/skillEvaluation/piece";
import { DICE_SEX } from "data/skillsExecution/dice";

export const cDoofus1 = {
  id: "Caravan Doofus|DO SOMETHING|",
  name: "Caravan Doofus",
  alt: "🙆‍",
  skill: {
    name: "DO SOMETHING",
    txt: "Reroll into same or lower value",
    id: "Caravan Doofus|DO SOMETHING|",
    displayCost: [
      { value: "", type: "physical" },
      { value: "", type: "strength" },
    ],
  },
  statsTxT: "~ +1 per lv",
  stats: [
    { item: "stats", type: "life", maxHp: 6 },
    {
      item: "dice",
      diceMax: 1,
      // value: 3,
      type: "strength",
      existSinceLv: 2,
      duplicateAtLv: 30,
      // lvlsToRaiseValue: 3,
      lvlsToRaiseDiceMax: 1,
    },
  ],
};
export const cDoofus1_ev = [
  [OTHER_SEV, "NUMDICES", { value: 1 }],
  [
    PIECE_SEV,
    "PIECE",
    {
      obj: {
        allows: { types: ["physical", "strength"], minValue: 2 },
        requires: { minDices: 1, maxDices: 1 },
      },
    },
  ],
];
export const cDoofus1_ex = [
  // "1|ACC|SMASHED|+1":
  // [
  //   DICE_SEX,
  //   "Acc into 1 Dice",
  //   {
  //     value: 1,
  //     obj: {
  //       type: "ice",
  //       // diceMax: 1,
  //       value: 1,
  //     },
  //   },
  // ],
  [
    DICE_SEX,
    "Reroll-",
    {
      value: 1, //1 dice to reroll
    },
  ],
];
