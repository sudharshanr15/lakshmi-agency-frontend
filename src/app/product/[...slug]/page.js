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
            <div className="fixed inset-0 ${isOpen ? 'blur-background' : ''} h-full top-0 z-40 left-2/4 right-0">
              <div className="modal-overlay fixed inset-0 opacity-40 gray-300"></div>
              <div className="modal bg-white p-4 rounded shadow-lg">
                <span
                  className="close absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
                  onClick={closeModal}
                >
                  &times;
                </span>
                <div className="modal-content">
                <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Product Details</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
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
