/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as api from '../../../api';

type AppSliceState = {
  currentTokenA?: api.TokenObject;
  tokens?: api.TokensListResponse;
  currentTokenB?: api.TokenObject;
};

const initialState: AppSliceState = {};
export const getTokensList = createAsyncThunk('tokens/get', async () => {
  const response = await fetch(api.tokensListURL);
  const data: api.TokensListResponse = await response.json();
  return data;
});
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentTokenA: (state, action: PayloadAction<api.TokenObject>) => {
      state.currentTokenA = action.payload;
    },
    setCurrentTokenB: (state, action: PayloadAction<api.TokenObject>) => {
      state.currentTokenB = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTokensList.fulfilled, (state, action) => {
      state.tokens = action.payload
    });
  },
});

export const {setCurrentTokenA, setCurrentTokenB} = appSlice.actions;
export const AppReducer = appSlice.reducer;
