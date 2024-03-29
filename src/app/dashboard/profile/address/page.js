"use client";
import "@/app/globals.css";
import { Nav, Footer } from "@/components/";
import Address from "@/container/address/address";
import DetailsTab from "@/container/address/detailsTab";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [detailsTab, setDetailsTab] = useState("");
  const [orderNow, setOrderNow] = useState(false);

  function hideShowDetailsTab(param) {
    if (param) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setDetailsTab(param);
  }

  return (
    <div className="relative">
      {detailsTab ? (
        <DetailsTab
          detailsTab={detailsTab}
          setDetailsTab={hideShowDetailsTab}
        />
      ) : (
        <></>
      )}
      <Nav />
      {orderNow ? (
        <OrderResult />
      ) : (
        <Address
          detailsTab={detailsTab}
          setDetailsTab={hideShowDetailsTab}
          setOrderNow={setOrderNow}
        />
      )}
      <Footer />
    </div>
  );
}

function OrderResult() {
  return (
    <div className="mt-[10rem] h-[60vh] w-full flex flex-col justify-center items-center text-[#0A4E71] font-semibold">
      <h2>Your Order has been</h2>
      <h2>Placed successfully</h2>
      <Image
      src={"/image/icons/order-result.png"}
      height={200}
      width={200}
      alt="order-result"
      />
      <div className="px-4 py-4 flex flex-col">
        <button className="bg-[#F9C74F] text-black py-2 px-24 rounded mb-2">
          Go to Orders
        </button>
        <Link href={"/dashboard"} className="text-[#0A4E71] border border-[#0A4E71] py-2 px-24 rounded">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
