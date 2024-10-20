import x from './categories.json'

export function ParentList({data, parentId, onAddParent}){

  function handleChangeValue(event){
    const value = event.target.id
    const isChecked = event.target.checked
      if(isChecked){
        onAddParent([...parentId, value])
      } else{
        onAddParent(parentId.filter(el => el !== value))
     }
  }

      return <ul>{
        data.map(item => {
          return <li> 
            <label>
              <input
              id={item.id}
              type='checkbox' 
              checked={parentId.includes(String(item.id))}
              onChange={handleChangeValue}
              />
              <span>
                {item.name}
              </span>
            </label>{
            parentId.includes(String(item.id)) &&
            (<ParentList 
            data={x.filter(el => el.parentId === item.id)}
            parentId={parentId}
            onAddParent={onAddParent}
            /> )}
            </li>
        })
      }</ul>
}