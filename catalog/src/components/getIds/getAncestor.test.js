import { getAncestors } from "./getAncestor"


const dict = {
    '1': { parentId: null, name: 'name1', url: 'https1', children: ['2', '3', '4'] },
    '2': { parentId: '1', name: 'name2', url: 'https2', children: [] },
    '3': { parentId: '1', name: 'name3', url: 'https3', children: ['5', '6'] },
    '4': { parentId: '1', name: 'name4', url: 'https4', children: [] },
    '5': { parentId: '3', name: 'name5', url: 'https5', children: [] },
    '6': { parentId: '3', name: 'name6', url: 'https6', children: [] }
  }


  describe('getAncestor', () => {
    test('Выбрана категория у которой нет предка', () => {
        expect(getAncestors(dict, [], '1').sort()).toEqual([])
    })

    test('Выбираем категорию, у которой один предок, и все ее соседи уже выбраны', () => {
    //          1
    //       /  |  \ 
    //      2  ✓3  ✓4
    //         / \
    //       ✓5  ✓6
    //
        expect(getAncestors(dict, ['3', '4', '5', '6'], '2').sort()).toEqual(['1'])
    })

    test('Выбираем категорию, у которой один предок, и ее соседи не все выбраны', () => {
        //      1
    //       /  |  \ 
    //      2  ✓3  4
    //         / \
    //       ✓5  ✓6
    //
        expect(getAncestors(dict, ['3', '5', '6'], '2').sort()).toEqual([])
    })

    test('Выбираем категорию, у которой выбраны соседи предка, и все потомки', () => {
        //      1
    //       /  |  \ 
    //      ✓2  3  ✓4
    //         / \
    //       ✓5  6
    //
        expect(getAncestors(dict, ['2', '4', '5'], '6').sort()).toEqual(['1', '3'])
    })

  })


  