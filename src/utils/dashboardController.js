import axios from 'axios';

// Graph API data
export const fetchGraphData = async (days) => {
  const baseURL = `http://94.237.78.193/api/method/lakshmiagency.v1.store.report.order.get_order_list`;

  try {
    const response = await axios.get(baseURL, {
      params: {
        days: parseInt(days),
        start: '0',
        page_length: '6',
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token 7289ea03c732955:c0734d67d9c686f',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Card API data
export const fetchDataForStore = async (days) => {
  const baseURL = `http://94.237.78.193/api/method/lakshmiagency.v1.store.report.order.get`;

  try {
    const response = await axios.get(baseURL, {
      params: {
        days: parseInt(days),
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token 7289ea03c732955:c0734d67d9c686f',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Table API data
export const fetchTableData = async () => {
  const baseURL = `http://94.237.78.193/api/method/lakshmiagency.v1.store.order.get_list`;

  try {
    const response = await axios.get(baseURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token 7289ea03c732955:c0734d67d9c686f',
      },
      params: {
        status: 'order',
        start: '0',
        page_length: '6',
      },
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
