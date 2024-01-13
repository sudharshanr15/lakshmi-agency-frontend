"use client";
import "@/app/globals.css";
import { Nav, Footer } from "@/components/";
import { getOrders } from "@/controller/dashboardController";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const hostUrl = "https://test01.lakshmiagency.com";

export default function Page() {
  const [orders, setOrders] = useState([]);
  const [currNav, setCurrentNav] = useState("All");

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  return (
    <>
      <Nav />
      <div className="mt-4 lg:mt-[10rem] px-4 lg:px-8 min-h-[60vh]">
        <div className="flex font-medium">
          <h3
            className={`px-2 mx-2 cursor-pointer ${
              currNav == "All" ? "border-b-[3px] border-b-[#0A4E71]" : ""
            }`}
            onClick={() => setCurrentNav("All")}
          >
            All
          </h3>
          <h3
            className={`px-2 mx-2 cursor-pointer ${
              currNav == "Orders" ? "border-b-[3px] border-b-[#0A4E71]" : ""
            }`}
            onClick={() => setCurrentNav("Orders")}
          >
            Orders
          </h3>
          <h3
            className={`px-2 mx-2 cursor-pointer ${
              currNav == "Return & Refund"
                ? "border-b-[3px] border-b-[#0A4E71]"
                : ""
            }`}
            onClick={() => setCurrentNav("Return & Refund")}
          >
            Return & Refund
          </h3>
        </div>
        <hr className="mb-8" />
        {orders.map((order, i) => (
          <OrderList key={i} order={order} />
        ))}
      </div>
      <Footer />
    </>
  );
}

function OrderList({ order }) {
  const [tabOpen, setTabOpen] = useState(false);

  function showHideTab() {
    setTabOpen(!tabOpen);
  }
  const router = useRouter();
  function routeToReturnRefund(Order_id) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("order_id", Order_id);
      showHideTab();
      router.push("/dashboard/orders/return");
    }
  }

  return (
    <div className="border rounded-lg w-[100%] lg:w-[70%] mb-6 relative">
      {tabOpen && (
        <ul className="absolute top-8 left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <li>
            <div
              className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-blue-500 hover:text-white border"
              onClick={() => routeToReturnRefund(order.name)}
            >
              Return & Refund
            </div>
            <div className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-blue-500 hover:text-white border">
              Help
            </div>
            <a href={hostUrl + order.invoice_link} download>
              <div className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white border">
                Download Invoce
              </div>
            </a>
          </li>
        </ul>
      )}
      {/*  */}
      <div className="w-full p-2 py-4 border rounded-t-lg">
        <div className="flex justify-between mb-1">
          <div className="flex items-center">
            <div onClick={showHideTab} className="cursor-pointer">
              <svg
                width="5"
                height="17"
                viewBox="0 0 5 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.50081 12.668C3.05335 12.668 3.58325 12.8875 3.97395 13.2782C4.36465 13.6689 4.58415 14.1988 4.58415 14.7513C4.58415 15.3038 4.36465 15.8337 3.97395 16.2244C3.58325 16.6151 3.05335 16.8346 2.50081 16.8346C1.94828 16.8346 1.41838 16.6151 1.02768 16.2244C0.636974 15.8337 0.41748 15.3038 0.41748 14.7513C0.41748 14.1988 0.636974 13.6689 1.02768 13.2782C1.41838 12.8875 1.94828 12.668 2.50081 12.668ZM2.50081 6.41797C3.05335 6.41797 3.58325 6.63746 3.97395 7.02816C4.36465 7.41886 4.58415 7.94877 4.58415 8.5013C4.58415 9.05384 4.36465 9.58374 3.97395 9.97444C3.58325 10.3651 3.05335 10.5846 2.50081 10.5846C1.94828 10.5846 1.41838 10.3651 1.02768 9.97444C0.636974 9.58374 0.41748 9.05384 0.41748 8.5013C0.41748 7.94877 0.636974 7.41886 1.02768 7.02816C1.41838 6.63746 1.94828 6.41797 2.50081 6.41797ZM2.50081 0.167969C3.05335 0.167969 3.58325 0.387462 3.97395 0.778163C4.36465 1.16886 4.58415 1.69877 4.58415 2.2513C4.58415 2.80384 4.36465 3.33374 3.97395 3.72444C3.58325 4.11514 3.05335 4.33464 2.50081 4.33464C1.94828 4.33464 1.41838 4.11514 1.02768 3.72444C0.636974 3.33374 0.41748 2.80384 0.41748 2.2513C0.41748 1.69877 0.636974 1.16886 1.02768 0.778163C1.41838 0.387462 1.94828 0.167969 2.50081 0.167969Z"
                  fill="#9EA1A6"
                />
              </svg>
            </div>
            <h2 className="text-[#0A4E71] text-sm lg:text-base font-semibold ml-2">
              Ordered on {order.creation.substring(0, 10)}
            </h2>
          </div>
          <h2 className="font-semibold text-sm lg:text-base">$ 21,400</h2>
        </div>
        <div className="flex justify-between text-end">
          <h3 className="text-gray-500 text-xs ">
            Total items : {order.items.length}
          </h3>
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
            <div key={i} className="flex justify-between py-1">
              <h2 className="font-medium text-sm">{item.item_name}</h2>
              <h2 className="text-gray-500 text-xs">Qty : {item.qty}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}
