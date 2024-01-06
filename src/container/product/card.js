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
  // function showProductDetailCard() {
  //   // console.log("product clicked", itemCode);
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   dispatch(setSelectedProduct(itemCode));
  // }

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
        {/* <Image
          src={"/image/icons/delete_icon.png"}
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={() => removeProduct()}
        /> */}
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={() => removeProduct()}
        >
          <path
            d="M15.1539 3C16.0052 3 16.761 3.54474 17.0302 4.35234L17.5683 5.96667H20.8111C21.3573 5.96667 21.8 6.40941 21.8 6.95556C21.8 7.50169 21.3573 7.94442 20.8111 7.94444L20.8086 8.0149L19.9509 20.0224C19.84 21.575 18.5482 22.7778 16.9918 22.7778H8.80821C7.25178 22.7778 5.95998 21.575 5.84908 20.0224L4.9914 8.0149C4.98971 7.99127 4.98887 7.96777 4.98885 7.94444C4.44272 7.94442 4 7.50169 4 6.95556C4 6.40941 4.44275 5.96667 4.98889 5.96667H8.23169L8.7698 4.35234C9.039 3.54474 9.79479 3 10.6461 3H15.1539ZM18.8309 7.94444H6.96919L7.82184 19.8815C7.8588 20.3991 8.2894 20.8 8.80821 20.8H16.9918C17.5106 20.8 17.9412 20.3991 17.9781 19.8815L18.8309 7.94444ZM10.9222 10.9111C11.4294 10.9111 11.8473 11.2928 11.9045 11.7847L11.9111 11.9V16.8444C11.9111 17.3906 11.4684 17.8333 10.9222 17.8333C10.4151 17.8333 9.99711 17.4516 9.93999 16.9598L9.93333 16.8444V11.9C9.93333 11.3538 10.3761 10.9111 10.9222 10.9111ZM14.8778 10.9111C15.4239 10.9111 15.8667 11.3538 15.8667 11.9V16.8444C15.8667 17.3906 15.4239 17.8333 14.8778 17.8333C14.3316 17.8333 13.8889 17.3906 13.8889 16.8444V11.9C13.8889 11.3538 14.3316 10.9111 14.8778 10.9111ZM15.1539 4.97778H10.6461L10.3165 5.96667H15.4836L15.1539 4.97778Z"
            fill="#F81628"
          />
        </svg>
        <h3 className="ml-2 underline font-medium">{name}</h3>
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
