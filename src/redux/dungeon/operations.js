import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const beginDungeon = createAsyncThunk(
  "dungeon/begin",
  async (init, thunkAPI) => {
    return init;
  }
);

export const setLv = createAsyncThunk("dungeon/setLv", async (lv, thunkAPI) => {
  return lv;
});

export const startRandomDungeon = createAsyncThunk(
  "dungeon/random",
  async (_, thunkAPI) => {
    const myDungeon = { ...Dungeon }.getRandom();
    return myDungeon;
  }
);

export const engageRandomEnemy = createAsyncThunk(
  "dungeon/engameRandomEnemy",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const randomEnemyId = await state.dungeon.enemies[0][2];
    return randomEnemyId;
  }
);
export const readyToEnter = createAsyncThunk(
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
