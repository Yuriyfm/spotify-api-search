import { createAsyncThunk, createSlice, PayloadAction, SerializedError  } from '@reduxjs/toolkit';
import { APIrequests } from "@/pages/api/endpoints";



export type GenresState = {
  allGenres: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: SerializedError | null;
  selectedGenre: string | null;
};

const initialState: GenresState = {
  allGenres: [],
  status: 'idle',
  error: null,
  selectedGenre: null,
};

interface getGenresPayload {
  genres: string[]
}
export const getGenres = createAsyncThunk<getGenresPayload, void, { rejectValue: SerializedError }>(
  'genres/getGenres',
  async () => {
    const response = await APIrequests.getGenres();
    return response.data;
  }
);

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setSelectedGenre: (state, action: PayloadAction<string | null>) => {
      state.selectedGenre = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGenres.fulfilled, (state, action: PayloadAction<getGenresPayload>) => {
        state.status = 'succeeded';
        state.allGenres = action.payload.genres;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload : null;
      });
  },
});

export const { setSelectedGenre } = genresSlice.actions;
export default genresSlice.reducer;