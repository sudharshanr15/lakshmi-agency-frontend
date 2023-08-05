"use client";
import { useState, useEffect } from "react";
import { getData } from "@/utils/getData";

function useData() {
  const [orderList, setOrderList] = useState([]);
  const [quoteList, setQuoteList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const store = ["order", "quotation"];

  useEffect(() => {
    async function fetchData() {
      const promises = store.map((item) => getData(item));
      const responses = await Promise.all(promises);
      const result = responses.filter((response) => response !== null);
      setOrderList(result[0]["data"]);
      setQuoteList(result[1]["data"]);
      setIsLoading(false); // Mark loading as false once the data is fetched
    }
    fetchData();
  }, []);

  return { orderList, quoteList, isLoading };
}

function Card({ name, address, creation }) {
  return (
    <>
      <div className="border rounded-lg">
        <div className="flex justify-start p-4 mt-2">
          <div className="ml-4">
            <h1 className="text-black font-bold text-2-xl">{name}</h1>
            <div className="flex">
              <p className="mt-2  text-[#6A7079] md:text-1xl ">{address}</p>
            </div>
            <div className="flex mt-10">
              <p className="text-[#b9babc]">{creation}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function List() {
  const { orderList, quoteList, isLoading } = useData();
  return (
    <>
      <div className="p-5 flex justify-between">
        <p className="text-black text-2xl font-semibold">Quote List</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between lg:mx-10 mt-5 rounded-md">
        {quoteList.map((quote) => (
          <Card
            key={quote.name} // Assuming "name" is unique for each quote
            name={quote.name}
            address={`${quote.delivery_address.address_line1}, ${quote.delivery_address.city}, ${quote.delivery_address.state}, ${quote.delivery_address.country}, ${quote.delivery_address.pincode}`}
            creation={quote.creation}
          />
        ))}
      </div>
    </>
  );
}
