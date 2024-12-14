
import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonsAsyncThunk } from './fetchPokemonsAsyncThunk'

const paginationPokemonsSlice = createSlice({
    name : 'paginationPokenons',
    initialState : {
        loading : false,
        pageData : {number: 0, size : 8},
        count : 0
    },
    reducers : {
        pageSelect : (state, action) => {
            state.pageData = {
                number : Math.floor(state.pageData.number*state.pageData.size/action.payload),
                size : action.payload
            }
        },
        nextPage : (state) => {
           state.pageData.number += 1
        
        },
        backPage : (state) => {
            state.pageData.number -= 1
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchPokemonsAsyncThunk.fulfilled, (state, action) => {
            state.count = action.payload.count
            state.loading = false
        })
    }
})
console.log(paginationPokemonsSlice)
export const {fetchRequest, fetchSuccess, pageSelect, nextPage, backPage} = paginationPokemonsSlice.actions;
export const reducerPagination = paginationPokemonsSlice.reducer;
