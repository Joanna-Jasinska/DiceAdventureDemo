import { DICE_SEX } from "./skillsExecution/dice";
import { OTHER_SEX } from "./skillsExecution/other";

export const SKILL_EXECUTION = {
  // txt: "put 2 to create 1📌 of combined value",
  "2|ACC|NEEDLE|": [
    [
      DICE_SEX,
      "Acc into 1 Dice & Remove",
      {
        value: 2,
        obj: {
          type: "needle",
          // diceMax: 8,
          // value: 1,
        },
      },
    ],
  ],
  // txt: " reroll 1 for same or higher value ",
  "1|REROLL+|": [
    [
      DICE_SEX,
      "Reroll+ & Remove",
      {
        value: 1, //1 dice to reroll
      },
    ],
  ],
  "1|ACC|SLASHED|+1": [
    [
      DICE_SEX,
      "Acc into 1 Dice & Remove",
      {
        value: 1,
        obj: {
          type: "slashed",
          diceMax: 1,
          value: 1,
        },
      },
    ],
  ],
  // txt: "put both to heal 1hp, get 1🌀 of 🥧value",
  "1|ACC|MANA|heal_1": [
    [
      OTHER_SEX,
      "heal",
      {
        value: 1,
      },
    ],
    [
      DICE_SEX,
      "Acc into 1 Dice & Remove",
      {
        value: 1,
        obj: {
          type: "mana",
          // diceMax: 8,
          // value: 1,
        },
      },
    ],
  ],
  //
};
