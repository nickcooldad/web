import {TableUsers } from "./components/TableUsers"
import { User } from "./components/TableUsers"

const users: User[] = [
  {firstName: 'Alex', lastName: 'Mich', birthDate: '11.07.1998', gender: 'male'},
  {firstName: 'Jons', lastName: 'Jhonson', birthDate: '15.04.1995', gender: 'male'},
  {firstName: 'Alisa', lastName: 'Star', birthDate: '25.08.2000', gender: 'female'},
]

titleUsers = [{
  titleName:'FullName',
  tableBody: (user) => user.firstName + " " + user.lastName,
  tableSort:
}]
const data = users.map(el => {})
const App: React.FC = () => {
  return (
      <div>
          <TableUsers 
          title={['FullName', 'Age', 'Gender']}
          users={users}
          />
      </div>

  )
}
export default App


