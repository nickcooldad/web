import { createSlice } from '@reduxjs/toolkit';
import { fetchDrinksAsyncThunk } from './fetchDrinksAsyncThunk';

export const getDataDrink = createSlice({
    name: "getDataDrink",
    initialState : {},
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchDrinksAsyncThunk.fulfilled, (state, action) => {
            return action.payload.result
        })
    }
})

export const fetchCoctails = getDataDrink.actions;
export const getDataDrinkSlice = getDataDrink.reducer