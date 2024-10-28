import { ParentList } from './parentList';
import x from './categories.json'
import { useState } from 'react';
import { createData, createDataParentId } from './createTree';

export function Catalog(){
  const topLevelIds = createDataParentId(x)
  const categoriesDict = createData(x)

  
  const [selectedIds, setSelectedIds] = useState([]);

  function toggleId(event) {

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
  