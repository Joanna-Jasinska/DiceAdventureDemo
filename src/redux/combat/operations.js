// import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import { selectItems } from "redux/combat/selectors";
import { Items } from "objects/Items";
import { BASE_EQUIPMENT } from "../../data/eq";

// const baseURL = "https://connections-api.herokuapp.com/";
// axios.defaults.baseURL = baseURL;

// const items = useSelector(selectItems);

// clearCombat, beginCombat, rollAllDices, endTurn, updateDice, addDice, deleteDice

// export const resetItems = createAsyncThunk(
//   "combat/resetAllItems",
//   async (_, thunkAPI) => {
//     // console.table(BASE_EQUIPMENT);
//     console.log(`Initiating starting eq.`);
//     let eq = { ...Items };
//     eq.initiate(BASE_EQUIPMENT);
//     console.table(eq);
//     // return { all: [{}] };
//     return eq;
//   }
// );

export const clearCombat = createAsyncThunk(
  "combat/clearCombat",
  async (_, thunkAPI) => {
    return true;
  }
);

export const beginCombat = createAsyncThunk(
  "combat/beginCombat",
  async (init, thunkAPI) => {
    return init;
  }
);

export const rollAllDices = createAsyncThunk(
  "combat/rollAllDices",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const myDices = [
      ...state.dungeon.items.map((item) => {
        return item.stats;
      }),
    ];
    const rolled = myDices;
    return rolled;
  }
);

export const endTurn = createAsyncThunk(
  "combat/endTurn",
  async (item, thunkAPI) => {
    // console.log(`Updating item.`);
    // console.table(item);
    return false;
  }
);

export const updateDice = createAsyncThunk(
  "combat/updateDice",
  async (item, thunkAPI) => {
    // console.log(`Updating item.`);
    // console.table(item);
    return false;
  }
);

export const addDice = createAsyncThunk(
  "combat/addDice",
  async (item, thunkAPI) => {
    // console.log(`Updating item.`);
    // console.table(item);
    return false;
  }
);

export const deleteDice = createAsyncThunk(
  "combat/deleteDice",
  async (item, thunkAPI) => {
    // console.log(`Updating item.`);
    // console.table(item);
    return false;
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
