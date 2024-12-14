import { pageSelect } from "../../reduxToolkit/reducers/reducerPaginationPokemonsRTK"
import { nextPage } from "../../reduxToolkit/reducers/reducerPaginationPokemonsRTK"
import { backPage } from "../../reduxToolkit/reducers/reducerPaginationPokemonsRTK"
import { fetchPokemonsAsyncThunk } from "../../reduxToolkit/reducers/fetchPokemonsAsyncThunk"
import { createListenerMiddleware } from "@reduxjs/toolkit"
import { isAnyOf } from "@reduxjs/toolkit"

export const paginationMiddleware = createListenerMiddleware()

paginationMiddleware.startListening({
    matcher: isAnyOf(pageSelect, nextPage, backPage),
    //actionCreator : pageSelect,
    effect : async (action, listerenApi) => {
        await listerenApi.dispatch(fetchPokemonsAsyncThunk())
    },
})

// paginationMiddleware.startListening({
//     actionCreator: nextPage,
//     effect: async (action, listerenApi) => {
//         await listerenApi.dispatch(fetchPokemonsAsyncThunk())
//     }
// })

// paginationMiddleware.startListening({
//     actionCreator: backPage,
//     effect: async (action, listerenApi) => {
//         await listerenApi.dispatch(fetchPokemonsAsyncThunk())
//     }
// })

// const paginationMiddleware = storeApi => next => action => {
//     next(action)
//     console.log(action.type)
//     if(action.type === 'paginationPokenons/nextPage' || action.type === 'paginationPokenons/backPage' || action.type === 'paginationPokenons/pageSelect'){
//         storeApi.dispatch(fetchPokemonsAsyncThunk())
//     }
// }