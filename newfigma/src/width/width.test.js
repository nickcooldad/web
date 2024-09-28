
import { width } from './width.js';

describe('getWidth', () => {
    test.skip('value равно в точности одному из порогов', () => {
        const thresholds = [10, 50, 100];
        const value = 50;
        const result = width(thresholds, value)

        // ===========
        // |----|----|----|
        // 0   10   50    100

        expect(result).toBeCloseTo(66.6666)
    });

    test.skip('value между порогами', () => {
        const thresholds = [10, 30, 50, 80, 120]
        const value = 100
        const result = width(thresholds, value)
        
        // ==============
        // /---/---/---/---/---/
        //0   10  30  50  80  120
        expect(result).toBeCloseTo(90)
    });

    test.skip('value равно последнему элементу', () => {
        const thresholds = [10, 50, 100]
        const value = 100
        const result = width(thresholds, value)

        expect(result).toBeCloseTo(100)
    })
    test('value меньше порога первого отрезка', () => {
        const thresholds = [10, 30, 60, 100, 200, 1000]
        const value = 5
        const result = width(thresholds, value)
 // ==============
        // /---/---/---/---/---/---/
        //0   10  30  60 100  200 1000
        expect(result).toBeCloseTo(8.3333)
    })
})