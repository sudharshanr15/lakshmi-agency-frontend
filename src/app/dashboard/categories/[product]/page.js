"use client";
import "../../../globals.css";
import { Nav } from "@/components/";
import { Total, Example, Mobilenav, Sort } from "@/container/categories";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "@/lib/features/productSlice";
import DetailsTab from "@/container/categories/DetailsTab";
import { useEffect } from "react";
import { category_items, get_category_items } from "@/lib/server_api/api";
import { updateData, updateItemsAsync } from "@/lib/state/items/CategoryItemsSlicer";
import { useInfiniteQuery } from "@tanstack/react-query";

const Page = ({ params }) => {
  const dispatch = useDispatch();

  const showProductDetail = useSelector(
    (state) => state.product.selectedProduct
  );
  const cart = useSelector((state) => state.product.cart);

  function hideDetailsTab() {
    dispatch(setSelectedProduct(""));
  }

  return (
    <div className="relative h-full w-full">
      {showProductDetail ? (
        <DetailsTab
          hideDetailsTab={hideDetailsTab}
          showProductDetail={showProductDetail}
        />
      ) : (
        <></>
      )}
      <div className="hidden lg:block">
        <Nav />
      </div>
      <div className="block lg:hidden xl:hidden">
        <Mobilenav />
      </div>
      <div className="lg:pt-[130px] bg-gray-100"></div>
      {cart.length > 0 && <Total cart={cart} />}
      <Sort currCategory={params.product} />
      <Example product={params.product} />
    </div>
  );
};

export default Page;
