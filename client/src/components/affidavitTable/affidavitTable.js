import { ExportCsv, ExportPdf } from "@material-table/exporters";
import DetailsCard from "../detailsCard/detailsCard";
import React, { useState, useEffect } from "react";
import MaterialTable from "@material-table/core";
import Popover from "@mui/material/Popover";
import mockData from "../../data";
import theme from "../../Theme";
import Button from "@mui/material/Button";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

function AffidavitTable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState([]);

  // Delaying data to show NoData message
  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
      console.log(mockData);
    }, 2000);
  }, []);

  const ProcState = ({ rowData }) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const buttonStyle = {
      background: "white",
      color: "black",
      height: "30px",
    };

    const cellStyle = { display: "flex", alignItems: "center" };

    const handleOpen = (e) => {
      setOpen(true);
      setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => setOpen(false);

    return (
      rowData.PARTA_TRANSACTION && (
        <div style={cellStyle}>
          <p style={{ marginRight: "10px" }}>
            {rowData.PARTA_TRANSACTION.PROCESSEDSTATE === ""
              ? "N/A"
              : rowData.PARTA_TRANSACTION.PROCESSEDSTATE}
          </p>

          <Button
            style={buttonStyle}
            variant="contained"
            onClick={handleOpen}
            aria-describedby={rowData.PARTA_TRANSACTION.PROCESSEDSTATE.ITEMNO}
          >
            ...
          </Button>
          <Popover
            aria-describedby={rowData.PARTA_TRANSACTION.PROCESSEDSTATE.ITEMNO}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <DetailsCard PARTA_TRANSACTION={rowData.PARTA_TRANSACTION} />
          </Popover>
        </div>
      )
    );
  };

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
            // onClick: (event) => {
            //   this.functionName(!this.state.filter);
            // },
          },
          // Toggle
          {
            icon: ViewHeadlineIcon,
            tooltip: "Toggle Density",
            isFreeAction: true,
            // onClick: (event) => {
            //   this.functionName(!this.state.filter);
            // },
          },
          {
            icon: MoreVertIcon,
            position: "PARTA_TRANSACTION.PROCESSEDSTATE",
            onClick: (event, rowData) => {
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
        onRowClick={(event, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          actionsColumnIndex: -1,

          // Black table header
          headerStyle: {
            backgroundColor: theme.palette.grid.main.header,
            color: theme.palette.grid.main.default,
          },

          // Green clickable row
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
