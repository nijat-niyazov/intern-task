import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface smsInfo {
  customerCount: number;
  totalSmsCount: number;
  totalPrice: number;
}

const initialState: smsInfo = {
  customerCount: 0,
  totalSmsCount: 0,
  totalPrice: 0,
};

export const smsInfoSlice = createSlice({
  name: 'smsInfo',
  initialState,
  reducers: {
    handleSmsInfo: (state, { payload }) => {
      
      state.customerCount = payload?.receivers?.length || 0;
      const smsCount = Math.ceil(payload?.content?.length / 200) || 1;

      state.totalSmsCount = smsCount * state.customerCount;
      state.totalPrice = state.totalSmsCount * 0.032;
    },
  },
});

export const { handleSmsInfo } = smsInfoSlice.actions;

export const getSmsInfo = (state: RootState) => ({
  customerCount: state.smsInfo.customerCount,
  totalSmsCount: state.smsInfo.totalSmsCount,
  totalPrice: state.smsInfo.totalPrice,
});

export default smsInfoSlice.reducer;
