import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDungeon } from "data/dungeons";
import { getRandomNum } from "objects/Dice";
import { PLAYER_BASE_LIFE } from "data/settings";

export const clearDungeon = createAsyncThunk(
  "dungeon/clear",
  async (_, thunkAPI) => {
    return true;
  }
);
export const useItem = createAsyncThunk(
  "dungeon/useItem",
  async (id, thunkAPI) => {
    return id;
  }
);

export const setLv = createAsyncThunk("dungeon/setLv", async (lv, thunkAPI) => {
  return lv;
});

export const startDungeonById = createAsyncThunk(
  "dungeon/startSelected",
  async (id, thunkAPI) => {
    const myDungeon = getDungeon(id);
    const myPlayer = {
      life: 1,
      maxLife: 1,
      status: {},
    };
    const state = thunkAPI.getState();
    const myLv = state.game.dungeonLevels[myDungeon.id] || 0;
    return {
      ...myDungeon,
      player: myPlayer,
      startedLv: myLv,
      lv: myLv,
      goldEarned: 0,
    };
  }
);

export const levelupAndReloadDungeon = createAsyncThunk(
  "dungeon/levelupAndReload",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const id = state.dungeon.id;
    // const myDungeon = getDungeon(id);
    // could clear player status
    const myPlayer = {
      status: {},
    };
    return {
      player: myPlayer,
      // lv: myLv,
      // startedLv: myLv,
      // goldEarned: 0,
    };
  }
);

export const getEnemyGold = createAsyncThunk(
  "dungeon/getEnemyGold",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const eGold = state.enemy.gold;
    const dGold = state.dungeon.goldEarned;
    let replacedSlots = { ...state.dungeon.slotsDefeated };
    replacedSlots[state.dungeon.currentSlot] = true;
    return { goldEarned: dGold + eGold, slotsDefeated: replacedSlots };
  }
);

export const damagePlayer = createAsyncThunk(
  "dungeon/damagePlayer",
  async (dmg, thunkAPI) => {
    return Number(dmg || 0);
  }
);

export const resetPlayer = createAsyncThunk(
  "dungeon/resetPlayer",
  async (_, thunkAPI) => {
    return true;
  }
);

export const engageEnemyBySlot = createAsyncThunk(
  "dungeon/engameEnemyBySlot",
  async (slot, thunkAPI) => {
    const state = thunkAPI.getState();
    const dungeons = state.dungeon.enemies[slot];
    const rn = getRandomNum(0, state.dungeon.enemies[slot].length - 1);
    const enemyId = await dungeons[rn];
    return { selectedEnemyID: enemyId, currentSlot: slot };
  }
);

export const engageBoss = createAsyncThunk(
  "dungeon/engameBoss",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const bosses = state.dungeon.bosses;
    const rn = getRandomNum(0, state.dungeon.bosses.length - 1);
    const enemyId = await bosses[rn];
    return { selectedEnemyID: enemyId, currentSlot: "boss" };
  }
);
export const getReadyToEnter = createAsyncThunk(
  "dungeon/ready",
  async (_, thunkAPI) => {
    return true;
  }
);

export const packEquipment = createAsyncThunk(
  "dungeon/packEquipment",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const itemTemplate = {
      turnUses: 1,
      currentUses: 1,
    };
    const eqTaken = state.equipment.all
      .filter((item) => item.selected)
      .map((item) => {
        return { ...itemTemplate, ...item };
      });
    if (eqTaken.length > 5)
      return thunkAPI.rejectWithValue("Too many items equipped");
    let eqLife = 0;
    eqTaken.forEach((item) => {
      if (item.nondices && Array.isArray(item.nondices)) {
        for (let i = 0; i < item.nondices.length; i++) {
          if (item.nondices[i].item === "stats" && item.nondices[i].maxHp) {
            eqLife += item.nondices[i].maxHp;
          }
        }
      }
    });
    const life = PLAYER_BASE_LIFE + eqLife;
    return { items: eqTaken, life: life };
  }
);
export const endTurnInDungeon = createAsyncThunk(
  "dungeon/endTurnInDungeon",
  async (_, thunkAPI) => {
    // resets item uses
    const state = thunkAPI.getState();
    // const itemTemplate = {
    //   turnUses: 1,
    //   currentUses: 1,
    // };
    const eqTaken = state.dungeon.items || [];
    return {
      items: [
        ...eqTaken.map((i) => {
          return { ...i, currentUses: i.turnUses };
        }),
      ],
    };
  }
);

export const useDungeonItemSkill = createAsyncThunk(
  "dungeon/useDungeonItemSkill",
  async (itemId, thunkAPI) => {
    // resets item uses
    const state = thunkAPI.getState();
    // const itemTemplate = {
    //   turnUses: 1,
    //   currentUses: 1,
    // };
    const eqTaken = state.dungeon.items || [];
    const found = eqTaken.find((i) => i.itemId === itemId) || false;
    const currentUses = found ? found.currentUses : 0;
    if (currentUses < 1) {
      return thunkAPI.rejectWithValue("This item is already used up.");
    }
    return { ...found, currentUses: found.currentUses - 1 };
  }
);
