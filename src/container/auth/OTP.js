import React, { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";

function OTP({ otp, setOtp, onOTPFormSubmit }) {
  const initialTime = 360; // 6 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
        // Handle timer completion logic here
        alert("Timer completed!");
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
    <>
      {/* Desktop version */}
      <div className="hidden md:block h-screen overflow-hidden bg-[url('/image/paint-bucket.jpg')] bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="mx-9 md:mx-16 float-left md:left-10  lg:mt-96 md:mt-52">
            <h1 className="text-white text-2xl md:text-3xl font-bold md:font-bold">
              Join <span className="text-yellow-300"> Lakshmi Agency</span>
            </h1>
            <h1 className="mt-3 text-2xl text-white">
              Explore the best deals in the market to craft your dreamspace!
            </h1>
          </div>

          <form onSubmit={onOTPFormSubmit}>
            <div className="bg-white md:mx-3 lg:mx-12 p-4 lg:py-40 md:mt-10">
              <div className="flex flex-col justify-center mx-2 mt-8 md:mt-0 md:ml-9 md:mr-16">
                <div className="w-full mx-auto mt-7">
                  <div className="relative">
                    <h1 className="text-black text-2xl mt-2 font-semibold">
                      OTP
                    </h1>
                    <h1 className="text-left mt-4">
                      We have sent you an One-Time-password of{" "}
                      <span className="font-bold text-black">4-digits</span> to
                      your registered mobile number. Kindly enter that to Signin
                      (+91 8870731355)
                    </h1>

                    <div className="flex items-center justify-center mt-9">
                      <div className=" w-full flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                        <OtpInput
                          value={otp}
                          onChange={(e) => setOtp(e)}
                          numInputs={6}
                          containerStyle="w-[70%] flex justify-between"
                          inputStyle="otp-inputs border-black border-2 scale-105"
                          isInputNum="true"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div>OTP expires in</div>
                      <div className="text-[#839398]">{formatTime(time)}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    className="w-full py-2 bg-[#f9c650] text-white rounded-lg "
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-60 p-4">
            <div className="bg-[url('/image/paint-bucket.jpg')] bg-cover bg-center h-full absolute top-0 left-0 right-0 bottom-0 opacity-30"></div>
            <div className="m-4 mt-4 relative">
              <h1 className="text-white text-2xl font-bold mt-9">
                Join <span className="text-yellow-300 "> Lakshmi Agency</span>
              </h1>
              <h1 className="mt-3 text-2xl text-white">
                Explore the best deals in the market to craft your dreamspace!
              </h1>
            </div>
          </div>
          <form onSubmit={onOTPFormSubmit}>
            <div className="form rounded-t-3xl bg-white -mt-4 p-4 flex-grow">
              <div className="form-content p-4">
                <h1 className="text-black text-2xl mt-2 font-semibold">OTP</h1>
                <h1 className="text-left mt-4">
                  We have sent you an One-Time-password of{" "}
                  <span className="font-bold text-black">4-digits</span> to your
                  registered mobile number. Kindly enter that to Signin (+91
                  8870731355)
                </h1>
                <div className="flex items-center justify-center mt-9">
                  <div className="w-full flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                    <OtpInput
                      value={otp}
                      onChange={(e) => setOtp(e)}
                      numInputs={6}
                      containerStyle="w-[70%] flex justify-between"
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
        </div>
      </div>
    </>
  );
}

export default OTP;
