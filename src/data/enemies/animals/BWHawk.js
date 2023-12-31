export const BWHawk = {
  name: "Wounded Hawk", //🗻🌑🌿🍃🌾🌷💣•°👀🌲🌳🦅⚫️
  portrait: {
    frontIcon: "",
    sideIcon: "⚫️",
    bgSideIcon: "🌑",
    backIcon: "",
    bgIcon: "🦅",
    filterColor: "#ff55004a",
    bgColor: "#0080cf",
  },
  life: 3,
  maxLife: 3,
  id: "ANIMALS|black|Wounded Hawk",
  body: [
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌑",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ANIMALS|black|Wounded Hawk|paws|1",
      weakness: ["physical"],
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
        lvlsToRaiseMinSum: 2,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        lvlsToRaiseMinValue: 2,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "🌑",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMALS|black|Wounded Hawk|head|1",
      // weakness: ["physical"],
      damages: {
        damageToPlayer: 1,
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
        existsSinceLv: 2,
        // duplicateAtLv: 32,
        lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      // priority: true, //priority, extra, keep, once
      bodyPartIcon: "⚫️",
      bodyPartTypes: ["torso", "body"],
      id: "piece|ANIMALS|black|Wounded Hawk|torso|1",
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
        exactValues: [2],
        // minDices: 1,
        // minSum: 2,
      },
      grow: {
        // duplicateAtLv: 32,
        // lvlsToRaiseMinSum: 2,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        lvlsToRaiseExactValue0: 1.2,
        // lvlsToRaiseMinValue: 35,
      },
    },
    {
      extra: true, //priority, extra, keep, once
      bodyPartIcon: "🌑",
      bodyPartTypes: ["paws", "body"],
      id: "piece|ANIMALS|black|Wounded Hawk|paws|2",
      weakness: ["physical"],
      damages: {
        damageToPlayer: 2,
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
      bodyPartIcon: "🦅",
      bodyPartTypes: ["head", "body"],
      id: "piece|ANIMALS|black|Wounded Hawk|head|2",
      weakness: ["physical"],
      damages: {
        damageToPlayer: 2,
        damageToEnemy: 1,
        // effectsToPlayer: false,// effectsToEnemy: false,
      },
      allows: {
        types: ["any"],
        minValue: 2,
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
        lvlsToRaiseMinSum: 1,
        // lvlsToRaiseMinDices: 12,
        // lvlsToRaiseExactValues: 17,
        lvlsToRaiseMinValue: 1.6,
      },
    },
  ],
  status: [],
};
