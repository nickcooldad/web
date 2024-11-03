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
      if(!prev.includes(value)){
      return [
        ...prev, 
        value,
         ...getDescendants(categoriesDict, value),
         ...getAncestors(categoriesDict , [...prev, value], value)]
  } else{

      return prev.filter(id => !getAncestors(categoriesDict , [...prev, value], value).includes(id) 
      && !getDescendants(categoriesDict, value).includes(id))
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
  