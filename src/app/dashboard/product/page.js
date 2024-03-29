"use client";
import "../../globals.css";
import { List } from "@/container/product";
import { setCartItems } from "@/lib/features/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Page() {
  const dispatch = useDispatch();
  useEffect(() => {
    const products = sessionStorage.getItem("cart");
    dispatch(setCartItems(JSON.parse(products)));
  }, []);

  return (
    <>
      <List />
    </>
  );
}
