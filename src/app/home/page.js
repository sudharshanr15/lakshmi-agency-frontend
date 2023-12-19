"use client";
import "../globals.css";
import { Nav, Footer } from "@/components/";
import Image from "next/image";

const caurosel = [
  {
    name: "Pipes",
    image: "/image/homepage/p1.png",
    offer: "50",
  },
  {
    name: "Bathroom Fittings",
    image: "/image/homepage/p2.png",
    offer: "50",
  },
  {
    name: "Fittings",
    image: "/image/homepage/p3.png",
    offer: "50",
  },
  {
    name: "Wires",
    image: "/image/homepage/p4.png",
    offer: "50",
  },
];

const brands = [
  {
    image: "/image/homepage/b1.png",
  },
  {
    image: "/image/homepage/b2.png",
  },
  {
    image: "/image/homepage/b3.png",
  },
  {
    image: "/image/homepage/b1.png",
  },
];

export default function Page() {
  return (
    <>
      <section className="w-full bg-white overflow-x-hidden">
        {/* NAV */}
        <div className="w-full h-[78px] bg-blue-highlight flex justify-center items-center">
          <div className="flex items-center w-[12rem] justify-between">
            <Image src="/lakshmi.png" width={30} height={30} alt="logo" />
            <h3 className="font-medium text-white">LAKSHMI AGENCY</h3>
          </div>
        </div>
        {/* HOME */}
        <div className="w-full flex items-end relative h-[300px] bg-black bg-[url('/image/homepage/cables.png')] bg-cover bg-center">
          <div className="w-full h-[150px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex items-center justify-between px-8">
            <div>
              <h3 className="font-bold text-3xl">Upto 50% OFF</h3>
              <h4>on Polycab Wires</h4>
            </div>
            <button
              type="button"
              class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Shop Now
            </button>
          </div>
        </div>
        {/*  */}
        <div className="w-full h-[130px] bg-[#2F3537] mt-[40px] flex items-center justify-evenly">
          <div className="text-center">
            <h3 className="text-[#F9C74F] ">1000+</h3>
            <h3 className="text-white">Products</h3>
          </div>
          <hr className="bg-white h-24 w-[1px] opacity-50" />
          <div className="text-center">
            <h3 className="text-[#F9C74F] ">Lowest quotation</h3>
            <h3 className="text-white">in the market</h3>
          </div>
          <hr className="bg-white h-24 w-[1px] opacity-50" />
          <div className="text-center">
            <h3 className="text-[#F9C74F] ">Free delivery</h3>
            <h3 className="text-white">On 1st Order</h3>
          </div>
        </div>
        {/* CAUROSEL */}
        <div className="w-full h-[400px] mt-[40px] ">
          <div className="flex w-full justify-between items-center px-2">
            <h3 className="font-semibold">Limited Offers</h3>
            <h4 className="text-xs underline ">View All</h4>
          </div>
          <div className="p-4 flex w-screen justify-evenly">
            {caurosel.map((items, i) => (
              <div key={i} className="text-center w-[200px] ">
                <div className="relative text-center">
                  <Image src={items.image} width={200} height={300} />
                  <div className="bg-[#F9C74F] absolute bottom-2 translate-x-3/4 p-1 rounded-md">
                    <h2>{items.offer}% off</h2>
                  </div>
                </div>
                <h2>{items.name}</h2>
              </div>
            ))}
          </div>
        </div>
        {/* ASSISTANCE */}
        <div className="w-full p-4 bg-[#E9E9E9] ">
          <Image
            src={"/image/homepage/assistance.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* OUR BRANDS */}
        <div className="w-full h-[160px] mt-[40px] ">
          <div className="flex w-full justify-between items-center px-4">
            <h3 className="font-semibold">Our Brands</h3>
            <h4 className="text-xs underline ">View All</h4>
          </div>
          <div className="p-2 flex justify-evenly overflow-hidden">
            {brands.map((items, i) => (
              <div key={i} className="text-center w-[200px] ">
                <Image src={items.image} width={180} height={100} />
              </div>
            ))}
          </div>
        </div>
        {/* VIDEO */}
        <div className="w-full p-4 bg-white overflow-hidden">
          <h3 className="font-semibold mb-4">Hear it from our customers</h3>
          {/* <img src="/image/homepage/video.png" alt="" /> */}
          <Image
            src={"/image/homepage/video.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* FOOTER */}
        <Footer />
      </section>
    </>
  );
}
