import { createAsyncThunk, createSlice, PayloadAction, SerializedError  } from '@reduxjs/toolkit';
import { APIrequests } from "@/pages/api/endpoints";
import {RootState} from "@/store/store";



export type playlistsState = {
  byGenres: []
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: SerializedError | null;
};

const initialState: playlistsState = {
  byGenres: [],
  status: 'idle',
  error: null,
};

export const getPlaylistsByGenre = createAsyncThunk<any, void, { rejectValue: SerializedError }>(
  'playlists/getPlaylistsByGenre',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const response = await APIrequests.getPlaylistsByGenre(state.genres.selectedGenre);
    return response.data;
  }
);

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylistsByGenre.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPlaylistsByGenre.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.byGenres = action.payload.playlists.items;
      })
      .addCase(getPlaylistsByGenre.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload : null;
      });
  },
});

export default playlistsSlice.reducer;