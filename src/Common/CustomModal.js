import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomModal({ open, handleClose, confirmAction }) {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            // maxWidth="xs"
        >
            <DialogTitle id="alert-dialog-title">
                Warning !!
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>No</Button>
                <Button variant="outlined" onClick={confirmAction} autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
}