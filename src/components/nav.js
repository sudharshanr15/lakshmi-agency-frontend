"use client";
import { Mobilenav } from "./mobileNav";
import { Mobilefooter } from "./mobileFooter";
import { redirect, useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAsync } from "@/lib/state/items/CategoriesSlicer";
import Link from "next/link";
import {
  getCategories,
  getSubCategories,
} from "@/controller/dashboardController";
import {
  getBillingAddress,
  getProfileDetails,
} from "@/controller/profileController";
import { category } from "@/lib/server_api/api";

export function Nav({isDrawerOpen,setDrawerOpen}) {
  const categories_test = useSelector((state) => state.categories.value)
  const action_dispatch = useDispatch()

  useEffect(() => {
    action_dispatch(updateAsync())
    // category()
  }, [])

  useEffect(() => {
    console.log("Categories updated")
    console.log(categories_test)
  }, [categories_test])

  const [isPipeOpen, setPipeOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [parent, setParent] = useState("");
  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const toggleDrawer = () => {
    // console.log("log drawer");
    if (isDrawerOpen == false) {
      getCategories(setCategories);
    }
    setDrawerOpen(!isDrawerOpen);
    if (isPipeOpen) {
      setPipeOpen(!isPipeOpen);
    }
  };

  const [billingAddress, setBillingAddress] = useState("");

  useEffect(() => {
    getBillingAddress(setBillingAddress);
    getProfileDetails(setProfile);
  }, []);

  const toggleClose = () => {
    setPipeOpen(false);
    setDrawerOpen(false);
  };

  const togglePipe = (parent) => {
    // console.log(parent);
    if (parent && isPipeOpen == false) {
      setParent(parent);
      getSubCategories(setSubCategories, parent);
    }
    setPipeOpen(!isPipeOpen);
  };

  const categoryMenu = [
    {
      id: 1,
      name: "Categories",
      href: "#",
      current: false,
      icon: (
        <div
          className={`flex items-center font-medium cursor-pointer ${
            isDrawerOpen ? "text-[#F9C74F]" : "text-white"
          }`}
          onClick={toggleDrawer}
        >
          <span className="mr-1">
            <div>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.33333 6.33203L6 0.332031L9.66667 6.33203H2.33333ZM9.66667 13.6654C8.83333 13.6654 8.12489 13.3736 7.54133 12.79C6.95778 12.2065 6.66622 11.4983 6.66667 10.6654C6.66667 9.83203 6.95844 9.12381 7.542 8.5407C8.12556 7.95759 8.83378 7.66581 9.66667 7.66536C10.5 7.66536 11.2084 7.95714 11.792 8.5407C12.3756 9.12425 12.6671 9.83247 12.6667 10.6654C12.6667 11.4987 12.3749 12.2071 11.7913 12.7907C11.2078 13.3743 10.4996 13.6658 9.66667 13.6654ZM0 13.332V7.9987H5.33333V13.332H0ZM9.66667 12.332C10.1333 12.332 10.5278 12.1709 10.85 11.8487C11.1722 11.5265 11.3333 11.132 11.3333 10.6654C11.3333 10.1987 11.1722 9.80425 10.85 9.48203C10.5278 9.15981 10.1333 8.9987 9.66667 8.9987C9.2 8.9987 8.80556 9.15981 8.48333 9.48203C8.16111 9.80425 8 10.1987 8 10.6654C8 11.132 8.16111 11.5265 8.48333 11.8487C8.80556 12.1709 9.2 12.332 9.66667 12.332ZM1.33333 11.9987H4V9.33203H1.33333V11.9987ZM4.7 4.9987H7.3L6 2.8987L4.7 4.9987Z"
                  fill={isDrawerOpen ? "#F9C74F" : "white"}
                />
              </svg>
            </div>
          </span>
          Categories <span className="mx-1"> | </span>
        </div>
      ),
    },
    {
      id: 2,
      name: "Orders",
      href: "#",
      current: false,
      icon: (
        <div
          className={`flex items-center font-medium cursor-pointer ${
            pathname.includes("orders") ? "text-[#F9C74F]" : "text-white"
          }`}
          onClick={() => router.push("/dashboard/orders")}
        >
          <span className="mx-1">
            <div>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45587 0C9.88817 0 10.2912 0.209382 10.5402 0.557469L10.5992 0.64734L12.215 3.34032C12.3748 3.60675 12.4701 3.90612 12.494 4.21449L12.5 4.36931V10.6667C12.5 11.3696 11.9561 11.9454 11.2662 11.9963L11.1667 12H1.83333C1.13043 12 0.554557 11.4561 0.503657 10.7662L0.5 10.6667V4.36931C0.5 4.05861 0.572377 3.75291 0.710502 3.47617L0.785013 3.34032L2.4008 0.64734C2.62323 0.276626 3.01015 0.0387275 3.43673 0.00432126L3.54413 0H9.45587ZM11.1667 4.66667H1.83333V10.6667H11.1667V4.66667ZM5.83333 1.33333H3.54413L2.34413 3.33333H5.83333V1.33333ZM9.45587 1.33333H7.16667V3.33333H10.6559L9.45587 1.33333Z"
                  fill={pathname.includes("orders") ? "#F9C74F" : "white"}
                />
              </svg>
            </div>
          </span>
          Orders
        </div>
      ),
    },
  ];

  function routeToSubCategories(itemName) {
    sessionStorage.setItem("category", parent);
    router.push("/dashboard/categories/" + itemName);
  }

  function routeToSearch(e) {
    e.preventDefault();
    if (query) {
      router.push("/dashboard/search/" + query);
    }
  }

  return (
    <div>
      {isDrawerOpen && (
        <>
          <div
            className="w-screen h-screen fixed top-[7.5rem] z-[30]"
            onClick={toggleClose}
          ></div>
          <div
            id="drawer-navigation"
            className={`fixed top-[7.5rem] left-0 z-40 w-80 md:mb-32 bg-[#f2f2f2] h-screen p-4 overflow-y-auto transition-transform ${
              isDrawerOpen ? "" : "-translate-x-full"
            } bg-[#E9EBF0]`}
            tabIndex="-1"
            aria-labelledby="drawer-navigation-label"
          >
            {/* list of items */}
            {isDrawerOpen && (
              <ul className="py-5">
                {categories_test.map((item, i) => (
                  <li
                    key={i}
                    className="px-3 space-x-5 py-3 hover:bg-[#EAEAEA]"
                    // onClick={() => togglePipe(item.name)}
                  >
                    <Link href={"/dashboard/categories/" + item.name} className="flex justify-between">
                      <div className="flex cursor-pointer">
                        <img
                          src={""}
                          alt="category image"
                          className="-mt-3 rounded-full w-12 h-12 border-4 border-yellow-400 text-[#000000]"
                        />
                        <span className="ml-4">{item.name} </span>
                      </div>

                      <div className="mt-2">
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
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
      {isPipeOpen ? (
        <div
          id="drawer-navigation"
          className={`fixed top-[7.5rem] left-80 z-40 w-80 md:mb-32 bg-white h-screen p-4 overflow-y-auto transition-transform ${
            isPipeOpen ? "" : "-translate-x-full"
          } bg-[#f2f2f2]`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            onClick={() => togglePipe("")} // This will close the sidebar
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
              {subCategories.map((item, i) => (
                <div
                  key={i}
                  onClick={() => routeToSubCategories(item.name)}
                  className="cursor-pointer"
                >
                  <li className="px-3 space-x-5 flex py-5 justify-between text-[#07101F] hover:bg-[#EAEAEA]">
                    <div className="flex">
                      <span className="ml-4 underline">{item.name} </span>
                    </div>
                  </li>
                </div>
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
            <div className="flex items-center">
              <Link href={"/dashboard"}>
                <img
                  src="/image/Lakshmi.png"
                  className="h-8 mr-3"
                  alt="Flowbite Logo"
                />
              </Link>
              <Link href={"/dashboard"}>
                <span className="self-center text-1xl font-semibold whitespace-nowrap text-white">
                  LAKSHMI AGENCY
                </span>
              </Link>

              {/* <div className="flex ml-3">
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
                  Delivered to {billingAddress.city} -{" "}
                  <span className="text-yellow-300">
                    {billingAddress.pincode}
                  </span>{" "}
                </span>
              </div> */}
            </div>

            <div className="flex md:order-2">
              <Link href={"/dashboard/profile"}>
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

                    <span className="mr-7 text-white ">
                      {profile && profile.full_name.trim()}
                    </span>
                  </div>
                </div>
              </Link>

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
              <div className="w-[80%] max-w-2xl">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <form className="relative" onSubmit={routeToSearch}>
                  <input
                    id="search"
                    className="block w-full bg-white text-black rounded-md py-2 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    type="search"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
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
                </form>
              </div>
            </div>
          </div>
          <hr />
          {/* CATEGORIES */}
          <div className="hidden md:block bg-[#004b71] text-white ">
            <div className=" max-w-2 p-2 flex flex-wrap items-center justify-between mx-auto ">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex">
                  {categoryMenu.map((item, i) => (
                    <div key={i}>{item.icon}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Mobilenav />
      <Mobilefooter />
    </div>
  );
}
