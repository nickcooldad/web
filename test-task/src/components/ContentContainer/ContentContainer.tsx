import sn from './ContentContainer.module.css';

export function ContentContainer({coctails}) {
  console.log(coctails)
  return (
      <div className={sn.container}>
          <div className={sn.topOfPage}>
              <div className={sn.textContent}>
                  <div className={sn.nameDrink}>{coctails.name}</div>
                  <div className={sn.category}>{coctails.categoryDrink}</div>
                  <div className={sn.typeAlcoholic}>{coctails.typeAlcoholic}</div>
                  <div className={sn.typeGlass}>{coctails.typeGlass}</div>
                  <div className={sn.instructions}>
                      <h1 className={sn.titleInstr}>Instructions:</h1>
                      {coctails.instruction}
                  </div>
              </div>
              <img 
                  loading="lazy" 
                  className={sn.imgCoctail} 
                  src={coctails.pictures} 
                  alt="Cocktail illustration" 
              />
          </div>

          <div className={sn.ingredients}>
              <h1 className={sn.titleIngredients}>List of ingredients</h1>
              {coctails.measures.map((measure, index) => (
                  <div key={index} className={sn.ingredientsAndMeasure}>
                      <div className={sn.measure}>{measure}</div>
                      <div className={sn.ingredient}>{coctails.ingredients[index]}</div>
                  </div>
              ))}
          </div>
      </div>
  )
}