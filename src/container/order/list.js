"use client";

import { getQuoteAndOrder, formatDate, getAmount } from "@/utils/getData";
import { OrderList } from "../check_bounce";
function Card({ date, items, order_id, amount, delivery_fee }) {
  return (
    <>
      <div className="border rounded-lg mt-2">
        <div className="flex justify-between p-4 mt-2">
          <div className="ml-4">
            <h1 className="text-[#0a4e71] font-bold text-2-xl">
              Created on : {date}
            </h1>
            <div className="">
              <p className="mt-2  text-[#b9babc] md:text-1xl flex-end">
                Total items : {items.length}
              </p>
            </div>
            <div className="flex">
              <p className="mt-2  text-black md:text-1xl ">
                Order ID : {order_id}
              </p>
            </div>
          </div>
          <div className="ml-4 justify-end">
            <h1 className="text-[#0a4e71] font-bold text-2-xl text-right">0</h1>
            <div className="">
              <p className="mt-2  text-[#b9babc] md:text-1xl text-right">0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function List() {
  const { orderList, quoteList, isLoading } = getQuoteAndOrder();
  const amount = getAmount("SAL-ORD-2023-00012");
  if (isLoading) {
    // Handle loading state if necessary
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="p-5 flex justify-between">
        <p className="text-black text-2xl font-semibold">Order List</p>
      </div>
      <p>{JSON.stringify(amount)}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between lg:mx-10 mt-5 rounded-md">
        {orderList.map((order) => (
          <Card
            key={order.name} // Assuming "name" is unique for each order
            date={formatDate(order.creation)}
            items={order.items}
            order_id={order.name}
          />
        ))}
      </div>
    </>
  );
}
