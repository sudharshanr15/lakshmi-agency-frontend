import React from "react";

const Sortbtn = ({ value, categoryChange, category }) => {
  return (
    <button
      onClick={() => {
        categoryChange(value);
      }}
      className={
        value == category
          ? "bg-[#004b71] text-white lg:text-black lg:bg-yellow-400 p-2 w-1/7 m-2 lg:m-4 rounded-md"
          : "p-2 w-1/7 m-2 lg:m-4 rounded-md bg-gray-200"
      }
    >
      {value}
    </button>
  );
};

export default Sortbtn;
