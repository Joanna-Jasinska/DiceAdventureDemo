//
export const GOBLINS = [
  {
    name: "Surprised Goblin",
    portrait: {
      frontIcon: "😬",
      sideIcon: "🦴",
      backIcon: "👹",
      bgIcon: "🧝",
      bgSideIcon: "🌳",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "GOBLINS|green|Surprised Goblin",
    body: [
      {
        priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🙌",
        bodyPartTypes: ["hands", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: -1,
          // maxValue: -1,
          // exactValues: ["even"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          // minDices: 1,
          minSum: 3,
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
          duplicateAtLv: 30,
          lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|hands|1",
        key: "piece|GOBLINS|green|Surprised Goblin|hands|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "😬",
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
          damageToEnemy: 1,
          // effectsToEnemy: []],
        },
        grow: {
          duplicateAtLv: 99,
          // lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|head|1",
        key: "piece|GOBLINS|green|Surprised Goblin|head|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "😬",
        bodyPartTypes: ["head", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 2,
          // maxValue: -1,
          // exactValues: ["even"],
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
          duplicateAtLv: 101,
          // lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 35,
          lvlsToRaiseMinValue: 35,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|head|2",
        key: "piece|GOBLINS|green|Surprised Goblin|head|2",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🦴",
        bodyPartTypes: ["weapon"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 3,
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

        id: "piece|GOBLINS|green|Surprised Goblin|weapon|1",
        key: "piece|GOBLINS|green|Surprised Goblin|weapon|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "👁‍🗨",
        bodyPartTypes: ["eye", "head"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 4,
          // maxValue: 4,
          // exactValues: ["even"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          minDices: 1,
          minSum: 5,
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

        id: "piece|GOBLINS|green|Surprised Goblin|eye|1",
        key: "piece|GOBLINS|green|Surprised Goblin|eye|1",
      },
    ],
    status: [],
  },
  {
    name: "Angry Goblin",
    portrait: {
      frontIcon: "😠",
      sideIcon: "🙌",
      backIcon: "👹",
      bgIcon: "🧝",
      bgSideIcon: "🌲",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "GOBLINS|green|Angry Goblin",
    body: [
      {
        priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🙌",
        bodyPartTypes: ["hands", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: -1,
          // maxValue: -1,
          // exactValues: ["even"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          // minDices: 1,
          minSum: 3,
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
          duplicateAtLv: 29,
          lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|GOBLINS|green|Angry Goblin|hands|1",
        key: "piece|GOBLINS|green|Angry Goblin|hands|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "😠",
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
          damageToEnemy: 1,
          // effectsToEnemy: []],
        },
        grow: {
          duplicateAtLv: 100,
          // lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|GOBLINS|green|Angry Goblin|head|1",
        key: "piece|GOBLINS|green|Angry Goblin|head|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "😠",
        bodyPartTypes: ["head", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 2,
          // maxValue: -1,
          // exactValues: ["even"],
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
          // lvlsToRaiseExactValues: 34,
          lvlsToRaiseMinValue: 34,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|head|2",
        key: "piece|GOBLINS|green|Surprised Goblin|head|2",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🙌",
        bodyPartTypes: ["hands", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 3,
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

        id: "piece|GOBLINS|green|Angry Goblin|hands|2",
        key: "piece|GOBLINS|green|Angry Goblin|hands|2",
      },

      {
        // priority: true, //dice must be fulfilled before others
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "👁‍🗨",
        bodyPartTypes: ["eye", "head"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 4,
          // maxValue: 4,
          // exactValues: ["even"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          minDices: 1,
          minSum: 5,
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

        id: "piece|GOBLINS|green|Surprised Goblin|eye|1",
        key: "piece|GOBLINS|green|Surprised Goblin|eye|1",
      },
    ],
    status: [],
  },
  {
    name: "Goblin Shaman",
    portrait: {
      frontIcon: "😵",
      sideIcon: "📿",
      backIcon: "👹",
      bgIcon: "🧝",
      bgSideIcon: "🌲",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "GOBLINS|green|Goblin Shaman",
    body: [
      {
        priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "🙌",
        bodyPartTypes: ["hands", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          // minValue: -1,
          // maxValue: -1,
          // exactValues: ["even"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          // minDices: 1,
          minSum: 4,
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
          duplicateAtLv: 29,
          lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|GOBLINS|green|Angry Goblin|hands|1",
        key: "piece|GOBLINS|green|Angry Goblin|hands|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "😵",
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
          damageToEnemy: 1,
          // effectsToEnemy: []],
        },
        grow: {
          duplicateAtLv: 100,
          // lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
          // lvlsToRaiseMinValue: 35,
        },

        id: "piece|GOBLINS|green|Angry Goblin|head|1",
        key: "piece|GOBLINS|green|Angry Goblin|head|1",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: true, //player keeps its dices as extra dices for next turn
        // once: true, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "😵",
        bodyPartTypes: ["head", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 2,
          // maxValue: -1,
          // exactValues: ["even"],
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
          // lvlsToRaiseExactValues: 34,
          lvlsToRaiseMinValue: 36,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|head|2",
        key: "piece|GOBLINS|green|Surprised Goblin|head|2",
      },

      {
        // priority: true, //dice must be fulfilled before others
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "📿",
        bodyPartTypes: ["weapon"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 3,
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
          multipliedTypes: ["magic"],
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

        id: "piece|GOBLINS|green|Angry Goblin|hands|2",
        key: "piece|GOBLINS|green|Angry Goblin|hands|2",
      },

      {
        // priority: true, //dice must be fulfilled before others
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        // once: false, //can be fulfilled once then is forever disabled?
        bodyPartIcon: "👁‍🗨",
        bodyPartTypes: ["eye", "head"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 4,
          // maxValue: 4,
          // exactValues: ["even"],
          // maxDices: false,
        },
        requires: {
          // exactValues: false,
          minDices: 1,
          minSum: 5,
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

        id: "piece|GOBLINS|green|Surprised Goblin|eye|1",
        key: "piece|GOBLINS|green|Surprised Goblin|eye|1",
      },
    ],
    status: [],
  },
];
