import { Status } from 'types/status';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Extra } from 'types';

export const loadCountries = createAsyncThunk<
	 {data: Country[]}, undefined, {extra: Extra, rejectValue: string}
>(
  'countries/load-countrie',
  async (_, { extra: { client, api }, rejectWithValue }) => {
		try {
			return client.get(api.allContries);
		} catch (error) {
			if(error instanceof Error)
				 return rejectWithValue(error.message)
		}
		return rejectWithValue('Unknown error')
  }
);

type CountrySlice = {
	status: Status,
	error: string | null,
	list: Country[]
}


const initialState: CountrySlice = {
  status: 'idle',
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Cannot load data';
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;