import { InitialFormData } from '../../interfaces/form';

export const initialData: InitialFormData[] = [
  {
    name: 'Name',
    value: '',
    placeholder: 'Your Name',
  },
  {
    name: 'Email',
    value: '',
    placeholder: 'example@gmail.com',
    type: 'email',
  },
  // {
  //   name: 'Phone Number',
  //   value: '',
  //   placeholder: '123456789',
  //   // type: 'email',
  // },
];
