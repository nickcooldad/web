// function reduce<T>(array: T[], callback: (acc: T, item: T, index: number, array: T[]) => T): T;
// function reduce<T, U>(array: T[], callback: (acc: U, item: T, index: number, array: T[]) => U, initialValue: U): U;
// function reduce<T, U>(array: T[], callback: (acc: T | U, item: T, index: number, array: T[]) => T | U, initialValue?: T | U): T| U

function reduce<T>(array: T[], callback: (acc: T, item: T, index: number, array: T[]) => T): T;
function reduce<T, U>(array: T[], callback: (acc: U, item: T, index: number, array: T[]) => U, initialValue: U): U;

// https://github.com/WebKit/WebKit/blob/18fc2c8a829238a023b22f9c584ce09756d4b757/Source/JavaScriptCore/builtins/ArrayPrototype.js#L27

function reduce(array, callback, initialValue?) {
  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = arguments.length > 2 ? initialValue : array[0];
  let startIndex = arguments.length > 2 ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// 10

console.log(reduce([], (a, b) => a + b, 0));
// 0

console.log(reduce([], (a, b) => a + b));
// TypeError: Reduce of empty array with no initial value

console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a }), {}));

// { "c": { "b": { "a": {} } } }
//console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a })));
//console.log(["a", "b", "c"].reduce((a, b) => ({ [b]: a })));
// { "c": { "b": "a"} }

