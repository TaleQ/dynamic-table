import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getBookById, getBooksByQuery } from './operations';

const booksInitialState = {
  items: [],
  book: {},
  totalNumber: null,
  startIndex: 0,
  error: null,
  isLoading: false,
  isExpanded: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const booksSlice = createSlice({
  name: 'books',
  initialState: booksInitialState,
  reducers: {
    changeIndex: {
      reducer(state, action) {
        state.startIndex = action.payload;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book = action.payload;
        state.isExpanded = true;
      })
      .addMatcher(
        isAnyOf(getBooksByQuery.pending, getBookById.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getBooksByQuery.rejected, getBookById.rejected),
        handleRejected
      );
  },
});

export const { changeIndex } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
