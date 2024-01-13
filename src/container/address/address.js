"use client";
import React, { useState } from "react";
import TotalCard from "./totalCard";
import BillingAddress from "./billingAddress";
import DeliveryAddress from "./deliveryAddress";

function Address({ setDetailsTab, detailsTab, setOrderNow }) {
  // delivery || pickup
  const [selectedOption, setSelectedOption] = useState("delivery");
  function onValueChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div
      className={`relative w-full lg:flex justify-between px-4 lg:px-8 text-base ${
        !detailsTab ? "mt-4 lg:mt-[10rem]" : ""
      } `}
    >
      {/* left */}
      <div className="w-full lg:w-[69%]">
        {/* Delivery Option */}
        <div>
          <h2 className="text-[#0A4E71] font-semibold mb-2">
            Select the Delivery Option
          </h2>
          <label
            className={`${
              selectedOption == "delivery"
                ? "text-[#0A4E71] font-semibold"
                : "text-gray-500"
            } text-sm`}
          >
            <input
              type="radio"
              value="delivery"
              checked={selectedOption === "delivery"}
              onChange={onValueChange}
              className="mr-2"
            />
            Home Delivery
          </label>
          <br />

          <label
            className={`${
              selectedOption == "pickup"
                ? "text-[#0A4E71] font-semibold"
                : "text-gray-500"
            } text-sm`}
          >
            <input
              type="radio"
              value="pickup"
              checked={selectedOption === "pickup"}
              onChange={onValueChange}
              className="mr-2"
            />
            Pickup from store
          </label>
        </div>
        {selectedOption == "delivery" ? (
          <>
            <BillingAddress />
            <DeliveryAddress setDetailsTab={setDetailsTab} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* right */}
      <TotalCard setOrderNow={setOrderNow} />
    </div>
  );
}

export default Address;
