import { ContentContainer } from "../ContentContainer/ContentContainer"
import { coctail_code } from "../../response/cocktail_code"
import s from './CoctailTable.module.css'
import { useDispatch } from "react-redux"
import { choose } from "../../redux/slices/selectedCoctelSlice"
import { useGetDrinksQuery } from "../../redux/slices/dataApiRTKQuery"
import { useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom"

export function CoctailTable () {

const dispatch = useDispatch();
const navigate = useNavigate();
const {pathname} = useLocation()
const coctailUrl = pathname.slice(1)



  const { data: drinks, isLoading, isError } = useGetDrinksQuery(coctailUrl);


const hundlClickSelect = (drink: string) => {
  dispatch(choose(drink))
  navigate(`/${drink}`)
}

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
                    {coctail_code.map(coctailName => (
                        <label key={coctailName} className={s.coctail}>
                            <input 
                            className={s.custom_radio} 
                            onChange={() => hundlClickSelect(coctailName)}  
                            type="radio" name="option" 
                            id={coctailName} 
                            value={coctailName} 
                            checked={coctailUrl === coctailName}
                            />
                            <span className={s.textRadio}>{coctailName}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className={s.content}>
                {drinks!.map((drink, index) => {
                    return <ContentContainer key={index}  coctails={drink}/>
                })}
                
            </div>
        </div>
    )
}
