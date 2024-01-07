/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import Content from "./content";
import { getBrands } from "@/controller/productController";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ product }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [brands, setBrands] = useState([]);

  const filters = [
    {
      id: "brands",
      name: "Brands",
      options: [
        { value: "Apple Ply", label: "Apple Ply", checked: false },
        { value: "Green Ply", label: "Green Ply", checked: false },
        { value: "Century Ply", label: "Century Ply", checked: true },
        { value: "Delco Plus", label: "Delco Plus", checked: false },
        { value: "Black Costa", label: "Black Costa", checked: false },
      ],
    },
    {
      id: "thickness",
      name: "Thickness",
      options: [
        { value: "3 mm", label: "3 mm", checked: false },
        { value: "4 mm", label: "4 mm", checked: false },
        { value: "6 mm", label: "6 mm", checked: true },
        { value: "8 mm", label: "8 mm", checked: false },
        { value: "9 mm", label: "9 mm", checked: false },
      ],
    },
    {
      id: "thickness",
      name: "Thickness",
      options: [
        { value: "3 mm", label: "3 mm", checked: false },
        { value: "4 mm", label: "4 mm", checked: false },
        { value: "6 mm", label: "6 mm", checked: true },
        { value: "8 mm", label: "8 mm", checked: false },
        { value: "9 mm", label: "9 mm", checked: false },
      ],
    },
    {
      id: "thickness",
      name: "Thickness",
      options: [
        { value: "3 mm", label: "3 mm", checked: false },
        { value: "4 mm", label: "4 mm", checked: false },
        { value: "6 mm", label: "6 mm", checked: true },
        { value: "8 mm", label: "8 mm", checked: false },
        { value: "9 mm", label: "9 mm", checked: false },
      ],
    },
    {
      id: "thickness",
      name: "Thickness",
      options: [
        { value: "3 mm", label: "3 mm", checked: false },
        { value: "4 mm", label: "4 mm", checked: false },
        { value: "6 mm", label: "6 mm", checked: true },
        { value: "8 mm", label: "8 mm", checked: false },
        { value: "9 mm", label: "9 mm", checked: false },
      ],
    },
  ];

  useEffect(() => {
    // getBrands(setBrands);
  });

  return (
    <div className="bg-white">
      <div className="lg:flex">
        <div className="lg:hidden">
          <div className="p-5">
            <h1 className="text-xl font-bold">PVC Pipes</h1>
            <p className="text-gray-500">
              Total 2000 Products Found for MR Plywood
            </p>
          </div>
          <div className="flex gap-5 mx-5 mt-5">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="p-4 flex justify-center w-full bg-gray-100 rounded-xl"
            >
              <FunnelIcon className="w-5 mr-2" />
              Filters
            </button>
            <button className="p-4 flex justify-center w-full bg-gray-100 rounded-xl">
              <FunnelIcon className="w-5 mr-2" />
              Sort
            </button>
          </div>
          <div className="flex items-center mx-5 my-10">
            <span className="text-gray-500 font-bold">Sort by: </span>
            <p className="px-5 py-1 text-gray-500 bg-gray-100 rounded-3xl">
              Price Height to Low
            </p>
          </div>
          <div className="flex items-center mx-5 bg-gray-100">
            <div className="w-full flex justify-center gap-2 text-sm items-center p-5 font-bold text-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              Free delivery
            </div>
            <span className="text-3xl text-blue-900">|</span>
            <div className="w-full flex justify-center gap-2 text-sm items-center p-5 font-bold text-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
              <p>
                10% Off <span className="font-">On First Purchase</span>
              </p>
            </div>
          </div>

          {mobileFiltersOpen && (
            <div className="fixed top-10 overflow-scroll bg-white w-screen h-screen">
              <div className="fixed w-full z-[100] top-0 bg-[#004b71] text-yellow-300 p-5 flex">
                <div
                  className="cursor-pointer"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                </div>
                <span className="text-white ml-2">Filters</span>
              </div>

              {/* Filters */}
              <form className="p-6 pb-28">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <div className="">
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-bold text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-auto flex items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.name == "Brands" && (
                              <div className="relative">
                                <input
                                  id="search"
                                  className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  type="search"
                                  placeholder="Search"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            )}
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          )}
        </div>

        <main className="hidden lg:block w-1/4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center border-b border-gray-200 py-5">
            <FunnelIcon className="w-5 mr-2" />
            <h1 className="text-md font-bold tracking-tight text-gray-900">
              Filters :
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div>
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <div className="">
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-bold text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-auto flex items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.name == "Brands" && (
                              <div className="relative">
                                <input
                                  id="search"
                                  className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                  type="search"
                                  placeholder="Search"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            )}
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </section>
        </main>
        <div className="w-full">
          <Content product={product} />
        </div>
      </div>
    </div>
  );
}
