import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface LicenseModalState {
  isModalOpened: boolean;
  modalType: '';
}

const initialState: LicenseModalState = {
  isModalOpened: false,
  modalType: '',
};

export const licenseModal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleShowModal: (state, { payload }) => {
      state.isModalOpened = payload;
    },
    handleModalType: (state, { payload }) => {
      state.modalType = payload;
    },
  },
});

export const { handleShowModal, handleModalType } = licenseModal.actions;

export const isModalOpened = (state: RootState) => state.license?.isModalOpened;

export const modalType = (state: RootState) => state.license?.modalType;

export default licenseModal.reducer;
