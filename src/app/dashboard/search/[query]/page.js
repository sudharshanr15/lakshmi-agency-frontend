"use client";
import "../../../globals.css";
import { Total, Mobilenav } from "@/container/categories";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "@/lib/features/productSlice";
import DetailsTab from "@/container/categories/DetailsTab";
import Content from "@/container/search/content";

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
      <div className="block lg:hidden xl:hidden">
        <Mobilenav />
      </div>
      <div className="lg:pt-[130px] bg-gray-100"></div>
      {cart.length > 0 && <Total cart={cart} />}
      <Content product={params.query} />
    </div>
  );
};

export default Page;
