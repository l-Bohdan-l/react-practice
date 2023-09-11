import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "./weatherSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "weather",
  storage,
};

const persistedReducer = persistReducer(persistConfig, weatherReducer);

export const store = configureStore({
  reducer: {
    weatherCityName: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);

// setupListeners(store.dispatch);
