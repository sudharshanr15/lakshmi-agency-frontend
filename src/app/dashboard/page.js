"use client";
import "../globals.css";
import {  Footer } from "@/components/";
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
      <Card />
      <LineChart />
      <Quote />
      <RecentOrder />
      <UpcomingDue />
      <Footer />
    </>
  );
}
