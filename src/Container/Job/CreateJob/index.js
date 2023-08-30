import React, { useEffect } from "react";
import StepOne from "./step1";
import StepTwo from "./step2";

function CreateJobs({ setOpen, jobDetails, setJobDetails, step, setStep, isEdit, setIsEdit, id, setErrors, errors }) {

    useEffect(() => {
        setJobDetails({ ...jobDetails })
    }, [isEdit])

    return (
        <div className="p-8">
            <div className="flex justify-between ">
                <p className="text-xl text-dark" > {isEdit ? 'Edit' : 'Create'} a job  </p>
                <p className="font-medium text-dark"> Step {step}  </p>
            </div>
            {
                step === 1 ?
                    <StepOne jobDetails={jobDetails} setJobDetails={setJobDetails} step={step} setStep={setStep}
                        setErrors={setErrors} errors={errors} />
                    :
                    <StepTwo jobDetails={jobDetails} setJobDetails={setJobDetails} step={step}
                        setStep={setStep} setOpen={setOpen} isEdit={isEdit} setIsEdit={setIsEdit} id={id} />
            }
        </div>
    )
}

export default CreateJobs;