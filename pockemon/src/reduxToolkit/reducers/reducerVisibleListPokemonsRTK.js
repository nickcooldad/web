
import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonsAsyncThunk } from './fetchPokemonsAsyncThunk';

export const getVisibleListPokemonsSlice = createSlice({
    name : 'getVisibleListPokenos',
    initialState : [],
    extraReducers : (builder) => {
        builder
        .addCase(fetchPokemonsAsyncThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            return action.payload.results
           
        })
    }
})

export const { fetchSuccess } = getVisibleListPokemonsSlice.actions;
export const reducerGetVisibleListPokemon = getVisibleListPokemonsSlice.reducer



