export const ACFish = {
  name: "Count Fish", //⛲️🌿💦🌊💧🐟➰🐬👽🐳🐋🦈🐊🐸🐢🟢⚜️｡ﾟ
  portrait: {
    //⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆
    frontIcon: "🐡", //👑
    sideIcon: "ﾟ", //🤍✖️🐈🗝️
    bgSideIcon: "_｡", //🧱🪑🟢🦇🕍
    backIcon: "ﾟ", //🏹⛓⚔️❕❔💂🧝‍🧙🦹🧙🏻‍♀️🌙🙏⚜️
    bgIcon: "ﾟ", //🗻🎚️⛆🏮
    filterColor: "#00b7ff4a",
    bgColor: "#00ddc7",
  },
  life: 3,
  maxLife: 3,
  id: "ANIMALS|aqua|Count Fish",
  body: [
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "➰",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ANIMALS|aqua|Count Fish|paws|1",
      weakness: ["physical"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 7,
        exactValues: [1],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        minDices: 1,
        // minSum: 2,
      },
      grow: {
        // duplicateAtLv: 13,
        // lvlsToRaiseMinSum: 2,
        lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "🐡",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMALS|aqua|Count Fish|head|1",
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
        exactValues: [2],
        // maxDices: false,
      },
      requires: {
        // exactValues: false,
        minDices: 1,
        // minSum: 4,
      },
      grow: {
        existsSinceLv: 1,
        // duplicateAtLv: 32,
        // lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "🐡",
      bodyPartTypes: ["torso", "body"],
      id: "piece|ANIMALS|aqua|Count Fish|torso|1",
      weakness: ["physical"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        // types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        exactValues: [3],
        // maxDices: false,
      },
      requires: {
        // exactValues: false,
        minDices: 1,
        // minSum: 2,
      },
      grow: {
        // duplicateAtLv: 45,
        // lvlsToRaiseMinSum: 2,
        lvlsToRaiseMinDices: 29,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🐡",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ANIMALS|aqua|Count Fish|paws|2",
      // weakness: ["physical"],
      damages: {
        damageToPlayer: 1,
        // damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 6,
        exactValues: [4],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        minDices: 1,
        // minSum: 3,
      },
      grow: {
        // duplicateAtLv: 32,
        // lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "🐡",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMALS|aqua|Count Fish|head|2",
      weakness: ["physical"],
      damages: {
        damageToPlayer: 2,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 5,
        exactValues: [5],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        minDices: 1,
        // minSum: 1,
      },
      grow: {
        // duplicateAtLv: 87,
        lvlsToRaiseMinSum: 1,
        lvlsToRaiseMinDices: 18,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
  ],
  status: [],
};
