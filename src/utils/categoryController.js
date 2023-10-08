import axios from "axios";

export const fetchSidebarCategory = async () => {
  const baseURL =
    "http://94.237.78.193/api/method/lakshmiagency.v1.store.category.get_list";

  try {
    const response = await axios.get(baseURL, {
    //   params: {
    //     parent: "WATERTEC BATH FITTING",
    //   },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 7289ea03c732955:c0734d67d9c686f",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSidebarSubCategory = async (subcategory) => {
  const baseURL ="http://94.237.78.193/api/method/lakshmiagency.v1.store.category.get_list";

  try {
    const response = await axios.get(baseURL, {
      params: {
        parent: subcategory,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 7289ea03c732955:c0734d67d9c686f",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
