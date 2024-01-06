"use client";
import "@/app/globals.css";
import { Nav, Footer } from "@/components/";
import { getOrderByID } from "@/controller/dashboardController";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DetailsTab from "@/container/orders/detailsTab";

const hostUrl = "https://test01.lakshmiagency.com";

export default function Page() {
  const [order, setOrder] = useState({
    name: "SAL-ORD-2023-00006",
    creation: "2023-12-29 10:03:13.146593",
    total_qty: 22.0,
    delivery_status: "To be Dispatched",
    delivery_address: {
      address_line1: "new ship addresses",
      city: "Tiruch",
      state: "Tamil Nadu",
      country: "India",
      pincode: "637098",
    },
    courier_status: "Delivery on the way",
    is_delivered: 0,
    delivery_id: "null",
    is_delivery_retured: 0,
    return_request: 0,
    return_request_id: "null",
    invoice_link:
      "/api/method/frappe.utils.print_format.download_pdf?doctype=Sales Invoice&name=SINV-23-00005&format=Custom Invoice&no_letterhead=0",
    items: [
      {
        item_name: "Tail piece-110 millimeter",
        item_code: "Tail piece-110 millimeter",
        image: "",
        qty: 6.0,
      },
      {
        item_name: "vent cool-75 millimeter",
        item_code: "vent cool-75 millimeter",
        image: "",
        qty: 5.0,
      },
      {
        item_name: "Endcap-three quaters inch",
        item_code: "Endcap-three quaters inch",
        image: "",
        qty: 4.0,
      },
      {
        item_name: "SWR elbow door-110 millimeter",
        item_code: "SWR elbow door-110 millimeter",
        image: "",
        qty: 7.0,
      },
    ],
  });
  const [returnProduct, setReturnProduct] = useState("");
  const [discrimination, setDiscrimination] = useState("");
  const [showDetailsTab, setShowDetailsTab] = useState("");

  function setTheSpecificProduct(itemName) {
    const item = order.items.find((val, i) => val.item_name == itemName);
    console.log(item);
    setReturnProduct(item);
  }

  // useEffect(() => {
  //   const orderId = sessionStorage.getItem("order_id");
  //   getOrderByID(setOrder, orderId);
  // }, []);

  const [selectedOption, setSelectedOption] = useState("");
  function onValueChange(event) {
    setSelectedOption(event.target.value);
  }

  function hideShowDetailsTab(param) {
    if (param) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    setShowDetailsTab(param);
  }

  return (
    <div>
      {showDetailsTab ? (
        <DetailsTab
          hideShowDetailsTab={hideShowDetailsTab}
          returnProduct={returnProduct}
          order={order}
        />
      ) : (
        <></>
      )}
      <Nav />
      <div className="mt-[10rem] px-8 min-h-[65vh] flex">
        <OrderList
          order={order}
          setTheSpecificProduct={setTheSpecificProduct}
        />
        <hr className="mx-3 h-full min-h-[65vh] border" />
        {returnProduct && (
          <div className="w-[35%]">
            <h2 className="text-[#0A4E71] font-semibold ml-1">ABC Promotors</h2>
            <div className="flex justify-between items-center mt-3">
              <div>
                <h2 className="font-medium text-sm">
                  {returnProduct.item_name.substring(0, 15) + "..."}
                </h2>
                <h2 className="text-gray-500 text-sm">
                  Order ID : {order.name}
                </h2>
                <h2 className="text-gray-500 text-sm">
                  Ordered on {order.creation.substring(0, 10)}
                </h2>
              </div>
              <div>
                <h2 className="font-semibold">$ 2,140</h2>
              </div>
            </div>
            {/*  */}
            <div className="mt-4 p-4 rounded-2xl bg-[#7F8185] bg-opacity-10">
              <h2 className="text-[#0A4E71] text-sm font-semibold ml-1">
                Reason for returning this?
              </h2>
              <div className="my-2">
                <label
                  className={`${
                    selectedOption == "Shipped the wrong Item"
                      ? "text-[#0A4E71] font-semibold"
                      : "text-gray-500"
                  } text-sm`}
                >
                  <input
                    type="radio"
                    value="Shipped the wrong Item"
                    checked={selectedOption === "Shipped the wrong Item"}
                    onChange={onValueChange}
                    className="mr-2"
                  />
                  Shipped the wrong Item
                </label>
              </div>
              <div className="my-2">
                <label
                  className={`${
                    selectedOption == "The product was damages or defective"
                      ? "text-[#0A4E71] font-semibold"
                      : "text-gray-500"
                  } text-sm`}
                >
                  <input
                    type="radio"
                    value="The product was damages or defective"
                    checked={
                      selectedOption === "The product was damages or defective"
                    }
                    onChange={onValueChange}
                    className="mr-2"
                  />
                  The product was damages or defective
                </label>
              </div>
            </div>
            {/*  */}
            <div className="mt-8">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Discriomination(optional)
              </label>
              <textarea
                className="shadow appearance-none resize-none border rounded h-28 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => setDiscrimination(e.target.value)}
                required
              />
            </div>
            <div className="mt-6">
              <h2 className="font-medium text-sm">
                <span className="text-[#0A4E71]">$6000</span> will be credited
                by the Original Payment method in 2-3 Working Days
              </h2>
            </div>
            <div className="px-4 py-4 flex">
              <button
                className="text-[#0A4E71] w-full border border-[#0A4E71] py-2 px-4 rounded mr-2"
                onClick={() => setReturnProduct("")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#F9C74F] w-full text-black py-2 px-4 rounded "
                onClick={() => hideShowDetailsTab("open")}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function OrderList({ order, setTheSpecificProduct }) {
  return (
    <div className="rounded-lg w-[65%] mb-6 relative">
      {/*  */}
      <div className="w-full flex justify-between p-2 py-4 border rounded-t-lg">
        <div>
          <h2 className="text-[#0A4E71] font-semibold ml-1">
            Ordered on {order.creation.substring(0, 10)}
          </h2>
          <h3 className="text-gray-500 text-xs ">
            Total items : {order.items.length}
          </h3>
        </div>
        <div>
          <h2 className="font-semibold">$ 21,400</h2>
          <h3 className="text-gray-500 text-xs">
            $ 12000 + $ 300(delivery fee){" "}
          </h3>
        </div>
      </div>
      {/*  */}
      <div className="w-full flex justify-between p-2 py-4 border">
        <div>
          <h2 className="font-medium text-sm">Order ID : {order.name}</h2>
          <h3 className="text-green-600 text-xs">{order.delivery_status}</h3>
        </div>
        <div>
          <h2 className="text-[#0A4E71] underline font-medium">Track Order</h2>
        </div>
      </div>
      {/* all products */}
      <div className="w-full p-2 py-4 border rounded-b-lg">
        {order.items &&
          order.items.map((item, i) => (
            <>
              <div key={i} className="flex justify-between py-1">
                <h2 className="font-medium text-sm">{item.item_name}</h2>
                <h2 className="text-gray-500 text-xs">Qty : {item.qty}</h2>
              </div>
              <button
                className="rounded-md flex justify-center items-center w-full border hover:border-2 border-blue-900 text-blue-900 lg:mb-0 px-14 py-2 font-semibold hover:font-bold"
                onClick={() => setTheSpecificProduct(item.item_name)}
              >
                <h3 className="mr-2">Return or replace this product</h3>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8L8 4L4 0L2.6 1.4L4.2 3H0V5H4.2L2.6 6.6L4 8Z"
                    fill="#0A4E71"
                  />
                </svg>
              </button>
            </>
          ))}
      </div>
    </div>
  );
}
