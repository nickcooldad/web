import { ParentList } from './parentList';
import x from './categories.json'
import { useState } from 'react';

//console.log(x);

export function Catalog(){
  const parentIdArray = x.filter(item => item.parentId === undefined)
  const [parentId, setParentId] = useState([])
  const [sections, setSections] = useState([])
  
  return( 
    <div>
      <ParentList 
      data={parentIdArray}
      parentId={parentId}
      onAddParent={setParentId}
      sections={sections}
      onAddsections={setSections}
      />
    </div>
  )
  } 
  