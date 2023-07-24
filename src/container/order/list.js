"use client";
import { useState } from "react";

function Card(){
    return (
      <>
        <div className="border rounded-lg mt-2">
          <div className="flex justify-between p-4 mt-2">
            <div className="ml-4">
              <h1 className="text-[#0a4e71] font-bold text-2-xl">
                Ordered On 22 May 2022
              </h1>
              <div className="">
                <p className="mt-2  text-[#b9babc] md:text-1xl flex-end">
                  Total items 3
                </p>
              </div>
              <div className="flex">
                <p className="mt-2  text-black md:text-1xl ">
                  Order ID : AISR7234351
                </p>
              </div>
            </div>
            <div className="ml-4 justify-end">
              <h1 className="text-[#0a4e71] font-bold text-2-xl text-right">
                ₹21,400
              </h1>
              <div className="">
                <p className="mt-2  text-[#b9babc] md:text-1xl text-right">
                  ₹18,400 + ₹200(delivery fee)
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

function Row(){
  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between lg:mx-10 mt-5 rounded-md">
          <Card/>
          <Card/>
        </div>
    </>
  )
}

export function List() {
  
  return (
    <>
     
        <div className="p-5 flex justify-between">
          <p className="text-black text-2xl font-semibold">Order List</p>
        </div>

        <Row/>
        <Row/>
        <Row/>
       
    </>
  );
}
