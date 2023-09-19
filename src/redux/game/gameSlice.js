import { createSlice } from "@reduxjs/toolkit";
import {
  resetGame,
  playerLvUp,
  LvUpDungeonById,
  moveCaravan,
  gainFromDungeonSummary,
  payGold,
  setSelectDungeon,
  setGameError,
  remove1SpLvUp,
  remove10SpLvUps,
  gainSpLvUps,
  lvUpAlly,
} from "./operations";
import {
  PLAYER_STARTING_LEVELUPS,
  PLAYER_STARTING_MAX_EQ_LV,
  STARTING_DUNGEONS,
  STARTING_DUNGEON_LEVELS,
} from "data/settings";
import { JOURNEY } from "data/journey";

const initialState = {
  error: null,
  isLoading: false,
  selectedDungeonId: 0,
  playerLv: 1,
  journey: 0,
  maxEqLv: PLAYER_STARTING_MAX_EQ_LV,
  spareLvUps: PLAYER_STARTING_LEVELUPS,
  gold: 200,
  currentDungeons: [...STARTING_DUNGEONS],
  possibleDungeons: [],
  dungeonLevels: { ...STARTING_DUNGEON_LEVELS },
  allies: {
    wizard: { lv: 0 },
    barbarian: { lv: 0 },
    aristocrat: { lv: 0 },
    rogue: { lv: 0 },
    hunter: { lv: 0 },
  },
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = (state) => {
  state.isLoading = true;
};
const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: {
    // !!!AAA!!! handlePending with loading=true  loops this reducer
    [resetGame.pending]: () => {},
    [resetGame.rejected]: handleRejected,
    [resetGame.fulfilled](state, action) {
      // state.currentDungeons = initialState.currentDungeons;
      state.currentDungeons = initialState.currentDungeons;
      // needs to be fixed to generate all possible dungeon list
      state.possibleDungeons = initialState.possibleDungeons;
      // state.possibleDungeons = action.payload.possibleDungeons;
      state.selectedDungeonId = initialState.selectedDungeonId;
      state.dungeonLevels = initialState.dungeonLevels;
      state.playerLv = initialState.playerLv;
      state.maxEqLv = initialState.maxEqLv;
      state.spareLvUps = initialState.spareLvUps;
      state.gold = initialState.gold;
      state.allies = initialState.allies;
      state.error = null;
      state.isLoading = false;
      state.journey = initialState.journey;
    },

    [setGameError.pending]: handlePending,
    [setGameError.rejected]: handleRejected,
    [setGameError.fulfilled](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [playerLvUp.pending]: handlePending,
    [playerLvUp.rejected]: handleRejected,
    [playerLvUp.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.playerLv = state.playerLv + 1;
      if (state.journey < JOURNEY.length) {
        state.journey = state.journey + 1;
      }
      state.spareLvUps = state.spareLvUps + 1;
      // state.playerLv = action.payload.playerLv;
      // state.spareLvUps = action.payload.spareLvUps;
      state.maxEqLv = action.payload.maxEqLv + PLAYER_STARTING_MAX_EQ_LV;
      state.currentDungeons = action.payload.currentDungeons;
    },

    [lvUpAlly.pending]: handlePending,
    [lvUpAlly.rejected]: handleRejected,
    [lvUpAlly.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.allies[action.payload].lv = state.allies[action.payload].lv + 1;
    },

    [LvUpDungeonById.pending]: handlePending,
    [LvUpDungeonById.rejected]: handleRejected,
    [LvUpDungeonById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.dungeonLevels = action.payload;
      state.dungeonLevels = {
        ...state.dungeonLevels,
        [action.payload]: state.dungeonLevels[action.payload] + 1,
      };
      // state.spareLvUps = state.spareLvUps + 1;
    },

    [gainSpLvUps.pending]: handlePending,
    [gainSpLvUps.rejected]: handleRejected,
    [gainSpLvUps.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.spareLvUps = state.spareLvUps + action.payload;
    },

    [remove1SpLvUp.pending]: handlePending,
    [remove1SpLvUp.rejected]: handleRejected,
    [remove1SpLvUp.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.spareLvUps = state.spareLvUps - 1;
    },

    [remove10SpLvUps.pending]: handlePending,
    [remove10SpLvUps.rejected]: handleRejected,
    [remove10SpLvUps.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.spareLvUps = state.spareLvUps - 10;
    },

    [setSelectDungeon.pending]: handlePending,
    [setSelectDungeon.rejected]: handleRejected,
    [setSelectDungeon.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedDungeonId = action.payload;
    },

    [gainFromDungeonSummary.pending]: handlePending,
    [gainFromDungeonSummary.rejected]: handleRejected,
    [gainFromDungeonSummary.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.gold = action.payload.gold;
      // state.dungeonLevels = action.payload.dungeonLevels;
    },

    [payGold.pending]: handlePending,
    [payGold.rejected]: handleRejected,
    [payGold.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.gold = state.gold - action.payload;
    },

    // [addGold.pending]: handlePending,
    // [addGold.rejected]: handleRejected,
    // [addGold.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.gold = action.payload;
    // },

    [moveCaravan.pending]: handlePending,
    [moveCaravan.rejected]: handleRejected,
    [moveCaravan.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.currentDungeons = action.payload.currentDungeons;
      state.possibleDungeons = action.payload.possibleDungeons;
    },

    // [deleteContactById.pending]: deleteContactByIdPending,
    // [deleteContactById.rejected]: handleRejected,
    // [deleteContactById.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts = state.contacts.filter(
    //     item => item.id !== action.payload.id
    //   );
    // },
    // [addContact.pending]: handlePending,
    // [addContact.rejected]: handleRejected,
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = [...state.equipment, action.payload];
    // },
  },
});
export const gameReducer = gameSlice.reducer;
