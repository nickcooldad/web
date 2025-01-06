function spy<T, U>(fn: (...arg: T[] extends keyof object?) => U) : (arg: T) => U {
  
  const argsArr: (string | number)[] = []
  const resultFn: (string | number)[] = []
  let counter: number = 0

  function spyOn(...args: T[] extends string | number): U {
    const result = fn(...args)
    counter++
    argsArr.push(...args)
    resultFn.push(result)
    return result
  }
  
  spyOn.callCount = () : number => counter
  spyOn.wasCalledWith = (arg: string | number) : boolean => argsArr.includes(arg)
  spyOn.returned = (arg : string | number) : boolean => resultFn.includes(arg)

  return spyOn
}

// function repeat(str : string, count : number) : string {
//   return str.repeat(count);
// }

const spyRepeat = spy(repeat);

console.log(spyRepeat("abc", 2)); // === "abcabc"
console.log(spyRepeat("xx", 4)); // === "xxxxxxxx"

console.log(spyRepeat.callCount()); // === 2

console.log(spyRepeat.wasCalledWith("abc")); // === true
console.log(spyRepeat.wasCalledWith(4)); // === true
console.log(spyRepeat.wasCalledWith(5)); // === false

console.log(spyRepeat.returned("xxxxxxxx")); // === true
console.log(spyRepeat.returned("qwerty")); // === false
