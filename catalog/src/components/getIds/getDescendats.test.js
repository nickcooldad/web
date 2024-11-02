
import { getDescendants } from "./getDescendats"






describe('getDescendats', () => {
  const dict = {
    '1': { parentId: null, name: 'name1', url: 'https1', children: ['2', '3', '4'] },
    '2': { parentId: '1', name: 'name2', url: 'https2', children: [] },
    '3': { parentId: '1', name: 'name3', url: 'https3', children: ['5', '6'] },
    '4': { parentId: '1', name: 'name4', url: 'https4', children: [] },
    '5': { parentId: '3', name: 'name5', url: 'https5', children: [] },
    '6': { parentId: '3', name: 'name6', url: 'https6', children: [] }
  }

  test('У категории нет детей', () => {
    expect(getDescendants(dict, '4').sort()).toEqual(['4'])
  })

  test('У категории есть только свои дети', () => {
    expect(getDescendants(dict, '3').sort()).toEqual(['3', '5', '6'])
  })

  test('У категории есть дети и у них есть свои дети', () => {
    expect(getDescendants(dict, '1').sort()).toEqual(['1', '2', '3', '4', '5', '6'])
  })
})