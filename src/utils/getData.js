import axios from "axios";

export async function getData(name) {
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
