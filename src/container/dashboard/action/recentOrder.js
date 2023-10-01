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
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleExportData = () => {
    csvExporter.generateCsv(finalData);
    // generatePDF(data,columns);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const items = [];
  //     const promises = orderData.map(async (order, index) => {
  //       const dynamicObject = {}; // Define dynamicArray here
  //       const name = order.name;
  //       dynamicObject.index = index + 1;
  //       dynamicObject.name = name;
  //       dynamicObject.amount = "not given";
  //       dynamicObject.creation = order.creation;
  //       dynamicObject.total_qty = order.total_qty;

  //       try {
  //         const result = await deliveryStatus(name); // Passing the entire order object
  //         const status = result || "Unknown";
  //         dynamicObject.status = status;

  //         items[index] = dynamicObject;
  //       } catch (error) {
  //         console.error(error);
  //         // If an error occurs, handle it gracefully
  //         dynamicArray.push("Error");
  //         items[index] = dynamicObject;
  //       }
  //     });

  //     try {
  //       await Promise.all(promises);
  //       setData(items);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setData([]); // Clear the data in case of an error
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [orderData]);

  const [tableData, setTableData] = useState({ data: [] });

  useEffect(() => {
    console.log("Fetch additional data for cards");

    const fetchAdditionalCardData = async () => {
      try {
        console.log('Data from the third API:', data);
        setTableData(data);
        console.log("table data start");
        console.log(tableData)
        console.log("table data end")
      } catch (error) {
        console.error('Failed to fetch additional data:', error);
      }
    };

    fetchAdditionalCardData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const items = [];
      const orderdata = await fetchTableData(); 
      const promises = orderData.map(async (order, index) => {
        
        const dynamicObject = {}; // Define dynamicArray here
        const name = order.name;
        dynamicObject.index = index + 1;
        dynamicObject.name = name;
        dynamicObject.amount = "not given";
        dynamicObject.creation = order.creation;
        dynamicObject.total_qty = order.total_qty;
        dynamicObject.status = 1;


        try {
          const result = await deliveryStatus(name); // Passing the entire order object
          const status = result || "Unknown";
          dynamicObject.status = status;

          items[index] = dynamicObject;
        } catch (error) {
          console.error(error);
          // If an error occurs, handle it gracefully
          dynamicArray.push("Error");
          items[index] = dynamicObject;
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


  return (
    <>
      {isLoading ? (
        <p> Loading.. </p>
      ) : tableData.length > 1 ? (
        <MaterialReactTable
          columns={columns}
          data={tableData}
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
                //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                onClick={handleExportData}
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
        <p> No data available .</p>
      )}
       <div>
    
    </div>
    </>
  );
}
