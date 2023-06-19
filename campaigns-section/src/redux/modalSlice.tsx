import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ModalState {
  isModalOpened: boolean;
  modalOf: '';
}

const initialState: ModalState = {
  isModalOpened: false,
  modalOf: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleModal: (state, { payload }) => {
      state.isModalOpened = payload;
    },
    typeOfModal: (state, { payload }) => {
      state.modalOf = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleModal, typeOfModal } = modalSlice.actions;
export const isModalOpened = (state: RootState) => state.modal?.isModalOpened;
export const modalOf = (state: RootState) => state.modal?.modalOf;

export default modalSlice.reducer;
