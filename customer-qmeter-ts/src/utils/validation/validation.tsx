import { errorMessages } from './errorMessages';
import { patterns } from './patterns';

interface ErrorsOnValidation {
  [key: string]: string;
}

export let errorsOnValidation: ErrorsOnValidation = {};

function getErrorMessage(field, value) {
  if (field === 'phoneNumber') {
    switch (true) {
      case /^0/.test(value):
        return 'Phone number can start with 0';
        break;

      default:
        return "Phone number can't have less than 5 characters";
    }
  }

  if (field === 'name') {
    switch (true) {
      case /^[A-Z]/.test(value):
        return 'Phone number can start with 0';
        break;

      default:
        return "Phone number can't have less than 5 characters";
    }
  }
}

console.log(getErrorMessage('phoneNumber', '1234567'));

export const validateInput = (
  field: keyof Patterns,
  value: string | number
) => {
  if (!patterns[field]?.test(value)) {
    return (errorsOnValidation[field] = errorMessages[field]);
  }

  delete errorsOnValidation[field];

  return errorsOnValidation;
};
