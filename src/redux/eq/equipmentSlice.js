import { createSlice } from "@reduxjs/toolkit";
import {
  resetEquipment,
  // deselectAllItems,
  updateItem,
  itemLvUpx10,
  itemLvUpx1,
  resetItemLv,
} from "./operations";

const initialState = {
  all: [],
  isLoading: false,
  error: null,
  filters: [],
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
const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  extraReducers: {
    [resetEquipment.pending]: handlePending,
    [resetEquipment.rejected]: handleRejected,
    [resetEquipment.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.all = action.payload;
    },

    // [deselectAllItems.pending]: handlePending,
    // [deselectAllItems.rejected]: handleRejected,
    // [deselectAllItems.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   // state.all = action.payload(state.all);
    //   // state.all = action.payload;
    //   // state.all[1].stats.selected = true;
    //   // state.all[0].stats.selected = false;
    //   state.items.all = [
    //     ...state.all.map((i) => {
    //       return { ...i, selected: false };
    //     }),
    //   ];
    // },

    // [setItems.pending]: handlePending,
    // [setItems.rejected]: handleRejected,
    // [setItems.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.all = action.payload;
    // },

    // [deselectItem.pending]: handlePending,
    // [deselectItem.rejected]: handleRejected,
    // [deselectItem.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.all[action.payload.index] = {
    //     ...state.all[action.payload.index],
    //     ...action.payload,
    //   };
    // },

    [updateItem.pending]: handlePending,
    [updateItem.rejected]: handleRejected,
    [updateItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.all[action.payload.index] = {
        ...state.all[action.payload.index],
        ...action.payload,
      };
    },

    [resetItemLv.pending]: handlePending,
    [resetItemLv.rejected]: handleRejected,
    [resetItemLv.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.all[action.payload[0].index] = {
        ...action.payload[0],
      };
    },

    [itemLvUpx10.pending]: handlePending,
    [itemLvUpx10.rejected]: handleRejected,
    [itemLvUpx10.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.all[action.payload.index] = { ...action.payload };
      // state.all[action.payload] = {
      //   ...state.all[action.payload],
      //   lv: state.all[action.payload].lv + 10,
      // };
    },

    [itemLvUpx1.pending]: handlePending,
    [itemLvUpx1.rejected]: handleRejected,
    [itemLvUpx1.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.all[action.payload.index] = { ...action.payload };
      // state.all[action.payload] = {
      //   ...state.all[action.payload],
      //   lv: state.all[action.payload].lv + 1,
      // };
    },

    //
  },
});
export const equipmentReducer = equipmentSlice.reducer;
