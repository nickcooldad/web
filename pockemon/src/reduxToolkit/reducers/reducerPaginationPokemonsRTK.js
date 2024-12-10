
import { createSlice } from '@reduxjs/toolkit'

const paginationPokemonsSlice = createSlice({
    name : 'paginationPokenons',
    initialState : {
        loading : false,
        pageData : {number: 0, size : 8},
        count : 0
    },
    reducers : {
        fetchRequest : (state) => {
            state.loading = true
        },
        fetchSuccess : (state, action) => {
            state.loading = false
            state.count = action.count
        },
        pageSelect : (state, action) => {
            state.pageData = {
                number : Math.floor(state.pageData.number*state.pageData.size/action.sizeSelect),
                size : action.sizeSelect
            }
        },
        nextPage : (state) => {
            state.pageData.number = state.pageData.number + 1
        
        },
        backPage : (state) => {
            state.pageData.number = state.pageData.number - 1
        }

    }
})

export const {fetchRequest, fetchSuccess, pageSelect, nextPage, backPage} = paginationPokemonsSlice.actions;
export const reducerPagination = paginationPokemonsSlice.reducer;
