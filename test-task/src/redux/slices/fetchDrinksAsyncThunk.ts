import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDrinks } from "../../API/fetchDrinks";

export const fetchDrinksAsyncThunk = createAsyncThunk('drinks/fetchDrink', async (_, {getState}) => {
    const drink  = getState().selectedCoctail
    const result = await fetchDrinks(drink)
    return result
}) 
    
