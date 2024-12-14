// export const fetchPokemonsAsyncThunk = createAsyncThunk('pokemons/fetchList', async (_, {getState}) => {
//     const {number, size} = getState().pagination.pageData
//     const { count, results } = await fetchPokemons(number, size);
//     return {count, results}
// })
 

export const createAsyncThunk = (nameThunk, asyncFunction) => {
   return (id, API) => async (dispatch) => {

    dispatch({type : `${nameThunk}/pending`})

    asyncFunction(id, API).then(
      (res) => {
        	dispatch({type : `${nameThunk}/fulfilled`, payload : res})
      },
      (err) => {
        	dispatch({type : `${nameThunk}/rejected`, payload : err})
					throw err
    	}
		)
  }
}

