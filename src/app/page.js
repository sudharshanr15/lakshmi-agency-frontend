'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get_list";
const headers = {
  "Content-Type": "application/json",
  "Authorization": "token 69e0234a0664f91:35470717fb585f3",
  "Cookie": "sid=Guest"
};
const requestData = {
  id: "lalit@apiusers.com-proj-1"
};

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .post(baseURL, requestData, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data) return null;

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}