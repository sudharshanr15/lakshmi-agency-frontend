import axios from "axios";
import { useState, useEffect } from "react";

export async function getData(name) {
  const baseURL = `https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.${name}.get`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
  };

  try {
    const response = await axios.get(baseURL, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getDataList(name) {
  const baseURL = `https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.${name}.get_list`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
  };

  try {
    const response = await axios.get(baseURL, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function getQuoteAndOrder() {
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

export async function getAmount(orderId) {
  const baseURL = `https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.shipment.invoice.get`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
  };

  let data = JSON.stringify({
    id: "SAL-ORD-2023-00012",
  });

  try {
    const response = await axios.get(baseURL, { headers }, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// Helper functions

export function formatDate(dateString) {
  const dateObject = new Date(dateString);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
