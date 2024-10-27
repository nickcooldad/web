import { ParentList } from './parentList';
import x from './categories.json'
import { useState } from 'react';
import { createData, createDataParentId } from './createTree';

// +A
//   ✓B
//   +C
//     ✓D
//     +E
//   ✓F

export function Catalog(){
  const topLevelIds = createDataParentId(x)
  const categoriesDict = createData(x)

  
  const [selectedIds, setSelectedIds] = useState([]);
      // '1': { parentId: null, name: 'name1', url: 'https1', children: ['2', '3', '4'] },
      // '2': { parentId: '1', name: 'name2', url: 'https2', children: [] },
      // '3': { parentId: '1', name: 'name3', url: 'https3', children: ['5', '6'] },
      // '4': { parentId: '1', name: 'name4', url: 'https4', children: [] },
      // '5': { parentId: '3', name: 'name5', url: 'https5', children: [] },
      // '6': { parentId: '3', name: 'name6', url: 'https6', children: [] }
  console.log(selectedIds)


  function toggleId(event, item) {

    const value = event.target.id

    setSelectedIds(prev => {
      if(!selectedIds.includes(value)){
        const addChildId = (ids) => {
        let result = []
          ids.forEach(id => {
            result.push(id)
            result = [...result, ...addChildId(categoriesDict[id].children)]
          })
        return result
      }
      return [...prev, value, ...addChildId(categoriesDict[value].children)]
  } else{
    
    const unSelectedParentId = (id) =>{
      let result = []
      if(categoriesDict[id].parentId !== null){
        result.push(categoriesDict[id].parentId)
        result = [...result, ...unSelectedParentId(categoriesDict[id].parentId)]
      }
      return result
    }
    const unSulectedChild = (ids) => {
      let result = []
      ids.forEach(child => {
        result.push(child)
        result = [...result, ...unSulectedChild(ids.children)]
      })
      return result
    }

     return prev.filter(id => id !== value && !unSelectedParentId(value).includes(id) )
  }
    })  
  }

  return( 
    <div>
      <ParentList 
        ids={topLevelIds}
        dict={categoriesDict}
        selectedIds={selectedIds}
        toggleId={toggleId}
      />
    </div>
  )
  } 
  