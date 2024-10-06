import x from './categories.json'

console.log(x);

export function Catalog(){
    const responseParent = x.filter(item => item.parentId === undefined)


   // console.log(searchParentItem(responseParent))
   return <div> {
      responseParent.map(el => {
        return <div>{el.name}</div>
      })}</div>
}

