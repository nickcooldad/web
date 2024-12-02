const initialState = {
        loading : false,
        pageData : {number: 0, size : 8},
        count : 0
}

export const paginationPokemons = (state = initialState, action) => {
    switch (action.type){
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
                count : action.count
            }
        }
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

        default :
        return state
    }
}