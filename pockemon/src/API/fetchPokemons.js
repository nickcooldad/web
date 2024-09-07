export async function fetchPokemons(pageNumber, pageSize, signal) {
  const offset = pageNumber * pageSize
  const limit = pageSize
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  const responseData = await fetch(url, {signal}).then(r => r.json());
  const results = responseData.results.map(pokemon => ({
    name: pokemon.name,
    id: pokemon.url.slice(34, -1),
  }));

  return {
    count: responseData.count,
    results
  }
}
