export const OOBushes = {
  name: "Overgrown Bushes", //⛲️🌿💦🌊💧🐟➰🐬👽🐳🐋🦈🐊🐸🐢🟢⚜️
  portrait: {
    //🌲🌳
    frontIcon: "", //👑
    sideIcon: "🌾", //🤍✖️🐈🗝️
    bgSideIcon: "🌾", //🧱🪑🟢🦇🕍
    backIcon: "🌾", //🏹⛓⚔️❕❔💂🧝‍🧙🦹🧙🏻‍♀️🌙🙏⚜️
    bgIcon: "", //🗻🎚️⛆🏮🌾
    filterColor: "#ff91004a",
    bgColor: "#0c7800",
  },
  life: 3,
  maxLife: 3,
  id: "BARRICADE|orange|Overgrown Bushes",
  body: [
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌾",
      bodyPartTypes: ["paws", "body"],
      id: "piece|BARRICADE|orange|Overgrown Bushes|paws|1",
      weakness: ["trait"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        maxValue: 6,
        // exactValues: ["even"],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        minDices: 1,
        // minSum: 2,
      },
      grow: {
        // duplicateAtLv: 32,
        // lvlsToRaiseMinSum: 4,
        lvlsToRaiseMinDices: 4,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌾",
      bodyPartTypes: ["head", "body"],
      id: "piece|BARRICADE|orange|Overgrown Bushes|head|1",
      // weakness: ["trait"],
      damages: {
        damageToPlayer: 2,
        // damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        // types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        // exactValues: ["even"],
        // maxDices: false,
      },
      requires: {
        // exactValues: false,
        // minDices: 1,
        minSum: 3,
      },
      grow: {
        existsSinceLv: 1,
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 1.2,
        // lvlsToRaiseMinDices: 2.5,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌾",
      bodyPartTypes: ["paws", "body"],
      id: "piece|BARRICADE|orange|Overgrown Bushes|paws|2",
      // weakness: ["trait"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        // exactValues: ["even"],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        minDices: 2,
        minSum: 4,
      },
      grow: {
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 0.9,
        // lvlsToRaiseMinDices: 3.5,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "🌾",
      bodyPartTypes: ["head", "body"],
      id: "piece|BARRICADE|orange|Overgrown Bushes|head|2",
      weakness: ["trait"],
      damages: {
        damageToPlayer: 2,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        maxValue: 4,
        // exactValues: ["even"],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        minDices: 1,
        // minSum: 1,
      },
      grow: {
        // duplicateAtLv: 32,
        // lvlsToRaiseMinSum: 1,
        lvlsToRaiseMinDices: 2,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
  ],
  status: [],
};
