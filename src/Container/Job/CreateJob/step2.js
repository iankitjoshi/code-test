import React from "react";
import InputField from "../../../Common/InputField";
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { ValidationRegex, buttonClass } from "../../../utils";
import color from '../../../Theme/color'
import { useDispatch } from "react-redux";

const numberData = ['minExperience', 'maxExperience', 'maxSalary', 'minSalary', 'totalEmployee']

function StepTwo({ jobDetails, setJobDetails, setStep }) {
    const dispatch = useDispatch()

    const { minExperience, maxExperience, maxSalary, minSalary, totalEmployee, applyType } = jobDetails

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

    }

    return (
        <>
            <div className="flex justify-between pt-base">
                <InputField
                    title="Experience"
                    value={minExperience}
                    name="minExperience"
                    onChange={handleChange}
                    placeholder="Minimum"
                />
                <InputField
                    title="a"
                    value={maxExperience}
                    name="maxExperience"
                    onChange={handleChange}
                    placeholder="Maximum"
                />
            </div>

            <div className="flex justify-between pt-base">
                <InputField
                    title="Salary"
                    value={minSalary}
                    name="minSalary"
                    onChange={handleChange}
                    placeholder="Minimum"
                />
                <InputField
                    title={'a'}
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
                <p className="text-sm font-medium">  Apply type </p>
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

