"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import { getProductsList } from "@/controller/productController";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const Content = ({ product }) => {
  // const [products, setProducts] = useState([]);
  const categoryItems = useSelector((state: RootState) => state.category_items.value)

  const products = [
    {
      name: "First",
      description: "this is a description",
      item_code: "sdfsdfsdfsdf",
      wished: false,
      key: "sdfsdf"
    },
    {
      name: "First",
      description: "this is a description",
      item_code: "sdfsdfsdfsdf",
      wished: false,
      key: "sdfsdf"
    },
    {
      name: "First",
      description: "this is a description",
      item_code: "sdfsdfsdfsdf",
      wished: false,
      key: "sdfsdf"
    },
    {
      name: "First",
      description: "this is a description",
      item_code: "sdfsdfsdfsdf",
      wished: false,
      key: "sdfsdf"
    },
    {
      name: "First",
      description: "this is a description",
      item_code: "sdfsdfsdfsdf",
      wished: false,
      key: "sdfsdf"
    },
    {
      name: "First",
      description: "this is a description",
      item_code: "sdfsdfsdfsdf",
      wished: false,
      key: "sdfsdf"
    },
  ]


  const content = categoryItems.data.map((val, pos) =>
    val.has_variants != 1 ? (
      <Card
        name={val.web_item_name}
        description={val.description}
        itemCode={val.item_code}
        wished={val.wished}
        key={pos}
      />
    ) : (
      <></>
    )
  );

  return (
    <>
      <div className="m-5 lg:m-10 pb-64 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        {content}
      </div>
    </>
  );
};

export default Content;
