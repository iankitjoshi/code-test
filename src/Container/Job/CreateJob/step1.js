import React from "react";
import InputField from "../../../Common/InputField";
import { buttonClass } from "../../../utils";
import jobValidation from "./validation";

function StepOne({ jobDetails, setJobDetails, setStep, errors, setErrors }) {
    const { jobTitle, companyName, industry, location, remoteType } = jobDetails


    const isValid = () => {
        const { isValid, errors } = jobValidation({ ...jobDetails });
        setErrors(errors);
        return isValid;
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setJobDetails({ ...jobDetails, [name]: value })
        setErrors({ ...errors, [name]: '' })
    }

    const handleNext = (event) => {
        if (isValid()) {
            setStep(2)
        }
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
                error={errors.jobTitle}
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
                error={errors.companyName}
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
                error={errors.industry}
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