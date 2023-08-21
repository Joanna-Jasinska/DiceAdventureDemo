import { createSlice } from "@reduxjs/toolkit";
import { fetchEquipment } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
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
    [fetchEquipment.pending]: handlePending,
    [fetchEquipment.rejected]: handleRejected,
    [fetchEquipment.fulfilled](state, action) {
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
export const equipmentReducer = equipmentSlice.reducer;
