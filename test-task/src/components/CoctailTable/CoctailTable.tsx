import { ContentContainer } from "../ContentContainer/ContentContainer"
import { coctail_code } from "../../response/cocktail_code"
import s from './CoctailTable.module.css'
import { useDispatch, UseDispatch, useSelector } from "react-redux"
import { fetchDrinks } from "../../API/fetchDrinks"

export function CoctailTable () {

const dispatch = useDispatch()
const dataDrink = useSelector(state => state.dataDrink)

const result = fetchDrinks('margarita').then(res => res.json())
result.then(r => console.log(r))


    return (
        <div className={s.container}>
            <div className={s.menu}>
                <form>
                    {coctail_code.map(coctail => (
                        <label key={coctail} className={s.coctail}>
                            <input className={s.custom_radio} type="radio" name="option" id={coctail} value={coctail} />
                            <span>{coctail}</span>
                        </label>
                    ))}
                </form>
            </div>
            <div className={s.content}>
                <ContentContainer />
            </div>
        </div>
    )
}
