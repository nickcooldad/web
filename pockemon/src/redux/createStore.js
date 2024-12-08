function createStore(reducer, initialState, enhancer){
    let state = reducer(initialState, {type : Math.random().toString()})
    let functions = []
    return {
        getState : () => state,
        dispatch : (action) => {
            state = reducer(state, action)
            functions.forEach(fn => fn())
        },
        subscribe : (cb) => {
            functions.push(cb)
            return () => {
                functions = functions.filter(fn => fn !== cb)
            }
        },
    }
}

// https://github.com/reduxjs/redux/blob/master/src/createStore.ts

// configureStore + createSlice + createAsyncThunk + createListenerMiddleware
//                                                   для каждой мидлвары
//                                                   addPokemonToList paginationMiddleware

// написать свой combineReducers

// можно попробовать реализовать свои версии createSlice + createAsyncThunk

// const {legacy_createStore: createStore} = require("redux");


const reducer = (state = 0, action) => {
    if(action.type === 'Increment'){
        return state + 1
    }
    else if(action.type === 'Dicrement'){
        return state - 1 
    } 
    return state
}

const store = createStore(reducer)

const unsubscribe1 = store.subscribe(() => {
  console.log(">>> 1")
});
const unsubscribe2 = store.subscribe(() => {
  console.log(">>> 2")
});

store.dispatch({type: 'Increment'}) // 1 2

unsubscribe1();

store.dispatch({type: 'Increment'}) // 2

unsubscribe2();

store.dispatch({type: 'Increment'}) // ---

console.log(store.getState())