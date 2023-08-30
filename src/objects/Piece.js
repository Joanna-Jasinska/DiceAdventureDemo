export const Piece = {
  getDmgIcons(piece) {
    const generateIcons = (attrName) => {
      const emojis = [];
      for (let i = 0; i < piece.damages[attrName]; i++) {
        emojis.push(attrName === "damageToPlayer" ? "❤️" : "⚔️");
      }
      return emojis;
    };
    const pDmg = generateIcons("damageToPlayer");
    const eDmg = generateIcons("damageToEnemy");

    const dIcons = [...(piece.priority ? ["🛡️", ...pDmg] : [...pDmg]), ...eDmg];
    return dIcons.length > 0 ? dIcons : false;
  },

  getReqIcons(piece) {
    // !!!AAA!!! show what is required to fulfill
    const req = [];
    if (!piece.requires) return false;
    if (piece.requires.minSum) req.push(`${piece.requires.minSum}+`);
    const reqAmount = piece.requires.minDices || 0;
    const amount = Math.max(reqAmount, piece.allows.maxDices || 0);
    for (let i = amount; i > 0; i--) {
      const generateIcon = (required, i) => {
        if (required)
          return `[${
            !piece.requires.exactValues
              ? !piece.allows.exactValues
                ? "R"
                : piece.allows.exactValues.join("/")
              : piece.requires.exactValues[i - 1]
          }]`;
        return `[${
          !piece.allows.exactValues ? "_" : piece.allows.exactValues.join("/")
        }]`;
      };
      if (i <= reqAmount) {
        req.push(generateIcon(true, i));
      } else {
        req.push(generateIcon(false, i));
      }
    }
    //   allows: {
    //     types: ["physical", "magic", "elemental", "speed"],
    //     minValue: 4,
    //     maxValue: -1,
    //     exactValues: ["even"],
    //     maxDices: false,
    //   },
    //   requires: {
    //     exactValues: false,
    //     minDices: 1,
    //   },

    return req.length > 0 ? req : false;
  },

  evaluateFulfilled(piece) {
    // returns piece with status fulfilled: true/false
    if (!piece.dices || piece.dices.length < 1)
      return { ...piece, fulfilled: false };
    // let fulfilled = true;
    if (!piece.requires) return { ...piece, fulfilled: true };
    const valueSum = piece.dices.reduce((total, dice) => total + dice.value, 0);
    if (piece.requires.minSum && piece.requires.minSum > valueSum)
      return { ...piece, fulfilled: false };
    if (piece.requires.minDices && piece.requires.minDices > piece.dices.length)
      return { ...piece, fulfilled: false };
    if (piece.requires.exactValues) {
      // !!!AAA!!! check if fulfilled when requiring exact values
      return { ...piece, fulfilled: true };
    }
    return { ...piece, fulfilled: true };
    // return fulfilled;
  },

  diceIsAllowed(piece, dice) {
    console.log(`--------------Dice not allowed----piece disabled`);
    if (piece.disabled) return false;
    if (!piece.allows) return true;
    console.log(`--------------Dice not allowed----too many dices`);
    if (
      piece.dices &&
      piece.allows.maxDices &&
      piece.dices.length >= piece.allows.maxDices
    )
      return false;
    console.log(`--------------Dice not allowed----value too low`);
    if (piece.allows.minValue && dice.value < piece.allows.minValue)
      return false;
    console.log(`--------------Dice not allowed----value too high`);
    if (
      piece.allows.maxValue &&
      piece.allows.maxValue > 0 &&
      dice.value > piece.allows.maxValue
    )
      return false;
    if (
      piece.allows.exactValues &&
      piece.allows.exactValues.find((r) => r === "even") &&
      dice.value % 2 === 0
    )
      return true;
    if (
      piece.allows.exactValues &&
      piece.allows.exactValues.find((r) => r === "odd") &&
      dice.value % 2 === 1
    )
      return true;
    console.log(`--------------Dice not allowed----not exact value`);
    if (
      piece.allows.exactValues &&
      !piece.allows.exactValues.find((r) => r === dice.value)
    ) {
      return false;
    }
    // !!!AAA!!! check piece
    // allows: {
    //     types: ["physical", "magic", "elemental", "speed"],
    //     minValue: 4,
    //     maxValue: -1,
    //     exactValues: ["even"],
    //     maxDices: false,
    //   },
    return true;
  },
};

// {
//   priority: true,
//   // extra: false, //dice unlocks after all priority and normal body are filled
//   // keep: false, //player keeps its dices as extra dices for next turn
//   bodyPartIcon: "😬",
//   bodyPartTypes: ["eye", "head"],

//   allows: {
//     types: ["physical", "magic", "elemental", "speed"],
//     minValue: 4,
//     maxValue: -1,
//     exactValues: ["even"],
//     maxDices: false,
//   },
//   requires: {
//     exactValues: false,
//     minDices: 1,
//     minDicesGrowthScale: false,
//     minSum: 4,
//     minSumGrowth: 1,
//   },
//   multiplies: {
//     multipliedTypes: ["elemental"],
//     multipliedBy: 2,
//   },
//   damages: {
//     damageToPlayer: 0,
//     effectsToPlayer: false,
//     damageToEnemy: 0,
//     effectsToEnemy: false,
//   },

//   id: "piece|GOBLINS|green|Surprised Goblin|eye|1",
//   key: "piece|GOBLINS|green|Surprised Goblin|eye|1",
// },
