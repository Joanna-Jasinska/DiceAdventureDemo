import { OTHER } from "./skillEvaluation/other";
import { DICE } from "./skillsExecution/dice";

//
// txt: "NOT WORKING Automatically arrange your dices.. but not always in a best way.",

export const SKILL_EXECUTION = {
  // txt: "put 2 to create 1📌 of combined value",
  "2|ACC|NEEDLE|": [
    [
      DICE,
      "Acc into 1 Dice & Remove",
      {
        value: 1,
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
      DICE,
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
      DICE,
      "Acc into 1 Dice & Remove",
      {
        value: 1,
        obj: {
          // type: "slashed",
          // diceMax: 8,
          value: 0,
        },
      },
    ],
  ],
  // txt: "change value to half of maximum, create 🕒 of 1-20 value",
  "1|VALUE|half": [
    [
      DICE,
      "Value Manipulation & Remove",
      {
        value: 1,
        // arr:[1,"max"],
        obj: {
          setTo: "diceMax",
          // multiplyBy: 10,
          divideBy: 2,
          // add: 1,
        },
      },
    ],
    [
      DICE,
      "Create",
      {
        value: 1,
        // arr:[1,"max"],
        obj: {
          type: "speed",
          diceMax: 20,
          // value: 1,
        },
      },
    ],
  ],
  // txt: " reroll 1 for same or higher value ",
  "1|REROLL+|": [
    [
      DICE,
      "Reroll+ & Remove",
      {
        value: 1,
      },
    ],
  ],
  // txt: "reroll 1 into [1] or [max value]",
  "1|VALUE|[1,max]": [
    [
      DICE,
      "Value from Array & Remove",
      {
        value: 1,
        arr: [1, "max"],
        // obj: {
        //   type: "poison",
        //   // diceMax: 8,
        //   // value: 1,
        // },
      },
    ],
  ],
  // txt: "change 1 into ⚔️ of same value+1",
  "1|ACC|SLASHED|+1": [
    [
      DICE,
      "Acc into 1 Dice & Remove",
      {
        value: 1,
        obj: {
          type: "slashed",
          // diceMax: 8,
          value: 1,
        },
      },
    ],
  ],
  // txt: "put 2 to create 1💚 with combined value",
  "2|ACC|POISON|": [
    [
      DICE,
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
  ],
  // txt: "put both to heal 1hp, get 1🌀 of 🥧value",
  "1|ACC|MANA|heal_1": [
    [
      OTHER,
      "heal",
      {
        value: 1,
      },
    ],
    [
      DICE,
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
