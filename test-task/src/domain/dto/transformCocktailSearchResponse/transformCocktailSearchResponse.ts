import { Drink } from '../../core/Drink';
import { CocktailSearchResponse } from "../CocktailSearchResponse";
import { ResponseDrink } from "../CocktailSearchResponse";

const ingredients = (obj: ResponseDrink) => Object.keys(obj)
  .filter(key => /^strIngredient/.test(key) && obj[key as keyof ResponseDrink])
  .map(key => obj[key as keyof ResponseDrink])
  .filter(value => value !== null);

const measures = (obj: ResponseDrink) => Object.keys(obj)
  .filter(key => /^strMeasure/.test(key))
  .map(key => obj[key as keyof ResponseDrink])
  .filter(value => value !== null);

export function transformCocktailSearchResponse(response: CocktailSearchResponse): Drink[] {
  if (!response?.drinks) return []
  return response.drinks.map(drinkResponse => {

    return {
      drink: drinkResponse.strDrink,
      category: drinkResponse.strCategory,
      alcoholic: drinkResponse.strAlcoholic,
      glass: drinkResponse.strGlass,
      instructions: drinkResponse.strInstructions,
      ingredients: ingredients(drinkResponse),
      measures: measures(drinkResponse),
      drinkThumb: drinkResponse.strDrinkThumb
    }
  })
}
