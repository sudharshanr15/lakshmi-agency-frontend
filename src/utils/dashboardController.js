// apiCalls.js

import axios from 'axios';

export const fetchGraphDataa = async (days) => {
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

