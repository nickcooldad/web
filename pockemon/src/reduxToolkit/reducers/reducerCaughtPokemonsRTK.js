import { createSlice } from '@reduxjs/toolkit'

const caughtOrReleaserPokemonsSlice = createSlice({
    name : 'caughtOrReleaserPokemons',
    initialState: [],
    reducers : {
        catchOrReleasePokemons : (state, action) => {
            if(state.includes(action.pokemon)){
                return state.filter(el => el !== action.pokemon)
            } else {
                return [...state, action.pokemon]
            }
        }
    }
})

export const {catchOrReleasePokemons} = caughtOrReleaserPokemonsSlice.actions;
export const reducerCaughtPokemons = caughtOrReleaserPokemonsSlice.reducer