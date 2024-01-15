import React, { useState, useEffect } from "react";
import DetailsTab from "./DetailsTab";
import OtpInput from "react18-input-otp";

function MyProfile({ userData }) {
  const [edit, setEdit] = useState(null);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [detailsTab, setDetailsTab] = useState(null);

  function onSave() {
    setDetailsTab(edit);
    if (edit == "mobile") {
      // update mobile
    } else {
      // update email
    }
  }

  return (
    <>
      {detailsTab ? (
        <DetailsTab setDetailsTab={setDetailsTab} Content={OTPContent} />
      ) : (
        <></>
      )}
      <div className="mt-6 lg:m-4 bg-white w-full h-full p-4">
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-start">
          <svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="path-1-outside-1_3899_30534"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="53"
              height="53"
              fill="black"
            >
              <rect fill="white" width="53" height="53" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 26.5905C3 39.6184 13.5612 50.1803 26.5898 50.1803C39.6184 50.1803 50.1796 39.6184 50.1796 26.5905C50.1796 13.5627 39.6184 3 26.5898 3C13.5612 3 3 13.5627 3 26.5905Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 26.5905C3 39.6184 13.5612 50.1803 26.5898 50.1803C39.6184 50.1803 50.1796 39.6184 50.1796 26.5905C50.1796 13.5627 39.6184 3 26.5898 3C13.5612 3 3 13.5627 3 26.5905Z"
              fill="#E0EAF2"
            />
            <path
              d="M26.5898 47.8058C14.8727 47.8058 5.37455 38.307 5.37455 26.5905H0.625453C0.625453 40.9297 12.2497 52.5549 26.5898 52.5549V47.8058ZM26.5898 52.5549C40.9298 52.5549 52.5541 40.9297 52.5541 26.5905H47.805C47.805 38.307 38.3069 47.8058 26.5898 47.8058V52.5549ZM52.5541 26.5905C52.5541 12.2514 40.9299 0.625453 26.5898 0.625453V5.37455C38.3068 5.37455 47.805 14.874 47.805 26.5905H52.5541ZM5.37455 26.5905C5.37455 14.874 14.8728 5.37455 26.5898 5.37455V0.625453C12.2496 0.625453 0.625453 12.2514 0.625453 26.5905H5.37455Z"
              fill="#8AA7C8"
              mask="url(#path-1-outside-1_3899_30534)"
            />
            <path
              d="M26.8412 12.4961C23.1311 12.4961 20.1133 15.4546 20.1133 19.0921C20.1133 22.7292 23.1311 25.688 26.8412 25.688C30.5512 25.688 33.569 22.7286 33.569 19.0921C33.569 15.4556 30.5512 12.4961 26.8412 12.4961Z"
              fill="#7C94A9"
            />
            <path
              d="M39.3733 39.1365C39.3733 32.7395 33.7514 27.5352 26.8409 27.5352C19.9304 27.5352 14.3086 32.7399 14.3086 39.1365C14.3086 39.1578 14.3145 39.1774 14.3152 39.1981C14.3145 39.2197 14.3086 39.2393 14.3086 39.2606C14.3086 40.0701 14.9691 40.7271 15.783 40.7271H37.8989C38.7127 40.7271 39.3733 40.0701 39.3733 39.2606C39.3733 39.2393 39.3673 39.2197 39.3667 39.1984C39.3673 39.1778 39.3733 39.1571 39.3733 39.1365Z"
              fill="#7C94A9"
            />
          </svg>
          <h2 className="lg:ml-8 text-center font-medium text-[#23376D] text-lg ">
            {userData.full_name}
          </h2>
        </div>
        <div className="flex items-center justify-between w-80 mt-8 font-semibold">
          <div>
            {edit == "mobile" ? (
              <div className="relative w-full">
                <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                  Mobile <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  defaultValue={userData.mobile_no}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            ) : (
              <>
                <h2 className="text-[#9FA1A6] ">Mobile Number</h2>
                <h2 className="mt-2">{userData.mobile_no}</h2>
              </>
            )}
          </div>
          {edit != "mobile" ? (
            <h3
              className="text-[#4060B6] underline cursor-pointer"
              onClick={() => setEdit("mobile")}
            >
              Edit
            </h3>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center justify-between w-80 mt-8 font-semibold">
          <div>
            {edit == "email" ? (
              <div className="relative w-full">
                <label className="text-[#c1c1c1] text-sm font-bold tracking-wide absolute transform -translate-y-full bg-white px-2 left-4 bottom-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="mt-2 px-5 py-2 border border-[#c1c1c1] rounded-lg w-full focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  defaultValue={userData.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            ) : (
              <>
                <h2 className="text-[#9FA1A6] ">Email Address</h2>
                <h2 className="mt-2">{userData.email}</h2>
              </>
            )}
          </div>
          {edit != "email" ? (
            <h3
              className="text-[#4060B6] underline cursor-pointer"
              onClick={() => setEdit("email")}
            >
              Edit
            </h3>
          ) : (
            <></>
          )}
        </div>
        {edit != null ? (
          <div className="mt-14">
            <div className="px-4 py-4 flex flex-col lg:flex-row">
              <button
                className="text-[#0A4E71] border border-[#0A4E71] py-2 px-24 rounded mb-4 lg:mb-0 lg:mr-4"
                onClick={() => setEdit(null)}
              >
                Cancel
              </button>
              <button
                className="bg-[#F9C74F] text-black py-2 px-24 rounded"
                onClick={onSave}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

function OTPContent() {
  const [otp, setOtp] = useState("");
  const initialTime = 360; // 6 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup function to clear interval on component unmount
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  return (
    <form>
      <div className="form rounded-t-3xl bg-white -mt-4 p-4 flex-grow">
        <div className="form-content p-4">
          <h1 className="text-black text-2xl mt-2 font-semibold">OTP</h1>
          <h1 className="text-left mt-4">
            We have sent you an One-Time-password of{" "}
            <span className="font-bold text-black">6-digits</span> to your
            registered mobile number. Kindly enter that to Login (+919894942686)
          </h1>
          <div className="flex items-center justify-center mt-9">
            <div className="w-full flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
              <OtpInput
                value={otp}
                onChange={(e) => setOtp(e)}
                numInputs={6}
                containerStyle="w-[100%] flex justify-between"
                inputStyle="otp-inputs border-black border-2 scale-105"
                isInputNum="true"
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <div>OTP expires in</div>
            <div className="text-[#839398]">{formatTime(time)}</div>
          </div>
          <div className="flex justify-center m-3">
            <div className="absolute bottom-10 left-3 right-3">
              <button
                className="w-full py-2 bg-[#f9c650] text-white rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MyProfile;
