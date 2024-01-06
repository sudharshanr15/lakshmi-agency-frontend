"use client";
import "@/app/globals.css";
import { Nav, Footer } from "@/components/";
import { getOrders } from "@/controller/dashboardController";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const hostUrl = "https://test01.lakshmiagency.com";

export default function Page() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  return (
    <>
      <Nav />
      <div className="mt-[10rem] px-8 min-h-[60vh]">
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
    <div className="border rounded-lg w-[70%] mb-6 relative">
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
      <div className="w-full flex justify-between p-2 py-4 border rounded-t-lg">
        <div>
          <div className="flex items-center">
            <div onClick={showHideTab} className="cursor-pointer">
              <svg
                width="3"
                height="11"
                viewBox="0 0 3 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.375 8.25C1.73967 8.25 2.08941 8.39487 2.34727 8.65273C2.60513 8.91059 2.75 9.26033 2.75 9.625C2.75 9.98967 2.60513 10.3394 2.34727 10.5973C2.08941 10.8551 1.73967 11 1.375 11C1.01033 11 0.660591 10.8551 0.402728 10.5973C0.144866 10.3394 0 9.98967 0 9.625C0 9.26033 0.144866 8.91059 0.402728 8.65273C0.660591 8.39487 1.01033 8.25 1.375 8.25ZM1.375 4.125C1.73967 4.125 2.08941 4.26987 2.34727 4.52773C2.60513 4.78559 2.75 5.13533 2.75 5.5C2.75 5.86467 2.60513 6.21441 2.34727 6.47227C2.08941 6.73013 1.73967 6.875 1.375 6.875C1.01033 6.875 0.660591 6.73013 0.402728 6.47227C0.144866 6.21441 0 5.86467 0 5.5C0 5.13533 0.144866 4.78559 0.402728 4.52773C0.660591 4.26987 1.01033 4.125 1.375 4.125V4.125ZM1.375 0C1.73967 0 2.08941 0.144866 2.34727 0.402728C2.60513 0.660591 2.75 1.01033 2.75 1.375C2.75 1.73967 2.60513 2.08941 2.34727 2.34727C2.08941 2.60513 1.73967 2.75 1.375 2.75C1.01033 2.75 0.660591 2.60513 0.402728 2.34727C0.144866 2.08941 0 1.73967 0 1.375C0 1.01033 0.144866 0.660591 0.402728 0.402728C0.660591 0.144866 1.01033 0 1.375 0Z"
                  fill="#9EA1A6"
                />
              </svg>
            </div>
            <h2 className="text-[#0A4E71] font-semibold ml-1">
              Ordered on {order.creation.substring(0, 10)}
            </h2>
          </div>
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
            <div key={i} className="flex justify-between py-1">
              <h2 className="font-medium text-sm">{item.item_name}</h2>
              <h2 className="text-gray-500 text-xs">Qty : {item.qty}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}
