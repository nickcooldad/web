import {createStore, applyMiddleware, combineReducers} from "redux"
// import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {paginationPokemons} from './reducerPaginationPokemons.js';
import {caughtOrReleaserPokemons} from './reducerCaughtPokemons.js';
import {getVisibleListPokemons} from './reducerVisibleListPokemons.js';
import {actionFetchPokemons} from './actionFetchPokemons.js'

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

const store = createStore(rootReducer, applyMiddleware(paginationMiddleware, m1, m2, thunk))
store.dispatch(actionFetchPokemons());

export default store

// добавлять в локалсторадж список пойманных покемонов, если этот список поменялся
// с помощью middleware

// https://redux.js.org/api/store
// https://redux.js.org/api/applymiddleware

// https://react.dev/reference/react/createContext