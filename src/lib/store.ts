"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import { persistReducer } from "redux-persist";
import storage from "./customStorage";
import logger from "redux-logger";
import CategoriesReducer from "./state/items/CategoriesSlicer";
import CategoryItemsReducer from "./state/items/CategoryItemsSlicer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "selectedProduct", "delivery_address", "billing_address"],
};

const rootReducer = combineReducers({
  product: persistReducer(persistConfig, productReducer),
  categories: CategoriesReducer,
  category_items: CategoryItemsReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

export type RootState = ReturnType<typeof store.getState>