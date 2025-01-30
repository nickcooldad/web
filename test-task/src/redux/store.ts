import { configureStore } from "@reduxjs/toolkit";
import { selectedCoctailReducer} from "./slices/selectedCoctelSlice";
import { getDataDrinkSlice } from "./slices/dataDrinkSlice";
import { coctailApi } from "./slices/dataApiRTKQuery";

export const store = configureStore({
    reducer: {
        selectedCoctail: selectedCoctailReducer,
        [coctailApi.reducerPath] : coctailApi.reducer
    },

    middleware: (getDefaultMiddleware) => 
    [...getDefaultMiddleware(), coctailApi.middleware]
    
})
