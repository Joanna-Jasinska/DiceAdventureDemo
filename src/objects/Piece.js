import { diceTypeMatches, getDiceTypeIcon } from "data/icons";

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
  getAllowedTypes(piece) {
    if (!piece || !piece.allows || !piece.allows.types) return false;
    const typesArray = piece.allows.types.map((type) => getDiceTypeIcon(type));
    // !!!AAA!!! show what types of dice can be placed
    return typesArray.length > 0 ? typesArray : false;
  },
  getReqIcons(piece) {
    // !!!AAA!!! needs to be changed to something that looks better
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
                ? piece.allows.minValue || piece.allows.maxValue
                  ? `${
                      piece.allows.minValue ? piece.allows.minValue + "+" : ""
                    }${
                      piece.allows.maxValue ? "-" + piece.allows.maxValue : ""
                    }`
                  : "R"
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
    console.log(`--------------Dice not allowed----type doesnt match`);
    // !!!AAA!!! check if dice type matches
    let typeMatches = false;
    if (piece.allows.types && piece.allows.types.length > 0) {
      typeMatches = piece.allows.types.some((type) => {
        if (diceTypeMatches(dice.type, type)) {
          return true;
        }
      });
    }
    if (!typeMatches) return false;
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
    console.log(`--------------Dice ALLOWED-----------`);
    return true;
  },

  levelupPiece(piecee) {
    const piece = JSON.parse(JSON.stringify(piecee));
    const pieceArray = [];
    const lv = piece.lv || 0;
    const grow = piece.grow ? piece.grow : false;
    const r = piece.requires ? piece.requires : false;
    let spilloverLv = grow && grow.lv ? grow.lv : -1;
    const maxLv = grow.duplicateAtLv || false;
    let iteration = 1;
    while (r && maxLv && spilloverLv > maxLv) {
      // make maxed dice  --------------------------------------------------
      let currentPiece = JSON.parse(JSON.stringify({ ...piece }));
      let a = currentPiece.allows ? currentPiece.allows : false;
      currentPiece.grow.lv = maxLv;
      if (r.minDices && grow.lvlsToRaiseMinDices) {
        const newMinDices =
          r.minDices + Math.floor(maxLv / grow.lvlsToRaiseMinDices);
        currentPiece.requires.minDices = newMinDices;
        if (a && a.maxDices) {
          a.maxDices += Math.floor(maxLv / grow.lvlsToRaiseMinDices);
        }
      }
      if (r.minSum && grow.lvlsToRaiseMinSum) {
        const newMinSum = r.minSum + Math.floor(maxLv / grow.lvlsToRaiseMinSum);
        currentPiece.requires.minSum = newMinSum;
      }
      if (a && a.minValue && grow.lvlsToRaiseMinValue) {
        const newMinValue =
          a.minValue + Math.floor(maxLv / grow.lvlsToRaiseMinValue);
        a.minValue = newMinValue;
      }
      if (r.exactValues && grow.lvlsToRaiseExactValues) {
        const extraAmount = Math.floor(maxLv / grow.lvlsToRaiseExactValues);
        for (let i = extraAmount; i > 0; i--) {
          currentPiece.requires.exactValues.push(
            currentPiece.requires.exactValues[0]
          );
        }
      }
      // --------------------------------------------------
      currentPiece.id = `${currentPiece.id}|iteration|${iteration}`;
      currentPiece.key = `${currentPiece.key}|iteration|${iteration}`;
      console.log(
        `Leveling piece - adding full level [${maxLv}] piece.`,
        currentPiece
      );
      pieceArray.push({ ...currentPiece });
      iteration += 1;
      spilloverLv = spilloverLv - grow.duplicateAtLv;
    }
    if (spilloverLv > 0) {
      // make not full dice  ----------------------------------------------
      let currentPiece = JSON.parse(JSON.stringify({ ...piece }));
      let a = currentPiece.allows ? currentPiece.allows : false;
      currentPiece.grow.lv = spilloverLv;
      if (r.minDices && grow.lvlsToRaiseMinDices) {
        const newMinDices =
          r.minDices + Math.floor(lv / grow.lvlsToRaiseMinDices);
        currentPiece.requires.minDices = newMinDices;
        if (currentPiece.allows && currentPiece.allows.maxDices) {
          currentPiece.allows.maxDices += Math.floor(
            lv / grow.lvlsToRaiseMinDices
          );
        }
      }
      if (r.minSum && grow.lvlsToRaiseMinSum) {
        const newMinSum = r.minSum + Math.floor(lv / grow.lvlsToRaiseMinSum);
        currentPiece.requires.minSum = newMinSum;
      }
      if (a && a.minValue && grow.lvlsToRaiseMinValue) {
        const newMinValue =
          a.minValue + Math.floor(lv / grow.lvlsToRaiseMinValue);
        a.minValue = newMinValue;
      }
      if (r.exactValues && grow.lvlsToRaiseExactValues) {
        const extraAmount = Math.floor(lv / grow.lvlsToRaiseExactValues);
        for (let i = extraAmount; i > 0; i--) {
          currentPiece.requires.exactValues.push(
            currentPiece.requires.exactValues[0]
          );
        }
      }
      // --------------------------------------------------
      currentPiece.id = `${currentPiece.id}|last`;
      currentPiece.key = `${currentPiece.key}|last`;
      console.log(
        `Leveling piece - adding last level [${spilloverLv}] piece.`,
        currentPiece
      );
      pieceArray.push({ ...currentPiece });
    }
    console.log(`finished leveling piece, pieceArray: `);
    console.table(pieceArray);
    return pieceArray;
  },
};

// allows: {
//   types: ["physical", "magic", "elemental", "speed"],
//   minValue: 4,
//   maxValue: -1,
//   exactValues: ["even"],
//   maxDices: false,
// },
// requires: {
//   exactValues: false,
//   minDices: 1,
//   minSum: 4,
// },
// multiplies: {
//   multipliedTypes: ["elemental"],
//   multipliedBy: 2,
// },
// damages: {
//   damageToPlayer: 0,
//   effectsToPlayer: false,
//   damageToEnemy: 0,
//   effectsToEnemy: false,
// },
// grow: {
//   lv: 33,
//   duplicateAtLv: 20,
//   lvlsToRaiseMinSum: 2,
//   lvlsToRaiseMinDices: 5,
//   lvlsToRaiseExactValues: 11,
// },
