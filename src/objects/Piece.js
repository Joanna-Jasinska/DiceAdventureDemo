import { diceTypeMatches, getDiceTypeIcon } from "data/icons";

export const Piece = {
  getDmgIcons(piece) {
    const generateIcons = (attrName) => {
      const emojis = [];
      for (let i = 0; i < piece.damages[attrName]; i++) {
        emojis.push(
          attrName === "damageToPlayer" ? "❤️" : getDiceTypeIcon("playerAttack")
        );
      }
      return emojis;
    };
    const pDmg = generateIcons("damageToPlayer");
    const eDmg = generateIcons("damageToEnemy");

    const dIcons = [...[...pDmg], ...eDmg];
    // const dIcons = [...(piece.priority ? ["🛡️", ...pDmg] : [...pDmg]), ...eDmg];
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
    const allow = [];
    let showAllows = false;
    if (!piece.requires) return false;
    // req exact values
    if (piece.requires.exactValues)
      piece.requires.exactValues.forEach((ex) => {
        req.push({ value: `${ex}`, required: true });
      });
    // req min sum
    if (piece.requires.minSum) {
      req.push({ value: `${piece.requires.minSum}+`, required: true });
      showAllows = true;
    }
    // amount of dices
    const reqAmount = piece.requires.minDices || 0;
    const allAmount = piece.allows.maxDices || 0;

    if (reqAmount > 0) {
      // allows exact values
      allow.push({
        value: `x${reqAmount}`,
        required: true,
      });
      showAllows = true;
    }
    if (allAmount > 0) {
      // allows exact values
      allow.push({
        value: `-${allAmount}x`,
        allowed: true,
      });
      showAllows = true;
    }

    if (showAllows && piece.allows) {
      if (piece.allows.exactValues) {
        // allows exact values
        allow.push({
          value: `${piece.allows.exactValues.join(",")}`,
          allowed: true,
        });
      }
      if (piece.allows.minValue || piece.allows.maxValue) {
        // allows min-max values
        if (piece.allows.minValue || false) {
          allow.push({
            value: `${
              piece.allows.maxValue || false
                ? piece.allows.minValue + "-" + piece.allows.maxValue
                : piece.allows.minValue + "+"
            }`,
            allowed: true,
          });
        } else {
          allow.push({ value: `-${piece.allows.maxValue}`, allowed: true });
        }
        // allow.push({ value: ` `});
      } else {
        // no allows restrictions
        // allow.push({ value: ` ` });
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
    const icons = [...req, ...allow];
    return icons.length > 0 ? icons : false;
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
    if (piece.disabled) {
      // console.log(`--------------Dice not allowed----piece disabled`);
      return false;
    }
    let weaknessMatches = false;
    if (piece.weakness && piece.weakness.length > 0) {
      weaknessMatches = piece.weakness.some((type) => {
        if (diceTypeMatches(dice.type, type)) {
          return true;
        }
        return false;
      });
    }
    if (weaknessMatches) {
      return true;
    }
    if (
      piece.dices &&
      piece.allows &&
      piece.allows.maxDices &&
      piece.dices.length >= piece.allows.maxDices
    ) {
      // console.log(`--------------Dice not allowed----too many dices`);
      return false;
    }
    let typeMatches = false;
    if (piece.allows && piece.allows.types && piece.allows.types.length > 0) {
      typeMatches = piece.allows.types.some((type) => {
        if (diceTypeMatches(dice.type, type)) {
          return true;
        }
        return false;
      });
    } else {
      typeMatches = true;
    }
    if (!typeMatches) {
      return false;
    }
    const valueSpace = dice.diceMax - dice.value;
    if (piece.requires.valueSpace && piece.requires.valueSpace > valueSpace) {
      // console.log(
      //   `----------Dice not allowed---valueSpace (${valueSpace}/${piece.requires.valueSpace}) too low--${dice.id}`
      // );
      return false;
    }
    if (
      piece.allows &&
      piece.allows.minValue &&
      dice.value < piece.allows.minValue
    ) {
      // console.log(`--------------Dice not allowed----value too low`);
      return false;
    }
    if (
      piece.allows &&
      piece.allows.maxValue &&
      piece.allows.maxValue > 0 &&
      dice.value > piece.allows.maxValue
    ) {
      // console.log(`--------------Dice not allowed----value too high`);
      return false;
    }
    if (
      piece.allows &&
      piece.allows.exactValues &&
      piece.allows.exactValues.find((r) => r === "even") &&
      dice.value % 2 === 0
    ) {
      // console.log(`--------------Dice ALLOWED----"even"-------`);
      return true;
    }
    if (
      piece.allows &&
      piece.allows.exactValues &&
      piece.allows.exactValues.find((r) => r === "odd") &&
      dice.value % 2 === 1
    ) {
      // console.log(`--------------Dice ALLOWED-----"odd"------`);
      return true;
    }
    if (
      piece.allows &&
      piece.allows.exactValues &&
      !piece.allows.exactValues.find((r) => r === dice.value)
    ) {
      // console.log(`--------------Dice not allowed----not exact value`);
      return false;
    }
    // console.log(`--------------Dice ALLOWED-----------`, dice, piece);
    return true;
  },

  levelupPiece(piecee) {
    const piece = JSON.parse(JSON.stringify(piecee));
    const pieceArray = [];
    const grow = piece.grow ? piece.grow : false;
    const existsSinceLv = grow ? piece.grow.existsSinceLv || 0 : 0;
    const lv =
      piece.lv !== undefined && piece.lv >= existsSinceLv
        ? piece.lv - existsSinceLv
        : false;
    console.log(`piece lv[${piece.lv}] existsSinceLv[${existsSinceLv}]`, piece);
    console.log(`[${piece.lv !== false}] && [${piece.lv >= existsSinceLv}] `);
    const r = piece.requires ? piece.requires : false;
    let spilloverLv = lv;
    const maxLv = grow.duplicateAtLv || false;
    let iteration = 1;
    while (lv !== false && r && maxLv && spilloverLv > maxLv) {
      // make maxed dice  --------------------------------------------------
      let currentPiece = JSON.parse(JSON.stringify({ ...piece }));
      let a = currentPiece.allows ? currentPiece.allows : false;
      currentPiece.lv = maxLv;
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
      // console.log(
      //   `Leveling piece - adding full level [${maxLv}] piece.`,
      //   currentPiece
      // );
      pieceArray.push({ ...currentPiece });
      iteration += 1;
      spilloverLv = spilloverLv - grow.duplicateAtLv;
    }
    if (lv !== false && spilloverLv > -1) {
      // make not full dice  ----------------------------------------------
      let currentPiece = JSON.parse(JSON.stringify({ ...piece }));
      let a = currentPiece.allows ? currentPiece.allows : false;
      currentPiece.lv = spilloverLv;
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
      // console.log(
      //   `NNNNNNNNNNNNNN checking (r.minSum [${r.minSum}] && [${grow.lvlsToRaiseMinSum}] grow.lvlsToRaiseMinSum)`
      // );
      if (r.minSum && grow.lvlsToRaiseMinSum) {
        const newMinSum = r.minSum + Math.floor(lv / grow.lvlsToRaiseMinSum);
        // console.log(
        //   `WWWWWWWWWWWWWWWWWWW entered leveling minSum, newMinSum [${newMinSum}]`
        // );
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
          r.exactValues.push(r.exactValues[0]);
        }
      }
      // --------------------------------------------------
      currentPiece.id = `${currentPiece.id}|last`;
      currentPiece.key = `${currentPiece.key}|last`;
      // console.log(
      //   `Leveling piece - adding last level [${spilloverLv}] piece.`,
      //   currentPiece
      // );
      pieceArray.push({ ...currentPiece });
    }
    console.log(
      `finished leveling piece for enemy lv[${lv}], pieceArray: `,
      pieceArray
    );
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
