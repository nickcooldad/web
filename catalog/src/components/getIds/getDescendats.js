
export function getDescendants(dict, id) {
    let result = []
    dict[id].children.forEach(childId => {
      result = [...result, childId, ...getDescendants(dict ,childId)]
    })
  return result
}

