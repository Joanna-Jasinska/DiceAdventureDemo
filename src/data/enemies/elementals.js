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
    life: 9,
    maxLife: 10,
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
];