"use client";
import "../globals.css";
import React, { useEffect, useState } from "react";
import { Nav } from "@/components";

export default function Main() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 gap-4 mt-48">
        <div className="bg-gray-200 p-4">Column 1</div>
        <div className="bg-gray-300 p-4">Column 2</div>
      </div>
    </>
  );
}
