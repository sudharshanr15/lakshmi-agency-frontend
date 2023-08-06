"use client";
import { useState } from "react";

export function Mobilefooter() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("log ");
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleClose = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const categList = [
    {
      id: 1,
      link: "/image/pipes.jpg",
      categoryName: "Pipes",
    },
    {
      id: 2,
      link: "/image/fittings.jpg",
      categoryName: "Fittings",
    },
    {
      id: 3,
      link: "/image/valves.jpg",
      categoryName: "Valves",
    },
    {
      id: 4,
      link: "/image/hoses.jpg",
      categoryName: "Hoses",
    },
    {
      id: 5,
      link: "/image/watertank.jpg",
      categoryName: "Water Tanks",
    },
    {
      id: 6,
      link: "/image/wires.jpg",
      categoryName: "Wires",
    },
    {
      id: 7,
      link: "/image/paints.jpg",
      categoryName: "Paints",
    },
    {
      id: 8,
      link: "/image/motor.jpg",
      categoryName: "Motor and Pumps",
    },
    {
      id: 9,
      link: "/image/sanitaryware.jpg",
      categoryName: "Sanitary wares",
    },
    {
      id: 10,
      link: "/image/bathfittings.jpg",
      categoryName: "Bathroom fittings",
    },
  ];
  const mobilenav = [
    {
      id: 1,
      name: "Home",
      href: "#",
      current: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Quotes",
      href: "#",
      current: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Category",
      href: "#",
      current: false,
      pincode: "622023",
      icon: (
        <button
          className=""
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </button>
      ),
    },
    {
      id: 4,
      name: "Profile",
      href: "#",
      current: false,
      pincode: "622023",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div>
        {isDrawerOpen && (
          <div>
            {/* Green background for the top 36 pixels */}
            <div className="fixed top-0 left-0 z-40 w-full h-36 bg-transparent" />

            <div
              id="drawer-navigation"
              className={`fixed top-0 left-0 bottom-30 z-40 w-full md:mb-32 bg-[#f2f2f2] h-screen p-4 overflow-y-auto transition-transform ${
                isDrawerOpen ? "" : "-translate-x-full"
              } bg-[#f2f2f2] dark:bg-gray-800`}
              tabIndex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <div className="text-gray-400 bg-[#004b71] hover:text-white flex text-sm p-2.5 -mt-4 left-0 absolute  w-full items-center">
               <div className="">
               <button
                  type="button"
                  onClick={toggleClose}
                  data-drawer-hide="drawer-navigation"
                  aria-controls="drawer-navigation"
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-yellow-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
               </div>
               <div className="-mt-1">
                <span className=" ml-4 text-white text-1xl font-bold">Category</span>
               </div>

               
              </div>
              {/* list of items */}
              {isDrawerOpen && (
                <div className="grid grid-cols-3 m-3 gap-8 mt-16 ">
                  {categList.map((item) => (
                    <div className="items-center " key={item.categoryName}>
                      <img
                        src={item.link}
                        alt="category image"
                        className="-mt-3 rounded-full w-12 h-12 border-4 border-yellow-400"
                      />
                      <span className="mt-2">{item.categoryName}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <footer className="bg-[#004b71] text-white p-3 fixed bottom-0 w-full grid grid-cols-4 rounded-t-2xl md:hidden text-center">
          {mobilenav.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center hover:text-yellow-300 hover:underline"
            >
              <span>{item.icon}</span>
              <span className="mt-1">{item.name}</span>
            </div>
          ))}
        </footer>
      </div>
    </>
  );
}




