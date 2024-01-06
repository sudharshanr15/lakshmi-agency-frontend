"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import { getProductsList } from "@/controller/productController";

const Content = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log(product);
    const itemName = product.replaceAll("%20", " ");
    // console.log(itemName);
    getProductsList(setProducts, itemName);
  }, []);

  const content = products.map((val, pos) =>
    val.has_variants != 1 ? (
      <Card
        name={val.name}
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
