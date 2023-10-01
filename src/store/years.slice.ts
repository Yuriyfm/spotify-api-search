import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export type YearsState = {
  selectedYearOrPeriod: string | null;
};

const initialState: YearsState = {
  selectedYearOrPeriod: null,
};

const yearsSlice = createSlice({
  name: 'years',
  initialState,
  reducers: {
    setSelectedYearOrPeriod: (state, action: PayloadAction<string | null>) => {
      state.selectedYearOrPeriod = action.payload;
    }
  },
});

export const { setSelectedYearOrPeriod } = yearsSlice.actions;
export default yearsSlice.reducer;