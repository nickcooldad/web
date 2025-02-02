import { ContentContainer } from "../ContentContainer/ContentContainer"
import s from './CocktailTable.module.css'
import { useGetDrinksQuery } from "../../redux/slices/dataApiRTKQuery"
import {NavLink} from "react-router-dom"
import { CocktailCode, cocktailCodes } from "../../domain/core/cocktailCodes"


interface DrinkProps{
  drinkType: CocktailCode
}

{/* <CocktailPage> ← useParams
  validate string (type guard)
  if ok then render
  <CocktailTable drinkType={...}></CocktailTable>
</CocktailPage> */}

export function СocktailTable({drinkType} : DrinkProps) {


  const { data: drinks, isLoading, isError } = useGetDrinksQuery(drinkType);

  if (isLoading) {
    return <div className={s.container}>Loading cocktails...</div>
  }

  if (isError) {
    return <div className={s.container}>Error loading data</div>
  }



  return (
    <div className={s.container}>
      <div className={s.menu}>
        <div>
          {cocktailCodes.map(cocktailCode => (
            <NavLink  to={"/" + cocktailCode} key={cocktailCode} className={s.cocktail}>
              {cocktailCode}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={s.content}>
        {drinks!.map((drink, index) => {
          return <ContentContainer key={index} cocktail={drink} />
        })}

      </div>
    </div>
  )
}
