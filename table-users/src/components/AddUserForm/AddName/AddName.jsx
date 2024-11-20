import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import s from './AddName.module.css'

export function AddName(){
    return(
        <div className={s.addName}>
            name
            <input type='text'
            className={s.inputName}
            placeholder='Alex'></input>
        </div>
    )

}