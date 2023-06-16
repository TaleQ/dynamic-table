import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://restcountries.com/v3.1/';

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/all`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCountryByName = createAsyncThunk(
  'countries/getCountryByName',
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`/name/${name}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
