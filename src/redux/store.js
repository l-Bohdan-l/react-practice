import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
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

import weatherReducer from "./weatherSlice";
import { weatherApi } from "./weatherSlice";
import { cityImgApi } from "./cityImgSlice";

const persistConfig = {
  key: "weather",
  storage,
};

const persistedReducer = persistReducer(persistConfig, weatherReducer);

export const store = configureStore({
  reducer: {
    weatherCityName: persistedReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [cityImgApi.reducerPath]: cityImgApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    weatherApi.middleware,
    cityImgApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
