import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'country',
  initialState: {
    country: null,
  },
  reducers: {
    update: (state, action) => {
      
      state.country = action.payload;
    },
  },
});

export const { update } = countrySlice.actions;

export const selectCountry = state => state.country.country;

export default countrySlice.reducer;
