import React from "react";
import InputField from "../../../Common/InputField";
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { ValidationRegex, buttonClass, initialJobDetails, snackbarMessegeType } from "../../../utils";
import color from '../../../Theme/color'
import { useDispatch, useSelector } from "react-redux";
import { createJob, editJob, getAllJobs } from "../slice";
import useCustomSnackbar from '../../../Common/Snackbar/useCustomSnackbar'
import CustomLoader from "../../../Common/CustomLoader/CustomLoader";

const numberData = ['minExperience', 'maxExperience', 'maxSalary', 'minSalary', 'totalEmployee']

function StepTwo({ jobDetails, setJobDetails, setStep, setOpen, isEdit, setIsEdit, id }) {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useCustomSnackbar()

    const { minExperience, maxExperience, maxSalary, minSalary, totalEmployee, applyType } = jobDetails
    const { isLoading } = useSelector(state => state?.jobsData || {}) || {}

    const handleChange = (event) => {
        const { name, value } = event.target
        if (numberData.includes(name) && value && !ValidationRegex.amount.test(value)) return
        if (numberData.includes(name) && value.length > 12) return
        setJobDetails({ ...jobDetails, [name]: value })
    }

    const handleBack = () => {
        setStep(1)
    }

    const handleSave = () => {
        if (isEdit) {
            const jobData = { ...jobDetails, id }
            dispatch(editJob({ ...jobData })).then(res => {
                setOpen(false)
                enqueueSnackbar(`Job Edited Successfully.`, { variant: snackbarMessegeType.success })
                dispatch(getAllJobs())
                setJobDetails({ ...initialJobDetails })
            })
            setIsEdit(false)
            return
        }


        dispatch(createJob({ ...jobDetails })).then(res => {
            setOpen(false)
            enqueueSnackbar(`Job Created Successfully.`, { variant: snackbarMessegeType.success })
            dispatch(getAllJobs())
            setJobDetails({ ...initialJobDetails })
        })
    }

    return (
        <>
            {isLoading && <CustomLoader />}
            <p className="text-sm font-medium pt-base" > Experience</p>
            <div className="flex justify-between">

                <InputField
                    value={minExperience}
                    name="minExperience"
                    onChange={handleChange}
                    placeholder="Minimum"
                    className
                />
                <InputField
                    value={maxExperience}
                    name="maxExperience"
                    onChange={handleChange}
                    placeholder="Maximum"
                />
            </div>

            <p className="text-sm font-medium pt-base" > Salary</p>

            <div className="flex justify-between">
                <InputField
                    value={minSalary}
                    name="minSalary"
                    onChange={handleChange}
                    placeholder="Minimum"
                />
                <InputField
                    value={maxSalary}
                    name="maxSalary"
                    onChange={handleChange}
                    placeholder="Maximum"
                />
            </div>

            <InputField
                title="Total employee"
                value={totalEmployee}
                name="totalEmployee"
                onChange={handleChange}
                extraCss="pt-base"
                placeholder="ex. 100"
                fullWidth
            />

            <FormControl className="!pt-base" >
                <p className="text-sm font-medium pb-1"> Apply type </p>
                <RadioGroup
                    aria-labelledby="controlled-radio-buttons"
                    name="applyType"
                    value={applyType}
                    onChange={handleChange}
                    className="flex !flex-row"
                >
                    <FormControlLabel sx={{ color: color.placeholder }} value="quickApply" control={<Radio sx={{ color: color.placeholder }} />} label="Quick apply" />
                    <FormControlLabel sx={{ color: color.placeholder }} value="externalApply" control={<Radio sx={{ color: color.placeholder }} />} label="External apply" />
                </RadioGroup>
            </FormControl>
            <div className="flex justify-between pt-24" >
                <button variant="contained" onClick={handleBack} className={buttonClass} > Back</button>
                <button variant="contained" onClick={handleSave} className={buttonClass} > Save</button>
            </div>
        </>
    )
}

export default StepTwo;

