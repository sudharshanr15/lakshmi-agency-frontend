import axios from "axios";
import { baseUrl, config } from "./config";

export const getProductsList = async (setProducts, item) => {
  console.log(item);
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.product.get_list";
  config.params = {
    field_filters: "",
    attribute_filters: "",
    search: "",
    item_group: item,
    start: 0,
    from_filters: 0,
  };
  // console.log("CATEGORIES");

  axios
    .request(config)
    .then((res) => {
      console.log(res.data);
      setProducts(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getProductDetails = async (setProductDetail, itemCode) => {
  console.log(itemCode);
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.product.get";
  config.params = {
    item_code: itemCode,
    attribute_filters: "",
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data);
      setProductDetail(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const placeOrder = async (billing_address, delivery_address, items) => {
  // console.log(itemCode);
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.quotation.add";
  config.params = {
    billing_address: billing_address,
    delivery_address: delivery_address,
    items: items,
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};
