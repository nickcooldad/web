
export function getDescendants(dict, id) {
    let result = [id]
    dict[id].children.forEach(childId => {
      result = [...result, ...getDescendants(dict ,childId)]
    })
  return result
}

