import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import Popover from "@mui/material/Popover";
import { Typography } from "@mui/material";
import mockData from "./data";
import theme from "./Theme";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

function App() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState([]);

  // Delaying data to show NoData message
  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 2000);
  }, []);

  const columns = [
    {
      title: "Affidavit No",
      field: "PARTA_TRANSACTION.AFFIDAVITNO",
      type: "string",
    },
    {
      title: "Policy No",
      field: "PARTA_TRANSACTION.POLICYNO",
      type: "string",
    },
    {
      title: "Insured Name",
      field: "PARTA_TRANSACTION.RISKINSUREDNAME",
      type: "string",
    },
    {
      title: "Type",
      field: "PARTA_TRANSACTION.TRANSACTIONTYPE",
      type: "string",
    },
    {
      title: "Premium",
      field: "PARTA_TRANSACTION.AMOUNT",
      type: "currency",
    },
    {
      title: "Inception",
      field: "PARTA_TRANSACTION.EFFECTIVEDATE",
      type: "date",
    },
    {
      title: "Expiration",
      field: "PARTA_TRANSACTION.EXPIRATIONDATE",
      type: "date",
    },
    {
      title: "Batch",
      field: "PARTA_TRANSACTION.BATCHID",
      type: "numeric",
    },
    {
      title: "Submitted",
      field: "PARTA_TRANSACTION.RECEIVEDATE",
      type: "date",
    },
    {
      title: "Proc State",
      field: "PARTA_TRANSACTION.PROCESSEDSTATE",
      type: "string",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h6">RSI Coding Challenge</Typography>
      <MaterialTable
        // empty title per mockups
        title=" "
        data={data}
        columns={columns}
        actions={[
          {
            icon: () => <MoreVertIcon />,
            onClick: (evt, rowData) => {
              console.log(evt.target);

              return (
                <Popover
                  open={true}
                  anchorReference="anchorPosition"
                  anchorPosition={{ top: 200, left: 400 }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {" "}
                  <div>
                    {" "}
                    <h1>I work</h1>{" "}
                  </div>
                </Popover>
              );
            },
          },
        ]}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          actionsColumnIndex: -1,
          // Black header
          headerStyle: {
            backgroundColor: theme.palette.grid.main.header,
            color: theme.palette.grid.main.default,
          },
          // Green Clickable
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id
                ? theme.palette.grid.main.active
                : theme.palette.grid.main.default,
          }),
          // Search
          search: true,
          // explicitly include 'No Records to Display', defaults to true
          showEmptyDataSourceMessage: true,
          columnsButton: true,
          // Export PDF/CSV
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "mockDataPDF"),
            },
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "mockDataCSV"),
            },
          ],
          exportAllData: true,
          // Filtering
          filtering: true,
          // Sorting
          sorting: true,
          // Rows Per Page
          pageSize: 10,
          pageSizeOptions: [10, 25, 50, 100],
        }}
      />
    </ThemeProvider>
  );
}

export default App;
