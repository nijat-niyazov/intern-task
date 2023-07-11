import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface StepsState {
  parentId: number;
  currentId: number;
  value:number
  selected:number
}

const initialState: StepsState = {
  parentId: 0,
  currentId: 1,
  value:1,
  selected:1
  // currentStep: 1,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    handleValue: (state, { payload }) => {
      state.value = payload;
    },
    handleSelected: (state, { payload }) => {
      state.selected = payload;
    },
   
  },
});

export const { handleValue,handleSelected } = stepsSlice.actions;
export const value = (state: RootState) => state.steps?.value;
export const selectedValue = (state: RootState) => state.steps?.selected;

export default stepsSlice.reducer;
