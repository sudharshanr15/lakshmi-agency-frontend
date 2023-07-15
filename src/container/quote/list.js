"use client";
import { useState } from "react";

function Card(){
    return (
      <>
        <div className="border rounded-lg">
            <div className="flex justify-start p-4 mt-2">
              <div className="ml-4">
                <h1 className="text-black font-bold text-2-xl">
                  ABC Constructions
                </h1>
                <div className="flex">
                  <p className="mt-2  text-[#6A7079] md:text-1xl ">
                    Location: Door No:12, ABC Street, Indra Nagar,
                    Bangalrore,Karnataka,500 001
                  </p>
                </div>
                <div className="flex mt-10">
                  <p className="text-[#b9babc]">
                  Created On : 12 Jan’23
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
          <p className="text-black text-2xl font-semibold">Quote List</p>
        </div>

        <Row/>
        <Row/>
        <Row/>
       
    </>
  );
}