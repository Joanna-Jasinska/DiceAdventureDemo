import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEnemy } from "data/enemies";
import { Enemy } from "objects/Enemy";

// loadEnemy,
// loadBody,
// withdrawDice,
// placeDice,
// deleteAllDices,
// withdrawAllDices,

// autoPlaceAllDices,
// changeStatus,

export const damageEnemy = createAsyncThunk(
  "enemy/dmg",
  async (dmg, thunkAPI) => {
    const state = thunkAPI.getState();
    const hp = Math.min(Math.max(state.enemy.hp - dmg, 0), state.enemy.maxHp);
    return hp;
  }
);

export const die = createAsyncThunk("enemy/die", async (dmg, thunkAPI) => {
  return true;
});

export const loadEnemy = createAsyncThunk("enemy/load", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const id = state.dungeon.selectedEnemyID;
  const lv = state.dungeon.lv;
  const leveledEnemy = await Enemy.levelUp(getEnemy(id), lv);
  return leveledEnemy;
});

// export const startRandomEnemy = createAsyncThunk(
//   "enemy/random",
//   async (_, thunkAPI) => {
//     const myEnemy = { ...Enemy }.getRandom();
//     return myEnemy;
//   }
// );