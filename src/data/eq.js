import { scrollOfArcaneMissles } from "./equipment/arcane/soAMissles";
import { sofStr, sofStr_ev, sofStr_ex } from "./equipment/arcane/soStr";
import { torch, torch_ev, torch_ex } from "./equipment/heat/torch";
import { kitchenKnives } from "./equipment/needle/kitchenKnives";
import { luckyClover } from "./equipment/rainbow/luckyClover";
import { rSword, rSword_ev, rSword_ex } from "./equipment/slashed/rSword";
import { tBag, tBag_ev, tBag_ex } from "./equipment/smashed/tBag";
import {
  hMShield,
  hMShield_ev,
  hMShield_ex,
} from "./equipment/strength/hMShield";
import { wShield, wShield_ex, wShield_ev } from "./equipment/strength/wShield";
import { leatherVest } from "./equipment/trait/leatherVest";

export const getBaseEqById = (eid) => {
  const found = EQ[eid];
  // console.log(`eq.js > getBaseEqById looking for ${eid}, found:`, found);
  return found === undefined ? EQ[0][0] : found[0];
};
export const getSkillEvalById = (eid) => {
  const found = EQ[eid];
  // console.log(`eq.js > getSkillEvalById looking for ${eid}, found:`, found);
  return found === undefined ? EQ[0][1] : found[1];
};
export const getSkillExecById = (eid) => {
  const found = EQ[eid];
  return found === undefined ? EQ[0][2] : found[2];
};

const EQ = {
  0: [leatherVest, [], []],
  "Wooden Shield|SHIELD BASH +1|": [wShield, wShield_ev, wShield_ex],
  "Heavy Metal Shield|SHIELD BASH +2|": [hMShield, hMShield_ev, hMShield_ex],
  "Torch|WAVE MENACINGLY|": [torch, torch_ev, torch_ex],
  "Scroll of Strength|INVOKE STRENGTH +1|": [sofStr, sofStr_ev, sofStr_ex],
  "Rusty Sword|SWORD SLASH +|": [rSword,rSword_ev,rSword_ex],
  "Travel Bag|COOKING UTENSIL TOSS|": [tBag,tBag_ev,tBag_ex],
  // "Leather Vest|THUMBLE|": leatherVest,
  // "Kitchen Knives|KNIFE THROW|": kitchenKnives,
  // "Scroll of Arcane Missles|INVOKE ARCANE|": scrollOfArcaneMissles,
  // "Lucky Clover|LUCKY ROLL|": luckyClover,
};

// const BASE_EQUIPMENT = [
//   {
//     id: "Martial Art Manual I|COMBO MOVE ||",
//     name: "Martial Art Manual I",
//     alt: "📔",
//     skill: {
//       name: "COMBO MOVE |",
//       txt: "put both to duplicate 🟨 dice",
//       id: "Martial Art Manual I|COMBO MOVE ||",
//       displayCost: [
//         { value: "", type: "physical" },
//         { value: "", type: "trait" },
//       ],
//     },
//     statsTxT: "~ +1/4 per lv",
//     stats: [
//       {
//         item: "dice",
//         diceMax: 3,
//         // value: undefined,
//         type: "wits",
//         existSinceLv: 0,
//         duplicateAtLv: 68,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 4,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         // value: undefined,
//         type: "smashed",
//         existSinceLv: 2,
//         duplicateAtLv: 10,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 6,
//       },
//     ],
//   },
//   {
//     id: "Legacy Sword|COMBO SLASH|",
//     name: "Legacy Sword",
//     alt: "🗡️",
//     skill: {
//       name: "COMBO SLASH",
//       txt: "change 1 into ⚔️ of same value+1",
//       id: "Legacy Sword|COMBO SLASH|",
//       displayCost: [
//         { value: "", type: "speed" },
//         { value: "", type: "strength" },
//         { value: "", type: "dexterity" },
//       ],
//     },
//     statsTxT: "~ +1/3 per lv",
//     stats: [
//       {
//         item: "dice",
//         diceMax: 8,
//         // value: undefined,
//         type: "slashed",
//         existSinceLv: 0,
//         duplicateAtLv: 12,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 3,
//       },
//       {
//         item: "dice",
//         diceMax: 4,
//         // value: undefined,
//         type: "speed",
//         existSinceLv: 5,
//         duplicateAtLv: 10,
//         // lvlsToRaiseValue: 3,
//         // lvlsToRaiseDiceMax: 10,
//       },
//     ],
//   },

