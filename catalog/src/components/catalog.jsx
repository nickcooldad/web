import { ParentList } from './parentList';
import x from './categories.json'
import { useState } from 'react';
import { createData, createDataParentId } from './createData';
import { getAncestors } from './getIds/getAncestor';
import { getDescendants } from './getIds/getDescendats';

export function Catalog(){
  const topLevelIds = createDataParentId(x)
  const categoriesDict = createData(x)

  
  const [selectedIds, setSelectedIds] = useState([]);

  function toggleId(value) {

    setSelectedIds(prev => {
      const ancestorIds = getAncestors(categoriesDict , prev, value)
      const descendatsIds = getDescendants(categoriesDict, value)
      if(!prev.includes(value)){
      return [...new Set([
        ...prev, 
        value,
         ...descendatsIds,
         ...ancestorIds])]
  } else{
      return prev.filter(id => !ancestorIds.includes(id) 
      && !descendatsIds.includes(id) && id !== value)
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
  