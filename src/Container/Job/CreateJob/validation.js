import { isEmpty } from "lodash";
import { isEmptyValidation } from "../../../utils";

function jobValidation(data) {
    let errors = {};

    const validation = [
        { fieldValue: data.jobTitle, fieldName: 'jobTitle', errorMessage: 'Job Title' },
        { fieldValue: data.companyName, fieldName: 'companyName', errorMessage: 'Company Name' },
        { fieldValue: data.industry, fieldName: 'industry', errorMessage: 'Industry' },
    ]

    validation.forEach(element => {
        isEmptyValidation(element.fieldValue, element.fieldName, element.errorMessage, errors)
    });

    return {
        isValid: isEmpty(errors),
        errors: errors
    };
}

export default jobValidation;

