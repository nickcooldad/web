
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformCocktailSearchResponse } from "../../domain/dto/transformCocktailSearchResponse/transformCocktailSearchResponse";
import { CocktailCode } from "../../domain/core/cocktailCodes";

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/',
  }),
  endpoints: (builder) => ({
    getDrinks: builder.query({
      query: (cocktail: CocktailCode) => `search.php?s=${cocktail}`,
      transformResponse: transformCocktailSearchResponse
    })
  })
})

export const { useGetDrinksQuery } = cocktailApi
