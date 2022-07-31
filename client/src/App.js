import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import theme from "./Theme";
import mockData from "./data";
import React from "react";
import MaterialTable from "@material-table/core";

// Icons
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ViewColumnIcon from '@mui/icons-material/ViewColumn';
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

function App() {
  const { useState } = React;
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
        data={mockData}
        columns={columns}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          headerStyle: {
            backgroundColor: theme.palette.grid.main.header,
            color: theme.palette.grid.main.default,
          },
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id
                ? theme.palette.grid.main.active
                : theme.palette.grid.main.default,
          }),
          search: true,
          columnsButton: true,
          exportButton: true,
          filtering: true,
          sorting: true,
          pageSize: 10,
          pageSizeOptions: [10, 25, 50, 100],
        }}
      />
    </ThemeProvider>
  );
}

export default App;
