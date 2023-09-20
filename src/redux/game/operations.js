import { createAsyncThunk } from "@reduxjs/toolkit";
import { JOURNEY } from "data/journey";
import { LVLS_REQ_PER_MAX_EQ_LV, PATHS_AMOUNT } from "data/settings";
// import { getRandomNum } from "objects/Dice";

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
    const journey = state.game.journey || 0;
    const newJourney = JOURNEY.length > journey ? journey + 1 : journey;
    const spareLvUps = state.game.spareLvUps + 1;
    const maxEqLv = Math.floor(playerLv / LVLS_REQ_PER_MAX_EQ_LV);
    const currentDungeons = [
      ...JOURNEY.slice(newJourney, PATHS_AMOUNT + newJourney),
    ];
    return {
      playerLv,
      spareLvUps,
      maxEqLv,
      currentDungeons,
      journey: newJourney,
    };
  }
);

export const LvUpDungeonById = createAsyncThunk(
  "game/LvUpDungeonById",
  async (id, thunkAPI) => {
    // const state = thunkAPI.getState().game;
    // const { dungeonLevels } = state;
    // return { ...dungeonLevels, [id]: dungeonLevels[id] + 1 };
    return id;
  }
);

export const lvUpAlly = createAsyncThunk(
  "game/lvUpAlly",
  async (allyType, thunkAPI) => {
    // const state = thunkAPI.getState().game;
    // const { dungeonLevels } = state;
    // return { ...dungeonLevels, [id]: dungeonLevels[id] + 1 };
    return allyType;
  }
);

export const gainSpLvUps = createAsyncThunk(
  "game/gainSpLvUps",
  async (num, thunkAPI) => {
    return num;
  }
);

export const remove10SpLvUps = createAsyncThunk(
  "game/remove_10_SpLvUps",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().game;
    if (!state.spareLvUps || state.spareLvUps < 10) {
      return thunkAPI.rejectWithValue("Not enough Spare LevelUPs");
    }
    return true;
  }
);

export const remove1SpLvUp = createAsyncThunk(
  "game/remove_1_SpLvUp",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().game;
    if (!state.spareLvUps || state.spareLvUps < 1) {
      return thunkAPI.rejectWithValue("Not enough Spare LevelUPs");
    }
    return true;
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
    return { gold: gold + goldEarned };
  }
);
export const payGold = createAsyncThunk("game/payGold", async (g, thunkAPI) => {
  const state = thunkAPI.getState().game;
  const { gold } = state;
  if (gold - g < 0) thunkAPI.rejectWithValue("Not enough gold.");
  return g;
});

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
