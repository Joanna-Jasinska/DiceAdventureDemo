import { createSlice } from "@reduxjs/toolkit";
import {
  clearDungeon,
  beginDungeon,
  packEquipment,
  startRandomDungeon,
  readyToEnter,
  setLv,
} from "./operations";

const initialState = {
  name: "Dungeon",
  eventName: "",
  id: "dungeon|1|",
  lv: 1,
  error: null,
  isLoading: false,
  inDungeon: false,
  readyToEnter: false,
  // endTurn: false,
  items: [],
  bosses: [],
  ally: {},
  enemies: [[{}], [], []],
  background: {
    icon: "🌲",
    eventIcon: "🌲",
    flavorIcon: "🌳",
    bgColor: "#3ea413",
  },
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
const dungeonSlice = createSlice({
  name: "dungeon",
  initialState,
  extraReducers: {
    [clearDungeon.pending]: handlePending,
    [clearDungeon.rejected]: handleRejected,
    [clearDungeon.fulfilled](state, action) {
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      // state.endTurn = initialState.endTurn;
      state.name = initialState.name;
      state.eventName = initialState.eventName;
      state.background = initialState.background;
      state.items = initialState.items;
      state.enemies = initialState.enemies;
      state.bosses = initialState.bosses;
      state.ally = initialState.ally;
      state.inDungeon = initialState.inDungeon;
      state.readyToEnter = initialState.readyToEnter;
    },

    [setLv.pending]: handlePending,
    [setLv.rejected]: handleRejected,
    [setLv.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.lv = action.payload;
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
export const dungeonReducer = dungeonSlice.reducer;
