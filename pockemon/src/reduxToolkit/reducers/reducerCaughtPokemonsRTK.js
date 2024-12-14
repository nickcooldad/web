import { createSlice } from '@reduxjs/toolkit'

const caughtOrReleaserPokemonsSlice = createSlice({
    name : 'caughtOrReleaserPokemons',
    initialState: [],
    reducers : {
        catchOrReleasePokemons : (state, action) => {
            if(state.includes(action.payload)){
                return state.filter(el => el !== action.payload)
            } else {
                return [...state, action.payload]
            }
        }
    }
})

console.log(caughtOrReleaserPokemonsSlice)
export const {catchOrReleasePokemons} = caughtOrReleaserPokemonsSlice.actions;
export const reducerCaughtPokemons = caughtOrReleaserPokemonsSlice.reducer