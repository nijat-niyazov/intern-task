import { patterns } from './patterns';

interface Validation {
  [key: string]: string;
}

export let validation: Validation = {};

export const validateInput = (field: string, value: string | number) => {
  !patterns[field]?.test(value.trim())
    ? (validation[field] = true)
    : delete validation[field];

  return validation;
};
