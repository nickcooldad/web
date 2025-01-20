import s from './TableUsers.module.css';
import cn from 'classnames'
import { TableResponse } from "../App";
import { useState } from 'react';
interface TableUsersProps <T>{
  title: TableResponse<T>[],
  dataTable: T[],
}
interface SortProperty <T>{
  stateSort : boolean,
  propertySort: TableResponse<T> | null,
  data : T[]
 }
 
export function TableUsers<T>({title, dataTable}: TableUsersProps<T>) {

  const [dataSort, setDataSort] = useState<SortProperty<T>>({
    propertySort: null,
    stateSort : false,
    data: dataTable
  })
  
function handleClickSortedProperty(property: TableResponse<T>) {
  setDataSort(prev => { 
    const sorted = prev.data.toSorted((a,b) => property.tableSort ? property.tableSort(a,b) : 0)
    const result = dataSort.stateSort ? sorted.reverse() : sorted

        if(prev.propertySort === property) return  {...prev, stateSort: !prev.stateSort, data: result}
        return  {...prev, stateSort : true, propertySort: property, data: result}
      })
    }



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
        {dataSort.data.map((user, rowIndex) => (
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

