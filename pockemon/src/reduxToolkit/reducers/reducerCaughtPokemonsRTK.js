import { createSlice } from '@reduxjs/toolkit'

const caughtOrReleaserPokemonsSlice = createSlice({
    name : 'caughtOrReleaserPokemons',
    initialState: [],
    reducers : {
        catchOrReleasePokemons : (state, action) => {
            console.log("-=-=-", action.pokemon)
            if(state.includes(action.payload)){
                return state.filter(el => el !== action.payload)
            } else {
                return [...state, action.payload]
            }
        }
    }
})

export const {catchOrReleasePokemons} = caughtOrReleaserPokemonsSlice.actions;
export const reducerCaughtPokemons = caughtOrReleaserPokemonsSlice.reducer