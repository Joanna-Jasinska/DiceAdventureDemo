import { createSlice } from "@reduxjs/toolkit";
import { resetItems, updateItem, deselectAllItems } from "./operations";

const initialState = {
  items: [{ name: "No items" }],
  isLoading: false,
  error: null,
  filters: {},
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
    [resetItems.pending]: handlePending,
    [resetItems.rejected]: handleRejected,
    [resetItems.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [deselectAllItems.pending]: handlePending,
    [deselectAllItems.rejected]: handleRejected,
    [deselectAllItems.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.all = [
        ...state.items.all.map((i) => {
          return { ...i, stats: { ...i.stats, selected: false } };
        }),
      ];
    },

    [updateItem.pending]: handlePending,
    [updateItem.rejected]: handleRejected,
    [updateItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.all[action.payload.stats.index] = {
        ...state.items.all.filter(
          (i) => i.stats.id === action.payload.stats.id
        ),
        ...action.payload,
      };
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
