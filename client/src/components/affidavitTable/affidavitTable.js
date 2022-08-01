import { ExportCsv, ExportPdf } from "@material-table/exporters";
import DetailsCard from "../detailsCard/detailsCard";
import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import Popover from "@mui/material/Popover";
import mockData from "../../data";
import theme from "../../Theme";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

function AffidavitTable() {
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
    <>
      <MaterialTable
        // empty title per mockups
        title=" "
        data={data}
        columns={columns}
        actions={[
          // FilterList icon
          {
            icon: FilterListIcon,
            tooltip: "Show Filters",
            isFreeAction: true,
            onClick: (evt) => {
              this.functionName(!this.state.filter);
            },
          },
          {
            icon: ViewHeadlineIcon,
            tooltip: "Toggle Density",
            isFreeAction: true,
            // onClick: (evt) => {
            //   this.functionName(!this.state.filter);
            // },
          },
          {
            icon: () => <MoreVertIcon />,
            onClick: (evt, data) => {
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
                  <DetailsCard />
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

          // Black table header
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
    </>
  );
}

export default AffidavitTable;
