export const OSeedling = {//needs adjustent
  name: "Seedling", //🌱👀🌰🌳
  portrait: {
    frontIcon: "👀", //🔺🩸
    sideIcon: "🌿", //🌿🌲🌿🌾🌻🥀🌱☘️
    bgSideIcon: "",
    backIcon: "🌱",
    bgIcon: "", //🌲
    filterColor: "#ff91004a",
    bgColor: "#0c7800",
  },
  life: 3,
  maxLife: 3,
  id: "ELEMENTAL|orange|Seedling",
  body: [
    {
      priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌲",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ELEMENTAL|orange|Seedling|paws|1",
      weakness: ["physical"],
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
        lvlsToRaiseMinSum: 2,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌰",
      bodyPartTypes: ["head", "body"],
      id: "piece|ELEMENTAL|orange|Seedling|head|1",
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
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "👣",
      bodyPartTypes: ["torso", "body"],
      id: "piece|ELEMENTAL|orange|Seedling|torso|1",
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
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "👣",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ELEMENTAL|orange|Seedling|paws|2",
      // weakness: ["physical"],
      damages: {
        damageToPlayer: 1,
        // damageToEnemy: 1,
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
        minSum: 3,
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
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "🙇",
      bodyPartTypes: ["head", "body"],
      id: "piece|ELEMENTAL|orange|Seedling|head|2",
      weakness: ["physical"],
      damages: {
        damageToPlayer: 2,
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
  ],
  status: [],
};
