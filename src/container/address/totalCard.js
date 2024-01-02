"use client";
import { placeOrder } from "@/controller/productController";
import { useSelector } from "react-redux";

function TotalCard({ setOrderNow }) {
  const cart = useSelector((state) => state.product.cart);
  const deliveryAddress = useSelector(
    (state) => state.product.delivery_address
  );
  const billingAddress = useSelector((state) => state.product.billing_address);

  function addOrder() {
    if (cart.length > 0) {
      placeOrder(billingAddress.name, deliveryAddress.name, cart);
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
            {cart ? cart.length : 12} Products
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
