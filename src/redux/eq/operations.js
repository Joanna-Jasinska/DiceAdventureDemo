// import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_EQUIPMENT } from "./../../data/eq";

const baseURL = "https://connections-api.herokuapp.com/";
// axios.defaults.baseURL = baseURL;

export const fetchEquipment = createAsyncThunk(
  "equipment/fetchAll",
  (_, thunkAPI) => {
    console.table(BASE_EQUIPMENT);
    return BASE_EQUIPMENT;
    return [{ name: "Mmm", id: "mmm" }, {}];
    // return JSON.parse(BASE_EQUIPMENT);
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',

//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContactById = createAsyncThunk(
//   'contacts/deleteContactById',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
