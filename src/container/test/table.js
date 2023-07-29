"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Box, Button, duration } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { generatePDF } from "@/utils/pdfUtils";
import { isElement } from "react-is";

//defining columns outside of the component is fine, is stable
const columns = [
  {
    accessorKey: "id",
    header: "Sno",
    size: 40,
  },
  {
    accessorKey: "name",
    header: " Name",
    size: 120,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    size: 120,
  },

  {
    accessorKey: "creation",
    header: "Date",
    size: 120,
  },

  {
    accessorKey: "total_qty",
    header: "Total quantity",
    size: 300,
  },

  {
    accessorKey: "delivery_status",
    header: "Delivery status",
    size: 300,
  },
];

const csvOptions = {
  fieldSeparator: ",",
  quoteStrings: '"',
  decimalSeparator: ".",
  showLabels: true,
  useBom: true,
  useKeysAsHeaders: false,
  headers: columns.map((c) => c.header),
};

const csvExporter = new ExportToCsv(csvOptions);

async function deliveryStatus({ name }) {
  const baseURL = `https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
  };

  const payload = { headers, params: "SAL-ORD-2023-00009" };
  try {
    const response = await axios.get(baseURL, payload);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function ListTable({ orderData }) {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const items = [];
      const promises = orderData.map(async (order, index) => {
        const dynamicArray = []; // Define dynamicArray here
        const name = order.name;
        dynamicArray.push(index + 1);
        dynamicArray.push(name);
        dynamicArray.push(order.creation);
        dynamicArray.push(order.total_qty);

        try {
          const result = await deliveryStatus(name); // Passing the entire order object
          const status = result || "Unknown";
          dynamicArray.push(status);

          items[index] = dynamicArray;
        } catch (error) {
          console.error(error);
          // If an error occurs, handle it gracefully
          dynamicArray.push("Error");
          items[index] = dynamicArray;
        }
      });

      try {
        await Promise.all(promises);
        setData(items);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setData([]); // Clear the data in case of an error
        setIsLoading(false);
      }
    };

    fetchData();
  }, [orderData]);

  const final = Data.map((d, i) => (
    <li key={i}>
      {i + 1}: {d.join(", ")}
    </li>
  ));

  return (
    <>
      {/* <p> {JSON.stringify(Data)} </p> */}
      {isLoading ? <p> Loading.. </p> : <>{final}</>}
    </>
  );
}
