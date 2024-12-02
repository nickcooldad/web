
export const getVisibleListPokemons = (state = [], action) => {
    switch (action.type){
        case 'fetchSuccess' : {
            return [...action.list]
        }

        default :
        return state
    }
}
