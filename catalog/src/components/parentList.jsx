import './parentList.css'
import cn from 'classnames'


export function ParentList({data, parentId, onAddParent,sections, onAddsections}){
  function handleChangeValue(event){
    const value = Number(event.target.id)
    const isChecked = event.target.checked
      if(isChecked){
        onAddParent([...parentId, value])
      } else{
        onAddParent(parentId.filter(el => el !== value))
     }
  }

  const handleArrowClick = (itemId) => {
    onAddsections((prevExpandedItems) =>{
      if(prevExpandedItems.includes(itemId)){
       return prevExpandedItems.filter((id) => id !== itemId)
      }else{
       return [...prevExpandedItems, itemId]
      }}
      
    );
  };
      return <ul className={cn({
        list: true,
        arrowDown: true
        })}>{
        data.map(item => {
          return <li >
            <span className={cn({
              arrow: true,
              arrowDown: sections.includes(item.id),
              none: item.children.length === 0
            })}
            onClick={() => handleArrowClick(item.id)}
            />
            <label>
              <input
              id={item.id}
              type='checkbox'  
              checked={parentId.includes(item.id)}
              onChange={handleChangeValue}
              />
              <span>
                {item.name}
              </span>
            </label>{
            sections.includes(item.id) &&
              (<ParentList 
              data={item.children}
              parentId={parentId}
              onAddParent={onAddParent}
              sections={sections}
              onAddsections={onAddsections}
            /> )}
            </li>
        })
      }</ul>
}