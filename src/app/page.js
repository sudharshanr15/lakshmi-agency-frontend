'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get_list";
const headers = {
  "Content-Type": "application/json",
  "Authorization": "token 69e0234a0664f91:35470717fb585f3",
  "Cookie": "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=",
};

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL, { headers})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data) return null;
  const totalData = data.length
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <p>Total data : {totalData}</p>
    </div>
  );
}
