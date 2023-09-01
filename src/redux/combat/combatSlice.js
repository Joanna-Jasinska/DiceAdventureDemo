import { createSlice } from "@reduxjs/toolkit";
import {
  clearCombat,
  beginCombat,
  rollAllDices,
  endTurn,
  updateDice,
  addDice,
  addRolledDice,
  addMultipleRolledDice,
  copyAllEnemyDicesToBag,
  deleteRolledDice,
  selectDice,
  toggleDiceSelection,
  deselectAllDices,
  enterSummary,
} from "./operations";

const initialState = {
  rolledDices: [],
  dices: [],
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

    [enterSummary.pending]: handlePending,
    [enterSummary.rejected]: handleRejected,
    [enterSummary.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.inCombat = 'summary';
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
      state.rolledDices[action.payload.stats.index] = {
        ...state.rolledDices[action.payload.stats.index],
        ...action.payload,
      };
    },

    [addDice.pending]: handlePending,
    [addDice.rejected]: handleRejected,
    [addDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dices.push(action.payload);
    },

    [addRolledDice.pending]: handlePending,
    [addRolledDice.rejected]: handleRejected,
    [addRolledDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices.push(action.payload);
    },

    [addMultipleRolledDice.pending]: handlePending,
    [addMultipleRolledDice.rejected]: handleRejected,
    [addMultipleRolledDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices = action.payload;
    },

    [copyAllEnemyDicesToBag.pending]: handlePending,
    [copyAllEnemyDicesToBag.rejected]: handleRejected,
    [copyAllEnemyDicesToBag.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices = action.payload;
    },

    [deleteRolledDice.pending]: handlePending,
    [deleteRolledDice.rejected]: handleRejected,
    [deleteRolledDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.rolledDices = state.rolledDices.filter((dice) => {
        return !(dice.id === action.payload.id);
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
