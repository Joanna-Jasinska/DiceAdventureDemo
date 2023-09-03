//
export const GOBLINS = [
  {
    name: "Surprised Goblin",
    portrait: {
      frontIcon: "😬",
      sideIcon: "🦴",
      backIcon: "👹",
      bgIcon: "🦂",
      bgSideIcon: "🌳",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "GOBLINS|green|Surprised Goblin",
    body: [
      {
        priority: true,
        // extra: false, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        bodyPartIcon: "😬",
        bodyPartTypes: ["eye", "head"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: 4,
          maxValue: -1,
          exactValues: ["even"],
          maxDices: false,
        },
        requires: {
          exactValues: false,
          minDices: 1,
          minDicesGrowthScale: false,
          minSum: 4,
          minSumGrowth: 1,
        },
        multiplies: {
          multipliedTypes: ["elemental"],
          multipliedBy: 2,
        },
        damages: {
          damageToPlayer: 0,
          effectsToPlayer: false,
          damageToEnemy: 0,
          effectsToEnemy: false,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|eye|1",
        key: "piece|GOBLINS|green|Surprised Goblin|eye|1",
      },
      {
        // priority: false,
        extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        bodyPartIcon: "🥩",
        bodyPartTypes: ["torso", "body"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: false,
          maxValue: false,
          exactValues: [1, 2],
          maxDices: false,
        },
        requires: {
          exactValues: false,
          minDices: 1,
          minDicesGrowthScale: 4,
          minSum: false,
          minSumGrowth: false,
        },
        multiplies: {
          multipliedTypes: ["physical"],
          multipliedBy: 2,
        },
        damages: {
          damageToPlayer: 0,
          effectsToPlayer: false,
          damageToEnemy: 2,
          effectsToEnemy: false,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|eye|2",
        key: "piece|GOBLINS|green|Surprised Goblin|eye|2",
      },
      {
        // priority: false,
        // extra: true, //dice unlocks after all priority and normal body are filled
        // keep: false, //player keeps its dices as extra dices for next turn
        bodyPartIcon: "🦴",
        bodyPartTypes: ["weapon"],

        allows: {
          types: ["physical", "magic", "elemental", "speed"],
          minValue: false,
          maxValue: false,
          exactValues: false,
          maxDices: false,
        },
        requires: {
          exactValues: false,
          minDices: 1,
          minDicesGrowthScale: false,
          minSum: 3,
          minSumGrowth: 1,
        },
        multiplies: {
          multipliedTypes: ["smashed"],
          multipliedBy: 2,
        },
        damages: {
          damageToPlayer: 3,
          effectsToPlayer: false,
          damageToEnemy: 0,
          effectsToEnemy: false,
        },

        id: "piece|GOBLINS|green|Surprised Goblin|bones|3",
        key: "piece|GOBLINS|green|Surprised Goblin|bones|3",
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
      bgIcon: "🦂",
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
          duplicateAtLv: 30,
          lvlsToRaiseMinSum: 3,
          // lvlsToRaiseMinDices: 10,
          // lvlsToRaiseExactValues: 17,
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
          minValue: 4,
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
        },

        id: "piece|GOBLINS|green|Angry Goblin|head|1",
        key: "piece|GOBLINS|green|Angry Goblin|head|1",
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
        },

        id: "piece|GOBLINS|green|Angry Goblin|hands|2",
        key: "piece|GOBLINS|green|Angry Goblin|hands|2",
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
      bgIcon: "🦂",
      bgSideIcon: "🌲",
      filterColor: "#005a124a",
      bgColor: "#ddd900",
    },
    life: 9,
    maxLife: 10,
    id: "GOBLINS|green|Goblin Shaman",
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
        types: ["speed", "mana"],
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
];
