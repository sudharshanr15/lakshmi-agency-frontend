"use client";
import Content from "./content";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Total = ({ cart }) => {
  const router = useRouter();
  return (
    <div className="w-full fixed bottom-16 md:bottom-0 lg:bottom-0 lg:relative bg-gray-100 py-8">
      <div className="lg:mt-36 mx-5 lg:mx-10 text-sm flex justify-between">
        <div>
          <h1 className="text-xl lg:text-2xl mt-3 text-blue-900">
            Total {cart.length} products selected
          </h1>
        </div>
      </div>
      <div className="lg:flex lg:justify-end mx-5 lg:mx-10 mt-5">
        <button
          className="rounded-md w-full lg:w-fit border border-blue-900 text-blue-900 px-14 py-2 font-bold"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <Link href={"profile/address"}>
          <button className="rounded-md w-full lg:w-fit bg-yellow-500 lg:mx-2 mb-4 lg:mb-0 px-14 py-2 font-bold">
            Select Delivery Type
          </button>
        </Link>
      </div>
    </div>
  );
};

export function List() {
  const cart = useSelector((state) => state.product.cart) || [];
  return (
    <>
      <div>
        <Total cart={cart} />
        <Content cart={cart} />
      </div>
    </>
  );
}
