import { createAsyncThunk } from "@reduxjs/toolkit";
import { Items } from "objects/Items";

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

export const resetItemLv = createAsyncThunk(
  "equipment/resetItemLv",
  async ({ index, itemId, selected }, thunkAPI) => {
    const state = thunkAPI.getState().equipment.all;
    if (!state || state[index].lv < 2) {
      return thunkAPI.rejectWithValue("Item is already Lv 1");
    }
    // return { index, levels: state[index].lv - 1 };
    const deleveledItem = await Items.getItemById({ id: itemId, lv: 1 });
    // console.log(`equipment/resetItemLv > DELEVELED ITEM `, deleveledItem);
    return [
      { ...deleveledItem, index: index, selected: selected },
      state[index].lv - 1,
    ];
  }
);

export const itemLvUpx1 = createAsyncThunk(
  "equipment/itemLvUp_x1",
  async ({ index, itemId, lv, selected }, thunkAPI) => {
    const leveledItem = await Items.getItemById({ id: itemId, lv: lv + 1 });
    return { ...leveledItem, index: index, selected: selected };
  }
);

export const itemLvUpx10 = createAsyncThunk(
  "equipment/itemLvUp_x10",
  async ({ index, itemId, lv, selected }, thunkAPI) => {
    const leveledItem = await Items.getItemById({ id: itemId, L: lv + 10 });
    return { ...leveledItem, index: index, selected: selected };
  }
);
