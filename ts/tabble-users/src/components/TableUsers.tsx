import './TableUsers.css';
import { TableResponse } from "../App";
import { User } from "../App";
import { Point } from '../App';
interface TableUsersProps <T>{
  title: TableResponse<T,string|number>[],
  dataTable: T[],
  sortData: (data: T[]) => void;
}

export const TableUsers: React.FC<TableUsersProps<User|Point>> = ({title, dataTable, sortData}) => {
  return (
    <table className="styleTable">
      <thead>
        <tr>
          {title.map((property, index) => (
            <th key={index}>
              {property.titleName}
              {property.tableSort && <button className='styleButton' onClick={() => sortData(property.tableSort!(dataTable))}></button>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataTable.map((user, rowIndex) => (
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

