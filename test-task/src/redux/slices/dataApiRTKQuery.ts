
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface CocktailType{
  nameDrink: string,
  categoryDrink: string,
  typeAlcoholic: string,
  typeGlass: string,
  instruction: string,
  pictures: string,
  measures: string[],
  ingredients: string[]
}

const measuresAndIngredients = (drink: Record<PropertyKey, string>, necessary: string): string[] => {
    const result: string[] = []
    let count = 1
    
    while(true) {
      const key = `${necessary}${count}`
      if (drink.hasOwnProperty(key) && typeof drink[key] === 'string') {
        result.push(drink[key])
        count++
      } else {
        break
      }
    }
    return result
  }

export const coctailApi = createApi({
    reducerPath: 'coctailApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/',
      }),
        endpoints: (builder) => ({
            getDrinks: builder.query({
                query: (coctail: string) => `search.php?s=${coctail}`,
                transformResponse: (response: {drinks: Record<PropertyKey, string>[]}) : CocktailType[] => {
                  console.log(response)
                    if(!response.drinks) return []
        
                    return response.drinks.map(drink => ({ 
                        nameDrink: drink.strDrink,
                        categoryDrink: drink.strCategory,
                        typeAlcoholic: drink.strAlcoholic,
                        typeGlass: drink.strGlass,
                        instruction: drink.strInstructions,
                        measures: measuresAndIngredients(drink, 'strMeasure'),
                        ingredients: measuresAndIngredients(drink, 'strIngredient'),
                        pictures: drink.strDrinkThumb
                      }))
                }
            })
        })
})

export const { useGetDrinksQuery } = coctailApi
