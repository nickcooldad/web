import { useState } from "react"
import { ParentList } from "./parentList"
import cn from 'classnames'
export function ListItem({ id, dict, selectedIds, toggleId }) {

  const [expanded, setExpanded] = useState(false)


  return (
    <li key={id}>
      <span
        className={cn({
          arrow: true,
          arrowDown: expanded,
          none: dict[id].children.length === 0
        })}
        onClick={() => setExpanded(prev => !prev)}
      />
      <label>
        <input
          id={id}
          type='checkbox'
          onChange={() => toggleId(id)}
          checked={selectedIds.includes(id)}
        />
        <span>
          {dict[id].name}
        </span>
      </label>
      {
        expanded && (
          <ParentList
            ids={dict[id].children}
            dict={dict}
            selectedIds={selectedIds}
            toggleId={toggleId}
          />
        )
      }
    </li>
  )
}