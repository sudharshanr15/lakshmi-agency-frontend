"use client";
import "../globals.css";
import { Nav, Footer } from "@/components/";
import {
  Card,
  RecentOrder,
  LineChart,
  Quote,
  Project,
} from "@/container/dashboard/";

export default function Page() {
  return (
    <>
      <Nav />
      <Card />
      <LineChart />
      <Quote />
      <RecentOrder />
      <Project />
      {/* <RecentOrder /> */}
      <Footer />
    </>
  );
}
