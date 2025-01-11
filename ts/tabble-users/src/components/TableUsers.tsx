import { calculateAge } from "../function/birthDay"

interface TableUsersProps {
  title: string[],
  users: User[]
}


export interface User {
  firstName: string,
  lastName: string,
  birthDate: string,
  gender: 'male' | 'female'
}


export const TableUsers: React.FC<TableUsersProps> = ({title, users}) => {
    
    return <table>
        <thead>
          <tr>
          {
            title.map(el => {
                return <th>{el}</th>
            })
          }
          </tr>
        </thead>
        <tbody>
            {
              users.map(el => {
                return (
                <tr>
                  <td>{`${el.firstName} ${el.lastName}`}</td>
                  <td>{calculateAge(el.birthDate)}</td>
                  <td>{el.gender}</td>
                </tr>
                )
              })
            }
        </tbody>
    </table>

}