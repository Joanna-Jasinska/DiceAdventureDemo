//
export const ELEMENTALS = [
  {
    name: "Mysterious Enemy",
    portrait: {
      frontIcon: "👀",
      sideIcon: "🌳",
      bgSideIcon: "🌲",
      backIcon: "🏺",
      bgIcon: "🌳",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "ELEMENTALS|green|Mysterious Enemy",
    body: [],
    status: [],
  },
  {
    name: "Treant",
    portrait: {
      frontIcon: "👀",
      sideIcon: "🌳",
      bgSideIcon: "🌲",
      backIcon: "🌳",
      bgIcon: "🌲",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "ELEMENTALS|green|Treant",
    body: [
      {
        bodyPartIcon: "👁‍🗨",
        bodyPartTypes: ["eye", "head"],
        allowMinValue: 4,
        allowMaxValue: -1,
        allowExactValues: [],
        reqExactValues: [],
        maxAmountOfDices: 2,
        reqAmountOfDices: 1,
        allowTypes: ["speed", "mana"],
        multipliedTypes: ["mana"],
        multipliedBy: 2,
        damageToPlayer: 1,
        effectsToPlayer: [],
        damageToEnemy: 1,
        effectsToEnemy: [],
        priority: true,
        id: "testpiece|Enemy|eye|1",
        key: "testpiece|Enemy|eye|1",
        bonus: false, //dice unlocks after all priority and normal body are filled
        keep: false, //player keeps its dices as extra dices for next turn
      },
    ],
    status: [],
  },
  {
    name: "Dryad",
    id: "ELEMENTALS|green|Dryad",
    portrait: {
      frontIcon: "👩🏻‍🦰",
      sideIcon: "🌳",
      bgSideIcon: "🌳",
      backIcon: "🦒",
      bgIcon: "🌲",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 4,
    maxLife: 4,
    status: [],
    body: [
      {
        priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🌳",
        bodyPartTypes: ["obstacle"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: 1,
          // maxValue: 1,
          exactValues: [1],
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
          lvlsToRaiseMinDices: 9,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ELEMENTALS|green|Dryad|obstacle|1",
        key: "piece|ELEMENTALS|green|Dryad|obstacle|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🌲",
        bodyPartTypes: ["obstacle"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: 3,
          // maxValue: -1,
          exactValues: [6],
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
          // damageToPlayer: 0,
          // effectsToPlayer: [],
          // damageToEnemy: 1,
          // effectsToEnemy: []],
        },
        grow: {
          duplicateAtLv: 100,
          // lvlsToRaiseMinSum: 4,
          lvlsToRaiseMinDices: 28,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ELEMENTALS|green|Dryad|obstacle|2",
        key: "piece|ELEMENTALS|green|Dryad|obstacle|2",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "👩🏻‍🦰",
        bodyPartTypes: ["head", "body"],

        damages: {
          // damageToPlayer: 1,
          // effectsToPlayer: false,
          damageToEnemy: 1,
          // effectsToEnemy: false,
        },
        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: 5,
          // maxValue: -1,
          // exactValues: ["even"],
          // maxDices: 2,
        },
        requires: {
          // exactValues: [2],
          // minDices: 1,
          minSum: 5,
        },
        multiplies: {
          multipliedTypes: ["elemental"],
          multipliedBy: 2,
        },
        grow: {
          duplicateAtLv: 100,
          lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 35,
          // lvlsToRaiseMinValue: 37,
        },

        id: "piece|ELEMENTALS|green|Dryad|head|1",
        key: "piece|ELEMENTALS|green|Dryad|head|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🌰",
        bodyPartTypes: ["weapon"],

        damages: {
          damageToPlayer: 2,
          // effectsToPlayer: [],
          // damageToEnemy: 1,
          // effectsToEnemy: []],
        },
        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 5,
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
        grow: {
          duplicateAtLv: 200,
          // lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          lvlsToRaiseMinValue: 35,
        },

        id: "piece|ELEMENTALS|green|Dryad|weapon|1",
        key: "piece|ELEMENTALS|green|Dryad|weapon|1",
      },
      {
        // priority: true, //dice must be fulfilled before others
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "👩🏻‍🦰",
        bodyPartTypes: ["head", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: 4,
          // maxValue: 4,
          exactValues: [7, 20],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          minDices: 1,
          // minSum: 4,
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
          // lvlsToRaiseMinSum: 5,
          lvlsToRaiseMinDices: 16,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|ELEMENTALS|green|Dryad|head|2",
        key: "piece|ELEMENTALS|green|Dryad|head|2",
      },
    ],
  },
];
