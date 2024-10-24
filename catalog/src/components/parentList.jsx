import './parentList.css'
import cn from 'classnames'


export function ParentList({data, parentId, onAddParent,sections, onAddsections}){

  function handleChangeValue(event, item){
    const value = Number(event.target.id)
    const isChecked = event.target.checked

    const getChildId = (item) => {
      let childrenId = []
      if(item.children !== undefined && item.children.length > 0){
        item.children.forEach(child => {
          childrenId.push(child.id)
          childrenId = [...childrenId, ...getChildId(child)]
        })
      }
      return childrenId
    }
    const dataId = getChildId(item)
      if(isChecked){
        onAddParent([...parentId , value, ...dataId])
      } else{
        onAddParent(parentId.filter(el => el !== value && !dataId.includes(el)))
     }
  }
  console.log(parentId)
  function checedSelectChild (children) {
    if(children === undefined || children.length === 0){
      return false
    }
      return children.every(child => parentId.includes(child.id) && checedSelectChild(child.children))
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
          return <li 
          key={item.id}>
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
              checked={parentId.includes(item.id) || checedSelectChild(item.children)}
              onChange={(e) => handleChangeValue(e, item)}
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