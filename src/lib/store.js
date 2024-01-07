"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import { persistReducer } from "redux-persist";
import storage from "./customStorage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "selectedProduct", "delivery_address", "billing_address"],
};

const rootReducer = combineReducers({
  product: persistReducer(persistConfig, productReducer),
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};
