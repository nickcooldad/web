import { definitionOnYear } from "./definitionOnYear"

describe('проверка написания количества лет в зависимости от года', () => {
    test('1 год', () => { 
        const result = definitionOnYear(1)
        expect(result).toBe('год')
     })

     test('5 лет', () => { 
        const result = definitionOnYear(5)
        expect(result).toBe('лет')
     })

     test('23 года', () => { 
        const result = definitionOnYear(23)
        expect(result).toBe('года')
     })
     
     test('11 лет', () => { 
        const result = definitionOnYear(11)
        expect(result).toBe('лет')
     })
})