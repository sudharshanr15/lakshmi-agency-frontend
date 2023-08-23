"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Mobilenav } from "./mobileNav";
import {
  categList,
  pipes,
  Fittings,
  Valves,
  Hoses,
  Tank,
  Wires,
  Paints,
  Motors,
  Sanitwaryware,
  BathroomFittings,
  mobilenav,
  ProfileItems,
  categoryItems,
} from "../utils/navContent";

export function Nav() {
  //DESKTOP SIDEBAR CONTENT START

  const [isDesktopSidebarOpen, setDesktopSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleDesktopSidebar = () => {
    setDesktopSidebarOpen(!isDesktopSidebarOpen);
    if (selectedCategory) {
      setSelectedCategory(!selectedCategory);
    }
    if (setDesktopSidebarOpen === false) {
      console.log("DesktopSidebar Opened");
    } else if (setDesktopSidebarOpen === true) {
      console.log("DesktopSidebar Closed");
    }
  };
  const categoryMenu = [
    {
      id: 1,
      name: "",
      href: "#",
      current: false,
      icon: (
        <button
          className="flex"
          type="button"
          onClick={toggleDesktopSidebar}
          aria-controls="drawer-navigation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 -mt-0.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>{" "}
          <span className="ml-2 ">All categoryMenu</span>
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
          className="w-5 h-5 mr-1">
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
          className="w-5 h-5 mr-1">
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
          className="w-5 h-5 mr-1">
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

  const toggleCloseAll = () => {
    setSelectedCategory(false);
  };

  const toggleSubList = (submenu) => {
    const Item = submenu;

    setSelectedCategory(submenu);

    if (!selectedCategory) {
      setSelectedCategory(true);
    }
  };
  useEffect(() => {
    const closeMenuOnClickOutside = (event) => {
      if (isDesktopSidebarOpen && !event.target.closest("#drawer-navigation")) {
        setDesktopSidebarOpen(false);
        setSelectedCategory(null);
      }
    };

    if (isDesktopSidebarOpen) {
      document.addEventListener("click", closeMenuOnClickOutside);
    } else {
      document.removeEventListener("click", closeMenuOnClickOutside);
    }

    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside);
    };
  }, [isDesktopSidebarOpen]);

  //DESKTOP SIDEBAR CONTENT END

  // --------------- //

  //MOBILE SIDEBAR CONTENT START

  const [isMobSidebar, setMobSidebar] = useState(false);
  const [isSelectedProfile, setSelectedProfile] = useState(false);
  const clickedMenu = (menu) => {
    setMobSidebar(menu);
  };

  const selectedListItems = (submenu) => {
    console.log(`Clicked profile items: ${submenu}`);
    console.log;
    setSelectedProfile(submenu);
  };

  const CloseMobSidebar = () => {
    setMobSidebar(false);
  };

  //MOBILE SIDEBAR CONTENT END

  useEffect(() => {
    const updateSidebarStatus = () => {
      const screenWidth = window.innerWidth;

      if (isMobSidebar) {
        // If mobile sidebar is open and screen size is desktop
        if (screenWidth > 768) {
          setMobSidebar(false);
          setDesktopSidebarOpen(true);
        }
      } else if (isDesktopSidebarOpen) {
        // If desktop sidebar is open and screen size is mobile
        if (screenWidth <= 768) {
          setDesktopSidebarOpen(false);
          if (selectedCategory) {
            setSelectedCategory(!selectedCategory);
          }
          setMobSidebar(true);
          setDesktopSidebarOpen(false);
        }
      }
    };

    updateSidebarStatus();
    window.addEventListener("resize", updateSidebarStatus);

    return () => {
      window.removeEventListener("resize", updateSidebarStatus);
    };
  }, [isMobSidebar, isDesktopSidebarOpen]);

  return (
    <div>
      {/* DESKTOP NAVBAR START */}

      <div className={`desktop-sidebar ${isDesktopSidebarOpen ? "open" : ""}`}>
        {isDesktopSidebarOpen && (
          <div
            id="drawer-navigation"
            className={`fixed top-36 left-0 z-40 w-80 md:mb-32 bg-[#f2f2f2] h-screen p-4 overflow-y-auto transition-transform ${
              isDesktopSidebarOpen ? "" : "-translate-x-full"
            } bg-[#f2f2f2] dark:bg-gray-800`}
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label">
            {/* list of items */}
            {isDesktopSidebarOpen && (
              <ul className="py-5">
                {categList.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-3 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                    type="button"
                    onClick={() => {
                      toggleSubList(item.categoryName);
                    }}>
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
                          className="w-4 h-4">
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
        {selectedCategory && (
          <div
            id="drawer-navigation"
            className={`fixed top-36 left-80 z-40 w-80 md:mb-32 bg-white h-screen p-4 overflow-y-auto transition-transform ${
              selectedCategory ? "" : "-translate-x-full"
            } bg-[#f2f2f2] dark:bg-gray-800`}
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label">
            <button
              type="button"
              onClick={toggleCloseAll}
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
            </button>

            <ul className="py-4">
              {pipes.map((item) => (
                <li
                  key={item.id}
                  className={`px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 ${
                    selectedCategory === "Fittings" ||
                    selectedCategory === "Valves" ||
                    selectedCategory === "Hoses" ||
                    selectedCategory === "Water Tanks" ||
                    selectedCategory === "Valves" ||
                    selectedCategory === "Wires" ||
                    selectedCategory === "Paints" ||
                    selectedCategory === "Valves" ||
                    selectedCategory === "Motor and Pumps" ||
                    selectedCategory === "Sanitary wares" ||
                    selectedCategory === "Bathroom fittings"
                      ? "hidden"
                      : ""
                  }`}>
                  <div className="flex">
                    <span className="ml-4 underline">{item.name}</span>
                  </div>
                </li>
              ))}

              {selectedCategory === "Fittings" &&
                Fittings.map((item) => (
                  <li
                    key={item.id}
                    className={`px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600`}>
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Valves" &&
                Valves.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Hoses" &&
                Hoses.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Water Tanks" &&
                Tank.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Wires" &&
                Wires.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Paints" &&
                Paints.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Motor and Pumps" &&
                Motors.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Sanitary wares" &&
                Sanitwaryware.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Bathroom fittings" &&
                BathroomFittings.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
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
                    className="w-6 h-6 text-white">
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
                      className="w-6 h-6 mr-2  text-white">
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
                      className="w-6 h-6 mr-2 text-white cursor-pointer">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    <button type="button" className="mr-7 text-white ">
                      <a href="/profile">John Doe</a>
                    </button>
                  </div>
                </div>

                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14">
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
                          className="w-6 h-6">
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
                        aria-current={item.current ? "page" : undefined}>
                        <div className="flex">
                          <span className="">{item.icon} </span>
                          <span className="ml-1">{item.name} </span>&nbsp;{" "}
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
                  className="mx-3 w-5 h-5">
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
      </div>

      {/* DESKTOP NAVBAR END */}

      <Mobilenav />

      {/* MOBILE FOOTER START */}

      <div className={`mobile-sidebar ${isMobSidebar ? "open" : ""}`}>
        {isMobSidebar && (
          <div>
            <div className="fixed top-0 left-0 z-40 w-full h-36 bg-transparent" />

            <div
              id="drawer-navigation"
              className={`fixed top-0 left-0 bottom-30 z-40 w-full md:mb-32 bg-[#f2f2f2] h-screen p-4 overflow-y-auto transition-transform ${
                isMobSidebar ? "" : "-translate-x-full"
              } bg-[#f2f2f2] dark:bg-gray-800`}
              tabIndex="-1"
              aria-labelledby="drawer-navigation-label">
              <div className="text-gray-400 bg-[#004b71] hover:text-white flex text-sm p-2.5 -mt-4 left-0 absolute  w-full items-center">
                <div className="">
                  <button
                    type="button"
                    onClick={CloseMobSidebar}
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-yellow-400">
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
                  <span className="ml-4 text-white text-2xl font-semibold">
                    {isMobSidebar === "Category" ? "Category" : "Profile"}
                  </span>
                </div>
              </div>
              {/* list of items */}
              {isMobSidebar === "Category" && (
                <div className="grid grid-cols-3 m-3 gap-8 mt-16">
                  {categoryItems.map((item) => (
                    <div className="items-center" key={item.id}>
                      <img
                        src={item.link}
                        alt="category image"
                        className="-mt-3 rounded-full w-12 h-12 border-4 border-yellow-400"
                      />
                      <span className="mt-2 ml-1">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
              {isMobSidebar === "Profile" && !isSelectedProfile ? (
                <div className="profile-items-container mt-11">
                  {ProfileItems.map((item) => (
                    <div className="h-full w-full " key={item.id}>
                      <button
                        type="button"
                        onClick={() => selectedListItems(item.name)}
                        className="flex items-center space-x-6 p-3 ">
                        <span>{item.icon}</span>
                        <span className="ml-3">{item.name}</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {/* Display the selected profile item's content */}
                  {isSelectedProfile && (
                    <div>
                      <div className="mt-10"></div>
                      {/* Add a navigation element to go back to the profile list */}
                      <button onClick={() => setSelectedProfile(null)}>
                        Back to Profile
                      </button>
                      <div className="mt-10">
                        {isSelectedProfile == "My Profile" ? (
                          <div className="mt-40 lg:mt-6 profileSection m-4 ">
                            <div className="border p-6 lg:mt-4 bg-white">
                              <span className="justify-start font-bold text-[#f9c74f] md:text-3xl">
                                Hy Yuvanesh !
                              </span>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className=" mt-4  lg:mx-4 mx-2">
                                  <div className="relative">
                                    <label className="text-[#c1c1c1] text-sm font-bold  tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                      Full Name{" "}
                                      <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      required
                                      className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                    />
                                  </div>
                                </div>
                                <div className=" mt-2  lg:mx-4 mx-2">
                                  <div className="relative">
                                    <label className="text-[#c1c1c1] text-sm font-bold  tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                      Email{" "}
                                      <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                      type="email"
                                      required
                                      className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                    />
                                  </div>
                                </div>
                                <div className="mt-3 lg:mx-4 mx-2 md:mt-5">
                                  <div className="relative">
                                    <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-3">
                                      Mobile Number{" "}
                                      <span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex items-center border border-[#c1c1c1] rounded-lg overflow-hidden">
                                      <div className="flex items-center  p-2 px-4">
                                        <img
                                          src="/image/india.png"
                                          alt="Country Code"
                                          className="mr-2  h-5 mt-1"
                                        />
                                        <span className="text-[#c1c1c1]">
                                          +91
                                        </span>
                                        <span className="ml-2 text-[#c1c1c1]">
                                          |
                                        </span>
                                      </div>
                                      <input
                                        type="tel"
                                        required
                                        className="-ml-1 p-5 py-1   w-full focus:ring-blue-500 focus:outline-none"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4 text-right gap-2">
                                <button
                                  type="button"
                                  className="border border-[#0A4E71] px-4 py-2 rounded-sm">
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm">
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="mt-2">
                        {isSelectedProfile == "Billing Address" ? (
                          <div className=" mt-4 lg:mt-6 billingSection mb-32">
                            <div className="flex flex-col justify-start mx-5">
                              <span className="font-bold text-[#125476] md:text-2xl lg:ml-4">
                                Hy Yuvanesh !
                              </span>
                              <span className="mt-2 text-black md:text-1.5xl lg:ml-4">
                                Fill in the Business Details and make your
                                purchase journey smoother
                              </span>
                            </div>

                            <div className=" p-6 lg:mt-4">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="border p-6">
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Name:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Sharath
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Primary Mobile Number:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      9489123456
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Secondary Mobile Number:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      9489123456
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Email ID:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Sharathtraders@gmail.com
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Address:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Door No:12, ABC Street, Indra Nagar,
                                      Bangalore, Karnataka, (500 001)
                                    </span>
                                  </div>
                                  <div className="p-4 text-right gap-2 mt-3">
                                    <button
                                      type="button"
                                      className=" underline text-red-600 px-4 py-2 rounded-sm">
                                      delete
                                    </button>
                                    <button
                                      type="button"
                                      className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm">
                                      Edit
                                    </button>
                                  </div>
                                </div>
                                <div className="border p-6">
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Name:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Sharath
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Primary Mobile Number:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      9489123456
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Secondary Mobile Number:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      9489123456
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Email ID:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Sharathtraders@gmail.com
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Address:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Door No:12, ABC Street, Indra Nagar,
                                      Bangalore, Karnataka, (500 001)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="mt-2">
                        {isSelectedProfile == "Business Details" ? (
                          <div className=" mt-4 lg:mt-6 billingSection mb-32">
                            <div className="flex flex-col justify-start mx-5">
                              <span className="font-bold text-[#125476] md:text-2xl lg:ml-4">
                                Hy Yuvanesh !
                              </span>
                              <span className="mt-2 text-black md:text-1.5xl lg:ml-4">
                                Fill in the Business Details and make your
                                purchase journey smoother
                              </span>
                            </div>

                            <div className=" p-6 lg:mt-4">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="border p-6">
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Name:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Sharath
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Primary Mobile Number:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      9489123456
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Secondary Mobile Number:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      9489123456
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Email ID:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Sharathtraders@gmail.com
                                    </span>
                                  </div>
                                  <div className="mt-3 text-[#b0b0b0]">
                                    Address:
                                    <span className="font-semibold text-black">
                                      {" "}
                                      Door No:12, ABC Street, Indra Nagar,
                                      Bangalore, Karnataka, (500 001)
                                    </span>
                                  </div>
                                  <div className="p-4 text-right gap-2 mt-3">
                                    <button
                                      type="button"
                                      className=" underline text-red-600 px-4 py-2 rounded-sm">
                                      delete
                                    </button>
                                    <button
                                      type="button"
                                      className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm">
                                      Edit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="mt-2">
                        {isSelectedProfile == "Wish list" ? (
                          <div className=" p-6 lg:mt-4 mb-36">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                              <div className="border p-4">
                                <div className="justify-between flex">
                                  <span>
                                    LG 668L Inverter Frost Free Side By Side...
                                  </span>
                                </div>
                                <div className="justify-between flex">
                                  <span className="text-[#20c431]">
                                    In stock
                                  </span>
                                </div>
                                <div className=" flex mt-1">
                                  <button
                                    type="button"
                                    className="w-1/2 border border-[#ff4848] text-[#ff4848] m-1 rounded-md">
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-[#f9c74f] text-[#0a4e71] p-2 w-1/2 m-1 rounded-md">
                                    Add to project
                                  </button>
                                </div>
                              </div>
                              <div className="border p-4">
                                <div className="justify-between flex">
                                  <span>
                                    LG 668L Inverter Frost Free Side By Side...
                                  </span>
                                </div>
                                <div className="justify-between flex">
                                  <span className="text-[#20c431]">
                                    In stock
                                  </span>
                                </div>
                                <div className=" flex mt-1">
                                  <button
                                    type="button"
                                    className="w-1/2 border border-[#ff4848] text-[#ff4848] m-1 rounded-md">
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-[#f9c74f] text-[#0a4e71] p-2 w-1/2 m-1 rounded-md">
                                    Add to project
                                  </button>
                                </div>
                              </div>
                              <div className="border p-4">
                                <div className="justify-between flex">
                                  <span>
                                    LG 668L Inverter Frost Free Side By Side...
                                  </span>
                                </div>
                                <div className="justify-between flex">
                                  <span className="text-[#20c431]">
                                    In stock
                                  </span>
                                </div>
                                <div className=" flex mt-1">
                                  <button
                                    type="button"
                                    className="w-1/2 border border-[#ff4848] text-[#ff4848] m-1 rounded-md">
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-[#f9c74f] text-[#0a4e71] p-2 w-1/2 m-1 rounded-md">
                                    Add to project
                                  </button>
                                </div>
                              </div>
                              <div className="border p-4">
                                <div className="justify-between flex">
                                  <span>
                                    LG 668L Inverter Frost Free Side By Side...
                                  </span>
                                </div>
                                <div className="justify-between flex">
                                  <span className="text-[#20c431]">
                                    In stock
                                  </span>
                                </div>
                                <div className=" flex mt-1">
                                  <button
                                    type="button"
                                    className="w-1/2 border border-[#ff4848] text-[#ff4848] m-1 rounded-md">
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-[#f9c74f] text-[#0a4e71] p-2 w-1/2 m-1 rounded-md">
                                    Add to project
                                  </button>
                                </div>
                              </div>
                              <div className="border p-4">
                                <div className="justify-between flex">
                                  <span>
                                    LG 668L Inverter Frost Free Side By Side...
                                  </span>
                                </div>
                                <div className="justify-between flex">
                                  <span className="text-[#20c431]">
                                    In stock
                                  </span>
                                </div>
                                <div className=" flex mt-1">
                                  <button
                                    type="button"
                                    className="w-1/2 border border-[#ff4848] text-[#ff4848] m-1 rounded-md">
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-[#f9c74f] text-[#0a4e71] p-2 w-1/2 m-1 rounded-md">
                                    Add to project
                                  </button>
                                </div>
                              </div>
                              <div className="border p-4">
                                <div className="justify-between flex">
                                  <span>
                                    LG 668L Inverter Frost Free Side By Side...
                                  </span>
                                </div>
                                <div className="justify-between flex">
                                  <span className="text-[#20c431]">
                                    In stock
                                  </span>
                                </div>
                                <div className=" flex mt-1">
                                  <button
                                    type="button"
                                    className="w-1/2 border border-[#ff4848] text-[#ff4848] m-1 rounded-md">
                                    Delete
                                  </button>
                                  <button
                                    type="button"
                                    className="bg-[#f9c74f] text-[#0a4e71] p-2 w-1/2 m-1 rounded-md">
                                    Add to project
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* <div className="mt-2">
                        {isSelectedProfile == "Wish list" ? (
                          
                        ) : (
                          ""
                        )}
                      </div> */}
                    </div>
                  )}
                </div>
              )}
              {isMobSidebar === "Home" && (
                <>{setMobSidebar(false) /* Close the sidebar */}</>
              )}
            </div>
          </div>
        )}
      </div>

      <footer className="bg-[#004b71] z-50 text-white p-3 fixed bottom-0 w-full grid grid-cols-4 rounded-t-2xl md:hidden text-center">
        {mobilenav.map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-center justify-center hover:text-yellow-300 hover:underline focus:outline-none"
            onClick={() => clickedMenu(item.name)}>
            <span>{item.icon}</span>
            <span className="mt-1">{item.name}</span>
          </button>
        ))}
      </footer>
    </div>
  );
}
