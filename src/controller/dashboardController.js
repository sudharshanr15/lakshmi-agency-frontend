import axios from "axios";
import { baseUrl, config } from "./config";

export const getCategories = async (setCategories) => {
  config.method = "GET";
  config.url = baseUrl + "/lakshmiagency.v1.store.category.get_list";
  config.params = "";
  // console.log("CATEGORIES");

  axios
    .request(config)
    .then((res) => {
      // console.log(res.data);
      setCategories(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getSubCategories = async (setSubCategories, parent) => {
  config.method = "get";
  config.url = baseUrl + "/lakshmiagency.v1.store.category.get_list";
  config.params = {
    parent: parent,
  };
  // console.log("SUB CATEGORIES");
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data);
      setSubCategories(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getOrders = async (setOrders) => {
  config.method = "get";
  config.url = baseUrl + "/lakshmiagency.v1.store.order.get_list";
  config.params = {
    status: "order",
    start: "0",
    page_length: "6",
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      // console.log(res.data.data);
      setOrders(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getDues = async (setDues) => {
  config.method = "get";
  config.url =
    baseUrl + "/lakshmiagency.v1.store.report.invoice.get_pending_list";
  config.params = {
    start: "0",
    page_length: "6",
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data.data);
      setDues(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getOrderByID = async (setOrder, OrderId) => {
  config.method = "get";
  config.url = baseUrl + "/lakshmiagency.v1.store.order.get";
  config.params = {
    id: OrderId,
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data.data);
      // setOrder(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getOrderStatistics = async (setOrdersStatistics, selectedDay) => {
  config.method = "get";
  config.url = baseUrl + "/lakshmiagency.v1.store.report.order.get";
  config.params = {
    days: selectedDay,
  };
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      // console.log(res.data);
      setOrdersStatistics(res.data.data);
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
};

export const getChartData = async ({setChartData}) => {
  config.method = "get";
  config.url = baseUrl + "/lakshmiagency.v1.store.report.purchased.get";
  config.params = {};
  // console.log(config);

  axios
    .request(config)
    .then((res) => {
      console.log(res.data);
      const data = res.data.data;
      const labels = Object.keys(data);
      const values = Object.values(data);
      // console.log(labels, values);
      // setChartData({
      //   labels: labels,
      //   values: values,
      // });
      // setChartData({
      //   labels: ["Dec", "JAN", "Feb", "Mar"],
      //   values: [5500, 8734, 7235, 8530],
      // });
      
    })
    .catch((err) => {
      console.log("Something went wrong");
      console.log(err);
    });
    setChartData({
      labels: ["Dec", "JAN", "Feb", "Mar"],
      values: [5500, 8734, 7235, 8530],
    });
};

// Graph API data
// export const fetchGraphData = async (days) => {
//   console.log("fetch graph data api fuction inside coming ")
//   console.log(days)
//   const baseURL = `http://94.237.78.193/api/method/lakshmiagency.v1.store.report.order.get_order_list`;

//   try {
//     const response = await axios.get(baseURL, {
//       params: {
//         days: parseInt(days),
//         start: '0',
//         page_length: '6',
//       },
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Token 7289ea03c732955:c0734d67d9c686f',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// Card API data
// export const fetchDataForStore = async (days) => {
//   const baseURL = `http://94.237.78.193/api/method/lakshmiagency.v1.store.report.order.get`;

//   try {
//     const response = await axios.get(baseURL, {
//       params: {
//         days: parseInt(days),
//       },
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Token 7289ea03c732955:c0734d67d9c686f",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// Table API data
// export const fetchTableData = async () => {
//   const baseURL = `http://94.237.78.193/api/method/lakshmiagency.v1.store.order.get_list`;

//   try {
//     const response = await axios.get(baseURL, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Token 7289ea03c732955:c0734d67d9c686f",
//       },
//       params: {
//         status: "order",
//         start: "0",
//         page_length: "6",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     return null;
//   }
// };

// UpcomingDue API data

// export const fetchShipmentInvoiceData = async () => {
//   const baseURLShipmentInvoice =
//     "http://94.237.78.193/api/method/lakshmiagency.v1.store.shipment.invoice.get_list";

//   try {
//     const response = await axios.get(baseURLShipmentInvoice, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Token 7289ea03c732955:c0734d67d9c686f",
//       },
//       params: {
//         start: "0",
//         page_length: "6",
//       },
//     });

//     // Return the data from the second API request
//     return response.data;
//   } catch (error) {
//     console.error("Error:", error);
//     return null;
//   }
// };
