import { getBillingAddress } from "@/controller/profileController";
import React, { useEffect, useState } from "react";

function BillingAddress() {
  const [billingAdd, setBillingAdd] = useState(null);
  useEffect(() => {
    const address = sessionStorage.getItem("billing_address");
    setBillingAdd(JSON.parse(address));
  }, []);
  return (
    <div className="mt-4">
      {billingAdd && (
        <div className="w-full my-2 mr-2 border p-2 shadow-md">
          {/* user details */}
          <h3 className="font-medium">{billingAdd.name}</h3>
          <h4 className="text-sm mt-1">GST No: {billingAdd.gstin}</h4>
          <p className="text-xs mt-1">
            {billingAdd.address_line1 +
              " " +
              billingAdd.city +
              " " +
              billingAdd.state +
              " " +
              billingAdd.country +
              " " +
              billingAdd.pincode}
          </p>
          <h4 className="text-[#0A4E71] text-sm mt-1">
            🕻 +91 {billingAdd.phone}
          </h4>
        </div>
      )}
    </div>
  );
}

export default BillingAddress;
