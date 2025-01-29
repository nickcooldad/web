import { createSlice } from '@reduxjs/toolkit';
import { fetchDrinksAsyncThunk } from './fetchDrinksAsyncThunk';
import { error } from 'console';

export const getDataDrink = createSlice({
    name: "getDataDrink",
    initialState : {
        data : [],
        status: '',
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchDrinksAsyncThunk.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchDrinksAsyncThunk.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
          })
          .addCase(fetchDrinksAsyncThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
      },
})
 
export const fetchCoctails = getDataDrink.actions;
export const getDataDrinkSlice = getDataDrink.reducer