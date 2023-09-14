export const BSGolem = {
  name: "Golem", //🧊💢♨️🎇🌑👀⭕️🔺🔸🛋️☁️
  portrait: {
    frontIcon: "👀",
    sideIcon: "🌑",
    bgSideIcon: "💣",
    backIcon: "",
    bgIcon: "🌑",
    filterColor: "#ff55004a",
    bgColor: "#0080cf",
  },
  life: 14,
  maxLife: 14,
  id: "ELEMENTALS|black|Golem",
  gold: 20,
  body: [
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌑",
      bodyPartTypes: ["weapon"],
      id: "piece|ELEMENTALS|black|Golem|weapon|1",
      weakness: ["elemental"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        minValue: 1,
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
        lvlsToRaiseMinSum: 3,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        lvlsToRaiseMinValue: 4,
      },
    },
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌑",
      bodyPartTypes: ["weapon"],
      id: "piece|ELEMENTALS|black|Golem|weapon|2",
      weakness: ["elemental"],
      damages: {
        damageToPlayer: 1,
        // damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 1,
        // maxValue: 4,
        // exactValues: ["even"],
        maxDices: 1,
      },
      requires: {
        // exactValues: false,
        // minDices: 1,
        minSum: 2,
      },
      grow: {
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 3,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 3,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌑",
      bodyPartTypes: ["weapon"],
      id: "piece|ELEMENTALS|black|Golem|weapon|3",
      // weakness: ["elemental"],
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
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 2,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "👀",
      bodyPartTypes: ["body"],
      id: "piece|ELEMENTALS|black|Golem|body|1",
      // weakness: ["elemental"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 2,
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
        lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "👀",
      bodyPartTypes: ["body"],
      id: "piece|ELEMENTALS|black|Golem|body|2",
      // weakness: ["elemental"],
      damages: {
        damageToPlayer: 1,
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
      bodyPartIcon: "👀",
      bodyPartTypes: ["body"],
      id: "piece|ELEMENTALS|black|Golem|body|3",
      weakness: ["elemental"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 3,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        minValue: 1,
        // maxValue: 4,
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
        lvlsToRaiseMinSum: 2,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        lvlsToRaiseMinValue: 2.4,
      },
    },
    {
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "🌑",
      bodyPartTypes: ["body"],
      id: "piece|ELEMENTALS|black|Golem|weapon|4",
      weakness: ["elemental"],
      damages: {
        damageToPlayer: 3,
        // damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        minValue: 2,
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
        lvlsToRaiseMinSum: 0.5,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        lvlsToRaiseMinValue: 1,
      },
    },
  ],
  status: [],
};
