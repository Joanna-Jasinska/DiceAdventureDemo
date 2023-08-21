import { createSlice } from "@reduxjs/toolkit";
import {
  clearCombat,
  beginCombat,
  rollAllDices,
  endTurn,
  updateDice,
  addDice,
  deleteDice,
} from "./operations";

const initialState = {
  quests: [],
  dices: [],
  enemy: {
    name: "Enemy",
  },
  isLoading: false,
  error: null,
  inCombat: false,
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
const combatSlice = createSlice({
  name: "combat",
  initialState,
  extraReducers: {
    [clearCombat.pending]: handlePending,
    [clearCombat.rejected]: handleRejected,
    [clearCombat.fulfilled](state, action) {
      state = initialState;
    },

    [beginCombat.pending]: handlePending,
    [beginCombat.rejected]: handleRejected,
    [beginCombat.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.items;
      state.quests = action.payload.quests;
      // state.dices= action.payload.dices;
      state.enemy = action.payload.enemy;
      state.endTurn = false;
    },

    [rollAllDices.pending]: handlePending,
    [rollAllDices.rejected]: handleRejected,
    [rollAllDices.fulfilled](state, action) {
      state.isLoading = false;
      state.dices = action.payload;
    },

    [endTurn.pending]: handlePending,
    [endTurn.rejected]: handleRejected,
    [endTurn.fulfilled](state, action) {
      state.isLoading = false;
      state.endTurn = true;
    },

    [updateDice.pending]: handlePending,
    [updateDice.rejected]: handleRejected,
    [updateDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dices.all[action.payload.stats.index] = {
        ...state.dices.all[action.payload.stats.index],
        ...action.payload,
      };
    },

    [addDice.pending]: handlePending,
    [addDice.rejected]: handleRejected,
    [addDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dices.all.push(action.payload);
    },

    [deleteDice.pending]: handlePending,
    [deleteDice.rejected]: handleRejected,
    [deleteDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dices.all = state.dices.all.filter((dice) => {
        return !(
          dice.stats.id === action.payload.stats.id ||
          dice.stats.index === action.payload.stats.index
        );
      });
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
export const combatReducer = combatSlice.reducer;
