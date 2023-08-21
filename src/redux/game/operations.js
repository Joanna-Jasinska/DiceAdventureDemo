// import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { selectItems } from "redux/game/selectors";
import { Items } from "objects/Items";
import { BASE_EQUIPMENT } from "../../data/eq";

// const baseURL = "https://connections-api.herokuapp.com/";
// axios.defaults.baseURL = baseURL;

// const items = useSelector(selectItems);

export const resetItems = createAsyncThunk(
  "game/resetAllItems",
  (_, thunkAPI) => {
    // console.table(BASE_EQUIPMENT);
    console.log(`Initiating starting eq.`);
    let eq = { ...Items };
    eq.initiate(BASE_EQUIPMENT);
    console.table(eq);
    // return { all: [{}] };
    return eq;
  }
);

export const deselectAllItems = createAsyncThunk(
  "game/deselectAllItems",
  (_, thunkAPI) => {
    let eq = { ...Items };
    // eq.all.array.forEach((el) => {
    //   el.edit({ stats: { selected: false } });
    // });
    return;
    // nie dziala - zle
  }
);

export const updateItem = createAsyncThunk(
  "game/updateItem",
  (item, thunkAPI) => {
    console.log(`Updating item.`);
    console.table(item);
    return item;
    // dodaje cala kolekcje itemow do itema - zle
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
