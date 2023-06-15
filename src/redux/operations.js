import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyBTMeqAiGKxV7IygUFmrwCbrmFTuQfZJCg';

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/';

export const getBooksByQuery = createAsyncThunk(
  'books/getBooksByQuery',
  async (searchQuery, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const startIndex = state.books.startIndex;
      const params = {
        api_key: API_KEY,
        q: searchQuery || 'book',
        // startIndex: startIndex || 0,
        maxResults: 20,
        orderBy: 'relevance',
        printType: 'books',
      };
      const searchParams = new URLSearchParams(params);
      const { data } = await axios.get(`/volumes?${searchParams.toString()}`);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getBookById = createAsyncThunk(
  'books/getBookById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/volumes/${id}?${API_KEY}`);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
