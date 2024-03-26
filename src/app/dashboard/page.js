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
import { getDues, getOrders } from "@/controller/dashboardController";
import { useEffect, useState } from "react";

export default function Page() {
  const [orders, setOrders] = useState([]);
  const [dues, setDues] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  useEffect(() => {
    getOrders(setOrders);
    getDues(setDues);
  }, []);
  return (
    <>
      <Nav isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>
      <Card />
      <LineChart />
      <Quote isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>
      <RecentOrder orders={orders} />
      <UpcomingDue dues={dues} />
      <Footer />
    </>
  );
}
