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
  // txt: "change into one of 🔥❄️⚡ at random",
  "1|RANDOM|HEAT/ICE/SHOCK|": [
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
  // txt: "change 💪 into 🔨+1",
  // "1|ACC|SMASHED|+1": [
  //   [
  //     DICE_SEX,
  //     "Acc into 1 Dice & Remove",
  //     {
  //       value: 1,
  //       obj: {
  //         type: "smashed",
  //         diceMax: 1,
  //         value: 1,
  //       },
  //     },
  //   ],
  // ],
  // txt: "change 1 into ⚔️ of same value+1",
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
  // txt: "divide 1 into 3 ✨ dices - rerolled to same or lower value",
  "1|VALUE|/3|ACC|(ACC|reroll-)x3": [
    [
      DICE_SEX,
      "Acc into 1 Dice",
      {
        value: 1,
        obj: {
          type: "arcane",
          // diceMax: 1,
          // value: -2,
        },
      },
    ],
    [
      DICE_SEX,
      "Value Manipulation Array",
      {
        value: 1,
        obj: {
          // setTo: ["diceMax"],
          // multiplyBy: [10],
          divideBy: [3],
          // add: [1],
          extraCopies: [2],
        },
      },
    ],
    [
      DICE_SEX,
      "Reroll-",
      {
        value: 3, //1 dice to reroll
      },
    ],
    // [
    //   DICE_SEX,
    //   "Reroll+ & Remove",
    //   {
    //     value: 1, //1 dice to reroll
    //   },
    // ],
    // [
    //   DICE_SEX,
    //   "Acc into 1 Dice & Remove",
    //   {
    //     value: 1,
    //     obj: {
    //       // type: "any",
    //       // diceMax: 1,
    //       // value: -2,
    //     },
    //   },
    // ],
  ],
  //
};
