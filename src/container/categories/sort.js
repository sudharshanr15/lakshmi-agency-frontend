"use client";
import React, { useState, useEffect } from "react";
import Sortbtn from "./sortbtn";
import { getSubCategories } from "@/controller/dashboardController";
import { useRouter } from "next/navigation";

const Sort = ({ currCategory }) => {
  // const [opened, setopen] = useState(false);

  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState(currCategory.replaceAll("%20", " "));

  const router = useRouter();

  useEffect(() => {
    const itemName = sessionStorage.getItem("category");
    // console.log(itemName);
    getSubCategories(setSubCategories, itemName);
  }, []);

  function categoryChange(_category) {
    // console.log(_category);
    if (_category != category) {
      setCategory(_category);
      router.push("/dashboard/categories/" + _category);
    } else {
      setCategory("");
    }
  }

  const sortings = subCategories.map((val, pos) => {
    return (
      <Sortbtn
        key={pos}
        value={val.name}
        categoryChange={categoryChange}
        category={category}
      />
    );
  });

  return (
    <div className={`px-5 bg-gray-100`}>
      <div className="h-14 lg:h-20 overflow-hidden">{sortings}</div>
      {/* <button
        onClick={() => setopen(!opened)}
        className="text-blue-900 p-2 m-2 lg:m-4 rounded-md border-2 border-blue-900"
      >
        {opened ? "view less" : "view more"}
      </button> */}
    </div>
  );
};

export default Sort;
