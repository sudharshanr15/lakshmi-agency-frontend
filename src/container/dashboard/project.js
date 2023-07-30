import React, { useEffect, useState, createContext, useContext } from "react";
import { getData } from "@/utils/getData";

export function Project() {
  const [project, setProject] = useState([]);
  const store = ["project"];

  useEffect(() => {
    async function fetchData() {
      const promises = store.map((item) => getData(item));
      const responses = await Promise.all(promises);
      const result = responses.filter((response) => response !== null);

      setProject(result[0]["data"]);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1 className="md:mx-auto text-2xl justify-between lg:mx-20 lg:mt-10 mt-4 font-bold p-5 rounded-md">
        Recent Projects
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between lg:mx-20 p-5 rounded-md">
        {project.map((projectItem) => (
          <>
            <div className="border rounded-lg">
              <div className="flex justify-start p-4 mt-2">
                <div className="ml-4">
                  <h1 className="text-black font-bold text-2-xl">
                    {projectItem.project_title}
                  </h1>
                  <div className="flex">
                    <p className="mt-2  text-[#b9babc] md:text-1xl ">
                      Location: {projectItem.shipping_address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
