import { createSlice } from "@reduxjs/toolkit";
import { clearDungeon, beginDungeon, packEquipment } from "./operations";

const initialState = {
  quests: [],
  items: [],
  enemy: {
    name: "Enemy",
  },
  isLoading: false,
  error: null,
  inDungeon: false,
  endTurn: false,
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
      state = initialState;
    },

    [beginDungeon.pending]: handlePending,
    [beginDungeon.rejected]: handleRejected,
    [beginDungeon.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.items;
      state.quests = action.payload.quests;
      // state.dices= action.payload.dices;
      state.enemy = action.payload.enemy;
      state.endTurn = false;
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
