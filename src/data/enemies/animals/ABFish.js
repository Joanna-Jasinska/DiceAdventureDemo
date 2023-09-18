export const ABFish = {
  name: "Blue Fish", //⛲️🌿💦🌊💧🐟➰🐬👽🐳🐋🦈🐊🐸🐢🟢⚜️｡ﾟ
  portrait: {
    //⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆
    frontIcon: "🐟", //👑
    sideIcon: "ﾟ", //🤍✖️🐈🗝️
    bgSideIcon: "_｡", //🧱🪑🟢🦇🕍
    backIcon: "ﾟ", //🏹⛓⚔️❕❔💂🧝‍🧙🦹🧙🏻‍♀️🌙🙏⚜️
    bgIcon: "ﾟ", //🗻🎚️⛆🏮
    filterColor: "#00b7ff4a",
    bgColor: "#00ddc7",
  },
  life: 3,
  maxLife: 3,
  id: "ANIMALS|aqua|Blue Fish",
  body: [
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "➰",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ANIMALS|aqua|Blue Fish|paws|1",
      weakness: ["physical"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        maxValue: 7,
        // exactValues: ["even"],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        // minDices: 1,
        minSum: 2,
      },
      grow: {
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 2,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🐟",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMALS|aqua|Blue Fish|head|1",
      // weakness: ["physical"],
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
        minSum: 4,
      },
      grow: {
        existsSinceLv: 1,
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🐟",
      bodyPartTypes: ["torso", "body"],
      id: "piece|ANIMALS|aqua|Blue Fish|torso|1",
      weakness: ["physical"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        // types: ["any"],
        // minValue: 4,
        maxValue: 4,
        // exactValues: ["even"],
        // maxDices: false,
      },
      requires: {
        // exactValues: false,
        // minDices: 1,
        minSum: 2,
      },
      grow: {
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 2,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🐟",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ANIMALS|aqua|Blue Fish|paws|2",
      // weakness: ["physical"],
      damages: {
        damageToPlayer: 1,
        // damageToEnemy: 1,
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
        // minDices: 1,
        minSum: 3,
      },
      grow: {
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "🐟",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMALS|aqua|Blue Fish|head|2",
      weakness: ["physical"],
      damages: {
        damageToPlayer: 2,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        maxValue: 5,
        // exactValues: ["even"],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        // minDices: 1,
        minSum: 1,
      },
      grow: {
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
  ],
  status: [],
};
