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

export const searchProducts = async (setProducts, search) => {
  console.log(item);
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.product.get_list";
  config.params = {
    field_filters: "",
    attribute_filters: "",
    search: search,
    item_group: "",
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

export const getBrands = async (setBrands) => {
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.brand.get_list";
  config.params = {};
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data);
      setBrands(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const addToWishlist = async (itemCode) => {
  console.log(itemCode);
  config.method = "POST";
  config.url = baseUrl + "/lakshmiagency.v1.store.wishlist.add";
  config.params = {
    item_code: itemCode,
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

export const removeFromWishlist = async (itemCode) => {
  console.log(itemCode);
  config.method = "DELETE";
  config.url = baseUrl + "/lakshmiagency.v1.store.wishlist.remove";
  config.params = {
    item_code: itemCode,
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

export const placeOrder = async (billing_address, delivery_address, items) => {
  // console.log(itemCode);
  config.method = "POST";
  config.url = baseUrl + "/lakshmiagency.v1.store.quotation.add";
  config.params = {};
  config.data = {
    items: items,
    billing_address: billing_address,
    delivery_address: delivery_address,
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
