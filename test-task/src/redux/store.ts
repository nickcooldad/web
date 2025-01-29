import { configureStore } from "@reduxjs/toolkit";
import { selectedCoctailReducer} from "./slices/selectedCoctelSlice";
import { getDataDrinkSlice } from "./slices/dataDrinkSlice";
import { fetchDrinksAsyncThunk } from "./slices/fetchDrinksAsyncThunk";

export const store = configureStore({
    reducer: {
        selectedCoctail: selectedCoctailReducer,
        dataDrink: getDataDrinkSlice
    }
})

store.dispatch(fetchDrinksAsyncThunk())
