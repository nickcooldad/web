
import './parentList.css'
import cn from 'classnames'
import { ListItem } from './listItem';

export function ParentList({ ids, dict, selectedIds, toggleId }) {

  return <ul className={cn({
    list: true,
    arrowDown: true
  })}>{
      ids.map(id => {
        return (
          <ListItem 
          id={id}
          dict={dict}
          selectedIds={selectedIds}
          toggleId={toggleId}
          />
        )
      })
    }</ul>
}