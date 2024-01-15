import { getWishListItems } from "@/controller/profileController";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailsTab from "./DetailsTab";
import { getProductDetails } from "@/controller/productController";
import Icon from "@/container/categories/addSubIcon";
import Collapse from "rc-collapse";
import Total from "./Total";
import Card from "./Card";
require("rc-collapse/assets/index.css");

function WishList() {
  const [items, setItems] = useState([]);
  const cart = useSelector((state) => state.product.cart);
  const [detailsTab, setDetailsTab] = useState("");

  useEffect(() => {
    getWishListItems(setItems);
  }, []);

  return (
    <div>
      {detailsTab && (
        <DetailsTab
          setDetailsTab={setDetailsTab}
          Content={DetailsContent}
          detailsTab={detailsTab}
        />
      )}
      {cart.length > 0 && <Total cart={cart} />}
      <div className="my-10 flex flex-wrap lg:justify-start justify-evenly">
        {items.map((item, i) => (
          <Card
            key={i}
            name={item.web_item_name}
            description={item.description}
            itemCode={item.item_code}
            wished={item.wished}
            setDetailsTab={setDetailsTab}
          />
        ))}
      </div>
    </div>
  );
}

function DetailsContent({ itemCode }) {
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    getProductDetails(setProductDetail, itemCode);
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
  );
}

export default WishList;
