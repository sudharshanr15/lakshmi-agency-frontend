'use client'
import "../globals.css"
import { Nav , Footer} from "@/components/"
import { DuePayment } from "@/container/over_due"

export default function Page() {
  return (
    <>
    <Nav/>
    <DuePayment/>
    <Footer/>
    </>
    
  )
}
