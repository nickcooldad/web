
import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonsAsyncThunk } from './fetchPokemonsAsyncThunk';

export const getVisibleListPokemonsSlice = createSlice({
    name : 'getVisibleListPokenos',
    initialState : [],
    reducers : {
        fetchSuccess : (state, action) => {
            return action.list
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchPokemonsAsyncThunk.fulfilled, (state, action) => {
            state = action.payload.results
            console.log(action)
        })
    }
})

export const { fetchSuccess } = getVisibleListPokemonsSlice.actions;
export const reducerGetVisibleListPokemon = getVisibleListPokemonsSlice.reducer



