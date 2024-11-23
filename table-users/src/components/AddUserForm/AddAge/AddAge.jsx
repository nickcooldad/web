import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import s from './AddAge.module.css'

export function AddAge({value, onChange}){
    const handleInputChange = (e) =>{
        onChange(+e.target.value)
    }

    return(
        <div className={s.addAge}>
            age
           <select 
           className={s.selectAge}
           value={value}
           onChange={handleInputChange}
           >
            {
                new Array(100).fill('').map((_, index) => {
                    return <option value={index + 1}>{
                        index + 1
                        }</option>
                })
            }
           </select>
        </div>
    )

}