import { createSlice } from "@reduxjs/toolkit";
import {
  damageEnemy,
  loadEnemy,
  placeBodyPieceDice,
  deleteAllBodyDices,
  deleteAllPieceDices,
  // withdrawDice,
  // placeDice,
  // deleteAllDices,
  // withdrawAllDices,
  die,
  // autoPlaceAllDices,
  // changeStatus,
} from "./operations";

const initialState = {
  name: "Mysterious Enemy",
  id: "ELEMENTALS|green|Mysterious Enemy",
  life: 9,
  maxLife: 10,
  isBoss: false,
  gold: 100,
  portrait: {
    frontIcon: "👀",
    sideIcon: "🌳",
    bgSideIcon: "🌲",
    backIcon: "🏺",
    bgIcon: "🌳",
    filterColor: "#005a124a",
    bgColor: "#ddd900",
  },
  status: [],
  body: [{}, {}, {}, {}],
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = (state) => {
  state.isLoading = true;
};

const enemySlice = createSlice({
  name: "enemy",
  initialState,
  extraReducers: {
    [damageEnemy.pending]: handlePending,
    [damageEnemy.rejected]: handleRejected,
    [damageEnemy.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.life = state.life - action.payload;
    },

    [die.pending]: handlePending,
    [die.rejected]: handleRejected,
    [die.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.life = 0;
    },
    // placeBodyPieceDice{ pieceId, dice }
    [placeBodyPieceDice.pending]: handlePending,
    [placeBodyPieceDice.rejected]: handleRejected,
    [placeBodyPieceDice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.body = action.payload;
    },
    [deleteAllBodyDices.pending]: handlePending,
    [deleteAllBodyDices.rejected]: handleRejected,
    [deleteAllBodyDices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.body = action.payload;
    },

    [deleteAllPieceDices.pending]: handlePending,
    [deleteAllPieceDices.rejected]: handleRejected,
    [deleteAllPieceDices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.body = action.payload;
      // state.body = state.body.map((p) =>
      //   p.id !== action.payload ? p : { ...p, dices: [] }
      // );
    },

    // [clearEnemy.pending]: handlePending,
    // [clearEnemy.rejected]: handleRejected,
    // [clearEnemy.fulfilled](state, action) {
    //   state.isLoading = initialState.isLoading;
    //   state.error = initialState.error;
    //   state.name = initialState.name;
    //   state.eventName = initialState.eventName;
    //   state.items = initialState.items;
    //   state.enemies = initialState.enemies;
    //   state.bosses = initialState.bosses;
    //   state.ally = initialState.ally;
    //   state.inEnemy = initialState.inEnemy;
    //   state.readyToEnter = initialState.readyToEnter;
    // },

    [loadEnemy.pending]: handlePending,
    [loadEnemy.rejected]: handleRejected,
    [loadEnemy.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.life = action.payload.life;
      state.maxLife = action.payload.maxLife;
      state.isBoss = action.payload.isBoss;
      state.gold = action.payload.gold;
      state.portrait = { ...action.payload.portrait };
      state.status = action.payload.status;
      state.body = action.payload.body;
    },

    // [withdrawDice.pending]: handlePending,
    // [withdrawDice.rejected]: handleRejected,
    // [withdrawDice.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.body = [...action.payload];
    // },

    // [placeDice.pending]: handlePending,
    // [placeDice.rejected]: handleRejected,
    // [placeDice.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.body = [...action.payload];
    // },

    // [deleteAllDices.rejected]: handleRejected,
    // [deleteAllDices.pending]: handlePending,
    // [deleteAllDices.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.body = [...action.payload];
    // },

    // [withdrawAllDices.rejected]: handleRejected,
    // [withdrawAllDices.pending]: handlePending,
    // [withdrawAllDices.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.body = [...action.payload];
    // },

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
export const enemyReducer = enemySlice.reducer;
