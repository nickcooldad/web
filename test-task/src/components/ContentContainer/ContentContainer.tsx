export function ContentContainer({coctails}){
    return(
    <div>
        <div>
            <img src={coctails.pictures} alt="Описание изображения" />
        </div>
        <div>pictures</div>
        <span>{coctails.nameDrink}</span>
        <span>{coctails.categoryDrink}</span>
        <span>{coctails.typeAlcoholic}</span>
        <span>{coctails.typeGlass}</span>
        <div>
            instruction:
            <span>{coctails.instruction}</span>
        </div>
        <div>
            list of gridient
            {coctails.measures.map(measure => {
                return <span>{measure}</span>
            })}

            {coctails.ingredients.map(ingredient => {
                return <span>{ingredient}</span>
            })}
        </div>
    </div>
    )
}
// return  {
//     nameDrink: drink.strDrink,
//     categoryDrink: drink.strCategory,
//     typeAlcoholic: drink.strAlcoholic,
//     typeGlass: drink.strGlass,
//     instruction: drink.strInstructions,
//     measures : measuresAndIngredients(drink, 'strMeasure'),
//     ingredients: measuresAndIngredients(drink, 'strIngredient')
//   }
// })