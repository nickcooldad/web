import x from './categories.json'

export function ParentList({data, parentId, onAddParent}){

  function handleChangeValue(event){
    const value = event.target.id
    const result = new Set(parentId)
    if(result.has(value)){
      result.delete(value)
    } else{
    result.add(value)
  }
    onAddParent(result)
  }
  
      return <ul>{
        data.map(item => {
          return <li> 
            <label>
              <input
              type='checkbox' 
              id={item.id}
              checked={parentId.has(item.id)}
              onChange={handleChangeValue}
              />
              <span>
                {item.name}
              </span>
            </label>
            <ParentList 
            data={x.filter(el => el.parentId === item.id && parentId.has(el.parentId))}
            parentId={parentId}
            onAddParent={onAddParent}
            />
            </li>
        })
      }</ul>
}