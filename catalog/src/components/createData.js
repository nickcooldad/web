
export function createData(data){
  let result = {}
  data.forEach(el => {
    let parent
    if(el.parentId === undefined){
      parent = null
    } else{
      parent = String(el.parentId)
    }

    result[el.id] = {parentId : parent, name : el.name, url : el.url, children : []}
  })

  data.forEach(el => {
    if(result[el.parentId] !== undefined){
    result[el.parentId].children.push(String(el.id))
  }
  })
  
  return result
}

  // topLevelIds = [1,7]

  // {
  // 1: { title, url, parent, children: [2,3]  }
  // 2: { title, url, parent, children: [3,5]  }
  // }

 export function createDataParentId(data){
    return data.filter(el => el.parentId === undefined).map(item => String(item.id))
 }