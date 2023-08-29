import React from "react";
import Dialog from "@mui/material/Dialog";
import { Fade } from "@mui/material";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomModal({ classes, open, children, fullWidth = true, maxWidth = "xs", CustomClassName = 'borderContainer', setOpen = () => { }, loginModal = false }) {

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog onClose={handleClose} className={classes?.[CustomClassName]} open={open} fullWidth={fullWidth}
        maxWidth={maxWidth} TransitionComponent={Transition} keepMounted >
        <Fade in={open}>
          <div> {children} </div>
        </Fade>
      </Dialog>
    </>
  );
}

export default CustomModal
