export const PMimic = {
  name: "Mimic",
  portrait: {
    //🦞🩸📍 ✂️❤️❓🔱😈💢♨️
    frontIcon: "👅", //💀⛆👀
    sideIcon: "", //🤍✖️
    bgSideIcon: "", //🧱
    backIcon: "👜", //🏹⛓⚔️❕❔👻
    bgIcon: "", //🗻🎚️❔⛆🏰♨️
    filterColor: "#32005a4a",
    bgColor: "#dd6b00",
  },
  life: 4,
  maxLife: 4,
  id: "ANIMATED|purple|Mimic",
  body: [
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "👜",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ANIMATED|purple|Mimic|paws|1",
      weakness: ["magic"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 2,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        // exactValues: ["even"],
        maxDices: 2,
      },
      requires: {
        // exactValues: false,
        // minDices: 1,
        minSum: 2,
      },
      grow: {
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 4,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "👜",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMATED|purple|Mimic|head|1",
      // weakness: ["physical"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
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
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 3,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "👜",
      bodyPartTypes: ["torso", "body"],
      id: "piece|ANIMATED|purple|Mimic|torso|1",
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
      // extra: true, //priority, extra, keep, once
      bodyPartIcon: "👜",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMATED|purple|Mimic|head|2",
      weakness: ["physical"],
      damages: {
        damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        // exactValues: ["even"],
        maxDices: 2,
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
    {
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "💰",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMATED|purple|Mimic|gold|1",
      weakness: ["physical"],
      damages: {
        // damageToEnemy: 2,
        gold: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        // exactValues: ["even"],
        maxDices: 2,
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
