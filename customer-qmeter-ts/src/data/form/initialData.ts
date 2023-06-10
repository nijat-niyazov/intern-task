import { InitialFormData } from '../../interfaces/form';

export const initialData: InitialFormData[] = [
  {
    label: 'Name',
    value: '',
    placeholder: 'Your Name',
  },
  {
    label: 'Email',
    value: '',
    placeholder: 'example@gmail.com',
    type: 'email',
  },
];
