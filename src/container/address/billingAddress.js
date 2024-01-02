import { getBillingAddress } from "@/controller/profileController";
import {
  setBillingAddress,
  setDeliveryAddress,
} from "@/lib/features/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BillingAddress() {
  const dispatch = useDispatch();
  useEffect(() => {
    getBillingAddress(dispatch, setDeliveryAddress, setBillingAddress);
  }, []);
  const address = useSelector((state) => state.product.billing_address);
  return (
    <div className="mt-4">
      {address && (
        <div className="w-full my-2 mr-2 border p-2 shadow-md">
          {/* user details */}
          <h3 className="font-medium">{address.name}</h3>
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

export default BillingAddress;
