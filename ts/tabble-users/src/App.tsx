import { useState } from "react"
import {TableUsers } from "./components/TableUsers"
import { calculateAge } from "./function/birthDay"
import { calculateDistance } from "./function/distance"

 export interface User {
  firstName: string,
  lastName: string,
  birthDate: string,
  gender: 'male' | 'female'
}
 
export interface Point {
  x: number,
  y: number,
  color: string
}

export interface TableResponse <T>{
  titleName: string,
  tableBody: (arg: T) => React.ReactNode
  tableSort?: (a: T, b: T) => number,
}

const users: User[] = [
  {firstName: 'Alex', lastName: 'Mich', birthDate: '11.07.1998', gender: 'male'},
  {firstName: 'Jons', lastName: 'Jhonson', birthDate: '15.04.1995', gender: 'male'},
  {firstName: 'Alisa', lastName: 'Star', birthDate: '25.08.2000', gender: 'female'},
]

const points: Point[] = [
  {x: 6, y: -8, color: 'green'},
  {x: 3, y: 4, color: 'red'}
]
 
const titleUsers: TableResponse<User>[]= [{
  titleName: 'Fullname', 
  tableBody: (user) => user.firstName + " " + user.lastName,
  tableSort: (a, b) => calculateAge(a.birthDate) - calculateAge(b.birthDate)
  //(users) => users.toSorted((a,b) => a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName))
},{
  titleName: 'Age',
  tableBody: (user) => calculateAge(user.birthDate),
  tableSort: (a, b) => calculateAge(a.birthDate) - calculateAge(b.birthDate)
    //users.toSorted((a,b) => calculateAge(a.birthDate) - calculateAge(b.birthDate))
},
{
  titleName: 'Gender',
  tableBody: (user) => user.gender
}]

const titlePoints: TableResponse<Point>[] = [{
  titleName: 'Coordinates',
  tableBody: (point: Point) => `(${point.x}, ${point.y})`,
  tableSort: (a, b) => a.x - b.x || a.y - b.y
    //points.toSorted((a, b) => a.x - b.x || a.y - b.y)
},{
  titleName: 'Distance',
  tableBody: (point) => calculateDistance(point.x, point.y),
  tableSort: (a, b) => calculateDistance(a.x,a.y) - calculateDistance(b.x, b.y)
    //points.toSorted((a,b) => calculateDistance(a.x,a.y) - calculateDistance(b.x, b.y))
},{
  titleName: 'Color',
  tableBody: (point) => point.color === 'green' ? '🟩' : '🟥'
}
]




const App: React.FC = () => {
  
  //const [dataTable, setDataTable] = useState<User[] | Point[]>(points)
  //const [sortOrder, setSortOrder] = useState<boolean>(false)

// function handleClickSort<T>(data: T[]): void {
//   setDataTable(sortOrder ? [...data]  : [...data].reverse())
//   setSortOrder(!sortOrder)
// }
  return (
      <div>
          <TableUsers 
          title={titlePoints}
          dataTable={points}
          //sortData={handleClickSort}
          />
      </div>

  )
}
export default App