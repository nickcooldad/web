import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import s from './AddName.module.css'

export function AddName({value, onChange}){

    const handleInputChange = (e) => {
        onChange(e.target.value)
    }
    return(
        <div className={s.addName}>
            name 
            <input type='text'
            className={s.inputName}
            placeholder='Alex'
            value={value}
            onChange={handleInputChange}
            ></input>
        </div>
    )

}