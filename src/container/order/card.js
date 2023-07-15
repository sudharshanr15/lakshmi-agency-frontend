"use client";
import { useState } from "react";

export function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="">
        <div className="lg:mx-5 mx-2 lg:mt-44 md:mt-16">
          <div className="flex justify-between">
            <h2 className="text-black text-2xl font-bold">Statics</h2>

            <div className="mr-0">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-2  text-[#004b71] bg-[#e5eef1]   rounded-md focus:outline-none flex font-semibold">
                  Last 30 days{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Option 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Option 3
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between lg:mx-8 mt-1 p-5 rounded-md">
          <div className="bg-[#f6e9be] rounded-lg">
            <div className="flex justify-start p-5 mt-0">
              <div className="text-center bg-white h-10 w-10 mt-2 flex items-center justify-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f6e9be]">
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
                  <p className="mt-1 font-bold text-1xl md:text-2xl">150</p>
                  <div className="flex  text-lime-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-3">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                      />
                    </svg>
                    <p className="mt-2  md:text-1xl ">12.3%</p>
                  </div>
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
                  className="w-6 h-6 text-lime-600">
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
                  <p className="mt-1 font-bold text-1xl md:text-2xl">150</p>
                  <div className="flex  text-lime-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-3">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                      />
                    </svg>
                    <p className="mt-2  md:text-1xl ">12.3%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
