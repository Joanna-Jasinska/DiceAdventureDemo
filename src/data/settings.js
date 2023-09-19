import { JOURNEY } from "./journey";

export const PLAYER_BASE_LIFE = 1;
export const PLAYER_STARTING_MAX_EQ_LV = 2; //2
export const PLAYER_STARTING_LEVELUPS = 0; //0
export const ITEMS_STARTING_LV = 1; //1
export const LVLS_REQ_PER_MAX_EQ_LV = 3;
export const PATHS_AMOUNT = 3;
export const ITEM_BASE_COST = 50;
export const ITEM_PER_LV_COST = 5;
export const STARTING_DUNGEON_LEVELS = {
  Valley: 0,
  Forest: 0,
  Mountain: 1,
  Island: 2,
  Castle: 2,
};
export const STARTING_DUNGEONS = [...JOURNEY.slice(0, PATHS_AMOUNT)];

export const STARTING_EQ = [
  "Rusty Sword|SWORD SLASH|",
  "Comfy Shoes|HURRY UP|",
  "Travel Bag|COOKING UTENSIL TOSS|",
  // "Caravan Doofus|DO SOMETHING|",
  "Caravan Handyman|I'LL FIX THIS|",
  // -----------------not used:
  // "Heavy Metal Shield|SHIELD BASH +2|",
  // -----------------given to ally:
  // "Caravan Wizard|INVOKE ICECREAM|",
  // "Scroll of Strength|INVOKE STRENGTH +1|",
  // "Torch|WAVE MENACINGLY|",
  // "Spark Gloves|STATIC SPREAD|",
  // "Old Broom|WITCH'S BROOM|",
  // "SoArcane Missles|INVOKE ARCANE|",
  // "Katana|SWORD SLASH ++1|",
  // "Wooden Shield|SHIELD BASH +1|",
  // "Rope|CLEVER USE|",
  // "Leather Vest|THUMBLE -2|",
  // "Kitchen Knives|KNIFE THROW|",
  // "Vial of Iroposion|MIX POISON|",
  // "Bunny Familiar|BUNNY MAGIC|",
  // -----------------not done:
  // "Scroll of Arcane Missles|INVOKE ARCANE|",
  // "Lucky Clover|LUCKY ROLL|",
  // --------------
  // "Old Broom|WITCH'S BROOM|",
  // "Provisions Bag|SNACK|",
  // "Utiki Spear|CHARGE|",
  // --------------
  // "Martial Art Manual I|COMBO MOVE ||",
  // "Cheat Sheet|-|",
  // "Fairy Advisor|ADVISE|",
];
