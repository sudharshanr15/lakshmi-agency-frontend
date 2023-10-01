"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Box, Button, duration } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { generatePDF } from "@/utils/pdfUtils";
import { isElement } from "react-is";
import { darken } from "@mui/material";
import { fetchTableData } from "@/utils/dashboardController";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
//defining columns outside of the component is fine, is stable
const columns = [
  {
    accessorKey: "index",
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
    size: 120,
  },

  {
    accessorKey: "status",
    header: "Delivery status",
    size: 300,
    Cell: ({ cell }) => (
      <span
        style={{
          color: cell.getValue() === "Fully Delivered" ? "green" : "red",
          backgroundColor: "#EFF5E7",
          padding: "10px",
        }}
      >
        {cell.getValue()}
      </span>
    ),
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

async function deliveryStatus(name) {
  const baseURL = `https://test01.lakshmiagency.com/api/method/lakshmiagency.v1.store.order.get`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "token 69e0234a0664f91:35470717fb585f3",
  };

  const config = {
    headers: headers,
    params: {
      id: name,
    },
  };

  try {
    const response = await axios.get(baseURL, config);
    return response.data.data.delivery_status; // Assuming the API response contains the data you need
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it further up the call stack
  }
}

export function ListTable({ orderData }) {
  const [tableData, setTableData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdditionalCardData = async () => {
      try {
        const data = await fetchTableData(); // Call the third API
        setTableData(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Failed to fetch additional data:', error);
      }
    };

    fetchAdditionalCardData();
  }, []);

  let currentIndex = 0;

  const extractedData = tableData.data.map(item => {
    currentIndex++; 
    return {
      index: currentIndex, 
      name: item.name,
      amount: item.total_qty,
      creation: item.creation,
      total_qty: item.total_qty,
      status: item.delivery_status
    };
  });

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : extractedData.length > 0 ? (
        <MaterialReactTable
          columns={columns}
          data={extractedData}
          positionToolbarAlertBanner="bottom"
          renderTopToolbarCustomActions={({ table }) => (
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                p: "0.5rem",
                flexWrap: "wrap",
                color: "red",
              }}
            >
              <Button
                color="primary"
                // onClick={handleExportData}
                startIcon={<FileDownloadIcon />}
                variant="contained"
              >
                Export into csv
              </Button>
            </Box>
          )}
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: "#E7EEF1",
            },
          }}
        />
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
}

