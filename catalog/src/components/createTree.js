
export function createTree(data, parentId = undefined) {
    
    return data
      .filter(item => item.parentId === parentId)
      .map(item => ({...item, children: createTree(data, item.id)
      }));
  }