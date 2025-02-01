import { ContentContainer } from "../ContentContainer/ContentContainer"
import s from './CoctailTable.module.css'
import { useDispatch } from "react-redux"
import { useGetDrinksQuery } from "../../redux/slices/dataApiRTKQuery"
import { NavLink, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { CocktailCode, cocktailCodes } from "../../domain/core/cocktailCodes"

<CocktailPage> ← useParams
  validate string (type guard)
  if ok then render
  <CocktailTable drinkType={...}></CocktailTable>
</CocktailPage>


export function СocktailTable() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const cocktaillUrl = pathname.slice(1) as CocktailCode;

  console.log({cocktaillUrl})

  const { data: drinks, isLoading, isError } = useGetDrinksQuery(cocktaillUrl);


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
            <NavLink  to={"/" + cocktailCode} key={cocktailCode} className={s.coctail}>
              {cocktailCode}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={s.content}>
        {drinks!.map((drink, index) => {
          return <ContentContainer key={index} coctails={drink} />
        })}

      </div>
    </div>
  )
}
