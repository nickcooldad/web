import { createListenerMiddleware } from "@reduxjs/toolkit"

export const addPokemonToList = createListenerMiddleware()

addPokemonToList.startListening({
    predicate: (_, currentState, previousState) => currentState.caughtPokemons !== previousState.caughtPokemons,
    effect: async (_, listerenApi) => {
        const { caughtPokemons } = listerenApi.getState()
        localStorage.setItem('caughtPokemons', JSON.stringify(caughtPokemons))
    },
})