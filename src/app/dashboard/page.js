"use client";
import "../globals.css";
import { Nav, Footer } from "@/components/";
import {
  Card,
  LineChart,
  Quote,
  QuoteCard,
  Project,
  Table,
} from "@/container/dashboard/";

export default function Page() {
  return (
    <>
      <Nav />
      <Card />
      <LineChart />
      <Quote />
      <QuoteCard />
      <Table />
      <Project />
      <Table />
      <Footer />
    </>
  );
}
