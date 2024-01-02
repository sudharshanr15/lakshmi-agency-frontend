"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  selectedProduct: "",
  delivery_address: "",
  billing_address: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    addProductsInCart(state, action) {
      console.log("Adding to Cart");
      const prevCart = state.cart;
      let isPresent = false;
      prevCart.forEach((val, i) => {
        if (val.item_code == action.payload.item_code) {
          isPresent = true;
          // increase qty
          prevCart[i].qty = action.payload.qty;
        }
      });
      if (!isPresent) {
        state.cart = [...prevCart, action.payload];
      } else {
        state.cart = prevCart;
      }
    },
    removeProductFromCart(state, action) {
      console.log("Removing form Cart");
      const prevCart = state.cart;
      state.cart = prevCart.filter((val) => val.item_code != action.payload);
    },
    setCartItems(state, action) {
      state.cart = action.payload;
    },
    setDeliveryAddress(state, action) {
      state.delivery_address = action.payload;
    },
    setBillingAddress(state, action) {
      state.billing_address = action.payload;
    },
  },
});
export const {
  setSelectedProduct,
  addProductsInCart,
  removeProductFromCart,
  setCartItems,
  setDeliveryAddress,
  setBillingAddress,
} = productSlice.actions;

export default productSlice.reducer;
