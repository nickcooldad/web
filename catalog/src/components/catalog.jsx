import { ParentList } from './parentList';
import x from './categories.json'

console.log(x);

export function Catalog(){
  return(
    <div>
      <ParentList data={x.filter(item => item.parentId === undefined)}/>
    </div>
  )
   // console.log(searchParentItem(responseParent))

    // const renderCategory = (category) => {
    //   const children = x.filter(item => item.parentId === category.id)
    //   return <div> 
    //          <div>{category.name}</div>
    //          <div>{
    //           children.length > 0 ?? children.map(child => renderCategory(child))
    //           }</div>
    //        </div>
    // }
  }