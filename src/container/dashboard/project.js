import React, { useEffect, useState, createContext, useContext } from "react";
import { getData } from "@/utils/getData";

export function Project() {
  // const [project, setProject] = useState([]);
  // const store = ["project"];

  // useEffect(() => {
  //   async function fetchData() {
  //     const promises = store.map((item) => getData(item));

  //     const responses = await Promise.all(promises);
  //     const result = responses.filter((response) => response !== null);

  //     setProject(result[0]["data"]);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <h1 className="md:mx-auto text-2xl justify-between lg:mx-20 lg:mt-10 mt-4 font-bold p-5 rounded-md">
        Upcoming due
      </h1>
   
    </>
  );
}
