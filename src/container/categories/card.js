import { useDispatch } from "react-redux";
import {
  addProductsInCart,
  removeProductFromCart,
  setSelectedProduct,
} from "@/lib/features/productSlice";
import { useState } from "react";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/controller/productController";

const Card = ({ name, description, itemCode, wished }) => {
  const dispatch = useDispatch();
  function showProductDetailCard() {
    // console.log("product clicked", itemCode);
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(setSelectedProduct(itemCode));
  }

  const [wishlist, setWishlist] = useState(wished);
  const [qty, setQty] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  function checkBoxChanged() {
    setIsChecked(!isChecked);
    if (!isChecked) {
      addProduct(itemCode, qty);
    } else {
      removeProduct(itemCode);
    }
  }

  function addProduct(itemCode, qty) {
    if (qty == 0) {
      setQty(1);
    }
    const payload = {
      item_code: itemCode,
      item_name: name,
      qty: qty == 0 ? 1 : qty,
    };
    dispatch(addProductsInCart(payload));
  }

  function removeProduct(itemCode) {
    setQty(0);
    dispatch(removeProductFromCart(itemCode));
  }

  function changeQty(qty) {
    setQty(qty);
    if (isChecked) {
      // add product
      const payload = {
        item_code: itemCode,
        item_name: name,
        qty: qty,
      };
      dispatch(addProductsInCart(payload));
    } else {
      checkBoxChanged();
    }
  }

  function postWishList() {
    setWishlist(!wishlist);
    if (!wishlist) {
      // add to wishlist
      addToWishlist(itemCode);
    } else {
      // remove from the wishlist
      removeFromWishlist(itemCode);
    }
  }

  return (
    <div className="p-4 border rounded-md text-gray-500">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <input
            type="checkbox"
            className="mt-2"
            checked={isChecked}
            onChange={checkBoxChanged}
          />
          <h3
            className="ml-2 underline font-medium cursor-pointer"
            onClick={showProductDetailCard}
          >
            {name}
          </h3>
        </div>
        <BookMarkBar isBookMarked={wishlist} postWishList={postWishList} />
      </div>
      <div className="flex justify-between py-3 text-sm">
        <div>
          <p className="py-1 text-green-400">In Stock</p>
          <p className="pt-1">{description}</p>
        </div>
        <div class="custom-number-input h-10 w-32">
          <div class="flex flex-row h-10 w-full border rounded-lg relative bg-transparent mt-1">
            <button
              data-action="decrement"
              class=" text-gray-600 hover:text-gray-700 hover:border hover:bg-gray-300 h-full w-20 rounded-l-lg cursor-pointer outline-none"
              onClick={() => {
                if (qty == 1) {
                  checkBoxChanged();
                } else if (qty != 0) {
                  changeQty(qty - 1);
                }
              }}
            >
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              class="focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={qty}
              min={0}
            ></input>
            <button
              data-action="increment"
              class="text-gray-600 hover:text-gray-700 hover:bg-gray-300 hover:border h-full w-20 rounded-r-lg cursor-pointer"
              onClick={(e) => changeQty(qty + 1)}
            >
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function BookMarkBar({ isBookMarked, postWishList }) {
  if (!isBookMarked) {
    return (
      <svg
        width="12"
        height="15"
        viewBox="0 0 12 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={postWishList}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.667236 2.33398C0.667236 1.22942 1.56267 0.333984 2.66724 0.333984H9.3339C10.4385 0.333984 11.3339 1.22942 11.3339 2.33398V13.0196C11.3339 13.833 10.4145 14.3061 9.75264 13.8333L6.00057 11.1533L2.24848 13.8333C1.58661 14.3061 0.667236 13.833 0.667236 13.0196V2.33398ZM2.66724 1.66732C2.29905 1.66732 2.00057 1.9658 2.00057 2.33398V12.3719L5.4193 9.92992C5.76704 9.68152 6.2341 9.68152 6.58184 9.92992L10.0006 12.3719V2.33398C10.0006 1.9658 9.7021 1.66732 9.3339 1.66732H2.66724Z"
          fill="#0A4E71"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="11"
        height="14"
        viewBox="0 0 11 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        onClick={postWishList}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2C0 0.895433 0.895433 0 2 0H8.66667C9.77127 0 10.6667 0.895433 10.6667 2V12.6856C10.6667 13.499 9.74726 13.9721 9.0854 13.4993L5.33333 10.8193L1.58124 13.4993C0.919373 13.9721 0 13.499 0 12.6856V2ZM2 1.33333C1.63181 1.33333 1.33333 1.63181 1.33333 2V12.0379L4.75207 9.59593C5.0998 9.34753 5.56687 9.34753 5.9146 9.59593L9.33333 12.0379V2C9.33333 1.63181 9.03487 1.33333 8.66667 1.33333H2Z"
          fill="#0A4E71"
        />
        <path d="M1 1H10V12.5L5.5 9.5L1 12.5V1Z" fill="#0A4E71" />
      </svg>
    );
  }
}

export default Card;
