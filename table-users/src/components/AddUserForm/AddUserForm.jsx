import {useSelector, useDispatch} from 'react-redux'
import React, { useState } from 'react'
import s from './AddUserForm.module.css'
import { AddAge } from './AddAge/AddAge'
import { AddGender } from './AddGender/AddGender'
import { AddName } from './AddName/AddName'



export function AddUserForm(){
    const [dataUser, setDataUser] = useState({})
    const dispatch = useDispatch()


    return(
        <div className={s.userForm}>
            <AddName addNameUser={setDataUser}/>
            <AddAge addAgeUser={setDataUser}/>
            <AddGender addGenderUser={setDataUser}/>
            <button 
            className={s.save_button}
            onClick={() => dispatch({
                type : 'addUser',
                payload : dataUser
            })}
                >SAVE</button>
        </div>
    )

}