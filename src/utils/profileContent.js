import React, { useEffect, useState } from "react";
import axios from "axios";

function LoadingScreen() {
  return <div>Loading...</div>;
}

export const myProfile = () => {
  const [userData, setUserData] = useState({
    email: "",
    full_name: "",
    mobile_no: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const baseURL =
      "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.profile.get";
    const headers = {
      "Content-Type": "application/json",
      Authorization: "token 69e0234a0664f91:35470717fb585f3",
    };

    try {
      const response = await axios.get(baseURL, { headers });
      setUserData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <div className="mt-10 lg:mt-6 profileSection m-4 bg-white">
        <div className=" p-6 lg:mt-4">
          <span className="justify-start font-bold text-[#f9c74f] md:text-3xl">
            Hi Yuvanesh!
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className=" mt-4  lg:mx-4 mx-2">
              <div className="relative">
                <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  value={userData.full_name}
                />
              </div>
            </div>
            <div className=" mt-4  lg:mx-4 mx-2">
              <div className="relative">
                <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  value={userData.email}
                />
              </div>
            </div>
            <div className="mt-4  lg:mx-4 mx-2">
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
                    <span className="ml-2 text-[#c1c1c1">|</span>
                  </div>
                  <input
                    type="tel"
                    required
                    className="-ml-1 p-5 py-1 w-full focus:ring-blue-500 focus:outline-none"
                    value={userData.mobile_no}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 text-right gap-2">
            <button
              type="button"
              className="border border-[#0A4E71] px-4 py-2 rounded-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const billingAddress = () => {
  return (
    <div className=" mt-8 billingSection mb-32">
      <div className="flex flex-col justify-start">
        <span className="mx-5 font-bold text-[#125476] md:text-2xl lg:ml-4">
          Hy Yuvanesh !
        </span>
        <span className="mx-5 mt-2 text-black md:text-1.5xl lg:ml-4">
          Fill in the Business Details and make your purchase journey smoother
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
              <span className="font-semibold text-black"> 9489123456</span>
            </div>
            <div className="mt-3 text-[#b0b0b0]">
              Secondary Mobile Number:
              <span className="font-semibold text-black"> 9489123456</span>
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
                Door No:12, ABC Street, Indra Nagar, Bangalore, Karnataka, (500
                001)
              </span>
            </div>
            <div className="p-4 text-right gap-2 mt-3">
              <button
                type="button"
                className=" underline text-red-600 px-4 py-2 rounded-sm"
              >
                delete
              </button>
              <button
                type="button"
                className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm"
              >
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
              <span className="font-semibold text-black"> 9489123456</span>
            </div>
            <div className="mt-3 text-[#b0b0b0]">
              Secondary Mobile Number:
              <span className="font-semibold text-black"> 9489123456</span>
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
                Door No:12, ABC Street, Indra Nagar, Bangalore, Karnataka, (500
                001)
              </span>
            </div>
            <div className="p-4 text-right gap-2 mt-3">
              <button
                type="button"
                className=" underline text-red-600 px-4 py-2 rounded-sm"
              >
                delete
              </button>
              <button
                type="button"
                className="bg-[#F9C74F] ml-6 px-6 py-2.5 rounded-sm"
                // onClick={openModal}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const wishList = () => {
  return <>wishlist module</>;
};

export const businessDetails = () => {
  return <>wishlist module</>;
};