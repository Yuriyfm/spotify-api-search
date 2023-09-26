import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {APIrequests} from "@/pages/api/endpoints";
import tokenService from "@/pages/api/token.service";

type authTokenState = {
  authToken: null | string;
};

const initialState: authTokenState = {
  authToken: null
}

export const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    addAuthToken: (state, action) => {
      // state.authToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAuthToken.pending, (state) => {
        // Например, установите статус загрузки
      })
      .addCase(getAuthToken.fulfilled, (state, action) => {
        tokenService.saveAccessToken(action.payload.access_token)
      })
      .addCase(getAuthToken.rejected, (state, action) => {
        // Обработайте ошибку
      });
  },
});

export const getAuthToken = createAsyncThunk(
  'authToken/getAuthToken',
  async () => {
    const response = await APIrequests.getAuthToken();
    return response.data;
  }
);

export const { addAuthToken } = authTokenSlice.actions;

export default authTokenSlice.reducer;