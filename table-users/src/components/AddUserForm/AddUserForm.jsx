import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import s from './AddUserForm.module.css'
import { AddAge } from './AddAge/AddAge'
import { AddGender } from './AddGender/AddGender'
import { AddName } from './AddName/AddName'

export function AddUserForm(){
    return(
        <div className={s.userForm}>
            <AddName/>
            <AddAge/>
            <AddGender/>
            <button className={s.save_button}>SAVE</button>
        </div>
    )

}