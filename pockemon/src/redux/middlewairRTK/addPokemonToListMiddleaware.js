import { createListenerMiddleware } from "@reduxjs/toolkit"
import { catchOrReleasePokemons } from "../../reduxToolkit/reducers/reducerCaughtPokemonsRTK"

export const addPokemonToList = createListenerMiddleware()

addPokemonToList.startListening({
    predicate: (_, currentState, previousState) => currentState.caughtPokemons !== previousState.caughtPokemons,
    effect: async (_, listerenApi) => {
        const { caughtPokemons } = listerenApi.getState()
        localStorage.setItem('caughtPokemons', JSON.stringify(caughtPokemons))
    },
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