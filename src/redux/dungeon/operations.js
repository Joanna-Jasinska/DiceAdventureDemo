import { createAsyncThunk } from "@reduxjs/toolkit";
// import { BASE_EQUIPMENT } from "../../data/eq";

export const clearDungeon = createAsyncThunk(
  "dungeon/cleardungeon",
  async (_, thunkAPI) => {
    return true;
  }
);

export const beginDungeon = createAsyncThunk(
  "dungeon/begindungeon",
  async (init, thunkAPI) => {
    return init;
  }
);

export const packEquipment = createAsyncThunk(
  "dungeon/rollAllDices",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const eqTaken = state.equipment.items.all.filter(
      (item) => item.stats.selected
    );
    // const packed = eqTaken.map((i) => {
    //   const unpacked = {
    //     dices: [],
    //     name: i.name,
    //     // icon
    //   };

    //   return unpacked;
    // });
    return eqTaken;
  }
);
