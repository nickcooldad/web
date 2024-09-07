import { defineInDays } from "../defenitionOnDayInYear/defineInDays";

describe('defineInDays', () => {
    test.skip('February(2024)', () =>{
        const month = 1
        const year = 24
        const expectedResult = 29

        expect(defineInDays(year, month)).toBe(expectedResult)
    })

    test.skip('February(2025)', () => {
        const month = 1
        const year = 25
        const expectedResult = 28

        expect(defineInDays(year, month)).toBe(expectedResult)
    })

})