import { createSlice } from "@reduxjs/toolkit";
import {
  clearDungeon,
  packEquipment,
  startDungeonById,
  getReadyToEnter,
  setLv,
  getEnemyGold,
  engageEnemyBySlot,
} from "./operations";

const initialState = {
  name: "Lost Path",
  eventName: "",
  id: "dungeon|1|",
  lv: 1,
  startedLv: 1,
  goldEarned: 0,
  player: {
    life: 15,
    maxLife: 15,
    status: {},
  },
  slotsDefeated: [false, false, false, false],
  error: null,
  isLoading: false,
  inDungeon: false,
  readyToEnter: false,
  items: [],
  bosses: ["ELEMENTALS|green|Mysterious Enemy"],
  ally: {},
  enemies: [
    ["ELEMENTALS|green|Mysterious Enemy"],
    ["ELEMENTALS|green|Mysterious Enemy"],
    ["ELEMENTALS|green|Mysterious Enemy"],
  ],
  background: {
    icon: "🌲",
    eventIcon: "🌲",
    flavorIcon: "🌳",
    bgColor: "#3ea413",
  },
  selectedEnemyID: "ELEMENTALS|green|Mysterious Enemy",
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = (state) => {
  state.isLoading = true;
};
const dungeonSlice = createSlice({
  name: "dungeon",
  initialState,
  extraReducers: {
    [clearDungeon.pending]: handlePending,
    [clearDungeon.rejected]: handleRejected,
    [clearDungeon.fulfilled](state, action) {
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.name = initialState.name;
      state.eventName = initialState.eventName;
      state.background = initialState.background;
      state.items = initialState.items;
      state.enemies = initialState.enemies;
      state.bosses = initialState.bosses;
      state.ally = initialState.ally;
      state.inDungeon = initialState.inDungeon;
      state.readyToEnter = initialState.readyToEnter;
      state.selectedEnemyID = initialState.selectedEnemyID;
      state.goldEarned = initialState.goldEarned;
      state.slotsDefeated = initialState.slotsDefeated;
    },

    [setLv.pending]: handlePending,
    [setLv.rejected]: handleRejected,
    [setLv.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.lv = action.payload;
    },

    // [engageRandomEnemy.pending]: handlePending,
    // [engageRandomEnemy.rejected]: handleRejected,
    // [engageRandomEnemy.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.selectedEnemyID = action.payload;
    // },

    [getEnemyGold.pending]: handlePending,
    [getEnemyGold.rejected]: handleRejected,
    [getEnemyGold.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.goldEarned = action.payload;
    },
    [engageEnemyBySlot.pending]: handlePending,
    [engageEnemyBySlot.rejected]: handleRejected,
    [engageEnemyBySlot.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.selectedEnemyID = action.payload;
    },

    [getReadyToEnter.pending]: handlePending,
    [getReadyToEnter.rejected]: handleRejected,
    [getReadyToEnter.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.readyToEnter = true;
    },

    // [startRandomDungeon.pending]: handlePending,
    // [startRandomDungeon.rejected]: handleRejected,
    // [startRandomDungeon.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   // state.endTurn = false;
    //   state.name = action.payload.name;
    //   state.eventName = action.payload.eventName;
    //   state.background = action.payload.background;
    //   state.items = action.payload.items;
    //   state.enemies = action.payload.enemies;
    //   state.bosses = action.payload.bosses;
    //   state.ally = action.payload.ally;
    //   state.inDungeon = true;
    //   state.readyToEnter = false;
    //   state.player = action.payload.player;
    // },

    [startDungeonById.pending]: handlePending,
    [startDungeonById.rejected]: handleRejected,
    [startDungeonById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
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

    //
  },
});
export const dungeonReducer = dungeonSlice.reducer;
