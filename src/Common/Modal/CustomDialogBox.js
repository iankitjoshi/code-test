import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from "@mui/material";
import "tailwindcss/tailwind.css";

function CustomDialogBox(props) {
  const {
    open,
    handleClose = () => { },
    title = "Warning",
    dialogText = "Are you sure you want to delete?",
    confirmAction = () => { },
    disabledDeleteButton = false,
    isLoading = false,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth={true}
      className="cus-dialog"
      sx={{
        display: "flex",
        gap: "20px",
        left: "30%",
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 30px',
          gap: '5px',
          marginTop: '25px'
        }}
      >
        <DialogTitle className="text-xl font-bold" sx={{ padding: "0" }}>
          {title}
        </DialogTitle>
        <DialogContent sx={{ padding: "0" }}>
          <DialogContentText className="text-lg">
            {dialogText}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <div className="dialog-btns">
            <Button
              onClick={handleClose}
              variant="outlined"
              color="error"
              className="!mx-4 !my-2 !font-semibold w-28"
            >
              No
            </Button>
            <Button
              onClick={confirmAction}
              variant="outlined"
              className="!mx-4 !my-2 !font-semibold w-28"
              disabled={disabledDeleteButton}
            >
              Yes
            </Button>
          </div>
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default CustomDialogBox;
