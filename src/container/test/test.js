"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const axios = require("axios");
let data = JSON.stringify({
  id: "SAL-ORD-2023-00012",
});

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.shipment.invoice.get",
  headers: {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
    Cookie:
      "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
