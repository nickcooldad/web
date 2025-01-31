import sn from './ContentContainer.module.css';
import { CocktailType } from '../../redux/slices/dataApiRTKQuery';

interface CocktailProps {
    coctails: CocktailType
}
export function ContentContainer({coctails: cocktails}: CocktailProps) {

  return (
      <div className={sn.container}>
          <div className={sn.topOfPage}>
              <div className={sn.textContent}>
                  <div className={sn.name}>{cocktails.nameDrink}</div>
                  <div className={sn.category}>{cocktails.categoryDrink}</div>
                  <div className={sn.typeAlcoholic}>{cocktails.typeAlcoholic}</div>
                  <div className={sn.typeGlass}>{cocktails.typeGlass}</div>
                  <div className={sn.instructions}>
                      <h1 className={sn.titleInstr}>Instructions:</h1>
                      {cocktails.instruction}
                  </div>
              </div>
              <img 
                  loading="lazy" 
                  className={sn.imgCoctail} 
                  src={cocktails.pictures} 
                  alt="Cocktail illustration" 
              />
          </div>

          <div className={sn.ingredients}>
              <h1 className={sn.titleIngredients}>List of ingredients</h1>
              {cocktails.measures.map((measure, index) => (
                  <div key={index} className={sn.ingredientsAndMeasure}>
                      <div className={sn.measure}>{measure}</div>
                      <div className={sn.ingredient}>{cocktails.ingredients[index]}</div>
                  </div>
              ))}
          </div>
      </div>
  )
}