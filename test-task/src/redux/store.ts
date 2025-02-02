import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "./slices/dataApiRTKQuery";

export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailApi.middleware)

})
