
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformCoctailSearchResponse } from "../../domain/dto/transformCoctailSearchResponse/transformCoctailSearchResponse";
import { CocktailCode } from "../../domain/core/cocktailCodes";

export const coctailApi = createApi({
  reducerPath: 'coctailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/',
  }),
  endpoints: (builder) => ({
    getDrinks: builder.query({
      query: (coctail: CocktailCode) => `search.php?s=${coctail}`,
      transformResponse: transformCoctailSearchResponse,
    })
  })
})

export const { useGetDrinksQuery } = coctailApi
