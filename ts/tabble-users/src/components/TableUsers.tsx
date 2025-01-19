import s from './TableUsers.module.css';
import cn from 'classnames'
import { TableResponse } from "../App";
import { useEffect, useState } from 'react';
interface TableUsersProps <T>{
  title: TableResponse<T>[],
  dataTable: T[],
}

export function TableUsers<T>({title, dataTable}: TableUsersProps<T>) {


  const [dataSort, setDataSort] = useState<[TableResponse<T> | null, boolean]>([null, false])
 
  
function handleClickSortedProperty(property: TableResponse<T>) {
  setDataSort(([name, stateSort]) => {
    if(name === property) return [name, !stateSort]
    return [property, true]
  })
}

const [data, setData] = useState(dataTable)

function handleClickSorted(){
  setData(prev => {
    if(dataSort[1]) return [...prev].reverse()
    return prev.toSorted(dataSort[0]?.tableSort)
  })
}

useEffect(() => {
  handleClickSorted()
}, dataSort)


console.log(dataSort)
  return (
    <table className={s.styleTable}>
      <thead>
        <tr>
          {title.map((property, index) => (
            <th key={index} >
              {property.titleName}
              {property.tableSort && <button className={cn(s.styleButton, {[s.active] : property === dataSort[0] && dataSort[1]})} onClick={() => {
                handleClickSortedProperty(property)
                }}></button>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user, rowIndex) => (
          <tr key={rowIndex}>
            {title.map((property, colIndex) => (
              <td key={colIndex}>{property.tableBody(user)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

