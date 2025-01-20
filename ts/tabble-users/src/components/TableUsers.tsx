import s from './TableUsers.module.css';
import cn from 'classnames'
import { TableResponse } from "../App";
import { useEffect, useMemo, useState } from 'react';
interface TableUsersProps <T>{
  title: TableResponse<T>[],
  dataTable: T[],
}

export function TableUsers<T>({title, dataTable}: TableUsersProps<T>) {

interface SortProperty <T>{
  stateSort : boolean,
  propertySort: TableResponse<T> | null
}

  const [dataSort, setDataSort] = useState<SortProperty<T>>({
    propertySort: null,
    stateSort : false
  })
 
  
function handleClickSortedProperty(property: TableResponse<T>) {
  setDataSort(prev => {
    if(prev.propertySort === property) return  {...prev, stateSort: !prev.stateSort}
    return  {stateSort : true, propertySort: property}
  })
}

const [data, setData] = useState(dataTable)

function handleClickSorted(){
  setData(prev => {
    const sorted = prev.toSorted(dataSort.propertySort?.tableSort)
    if(dataSort.stateSort) return sorted.reverse()
    return sorted
  })
}

useEffect(() => {
  handleClickSorted()
}, [dataSort])


console.log(dataSort)
  return (
    <table className={s.styleTable}>
      <thead>
        <tr>
          {title.map((property, index) => (
            <th key={index} >
              {property.titleName}
              {property.tableSort && <button className={cn(s.styleButton, {[s.active] : property === dataSort.propertySort && dataSort.stateSort})} onClick={() => {
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

