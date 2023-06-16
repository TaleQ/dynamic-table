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
    changeIndex: {
      reducer(state, action) {
        state.startIndex = action.payload;
      },
    },
    toggleIsDetailsShown: {
      reducer(state, action) {
        state.isDetailsShown = action.payload;
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

export const { changeIndex, toggleIsDetailsShown } = countriesSlice.actions;
export const countriesReducer = countriesSlice.reducer;
