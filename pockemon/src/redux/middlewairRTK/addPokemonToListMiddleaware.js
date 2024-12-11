import { createListenerMiddleware } from "@reduxjs/toolkit"
import { catchOrReleasePokemons } from "../../reduxToolkit/reducers/reducerCaughtPokemonsRTK"

export const addPokemonToList = createListenerMiddleware()

addPokemonToList.startListening({
    actionCreator: catchOrReleasePokemons,
    effect: async (action, listerenApi) => {
        const prevList = listerenApi.getOriginalState().caughtPokemons
        const nextList = listerenApi.getState().caughtPokemons
        console.log(prevList, nextList)
        if(prevList !== nextList){
            localStorage.setItem('caughtPokemons', JSON.stringify(nextList))
        }
    }

})

// const addPokemonToList = storeApi => next => action => {
//     const prevList = storeApi.getState().caughtPokemons
//     const result = next(action)
//     const nextList = storeApi.getState().caughtPokemons
//     console.log(prevList, nextList)
//     if(prevList !== nextList){
//         localStorage.setItem('caughtPokemons', JSON.stringify(nextList))
//     }
//     return result
// }