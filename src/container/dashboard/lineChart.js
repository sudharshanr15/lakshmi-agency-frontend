"use client";

import { useState , useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { Data } from "@/utils/Data";
import { fetchGraphData} from "@/utils/dashboardController";

Chart.register(CategoryScale);

function ChartDiagram({ chartData }) {
  return (
    <div className="md:m-5 chart-container bg-orange-200 rounded-md p-5 md:p-20">
      <h2 style={{ textAlign: "center" }}>Monthly purchase </h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}


export function LineChart() {


  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay , setSelectedDay] = useState("30");



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const day = [
    {
      id : 1,
      days : "30"
    },
    {
      id : 2,
      days : "60"
    },
    {
      id : 3,
      days : "90"
    }
  ]

  const ToggleGraphFilter = (day) => {
    if(day){
      console.log(day)
      setSelectedDay(day);
      console.log(day)

    }
    setIsOpen(!isOpen);
  }

  // const [graphData, setGraphData] = useState([]);

  // useEffect(() => {
  //   console.log("graph data use effect");

  //   const fetchData = async () => {
  //     console.log("Fetch graph");
  //     try {
  //       console.log("try block");
  //       const data = await fetchGraphDataa(selectedDay); // Assuming fetchGraphDataa returns the data you mentioned
  //       console.log(data.data);
  //       setGraphData(data.data);
  //       console.log("end");
  //     } catch (error) {
  //       console.error('Failed to fetch data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // const [chartData, setChartData] = useState({
  //   labels: Data.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained ",
  //       data: Data.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });
  // <ul>
  //       {graphData.map((item, index) => (
  //         <li key={index}>
  //           Name: {item.name}, Creation: {item.creation}, Total Qty: {item.total_qty}
  //         </li>
  //       ))}
  //     </ul>



  
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    console.log("graph data use effect");

    const fetchData = async () => {
      console.log("Fetch graph");
      try {
        console.log("try block");
        const data = await fetchGraphData(selectedDay); 
        console.log(data.data);
        setGraphData(data.data);
        console.log("end");
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []); 


  const chartData = {
    labels: graphData.map((item) => item.creation), // X-axis: "creation" data
    datasets: [
      {
        label: "Users Gained",
        data: graphData.map((item) => item.total_qty), // Y-axis: "total_qty" data
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <div className="bg-[#F7F7F7] p-1">
        <div className="lg:mx-20 lg:mt-10 md:mt-10">
          <div className="flex justify-between">
            <h1 className="text-black text-2xl font-bold">Monthly purchase </h1>

            <div className="mr-0">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="px-4 py-2  text-[#004b71] bg-[#e5eef1]   rounded-md focus:outline-none flex font-semibold"
                >
                  {/* Jan - June{" "} */}
                  last 30days
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
                    {day.map((items) =>(
                       <li key={items.id}>
                       <a
                         href="#"
                         className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                       >
                       <button type="button" onClick={() => ToggleGraphFilter(items.days)}> last {items.days} days</button>
                       </a>
                     </li>

                    )) }
                   
                  
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <div className="w-full p-10 md:p-20">
            <ChartDiagram chartData={chartData} />
          </div>
          
        </div>
      </div>
    </>
  );
}
