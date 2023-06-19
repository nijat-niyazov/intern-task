import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface FormState {
  formObject: {};
}

const initialState: FormState = {
  formObject: {
    name: '',
    text: '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInputValue(state, action) {
      const { inputName, value } = action.payload;
      state.formObject[inputName] = value;
    },
    resetForm(state) {
      state.formObject = {
        name: '',
        text: '',
      };
    },
    // typeOfForm: (state, { payload }) => {
    //   state.formOf = payload;
    // },
  },
});

export const { setInputValue } = formSlice.actions;
export const name = (state: RootState) => state.form.formObject
export const text = (state: RootState) => state.form.formObject

export default formSlice.reducer;
