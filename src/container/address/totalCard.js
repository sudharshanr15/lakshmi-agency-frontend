"use client";
import { placeOrder } from "@/controller/productController";
import { emptyCart } from "@/lib/features/productSlice";
import { post_order } from "@/lib/server_api/api";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function TotalCard({ setOrderNow }) {
  const [cart, setCart] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const products = sessionStorage.getItem("cart");
    setCart(JSON.parse(products));
  }, []);

  async function addOrder() {
    if (cart.length > 0) {
      // const billingAddress = JSON.parse(
      //   sessionStorage.getItem("billing_address")
      // );
      // const deliveryAddress = JSON.parse(
      //   sessionStorage.getItem("delivery_address")
      // );
      // // console.log(billingAddress);
      // // console.log(deliveryAddress);
      // const items = cart.map((val, i) => {
      //   return {
      //     item_code: val.item_code,
      //     qty: val.qty,
      //   };
      // });
      // console.log(items);
      // placeOrder(billingAddress.name, deliveryAddress.name, items);
      // setOrderNow(true);
      let current_date = new Date();
      let daysToAdd = 2;
      current_date.setDate(current_date.getDate() + daysToAdd)

      let year = current_date.getFullYear()
      let month = (current_date.getMonth() + 1).toString().padStart(2, '0')
      let date = (current_date.getDate()).toString().padStart(2, '0')

      let items = cart.map(item => ({
        item_code: item.item_code,
        qty: item.qty,
        delivery_date: `${year}-${month}-${date}`
      }))

      items = {
        items
      }

      let request = await post_order(JSON.stringify(items))
      if(request.status == true){
        dispatch(emptyCart())
        setOrderNow(true)
      }else{
        console.log("Unable to order")
        alert("Order failed")
      }
    } else {
      console.log("Cart is empty");
    }
  }

  return (
    <div className="w-full lg:w-[30%] mt-12">
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
