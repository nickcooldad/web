import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCoctel : 'margarita',
    drinks : {}
}

export const selectedCoctelSlice = createSlice({
    name: 'coctel',
    initialState,
    reducers: {
        choose: (state, action) => {
            state.selectedCoctel = action.payload
        }
    }
})

export const {choose } = selectedCoctelSlice.actions
export const selectedCoctailReducer = selectedCoctelSlice.reducer