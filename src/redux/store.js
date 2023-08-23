import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// import { contactsReducer } from "./contacts/contactsSlice";
import { equipmentReducer } from "./eq/equipmentSlice";
import { combatReducer } from "./combat/combatSlice";
// import { filterReducer } from "./filter/filterSlice";
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
    "readyToEnter",
  ],
  // blacklist: ["inDungeon"],
};

const combatPersistConfig = {
  key: "combat",
  storage,
  whitelist: ["all"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // contacts: contactsReducer,
    equipment: persistReducer(eqPersistConfig, equipmentReducer),
    combat: persistReducer(combatPersistConfig, combatReducer),
    dungeon: persistReducer(dungeonPersistConfig, dungeonReducer),
    // filter: filterReducer,
    // auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
