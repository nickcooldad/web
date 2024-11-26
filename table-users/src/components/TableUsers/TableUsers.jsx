import s from './TableUsers.module.css'
import {useSelector, useDispatch} from 'react-redux'
import cn from 'classnames'
import { useState } from 'react'
import { deleteUser, changeGender, incrementAge, decrementAge, updateNameUser} from '../../redux/actions'
import { ChangeName } from './ChangeName/ChangeName'

export function TableUsers (){

const users = useSelector()
const dispatch = useDispatch()


    return(
        <table className={s.table}>
            {users.length !== 0 && 
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>actions</th>
                </tr>
            </thead>}
            <tbody>
                {
                    users.map((user, index) => {
                        return <tr key={user.id}>
                                <td>
                                    <ChangeName
                                        id={user.id}
                                        name={user.name}
                                        index={index}
                                        />
                                </td>

                                <td>
                                    <button 
                                        className={s.button}
                                        onClick={() => dispatch(decrementAge(user.id))}
                                    ></button>
                                    {user.age} 
                                    <button 
                                        className={cn(s.button, s.plus)}
                                        onClick={() => dispatch(incrementAge(user.id))}
                                        ></button>
                                </td>

                                <td>
                                    {`${user.gender[0].toUpperCase()}`}
                                     <button 
                                        className={cn(s.button, s.reset)}
                                        onClick={() => dispatch(changeGender(user.id))}
                                        ></button>
                                </td>
                                <td>
                                    <button 
                                    className={cn(s.button, s.delete)}
                                    onClick={() => dispatch(deleteUser(user.id))}
                                    ></button>
                                </td>
                    </tr>
                    })
                }
            </tbody>
        </table>
    )
}