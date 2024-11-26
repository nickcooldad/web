import {createStore, applyMiddleware} from "redux"
import {thunk} from 'redux-thunk'

const initialState = {
    loading : false,
    caughtPokemons : [],
    list : [],
    pageData : {number: 0, size : 8},
    count : 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'pageSelect' : {
            return {
                ...state, 
                pageData : {
                    number : Math.floor(state.pageData.number*state.pageData.size/action.sizeSelect),
                    size : action.sizeSelect
                }
            }
        }

        case 'nextPage' : {
            return {
                ...state,
                pageData : {
                    ...state.pageData,
                    number : state.pageData.number + 1
                }
            }
        }

        case 'backPage' : {
            return {
                ...state,
                pageData : {
                    ...state.pageData,
                    number : state.pageData.number - 1
                }
            }
        }

        case 'catchOrRelease' : {
            if(state.caughtPokemons.includes(action.pokemon)){
                return {
                    ...state,
                    caughtPokemons : state.caughtPokemons.filter(el => el !== action.pokemon)
                }
            } else {
                return {
                    ...state,
                    caughtPokemons : [...state.caughtPokemons, action.pokemon]
                }
            }
        }

        case 'fetchRequest' : {
            return {
                ...state,
                loading : true
            }
        }

        case 'fetchSuccess' : {
            return {
                ...state,
                loading : false,
                list : action.list,
                count : action.count
            }
        }
        default :
        return state
    }
}


const store = createStore(reducer, applyMiddleware(thunk))

export default store