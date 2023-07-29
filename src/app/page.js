"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const useAxiosGet = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

const useAxiosPost = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

function getRecentOrders() {
  const url =
    "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
    Cookie: "sid=Guest",
  };

  const { data, error, loaded } = useAxiosGet(url, {
    headers: headers,
  });

  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);

  if (loaded) {
    return error ? <span>Error: {error}</span> : <p>{stringifiedData}</p>;
  }
  return <span>Loading...</span>;
}

const App = () => {
  const url =
    "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
    Cookie: "sid=Guest",
  };
  const postData = {
    id: "SAL-ORD-2023-00005",
  };

  const { data, error, loaded } = useAxiosGet(url, {
    headers: headers,
    params: postData,
  });

  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);
};

export default getRecentOrders;
