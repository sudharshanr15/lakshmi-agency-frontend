"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test() {
  const [start, setStart] = useState(0);
  const [pageLength, setPageLength] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.report.order.get_order_list",
          //   "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.brand.get_list",
          {
            params: {
              days: "30",
              start: parseInt(start),
              page_length: parseInt(pageLength),
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token 4738b2b17fc8459:9cf183be1badf5a",
            },
          }
        );

        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [start, pageLength]);

  return (
    <>
      <p>Hello World</p>
    </>
  );
}
