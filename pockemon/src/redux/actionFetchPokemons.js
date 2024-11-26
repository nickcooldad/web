export function actionfetchPokemons(pageNumber, pageSize) {
    return async (dispatch) => {
        dispatch({
            type: 'fetchRequest'
        })
        const offset = pageNumber * pageSize
        const limit = pageSize
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        const responseData = await fetch(url).then(r => r.json())
        const results = responseData.results.map(pokemon => ({
          name: pokemon.name,
          id: pokemon.url.slice(34, -1),
        }));
      
        dispatch({
            type : 'fetchSuccess',
            count : responseData.count,
            list : results
        }) 
    }
  }
  