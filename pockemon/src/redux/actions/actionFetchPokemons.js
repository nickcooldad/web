import { fetchPokemons } from "../../API/fetchPokemons"

export function actionFetchPokemons() {
    return async (dispatch, getState) => {
        const {number, size} = getState().pagination.pageData

        dispatch({
            type: 'fetchRequest'
        })

        const {count, results} = await fetchPokemons(number, size)
        
        dispatch({
            type : 'fetchSuccess',
            count,
            list : results
        }) 
    }
  }
