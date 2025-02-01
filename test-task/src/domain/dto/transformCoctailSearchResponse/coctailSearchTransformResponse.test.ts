import rawResponse from "./response.json";
import { transformCoctailSearchResponse } from "./transformCoctailSearchResponse";
import { test, describe, expect } from "vitest";
import { CoctailSearchResponse } from "../CoctailSearchResponse";

const response = rawResponse as CoctailSearchResponse;


describe("transformCoctailSearchResponse", () => {
  test("Трасформирует моковый респонс из джейсона", () => {
    
  const transformedDrinks = transformCoctailSearchResponse(response);

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


    // "strIngredient5": null,

    const instructions = Object.keys(obj)
      .filter(key => /^strIngredient/.test(key))
      .map(key => obj[key]);

    expect(transformedDrinks[0]).toEqual(firstDrinkTransformed);
  });
});