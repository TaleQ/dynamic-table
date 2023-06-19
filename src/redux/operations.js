import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

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
      let message;
      if (data.length > 1) {
        message = `Found ${data.length} countries for query '${name}'`;
      }
      if (data.length === 1) {
        message = 'Found 1 result';
      }
      Notify.success(message, {
        position: 'center-top',
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
