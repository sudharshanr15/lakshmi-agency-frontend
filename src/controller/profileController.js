import axios from "axios";
import { baseUrl, config } from "./config";

export const getAddressList = async (setAddress) => {
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.address.get_list";
  config.params = {
    address_type: "Billing",
    start: "0",
    page_length: "6",
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      //   console.log(res.data);
      setAddress(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getBillingAddress = async (setBillingAddress) => {
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.address.get_list";
  config.params = {
    address_type: "Billing",
    start: "0",
    page_length: "2",
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      // console.log(res.data);
      setBillingAddress(res.data.data[1]);
      sessionStorage.setItem(
        "billing_address",
        JSON.stringify(res.data.data[1])
      );
      sessionStorage.setItem(
        "delivery_address",
        JSON.stringify(res.data.data[1])
      );
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const postNewAddress = async (address) => {
  config.method = "POST";
  config.url = baseUrl + "/lakshmiagency.v1.store.address.add";
  config.data = address;
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      // console.log(res.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};
