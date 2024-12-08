// const rootReducer = combineReducers({
//     caughtPokemons : caughtOrReleaserPokemons,
//     list : getVisibleListPokemons,
//     pagination : paginationPokemons
// })

// const reducer = (state = 0, action) => {
//     if(action.type === 'Increment'){
//         return state + 1
//     }
//     else if(action.type === 'Dicrement'){
//         return state - 1 
//     } 
//     return state
// }

export function combineReducersNew(reducers){
    return (state = {}, action) => {
        const nextState = {}
        for(const key in reducers){
            nextState[key] = reducers[key](state[key], action)
        }
        return nextState
    }
}