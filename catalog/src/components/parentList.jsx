import x from './categories.json'

export function ParentList({data}){
      return <ul>{
        data.map(item => {
          return <li>
            {item.name}
            <ParentList data={x.filter(el => el.parentId === item.id)} />
            </li>
        })
      }</ul>
    
}  