import { useState } from "react";
import { Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import DetailsCard from "../DetailsCard/DetailsCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProcState = ({ rowData }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const cellStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const handleOpen = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => setOpen(false);

  return (
    rowData.PARTA_TRANSACTION && (
      <div style={cellStyle}>
        <Typography>
          {rowData.PARTA_TRANSACTION.PROCESSEDSTATE === ""
            ? "N/A"
            : rowData.PARTA_TRANSACTION.PROCESSEDSTATE}
        </Typography>
        <IconButton
          variant="contained"
          onClick={handleOpen}
          aria-describedby={rowData.PARTA_TRANSACTION.BATCHID}
        >
          <MoreVertIcon />
        </IconButton>
        <Popover
          aria-describedby={rowData.PARTA_TRANSACTION.BATCHID}
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

export default ProcState;
