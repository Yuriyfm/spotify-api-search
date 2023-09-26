import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type categoryType = 'Artists' | 'Genres' | "Countries" | null

export type categoriesState = {
  category: categoryType
}

const initialState : categoriesState = {
  category: null
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<categoryType>) => {
      state.category = action.payload;
    },
  }
});

export const { setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;