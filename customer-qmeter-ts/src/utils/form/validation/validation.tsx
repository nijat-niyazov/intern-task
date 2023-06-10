import { errorMessages } from './errorMessages';
import { patterns } from './patterns';

interface Validation {
  [key: string]: string;
}

export let validation: Validation = {};

export const validateInput = (field: string, value: string | number) => {
  if (!patterns[field]?.test(value)) {
    return (validation[field] = errorMessages[field]);
  }

  delete validation[field];

  return validation;
};
