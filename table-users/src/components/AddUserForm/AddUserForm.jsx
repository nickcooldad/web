import {useSelector, useDispatch} from 'react-redux'
import React, { useState } from 'react'
import s from './AddUserForm.module.css'
import { AddAge } from './AddAge/AddAge'
import { AddGender } from './AddGender/AddGender'
import { AddName } from './AddName/AddName'
import {v4 as uuidv4} from 'uuid'


export function AddUserForm(){
    const [dataUser, setDataUser] = useState({
        name: '',
        age : '',
        gender : '',
    })
    const dispatch = useDispatch()
    console.log(dataUser.id, '+++', dataUser.name)

const handleChange = (field, value) => {
    setDataUser(prev => {
      return  {...prev,
        [field] : value
        }
    })
}

const addUser = () => {
    if(!Object.values(dataUser).includes('')){
        dispatch({
            type : 'addUser',
            payload : {...dataUser, id: uuidv4()}
        })
        setDataUser({
            name: '',
            age : '',
            gender : '',
        })
    }
}
    return(
        <div className={s.userForm}>
            <AddName  
            value={dataUser.name}
            onChange={(value) => handleChange('name', value)}/>

            <AddAge 
             value={dataUser.age}
             onChange={(value) => handleChange('age', value)}
            />
            <AddGender 
             value={dataUser.gender}
             onChange={(value) => handleChange('gender', value)}
            />

            <button 
            className={s.save_button}
            onClick={() => addUser()
            }
                >SAVE</button>
        </div>
    )

}