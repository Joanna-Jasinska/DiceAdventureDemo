import { getBaseEqById } from "data/eq";
import { STARTING_EQ } from "data/settings";

const ItemTemplate = {
  lv: 1,
  selected: false,
};

const levelNondiceStat = (piecee, lvv = 1) => {
  return [piecee];
};
const levelDiceStat = (piecee, lvv = 1) => {
  const piece = JSON.parse(JSON.stringify(piecee));
  // console.log(
  //   `ITEM.JS LEVELDICESTAT PIECE.ID [${piece.id}] piece given`,
  //   piece
  // );
  const lv = lvv || piece.lv || 1;
  const existSinceLv = piece.existSinceLv || 0;
  const pieceArray = [];
  if (!!piece.existSinceLv && piece.existSinceLv > lv) return pieceArray;
  const diceTemplate = {
    item: "dice",
    type: piece.type,
    value: piece.value ? piece.value : undefined,
    diceMax: piece.diceMax,
    id: "",
    // id: piece.id,
  };
  const {
    duplicateAtLv,
    lvlsToRaiseValue,
    lvlsToRaiseDiceMax,
    value,
    diceMax,
  } = piece;
  let spilloverLv = lv - existSinceLv + 1;
  const maxLv = duplicateAtLv || false;
  let iteration = 1;
  while (maxLv && spilloverLv > maxLv) {
    // make maxed dice  --------------------------------------------------
    let currentPiece = { ...JSON.parse(JSON.stringify(diceTemplate)) };
    if (lvlsToRaiseDiceMax) {
      const newDiceMax =
        (diceMax || 2) + Math.floor(maxLv / lvlsToRaiseDiceMax);
      currentPiece.diceMax = newDiceMax;
    }
    if (lvlsToRaiseValue) {
      const newValue = (value || 0) + Math.floor(maxLv / lvlsToRaiseValue);
      currentPiece.value = newValue;
    }
    // --------------------------------------------------
    currentPiece.id = `${currentPiece.id}|iteration|${iteration}`;
    // console.log(
    //   `Item.js > levelDiceStat > Leveling piece - adding full level [${maxLv}] piece.`,
    //   currentPiece
    // );
    pieceArray.push({ ...currentPiece });
    iteration += 1;
    spilloverLv = spilloverLv - duplicateAtLv;
  }
  if (spilloverLv > 0) {
    // make not full dice  ----------------------------------------------
    let currentPiece = { ...JSON.parse(JSON.stringify(diceTemplate)) };
    if (lvlsToRaiseDiceMax) {
      const newDiceMax =
        (diceMax || 2) + Math.floor(spilloverLv / lvlsToRaiseDiceMax);
      currentPiece.diceMax = newDiceMax;
    }
    if (lvlsToRaiseValue) {
      const newValue =
        (value || 0) + Math.floor(spilloverLv / lvlsToRaiseValue);
      currentPiece.value = newValue;
    }
    // --------------------------------------------------
    currentPiece.id = `${currentPiece.id}|last`;
    // console.log(
    //   `Item.js > levelDiceStat > Leveling piece - adding last level [${spilloverLv}] piece:`,
    //   currentPiece
    // );
    pieceArray.push({ ...currentPiece });
  }
  // console.log(
  //   `Item.js > levelDiceStat > finished leveling piece, pieceArray: `
  // );
  // console.table(pieceArray);
  return pieceArray;
};

const levelItem = (itemm, lvv) => {
  const item = JSON.parse(JSON.stringify(itemm));
  const lv = lvv || itemm.lv || 1;
  console.log(`Item.js > levelItem Lv[${lv}] ID: ${item.id}`);
  const itemTemplate = {
    itemId: item.id,
    name: item.name,
    lv: lv,
    alt: item.alt,
    skill: item.skill,
    statsTxT: item.statsTxT,
  };
  const stats = item.stats || [];
  let leveledNondices = [];
  let leveledDices = [];
  for (let i = 0; i < stats.length; i++) {
    const piece = JSON.parse(JSON.stringify(stats[i]));
    // console.log(`Item.js > levelItem checking item.stats[${i}] piece:`, piece);
    const pieceId = ``;
    if (piece.item === "dice") {
      leveledDices = leveledDices.concat(levelDiceStat(piece, lv));
      continue;
    } else {
      leveledNondices = leveledNondices.concat(levelNondiceStat(piece, lv));
      continue;
    }
  }
  console.log(
    `Item.js > levelItem, setting id for dices and nondices Lv[${lv}] ID: ${item.id}`
  );
  leveledNondices = leveledNondices.map((piece, index) => {
    return { ...piece, id: `${item.id}|${piece.id}|nondice|${index}` };
  });
  leveledDices = leveledDices.map((piece, index) => {
    return { ...piece, id: `${item.id}|${piece.id}|dice|${index}` };
  });
  console.log(
    `Item.js > levelItem ${item.id} : dices and nondices`,
    leveledDices,
    leveledNondices
  );
  return {
    ...itemTemplate,
    dices: [...leveledDices],
    nondices: [...leveledNondices],
  };
};

export const Items = {
  getItemById({ id, lv = 1 }) {
    // console.log(`Item.js .getItemById(${id},${lv})`);
    const baseItem = getBaseEqById(id);
    let leveledItem = JSON.parse(JSON.stringify(levelItem(baseItem, lv)));
    return JSON.parse(JSON.stringify(leveledItem));
  },

  getStartingEqSet() {
    let startingEq = [];
    STARTING_EQ.forEach((eqId) => {
      // const found = this.getItemById({ id: eqId });
      // console.log(
      //   `Item.js .getStartingEqSet() loading ${eqId}, adding:`,
      //   found
      // );
      startingEq.push({
        ...JSON.parse(JSON.stringify(this.getItemById({ id: eqId }))),
        selected: true,
      });
    });
    return startingEq;
  },

  getItemsFromList(list) {
    return [...list.map((i) => this.getItemById({ id: i.id, lv: i.lv }))];
  },
};

// {
//   itemId: "Legacy Sword|COMBO SLASH|",
//   name: "Legacy Sword",
//   alt: "🗡️",
//   skill: {
//     name: "COMBO SLASH",
//     txt: "Change speed/strength/dexterity dice into slashed+1",
//     id: "Legacy Sword|COMBO SLASH|",
//   },
//   statsTxT: "~ +1/3 per lv",
//   stats: [
//     {
//       item: "dice",
//       diceMax: 8,
//       // value: undefined,
//       type: "slashed",
//       existSinceLv: 1,
//       duplicateAtLv: 12,
//       // lvlsToRaiseValue: 3,
//       lvlsToRaiseDiceMax: 3,
//     },
//     {
//       item: "dice",
//       diceMax: 4,
//       // value: undefined,
//       type: "speed",
//       existSinceLv: 5,
//       duplicateAtLv: 10,
//       // lvlsToRaiseValue: 3,
//       // lvlsToRaiseDiceMax: 10,
//     },
//   ],
//   dices: [],
//   nondices: [],
// },
