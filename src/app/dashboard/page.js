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

export default function Page() {
  return (
    <>
      <Nav/>
      <Card />
      <LineChart />
      <Quote />
      <RecentOrder />
      <UpcomingDue />
      <Footer />
    </>
  );
}
