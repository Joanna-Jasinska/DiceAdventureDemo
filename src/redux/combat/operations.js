import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dice } from "objects/Dice";

export const willEndCombat = createAsyncThunk(
  "combat/willEndCombat",
  async (state, thunkAPI) => {
    // console.log(`dispatchng combat/willEndCombat`);
    return state;
  }
);
export const clearCombat = createAsyncThunk(
  "combat/clearCombat",
  async (_, thunkAPI) => {
    return true;
  }
);

export const beginCombat = createAsyncThunk(
  "combat/beginCombat",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    let myDices = [];
    state.dungeon.items.forEach((item) => {
      item.dices.forEach((dice, index) => {
        const id = `dice|d${dice.diceMax}|${dice.type}|${item.name}|${index}/${item.dices.length}`;
        return myDices.push({ ...dice, id: id });
      });
    });
    const combat = {
      dices: [...myDices],
      rolledDices: myDices.map((d) => Dice.roll(d)),
      // enemy: getEnemy(state.dungeon.selectedEnemyID),
    };
    return combat;
  }
);

export const rollAllDices = createAsyncThunk(
  "combat/rollAllDices",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const myDices = [
      ...state.combat.dices.map((item) => {
        return item;
      }),
    ];
    const rolled = myDices.map((d) => Dice.roll(d));
    return rolled;
  }
);

export const deselectAllDices = createAsyncThunk(
  "combat/deselectAllDices",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const myDices = [
      ...state.combat.rolledDices.map((item) => {
        return { ...item, selected: false };
      }),
    ];
    return myDices;
  }
);

export const endTurn = createAsyncThunk(
  "combat/endTurn",
  async (_, thunkAPI) => {
    // console.log(`Updating item.`);
    // console.table(item);
    return false;
  }
);

export const toggleDiceSelection = createAsyncThunk(
  "combat/toggleDiceSelection",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const dices = Dice.toggleSelect(id, state.combat.rolledDices);
    return dices;
  }
);
export const selectDice = createAsyncThunk(
  "combat/selectDice",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const dices = Dice.select(id, state.combat.rolledDices);
    return dices;
  }
);

export const updateDice = createAsyncThunk(
  "combat/updateDice",
  async (dice, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(`Updating item.`);
    // console.table(item);
    // return state.combat.dices;
    const index = state.combat.rolledDices.indexOf(
      state.combat.rolledDices.find((d) => d.id === dice.id)
    );
    console.log(
      `combat/updateDice > rolledDices[${index}] > changed dice`,
      dice
    );
    return { ...dice, index: index };
  }
);

export const addDice = createAsyncThunk(
  "combat/addDice",
  async (item, thunkAPI) => {
    // const state = thunkAPI.getState();
    // console.log(`Updating item.`);
    // console.table(item);
    return item;
    // return state.combat.dices;
  }
);

export const addRolledDice = createAsyncThunk(
  "combat/addRolledDice",
  async (item, thunkAPI) => {
    // const state = thunkAPI.getState();
    // console.log(`Updating item.`);
    // console.table(item);
    return item;
    // return state.combat.rolledDices;
  }
);
export const deleteAllSelectedDices = createAsyncThunk(
  "combat/deleteAllSelectedDices",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // console.log(`Updating item.`);
    // console.table(item);
    return true;
    // return state.combat.rolledDices;
  }
);

export const addMultipleRolledDice = createAsyncThunk(
  "combat/addMultipleRolledDice",
  async (diceArray, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(`Updating item.`);
    // console.table(item);
    return state.combat.rolledDices.concat(diceArray);
  }
);

export const copyAllEnemyDicesToBag = createAsyncThunk(
  "combat/copyAllEnemyDicesToBag",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    let diceArray = [];
    if (state.enemy.body)
      state.enemy.body.forEach((piece) => {
        if (piece.dices) piece.dices.forEach((dice) => diceArray.push(dice));
      });
    return state.combat.rolledDices.concat(diceArray);
  }
);

export const deleteRolledDice = createAsyncThunk(
  "combat/deleteRolledDice",
  async (dice, thunkAPI) => {
    // const state = thunkAPI.getState();
    return dice;
  }
);

export const enterSummary = createAsyncThunk(
  "combat/enterSummary",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    return true;
  }
);
