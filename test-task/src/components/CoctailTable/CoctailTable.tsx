import { ContentContainer } from "../ContentContainer/ContentContainer"
import { coctail_code } from "../../response/cocktail_code"
import s from './CoctailTable.module.css'

export function CoctailTable () {
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
