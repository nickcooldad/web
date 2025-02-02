import rawResponse from "./response.json";
import { transformCocktailSearchResponse } from "./transformCocktailSearchResponse";
import { test, describe, expect } from "vitest";
import { CocktailSearchResponse } from "../CocktailSearchResponse";

const response = rawResponse as CocktailSearchResponse;


describe("transformCocktailSearchResponse", () => {
  test("Трасформирует моковый респонс из джейсона", () => {

    const transformedDrinks = transformCocktailSearchResponse(response);
    console.log(transformedDrinks[0])

    const firstDrinkTransformed = {
      "drink": "Margarita",
      "category": "Ordinary Drink",
      "alcoholic": "Alcoholic",
      "glass": "Cocktail glass",
      "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      "ingredients": ["Tequila", "Triple sec", "Lime juice", "Salt"],
      "measures": ["1 1\/2 oz ", "1\/2 oz ", "1 oz "],
      "drinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg",
    };

    expect(transformedDrinks[0]).toEqual(firstDrinkTransformed);
  });
});