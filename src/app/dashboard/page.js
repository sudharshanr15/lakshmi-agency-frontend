"use client";
import "../globals.css";
import { Nav, Footer } from "@/components/";
import {
  Card,
  RecentOrder,
  LineChart,
  Quote,
  UpcomingDue,
} from "@/container/dashboard/";
import { getOrders } from "@/controller/dashboardController";
import { useEffect, useState } from "react";

export default function Page() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders(setOrders);
  }, []);
  return (
    <>
      <Nav />
      <Card />
      <LineChart />
      <Quote />
      <RecentOrder orders={orders} />
      <UpcomingDue />
      <Footer />
    </>
  );
}
