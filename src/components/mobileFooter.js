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
          width="23"
          height="22"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.8212 0.792584C7.33974 0.418097 6.66554 0.418097 6.18407 0.792584L0.594878 5.13972C0.0933048 5.52983 0.369198 6.33382 1.00458 6.33382H1.6693V11.6672C1.6693 12.4036 2.26626 13.0005 3.00264 13.0005H7.00267H11.0027C11.739 13.0005 12.336 12.4036 12.336 11.6672V6.33382H13.0007C13.6354 6.33382 13.9125 5.53024 13.4104 5.13972L7.8212 0.792584ZM7.66934 11.6672V7.66716C7.66934 7.29896 7.37081 7.00049 7.00267 7.00049C6.63447 7.00049 6.33601 7.29896 6.33601 7.66716V11.6672H3.00264V5.67382C3.00264 5.46247 2.90526 5.27385 2.75291 5.1504L7.00267 1.84506L11.2523 5.1504C11.1 5.27384 11.0027 5.46246 11.0027 5.67382V11.6672H7.66934Z"
            fill="#9E9E9E"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Category",
      href: "#",
      current: false,
      pincode: "622023",
      icon: (
        <button
          className=""
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
        >
          <svg
            width="21"
            height="22"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.87 7.38L7.38 0L11.89 7.38H2.87ZM11.89 16.4C10.865 16.4 9.99361 16.0411 9.27584 15.3233C8.55807 14.6056 8.19945 13.7345 8.2 12.71C8.2 11.685 8.55889 10.8139 9.27666 10.0967C9.99443 9.37943 10.8655 9.02055 11.89 9.02C12.915 9.02 13.7864 9.37889 14.5042 10.0967C15.2219 10.8144 15.5805 11.6855 15.58 12.71C15.58 13.735 15.2211 14.6064 14.5033 15.3242C13.7856 16.0419 12.9145 16.4005 11.89 16.4ZM0 15.99V9.43H6.56V15.99H0ZM11.89 14.76C12.464 14.76 12.9492 14.5618 13.3455 14.1655C13.7418 13.7692 13.94 13.284 13.94 12.71C13.94 12.136 13.7418 11.6508 13.3455 11.2545C12.9492 10.8582 12.464 10.66 11.89 10.66C11.316 10.66 10.8308 10.8582 10.4345 11.2545C10.0382 11.6508 9.84 12.136 9.84 12.71C9.84 13.284 10.0382 13.7692 10.4345 14.1655C10.8308 14.5618 11.316 14.76 11.89 14.76ZM1.64 14.35H4.92V11.07H1.64V14.35ZM5.781 5.74H8.979L7.38 3.157L5.781 5.74Z"
              fill="#9E9E9E"
            />
          </svg>
        </button>
      ),
    },
    {
      id: 3,
      name: "Orders",
      href: "#",
      current: false,
      pincode: "622023",
      icon: (
        <button
          className=""
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.95587 0C9.38817 0 9.79123 0.209382 10.0402 0.557469L10.0992 0.64734L11.715 3.34032C11.8748 3.60675 11.9701 3.90612 11.994 4.21449L12 4.36931V10.6667C12 11.3696 11.4561 11.9454 10.7662 11.9963L10.6667 12H1.33333C0.630425 12 0.0545566 11.4561 0.00365718 10.7662L0 10.6667V4.36931C0 4.05861 0.0723772 3.75291 0.210502 3.47617L0.285013 3.34032L1.9008 0.64734C2.12323 0.276626 2.51015 0.0387275 2.93673 0.00432126L3.04413 0H8.95587ZM10.6667 4.66667H1.33333V10.6667H10.6667V4.66667ZM5.33333 1.33333H3.04413L1.84413 3.33333H5.33333V1.33333ZM8.95587 1.33333H6.66667V3.33333H10.1559L8.95587 1.33333Z"
              fill="#9E9E9E"
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
          width="20"
          height="22"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 7.66536C7.597 7.66536 9.0502 8.12783 10.1185 8.7797C10.6524 9.1055 11.1081 9.48956 11.4373 9.90636C11.7613 10.3165 12 10.8074 12 11.332C12 11.8953 11.7259 12.3394 11.3315 12.656C10.9579 12.956 10.4655 13.1544 9.94187 13.2931C8.8902 13.5716 7.486 13.6654 6 13.6654C4.51401 13.6654 3.10977 13.5716 2.05811 13.2931C1.53455 13.1544 1.04216 12.956 0.66844 12.656C0.274093 12.3394 0 11.8953 0 11.332C0 10.8074 0.2387 10.3165 0.562647 9.90636C0.89192 9.48956 1.34762 9.1055 1.88151 8.7797C2.94978 8.12783 4.40302 7.66536 6 7.66536ZM6 8.9987C4.65146 8.9987 3.43803 9.3919 2.57601 9.9179C2.14476 10.181 1.81942 10.4664 1.60893 10.7329C1.39311 11.0061 1.33333 11.2124 1.33333 11.332C1.33333 11.4131 1.35771 11.4995 1.50313 11.6162C1.66917 11.7495 1.95784 11.8872 2.39943 12.0042C3.27804 12.2368 4.54047 12.332 6 12.332C7.45953 12.332 8.72193 12.2368 9.6006 12.0042C10.0421 11.8872 10.3308 11.7495 10.4969 11.6162C10.6423 11.4995 10.6667 11.4131 10.6667 11.332C10.6667 11.2124 10.6069 11.0061 10.3911 10.7329C10.1806 10.4664 9.85527 10.181 9.424 9.9179C8.56193 9.3919 7.34853 8.9987 6 8.9987ZM6 0.332031C7.84093 0.332031 9.33333 1.82442 9.33333 3.66536C9.33333 5.50631 7.84093 6.9987 6 6.9987C4.15905 6.9987 2.66667 5.50631 2.66667 3.66536C2.66667 1.82442 4.15905 0.332031 6 0.332031ZM6 1.66536C4.8954 1.66536 4 2.5608 4 3.66536C4 4.76993 4.8954 5.66536 6 5.66536C7.1046 5.66536 8 4.76993 8 3.66536C8 2.5608 7.1046 1.66536 6 1.66536Z"
            fill="#9E9E9E"
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
                  <span className=" ml-4 text-white text-1xl font-bold">
                    Category
                  </span>
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
              className="flex flex-col items-center justify-end hover:underline"
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
