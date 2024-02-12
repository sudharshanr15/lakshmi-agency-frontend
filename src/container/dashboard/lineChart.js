"use client";
import { getChartData } from "@/controller/dashboardController";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function LineChart() {
  const [chatData, setChartData] = useState(null);
  const [duration, setDuration] = useState("Jan - June");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getChartData({setChartData});
    console.log(chatData,"Raaju Debug")
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function changeDuration(_duration) {
    setDuration(_duration);
    setIsOpen(false);
  }
  
  return (
    <>
      <div className="bg-[#F7F7F7] p-5">
        <div className="lg:mx-20 lg:mt-10 md:mt-10">
          <div className="flex justify-between">
            <h1 className="text-black text-2xl font-bold">Monthly purchase</h1>

            <div className="mr-0">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="lg:px-4 lg:py-2 px-2 py-1 text-xs lg:text-base text-[#004b71] bg-[#e5eef1] rounded-md focus:outline-none flex font-semibold"
                >
                  {duration}
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
                  <ul className="absolute right-0 z-20 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                    <li onClick={() => changeDuration("Last 6 months")}>
                      <di className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Last 6 months
                      </di>
                    </li>
                    <li onClick={() => changeDuration("Last year")}>
                      <div className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Last year
                      </div>
                    </li>
                    <li onClick={() => changeDuration("All")}>
                      <div className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                        All
                      </div>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="w-full px-0 py-2 lg:px-14 lg:py-10">
            <div className="col-4">
              {chatData && (
                <AreaChart labels={chatData.labels} values={chatData.values} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AreaChart({ labels, values }) {
  const [graph, setGraph] = useState({
    options: {
      colors: ["#F9C74F"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: labels,
      },
    },
    series: [
      {
        name: "Monthly Purchase",
        data: values,
      },
    ],
  });
  return (
    <Chart
      options={graph.options}
      series={graph.series}
      type="area"
      width="100%"
      height="500px"
    />
  );
}
