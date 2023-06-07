import { InitialFormData } from '../../interfaces/interfaces';

export const initialData: InitialFormData = {
  name: {
    value: '',
    placeHolder: 'Your Name',
    label: 'Name',
  },
  email: {
    value: '',
    placeHolder: 'example@gmail.com',
    label: 'Email',
    type: 'email',
  },
};
