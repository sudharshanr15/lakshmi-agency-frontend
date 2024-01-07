"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import { searchProducts } from "@/controller/productController";

const Content = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log(product);
    const searchQuery = product.replaceAll("%20", " ");
    // console.log(searchQuery);
    searchProducts(setProducts, searchQuery);
  }, []);

  const content = products.map((val, pos) =>
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
      {products.length > 0 ? (
        <div className="m-5 lg:m-10 pb-64 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          {content}
        </div>
      ) : (
        <div className="w-full h-[70vh] flex items-center justify-center">
          <h2>No Items Found</h2>
        </div>
      )}
    </>
  );
};

export default Content;
