"use client";
import "../../globals.css";
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

  return (
    <div className="">
      <Nav />
      {/* <List /> */}
     
      <div className="mt-56 grid md:grid-cols-2 gap-4 m-4">
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
    <p className="py-1 ">In Stock : <span className="text-green-400"> Available</span></p>
  ) : (
    <p className="py-1 ">In Stock : <span className="text-red-400">Not Available</span></p>
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
              <p className="py-1 w-fit ml-auto font-semibold">{product.name}</p>
              <p className="pt-1 w-fit ml-auto text-green-400">
                Delivery Fee &#8377;200
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
      <Footer />
      
    </div>
  );
}
