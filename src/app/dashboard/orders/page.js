"use client";
import "@/app/globals.css";
import { Nav, Footer } from "@/components/";
import { getOrders } from "@/controller/dashboardController";
import { useEffect, useState } from "react";

export default function Page() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders(setOrders);
  }, []);
  return (
    <>
      <Nav />
      <div className="mt-[10rem] px-8">
        {orders.map((order, i) => (
          <div key={i} className="border shadow-sm rounded-sm w-[70%] mb-6">
            {/*  */}
            <div className="w-full flex justify-between p-2 py-4 border shadow-sm">
              <div>
                <h2 className="text-[#0A4E71] font-semibold">
                  Ordered on {order.creation.substring(0, 10)}
                </h2>
                <h3 className="text-gray-500 text-xs">
                  Total items : {order.items.length}
                </h3>
              </div>
              <div>
                <h2 className="font-semibold">$ 21,400</h2>
                <h3 className="text-gray-500 text-xs">
                  $ 12000 + $ 300(delivery fee){" "}
                </h3>
              </div>
            </div>
            {/*  */}
            <div className="w-full flex justify-between p-2 py-4 border shadow-sm">
              <div>
                <h2 className="font-medium text-sm">Order ID : {order.name}</h2>
                <h3 className="text-green-600 text-xs">
                  {order.delivery_status}
                </h3>
              </div>
              <div>
                <h2 className="text-[#0A4E71] underline font-medium">
                  $ 21,400
                </h2>
              </div>
            </div>
            {/* all products */}
            <div className="w-full p-2 py-4 border shadow-sm">
              {order.items &&
                order.items.map((item, i) => (
                  <div key={i} className="flex justify-between py-1">
                    <h2 className="font-medium text-sm">{item.item_name}</h2>
                    <h2 className="text-gray-500 text-xs">Qty : {item.qty}</h2>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}