"use client";
import "../../globals.css";
import { useState, useEffect } from "react";
import { Footer, Nav } from "@/components";
import { getProfileDetails } from "@/controller/profileController";
import { useRouter } from "next/navigation";
import MyProfile from "@/container/profile/MyProfile";
import DeliveryAddress from "@/container/profile/DeliveryAddress";
import BuisnessDetails from "@/container/profile/BuisnessDetails";
import WishList from "@/container/profile/WishList";
import Notifications from "@/container/profile/Notifications";
import Settings from "@/container/profile/Settings";

// Define Main component
export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    full_name: "",
    mobile_no: "",
  });
  const router = useRouter();

  useEffect(() => {
    getProfileDetails(setUserData);
  }, []);

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
          className="w-6 h-6 "
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
      name: "Delivery Address",
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
          className="w-6 h-6"
        >
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
          className="w-6 h-6"
        >
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
      name: "Notifications",
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
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Settings",
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

  const selectedListItems = (itemName) => {
    if (window.innerWidth <= 450) {
      // route to mobile
      router.push("/dashboard/profile/" + itemName);
    } else {
      // change state
      setSelectedCategory(itemName);
    }
  };

  return (
    <>
      <Nav />
      <div className="lg:mt-[7.5rem] h-full w-full flex overflow-x-hidden relative">
        <div className="w-[100%] bg-white lg:w-[25%]">
          <div className="">
            <ul className="font-medium ">
              {ProfileItems.map((item) => (
                <li
                  key={item.id}
                  className={`group cursor-pointer border-y-[0.5px] ${
                    selectedCategory === item.name
                      ? "bg-[#e7eef1] h-full w-full border-l-4 border-l-[#0A4E71]"
                      : ""
                  } md:space-y-6 md:space-x-6 py-3`}
                  onClick={() => selectedListItems(item.name)}
                >
                  <div className="flex items-center md:space-x-6 p-3">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </li>
              ))}
              <li>
                <div className="flex items-center md:space-x-6 p-3 cursor-pointer">
                  <h2 className="underline text-[#23376D] font-medium">
                    Sign Out
                  </h2>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-8 bg-white w-[75%] h-full overflow-x-hidden hidden lg:block">
          {(selectedCategory == "" || selectedCategory == "My Profile") && (
            <MyProfile userData={userData} />
          )}
          {selectedCategory == "Delivery Address" && (
            <DeliveryAddress userData={userData} />
          )}
          {selectedCategory == "Business Details" && (
            <BuisnessDetails userData={userData} />
          )}
          {selectedCategory == "Wish list" && <WishList />}
          {selectedCategory == "Notifications" && <Notifications />}
          {selectedCategory == "Settings" && <Settings />}
        </div>
      </div>
      <Footer />
    </>
  );
}
