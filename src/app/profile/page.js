"use client";
import "../globals.css";
import { useState, useEffect } from "react";
import { Nav } from "@/components";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const ProfileItems = [
    {
      id: 1,
      name: "My Profile",
      icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 ml-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632"
        />
      </svg>
      
      ),
    },
    {
      id: 2,
      name: "Billing Address",
      icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
      
      ),
    },
    {
      id: 3,
      name: "Business Details",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Wish list",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      name: "My Orders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
    },
    
    
    {
      id: 6,
      name: "Notifications",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      ),
    },
    {
      id: 7,
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const selectedListItems = (submenu) => {
    setSelectedCategory(submenu);
  };

  // Use useEffect to log the updated selectedCategory
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const [modalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Nav />

      <div className="grid grid-cols-1 md:grid-cols-4 lg:mt-44 h-screen">
        <div className="md:col-span-1 bg-[#f2f2f2] hidden md:block w-full">
          <div className="md:p-4">
            <ul className="font-medium ">
              {ProfileItems.map((item) => (
                <li
                  className={`group ${
                    selectedCategory === item.name
                      ? "bg-[#e7eef1] h-full w-full"
                      : ""
                  } md:space-y-6 md:space-x-6 py-3`}
                  key={item.id}>
                  <button
                    type="button"
                    onClick={() => selectedListItems(item.name)}
                    className="flex items-center md:space-x-6 p-3">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                  {/* <hr className="md:mt-5 md:w-full md:-ml-11" /> */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`"p-4 md:col-span-3 bg-white
            ${modalOpen === true ? "bg-gray-300" : ""}`}>
          <div
            className={`${
              selectedCategory === "Billing Address" ||
              selectedCategory === "Business Details" ||
              selectedCategory === "Wish list" ||
              selectedCategory === "My Orders" ||
              selectedCategory === "My cart" ||
              selectedCategory === "Referrals" ||
              selectedCategory === "Notifications" ||
              selectedCategory === "Settings"
                ? "hidden"
                : ""
            }`}>
            <div className="mt-40 lg:mt-6 profileSection m-4">
              <span className="justify-start font-bold text-[#f9c74f] md:text-3xl">
                Hy Yuvanesh !
              </span>
              <div className="border p-6 lg:mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className=" mt-4  lg:mx-4 mx-2">
                    <div className="relative">
                      <label className="text-[#c1c1c1] text-sm font-bold  tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className=" mt-4  lg:mx-4 mx-2">
                    <div className="relative">
                      <label className="text-[#c1c1c1] text-sm font-bold  tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className=" lg:mx-4 mx-2 md:mt-5">
                    <div className="relative">
                      <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-3">
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <div className="flex items-center border border-[#c1c1c1] rounded-lg overflow-hidden">
                        <div className="flex items-center  p-2 px-4">
                          <img
                            src="/image/india.png"
                            alt="Country Code"
                            className="mr-2  h-5 mt-1"
                          />
                          <span className="text-[#c1c1c1]">+91</span>
                          <span className="ml-2 text-[#c1c1c1]">|</span>
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
          </div>

          {selectedCategory === "Billing Address" && (
            <div className=" mt-40 lg:mt-6 billingSection">
              <div className="flex flex-col justify-start">
                <span className="font-bold text-[#125476] md:text-2xl lg:ml-4">
                  Hy Yuvanesh !
                </span>
                <span className="mt-2 text-black md:text-1.5xl lg:ml-4">
                  Fill in the Business Details and make your purchase journey
                  smoother
                </span>
              </div>

              <div className=" p-6 lg:mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="border p-6">
                    <div className="mt-3 text-[#b0b0b0]">
                      Name:
                      <span className="font-semibold text-black"> Sharath</span>
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
                        Door No:12, ABC Street, Indra Nagar, Bangalore,
                        Karnataka, (500 001)
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
                      <span className="font-semibold text-black"> Sharath</span>
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
                        Door No:12, ABC Street, Indra Nagar, Bangalore,
                        Karnataka, (500 001)
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
                        className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm"
                        onClick={openModal}>
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* MODAL CONTENT START*/}

                  {modalOpen && (
                    <div className="fixed inset-0 top-28 left-28 flex items-center justify-center z-10">
                      <div className="modal-content bg-white p-4 rounded shadow-md flex">
                        <div className="flex-1 grid grid-cols-1 lg:flex lg:flex-col lg:mx-4 mx-2">
                          <h2 className="text-xl font-semibold mb-2">
                            Enter Delivery Address
                          </h2>
                          <form className="grid grid-cols-1 gap-4">
                            <div className="flex space-x-4">
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    Person Name{" "}
                                    <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    Door No{" "}
                                    <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-4">
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    Street 1
                                    <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    Street 2
                                    <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-4">
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    Area <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    PIN Code{" "}
                                    <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="number "
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-4">
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    City <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                              <div className="mt-2">
                                <div className="relative">
                                  <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                                    State{" "}
                                    <span className="text-red-600">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    required
                                    className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <div className="p-4 text-right gap-2">
                              <button
                                type="button"
                                className="border border-[#0A4E71] px-4 py-2 rounded-sm"
                                onClick={closeModal}>
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm">
                                Save
                              </button>
                            </div> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MODAL CONTENT END */}
                </div>
              </div>
            </div>
          )}
          {selectedCategory === "Business Details" && (
             <div className=" mt-40 lg:mt-6 billingSection">
             <div className="flex flex-col justify-start">
               <span className="font-bold text-[#125476] md:text-2xl lg:ml-4">
                 Hy Yuvanesh !
               </span>
               <span className="mt-2 text-black md:text-1.5xl lg:ml-4">
                 Fill in the Business Details and make your purchase journey
                 smoother
               </span>
             </div>

             <div className=" p-6 lg:mt-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                 <div className="border p-6">
                   <div className="mt-3 text-[#b0b0b0]">
                     Name:
                     <span className="font-semibold text-black"> Sharath</span>
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
                       Door No:12, ABC Street, Indra Nagar, Bangalore,
                       Karnataka, (500 001)
                     </span>
                   </div>
                   
                 </div>
                

               </div>
             </div>
           </div>
          )}
          {selectedCategory === "Wish list" && (
            <div>
              <div className=" p-6 lg:mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="border p-4">
                    <div className="justify-between flex">
                      <span>LG 668L Inverter Frost Free Side By Side...</span>
                      
                    </div>
                    <div className="justify-between flex">
                      <span className="text-[#20c431]">In stock</span>
                      
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
                      <span>LG 668L Inverter Frost Free Side By Side...</span>
                      
                    </div>
                    <div className="justify-between flex">
                      <span className="text-[#20c431]">In stock</span>
                      
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
                      <span>LG 668L Inverter Frost Free Side By Side...</span>
                      
                    </div>
                    <div className="justify-between flex">
                      <span className="text-[#20c431]">In stock</span>
                      
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
                      <span>LG 668L Inverter Frost Free Side By Side...</span>
                      
                    </div>
                    <div className="justify-between flex">
                      <span className="text-[#20c431]">In stock</span>
                      
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
                      <span>LG 668L Inverter Frost Free Side By Side...</span>
                      
                    </div>
                    <div className="justify-between flex">
                      <span className="text-[#20c431]">In stock</span>
                      
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
                      <span>LG 668L Inverter Frost Free Side By Side...</span>
                      
                    </div>
                    <div className="justify-between flex">
                      <span className="text-[#20c431]">In stock</span>
                      
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
            </div>
          )}
          {selectedCategory === "My Orders" && <div>My Orders</div>}
          {selectedCategory === "My cart" && <div>My cart</div>}
          {selectedCategory === "Referrals" && <div>Referrals</div>}
          {selectedCategory === "Notifications" && <div>Notifications</div>}
          {selectedCategory === "Settings" && <div>Settings</div>}
        </div>
      </div>
    </>
  );
}
