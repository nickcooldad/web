
import { getDataLocalStorage } from "../getDataLocalStorage"

export const caughtOrReleaserPokemons = (state = [], action) => {
    switch (action.type){
        case 'catchOrRelease' : {
            if(state.includes(action.pokemon)){
                return state.filter(el => el !== action.pokemon)
            } else {
                return [...state, action.pokemon]
            }
        }
        default :
        return state
    }
}