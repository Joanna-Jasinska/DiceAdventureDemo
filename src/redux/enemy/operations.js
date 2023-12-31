import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEnemy } from "data/enemies";
import { Enemy } from "objects/Enemy";

export const damageEnemy = createAsyncThunk(
  "enemy/dmg",
  async (dmg, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const hp = Math.min(Math.max(state.enemy.hp - dmg, 0), state.enemy.maxHp);
    // return hp;
    return dmg;
  }
);

export const die = createAsyncThunk("enemy/die", async (dmg, thunkAPI) => {
  return true;
});

export const loadEnemy = createAsyncThunk("enemy/load", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const id = state.dungeon.selectedEnemyID;
  const lv = state.dungeon.lv;
  const startedLv = state.dungeon.startedLv;
  const leveledEnemy = await Enemy.levelUp(getEnemy(id), lv, startedLv);
  return { ...leveledEnemy, maxLife: leveledEnemy.life };
});

export const placeBodyPieceDice = createAsyncThunk(
  "enemy/placeBodyPieceDice",
  async ({ pieceId, dice }, thunkAPI) => {
    const state = thunkAPI.getState().enemy;
    // const { body } = state;
    const myBody = state.body.map((piece) => {
      if (piece.id === pieceId) {
        if (!piece.dices) return { ...piece, dices: [dice] };
        return { ...piece, dices: [...piece.dices, dice] };
      }
      return piece;
    });
    // console.log(`-----start-----body------evaluation--------------------`);
    // console.table(myBody);
    const changedPiece = myBody.find((p) => p.id === pieceId);
    const myBodyEvaluated = Enemy.evaluatePieceThanBody(changedPiece, myBody);
    // console.table(myBodyEvaluated);
    // console.log(`-----stop-----body------evaluation--------------------`);
    return myBodyEvaluated;
  }
);

export const deleteAllBodyDices = createAsyncThunk(
  "enemy/deleteAllBodyDices",
  async (_, thunkAPI) => {
    const body = thunkAPI.getState().enemy.body;
    return Enemy.evaluateBody(
      body.map((p) => {
        return { ...p, dices: [] };
      })
    );
  }
);

export const deleteAllPieceDices = createAsyncThunk(
  "enemy/deleteAllPieceDices",
  async (pieceId, thunkAPI) => {
    // return pieceId;
    const state = thunkAPI.getState().enemy;
    // const { body } = state;
    const myBody = state.body.map((piece) => {
      if (piece.id === pieceId) {
        return { ...piece, dices: [] };
      }
      return piece;
    });
    // console.log(`-----start-----body------evaluation--------------------`);
    // console.table(myBody);
    const changedPiece = myBody.find((p) => p.id === pieceId);
    const myBodyEvaluated = Enemy.evaluatePieceThanBody(changedPiece, myBody);
    // console.table(myBodyEvaluated);
    // console.log(`-----stop-----body------evaluation--------------------`);
    return myBodyEvaluated;
  }
);
