import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import "tailwindcss/tailwind.css";
import CreateJobs from './CreateJob';
import CustomModal from '../../Common/Modal/CustomModal';
import { useDispatch } from 'react-redux';
import { getAllJobs } from './slice';


function Jobs() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllJobs())
    }, [])

    const handleClose = () => {

    }

    return (
        <div className="p-5 ">
            <Button variant="contained" > Create Job </Button>
            <CustomModal onClose={handleClose} open={true} maxWidth='sm'>
                <CreateJobs />
            </CustomModal>
        </div>
    );
}

export default Jobs;