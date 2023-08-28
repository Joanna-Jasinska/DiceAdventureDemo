import { createSlice } from "@reduxjs/toolkit";
import {
  clearCombat,
  beginCombat,
  rollAllDices,
  endTurn,
  updateDice,
  addDice,
  deleteDice,
  selectDice,
  toggleDiceSelection,
  deselectAllDices,
} from "./operations";

const initialState = {
  rolledDices: [],
  dices: [],
  // enemy: {
  //   name: "Enemy",
  // },
  isLoading: false,
  error: null,
  inCombat: false,
  // enteringCombat: false,
  endTurn: false,
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = (state) => {
  state.isLoading = true;
};

const combatSlice = createSlice({
  name: "combat",
  initialState,
  extraReducers: {
    [clearCombat.pending]: handlePending,
    [clearCombat.rejected]: handleRejected,
    [clearCombat.fulfilled](state, action) {
      state.inCombat = false;
      state.isLoading = false;
      state.error = null;
      state.dices = initialState.dices;
      state.rolledDices = initialState.rolledDices;
      state.endTurn = false;
      // state.enemy = initialState.enemy;
      // state.enteringCombat = false;
    },

    [beginCombat.pending]: handlePending,
    [beginCombat.rejected]: handleRejected,
    [beginCombat.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dices = action.payload.dices;
      // state.dices = [{ item: "dice" }, {}, {}, {}];
      state.rolledDices = action.payload.rolledDices;
      // state.rolledDices = [{ item: "dice" }, { item: "dice" }, {}, {}, {}, {}];
      // state.enemy = action.payload.enemy;
      state.endTurn = false;
      state.inCombat = true;
    },

    [toggleDiceSelection.pending]: handlePending,
    [toggleDiceSelection.rejected]: handleRejected,
    [toggleDiceSelection.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices = action.payload;
    },

    [selectDice.pending]: handlePending,
    [selectDice.rejected]: handleRejected,
    [selectDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices = action.payload;
    },

    [rollAllDices.pending]: handlePending,
    [rollAllDices.rejected]: handleRejected,
    [rollAllDices.fulfilled](state, action) {
      state.isLoading = false;
      state.rolledDices = action.payload;
    },

    [deselectAllDices.pending]: handlePending,
    [deselectAllDices.rejected]: handleRejected,
    [deselectAllDices.fulfilled](state, action) {
      state.isLoading = false;
      state.rolledDices = action.payload;
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
      state.rolledDices.all[action.payload.stats.index] = {
        ...state.rolledDices.all[action.payload.stats.index],
        ...action.payload,
      };
    },

    [addDice.pending]: handlePending,
    [addDice.rejected]: handleRejected,
    [addDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices.all.push(action.payload);
    },

    [deleteDice.pending]: handlePending,
    [deleteDice.rejected]: handleRejected,
    [deleteDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices.all = state.rolledDices.all.filter((dice) => {
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
