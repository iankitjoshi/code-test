import { isEmpty } from "lodash";
import { ValidationRegex, emailValidation, isEmptyValidation } from "src/Utils/constant";

function agentValidation(data) {
    let errors = {};

    const validation = [
        { fieldValue: data.first_name, fieldName: 'first_name', errorMessage: 'First Name' },
        { fieldValue: data.address1, fieldName: 'address1', errorMessage: 'Address' },
        { fieldValue: data.city, fieldName: 'city', errorMessage: 'City' },
        { fieldValue: data.zipcode, fieldName: 'zipcode', errorMessage: 'Zipcode' },
        { fieldValue: data.master_agent_firstname, fieldName: 'master_agent_firstname', errorMessage: 'Master Agent Firstname' },
        { fieldValue: data.master_agent_lastname, fieldName: 'master_agent_lastname', errorMessage: 'Master Agent Lastname' },
    ]

    validation.forEach(element => {
        isEmptyValidation(element.fieldValue, element.fieldName, element.errorMessage, errors)
    });

    emailValidation(data.master_agent_email, 'master_agent_email', errors)

    return {
        isValid: isEmpty(errors),
        errors: errors
    };
}

export default agentValidation;

