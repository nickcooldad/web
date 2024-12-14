//import { createAsyncThunk } from "./createAsyncThunk"

const {createSlice} = require("@reduxjs/toolkit")

class Builder {
     response = {}
        addCase(name, reducer){
            this.response[name] = reducer
            return this
        }
    }

    const createSlice2 = (dataRedux) => {
    const actions = {}
    const builder = new Builder()

    for (const action of Object.keys(dataRedux.reducers)) {
        actions[action] = (payload) => ({ type: `${dataRedux.name}/${action}`, payload })
    }

    const reducer = (state = dataRedux.initialState, action) => {
        //console.log(action.type)
        const nameAction = Object.keys(dataRedux.reducers).find((key) => `${dataRedux.name}/${key}` === action.type)
        console.log({ nameAction });
        if(nameAction !== undefined){
            return dataRedux.reducers[nameAction](state, action)
        }
        if(action.type in builder.response){
           return builder.response[action.type](state, action)
        }
         return state
    }

    if(dataRedux.extraReducers !== undefined){
        dataRedux.extraReducers(builder)
    }

    
    // const extraReducers = () => {
    //     const cases = {}
    //     // const matchers = []
    //     // let defaultCase

    //     return {
    //         addCase: (actionType, reducer) => {
    //             cases[actionType] = reducer
    //         },
    //         addMatcher: (matcher, reducer) => {
    //             matchers.push({ matcher, reducer })
    //         },
    //         addDefaultCase: (reducer) => {
    //             defaultCase = reducer
    //         }
    //     }
    // }

    return {
        actions,
        reducer,
    }
}

const response = {
    name: 'paginationPokemons',
    initialState: {
        loading: false,
        pageData: { number: 0, size: 8 },
        count: 0
    },
    reducers: {
        pageSelect: (state, action) => {
            return {
                ...state,
                pageData: {
                    number: Math.floor(state.pageData.number * state.pageData.size / action.payload),
                    size: action.payload
                },
            }
        },
        nextPage: (state) => {
            state.pageData.number += 1

        },
        backPage: (state) => {
            // state.pageData.number -= 1
            return {
                ...state,
                pageData: {
                    ...state.pageData,
                    number: state.pageData.number - 1,
                }
            }
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase("xxx", (state, action) => {
                return {
                    xxx: 123,
                    p: action.payload
                };
            })
            .addCase("yyy", (state, action) => {
                return {
                    yyy: 444,
                    p: action.payload
                };
            })
    }
}

const resultFunction = createSlice(response)
const resultFunction2 = createSlice2(response)
// console.log(resultFunction.actions.pageSelect(100))
// console.log(resultFunction2.actions.pageSelect(100))

// console.log(resultFunction.reducer({
//     loading: false,
//     pageData: { number: 0, size: 8 },
//     count: 0
// }, resultFunction2.actions.pageSelect(100)))

// console.log(resultFunction2.reducer({
//     loading: false,
//     pageData: { number: 0, size: 8 },
//     count: 0
// }, resultFunction2.actions.pageSelect(100)))

console.log(resultFunction2.reducer(response.initialState, { type: "xxx", payload: "hello" }))

// { xxx: 123, p: "hello"}