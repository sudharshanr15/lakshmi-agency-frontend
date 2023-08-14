"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAmount } from "@/utils/getData";
import { Signup } from "@/container/signUp";

export default function Main() {
  return <>
    <Signup />
  </>;
}
