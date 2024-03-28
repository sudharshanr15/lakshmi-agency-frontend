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
      let presentItem = prevCart.map(data => data.item_code).indexOf(action.payload.item_code)
      if(presentItem > -1){
        prevCart[presentItem].qty = action.payload.qty;
        state.cart = prevCart;
      }else{
        state.cart = [...prevCart, action.payload];
      }

      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProductFromCart(state, action) {
      console.log("Removing form Cart");
      const prevCart = state.cart;
      state.cart = prevCart.filter((val) => val.item_code != action.payload);
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCartItems(state, action) {
      state.cart = action.payload;
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setDeliveryAddress(state, action) {
      state.delivery_address = action.payload;
      sessionStorage.setItem(
        "delivery_address",
        JSON.stringify(state.delivery_address)
      );
    },
    setBillingAddress(state, action) {
      state.billing_address = action.payload;
      sessionStorage.setItem(
        "billing_address",
        JSON.stringify(state.billing_address)
      );
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
