//          1
//       /  |  \ 
//      2   3   4
//         / \
//        5   6
//
//
import { createData, createDataParentId } from "./createTree"

describe('Преобразование объекта', () => {
  const testResponse = [
    { id: 4, name: 'name4', parentId: 1, url: 'https4' },
    { id: 6, name: 'name6', parentId: 3, url: 'https6' },
    { id: 3, name: 'name3', parentId: 1, url: 'https3' },
    { id: 5, name: 'name5', parentId: 3, url: 'https5' },
    { id: 1, name: 'name1', url: 'https1' },
    { id: 2, name: 'name2', parentId: 1, url: 'https2' },
  ]
  test('Массив с объектами json', () => {
    const expectedResult = {
      '1': { parentId: null, name: 'name1', url: 'https1', children: ['2', '3', '4'] },
      '2': { parentId: '1', name: 'name2', url: 'https2', children: [] },
      '3': { parentId: '1', name: 'name3', url: 'https3', children: ['5', '6'] },
      '4': { parentId: '1', name: 'name4', url: 'https4', children: [] },
      '5': { parentId: '3', name: 'name5', url: 'https5', children: [] },
      '6': { parentId: '3', name: 'name6', url: 'https6', children: [] }
    }
    const actualResult = createData(testResponse);
    Object.values(actualResult).forEach(({children}) => children.sort());
    
    expect(actualResult).toEqual(expectedResult)
  })

  test('Вывод родительских ID', () => {
    const expectedResult = ['1']

    expect(createDataParentId(testResponse)).toEqual(expectedResult)
  })
})