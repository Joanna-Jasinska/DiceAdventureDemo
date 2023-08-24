//
export const FOREST_ENEMIES = [
  {
    name: "Surprised Goblin",
    frontIcon: "😬",
    sideIcon: "🦴",
    backIcon: "👹",
    bgIcon: "😈",
    filterColor: "#00bbff5b",
    bgColor: "#ddd900",
    life: 9,
    maxLife: 10,
    id: "",
    pieces: [
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
        bonus: false, //dice unlocks after all priority and normal pieces are filled
        keep: false, //player keeps its dices as extra dices for next turn
      },
    ],
  },
];
