"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Mobilenav } from "./mobileNav";

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

  const pipes = [
    {
      id: 1,
      name: "Steel pipes",
    },
    {
      id: 2,
      name: "PCV pipes",
    },
    {
      id: 3,
      name: "Glass pipes",
    },
    {
      id: 4,
      name: "Iron pipes",
    },
    {
      id: 5,
      name: "Gate pipes",
    },
  ];

  const Fittings = [
    {
      id: 1,
      name: "Steel Fittings",
    },
    {
      id: 2,
      name: "PCV Fittings",
    },
    {
      id: 3,
      name: "Glass =Fittings",
    },
    {
      id: 4,
      name: "Iron Fittings",
    },
    {
      id: 5,
      name: "Gate valves",
    },
  ];

  const Valves = [
    {
      id: 1,
      name: "Steel FValves",
    },
    {
      id: 2,
      name: "PCV Valves",
    },
    {
      id: 3,
      name: "Glass Valves",
    },
    {
      id: 4,
      name: "Iron Valves",
    },
    {
      id: 5,
      name: "Gate Valves",
    },
  ];

  const Hoses = [
    {
      id: 1,
      name: "Steel Hoses",
    },
    {
      id: 2,
      name: "PCV Hoses",
    },
    {
      id: 3,
      name: "Glass Hoses",
    },
    {
      id: 4,
      name: "Iron Hoses",
    },
    {
      id: 5,
      name: "Gate Hoses",
    },
  ];

  const Tank = [
    {
      id: 1,
      name: "Steel WaterTanks",
    },
    {
      id: 2,
      name: "PCV WaterTanks",
    },
    {
      id: 3,
      name: "Glass WaterTanks",
    },
    {
      id: 4,
      name: "Iron WaterTanks",
    },
    {
      id: 5,
      name: "Gate WaterTanks",
    },
  ];

  const Wires = [
    {
      id: 1,
      name: "Steel Wires",
    },
    {
      id: 2,
      name: "PCV Wires",
    },
    {
      id: 3,
      name: "Glass Wires",
    },
    {
      id: 4,
      name: "Iron Wires",
    },
    {
      id: 5,
      name: "Gate Wires",
    },
  ];
  const Paints = [
    {
      id: 1,
      name: "Steel Paints",
    },
    {
      id: 2,
      name: "PCV Paints",
    },
    {
      id: 3,
      name: "Glass Paints",
    },
    {
      id: 4,
      name: "Iron Paints",
    },
    {
      id: 5,
      name: "Gate Paints",
    },
  ];

  const Motors = [
    {
      id: 1,
      name: "Steel Motor",
    },
    {
      id: 2,
      name: "PCV Motor",
    },
    {
      id: 3,
      name: "Glass Motor",
    },
    {
      id: 4,
      name: "Iron Motor",
    },
    {
      id: 5,
      name: "Gate Paints",
    },
  ];
  const Sanitwaryware = [
    {
      id: 1,
      name: "Steel Sanitwaryware ",
    },
    {
      id: 2,
      name: "PCV Sanitwaryware ",
    },
    {
      id: 3,
      name: "Glass Sanitwaryware ",
    },
    {
      id: 4,
      name: "Iron Sanitwaryware ",
    },
    {
      id: 5,
      name: "Gate Sanitwaryware ",
    },
  ];
  const BathroomFittings = [
    {
      id: 1,
      name: "Steel BathroomFittings",
    },
    {
      id: 2,
      name: "PCV BathroomFittingsr",
    },
    {
      id: 3,
      name: "Glass BathroomFittings",
    },
    {
      id: 4,
      name: "Iron BathroomFittings",
    },
    {
      id: 5,
      name: "Gate BathroomFittings",
    },
  ];

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
          aria-controls="drawer-navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 -mt-0.5"
          >
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

  //DESKTOP SIDEBAR CONTENT END

  // --------------- //

  //MOBILE SIDEBAR CONTENT START

  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    console.log(isMobileSidebarOpen);
    setMobileSidebarOpen(!isMobileSidebarOpen);
    if (isMobileSidebarOpen === false) {
      console.log("Opened");
    } else if (isMobileSidebarOpen === true) {
      console.log("Closed");
    }
  };

  const toggleClose = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };

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
          className="w-6 h-6"
        >
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
          className="w-6 h-6"
        >
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
          onClick={toggleMobileSidebar}
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
        <button
          className=""
          type="button"
          // onClick={toggleProfile}
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        </button>
      ),
    },
  ];

  //MOBILE SIDEBAR CONTENT END

  useEffect(() => {
    const updateSidebarStatus = () => {
      const screenWidth = window.innerWidth;

      if (isMobileSidebarOpen) {
        // If mobile sidebar is open and screen size is desktop
        if (screenWidth > 768) {
          setMobileSidebarOpen(false);
          setDesktopSidebarOpen(true);
        }
      } else if (isDesktopSidebarOpen) {
        // If desktop sidebar is open and screen size is mobile
        if (screenWidth <= 768) {
          setDesktopSidebarOpen(false);
          if (selectedCategory) {
            setSelectedCategory(!selectedCategory);
          }
          setMobileSidebarOpen(true);
          setDesktopSidebarOpen(false);
        }
      }
    };

    updateSidebarStatus();
    window.addEventListener("resize", updateSidebarStatus);

    return () => {
      window.removeEventListener("resize", updateSidebarStatus);
    };
  }, [isMobileSidebarOpen, isDesktopSidebarOpen]);

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
            aria-labelledby="drawer-navigation-label"
          >
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
                    }}
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
        {selectedCategory && (
          <div
            id="drawer-navigation"
            className={`fixed top-36 left-80 z-40 w-80 md:mb-32 bg-white h-screen p-4 overflow-y-auto transition-transform ${
              selectedCategory ? "" : "-translate-x-full"
            } bg-[#f2f2f2] dark:bg-gray-800`}
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label"
          >
            <button
              type="button"
              onClick={toggleCloseAll}
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
                  }`}
                >
                  <div className="flex">
                    <span className="ml-4 underline">{item.name}</span>
                  </div>
                </li>
              ))}

              {selectedCategory === "Fittings" &&
                Fittings.map((item) => (
                  <li
                    key={item.id}
                    className={`px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600`}
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Valves" &&
                Valves.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Hoses" &&
                Hoses.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Water Tanks" &&
                Tank.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Wires" &&
                Wires.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Paints" &&
                Paints.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Motor and Pumps" &&
                Motors.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Sanitary wares" &&
                Sanitwaryware.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    <div className="flex">
                      <span className="ml-4 underline">{item.name}</span>
                    </div>
                  </li>
                ))}
              {selectedCategory === "Bathroom fittings" &&
                BathroomFittings.map((item) => (
                  <li
                    key={item.id}
                    className="px-3 space-x-5 flex py-5 text-gray-700 justify-between dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
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

                    <button type="button" className="mr-7 text-white ">
                      <a href="/profile" >John Doe</a>
                    </button>
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
      </div>

      {/* DESKTOP NAVBAR END */}

      <Mobilenav />

      {/* MOBILE FOOTER START */}

      <div className={`mobile-sidebar ${isMobileSidebarOpen ? "open" : ""}`}>
        {isMobileSidebarOpen && (
          <div>
            <div className="fixed top-0 left-0 z-40 w-full h-36 bg-transparent" />

            <div
              id="drawer-navigation"
              className={`fixed top-0 left-0 bottom-30 z-40 w-full md:mb-32 bg-[#f2f2f2] h-screen p-4 overflow-y-auto transition-transform ${
                isMobileSidebarOpen ? "" : "-translate-x-full"
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
                  <span className=" ml-4 text-white text-1xl font-bold">
                    Category
                  </span>
                </div>
              </div>
              {/* list of items */}
              {isMobileSidebarOpen && (
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

        <footer className="bg-[#004b71] z-[100] text-white p-3 fixed bottom-0 w-full grid grid-cols-4 rounded-t-2xl md:hidden text-center">
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

      {/* MOBILE FOOTER  END */}
    </div>
  );
}
