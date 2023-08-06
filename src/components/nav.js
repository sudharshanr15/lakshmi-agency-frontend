"use client";
import { Mobilenav } from "./mobileNav";
import { Mobilefooter } from "./mobileFooter";
import { useState } from "react";

export function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isPipeOpen, setPipeOpen] = useState(false);
  const toggleDrawer = () => {
    console.log("log ");
    setDrawerOpen(!isDrawerOpen);
    if (isPipeOpen) {
      setPipeOpen(!isPipeOpen);
    }
  };

  const toggleClose = () => {
    setPipeOpen(!isPipeOpen);
    setDrawerOpen(!isDrawerOpen);
  };

  const togglePipe = () => {
    console.log("log ");
    setPipeOpen(!isPipeOpen);
  };
  // Dummy list items
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

  const pipeList = [
    {
      id: 1,
      name: "Steel valves",
    },
    {
      id: 2,
      name: "PCV valves",
    },
    {
      id: 3,
      name: "Glass valves",
    },
    {
      id: 4,
      name: "Iron valves",
    },
    {
      id: 5,
      name: "Gate valves",
    },
  ];

  const fittingList = [
    {
      id: 1,

      categoryName: "Pipes",
    },
    {
      id: 2,
      link: "/image/fittings.jpg",
      categoryName: "Fittings",
    },
  ];

  const categoryMenu = [
    {
      id: 1,
      name: "All categoryMenu",
      href: "#",
      current: false,
      icon: (
        <button
          className=""
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      ),
    },
    {
      id: 2,
      name: "Quotes",
      href: "/quote_list",
      current: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Reach us",
      href: "#",
      current: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Our stores",
      href: "#",
      current: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div>
      {isDrawerOpen && (
        <div
          id="drawer-navigation"
          className={`fixed top-36 left-0 z-40 w-80 md:mb-32 bg-[#f2f2f2] h-screen p-4 overflow-y-auto transition-transform ${
            isDrawerOpen ? "" : "-translate-x-full"
          } bg-[#f2f2f2] dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          {/* <button
    type="button"
    onClick={toggleClose} // This will close the sidebar
    data-drawer-hide="drawer-navigation"
    aria-controls="drawer-navigation"
    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
    <svg
      aria-hidden="true"
      className="w-5 h-5" 
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"></path>
    </svg>
    <span className="sr-only">Close menu</span>
  </button> */}
          {/* list of items */}
          {isDrawerOpen && (
            <ul className="py-5">
              {categList.map((item) => (
                <li
                  key={item.id}
                  className="px-3 space-x-5 flex py-3 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  type="button"
                  onClick={togglePipe}
                >
                  <div className="flex">
                    <img
                      src={item.link}
                      alt="category image"
                      className="-mt-3 rounded-full w-12 h-12 border-4 border-yellow-400"
                    />
                    <span className="ml-4">{item.categoryName} </span>
                  </div>

                  <span className="mt-2">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {isPipeOpen ? (
        <div
          id="drawer-navigation"
          className={`fixed top-36 left-80 z-40 w-80 md:mb-32 bg-white h-screen p-4 overflow-y-auto transition-transform ${
            isPipeOpen ? "" : "-translate-x-full"
          } bg-[#f2f2f2] dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            onClick={togglePipe} // This will close the sidebar
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          {isDrawerOpen && (
            <ul className="py-4">
              {pipeList.map((item) => (
                <li
                  key={item.id}
                  className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 hover:{console.log('Hello')"
                >
                  <div className="flex">
                    <span className="ml-4 underline">{item.name} </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        !isPipeOpen
      )}

      <div className="hidden lg:block">
        <nav className="bg-[#004b71] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w mx-2 flex flex-wrap items-center justify-between p-4">
            <a href="#" className="flex items-center">
              <img
                src="/lakshmi.png"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-1xl font-semibold whitespace-nowrap text-white">
                LAKSHMI AGENCY
              </span>
              <div className="flex ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <span className="self-center  font-semibold whitespace-nowrap text-white">
                  Delivered to Trichy -{" "}
                  <span className="text-yellow-300">622023</span>{" "}
                </span>
              </div>
            </a>

            <div className="flex md:order-2">
              <div className="flex m-3 md:hidden lg:block ">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2  text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <span className="mr-7 text-white ">Cart</span>
                </div>
              </div>

              <div className="flex m-3 md:hidden lg:block ">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 text-white cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <span className="mr-7 text-white ">John Doe</span>
                </div>
              </div>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-grow flex justify-center ml-3">
              <div className="w-full max-w-2xl">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <input
                    id="search"
                    className="block w-full bg-white text-white rounded-md py-2 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="search"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="hidden md:block bg-[#004b71] text-white ">
            <div className=" max-w-2 p-1.5 flex flex-wrap items-center justify-between mx-auto ">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {categoryMenu.map((item) => (
                    <a
                      className="text-sm"
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <div className="flex">
                        {item.icon} {item.name} &nbsp;{" "}
                        <span className="mx-3"> | </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex md:order-2 md:mr-8 lg:mr-12  ">
                <div className="relative hidden md:block">
                  <button className="rounded-md border border-yellow-300 text-yellow-300 p-3 hover:bg-yellow-300 hover:text-white">
                    Become a seller
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="bg-[#F2F2F2] border-none text-white p-1 ">
            <span className="ml-5 flex flex-auto text-[#6A7079]">
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mx-3 w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
                  clipRule="evenodd"
                />
              </svg>
              summary
            </span>
          </p>
        </nav>
      </div>
      <Mobilenav />
      <Mobilefooter />
    </div>
  );
}
