"use client";
import { useEffect, useState } from "react";
import Card from "./card";
import { getProductsList } from "@/controller/productController";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import { get_category_items } from "@/lib/server_api/api";
import { updateData } from "@/lib/state/items/CategoryItemsSlicer";

function Content({ product }){
  // const [products, setProducts] = useState([]);
  const categoryItems = useSelector((state: RootState) => state.category_items.value)

  const product_id = product

  const dispatch = useDispatch();

  const items_data = useInfiniteQuery({
    queryKey: ["category", product_id],
    queryFn: ({ pageParam }) => get_category_items(product_id, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60 * 5
  })


  useEffect(() => {
    if(items_data.data?.pageParams){
      const items = items_data.data.pages.flatMap(page => page.data)
      dispatch(updateData(items))
      return
    }
  }, [items_data.data?.pageParams])

  return (
    <>
      <div className="m-5 lg:m-10 pb-64 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        {
          categoryItems.data.map((val, pos) =>
          (
            <Card
              name={val.web_item_name}
              description={val.description}
              itemCode={val.item_code}
              wished={val.wished}
              key={pos}
            />
          ))
        }
      </div>
      <div className="text-center mb-4">
        <button onClick={() => items_data.fetchNextPage()} className="bg-black text-white p-4">Load More</button>
      </div>
    </>
  );
};

export default Content;
