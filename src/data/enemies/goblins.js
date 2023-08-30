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
          exactValues: [3, 4, 5, 6],
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
        // extra: false,  //dice unlocks after all priority and normal body are filled
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
          minDices: 3,
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
        extra: true, //dice unlocks after all priority and normal body are filled
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
        keep: false, //player keeps its dices as extra dices for next turn
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
