"use client";
import React, { useState } from "react";
import { login, OTPSubmit } from "@/controller/authController";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Login from "./Login";
import OTP from "./OTP";
import { showToast } from "@/utils/showToast";

export function Auth() {
  const [authState, setAuthState] = useState("login");
  //
  const [mobile, setMobile] = useState("6382344165");
  // temp ID
  const [tempID, setTempID] = useState("");
  const [otp, setOtp] = useState("");
  //
  const router = useRouter();

  async function onLoginFormSubmit(e) {
    e.preventDefault();
    if (validatePhoneNumber(mobile)) {
      let body = {
        user_id: "91" + mobile,
      };

      login(body, setTempID, setAuthState);
    } else {
      showToast(toast, "error", "Enter a valid phone number");
    }
  }

  function onOTPFormSubmit(e) {
    e.preventDefault();
    let body = {
      user_id: "91" + mobile,
      temp_id: tempID,
      otp: otp,
    };

    // console.log(body);
    OTPSubmit(body, router);
  }

  function validatePhoneNumber(mobile) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(mobile);
  }

  if (authState == "login") {
    return (
      <>
        <ToastContainer />
        <Login
          onLoginFormSubmit={onLoginFormSubmit}
          setMobile={setMobile}
          setAuthState={setAuthState}
          mobile={mobile}
        />
      </>
    );
  } else {
    return (
      <>
        <ToastContainer />
        <OTP
          otp={otp}
          setOtp={setOtp}
          onOTPFormSubmit={onOTPFormSubmit}
          mobile={mobile}
        />
      </>
    );
  }
}
