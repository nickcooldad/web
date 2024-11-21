import s from './TableUsers.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'

export function TableUsers (){

const users = useSelector(state => state.users)
const dispatch = useDispatch()
    return(
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        return <td key={uuidv4()}>
                                <th>{user.name}</th>
                                <th>{user.age}</th>
                                <th>{user.gender}</th>
                    </td>
                    })
                    
                }
            </tbody>
        </table>
    )
}