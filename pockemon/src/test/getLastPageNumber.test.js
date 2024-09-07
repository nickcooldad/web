import {getLastPageNumber} from "./getLastPageNumber";

describe('getLastPageNumber', () => {

  test('count = 15, size = 3', () => {
    // 0: 1 2 3
    // 1: 4 5 6
    // 2: 7 8 9
    // 3: 10 11 12
    // 4: 13 14 15  ← lastNumberPage

    const result = getLastPageNumber(15, 3);
    expect(result).toBe(4);
  });

  test('count = 20, size = 3', () => {
    // 0: 1 2 3
    // 1: 4 5 6
    // 2: 7 8 9
    // 3: 10 11 12
    // 4: 13 14 15
    // 5: 16 17 18
    // 6: 19 20     ← lastNumberPage

    const result = getLastPageNumber(20, 3);
    expect(result).toBe(6);
  });

  test('count = 3, size = 3', () => {
    // 0: 1 2 3  ← lastNumberPage

    const result = getLastPageNumber(3, 3);
    expect(result).toBe(0);
  });

  test('count = 3, size = 5', () => {
    // 0: 1 2 3  ← lastNumberPage

    const result = getLastPageNumber(3, 5);
    expect(result).toBe(0);
  });

})