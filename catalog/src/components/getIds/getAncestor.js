
export function getAncestors(dict, selectedIds, id) {
    const parentId = dict[id].parentId;
    selectedIds.push(id)
    if (parentId !== null && dict[parentId].children.every(childId => selectedIds.includes(childId))) {
      return [parentId, ...getAncestors(dict, selectedIds,  parentId)]
      } else{ 
      return []
      } 
}
