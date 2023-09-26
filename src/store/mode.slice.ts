import { createSlice } from '@reduxjs/toolkit';

type ModeState = {
  mode: 'Главная' | 'Поиск';
};

const initialState: ModeState = {
  mode: 'Главная'
};

const modesSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMainMode: (state) => {
      state.mode = 'Главная';
    },
    setSearchMode: (state) => {
      state.mode = 'Поиск';
    },
  }
});

export const { setMainMode, setSearchMode } = modesSlice.actions;

export default modesSlice.reducer;