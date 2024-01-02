import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAddressList } from "@/controller/profileController";
import { setDeliveryAddress } from "@/lib/features/productSlice";

function SelectAddress({ setDetailsTab }) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("1");
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddressList(setAddresses);
  }, []);

  function onValueChange(event, selected_address) {
    setSelectedOption(event.target.value);
    setAddress(selected_address);
  }

  function onSave() {
    dispatch(setDeliveryAddress(address));
    setDetailsTab("");
  }

  return (
    <div>
      <h2 className="font-semibold">Choose delivery address</h2>
      {addresses.length > 0 &&
        addresses.map((address, i) => (
          <div key={i} className="w-full my-2 mr-2 border p-2 shadow-md">
            {/* user details */}
            <div className="flex">
              <input
                type="radio"
                value={address.name}
                className="mr-2"
                checked={selectedOption === address.name}
                onChange={(e) => onValueChange(e, address)}
              />
              <h3 className="font-medium">{address.name}</h3>
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
            <h4 className="text-[#0A4E71] text-sm mt-1">
              🕻 +91 {address.phone}
            </h4>
          </div>
        ))}
      <h2
        className="underline font-medium text-sm text-[#0A4E71] mt-8 cursor-pointer"
        onClick={() => setDetailsTab("add-address")}
      >
        Add New Address
      </h2>
      <div className="px-4 py-4 flex">
        <button
          className="text-[#0A4E71] w-full border border-[#0A4E71] py-2 px-4 rounded mr-2"
          onClick={() => setDetailsTab("")}
        >
          Cancel
        </button>
        <button
          className="bg-[#F9C74F] w-full text-black py-2 px-4 rounded "
          onClick={() => onSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SelectAddress;
