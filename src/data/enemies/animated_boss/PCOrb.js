export const PCOrb = {
  name: "Cursed Orb", //🧊💢♨️🎇✨🔮⭕️🔺🔸🛋️☁️
  portrait: {
    frontIcon: "✨",
    sideIcon: "",
    bgSideIcon: "",
    backIcon: "🔮",
    bgIcon: "🛋️",
    filterColor: "#32005a4a",
    bgColor: "#dd6b00",
  },
  life: 14,
  maxLife: 14,
  id: "ANIMATED|purple|Cursed Orb",
  gold: 20,
  body: [
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "✨",
      bodyPartTypes: ["weapon"],
      id: "piece|ANIMATED|purple|Cursed Orb|weapon|1",
      weakness: ["magic"],
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
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "✨",
      bodyPartTypes: ["weapon"],
      id: "piece|ANIMATED|purple|Cursed Orb|weapon|2",
      weakness: ["magic"],
      damages: {
        damageToPlayer: 1,
        // damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        exactValues: ["odd"],
        // maxDices: 1,
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
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "✨",
      bodyPartTypes: ["weapon"],
      id: "piece|ANIMATED|purple|Cursed Orb|weapon|3",
      // weakness: ["magic"],
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
      bodyPartIcon: "🔮",
      bodyPartTypes: ["body"],
      id: "piece|ANIMATED|purple|Cursed Orb|body|1",
      // weakness: ["magic"],
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
      bodyPartIcon: "🔮",
      bodyPartTypes: ["body"],
      id: "piece|ANIMATED|purple|Cursed Orb|body|2",
      weakness: ["magic"],
      damages: {
        damageToPlayer: 1,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        // types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        exactValues: ["odd"],
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
      bodyPartIcon: "🔮",
      bodyPartTypes: ["body"],
      id: "piece|ANIMATED|purple|Cursed Orb|body|3",
      weakness: ["magic"],
      damages: {
        // damageToPlayer: 1,
        damageToEnemy: 3,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        exactValues: ["even"],
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
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "✨",
      bodyPartTypes: ["body"],
      id: "piece|ANIMATED|purple|Cursed Orb|weapon|4",
      weakness: ["magic"],
      damages: {
        damageToPlayer: 3,
        // damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        // minValue: 4,
        // maxValue: 4,
        exactValues: ["odd"],
        // maxDices: 2,
      },
      requires: {
        // exactValues: false,
        // minDices: 1,
        minSum: 1,
      },
      grow: {
        existsSinceLv: 1,
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 0.5,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
  ],
  status: [],
};
