// import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_EQUIPMENT } from "./../../data/eq";
import { Items } from "objects/Items";
import { Item } from "objects/Item";
import { useSelector } from "react-redux";
import { selectEq } from "./selectors";

const baseURL = "https://connections-api.herokuapp.com/";
// axios.defaults.baseURL = baseURL;

export const resetEquipment = createAsyncThunk(
  "equipment/resetAll",
  (_, thunkAPI) => {
    console.table(BASE_EQUIPMENT);
    let eq = { ...Items };
    eq.initiate(BASE_EQUIPMENT);
    console.log("Reseting equipment");
    console.table(eq.serialise());
    return eq.serialise();
  }
);
export const setItems = createAsyncThunk(
  "equipment/setAll",
  async (items, thunkAPI) => {
    let eq = { ...Items };
    eq.initiate(items);
    return eq.serialise();
  }
);

export const deselectItem = createAsyncThunk(
  "equipment/deselectAll",
  async (item, thunkAPI) => {
    let i = { ...Item };
    i.initiate(item);
    i.deselect();
    return i.serialise();
  }
);
export const deselectAllItems = createAsyncThunk(
  "equipment/deselectAll",
  async (_, thunkAPI) => {
    console.log(`Deselecting all items.`);
    // const equipment = [...useSelector(selectEq)];
    // let eq = { ...Items };
    // eq.initiate(equipment);
    // eq.deselectAllItems();
    // return eq.serialise();
    return false;
  }
);

export const updateItem = createAsyncThunk(
  "equipment/updateItem",
  async (item, thunkAPI) => {
    console.log(`Updating ${item.stats.name} | ${item.stats.index}`);
    // console.table(item);
    return item;
  }
);

export const refreshEq = createAsyncThunk(
  "equipment/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedEq = state.equipment.all;

    if (persistedEq === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch eq");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setItems(persistedEq);
      // const res = await axios.get("/users/current");
      // return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
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
