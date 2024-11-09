
export function getAncestors(dict, selectedIds, id) {
    const parentId = dict[id].parentId;
    if (parentId !== null && dict[parentId].children.filter(el => el !== id).every(childId => selectedIds.includes(childId))) {
      return [parentId, ...getAncestors(dict, selectedIds,  parentId)]
      } else{ 
      return []
      } 
}
