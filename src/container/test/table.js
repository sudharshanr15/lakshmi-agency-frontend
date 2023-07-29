"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { generatePDF } from "@/utils/pdfUtils";

const useAxiosGet = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

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

// take delivery status
async function fetchOrder() {
  const [orderData, setOrderData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get";
        const headers = {
          "Content-Type": "application/json",
          Authorization: "token 69e0234a0664f91:35470717fb585f3",
          Cookie: "sid=Guest",
        };
        const postData = {
          id: "SAL-ORD-2023-00005",
        };

        const response = await axios.get(url, {
          headers: headers,
          params: postData,
        });

        setOrderData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return orderData;
}

export function ListTable({ orderData }) {
  const handleExportData = () => {
    csvExporter.generateCsv(finalData);
    // generatePDF(data,columns);
  };

  return (
    <>
      {/* <p>{tempData}</p> */}
      <MaterialReactTable
        columns={columns}
        data={orderData}
        positionToolbarAlertBanner="bottom"
        renderTopToolbarCustomActions={({ table }) => (
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              p: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <Button
              color="primary"
              //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
              onClick={handleExportData}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Export into csv {orderData.length}
            </Button>
          </Box>
        )}
      />
    </>
  );
}
