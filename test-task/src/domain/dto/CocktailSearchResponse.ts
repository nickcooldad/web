type ResonseItemIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type ResponseDrink = {
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
}
  & Record<`strIngredient${ResonseItemIndex}`, string | null>
  & Record<`strMeasure${ResonseItemIndex}`, string | null>

export interface CocktailSearchResponse {
  drinks: ResponseDrink[];
}