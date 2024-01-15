import React, { useState } from "react";

function Notifications() {
  const [currNav, setCurrentNav] = useState("All");
  const [notifications, setNotifications] = useState([1, 2, 3, 4]);

  return (
    <div className="mt-8 pr-4 pl-4 lg:pl-0">
      <div className="flex font-medium">
        <h3
          className={`px-2 mx-2 cursor-pointer ${
            currNav == "All" ? "border-b-[3px] border-b-[#0A4E71]" : ""
          }`}
          onClick={() => setCurrentNav("All")}
        >
          All
        </h3>
        <h3
          className={`px-2 mx-2 cursor-pointer ${
            currNav == "Orders" ? "border-b-[3px] border-b-[#0A4E71]" : ""
          }`}
          onClick={() => setCurrentNav("Orders")}
        >
          Orders
        </h3>
        <h3
          className={`px-2 mx-2 cursor-pointer ${
            currNav == "Offers" ? "border-b-[3px] border-b-[#0A4E71]" : ""
          }`}
          onClick={() => setCurrentNav("Offers")}
        >
          Offers
        </h3>
      </div>
      <hr className="mb-8" />
      <div className="mt-8">
        {notifications.map((noti, i) => (
          <div>
            <div className="flex justify-between items-center pr-4">
              <div className="flex items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="#FF0000" />
                </svg>
                <img
                  src={
                    "https://media.istockphoto.com/id/538025236/photo/heap-of-shiny-metal-steel-pipes-with-selective-focus-effect.jpg?s=612x612&w=0&k=20&c=NU2vEghQxU77iNNYFwXbt9Q9TRIJUq5TnsUeQjQVMdY="
                  }
                  alt="category image"
                  className="ml-3 rounded-full w-12 h-12 border-2"
                />
                <div className="ml-2">
                  <h2 className="text-[#0A4E71] font-medium">
                    Order Delivered!
                  </h2>
                  <h2 className="text-[#6A7079]">
                    Your Order containing Astral CPVC Pro - 40mm Pipe... has
                    been delivered.
                  </h2>
                </div>
              </div>
              <h2 className="text-[#6A7079]">4d</h2>
            </div>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
