"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { ListTable } from "./action/recentOrder";
// import { getDataList } from "@/utils/getData";
// import { setOptions } from "react-chartjs-2/dist/utils";
import { fetchDataForStore } from "@/utils/dashboardController";


export function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // const { orderList, isLoading } = useOrderData();
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
  ];

  const [orders, setOrders] = useState(null);
  const [quotes, setQuotes] = useState(null);
  const [savings, setSavings] = useState(null);
  const [purchasedAmount, setPurchasedAmount] = useState(null);

  useEffect(() => {
    console.log("Fetch api for cards");
    const days = 30; // Change this to the desired number of days

    const fetchCardData = async () => {
      try {
        const data = await fetchDataForStore(days); // Call the second API
        console.log('Data from the second API:', data);
        setOrders(data.data.orders);
        setQuotes(data.data.quotes);
        setSavings(data.data.savings);
        setPurchasedAmount(data.data.purchased_amount);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchCardData();
  }, []);




  return (
    <>
      <div className="md:mt-40">
        <div className="lg:mx-5 mx-2 lg:mt-52 md:mt-16">
          <div className="flex justify-between mt-3">
            <h1 className="text-black text-2xl font-bold">Statics</h1>
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
                      <li key={item.id}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                        >
                          <button onClick={() => toggleFilter(item.days)}>
                            Last {item.days} days
                          </button>
                        </a>
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
                        {" "}
                        {orders !== null
                          ? orders
                          : 0}
                      </p>
                      {/* <div className="flex  text-lime-600 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 mt-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                          />
                        </svg>
                        <p className="mt-2  md:text-1xl ">12.3%</p>
                      </div> */}
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
                        {quotes !== null
                          ? quotes
                          : 0}
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
                        
                        {savings !== null
                          ? savings
                          : 0} 
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
                        {purchasedAmount !== null
                          ? purchasedAmount
                          : 0}
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

async function fetchRecentOrder() {
  const baseURL = `https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get`;

  try {
    const response = await axios.get(baseURL, {
      params: {
        status: "Not Delivered",
        start: parseInt(0),
        page_length: parseInt(12),
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 4738b2b17fc8459:9cf183be1badf5a",
      },
    });

    return response.data;
  } catch (error) {
    return null;
  }
}

export function RecentOrder() {
  const { orderList } = fetchRecentOrder();

  return (
    <div className="lg:mx-24 mx-6 lg:mt-10 mt-4 p-5 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-black text-1xl md:text-2xl font-semibold">
          Recent Orders
        </h1>
      </div>

      <div className="relative overflow-x-auto shadow-md md:mt-8 mt-5">
        <ListTable orderData={orderList} />
      </div>
    </div>
  );
}
