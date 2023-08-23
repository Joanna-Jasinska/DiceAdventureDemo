// Utiki Spear 🔱 / 1k20 needle (+1/20 needle)
// CHARGE: combine STR/NEEDLE 2 dices to gain their combined value and max

// Legacy Sword 🗡 / 1k6 slashed 1k6 speed (+1/6 speed)
// COMBO SLASH: change speed/strength/dexterity dice into slashed+1

// Bag of Provisions / +20 mhp (+1mhp) 1k4 stamina(+1/5 1k4 stamina)
// SNACK: spend speed dice to heal 1hp and recover mana of its value

// Wizard Hat / 2k6 mana (+1/5 1k6 mana)
// MANA ARMOR: 2 mana/magic slots (any value) gain shield equal to lower value of one dice

// Boots of Speed / 3/10 speed (+1/10 speed)
// HASTE: [non 1 speed][non speed] reroll the nonspeed dice, change speed dice to 1

export const BASE_EQUIPMENT = [
  {
    name: "Legacy Sword",
    alt: "🗡️",
    skill: {
      name: "COMBO SLASH",
      txt: "Change speed/strength/dexterity dice into slashed+1",
      id: "Boots of Speed|HASTE|skill|ID",
    },
    stats: [
      { item: "dice", diceMax: 8, value: undefined, type: "slashed" },
      { item: "dice", diceMax: 4, value: undefined, type: "speed" },
    ],
    statGrow: [
      {
        item: "dice",
        existSinceLv: 1,
        diceMax: 6,
        value: 0,
        type: "speed",
        valueGrowPerLevel: 1,
        valueMakesExtraDice: true,
      },
    ],
    statsTxT: "EACH level: [ +1 speed ] of k6 ",
    lv: 1,
    selected: true,
  },

  {
    name: "Utiki Spear",
    alt: "🔱",
    skill: {
      name: "CHARGE",
      txt: "combine STR/NEEDLE 2 dices to gain their combined value and max",
      id: "Boots of Speed|HASTE|skill|ID",
    },
    stats: [{ item: "dice", diceMax: 20, value: undefined, type: "needle" }],
    statGrow: [
      {
        item: "dice",
        existSinceLv: 1,
        diceMax: 20,
        value: 0,
        type: "needle",
        valueGrowPerLevel: 1,
        valueMakesExtraDice: true,
      },
    ],
    statsTxT: "EACH level: [ +1 needle ] of k20 ",
    lv: 1,
  },

  {
    name: "Provisions Bag",
    alt: "👜",
    skill: {
      name: "SNACK",
      txt: "spend speed dice to recover mana equal to its value and 1hp",
      id: "Provisions Bag|SNACK|skill|ID",
    },
    stats: [
      { item: "stats", type: "life", maxHp: 20 },
      { item: "dice", diceMax: 4, value: undefined, type: "stamina" },
    ],
    statGrow: [
      {
        item: "dice",
        existSinceLv: 5,
        diceMax: 4,
        value: undefined,
        type: "stamina",
        // valueGrowPerLevel: 1,
        // valueMakesExtraDice: true,
        levelMakesExtraDice: true,
        amountOfLevelsForExtraDice: 5,
      },
    ],
    statsTxT: "Per 5 levels: [ +1d4 stamina ] ",
    lv: 1,
  },

  {
    name: "Wizard Hat",
    alt: "🎩",
    skill: {
      name: "MANA ARMOR",
      txt: "2x mana/magic slots (any value) gain shield equal to lower value of one dice",
      id: "Wizard Hat|MANA ARMOR|skill|ID",
    },
    stats: [
      { item: "dice", diceMax: 6, value: undefined, type: "mana" },
      // { item: "dice", diceMax: 6, value: undefined, type: "mana" },
    ],
    statGrow: [
      {
        item: "dice",
        existSinceLv: 5,
        diceMax: 6,
        value: undefined,
        type: "mana",
        // valueGrowPerLevel: 1,
        // valueMakesExtraDice: true,
        amountOfLevelsForExtraDice: 5,
        levelMakesExtraDice: true,
      },
    ],
    statsTxT: "Per 5 levels: [ +1d6 mana ] ",
    lv: 1,
  },

  {
    name: "Boots of Speed",
    alt: "👢",
    skill: {
      name: "HASTE",
      txt: "[speed =/= 1][non speed] reroll the nonspeed dice, change speed dice to 1",
      id: "Boots of Speed|HASTE|skill|ID",
    },
    stats: [{ item: "dice", diceMax: 10, value: 3, type: "speed" }],
    statGrow: [
      {
        item: "dice",
        existSinceLv: 2,
        diceMax: 10,
        value: 0,
        type: "speed",
        valueGrowPerLevel: 1,
        valueMakesExtraDice: true,
        // amountOfLevelsForExtraDice: 5,
      },
    ],
    statsTxT: "Per 5 levels: [ +1d6 mana ] ",
    lv: 1,
  },

  {
    name: "Test Bag of nothing and nothingness",
    stats: [
      { item: "stats", type: "life", maxHp: 20 },
      {
        item: "dice",
        diceMax: 20,
        value: 20,
        type: "stamina",
      },
      {
        item: "dice",
        diceMax: 20,
        value: 12,
        type: "stamina",
      },
      {
        item: "dice",
        diceMax: 20,
        value: 1,
        type: "stamina",
      },
    ],
    lv: 1,
  },
];
