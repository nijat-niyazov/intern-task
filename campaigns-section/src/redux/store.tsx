import { configureStore } from '@reduxjs/toolkit';
import licenseModal from './licenseModalSlice';
import modalSlice from './modalSlice';
import smsInfoSlice from './smsInfoSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    smsInfo: smsInfoSlice,
    license: licenseModal,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
