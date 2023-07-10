'use client'
import "../globals.css"
import { Nav } from "@/components/"
import { Card, LineChart, Quote, QuoteCards } from '@/container/dashboard/'
import { Projects } from "@/container/Projects"
import { Table } from "@/components/"
import { Footer } from "@/components/Footer"


export default function Page() {
  return (
    <>
    <Nav/>
    <Card/>
    <LineChart/>
    <Quote/>
    <QuoteCards/>
    <Table/>
    <Projects/>
    <Table/>
    <Footer/>

    </>
    
  )
}
