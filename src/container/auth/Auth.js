"use client";
import React, { useState } from "react";
import { login, signUp, OTPSubmit } from "@/controller/authController";
import { useRouter } from "next/navigation";
import SignUp from "./SignUp";
import Login from "./Login";
import OTP from "./OTP";

export function Auth() {
  const [authState, setAuthState] = useState("signup");
  //
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  // temp ID
  const [tempID, setTempID] = useState("");
  const [otp, setOtp] = useState("");
  //
  const router = useRouter();

  function onSignupFormSubmit(e) {
    e.preventDefault();
    if (validatePhoneNumber(mobile)) {
      let body = {
        full_name: fullName,
        mobile_number: mobile,
        email: email,
      };
      signUp(body);
    } else {
      console.log("enter correct phone number");
    }
  }

  function onLoginFormSubmit(e) {
    e.preventDefault();
    if (validatePhoneNumber(mobile)) {
      let body = {
        user_id: "91" + mobile,
      };
      login(body, setTempID, setAuthState);
    } else {
      console.log("enter correct phone number");
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

  if (authState == "signup") {
    return (
      <SignUp
        onSignupFormSubmit={onSignupFormSubmit}
        setFullName={setFullName}
        setEmail={setEmail}
        setMobile={setMobile}
        setAuthState={setAuthState}
      />
    );
  } else if (authState == "login") {
    return (
      <Login
        onLoginFormSubmit={onLoginFormSubmit}
        setMobile={setMobile}
        setAuthState={setAuthState}
      />
    );
  } else {
    return <OTP otp={otp} setOtp={setOtp} onOTPFormSubmit={onOTPFormSubmit} />;
  }
}
