import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomNum } from "objects/Dice";
import { Dungeon } from "objects/Dungeon";
// import { BASE_EQUIPMENT } from "../../data/eq";

//   moveCaravan,

export const resetGame = createAsyncThunk("game/reset", async (_, thunkAPI) => {
  return true;
});


export const setGameError = createAsyncThunk(
  "game/setError",
  async (err, thunkAPI) => {
    return err;
  }
);

export const playerLvUp = createAsyncThunk(
  "game/playerLvUp",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const playerLv = state.game.playerLv + 1;
    const spareLvUps = state.game.spareLvUps + 1;
    const maxEqLv = Math.floor(playerLv / 5) + 1;
    return { playerLv, spareLvUps, maxEqLv };
  }
);

export const LvUpDungeonById = createAsyncThunk(
  "game/LvUpDungeonById",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState().game;
    const { dungeonLevels } = state;
    return { ...dungeonLevels, [id]: dungeonLevels[id] + 1 };
  }
);
export const moveCaravan = createAsyncThunk(
  "game/moveCaravan",
  async (_, thunkAPI) => {
    // not working yet
    const state = thunkAPI.getState().game;
    const { currentDungeons, possibleDungeons } = state;
    return { currentDungeons, possibleDungeons };
  }
);
export const gainFromDungeonSummary = createAsyncThunk(
  "game/gainFromDungeonSummary",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { gold } = state.game;
    const { goldEarned } = state.dungeon;
    // const { lv, startedLv, goldEarned } = state.dungeon;
    // const levelsEarned = startedLv && lv ? Math.max(0, startedLv - lv) : 0;
    // dungeonLevels{}
    // selectedDungeonId
    return {gold: gold+goldEarned};
  }
);
// export const addGold = createAsyncThunk("game/addGold", async (g, thunkAPI) => {
//   const state = thunkAPI.getState().game;
//   const { gold } = state;
//   if (gold + g < 0) thunkAPI.rejectWithValue("Not enough gold.");
//   return gold + g;
// });
export const setSelectDungeon = createAsyncThunk(
  "game/setSelectDungeon",
  async (id, thunkAPI) => {
    return id;
  }
);
