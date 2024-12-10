
import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonsAsyncThunk } from './fetchPokemonsAsyncThunk';

export const getVisibleListPokemonsSlice = createSlice({
    name : 'getVisibleListPokenos',
    initialState : [],
    reducers : {
        fetchSuccess : (state, action) => {
            return action.payload.list
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchPokemonsAsyncThunk.fulfilled, (state, action) => {
            console.log(state)
            return action.payload.results
           
        })
    }
})

export const { fetchSuccess } = getVisibleListPokemonsSlice.actions;
export const reducerGetVisibleListPokemon = getVisibleListPokemonsSlice.reducer



