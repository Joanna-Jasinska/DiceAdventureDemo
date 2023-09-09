export const ANIMAL_BOSSES = [
  {
    name: "Elder Wolf",
    portrait: {
      frontIcon: "🐺",
      sideIcon: "🌿",
      bgSideIcon: "🌲",
      backIcon: "⚫️",
      bgIcon: "🌳",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 16,
    maxLife: 16,
    gold: 20,
    id: "ANIMAL_BOSSES|green|Elder Wolf",
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

        id: "piece|ANIMAL_BOSSES|green|Old Wolf|paws|1",
        key: "piece|ANIMAL_BOSSES|green|Old Wolf|paws|1",
      },

      {
        priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🐺",
        bodyPartTypes: ["head", "body"],

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
          duplicateAtLv: 60,
          // lvlsToRaiseMinSum: 3,
          lvlsToRaiseMinDices: 11,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMAL_BOSSES|green|Old Wolf|head|1",
        key: "piece|ANIMAL_BOSSES|green|Old Wolf|head|1",
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
          // exactValues: ["even"],
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

        id: "piece|ANIMAL_BOSSES|green|Old Wolf|torso|1",
        key: "piece|ANIMAL_BOSSES|green|Old Wolf|torso|1",
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
          minValue: 3,
          // maxValue: -1,
          // exactValues: ["even"],
          // maxDices: 2,
        },
        requires: {
          // exactValues: [2],
          //   minDices: 1,
          minSum: 4,
        },
        multiplies: {
          multipliedTypes: ["elemental"],
          multipliedBy: 2,
        },
        damages: {
          damageToPlayer: 3,
          // effectsToPlayer: [],
          // damageToEnemy: 1,
          // effectsToEnemy: []],
        },
        grow: {
          duplicateAtLv: 100,
          lvlsToRaiseMinSum: 9,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 35,
          lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMAL_BOSSES|green|Elder Wolf|head|2",
        key: "piece|ANIMAL_BOSSES|green|Elder Wolf|head|2",
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
          minValue: 2,
          // maxValue: 4,
          // exactValues: ["even"],
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

        id: "piece|ANIMAL_BOSSES|green|Elder Wolf|head|3",
        key: "piece|ANIMAL_BOSSES|green|Elder Wolf|head|3",
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
          minSum: 6,
        },
        multiplies: {
          multipliedTypes: ["physical"],
          multipliedBy: 2,
        },
        damages: {
          // damageToPlayer: 1,
          // effectsToPlayer: false,
          damageToEnemy: 2,
          // effectsToEnemy: false,
        },
        grow: {
          // duplicateAtLv: 32,
          lvlsToRaiseMinSum: 5,
          // lvlsToRaiseMinDices: 12,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMAL_BOSSES|green|Elder Wolf|head|4",
        key: "piece|ANIMAL_BOSSES|green|Elder Wolf|head|4",
      },

      {
        // priority: true, //dice must be fulfilled before others
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🐾",
        bodyPartTypes: ["paws", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: 4,
          // maxValue: 4,
          exactValues: ["even"],
          maxDices: 2,
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
          damageToEnemy: 3,
          // effectsToEnemy: false,
        },
        grow: {
          // duplicateAtLv: 32,
          lvlsToRaiseMinSum: 5,
          lvlsToRaiseMinDices: 17,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ANIMAL_BOSSES|green|Elder Wolf|paws|2",
        key: "piece|ANIMAL_BOSSES|green|Elder Wolf|paws|2",
      },
    ],
    status: [],
  },
  //
];
