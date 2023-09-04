// import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_EQUIPMENT } from "./../../data/eq";
// import { Item } from "objects/Item";
import { useSelector } from "react-redux";
import { selectEq } from "./selectors";
import { Items } from "objects/Item";

const baseURL = "https://connections-api.herokuapp.com/";
// axios.defaults.baseURL = baseURL;

export const resetEquipment = createAsyncThunk(
  "equipment/resetAll",
  (_, thunkAPI) => {
    // console.table(BASE_EQUIPMENT);
    // let eq = { ...Items };
    // eq.initiate(BASE_EQUIPMENT);
    // console.table(eq.serialise());
    const eqList = Items.getStartingEqSet();
    return [
      ...eqList.map((eq, index) => {
        return { ...eq, index: index };
      }),
    ];
  }
);

export const deselectAllItems = createAsyncThunk(
  "equipment/deselectAll",
  async (_, thunkAPI) => {
    // console.log(`Deselecting all items.`);
    return false;
  }
);

export const updateItem = createAsyncThunk(
  "equipment/updateItem",
  async (item, thunkAPI) => {
    return item;
  }
);
