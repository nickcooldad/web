import sn from './ContentContainer.module.css';
import { Drink } from '../../domain/core/Drink';

interface CocktailProps {
    cocktail: Drink
}
export function ContentContainer({cocktail}: CocktailProps) {

  return (
      <div className={sn.container}>
          <div className={sn.topOfPage}>
              <div className={sn.textContent}>
                  <div className={sn.name}>{cocktail.drink}</div>
                  <div className={sn.category}>{cocktail.category}</div>
                  <div className={sn.typeAlcoholic}>{cocktail.alcoholic}</div>
                  <div className={sn.typeGlass}>{cocktail.glass}</div>
                  <div className={sn.instructions}>
                      <h1 className={sn.titleInstr}>Instructions:</h1>
                      {cocktail.instructions}
                  </div>
              </div>
              <img 
                  loading="lazy" 
                  className={sn.imgCocktail} 
                  src={cocktail.drinkThumb} 
                  alt="Cocktail illustration" 
              />
          </div>

          <div className={sn.ingredients}>
              <h1 className={sn.titleIngredients}>List of ingredients</h1>
              {cocktail.measures.map((measure, index) => (
                  <div key={index} className={sn.ingredientsAndMeasure}>
                      <div className={sn.measure}>{measure}</div>
                      <div className={sn.ingredient}>{cocktail.ingredients[index]}</div>
                  </div>
              ))}
          </div>
      </div>
  )
}