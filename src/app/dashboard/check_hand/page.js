"use client";
import "../../globals.css";
import { Nav, Footer } from "@/components/";
import { OrderList } from "@/container/check_hand";

export default function Page() {
  return (
    <>
      <Nav />
      <OrderList />
      <Footer />
    </>
  );
}
