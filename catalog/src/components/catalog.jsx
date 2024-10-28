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
  //console.log(selectedIds)


  function toggleId(event, item) {

    const value = event.target.id

    setSelectedIds(prev => {
      if(!selectedIds.includes(value)){
        
        const addChildId = (id) => {
        let result = [id]
          categoriesDict[id].children.forEach(childId => {
            result = [...result, ...addChildId(childId)]
          })
        return result
      }

      const addParenId = (id, selectedItems) => {
        const parentId = categoriesDict[id].parentId;
        if (parentId !== null && categoriesDict[parentId].children.every(childId => selectedItems.includes(childId))) {
          return [parentId, ...addParenId(parentId, [...selectedIds, parentId])]
          } else{ 
          return []
          }
        }
      
      return [...prev, value, ...addChildId(value), ...addParenId(value, [...prev, value])]

  } else{
    
    const removeChildIds = (id) => {
      let ids = [id];
      categoriesDict[id].children.forEach(childId => {
        ids = [...ids, ...removeChildIds(childId)]
      });
      return ids;
    };

    const removeParentIds = (id) => {
      const parentId = categoriesDict[id].parentId;
      if (parentId && categoriesDict[parentId].children.some(childId => !removeChildIds(value).includes(childId))) {
        return [parentId, ...removeParentIds(parentId)];
      }
      return [];
    };

     return prev.filter(id => !removeChildIds(value).includes(id) && !removeParentIds(value).includes(id))
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
  