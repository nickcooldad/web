import {createStore, applyMiddleware, combineReducers} from "redux"
// import {thunk} from 'redux-thunk'
import {paginationPokemons} from './reducers/reducerPaginationPokemons.js';
import {caughtOrReleaserPokemons} from './reducers/reducerCaughtPokemons.js';
import {getVisibleListPokemons} from './reducers/reducerVisibleListPokemons.js';
import {actionFetchPokemons} from './actions/actionFetchPokemons.js'
import { getDataLocalStorage } from "./getDataLocalStorage.js";
import { combineReducersNew } from "./combineReducers.js";
import {configureStore} from '@reduxjs/toolkit'
import { reducerGetVisibleListPokemon } from "../reduxToolkit/reducers/reducerVisibleListPokemonsRTK.js";
import { backPage, nextPage, pageSelect, reducerPagination } from "../reduxToolkit/reducers/reducerPaginationPokemonsRTK.js";
import { reducerCaughtPokemons } from "../reduxToolkit/reducers/reducerCaughtPokemonsRTK.js";
import { fetchPokemonsAsyncThunk } from "../reduxToolkit/reducers/fetchPokemonsAsyncThunk.js";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { catchOrReleasePokemons } from "../reduxToolkit/reducers/reducerCaughtPokemonsRTK.js";
import { addPokemonToList } from "./middlewairRTK/addPokemonToListMiddleaware.js";
import { paginationMiddleware } from "./middlewairRTK/paginationPokemonMiddleware.js";
// const initialState = {
//     caughtPokemons : [],

//     list : [],

//     pagination: {
//         loading : false,
//         pageData : {number: 0, size : 8},
//         count : paginationPokemons
//     },
// }

// const rootReducer = combineReducersNew({
//     caughtPokemons : caughtOrReleaserPokemons,
//     list : getVisibleListPokemons,
//     pagination : paginationPokemons
// })

const thunk = storeApi => next => action => {
    if (typeof action === "function") {
        action(storeApi.dispatch, storeApi.getState);
    } else {
        next(action);
    }
}

const m1 = storeApi => next => action => {
    console.log("m1", {storeApi, action, next});
    next(action);
}


const m2 = storeApi => next => action => {
    console.log("m2");
    next(action);
}


const preloadedState = {
    caughtPokemons : getDataLocalStorage()
}

console.log(preloadedState)

// const store = createStore(rootReducer, applyMiddleware(paginationMiddleware, addPokemonToList, m1, m2, thunk))
 
const store = configureStore({
    reducer : {
        caughtPokemons : reducerCaughtPokemons,
        list : reducerGetVisibleListPokemon,
        pagination : reducerPagination,
    },

    middleware: (getDefaultMiddleware) =>
    [
        ...getDefaultMiddleware(),
        paginationMiddleware.middleware,
        addPokemonToList.middleware,
        m1,
        m2,
        thunk
    ],
    preloadedState
    
})

store.dispatch(fetchPokemonsAsyncThunk());
export default store

// добавлять в локалсторадж список пойманных покемонов, если этот список поменялся
// с помощью middleware

// https://redux.js.org/api/store
// https://redux.js.org/api/applymiddleware

// https://react.dev/reference/react/createContext