import { useDispatch } from "react-redux";
import {
  addProductsInCart,
  removeProductFromCart,
  setSelectedProduct,
} from "@/lib/features/productSlice";
import { useState } from "react";

// const Card = ({ name, mrp, price, gst, deliveryfee, deliverydate }) => {
//   return (
//     <div className="p-4 border rounded-md text-gray-500">
//       <div className="flex items-start">
//         <input type="checkbox" className="mt-2" />
//         <h3 className="ml-2">{name}</h3>
//       </div>
//       <div className="flex justify-between py-3 text-sm">
//         <div>
//           <input
//             className="p-1 w-20 rounded-md border"
//             type="number"
//             defaultValue={0}
//           />
//           <p className="py-1 text-green-400">In Stock</p>
//           <p className="pt-1">Standard Delivery {deliverydate}</p>
//         </div>
//         <div>
//           <p className="py-1 ml-auto text-gray-400">
//             <span className="text-xl font-bold text-blue-900">
//               &#8377; {price}{" "}
//             </span>{" "}
//             MRP:<span className="line-through">{mrp}</span>
//           </p>
//           <p className="py-1 w-fit ml-auto">&#8377;{gst} Excl. GST</p>
//           <p className="pt-1 w-fit ml-auto text-green-400">
//             Delivery Fee &#8377;{deliveryfee}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Card = ({ name, description, itemCode }) => {
  const dispatch = useDispatch();
  function showProductDetailCard() {
    // console.log("product clicked", itemCode);
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(setSelectedProduct(itemCode));
  }

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
    }
  }

  return (
    <div className="p-4 border rounded-md text-gray-500">
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
          <p className="pt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
