import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://restcountries.com/v3.1/';

const filterFields = [
  'name',
  'cca2',
  'currencies',
  'capital',
  'region',
  'subregion',
  'languages',
  'area',
  'maps',
  'population',
  'car',
  'timezones',
  'flags',
];

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/all?fields=${filterFields.join(',')}`);
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
      const { data } = await axios.get(
        `/name/${name}?fields=${filterFields.join(',')}`
      );
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
