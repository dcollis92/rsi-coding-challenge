import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import theme from "./Theme";
import mockData from "./data";
import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from '@material-table/exporters';



// Icons
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ViewColumnIcon from '@mui/icons-material/ViewColumn';
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

function App() {
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      title: "Affidavit No",
      field: "PARTA_TRANSACTION.AFFIDAVITNO",
      type: "string",
    },
    { title: "Policy No", field: "PARTA_TRANSACTION.POLICYNO", type: "string" },
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
    { title: "Premium", field: "PARTA_TRANSACTION.AMOUNT", type: "currency" },
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
    { title: "Batch", field: "PARTA_TRANSACTION.BATCHID", type: "numeric" },
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
        title=' '
        data={mockData}
        columns={columns}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
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
          columnsButton: true,
          // Export PDF/CSV
          exportMenu: [{
            label: 'Export PDF',
            exportFunc: (cols, datas) => ExportPdf(cols, datas, 'mockDataPDF')
          }, {
            label: 'Export CSV',
            exportFunc: (cols, datas) => ExportCsv(cols, datas, 'mockDataCSV')}],
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
