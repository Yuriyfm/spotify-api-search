import { createAsyncThunk, createSlice, PayloadAction, SerializedError  } from '@reduxjs/toolkit';
import { APIrequests } from "@/pages/api/endpoints";
import {countries} from "@/staticData/countries";

export type country = {
  Code: string;
  Name: string;
  rus_name: string;
}

export type CountriesState = {
  allCountries: country[];
  selectedCountry: string | null;
};

const initialState: CountriesState = {
  allCountries: countries,
  selectedCountry: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSelectedCountry: (state, action: PayloadAction<country | null>) => {
      state.selectedCountry = action.payload;
    }
  },
});

export const { setSelectedCountry } = countriesSlice.actions;
export default countriesSlice.reducer;