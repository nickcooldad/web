
export function getAncestors(dict, selectedIds, id) {
    const parentId = dict[id].parentId;
    if (parentId !== null && dict[parentId].children.every(childId => selectedIds.includes(childId))) {
      return [parentId, ...getAncestors(dict, parentId, [...selectedIds, parentId])]
      } else{ 
      return []
      } 
}