"use client";
import "../../globals.css";
import { Nav, Footer } from "@/components/";
import { Card, List } from "@/container/order";

export default function Page() {
  return (
    <>
      <Nav />
      <Card />
      <List />
      <Footer />
    </>
  );
}
