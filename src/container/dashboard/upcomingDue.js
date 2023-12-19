"use client";

import React, { useEffect, useState } from "react";

export function UpcomingDue() {
  return (
    <div className="lg:mx-24 mx-6 lg:mt-10 mt-4 p-5 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-black text-1xl md:text-2xl font-semibold">
          Upcoming due
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
            <tr className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1223456QEA
              </th>
              <td className="px-6 py-4">12 Jan23</td>
              <td className="px-6 py-4">Astral CPVC Pro - 40mm pipe,3mtr</td>
              <td className="px-6 py-4">₹14,0000</td>
              <td className="px-6 py-4 text-right">
                <button className="float-left bg-[#ecf7e7] text-[#50e364] p-2">
                  Delivered
                </button>
              </td>
            </tr>

            <tr className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1223456QEA
              </th>
              <td className="px-6 py-4">12 Jan23</td>
              <td className="px-6 py-4">Astral CPVC Pro - 40mm pipe,3mtr</td>
              <td className="px-6 py-4">₹14,0000</td>
              <td className="px-6 py-4 text-right">
                <button className="float-left bg-[#ecf7e7] text-[#50e364] p-2">
                  Delivered
                </button>
              </td>
            </tr>

            <tr className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1223456QEA
              </th>
              <td className="px-6 py-4">12 Jan23</td>
              <td className="px-6 py-4">Astral CPVC Pro - 40mm pipe,3mtr</td>
              <td className="px-6 py-4">₹14,0000</td>
              <td className="px-6 py-4 text-right">
                <button className="float-left bg-[#ecf7e7] text-[#50e364] p-2">
                  Delivered
                </button>
              </td>
            </tr>

            <tr className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1223456QEA
              </th>
              <td className="px-6 py-4">12 Jan23</td>
              <td className="px-6 py-4">Astral CPVC Pro - 40mm pipe,3mtr</td>
              <td className="px-6 py-4">₹14,0000</td>
              <td className="px-6 py-4 text-right">
                <button className="float-left bg-[#ecf7e7] text-[#50e364] p-2">
                  Delivered
                </button>
              </td>
            </tr>

            <tr className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1223456QEA
              </th>
              <td className="px-6 py-4">12 Jan23</td>
              <td className="px-6 py-4">Astral CPVC Pro - 40mm pipe,3mtr</td>
              <td className="px-6 py-4">₹14,0000</td>
              <td className="px-6 py-4 text-right">
                <button className="float-left bg-[#ecf7e7] text-[#50e364] p-2">
                  Delivered
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
