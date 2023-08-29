import React, { useState } from "react";
import StepOne from "./step1";
import StepTwo from "./step2";

const initialJobDetails = {
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    minExperience: "",
    maxExperience: "",
    maxSalary: "",
    minSalary: "",
    totalEmployee: "",
    applyType: "",
}

function CreateJobs() {
    const [jobDetails, setJobDetails] = useState({ ...initialJobDetails })
    const [step, setStep] = useState(2)

    return (
        <div className="p-8">
            <div className="flex justify-between ">
                <p className="text-xl text-dark" > Create a job  </p>
                <p className="font-medium text-dark"> Step {step}  </p>
            </div>
            {
                step === 1 ?
                    <StepOne jobDetails={jobDetails} setJobDetails={setJobDetails} step={step} setStep={setStep} />
                    :
                    <StepTwo jobDetails={jobDetails} setJobDetails={setJobDetails} step={step} setStep={setStep} />
            }
        </div>
    )
}

export default CreateJobs;