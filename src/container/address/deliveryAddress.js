import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DeliveryAddress({ setDetailsTab }) {
  const [isChecked, setChecked] = useState(true);
  const address = useSelector((state) => state.product.delivery_address);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="mt-4">
      <div className="w-full flex justify-between items-end text-[#0A4E71] font-semibold mb-2">
        <h2>Delivery address</h2>
        <h2
          className="underline font-medium text-sm cursor-pointer"
          onClick={() => setDetailsTab("add-address")}
        >
          Add New
        </h2>
      </div>
      <label className="text-sm flex">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-1"
        />
        Same as billing address
      </label>
      {address && (
        <div className="w-full my-2 mr-2 border p-2 shadow-md">
          {/* user details */}
          <div className="w-full flex justify-between">
            <h3 className="font-medium">{address.name}</h3>
            <h2
              className="underline font-medium text-sm text-[#0A4E71] cursor-pointer"
              onClick={() => setDetailsTab("change-address")}
            >
              Change
            </h2>
          </div>
          <h4 className="text-sm mt-1">GST No: {address.gstin}</h4>
          <p className="text-xs mt-1">
            {address.address_line1 +
              " " +
              address.city +
              " " +
              address.state +
              " " +
              address.country +
              " " +
              address.pincode}
          </p>
          <h4 className="text-[#0A4E71] text-sm mt-1">🕻 +91 {address.phone}</h4>
        </div>
      )}
    </div>
  );
}

export default DeliveryAddress;
