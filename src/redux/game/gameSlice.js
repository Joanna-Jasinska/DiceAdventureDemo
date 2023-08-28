import { createSlice } from "@reduxjs/toolkit";
import {
  resetGame,
  // clearDungeon,
  // beginDungeon,
  // packEquipment,
  // startRandomDungeon,
  // readyToEnter,
  // setLv,
  // engageRandomEnemy,
  // engageEnemyBySlot,
} from "./operations";

const initialState = {
  currentDungeons: [],
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
// const deleteContactByIdPending = state => {
//   state.isLoading = true;
// };
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
      state.possibleDungeons = initialState.possibleDungeons;
      state.selectedEnemyID = initialState.selectedEnemyID;
    },

    [setLv.pending]: handlePending,
    [setLv.rejected]: handleRejected,
    [setLv.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.lv = action.payload;
    },

    [engageRandomEnemy.pending]: handlePending,
    [engageRandomEnemy.rejected]: handleRejected,
    [engageRandomEnemy.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedEnemyID = action.payload;
    },

    [engageEnemyBySlot.pending]: handlePending,
    [engageEnemyBySlot.rejected]: handleRejected,
    [engageEnemyBySlot.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedEnemyID = action.payload;
    },

    [readyToEnter.pending]: handlePending,
    [readyToEnter.rejected]: handleRejected,
    [readyToEnter.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.readyToEnter = true;
    },

    [beginDungeon.pending]: handlePending,
    [beginDungeon.rejected]: handleRejected,
    [beginDungeon.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.endTurn = false;
      state.name = action.payload.name;
      state.eventName = action.payload.eventName;
      state.background = action.payload.background;
      state.items = action.payload.items;
      state.enemies = action.payload.enemies;
      state.bosses = action.payload.bosses;
      state.ally = action.payload.ally;
      state.inDungeon = true;
      state.readyToEnter = false;
      state.player = action.payload.player;
    },

    [startRandomDungeon.pending]: handlePending,
    [startRandomDungeon.rejected]: handleRejected,
    [startRandomDungeon.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.endTurn = false;
      state.name = action.payload.name;
      state.eventName = action.payload.eventName;
      state.background = action.payload.background;
      state.items = action.payload.items;
      state.enemies = action.payload.enemies;
      state.bosses = action.payload.bosses;
      state.ally = action.payload.ally;
      state.inDungeon = true;
      state.readyToEnter = false;
      state.player = action.payload.player;
    },

    [packEquipment.pending]: handlePending,
    [packEquipment.rejected]: handleRejected,
    [packEquipment.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
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
