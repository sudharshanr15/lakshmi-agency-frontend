"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getOrderStatistics } from "@/controller/dashboardController";
// import { ListTable } from "./action/recentOrder";

export function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("30"); // Initialize with a default day

  const toggleFilter = (day) => {
    if (day) {
      console.log("function : toogle filet ", day);
      setSelectedDay(day); // Update the selected day to trigger useEffect
    }

    setIsOpen(!isOpen);
  };

  const days = [
    {
      id: 1,
      days: "30",
    },
    {
      id: 2,
      days: "90",
    },
  ];

  const [orderStatistics, setOrdersStatistics] = useState(null);

  useEffect(() => {
    getOrderStatistics(setOrdersStatistics, selectedDay);
  }, [selectedDay]);

  return (
    <>
      <div className="md:mt-40">
        <div className="lg:mx-5 mx-2 lg:mt-52 md:mt-16">
          <div className="flex justify-between mt-3">
            <h1 className="text-black sm:text-2xl text-xl font-bold sm:ml-20">Statics</h1>
            <div className="mr-0">
              <div className="relative">
                <button
                  onClick={() => toggleFilter()}
                  className="px-4 py-2  text-[#004b71] bg-[#e5eef1]   rounded-md focus:outline-none flex font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                    {days.map((item) => (
                      <li
                        key={item.id}
                        className="hover:text-white hover:bg-blue-500 cursor-pointer"
                      >
                        <button onClick={() => toggleFilter(item.days)}>
                          <div className="block px-4 py-2 text-gray-800">
                            Last {item.days} days
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <>
          <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between lg:mx-20 lg:mt-7 mt-1  p-5 rounded-md">
            <div className="bg-[#f6e9be] rounded-lg">
              <div className="flex justify-start p-4 mt-0">
                <div className="text-center bg-white h-10 w-10 mt-2 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#f6e9be]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h1 className="text-[#555961] text-2-xl">Orders</h1>
                  <div className="flex">
                    <p className="mt-1 font-bold text-1xl md:text-2xl">
                      {orderStatistics && orderStatistics.orders}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ecf8e7] rounded-lg">
              <div className="flex justify-start p-4 mt-2">
                <div className="text-center bg-white h-10 w-10 mt-2 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-lime-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h1 className="text-[#555961] text-2-xl">Quote</h1>
                  <div className="flex">
                    <p className="mt-1 font-bold text-1xl md:text-2xl">
                      {orderStatistics && orderStatistics.quotes}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#e4eef1] rounded-lg">
              <div className="flex justify-start p-4 mt-2">
                <div className="text-center bg-white h-10 w-10 mt-2 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#004b71] font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h1 className="text-[#555961] text-2-xl">Savings</h1>
                  <div className="flex">
                    <p className="mt-1 font-bold text-1xl md:text-2xl">
                      {orderStatistics && orderStatistics.savings}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fcece4] rounded-lg">
              <div className="flex justify-start p-4 mt-2">
                <div className="text-center bg-white h-10 w-10 mt-2 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#fd517e]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h1 className="text-[#555961] text-2-xl">Purchased</h1>
                  <div className="flex">
                    <p className="mt-1 font-bold text-1xl md:text-2xl">
                      {orderStatistics && orderStatistics.purchased_amount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export function RecentOrder({ orders }) {
  return (
    <>
      <div className="lg:mx-24 mx-6 lg:mt-10 p-5 rounded-md hidden sm:block">
        <div className="flex justify-between">
          <h1 className="text-black text-1xl md:text-2xl font-semibold">
            Recent Orders
          </h1>
        </div>
        <div className="relative overflow-x-auto shadow-md md:mt-8 mt-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#e4eef1] dark:text-gray-400  md:mx-6">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr
                  key={i}
                  className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {order.name}
                  </th>
                  <td className="px-6 py-4">
                    {order.creation.substring(0, 10)}
                  </td>
                  <td className="px-6 py-4">{order.items[0].item_name}</td>
                  <td className="px-6 py-4">₹14,0000</td>
                  <td className="px-6 py-4 text-right">
                    <button className="float-left bg-[#ecf7e7] text-[#50e364] p-2">
                      {order.delivery_status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <MobileRecentOrders orders={orders} />
    </>
  );
}

function MobileRecentOrders({ orders }) {
  return (
    <div className="sm:hidden block mt-4 ">
      <div className="flex justify-between">
        <h1 className="text-black text-1xl md:text-2xl ml-2 font-semibold">
          Recent Orders
        </h1>
      </div>
      <div className="overflow-x-auto shadow-md md:mt-8 mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#e4eef1] dark:text-gray-400  md:mx-6">
            <tr>
              <th scope="col" className="px-4 py-3">
                ID
              </th>
              <th scope="col" className="px-4 py-3">
                Date
              </th>
              <th scope="col" className="px-4 py-3">
                Amount
              </th>
              <th scope="col" className="px-4 py-3">
                Delivery status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={i}
                className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8"
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-xs font-medium whitespace-nowrap"
                >
                  {order.name}
                </th>
                <td className="px-4 py-3 text-xs">
                  {order.creation.substring(0, 10)}
                </td>
                <td className="px-4 py-3 text-xs">₹14,0000</td>
                <td className="px-4 py-3 text-xs text-right">
                  <button className="float-left bg-[#ecf7e7] text-[#50e364] p-2">
                    {order.delivery_status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// async function fetchRecentOrder() {
//   const baseURL = `https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get`;

//   try {
//     const response = await axios.get(baseURL, {
//       params: {
//         status: "Not Delivered",
//         start: parseInt(0),
//         page_length: parseInt(12),
//       },
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Token 4738b2b17fc8459:9cf183be1badf5a",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     return null;
//   }
// }

// function TableWithExport() {
//   const { orderList } = fetchRecentOrder();

//   return (
//     <div className="lg:mx-24 mx-6 lg:mt-10 mt-4 p-5 rounded-md">
//       <div className="flex justify-between">
//         <h1 className="text-black text-1xl md:text-2xl font-semibold">
//           Recent Orders
//         </h1>
//       </div>

//       <div className="relative overflow-x-auto shadow-md md:mt-8 mt-5">
//         <ListTable orderData={orderList} />
//       </div>
//     </div>
//   );
// }
