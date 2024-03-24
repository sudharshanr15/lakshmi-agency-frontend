import { redirect, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import { useFormState } from "react-dom"
import { validateOTP } from "@/lib/server_actions/Auth";

const formResponse = {
  status: false,
  message: ""
}

function OTP({ mobile, setAuthState }) {
  const [otpState, formOTPAction] = useFormState(validateOTP, formResponse)
  // const [input] = border-rose-400

  const [otp, setOtp] = useState("");
  const initialTime = 360; // 6 minutes in seconds
  const [time, setTime] = useState(initialTime);
  const router = useRouter();

  useEffect(() => {
    if(otpState.status == true){
      // setAuthState("login")
      redirect("/dashboard")
    }
  }, [otpState])

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
    <>
      {/* Desktop version */}
      <div className="hidden md:block h-screen overflow-hidden relative">
        <div
          className="h-screen w-full overflow-hidden absolute top-0 left-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) ,url('/image/paint-bucket.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "blur(10px)",
            transform: "scale(1.1)",
          }}
        ></div>
        <div className="h-screen content-center grid grid-cols-1 md:grid-cols-2 z-50 absolute top-0 left-0">
          <div className="mx-9 md:mx-16 float-left md:left-10  lg:mt-96 md:mt-52">
            <h1 className="text-white text-2xl md:text-3xl font-bold md:font-bold">
              Join <span className="text-yellow-300"> Lakshmi Agency</span>
            </h1>
            <h1 className="mt-3 text-2xl text-white">
              Explore the best deals in the market to craft your dreamspace!
            </h1>
          </div>

          <form action={formOTPAction}>
            <div className="bg-white md:mx-3 lg:mx-12 p-4 lg:py-40 md:mt-10">
              <div className="flex flex-col justify-center mx-2 mt-8 md:mt-0 md:ml-9 md:mr-16">
                <div className="w-full mx-auto mt-7">
                  <div className="relative">
                    <h1 className="text-black text-2xl mt-2 font-semibold">
                      OTP
                    </h1>
                    <h1 className="text-left mt-4">
                      We have sent you an One-Time-password of{" "}
                      <span className="font-bold text-black">6-digits</span> to
                      your registered mobile number. Kindly enter that to Login
                      (+91 {mobile})
                    </h1>

                    <div className="flex items-center justify-center mt-9">
                      <div className=" w-full flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                        <input type="number" hidden value={otp} name="otp" />
                        <input type="number" hidden value={mobile} name="phone" />
                        <OtpInput
                          value={otp}
                          onChange={(e) => setOtp(e)}
                          numInputs={6}
                          containerStyle="w-[100%] 2xl:w-[75%] flex justify-between"
                          inputStyle="otp-inputs border-black border-2 scale-105"
                          isInputNum="true"
                          name="otp"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div>OTP expires in</div>
                      <div className="text-[#839398]">{formatTime(time)}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-[25px] mt-6 ">
                  <button
                    className="w-full py-2 bg-white text-[#0A4E71] border-[1px] border-[#0A4E71] border-solid rounded-lg"
                    type="button" onClick={router.push("/")}
                  >
                    Cancel
                  </button>
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
          <div className="h-60 p-4 relative">
            <div
              className="h-60 w-full absolute z-1 top-0 left-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) ,url('/image/paint-bucket.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                filter: "blur(1px)",
              }}
            ></div>
            <div className="m-4 mt-0 absolute top-0 left-0 z-50">
              <h1 className="text-white text-2xl font-bold mt-9">
                Join <span className="text-yellow-300 "> Lakshmi Agency</span>
              </h1>
              <h1 className="mt-3 text-2xl text-white">
                Explore the best deals in the market to craft your dreamspace!
              </h1>
            </div>
          </div>
          <form onSubmit={formOTPAction}>
            <div className="form rounded-t-3xl bg-white -mt-4 p-4 flex-grow">
              <div className="form-content p-4">
                <h1 className="text-black text-2xl mt-2 font-semibold">OTP</h1>
                <h1 className="text-left mt-4">
                  We have sent you an One-Time-password of{" "}
                  <span className="font-bold text-black">6-digits</span> to your
                  registered mobile number. Kindly enter that to Login (+91{" "}
                  {mobile})
                </h1>
                <div className="flex items-center justify-center mt-9">
                  <div className="w-full flex justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                    <input type="number" hidden value={otp} name="otp" />
                    <input type="number" hidden value={mobile} name="phone" />
                    <OtpInput
                      value={otp}
                      onChange={(e) => setOtp(e)}
                      numInputs={6}
                      containerStyle="w-[100%] flex justify-between"
                      inputStyle="otp-inputs border-red border-2 scale-105"
                      isInputNum="true"
                      name="otp"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <div>OTP expires in</div>
                  <div className="text-[#839398]">{formatTime(time)}</div>
                </div>
                <div className="flex justify-center m-3">
                  <div className="absolute bottom-10 left-3 right-3 gap-[25px]">
                  <button
                    className="w-full py-2 bg-white text-[#0A4E71] border-[1px] border-[#0A4E71] border-solid rounded-lg"
                    type="button" onClick={router.push("/")}
                  >
                    Cancel
                  </button>
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
