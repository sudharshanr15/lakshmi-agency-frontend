import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar,Footer } from '@/components'

export default function Home(){
  return (
    <html lang="en">
      <body >
        <p>
          <Navbar/>
          <Footer/>
        </p>
      </body>
    </html>
  )
}