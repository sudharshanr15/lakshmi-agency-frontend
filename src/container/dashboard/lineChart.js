'use client'

import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { Data } from "@/utils/Data";

Chart.register(CategoryScale);

function ChartDiagram({ chartData }) {
  return (
    <div className="chart-container bg-gray-300 rounded-md p-5">
      <h2 style={{ textAlign: "center" }}>Line Chart </h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

export function LineChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
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
                  className="px-4 py-2  text-[#004b71] bg-[#e5eef1]   rounded-md focus:outline-none flex font-semibold">
                  Jan - June{" "}
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
        <div className=' flex justify-center items-center'>
          <div className='w-full p-20'>
            <ChartDiagram chartData={chartData} />
          </div>
        </div>
      </div>
    </>
  );
}