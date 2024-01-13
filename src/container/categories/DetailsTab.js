import React from "react";
import Collapse from "rc-collapse";
import { useEffect, useState } from "react";
import { getProductDetails } from "@/controller/productController";
import Icon from "./addSubIcon";
require("rc-collapse/assets/index.css");

const DetailsTab = ({ hideDetailsTab, showProductDetail }) => {
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    // console.log(showProductDetail);
    getProductDetails(setProductDetail, showProductDetail);
  }, []);

  const items = [
    {
      label: (
        <h2 className="text-sm pl-2 font-medium text-black">Product Details</h2>
      ),
      children: (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border text-start text-sm font-light">
                  <tbody>
                    <tr className="border-b">
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        Brand
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        {productDetail.brand}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        Item Code
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        {productDetail.item_code}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: <h2 className="text-sm pl-2 font-medium text-black">Feature</h2>,
      children: (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border text-start text-sm font-light">
                  <tbody>
                    <tr className="border-b">
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        Brand
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        {productDetail.brand}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        Item Code
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-3">
                        {productDetail.item_code}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className=" absolute top-0 left-0 h-full w-full z-[100]">
      <div className="w-full h-full flex">
        <div className="h-full w-[10%] lg:w-[50%] z-[110] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"></div>
        <div className="bg-white h-full w-[90%] lg:w-[50%] z-[110] relative">
          {/* close btn */}
          <CloseBtn hideDetailsTab={hideDetailsTab} />
          {/* contents */}
          <div className="">
            <h2 className="font-semibold p-4 ">Product Details</h2>
            <Collapse
              items={items}
              style={{
                backgroundColor: "white",
                border: "none",
              }}
              className="p-0"
              expandIcon={Icon}
              defaultActiveKey="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function CloseBtn({ hideDetailsTab }) {
  return (
    <button
      type="button"
      onClick={hideDetailsTab}
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Close menu</span>
    </button>
  );
}

export default DetailsTab;
