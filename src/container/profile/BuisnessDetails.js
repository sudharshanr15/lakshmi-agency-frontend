import { getAddressList, postNewAddress } from "@/controller/profileController";
import React, { useState, useEffect } from "react";
import DetailsTab from "./DetailsTab";

function BuisnessDetails({ userData }) {
  const [address, setAddress] = useState([]);
  const [detailsTab, setDetailsTab] = useState(null);

  useEffect(() => {
    getAddressList(setAddress);
  }, []);

  function addAddress() {
    setDetailsTab("addAddress");
  }

  return (
    <>
      {detailsTab ? (
        <DetailsTab
          setDetailsTab={setDetailsTab}
          Content={DeliveryAddressContent}
        />
      ) : (
        <></>
      )}
      <div className="w-full mt-10 mb-32 overflow-hidden">
        <div className="flex flex-col justify-start items-center lg:items-start">
          <span className="font-bold text-[#125476] md:text-2xl">
            Hi {userData.full_name}
          </span>
          <span className="mt-2 text-black md:text-1.5xl text-center lg:px-0 px-2">
            Fill in the Business Details and make your purchase journey smoother
          </span>
        </div>

        <div className="mt-8">
          <div className="flex w-[90%] lg:w-[50%] lg:mx-0 mx-2 justify-between">
            <h2 className="font-semibold">Buisness Details</h2>
            <h3
              className="text-red-600 underline cursor-pointer"
              onClick={addAddress}
            >
              Delete
            </h3>
          </div>
          {/* addresses */}
          <div className="mt-4">
            <div className="p-2 ml-2 lg:ml-0 lg:mr-4 mt-4 w-[400px] ">
              <h2 className="font-medium text-[#9E9E9E] my-2">
                GST Number : <span className="text-black">BXN126HU9875431</span>
              </h2>
              <h2 className="font-medium text-[#9E9E9E] my-2">
                Business Name :{" "}
                <span className="text-black">Sharath Traders</span>
              </h2>
              <h2 className="font-medium text-[#9E9E9E] my-2">
                PAN Number :<span className="text-black">9489123456</span>
              </h2>
              <h2 className="font-medium text-[#9E9E9E] my-2">
                Primary Mobile Number :{" "}
                <span className="text-black">9894942686 </span>
              </h2>
              <h2 className="font-medium text-[#9E9E9E] my-2">
                Secondary Mobile Number :{" "}
                <span className="text-black">9894942686 </span>
              </h2>
              <h2 className="font-medium text-[#9E9E9E] my-2">
                Email ID : <span className="text-black">{userData.email}</span>
              </h2>
              <h2 className="font-medium text-[#9E9E9E] my-2">
                Address :{" "}
                <span className="text-black">
                  22 K K Nagar, Chennai, Tamil Nadu 602002
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DeliveryAddressContent({ setDetailsTab }) {
  const [gst, setGST] = useState("");
  const [buisnessName, setBuisnessName] = useState("");
  const [pan, setPAN] = useState("");
  const [buisnessEmail, setBuisnessEmail] = useState("");
  const [primaryMobile, setPrimaryMobile] = useState("");
  const [secMobile, setSecMobile] = useState("");
  const [title, setTitle] = useState("");
  const [doorNo, setDoorNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const handleFormSubmmit = async (e) => {
    e.preventDefault();
    const details = {
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
      //   await postNewAddress(address);
      console.log("address posted successfully");
      setDetailsTab("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hideScrollBar absolute overflow-y-scroll h-full w-full">
      <h2 className="font-semibold">Buisness Details</h2>
      <form className="mt-4 mr-2" onSubmit={handleFormSubmmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            GST Number
          </label>
          <input
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            onChange={(e) => setGST(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Buisness Name
          </label>
          <input
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            onChange={(e) => setBuisnessName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            PAN Number
          </label>
          <input
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            onChange={(e) => setPAN(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Buisness Email
          </label>
          <input
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            onChange={(e) => setBuisnessEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Primary Mobile
          </label>
          <input
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            onChange={(e) => setPrimaryMobile(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Secondary Mobile
          </label>
          <input
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            onChange={(e) => setSecMobile(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Person Name
          </label>
          <input
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-[95%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="px-4 py-4 flex mb-4">
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

export default BuisnessDetails;
