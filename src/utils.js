export const ValidationRegex = {
  empty: /^\s*$/,
  email: /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/,
  amount: /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/,
  number: /^[0-9]{0,15}$/,
  null: /^null$/,
  emailVerify: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const buttonClass = 'px-4 py-2 text-base font-medium text-white rounded-md bg-primary-blue'

export function isEmptyValidation(fieldValue, fieldName, errorMessage, errors) {
  if (!ValidationRegex.null.test(fieldValue) && ValidationRegex.empty.test(fieldValue)) {
    errors[fieldName] = `${errorMessage} is required.`;
  }
}