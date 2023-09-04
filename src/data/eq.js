export const getBaseEqById = (eid) => {
  const found = BASE_EQUIPMENT.find((e) => e.id === eid);
  // console.log(`eq.js > getBaseEqById looking for ${eid}, found:`, found);
  return found ? found : BASE_EQUIPMENT[0];
};

export const BASE_EQUIPMENT = [
  {
    id: "Legacy Sword|COMBO SLASH|",
    name: "Legacy Sword",
    alt: "🗡️",
    skill: {
      name: "COMBO SLASH",
      txt: "Change [🕒 /💪 /🤸‍♂️] => into [⚔️] same value+1",
      id: "Legacy Sword|COMBO SLASH|",
    },
    statsTxT: "~ +1/3 per lv",
    stats: [
      {
        item: "dice",
        diceMax: 8,
        // value: undefined,
        type: "slashed",
        existSinceLv: 1,
        duplicateAtLv: 12,
        // lvlsToRaiseValue: 3,
        lvlsToRaiseDiceMax: 3,
      },
      {
        item: "dice",
        diceMax: 4,
        // value: undefined,
        type: "speed",
        existSinceLv: 5,
        duplicateAtLv: 10,
        // lvlsToRaiseValue: 3,
        // lvlsToRaiseDiceMax: 10,
      },
    ],
  },
  {
    id: "Kitchen Knives|KNIFE THROW|",
    name: "Kitchen Knives",
    alt: "🔪",
    skill: {
      name: "KNIFE THROW",
      txt: "[(📌)] => reroll (📌) into [1] or [max value]",
      id: "Kitchen Knives|KNIFE THROW|",
    },
    statsTxT: "~ +1/5 per lv",
    stats: [
      {
        item: "dice",
        diceMax: 4,
        // value: undefined,
        type: "needle",
        existSinceLv: 1,
        duplicateAtLv: 10,
        // lvlsToRaiseValue: 3,
        lvlsToRaiseDiceMax: 5,
      },
    ],
  },

  {
    name: "Lucky Clover",
    id: "Lucky Clover|LUCKY ROLL|",
    alt: "🍀",
    skill: {
      name: "LUCKY ROLL",
      txt: "[(1)] => reroll for same or higher value ",
      id: "Lucky Clover|LUCKY ROLL|",
    },
    statsTxT: "~ +1/4 per lv",
    stats: [
      { item: "stats", type: "life", maxHp: 7 },
      {
        item: "dice",
        diceMax: 4,
        value: 2,
        type: "rainbow",
        existSinceLv: 1,
        duplicateAtLv: 80,
        lvlsToRaiseValue: 4,
        lvlsToRaiseDiceMax: 5,
      },
    ],
  },
  {
    id: "Old Broom|WITCH'S BROOM|",
    name: "Old Broom",
    alt: "🧹",
    skill: {
      name: "WITCH'S BROOM",
      txt: "Change 🌀 into one of 🔥❄️⚡ at random",
      id: "Old Broom|WITCH'S BROOM|",
    },
    statsTxT: "~ +1/2 per lv",
    stats: [
      {
        item: "dice",
        diceMax: 10,
        // value: undefined,
        type: "smashed",
        existSinceLv: 1,
        duplicateAtLv: 60,
        // lvlsToRaiseValue: 3,
        lvlsToRaiseDiceMax: 3,
      },
      {
        item: "dice",
        diceMax: 2,
        // value: undefined,
        type: "mana",
        existSinceLv: 5,
        duplicateAtLv: 90,
        // lvlsToRaiseValue: 3,
        lvlsToRaiseDiceMax: 5,
      },
    ],
  },

  {
    selected: true,
    name: "Utiki Spear",
    id: "Utiki Spear|CHARGE|",
    alt: "🔱",
    skill: {
      name: "CHARGE",
      txt: "combine STR/NEEDLE 2 dices to gain their combined value and max",
      id: "Utiki Spear|CHARGE|",
    },
    statsTxT: "~ +1/3 per lv",
    stats: [
      {
        item: "dice",
        diceMax: 8,
        // value: undefined,
        type: "slashed",
        existSinceLv: 1,
        duplicateAtLv: 12,
        // lvlsToRaiseValue: 3,
        lvlsToRaiseDiceMax: 3,
      },
      {
        item: "dice",
        diceMax: 4,
        // value: undefined,
        type: "speed",
        existSinceLv: 5,
        duplicateAtLv: 10,
        // lvlsToRaiseValue: 3,
        // lvlsToRaiseDiceMax: 10,
      },
    ],
  },

  {
    name: "Provisions Bag",
    id: "Provisions Bag|SNACK|",
    alt: "👜",
    skill: {
      name: "SNACK",
      txt: "[(1)stamina] [speed] => heal 1hp, get [🌀]=(1) ",
      id: "Provisions Bag|SNACK|",
    },
    statsTxT: "~ +1/5 per lv",
    stats: [
      { item: "stats", type: "life", maxHp: 12 },
      {
        item: "dice",
        diceMax: 4,
        // value: undefined,
        type: "stamina",
        existSinceLv: 1,
        duplicateAtLv: 80,
        // lvlsToRaiseValue: 3,
        lvlsToRaiseDiceMax: 5,
      },
      {
        item: "dice",
        diceMax: 2,
        // value: undefined,
        type: "speed",
        existSinceLv: 1,
        duplicateAtLv: 64,
        // lvlsToRaiseValue: 3,
        lvlsToRaiseDiceMax: 8,
      },
    ],
  },

  // {
  //   name: "Wizard Hat",
  //   id: "Wizard Hat|MANA ARMOR|",
  //   alt: "🎩",
  //   skill: {
  //     name: "MANA ARMOR",
  //     txt: "2x mana/magic slots (any value) gain shield equal to lower value of one dice",
  //     id: "Wizard Hat|MANA ARMOR|",
  //   },
  //   stats: [
  //     { item: "dice", diceMax: 6, value: undefined, type: "mana" },
  //     // { item: "dice", diceMax: 6, value: undefined, type: "mana" },
  //   ],
  //   statGrow: [
  //     {
  //       item: "dice",
  //       existSinceLv: 5,
  //       diceMax: 6,
  //       value: undefined,
  //       type: "mana",
  //       // valueGrowPerLevel: 1,
  //       // valueMakesExtraDice: true,
  //       amountOfLevelsForExtraDice: 5,
  //       levelMakesExtraDice: true,
  //     },
  //   ],
  //   statsTxT: "Per 5 levels: [ +1d6 mana ] ",
  //   lv: 1,
  // },

  // {
  //   selected: true,
  //   name: "Boots of Speed",
  //   id: "Boots of Speed|HASTE|",
  //   alt: "👢",
  //   skill: {
  //     name: "HASTE",
  //     txt: "[speed =/= 1][non speed] reroll the nonspeed dice, change speed dice to 1",
  //     id: "Boots of Speed|HASTE|",
  //   },
  //   stats: [{ item: "dice", diceMax: 10, value: 3, type: "speed" }],
  //   statGrow: [
  //     {
  //       item: "dice",
  //       existSinceLv: 2,
  //       diceMax: 10,
  //       value: 0,
  //       type: "speed",
  //       valueGrowPerLevel: 1,
  //       valueMakesExtraDice: true,
  //       // amountOfLevelsForExtraDice: 5,
  //     },
  //   ],
  //   statsTxT: "Per 5 levels: [ +1d6 mana ] ",
  //   lv: 1,
  // },

  {
    name: "Test Bag of nothing and nothingness",
    id: "Test Bag of nothing and nothingness||",
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

  {
    selected: true,
    name: "Fairy Advisor",
    id: "Fairy Advisor|ADVISE|",
    alt: "🧚‍♀️",
    skill: {
      name: "ADVISE",
      txt: "NOT WORKING Automatically arrange your dices.. but not always in a best way.",
      id: "Fairy Advisor|ADVISE|",
    },
    statsTxT: "~ +1/4 per lv",
    stats: [
      { item: "stats", type: "life", maxHp: 10 },
      {
        item: "dice",
        diceMax: 6,
        // value: undefined,
        type: "magic",
        existSinceLv: 1,
        duplicateAtLv: 12,
        // lvlsToRaiseValue: 3,
        // lvlsToRaiseDiceMax: 5,
      },
    ],
  },
];
