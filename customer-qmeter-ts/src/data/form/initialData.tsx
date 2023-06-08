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
  {
    label: 'Phone Number',
    value: '',
    placeholder: '(_ _)__ __ __ - __ __- __ __',
    selectable: true,
  },
];
