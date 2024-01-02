import React, { useState } from "react";
import { postNewAddress } from "@/controller/profileController";

function AddAddress({ setDetailsTab }) {
  const [title, setTitle] = useState("");
  const [doorNo, setDoorNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmmit = async (e) => {
    e.preventDefault();
    const address = {
      title: title,
      address_type: "Billing",
      address_line1: doorNo + " " + street,
      city: city,
      state: state,
      country: "India",
      gstin: "33BEJPM1610J1ZR",
      pincode: pincode,
      phone: phone,
    };
    // console.log(address);

    try {
      await postNewAddress(address);
      console.log("address posted successfully");
      setDetailsTab("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="font-semibold">Delivery address</h2>
      <form className="mt-4" onSubmit={handleFormSubmmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Person Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Door No
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="door no"
            onChange={(e) => setDoorNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="street"
          >
            Street
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="street"
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="state"
          >
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="state"
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="pincode"
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="px-4 py-4 flex">
          <button
            className="text-[#0A4E71] w-full border border-[#0A4E71] py-2 px-4 rounded mr-2"
            onClick={() => setDetailsTab("")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#F9C74F] w-full text-black py-2 px-4 rounded "
          >
            Add & Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddAddress;
