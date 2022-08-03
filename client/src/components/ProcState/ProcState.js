import DetailsCard from "../DetailsCard/DetailsCard";
import { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

export default ProcState;
