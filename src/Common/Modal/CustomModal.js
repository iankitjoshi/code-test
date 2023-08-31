import React from "react";
import Dialog from "@mui/material/Dialog";
import { Fade } from "@mui/material";
import Slide from '@mui/material/Slide';
import { initialJobDetails } from "../../utils";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomModal({ classes, open, children, fullWidth = true, CustomClassName = 'borderContainer', setOpen = () => { }, setJobDetails, setIsEdit }) {

  const handleClose = () => {
    setOpen(false)
    setIsEdit(false)
    setJobDetails({ ...initialJobDetails })
  }

  return (
    <>
      <Dialog onClose={handleClose} className={classes?.[CustomClassName]} open={open} fullWidth={fullWidth}
        TransitionComponent={Transition} keepMounted
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              maxWidth: "577px",
            },
          },
        }}
      >
        <Fade in={open}>
          <div> {children} </div>
        </Fade>
      </Dialog>
    </>
  );
}

export default CustomModal