//   {
//     id: "Vial of Iroposion|MIX POISON|",
//     name: "Vial of Iroposion",
//     alt: "🧪",
//     skill: {
//       name: "MIX POISON",
//       txt: "put 2 to create 1💚 with combined value",
//       id: "Vial of Iroposion|MIX POISON|",
//       displayCost: [
//         { value: "", type: "speed" },
//         { value: "", type: "wits" },
//         { value: "", type: "poison" },
//       ],
//     },
//     statsTxT: "~ +1/4 per lv",
//     stats: [
//       { item: "stats", type: "life", maxHp: -1 },
//       {
//         item: "dice",
//         diceMax: 5,
//         // value: undefined,
//         type: "poison",
//         existSinceLv: -1,
//         duplicateAtLv: 64,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 4,
//       },
//     ],
//   },

//   {
//     id: "Old Broom|WITCH'S BROOM|",
//     name: "Old Broom",
//     alt: "🧹",
//     skill: {
//       name: "WITCH'S BROOM",
//       txt: "change into one of 🔥❄️⚡ at random",
//       id: "Old Broom|WITCH'S BROOM|",
//       displayCost: [{ value: "", type: "mana" }],
//     },
//     statsTxT: "~ +1/2 per lv",
//     stats: [
//       { item: "stats", type: "life", maxHp: 2 },
//       {
//         item: "dice",
//         diceMax: 10,
//         // value: undefined,
//         type: "smashed",
//         existSinceLv: 1,
//         duplicateAtLv: 60,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 3,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         // value: undefined,
//         type: "mana",
//         existSinceLv: 2,
//         duplicateAtLv: 90,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 5,
//       },
//     ],
//   },

//   {
//     selected: true,
//     name: "Utiki Spear",
//     id: "Utiki Spear|CHARGE|",
//     alt: "🔱",
//     skill: {
//       name: "CHARGE",
//       txt: "put 2 to create 1📌 of combined value",
//       id: "Utiki Spear|CHARGE|",
//       displayCost: [
//         { value: "", type: "needle" },
//         { value: "", type: "strength" },
//       ],
//     },
//     statsTxT: "~ +1/3 per lv",
//     stats: [
//       { item: "stats", type: "life", maxHp: 2 },
//       {
//         item: "dice",
//         diceMax: 8,
//         // value: undefined,
//         type: "needle",
//         existSinceLv: 1,
//         duplicateAtLv: 12,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 3,
//       },
//       {
//         item: "dice",
//         diceMax: 4,
//         // value: undefined,
//         type: "strength",
//         existSinceLv: 5,
//         duplicateAtLv: 10,
//         // lvlsToRaiseValue: 3,
//         // lvlsToRaiseDiceMax: 10,
//       },
//     ],
//   },

//   {
//     name: "Provisions Bag",
//     id: "Provisions Bag|SNACK|",
//     alt: "👜",
//     skill: {
//       name: "SNACK",
//       txt: "put both to heal 1hp, get 1🌀 of 🥧value",
//       id: "Provisions Bag|SNACK|",
//       displayCost: [
//         { value: "", type: "speed" },
//         { value: "", type: "stamina" },
//       ],
//     },
//     statsTxT: "~ +1/5 per lv",
//     stats: [
//       { item: "stats", type: "life", maxHp: 8 },
//       {
//         item: "dice",
//         diceMax: 4,
//         // value: undefined,
//         type: "stamina",
//         existSinceLv: 1,
//         duplicateAtLv: 80,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 5,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         // value: undefined,
//         type: "speed",
//         existSinceLv: 1,
//         duplicateAtLv: 64,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 8,
//       },
//     ],
//   },

//   // {
//   //   name: "Wizard Hat",
//   //   id: "Wizard Hat|MANA ARMOR|",
//   //   alt: "🎩",
//   //   skill: {
//   //     name: "MANA ARMOR",
//   //     txt: "2x mana/magic slots (any value) gain shield equal to lower value of one dice",
//   //     id: "Wizard Hat|MANA ARMOR|",
//   //   },
//   //   stats: [
//   //     { item: "dice", diceMax: 6, value: undefined, type: "mana" },
//   //     // { item: "dice", diceMax: 6, value: undefined, type: "mana" },
//   //   ],
//   //   statGrow: [
//   //     {
//   //       item: "dice",
//   //       existSinceLv: 5,
//   //       diceMax: 6,
//   //       value: undefined,
//   //       type: "mana",
//   //       // valueGrowPerLevel: 1,
//   //       // valueMakesExtraDice: true,
//   //       amountOfLevelsForExtraDice: 5,
//   //       levelMakesExtraDice: true,
//   //     },
//   //   ],
//   //   statsTxT: "Per 5 levels: [ +1d6 mana ] ",
//   //   lv: 1,
//   // },

