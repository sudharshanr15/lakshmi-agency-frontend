"use client";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import { Footer, Nav } from "@/components";
import MyProfile from "@/container/profile/MyProfile";
import DeliveryAddress from "@/container/profile/DeliveryAddress";
import { getProfileDetails } from "@/controller/profileController";
import BuisnessDetails from "@/container/profile/BuisnessDetails";
import WishList from "@/container/profile/WishList";
import Notifications from "@/container/profile/Notifications";
import Settings from "@/container/profile/Settings";
import Link from "next/link";

// Define Main component
export default function Main({ params }) {
  const [selectedCategory, setSelectedCategory] = useState(
    params.items.replaceAll("%20", " ")
  );
  const [userData, setUserData] = useState({
    email: "",
    full_name: "",
    mobile_no: "",
  });

  useEffect(() => {
    getProfileDetails(setUserData);
  }, []);

  return (
    <>
      <Nav />
      <div className="h-full w-full flex overflow-x-hidden relative">
        <div className="bg-white w-full h-full overflow-x-hidden">
          {selectedCategory == "My Profile" && (
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
