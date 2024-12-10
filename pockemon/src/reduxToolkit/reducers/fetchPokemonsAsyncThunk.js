import { createAsyncThunk} from '@reduxjs/toolkit'
import { fetchPokemons } from "../../API/fetchPokemons"


export const fetchPokemonsAsyncThunk = createAsyncThunk('pokemons/fetchList', async (_, {getState}) => {
    const {number, size} = getState().pagination.pageData
    const { count, results } = await fetchPokemons(number, size);
    return {count, results}
})
