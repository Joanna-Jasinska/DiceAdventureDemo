import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDungeon } from "data/dungeons";
import { getRandomNum } from "objects/Dice";
import { Dungeon } from "objects/Dungeon";
// import { BASE_EQUIPMENT } from "../../data/eq";

export const clearDungeon = createAsyncThunk(
  "dungeon/clear",
  async (_, thunkAPI) => {
    // const myDungeon = { ...Dungeon }.getRandom();
    return true;
    // return thunkAPI.fulfillWithValue(null);
  }
);

// export const beginDungeon = createAsyncThunk(
//   "dungeon/begin",
//   async (init, thunkAPI) => {
//     const myDungeon = init;
//     const myPlayer = {
//       life: 12,
//       maxLife: 12,
//       status: {},
//     };
//     return { ...myDungeon, player: myPlayer };
//   }
// );

export const setLv = createAsyncThunk("dungeon/setLv", async (lv, thunkAPI) => {
  return lv;
});

export const startDungeonById = createAsyncThunk(
  "dungeon/startSelected",
  async (id, thunkAPI) => {
    const myDungeon = getDungeon(id);
    // console.log(
    //   `dungeon/startSelected requested [${id}] gained [${myDungeon.id}]`
    // );
    // !!!AAA!!! should load player life and statuses depending on eq
    const myPlayer = {
      life: 10,
      maxLife: 16,
      status: {},
    };
    const state = thunkAPI.getState();
    const myLv = state.game.dungeonLevels[myDungeon.id] || 0;
    return {
      ...myDungeon,
      player: myPlayer,
      startedLv: myLv,
      lv: myLv,
      goldEarned: 0,
    };
  }
);

// export const startRandomDungeon = createAsyncThunk(
//   "dungeon/random",
//   async (_, thunkAPI) => {
//     const myDungeon = { ...Dungeon }.getRandom();
//     const myPlayer = {
//       life: 10,
//       maxLife: 16,
//       status: {},
//     };
//     return {
//       ...myDungeon,
//       player: myPlayer,
//       startedLv: myDungeon.lv,
//       goldEarned: 0,
//     };
//   }
// );

// export const engageRandomEnemy = createAsyncThunk(
//   "dungeon/engameRandomEnemy",
//   async (_, thunkAPI) => {
//     const n = getRandomNum(0, (await state.dungeon.enemies.length) - 1);
//     const state = thunkAPI.getState();
//     const randomEnemyId = await state.dungeon.enemies[n][
//       getRandomNum(0, state.dungeon.enemies[n].length - 1)
//     ];
//     return randomEnemyId;
//   }
// );

export const getEnemyGold = createAsyncThunk(
  "dungeon/getEnemyGold",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const eGold = state.enemy.gold;
    const dGold = state.dungeon.goldEarned;
    return dGold + eGold;
  }
);

export const engageEnemyBySlot = createAsyncThunk(
  "dungeon/engameEnemyBySlot",
  async (slot, thunkAPI) => {
    const state = thunkAPI.getState();
    const dungeons = state.dungeon.enemies[slot];
    const rn = getRandomNum(0, state.dungeon.enemies[slot].length - 1);
    const enemyId = await dungeons[rn];
    console.log(`Engaging ${enemyId} from dungeon[${slot}][${rn}]`);
    return enemyId;
  }
);
export const getReadyToEnter = createAsyncThunk(
  "dungeon/ready",
  async (_, thunkAPI) => {
    return true;
  }
);

export const packEquipment = createAsyncThunk(
  "dungeon/packEquipment",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const eqTaken = state.equipment.all.filter((item) => item.selected);
    if (eqTaken.length > 5)
      return thunkAPI.rejectWithValue("Too many items equipped");
    return eqTaken;
  }
);