//   // {
//   //   selected: true,
//   //   name: "Boots of Speed",
//   //   id: "Boots of Speed|HASTE|",
//   //   alt: "👢",
//   //   skill: {
//   //     name: "HASTE",
//   //     txt: "[speed =/= 1][non speed] reroll the nonspeed dice, change speed dice to 1",
//   //     id: "Boots of Speed|HASTE|",
//   //   },
//   //   stats: [{ item: "dice", diceMax: 10, value: 3, type: "speed" }],
//   //   statGrow: [
//   //     {
//   //       item: "dice",
//   //       existSinceLv: 2,
//   //       diceMax: 10,
//   //       value: 0,
//   //       type: "speed",
//   //       valueGrowPerLevel: 1,
//   //       valueMakesExtraDice: true,
//   //       // amountOfLevelsForExtraDice: 5,
//   //     },
//   //   ],
//   //   statsTxT: "Per 5 levels: [ +1d6 mana ] ",
//   //   lv: 1,
//   // },

//   {
//     name: "Test Bag of nothing and nothingness",
//     id: "Test Bag of nothing and nothingness||",
//     stats: [
//       { item: "stats", type: "life", maxHp: 20 },
//       {
//         item: "dice",
//         diceMax: 20,
//         value: 20,
//         type: "stamina",
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         value: 12,
//         type: "stamina",
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         value: 1,
//         type: "stamina",
//       },
//     ],
//     lv: 1,
//   },

//   {
//     selected: true,
//     name: "Fairy Advisor",
//     id: "Fairy Advisor|ADVISE|",
//     alt: "🧚‍♀️",
//     skill: {
//       name: "ADVISE",
//       txt: "NOT WORKING Automatically arrange your dices.. but not always in a best way.",
//       id: "Fairy Advisor|ADVISE|",
//       displayCost: [],
//     },
//     statsTxT: "~ +1/4 per lv",
//     stats: [
//       { item: "stats", type: "life", maxHp: 10 },
//       {
//         item: "dice",
//         diceMax: 6,
//         // value: undefined,
//         type: "magic",
//         existSinceLv: 1,
//         duplicateAtLv: 12,
//         // lvlsToRaiseValue: 3,
//         // lvlsToRaiseDiceMax: 5,
//       },
//     ],
//   },
//   {
//     id: "Cheat Sheet|-|",
//     name: "Cheat Sheet",
//     alt: "🧾",
//     skill: {
//       name: "Cheat Sheet",
//       txt: "-",
//       id: "Cheat Sheet|-|",
//       displayCost: [],
//     },
//     statsTxT: "~",
//     stats: [
//       {
//         item: "dice",
//         diceMax: 2,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 4,
//         type: "slashed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 6,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "strength",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 20,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 2,
//         type: "speed",
//         existSinceLv: 1,
//       },
//       {
//         item: "dice",
//         diceMax: 5,
//         // value: undefined,
//         type: "ice",
//         existSinceLv: -1,
//         duplicateAtLv: 64,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 4,
//       },
//       {
//         item: "dice",
//         diceMax: 5,
//         // value: undefined,
//         type: "heat",
//         existSinceLv: -1,
//         duplicateAtLv: 64,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 4,
//       },
//       {
//         item: "dice",
//         diceMax: 5,
//         // value: undefined,
//         type: "shock",
//         existSinceLv: -1,
//         duplicateAtLv: 64,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 4,
//       },
//       {
//         item: "dice",
//         diceMax: 5,
//         // value: undefined,
//         type: "void",
//         existSinceLv: -1,
//         duplicateAtLv: 64,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 4,
//       },
//       {
//         item: "dice",
//         diceMax: 5,
//         // value: undefined,
//         type: "arcane",
//         existSinceLv: -1,
//         duplicateAtLv: 64,
//         // lvlsToRaiseValue: 3,
//         lvlsToRaiseDiceMax: 4,
//       },
//     ],
//   },
// ];
