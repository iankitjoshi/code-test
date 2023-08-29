import React from "react";
import InputField from "../../../Common/InputField";
import { Button } from "@mui/material";
import { buttonClass } from "../../../utils";

function StepOne({ jobDetails, setJobDetails, setStep }) {
    const { jobTitle, companyName, industry, location, remoteType, } = jobDetails

    const handleChange = (event) => {
        const { name, value } = event.target
        setJobDetails({ ...jobDetails, [name]: value })
    }

    const handleNext = (event) => {
        setStep(2)
    }

    return (
        <>
            <InputField
                title="Job title"
                value={jobTitle}
                name="jobTitle"
                onChange={handleChange}
                placeholder="ex. UX UI Designer"
                extraCss="pt-base"
                required
                fullWidth

            />
            <InputField
                title="Company name"
                value={companyName}
                name="companyName"
                onChange={handleChange}
                placeholder="ex. Google"
                extraCss="pt-base"
                required
                fullWidth

            />
            <InputField
                title="Industry"
                value={industry}
                name="industry"
                onChange={handleChange}
                placeholder="ex. Information Technology"
                extraCss="pt-base"
                required
                fullWidth
            />
            <div className="flex justify-between pt-base" >
                <InputField
                    title="Location"
                    value={location}
                    name="location"
                    onChange={handleChange}
                    placeholder="ex. Chennai"
                    fullWidth
                />
                <InputField
                    className="w-[100%]"
                    title="Remote type"
                    value={remoteType}
                    name="remoteType"
                    onChange={handleChange}
                    placeholder="ex. In-office"
                />
            </div>
            <div className="pt-24 text-end" >
                <button variant="contained" onClick={handleNext} className={buttonClass} > Next</button>
            </div>
        </>
    )
}

export default StepOne;