import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { equipmentReducer } from "./eq/equipmentSlice";
import { combatReducer } from "./combat/combatSlice";
import { dungeonReducer } from "./dungeon/dungeonSlice";
import { authReducer } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { enemyReducer } from "./enemy/enemySlice";
import { gameReducer } from "./game/gameSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//     auth: authReducer,
//   },
// });

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const gamePersistConfig = {
  key: "game",
  storage,
  whitelist: [
    "currentDungeons",
    "possibleDungeons",
    "selectedDungeonId",
    "dungeonLevels",
    "playerLv",
    "maxEqLv",
    "spareLvUps",
    "gold",
    "allies",
    "journey",
  ],
};

const eqPersistConfig = {
  key: "equipment",
  storage,
  whitelist: ["all"],
};

const dungeonPersistConfig = {
  key: "dungeon",
  storage,
  whitelist: [
    "inDungeon",
    "quests",
    "items",
    "enemies",
    "bosses",
    "id",
    "name",
    "eventName",
    "ally",
    "player",
    "background",
    "lv",
    "startedLv",
    "goldEarned",
    "currentSlot",
    "slotsDefeated",
    "selectedEnemyID",
    "readyToEnter",
    // "",
  ],
  // blacklist: ["inDungeon"],
};

const combatPersistConfig = {
  key: "combat",
  storage,
  whitelist: [
    "rolledDices",
    "dices",
    // "isLoading",
    "error",
    "inCombat",
    "endTurn",
    "endCombat",
  ],
};

const enemyPersistConfig = {
  key: "enemy",
  storage,
  whitelist: [
    "name",
    "id",
    "life",
    "maxLife",
    "isBoss",
    "gold",
    "portrait",
    "status",
    "body",
  ],
};

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // contacts: contactsReducer,
    // combat: combatReducer,
    // dungeon: dungeonReducer,
    // enemy: enemyReducer,
    // filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    equipment: persistReducer(eqPersistConfig, equipmentReducer),
    combat: persistReducer(combatPersistConfig, combatReducer),
    dungeon: persistReducer(dungeonPersistConfig, dungeonReducer),
    game: persistReducer(gamePersistConfig, gameReducer),
    enemy: persistReducer(enemyPersistConfig, enemyReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
