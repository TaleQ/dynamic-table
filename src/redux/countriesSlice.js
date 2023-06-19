import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllCountries, getCountryByName } from './operations';

const countriesInitialState = {
  items: [],
  error: null,
  isLoading: false,
  isDetailsShown: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: countriesInitialState,
  reducers: {
    toggleIsDetailsShown: {
      reducer(state, action) {
        state.isDetailsShown = action.payload;
      },
    },
    sortCountries: {
      reducer(state, action) {
        state.items = action.payload;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCountryByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCountryByName.rejected, (state, action) => {
        state.items = [];
      })
      .addMatcher(
        isAnyOf(getAllCountries.pending, getCountryByName.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getAllCountries.rejected, getCountryByName.rejected),
        handleRejected
      );
  },
});

export const { toggleIsDetailsShown, sortCountries } = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
