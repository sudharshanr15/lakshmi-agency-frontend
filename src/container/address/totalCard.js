"use client";
import { placeOrder } from "@/controller/productController";
import { useState, useEffect } from "react";

function TotalCard({ setOrderNow }) {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    const products = sessionStorage.getItem("cart");
    setCart(JSON.parse(products));
  }, []);

  function addOrder() {
    if (cart.length > 0) {
      const billingAddress = JSON.parse(
        sessionStorage.getItem("billing_address")
      );
      const deliveryAddress = JSON.parse(
        sessionStorage.getItem("delivery_address")
      );
      // console.log(billingAddress);
      // console.log(deliveryAddress);
      const items = cart.map((val, i) => {
        return {
          item_code: val.item_code,
          qty: val.qty,
        };
      });
      console.log(items);
      placeOrder(billingAddress.name, deliveryAddress.name, items);
      setOrderNow(true);
    } else {
      console.log("Cart is empty");
    }
  }

  return (
    <div className="w-[30%] mt-12">
      <div className="max-w-sm mx-auto bg-white border shadow-md rounded-md overflow-hidden text-center">
        <div className="px-6 py-4">
          <div className="font-semibold text-xl mb-2">Total</div>
          <p className="text-gray-700 text-base">
            {cart ? cart.length : 0} Products
          </p>
        </div>
        <div className="px-4 py-4 flex flex-col">
          <button
            className="bg-[#F9C74F] text-black py-2 px-4 rounded mb-2"
            onClick={addOrder}
          >
            Order Now
          </button>
          <button className="text-[#0A4E71] border border-[#0A4E71] py-2 px-4 rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default TotalCard;
