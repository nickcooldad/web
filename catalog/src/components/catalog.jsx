import { ParentList } from './parentList';
import x from './categories.json'
import { useState } from 'react';
import { createTree } from './createTree';


export function Catalog(){
  const parentIdArray = createTree(x)
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
  