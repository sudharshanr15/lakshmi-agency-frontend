"use client";
import "../../globals.css";
import Head from "next/head";
import { Nav, Footer } from "@/components/";
import { List } from "@/container/product";
import { useEffect, useState } from "react";
import { fetchProductBasedSubCategory } from "@/utils/categoryController";

function reverseFormatText(formattedText) {
  return formattedText
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Page({ params }) {
  const { slug } = params;

  const ChoosedCategory = reverseFormatText(slug[0]);
  const subcategory = reverseFormatText(slug[1]);
  const [Product, setIsProduct] = useState([]);

  useEffect(() => {
    console.log("PRODUCT PAGE");
    console.log(subcategory);
    const fetchProductData = async () => {
      try {
        const data = await fetchProductBasedSubCategory(subcategory);
        console.log("start product");
        // console.log(data.data);
        setIsProduct(data.data);
        console.log(Product);
        console.log("End product");
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchProductData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </Head>
      <Nav />
      <div className="mt-10 lg:mt-56 grid md:grid-cols-2 gap-4 m-4">
        {/* <p>ChoosedCategory: {ChoosedCategory}</p>
        <p>Subcategory: {subcategory}</p> */}
        {Product.map((product) => (
          <div className="p-4 border rounded-md text-gray-500">
            <div className="inline-block">
              <span className="">{product.web_item_name}</span>
            </div>

            <div className="flex justify-between py-3 text-sm">
              <div>
                <input
                  className="p-1 w-20 rounded-md border"
                  type="number"
                  defaultValue={0}
                />
                {product.in_stock ? (
                  <p className="py-1 ">
                    In Stock :{" "}
                    <span className="text-green-400"> Available</span>
                  </p>
                ) : (
                  <p className="py-1 ">
                    In Stock :{" "}
                    <span className="text-red-400">Not Available</span>
                  </p>
                )}

                <p className="pt-1">Standard Delivery Apr 2</p>
              </div>
              <div>
                {/* <p className="py-1 ml-auto text-gray-400">
                <span className="text-xl font-bold text-blue-900">
                  &#8377; 6,522.83{" "}
                </span>{" "}
                MRP:<span className="line-through">7,000</span>
              </p> */}
                <p className="py-1 w-fit ml-auto font-semibold">
                  {product.name}
                </p>
                {/* <p className="pt-1 w-fit ml-auto text-green-400">
                Delivery Fee &#8377;200
              </p> */}

                <button
                  onClick={openModal}
                  className="pt-1 w-fit ml-auto text-green-400 "
                >
                  {product.item_code}{" "}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <!-- Modal toggle --> */}
        <div>
          {isOpen && (
            <div className="fixed top-56 left-40 right-40">
              <div className="modal-overlay fixed inset-0 opacity-40 gray-300"></div>
              <div className="modal bg-white p-4 rounded shadow-lg">
                <span
                  className="close absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                  onClick={closeModal}
                >
                  &times;
                </span>
                <div className="modal-content p-14">
                  <p>This is your modal content.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
