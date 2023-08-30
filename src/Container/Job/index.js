import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "tailwindcss/tailwind.css";
import CreateJobs from './CreateJob';
import CustomModal from '../../Common/Modal/CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, getAllJobs } from './slice';
import { buttonClass, currencyFormat, externalButtonClass, initialJobDetails, snackbarMessegeType } from '../../utils';
import CustomLoader from '../../Common/CustomLoader/CustomLoader';
import useCustomSnackbar from '../../Common/Snackbar/useCustomSnackbar';
import CustomDialogBox from '../../Common/Modal/CustomDialogBox';


function Jobs() {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useCustomSnackbar()

    const { jobs, isLoading } = useSelector(state => state?.jobsData || {}) || {}

    const [open, setOpen] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [jobDetails, setJobDetails] = useState({ ...initialJobDetails })
    const [errors, setErrors] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [step, setStep] = useState(1)
    const [id, setId] = useState('')

    useEffect(() => {
        dispatch(getAllJobs())
    }, [])

    const handleClose = () => {
        setOpen(false)
        setOpenDelete(false)
    }

    const handleCreateJob = () => {
        setOpen(true)
        setJobDetails({ ...initialJobDetails })
        setStep(1)
        setId('')
        setErrors({})
    }

    const openDeleteModal = (id) => {
        setId(id)
        setOpenDelete(true)
    }

    const handleDeleteJob = () => {
        dispatch(deleteJob(id)).then(res => {
            setOpenDelete(false)
            enqueueSnackbar(`Job Deleted Successfully.`, { variant: snackbarMessegeType.success })
            dispatch(getAllJobs())
        })
    }

    const handleEditJob = (jobData) => {
        setOpen(true)
        setIsEdit(true)
        setJobDetails({ ...jobData })
        setStep(1)
        setId(jobData?.id)
    }

    return (
        <div className="p-5 ">
            {isLoading && <CustomLoader />}
            <Button variant="contained" onClick={handleCreateJob} > Create Job </Button>
            <CustomModal onClose={handleClose} open={open} setOpen={setOpen} setJobDetails={setJobDetails} >
                <CreateJobs setOpen={setOpen} setJobDetails={setJobDetails} jobDetails={jobDetails}
                    setStep={setStep} step={step} setIsEdit={setIsEdit} isEdit={isEdit} id={id} setErrors={setErrors} errors={errors} />
            </CustomModal>
            <Grid container className='!mt-8 bg-bgcolor p-6' spacing={4}>
                {
                    jobs?.map(jobs => {
                        const { id, jobTitle, companyName, industry, location, remoteType, minExperience, maxExperience, maxSalary, minSalary, totalEmployee, applyType } = jobs
                        return (
                            <Grid item xs={6} className='' key={id} >
                                <button className={buttonClass} onClick={() => openDeleteModal(id)} > X </button>
                                <button className={buttonClass} onClick={() => handleEditJob(jobs)}> Edit </button>
                                <div className='flex gap-2 px-6 py-4 bg-white rounded-med border-1 border-border-gray'>
                                    <img src='https://generation-sessions.s3.amazonaws.com/8061096148f883bef6ad012421e55d43/img/rectangle-1965-2@2x.png' alt={jobTitle} className='h-12 ' />
                                    <div>
                                        <h6 className='text-2xl' > {jobTitle} </h6>
                                        <p className='' > {companyName} - {industry} </p>
                                        <p className='text-placeholder'> {location} ({remoteType}) </p>
                                        <p className='mt-6 text-placeholder'>Part-Time (9.00 am - 5.00 pm IST) </p>
                                        <p className='mt-2'> Experience ({minExperience} - {maxExperience} years) </p>
                                        <p className='mt-2'> INR (₹) {currencyFormat(minSalary)} - {currencyFormat(maxSalary)} / Month</p>
                                        <p className='mt-2'> {totalEmployee} employees</p>
                                        <button className={applyType === 'externalApply' ? `${externalButtonClass} mt-6` : `${buttonClass} mt-6`} > {applyType === 'externalApply' ? 'External Apply' : 'Apply Now'}</button>
                                    </div>

                                </div>
                            </Grid>
                        );

                    })
                }
            </Grid>
            <CustomDialogBox
                open={openDelete}
                handleClose={handleClose}
                confirmAction={handleDeleteJob}
            />
        </div>
    );
}

export default Jobs;