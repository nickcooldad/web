import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CocktailCode } from "../../domain/core/cocktailCodes";


export const selectedCoctailSlice = createSlice({
    name: 'cocktail',
    initialState: 'margarita' as CocktailCode,
    reducers: {
        setDrinkType: (_, action: PayloadAction<CocktailCode>) => {
            return action.payload
        }
    }
})

export const selectedCoctailReducer = selectedCoctailSlice.reducer