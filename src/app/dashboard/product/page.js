"use client";
import "../../globals.css";
import { Nav, Footer } from "@/components/";
import { List } from "@/container/product";

export default function Page() {
  return (
    <>
      <Nav />
      <List />
      <Footer />
    </>
  );
}