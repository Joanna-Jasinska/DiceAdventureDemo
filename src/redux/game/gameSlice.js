import { createSlice } from "@reduxjs/toolkit";
import {
  resetGame,
  playerLvUp,
  LvUpDungeonById,
  moveCaravan,
  addGold,
  setSelectDungeon,
} from "./operations";

const initialState = {
  selectedDungeonId: "dungeon|2|",
  currentDungeons: [
    "dungeon|1|1",
    "dungeon|2|2",
    "dungeon|3|3",
    "dungeon|4|4",
    "dungeon|5|5",
  ],
  possibleDungeons: [],
  dungeonLevels: {
    "dungeon|1|": 1,
    "dungeon|2|": 1,
    "dungeon|3|": 1,
    "dungeon|4|": 1,
    "dungeon|5|": 1,
  },
  playerLv: 5,
  maxEqLv: 2,
  spareLvUps: 0,
  gold: 200,
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
    [resetGame.pending]: handlePending,
    [resetGame.rejected]: handleRejected,
    [resetGame.fulfilled](state, action) {
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.currentDungeons = initialState.currentDungeons;
      // needs to be fixed to generate all possible dungeon list
      state.possibleDungeons = initialState.possibleDungeons;
      // state.possibleDungeons = action.payload.possibleDungeons;
      state.selectedDungeonId = initialState.selectedDungeonId;
      state.selectedEnemyID = initialState.selectedEnemyID;
      state.dungeonLevels = initialState.dungeonLevels;
      state.playerLv = initialState.playerLv;
      state.maxEqLv = initialState.maxEqLv;
      state.spareLvUps = initialState.spareLvUps;
      state.gold = initialState.gold;
    },

    [playerLvUp.pending]: handlePending,
    [playerLvUp.rejected]: handleRejected,
    [playerLvUp.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.playerLv = action.payload.playerLv;
      state.spareLvUps = action.payload.spareLvUps;
      state.maxEqLv = action.payload.maxEqLv;
    },

    [LvUpDungeonById.pending]: handlePending,
    [LvUpDungeonById.rejected]: handleRejected,
    [LvUpDungeonById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dungeonLevels = action.payload;
    },

    [setSelectDungeon.pending]: handlePending,
    [setSelectDungeon.rejected]: handleRejected,
    [setSelectDungeon.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedDungeonId = action.payload;
    },

    [addGold.pending]: handlePending,
    [addGold.rejected]: handleRejected,
    [addGold.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.gold = action.payload;
    },

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
