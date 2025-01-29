import { ContentContainer } from "../ContentContainer/ContentContainer"
import { coctail_code } from "../../response/cocktail_code"
import s from './CoctailTable.module.css'
import { useDispatch, UseDispatch, useSelector } from "react-redux"
import { choose } from "../../redux/slices/selectedCoctelSlice"

export function CoctailTable () {

const hundlClickSelect = (drink) => {
  dispatch(choose(drink.target.value))
}
const dispatch = useDispatch()
const coctail = useSelector(state => state.selectedCoctail)
const dataDrink = useSelector(state => state.dataDrink.data)
console.log(coctail,'👌', dataDrink)



    return (
        <div className={s.container}>
            <div className={s.menu}>
                <form>
                    {coctail_code.map(coctail => (
                        <label key={coctail} className={s.coctail}>
                            <input className={s.custom_radio} onChange={(e) => hundlClickSelect(e)}  type="radio" name="option" id={coctail} value={coctail} />
                            <span>{coctail}</span>
                        </label>
                    ))}
                </form>
            </div>
            <div className={s.content}>
                {dataDrink.map(drink => {
                    return <ContentContainer coctails={drink}/>
                })}
                
            </div>
        </div>
    )
}
