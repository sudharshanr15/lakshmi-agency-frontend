"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  selectedProduct: "",
};

export const productSlice = createSlice({
  name: "order",
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
          // console.log(prevCart);
        }
      });
      if (!isPresent) {
        state.cart = [...prevCart, action.payload];
      } else {
        state.cart = prevCart;
      }
      // console.log(state.cart);
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProductFromCart(state, action) {
      console.log("Removing form Cart");
      const prevCart = state.cart;
      state.cart = prevCart.filter((val) => val.item_code != action.payload);
      // console.log(state.cart);
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCartItems(state, action) {
      state.cart = action.payload;
    },
  },
});
export const {
  setSelectedProduct,
  addProductsInCart,
  removeProductFromCart,
  setCartItems,
} = productSlice.actions;

export default productSlice.reducer;
