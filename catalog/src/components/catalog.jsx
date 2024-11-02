import { ParentList } from './parentList';
import x from './categories.json'
import { useState } from 'react';
import { createData, createDataParentId } from './createData';

//          1
//       /  |  \ 
//      2   3   4
//         / \
//        5   6
//       / \
//      7   8


// id = 3 → removeAndAddChildId → [3, 5, 6, 7, 8]
// getDescendants(dict, id)

// id = 5 → removeParentIds     → [1, 3] или ([3], [])
// getAncestors(dict, selectedIds, id)

export function Catalog(){
  const topLevelIds = createDataParentId(x)
  const categoriesDict = createData(x)

  
  const [selectedIds, setSelectedIds] = useState([]);

  const removeAndAddChildId = (id) => {
    let result = [id]
      categoriesDict[id].children.forEach(childId => {
        result = [...result, ...removeAndAddChildId(childId)]
      })
    return result
  }

  function toggleId(value) {

    setSelectedIds(prev => {
      if(!prev.includes(value)){
        
      const addParenId = (id, selectedItems) => {
        const parentId = categoriesDict[id].parentId;
        if (parentId !== null && categoriesDict[parentId].children.every(childId => selectedItems.includes(childId))) {
          return [parentId, ...addParenId(parentId, [...prev, parentId])]
          } else{ 
          return []
          }
        } 

      return [...prev, value, ...removeAndAddChildId(value), ...addParenId(value, [...prev, value])]

  } else{
    
    const removeParentIds = (id) => {
      const parentId = categoriesDict[id].parentId;
      if (parentId && categoriesDict[parentId].children.some(childId => !removeAndAddChildId(value).includes(childId))) {
        return [parentId, ...removeParentIds(parentId)];
      }
      return [];
    };

     return prev.filter(id => !removeAndAddChildId(value).includes(id) && !removeParentIds(value).includes(id))
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
  