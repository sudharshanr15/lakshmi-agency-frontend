"use client";
import axios from "axios"; // Import Axios library
import "../globals.css";
import { Nav } from "@/components";

// Define Main component
export default function Main() {
  return (
    <>
      <Nav />
      <div className="mt-60 p-8 md:mx-24 bg-gray-200 justify-center">
        <span className="font-bold text-1xl">Orders & Returns</span>
        <div>
          <div className="flex md:mt-8 -ml-1">
            {" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#004b71] ">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="ml-2 text-[#004b71] font-bold text-1xl">
              What is the usual shipment process ?
            </span>
          </div>
          <ul className="mt-3 ml-6">
            <li>Order will be confirmed</li>
            <li>Order will be shipped with tracking ID</li>
            <li>Order can be tracked using the ID</li>
          </ul>

          <div className="flex md:mt-4 -ml-1">
            {" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="ml-2 text-[#004b71] font-bold text-1xl">
              Is there a way to contact to delivery person?
            </span>
          </div>

          <div className="flex md:mt-4 -ml-1">
            {" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="ml-2 text-[#004b71] font-bold text-1xl">
              What are the ways to return an order ?
            </span>
          </div>
        </div>

        <div className=" md:mt-8 -ml-1">
          <span className="font-bold text-1xl mt-8">Payments & Refunds</span>{" "}
          <div
            className="flex mt-4 -ml-1">
            <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#004b71] ">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="ml-2 text-[#004b71] font-bold text-1xl">
              Where can I see the status of my refund ?
            </span>
          </div>
          <s className="ml-6">Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.</span>

        </div>
      </div>
    </>
  );
}
