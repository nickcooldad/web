import s from './TableUsers.module.css'
import {useSelector, useDispatch} from 'react-redux'
import cn from 'classnames'
import { useState } from 'react'

export function TableUsers (){


const [editName, setEditName] = useState('')
const [editIndex, setEditIndex] = useState('') 

const users = useSelector(state => state.users)
const dispatch = useDispatch()

const handleEdit = (index, name) =>{
    setEditIndex(index)
    setEditName(name)
}

const handleDeleteUser = (id) => {
    dispatch({
        type : 'deleteUser',
        payload : id
    })
}


const handleIncrementAge = (id) => {
    dispatch({
        type : 'incrementAge',
        payload : id
    })
}

const handleDecrementAge = (id) => {
    dispatch({
        type : 'decrementAge',
        payload : id
    })
}

const handleChangeGender = (id) => {
    dispatch({
        type : 'changeGender',
        payload : id
    })
}

const handleUpdateName = (id) => {
    dispatch({
        type : 'updateNameUser',
        payload : {name : editName, id}
})
    setEditIndex(null)
    setEditName('')
}
const handleKeyDown = (e, id) => {
    if(e.key === 'Enter'){
        handleUpdateName(id)
    }
}
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
                                    {/* {`${user.name[0].toUpperCase() + user.name.slice(1)}`} */}
                                    {editIndex === index ? 
                                    <input
                                        type='text'
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(e, user.id)}
                                        autoFocus
                                        >
                                    </input> :
                                    <span
                                        onClick={() => handleEdit(index, user.name)}>
                                            {
                                            user.name
                                            }
                                    </span>} 

                                </td>

                                <td>
                                    <button 
                                        className={s.button}
                                        onClick={() => handleDecrementAge(user.id)}
                                    ></button>
                                    {user.age} 
                                    <button 
                                        className={cn(s.button, s.plus)}
                                        onClick={() => handleIncrementAge(user.id)}
                                        ></button>
                                </td>

                                <td>
                                    {`${user.gender[0].toUpperCase()}`}
                                     <button 
                                        className={cn(s.button, s.reset)}
                                        onClick={() => handleChangeGender(user.id)}
                                        ></button>
                                </td>
                                <td>
                                    <button 
                                    className={cn(s.button, s.delete)}
                                    onClick={() => handleDeleteUser(user.id)}
                                    ></button>
                                </td>
                    </tr>
                    })
                }
            </tbody>
        </table>
    )
}