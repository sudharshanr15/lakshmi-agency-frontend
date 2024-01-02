import { useDispatch } from "react-redux";
import {
  addProductsInCart,
  removeProductFromCart,
  setSelectedProduct,
} from "@/lib/features/productSlice";
import { useState } from "react";
import Image from "next/image";

const Card = ({ name, itemCode, quantity }) => {
  const dispatch = useDispatch();
  function showProductDetailCard() {
    // console.log("product clicked", itemCode);
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(setSelectedProduct(itemCode));
  }

  const [qty, setQty] = useState(quantity);

  function removeProduct() {
    setQty(0);
    dispatch(removeProductFromCart(itemCode));
  }

  function changeQty(qty) {
    setQty(qty);
    // add product
    const payload = {
      item_code: itemCode,
      item_name: name,
      qty: qty,
    };
    dispatch(addProductsInCart(payload));
  }

  return (
    <div className="p-4 border rounded-md text-gray-500">
      <div className="flex items-start">
        <Image
          src={"/image/icons/delete_icon.png"}
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={() => removeProduct()}
        />
        <h3
          className="ml-2 underline font-medium cursor-pointer"
          onClick={showProductDetailCard}
        >
          {name}
        </h3>
      </div>
      <div className="flex justify-between py-3 text-sm">
        <div>
          <input
            className="p-1 w-20 rounded-md border"
            type="number"
            value={qty}
            min={0}
            onChange={(e) => changeQty(parseInt(e.target.value))}
          />
          <p className="py-1 text-green-400">In Stock</p>
          {/* <p className="pt-1">{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
