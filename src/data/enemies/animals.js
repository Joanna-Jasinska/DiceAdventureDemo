//
export const ANIMALS = [
  {
    name: "Old Wolf",
    portrait: {
      frontIcon: "🐺",
      sideIcon: "🌿",
      bgSideIcon: "🌲",
      backIcon: "⚫️",
      bgIcon: "🌳",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 7,
    maxLife: 7,
    id: "ANIMALS|green|Old Wolf",
    body: [
      {
        priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🐾",
        bodyPartTypes: ["paws", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: -1,
          // maxValue: -1,
          exactValues: ["odd"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          minDices: 1,
          // minSum: 3,
        },
        multiplies: {
          multipliedTypes: ["elemental"],
          multipliedBy: 2,
        },
        damages: {
          // damageToPlayer: 0,
          // effectsToPlayer: false,
          // damageToEnemy: 0,
          // effectsToEnemy: false,
        },
        grow: {
          duplicateAtLv: 50,
          // lvlsToRaiseMinSum: 3,
          lvlsToRaiseMinDices: 13,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMALS|green|Old Wolf|paws|1",
        key: "piece|ANIMALS|green|Old Wolf|paws|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "⚫️",
        bodyPartTypes: ["torso", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: 3,
          // maxValue: -1,
          // exactValues: ["odd"],
          // maxDices: 2,
        },
        requires: {
          // exactValues: [2],
          // minDices: 1,
          minSum: 3,
        },
        multiplies: {
          multipliedTypes: ["elemental"],
          multipliedBy: 2,
        },
        damages: {
          // damageToPlayer: 0,
          // effectsToPlayer: [],
          damageToEnemy: 2,
          // effectsToEnemy: []],
        },
        grow: {
          duplicateAtLv: 100,
          lvlsToRaiseMinSum: 4,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMALS|green|Old Wolf|head|1",
        key: "piece|ANIMALS|green|Old Wolf|head|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🐺",
        bodyPartTypes: ["head", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 2,
          // maxValue: -1,
          exactValues: ["odd"],
          // maxDices: 2,
        },
        requires: {
          // exactValues: [2],
          minDices: 1,
          // minSum: 3,
        },
        multiplies: {
          multipliedTypes: ["elemental"],
          multipliedBy: 2,
        },
        damages: {
          damageToPlayer: 1,
          // effectsToPlayer: [],
          // damageToEnemy: 1,
          // effectsToEnemy: []],
        },
        grow: {
          duplicateAtLv: 100,
          // lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 35,
          lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMALS|green|Old Wolf|head|2",
        key: "piece|ANIMALS|green|Old Wolf|head|2",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🐺",
        bodyPartTypes: ["head", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 3,
          // maxValue: 4,
          exactValues: ["odd"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          minDices: 1,
          // minSum: 3,
        },
        multiplies: {
          multipliedTypes: ["physical"],
          multipliedBy: 2,
        },
        damages: {
          damageToPlayer: 1,
          // effectsToPlayer: false,
          // damageToEnemy: 0,
          // effectsToEnemy: false,
        },
        grow: {
          duplicateAtLv: 30,
          // lvlsToRaiseMinSum: 3,
          lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMALS|green|Old Wolf|head|3",
        key: "piece|ANIMALS|green|Old Wolf|head|3",
      },

      {
        // priority: true, //dice must be fulfilled before others
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🐺",
        bodyPartTypes: ["head", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: 4,
          // maxValue: 4,
          exactValues: ["even"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          // minDices: 1,
          minSum: 4,
        },
        multiplies: {
          multipliedTypes: ["physical"],
          multipliedBy: 2,
        },
        damages: {
          // damageToPlayer: 1,
          // effectsToPlayer: false,
          damageToEnemy: 1,
          // effectsToEnemy: false,
        },
        grow: {
          // duplicateAtLv: 32,
          lvlsToRaiseMinSum: 5,
          // lvlsToRaiseMinDices: 12,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMALS|green|Old Wolf|head|4",
        key: "piece|ANIMALS|green|Old Wolf|head|4",
      },
    ],
    status: [],
  },
  {
    name: "Vyvernling",
    portrait: {
      frontIcon: "",
      sideIcon: "🌿",
      bgSideIcon: "🌲",
      backIcon: "🦎",
      bgIcon: "🌳",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "ANIMALS|green|Vyvernling",
    body: [],
    status: [],
  },
  {
    name: "Elder Badger",
    portrait: {
      frontIcon: "",
      sideIcon: "🌿",
      bgSideIcon: "🌲",
      backIcon: "🦡",
      bgIcon: "🌳",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "ANIMALS|green|Elder Badger",
    body: [],
    status: [],
  },
  {
    name: "Fat Boar",
    portrait: {
      frontIcon: "🐗",
      sideIcon: "🌳",
      bgSideIcon: "🌳",
      backIcon: "🟤",
      bgIcon: "🟤",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "ANIMALS|green|Fat Boar",
    body: [],
    status: [],
  },
];
