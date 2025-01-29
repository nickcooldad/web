export async function fetchDrinks(coctail: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctail}`
    const response = await fetch(url).then(res => res.json())

    const result = response.drinks.map((drink: Record<string, unknown>) => {
     // console.log(measuresAndIngredients(drink, 'strMeasure'))
        return  {
          nameDrink: drink.strDrink,
          categoryDrink: drink.strCategory,
          typeAlcoholic: drink.strAlcoholic,
          typeGlass: drink.strGlass,
          instruction: drink.strInstructions,
          measures : measuresAndIngredients(drink, 'strMeasure'),
          ingredients: measuresAndIngredients(drink, 'strIngredient'),
          pictures: drink.strDrinkThumb
          
        }
    })
    return result
}   


function measuresAndIngredients(drink: Record<string, unknown>, necessary: string): string[] {
  const result: string[] = [];
  let count = 1;
  
  while(true) {
      const key = `${necessary}${count}`;
      if (drink.hasOwnProperty(key) && typeof drink[key] === 'string') {
          result.push(drink[key] as string);
          count++;
      } else {
          break;
      }
  }
  
  return result;
}
// [{
    //     strDrink,
    //     strCategory,
    //     strAlcoholic,
    //     strGlass,
    //     strinstructions,
    //     strMeasure,
    //     strIngridient
    // }]