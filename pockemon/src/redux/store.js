import {createStore, applyMiddleware, combineReducers, __DO_NOT_USE__ActionTypes} from "redux"
// import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {paginationPokemons} from './reducers/reducerPaginationPokemons.js';
import {caughtOrReleaserPokemons} from './reducers/reducerCaughtPokemons.js';
import {getVisibleListPokemons} from './reducers/reducerVisibleListPokemons.js';
import {actionFetchPokemons} from './actions/actionFetchPokemons.js'
import { catchOrReleasePokemons } from "./actions/actionCatchOrReleasePokemons.js";
import { arrIsEqual } from "./arrEqual.js";
import { getDataLocalStorage } from "./getDataLocalStorage.js";

// const initialState = {
//     caughtPokemons : [],

//     list : [],

//     pagination: {
//         loading : false,
//         pageData : {number: 0, size : 8},
//         count : paginationPokemons
//     },
// }

const rootReducer = combineReducers({
    caughtPokemons : caughtOrReleaserPokemons,
    list : getVisibleListPokemons,
    pagination : paginationPokemons
})

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

const paginationMiddleware = storeApi => next => action => {
    next(action)
    if(action.type === 'pageSelect' || action.type === 'nextPage' || action.type === 'backPage'){
        storeApi.dispatch(actionFetchPokemons())
    }
}

const addPokemonToList = storeApi => next => action => {
    const prevList = storeApi.getState().caughtPokemons
    const result = next(action)
    const nextList = storeApi.getState().caughtPokemons
    console.log(prevList, nextList)
    if(!arrIsEqual(prevList, nextList)){
        console.log('add++')
        localStorage.setItem('caughtPokemons', JSON.stringify(nextList))
    }
    return result
}

const preloadedState = {
    caughtPokemons : getDataLocalStorage()
}
console.log(preloadedState)

const store = createStore(rootReducer, preloadedState, applyMiddleware(paginationMiddleware, addPokemonToList, m1, m2, thunk))
store.dispatch(actionFetchPokemons());

export default store

// добавлять в локалсторадж список пойманных покемонов, если этот список поменялся
// с помощью middleware

// https://redux.js.org/api/store
// https://redux.js.org/api/applymiddleware

// https://react.dev/reference/react/createContext