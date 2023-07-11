import { configureStore } from '@reduxjs/toolkit';
import licenseModal from './licenseModalSlice';
import modalSlice from './modalSlice';
import smsInfoSlice from './smsInfoSlice';
import stepsModal from './stepsSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    smsInfo: smsInfoSlice,
    license: licenseModal,
    steps: stepsModal,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
