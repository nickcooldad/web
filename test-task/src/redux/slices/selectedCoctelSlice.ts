import { createSlice } from "@reduxjs/toolkit";

const initialState = 'margarita'

export const selectedCoctailSlice = createSlice({
    name: 'coctail',
    initialState,
    reducers: {
        choose: (state, action) => {
            return action.payload
        }
    }
})

export const {choose } = selectedCoctailSlice.actions
export const selectedCoctailReducer = selectedCoctailSlice.reducer