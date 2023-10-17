"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Box, Button, duration } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv"; //or use your library of choice here
import { fetchShipmentInvoiceData } from "@/controller/dashboardController";

//defining columns outside of the component is fine, is stable
const columns = [
  {
    accessorKey: "index",
    header: "Sno",
    size: 40,
  },
  {
    accessorKey: "name",
    header: " ID",
    size: 120,
  },
  {
    accessorKey: "creation",
    header: "Date",
    size: 120,
  },
  {
    accessorKey: "rounded_total",
    header: "Total Amount",
    size: 120,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 120,
    Cell: ({ cell }) => (
      <span
        style={{
          color: cell.getValue() === "Overdue" ? "red" : "green",
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

export function UpcomingDue() {
  const [tableData, setTableData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShipmentData = async () => {
      try {
        const data = await fetchShipmentInvoiceData(); // Call the third API
        setTableData(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Failed to fetch additional data:', error);
      }
    };

    fetchShipmentData();
  }, []);

  let currentIndex = 0;

  const extractedData = tableData.data.map(item => {
    currentIndex++; 
    return {
      index: currentIndex, 
      name: item.name,
      creation: item.creation,
      rounded_total: item.rounded_total,
      status: item.status
    };
  });

  const handleExportData = () => {
    csvExporter.generateCsv(extractedData);
    // generatePDF(data,columns);
  };


  return (
    <>
    <div className="lg:mx-24 mx-6 lg:mt-10 mt-4 p-5 rounded-md z-50">
  <div className="flex justify-between">
    <h1 className="text-black text-1xl md:text-2xl font-semibold">
      Upcoming due
    </h1>
  </div>

  <div className="relative overflow-x-auto shadow-md md:mt-8 mt-5">
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
      <p>No data available.</p>
    )}
  </div>
</div>

    </>
  );
}

