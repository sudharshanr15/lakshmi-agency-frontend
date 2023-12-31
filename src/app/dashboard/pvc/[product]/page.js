"use client";
import "../../../globals.css";
import { Nav } from "@/components/";
import { Total, Example, Mobilenav, Sort } from "@/container/pvc";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "@/lib/features/productSlice";
import DetailsTab from "@/container/pvc/DetailsTab";

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
      {cart.length > 0 && <Total cart={cart} />}
      <Sort cart={cart} />
      <Example product={params.product} />
    </div>
  );
};

export default Page;
