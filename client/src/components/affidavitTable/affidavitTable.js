import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import mockData from "../../data";
import theme from "../../Theme";
import ProcState from "../ProcState/ProcState";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

// Icons
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

function AffidavitTable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState([]);

  // NoData message pre-loading
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
      dateSetting: "MM/DD/YYY",
      // address null values
      emptyValue: "N/A",
    },
    {
      title: "Proc State",
      field: "PARTA_TRANSACTION.PROCESSEDSTATE",
      type: "string",
      // address null values
      render: (rowData) => <ProcState rowData={rowData} />,
    },
  ];

  return (
    <>
      <MaterialTable
        data={data}
        columns={columns}
        actions={[
          // FilterList icon
          {
            icon: FilterListIcon,
            tooltip: "Show Filters",
            isFreeAction: true,
          },
          // Density Toggle icon
          {
            icon: ViewHeadlineIcon,
            tooltip: "Toggle Density",
            isFreeAction: true,
          },
        ]}
        onRowClick={(event, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          // empty title per mockups
          showTitle: false,

          // Table styling
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

          // Table Search
          search: true,

          // explicitly include 'No Records to Display'
          // defaults to true
          showEmptyDataSourceMessage: true,

          // Hide and Show Columns
          columnsButton: true,

          // Export Data
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
    </>
  );
}

export default AffidavitTable;
