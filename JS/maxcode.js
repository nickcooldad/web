//функциональное программирование - 1 (Array Methods)
function filter(array, callback) {
  let filterArray = []
  for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array)) {
         filterArray.push(array[i])
      }
  }
  return filterArray
}

//функциональное программирование - 2 (Array Methods)
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++){
     callback(array[i], i, array)
    }
  }

//функциональное программирование - 3 (Array Methods)
function map(array, callback) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i], i, array))
    }
      return newArray
  }

//функциональное программирование - 4 (Array Methods)
function zip(a, b, callback) {
  let array = []
  let lengthArray = Math.min(a.length, b.length)
  for (let i = 0; i < lengthArray; i++){
     array.push(callback(a[i], b[i]))
    }
       return array
  }

//функциональное программирование - 5 (Array Methods)
function reduce(array, callback, initialValue) {

  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

//функциональное программирование - 6 (Array Methods)

const search = (a, b) => {
  if(String(a) > String(b)) {
    return 1
  }
  if(String(a) < String(b)){
    return -1
  } else { 
    return 0
  }
}

function sort(arr, compareFn = search){
    for (let i = 0; i < arr.length; i++){
      for (let j = i; j < arr.length; j++){
           let cache = arr[i]
           if(compareFn(arr[i], arr[j]) > 0){
             arr[i] = arr[j]
             arr[j] = cache
            }
     }
    }
}

//функциональное программирование - 7 (First-class Citizens)
   function findInteger(...args) {
    let count = 1
      while(!args.every(condition => condition(count))){
       count++
         }
      return count
    }

//функциональное программирование - 8 (First-class Citizens)
function plural(declensionArray) {
  let declensionObj = {0 : 2, 1 : 0, 2 : 1, 3 : 1, 4 : 1}
  return function(quantity) {
    let lastNum = quantity.toString().at(-1)
    if (quantity > 4 && quantity < 21){
      return declensionArray[2]
    }
    if(lastNum in declensionObj){
      return declensionArray[declensionObj[lastNum]]
      }
    return declensionArray[2]
    }
  }

  function plural([one, few, many]) {
    return (num) => {
      if (num % 10 === 1 && num !== 11) {
        return one;
      }
      if (num > 10 && num < 15) {
        return many;
      }
      if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4) {
        return few;
      }
      return many;
    }
  }

//функциональное программирование - 9 (First-class Citizens)

  function query(...funct) {
    return (array) => funct.reduce(
      (acc, item) => item(acc),
      array,
    )
  }
  
  function where(obj){
    const key = Object.keys(obj)
    return (arr) => arr.filter(item => key.every(element => item[element] === obj[element]) )
  }
  
  function sort(option){
    return (arr) => arr.toSorted((a, b) => {
      if(a[option] > b[option]){
        return 1
      }
      if (a[option] < b[option]){
        return -1
    } else {
        return 0
     }
    })
  }

//функциональное программирование - 10 (First-class Citizens)

    function group(arr, isEqual) {
      const cache = []
    
      arr.forEach(element => {
        const group = cache.find(item => isEqual(element, item[0]))
    
        if(group !== undefined){
          group.push(element)
        } else {
          cache.push([element])
        }
      });
      console.log(cache)
      return cache
    }
    
//функциональное программирование - 11 (First-class Citizens)

    function groupBy(items, cb) {
     return [...items].reduce((acc, item, index) =>{
       if(!acc.has(cb(item, index))){
          acc.set(cb(item, index), [])
       }
        acc.get(cb(item, index)).push(item)
       return acc
      }, new Map())
      }

      //
      function groupBy(iterable, cb) {
        const cache = new Map();
        [...iterable].forEach((element, index) => {
          if(!cache.has(cb(element, index))){
            cache.set(cb(element, index), [])
          }
          cache.get(cb(element, index)).push(element)
        });
        return cache
      }

//функциональное программирование - 12 (First-class Citizens)

function groupBy(array, classifier, downstream, accumulatorSupplier) {
  const cache = new Map();
    [...array].forEach((item,index) => {
      const key = classifier(item, index)
      if(!cache.has(key)){
        cache.set(key, accumulatorSupplier())
         } 
    cache.set(key, downstream(cache.get(key), item))
    })
  return cache
}

//функциональное программирование - 13 (First-class Citizens)

const defoltCompare = (array) => {
  if(array.every(item => typeof item[0] === 'string')){
   return array.toSorted()
  } else {
   return array.toSorted((a, b) => a[0] - b[0])
  }
 }

function frequency(arr, options = defoltCompare) {
  const cache = new Map

  const defoltFrequency = (arr) => {
    return arr.toSorted((a, b) => options.compareTo(a[0], b[0], a[1], b[1]))
   }

  if(options.criteria !== undefined){
    arr.forEach((item, index) => {
      if(!cache.has(options.criteria(item, index))){
        cache.set(options.criteria(item, index), 0)
      }
      cache.set(options.criteria(item, index), cache.get(options.criteria(item)) +1)
    })
    if(options.compareTo !== undefined){
      return defoltFrequency([...cache])
    }
    return defoltCompare([...cache])
  }

  arr.forEach((item) => {
    if(!cache.has(item)){
      cache.set(item, 0)
    }
    cache.set(item, cache.get(item) + 1)
     
  })

  if(options.compareTo !== undefined){
    return defoltFrequency([...cache])
  }
  return defoltCompare([...cache])
  }
//
function frequency(arr, options = {}) {
  const cache = new Map
  const {
    criteria = x => x,
    compareTo = (val1, val2) => val1 > val2 ? 1 : -1,
  } = options

  arr.forEach((item) => {
    const key = criteria(item)
    if(!cache.has(key)){
      cache.set((key), 0)
    }
    cache.set(key, cache.get(key) + 1)
  })

  return [...cache].toSorted((a, b) => compareTo(a[0], b[0], a[1], b[1]))
}

function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}


  //функциональное программирование - 14 (First-class Citizens)
  function repeatGenerator(str) {
    let count = 0
    return () => {
      const result = str[count];
      
      count++
      if (count >= str.length){
        count = 0
      }
      
      return result
    }
  }

  //функциональное программирование - 15 (First-class Citizens)
  function fibonacciGenerator() {
    let count = 0
    let fibonacciArr = [0, 1]
    return () => {
      if(count > 1) {
        fibonacciArr.push(fibonacciArr[count - 1] + fibonacciArr[count - 2])
      }
      return fibonacciArr[count++]
    }
  }
//
function fibonacciGenerator() {
  let firstCount = 0 // 5 → 8
  let lastCount = 1  // 8 → 13
  return () => {
    const result = firstCount;

    [firstCount, lastCount] = [lastCount, firstCount + lastCount];
    // const sum = firstCount + lastCount
    // firstCount = lastCount
    // lastCount = sum
    return result
  }
}

  //функциональное программирование - 16 (First-class Citizens)
  function primeGenerator() {
    let num = 2
    return () => {
      while(!isPrime(num)){
       num++
       }
       return num++
    }
  }
  
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
//
function primeGenerator() {
  let num = 2
  return () => {
    const result = num

    // while(true){
    //  num++
    //  if (isPrime(num)) {
    //   break;
    //  }
    // }

    do {
      num++;
    } while (!isPrime(num))

    return result
  }
}


function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
//функциональное программирование - 17 (First-class Citizens)
  function multiPredicate(...args) {
    return (arg) => args.every(funct => funct(arg))
    }

//функциональное программирование - 18 (First-class Citizens)

function compose(...args) {
  return (variable) => args.reduceRight((acc, item) => item(acc), variable)
  }


  //функциональное программирование - 19 (First-class Citizens)

  function compose(...args) {
    return (variable) => {
      let result = variable
      for (let i = args.length - 1; i >= 0; i--){
         result = args[i](result)
      }
      return result
    }
  }
  
  //функциональное программирование - 20 (First-class Citizens)
  function once(funct) {
    let count = 0
   return (...args) => {
    if(count > 0){
      return undefined
    }
    count++
    return funct(...args)
   }
  }

//функциональное программирование - 21 (First-class Citizens)
function memo(fn) {
  const cache = new Map()
  return (args) => {
    if (cache.has(args)){
      return cache.get(args)
    }
    cache.set(args, fn(args))
    return cache.get(args)
  }
}

//функциональное программирование - 22 (First-class Citizens)
// function memo(fn) {
//   const cache = new Map();
//   return function(...arg) {
//       const key = collecting(arg)
//     if (!cache.has(key)) {
//       cache.set(key, fn(...arg));
//     }
//     return cache.get(key);
//   };
// }

// const collecting = (args) => {
//   if (Array.isArray(...args)){
//       return args.join(';')
//   }
//   if ( typeof args[0] === 'number'){
//       return +args.join('')
//   }
//   if(args !== null && typeof args[0] !== 'function' && typeof args[0] === 'object'){
//       for (let key in args){
//         return args[key]
//       }
//   } else {
//       return args.join('')
//   }
//}
//

const search1 = (array1, array2) =>  array1.length === array2.length && array1.every((_, index) => array1[index] === array2[index])


function memo(fn) {
  const cache = []
  return function(...args) {
    const objRes = cache.find((item) => search1(item.args, args))
    if(objRes === undefined){
      const result = fn(...args)
      cache.push({ args, result })
      return result;
    } 
    return objRes.result
    }
  }
//функциональное программирование - 23 (First-class Citizens)

function spy(fn) {
  
  const argsArr = new Set()
  const resultFn = new Set()
  let counter = 0

  function spyOn(...args) {
    const result = fn(...args)
    counter++
    for (let key of args){
      argsArr.add(key)
    }
    resultFn.add(result)
    return result
  }

  spyOn.callCount = () => counter
  spyOn.wasCalledWith = (arg) => argsArr.has(arg)
  spyOn.returned = (arg) => resultFn.has(arg)

  return spyOn
}


//функциональное программирование - 24 (First-class Citizens)

function join(...str) {
  return (innerStr) => {
    if(innerStr !== undefined) {
     return join(...str, innerStr)
    } else {
     return str.join(' ')
    }
  }
}

//функциональное программирование - 25 (First-class Citizens)

function sum(a) {
  function innerSum(b) {
    if(b !== undefined){
      return sum(a + b)
    }
  }
  innerSum["toString"] = () => "qwerty"
  innerSum["valueOf"] = () => a
  // innerSum[Symbol.toPrimitive] = () => a
  return innerSum
}

//функциональное программирование - 26 (First-class Citizens)
function partial(fn, ...args1) {
  return (...args2) => {
    const cache = []
    const innerArgs = args2
    for (let key of args1){
      if(key === partial.placeholder){
        cache.push(innerArgs.shift())
      } else {
        cache.push(key)
      }
    }
   return fn(...cache, ...innerArgs)
  }
}
partial.placeholder = Symbol('placeholder');
//
function partial(fn, ...args1) {
  return (...args2) => {
    const cache = []
    const memory = []
    let j = 0
    for (let i = 0; i < args1.length; i++) {
      if (args1[i] === partial.placeholder) {
        cache.push(args2[j])
        j++
      }
      else {
        cache.push(args1[i])
      }
    }
    for (let i = j; i < args2.length; i++) {
      memory.push(args2[i])
    }
    return fn(...cache, ...memory)
  }
}
partial.placeholder = Symbol('placeholder');



//функциональное программирование - 27 (First-class Citizens)
function curry(fn, ...arg) {
  if(arg.length >= fn.length){
     return fn(...arg)
  } else {
    return (...args) => curry(fn, ...arg, ...args)
     }
  }

  //функциональное программирование - 28 (First-class Citizens)
  function uncurry(fn) {
    return (...args) => { 
     let result = fn
     let count = 0
     while(typeof result() === 'function'){
      result = result(args[count])
      count++
     }
     return result(args[count])
     }
   }
   //
   function uncurry(fn) {
    return (...args) => {
      let result = fn
      let count = 0
      while (typeof result === 'function') {
        result = result(args[count])
        count++
      }
      return result
    }
  }

//рекурсия - 1 (First-class Citizens)

const objCheking = (obj) => typeof obj === 'object' &&  !Array.isArray(obj) && obj !== null

function depth(obj) {
  let depthCount = 0
  let depthMax = 0
  if(objCheking(obj)){
  for (let key in obj){
    if(obj[key] !== undefined){
      depthCount = 1 + depth(obj[key])
    }
    depthMax = Math.max(depthCount, depthMax)
  }}
  return depthMax
}
//

function depth(obj) {
  if(!objCheking(obj)){
    return 0
  }
  // let depthMax = 0
  // for (let key in obj){
  //   depthMax = Math.max(depthCount, depth(obj[key]))
  // }
  // return depthMax + 1

  const values = Object.values(obj);
  const depths = values.map(depth);
  const maxDepth = Math.max(...depths);

  return maxDepth + 1
}

// ["12", "5"].map(Number);

//рекурсия - 2 (First-class Citizens)
function sumTheTreeValues(root) {
  let result = root.value
    if(root.left !==  null){
      result += sumTheTreeValues(root.left)
    }
    if(root.right !== null){
      result += sumTheTreeValues(root.right)
    }
  return result
}
//
function sumTheTreeValues(root) {
  if(root === null){
    return 0
  }
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
}


 //рекурсия - 3 (First-class Citizens)
function maxSum(root) {
  if (!root) return 0;
  if(root.left === null){
    return root.value + maxSum(root.right)
  }
  if(root.right === null){
    return root.value + maxSum(root.left)
  }

  const leftSum = root.value + maxSum(root.left);
  const rightSum = root.value + maxSum(root.right);

  return Math.max(leftSum, rightSum)
}
//

//рекурсия 4
function deepCompare(o1, o2) {
  if (isObject(o1) && !isObject(o2)) {
    return false
  }
  if (!isObject(o1) && isObject(o2)) {
    return false
  }
  if (!isObject(o1) && !isObject(o2)) {
    return o1 === o2
  }
  if(Object.keys(o1).length !== Object.keys(o2).length){
    return false
  }

  return Object.keys(o1).every(key => deepCompare(o1[key], o2[key]))
}

function isObject(o1) {
  return o1 !== null && typeof o1 === "object" && !Array.isArray(o1);
}
//
function deepCompare(o1, o2) {
  // if (isObject(o1) && !isObject(o2)) {
  //   return false
  // }
  // if (!isObject(o1) && isObject(o2)) {
  //   return false
  // }
  // if (!isObject(o1) && !isObject(o2)) {
  //   return o1 === o2
  // }

  if (!isObject(o1) || !isObject(o2)) {
      return o1 === o2
  } 

  if(Object.keys(o1).length !== Object.keys(o2).length){
    return false
  }

  return Object.keys(o1).every(key => deepCompare(o1[key], o2[key]))
}

function isObject(o1) {
  return o1 !== null && typeof o1 === "object" && !Array.isArray(o1);
}

//рекурсия 5
function smartSum(arr) {
  return arr.reduce((acc, item) => 
  acc + (Array.isArray(item) ? smartSum(item) : item), 0)
 }

 //рекурсия 6
 function flattenArr(arr, depth = 1) {
  if(depth <= 0){
    return arr
  }
  let result = []
  for (let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenArr(item, depth - 1))
    } else{
      result.push(item)
    }
  }
  return result
}
//
 //рекурсия 6
 function flattenArr(arr, depth = 1) {
  if(depth <= 0){
    return arr.slice()
  }
  let result = []
  for (let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenArr(item, depth - 1))
    } else{
      result.push(item)
    }
  }
  return result
}

//рекурсия 7
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function recordDepth(obj, depth = 0) {
  obj.depth = depth
  for(let key in obj){
    if(isObj(obj[key])){
     recordDepth(obj[key], depth + 1)
    }
  }
  return obj
}
//
//рекурсия 7
const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function recordDepth(obj, depth = 0) {
  if(!isObj(obj)){
     return obj;
  }
  obj.depth = depth
  for(let key in obj){
    recordDepth(obj[key], depth + 1)
  }
  return obj
}
//рекурсия 8
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function flattenObj(obj, keysArray = []) { 
 const flattObj = {}
 for (const key in obj){
  if(isObj(obj[key])){
    const innerFlatt = flattenObj(obj[key], [...keysArray, key])
      for(const keys in innerFlatt){
        flattObj[keys] = innerFlatt[keys]
      }
  } else {
    flattObj[[...keysArray, key].join('/')] = obj[key]
  }
 }
 return flattObj
}
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function flattenObj(obj, keysArray = []) { 
  const flattObj = {}
  for (const key in obj){
   if(isObj(obj[key])){
      const innerFlatt = flattenObj(obj[key], [...keysArray, key])
      //  for(const keys in innerFlatt){
      //    flattObj[keys] = innerFlatt[keys]
      //  }
     Object.assign(flattObj, innerFlatt)
      
   } else {
     flattObj[[...keysArray, key].join('/')] = obj[key]
   }
  }
  return flattObj
 }

//
//рекурсия 9

function isBST(root, min = -Infinity, max = Infinity) {
  if(root === null){
    return true
  }

  return root.value > min && root.value < max
    && isBST(root.left, min, root.value)
    && isBST(root.right, root.value, max)
}

//рекурсия 10
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function clone(obj, link = new Map()) {
  if (!isObj(obj)) {
    return obj
  }
  if (link.has(obj)) {
    return link.get(obj);
  }
  const newObj = {}
  link.set(obj, newObj)
  for (let key in obj) {
    newObj[key] = clone(obj[key])
  }
  return newObj
}

//рекурсия 11
function countChange(money, coins) {
  if (money === 0){
    return 1
  }
  if(money < 0 || coins.length === 0) {
    return 0
  }
  
  return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
  }

//рекурсия 12

function countChange(money, coins, counts = []) {
  if (money === 0){
    return [counts.join('+')]
  }
  if(money < 0 || coins.length === 0) {
    return []
  }
  return [...countChange(money - coins[0], coins, [...counts, coins[0]]), ...countChange(money, coins.slice(1), counts)]
}

//рекурсия 14
  const sum = (arr) => arr.reduce((acc, item) => acc + item, 0)
  function combos(num, comboArr = [], result = []) {
  if(sum(comboArr) === num){
    result.push(comboArr)
    return result
  }
  if(sum(comboArr) > num){
    return result
  }
  
  for (let i = comboArr[comboArr.length - 1] ??= 1; i <= num; i++){
    combos(num, [...comboArr, i], result)
  }
  return result
}
///////

function combos(num, min = 1) {
  if (num === 0) {
    return [[]];
  }
  const result = []
  for (let i = min; i <= num; i++) {
    result.push(...combos(num - i, i).map(arr => [i, ...arr]));
  }
  return result;
}
// backtracking
// https://www.youtube.com/watch?v=REOH22Xwdkk
// https://www.youtube.com/watch?v=s7AvT7cGdSo

//рекурсия 15
const isArr = (arr) => arr !== undefined && arr.length !== 0

function id2children(catalog) {
  let result = {}
  if (isArr(catalog.children)){
    result[catalog.id] = catalog.children.map(item => item.id)
    for (key of catalog.children){
      const id = id2children(key)
      Object.assign(result, id)
    }
  } else {
      result[catalog.id] = []
    }
  return result
}
  ///
  function id2children(catalog) {
    const result = {}
    result[catalog.id] = catalog.children.map(item => item.id)
    for (const child of catalog.children) {
      const childResult = id2children(child)
      Object.assign(result, childResult)
    }
    return result
  }
//рекурсия 16
//const isArr = (arr) => arr !== undefined && arr.length !== 0

function id2parent(catalog, parent = null) {
let result = {}
result[catalog.id] = parent
if(isArr(catalog.children)){
  for (key of catalog.children){
    result[key.id] = parent
    Object.assign(result, id2parent(key, catalog.id))
  }
}
return result
}
/////

function id2parent(catalog, parent = null) {
  const result = {}
  result[catalog.id] = parent
  for (const child of catalog.children) {
    Object.assign(result, id2parent(child, catalog.id))
  }
  return result
}

 
//рекурсия 17

//const isArr = (arr) => arr !== undefined && arr.length !== 0

function findNote(catalog, id, prev = [catalog.name]) {
  let result = []
if (catalog.id === id){
  return prev
}

if(isArr(catalog.children)){
  for (key of catalog.children){
     result.push(...findNote(key, id, [...prev, key.name]))
      }
  } 

  return result
}
/////

function findNote(catalog, id, prev = [catalog.name]) {
  if (catalog.id === id) {
    return prev
  }
  for (key of catalog.children) {
    const crumbs = findNote(key, id, [...prev, key.name])
    if (crumbs !== null) {
      return crumbs
    }
  }
  return null;
}

// https://www.youtube.com/watch?v=pV2kpPD66nE


//рекурсия 18
function findNote(catalog, id, prev = []) {
  for(const child of catalog.children){
    if(catalog.id === id){
      prev.push(child.id)
      findNote(child, child.id , prev)
    }
    findNote(child, id, prev)
  }
  return prev
}
////
function descendants(catalog, id) {
  return searchParent(findNote(catalog, id))
  }

function findNote(catalog, id){
  if(catalog.id === id){
     return catalog
  }
  for(const child of catalog.children){
  const childResult = findNote(child, id)
    if(childResult !== undefined){
     return childResult
    }
  }
}

function searchParent(obj){
  const cache = []
  for(const child of obj.children){
    cache.push(child.id)
    const resultChild = searchParent(child)
    cache.push(...resultChild)
  }
  return cache
 }

//рекурсия 19

function maxArea(grid){
  let count = 0
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if (grid[i][j] === 1){
        count += dfs(grid, i, j)
      }
    }
  }

  function dfs(grid,row,col){
    if(row < 0 || row > grid.length -1 || col < 0 || col > grid[row].length -1 || grid[row][col] === 0){
      return;
    }

    grid[row][col] = 0

    dfs(grid, row + 1, col)
    dfs(grid, row - 1, col)
    dfs(grid, row, col + 1)
    dfs(grid, row, col - 1)
    dfs(grid, row + 1, col + 1)
    dfs(grid, row + 1, col - 1)
    dfs(grid, row - 1, col + 1)
    dfs(grid, row - 1, col - 1)

    return true
  }
return count
}
///
function dfs(grid,row,col){
  if(row < 0 || row > grid.length -1 || col < 0 || col > grid[row].length -1 || grid[row][col] === 0){
    return;
  }

  grid[row][col] = 0

  dfs(grid, row + 1, col)
  dfs(grid, row - 1, col)
  dfs(grid, row, col + 1)
  dfs(grid, row, col - 1)
  dfs(grid, row + 1, col + 1)
  dfs(grid, row + 1, col - 1)
  dfs(grid, row - 1, col + 1)
  dfs(grid, row - 1, col - 1)

  return 1
}

function countIslands(grid){
    let count = 0
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        if (grid[i][j] === 1){
          count += dfs(grid, i, j)
        }
      }
    }
  
  return count
  }

//рекурсия 20
function maxArea(grid){
  let count = 0
  let maxCount = 0
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if (grid[i][j] === 1){
        dfs(grid, i, j)
        maxCount = Math.max(maxCount, count)
        count = 0
      }
    }
  }

  function dfs(grid,row,col){
    if(row < 0 || row > grid.length -1 || col < 0 || col > grid[row].length -1 || grid[row][col] === 0){
      return;
    }
   
    grid[row][col] = 0
    count++

    dfs(grid, row + 1, col)
    dfs(grid, row - 1, col)
    dfs(grid, row, col + 1)
    dfs(grid, row, col - 1)
    dfs(grid, row + 1, col + 1)
    dfs(grid, row + 1, col - 1)
    dfs(grid, row - 1, col + 1)
    dfs(grid, row - 1, col - 1)
  }
  return maxCount
}
////
function maxArea(grid){
  let maxCount = 0
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if (grid[i][j] === 1){
       maxCount = Math.max(maxCount, dfs(grid, i, j))
      }
     }
   }
  return maxCount
}

function dfs(grid,row,col){
   if(row < 0 || row > grid.length -1 || col < 0 || col > grid[row].length -1 || grid[row][col] === 0){
    return 0;
  }

  grid[row][col] = 0

  return 1 +
  dfs(grid, row + 1, col) +
  dfs(grid, row - 1, col) +
  dfs(grid, row, col + 1) +
  dfs(grid, row, col - 1) +
  dfs(grid, row + 1, col + 1) +
  dfs(grid, row + 1, col - 1) +
  dfs(grid, row - 1, col + 1) +
  dfs(grid, row - 1, col - 1)
}
//рекурсия 21
function checkWord(board, word) {
  let checkWords = false
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
        if(word[0] === board[i][j]){
          if(dfs(board, i, j, 0, new Set())){
            checkWords = true
          }
         
         }
      }
    }
    function dfs(board, row, col, index, cache){
      if (index === word.length){
        return true
      }
      if(row < 0 || row > board.length - 1 || col < 0 || col > board[row].length - 1 || word[index] !== board[row][col] || cache.has([row, col].join(','))){
        return false;
      }
      cache.add([row, col].join(','))
      let result = dfs(board, row + 1, col , index + 1, cache) ||
      dfs(board, row - 1, col, index + 1, cache) ||
      dfs(board, row, col + 1, index + 1, cache) ||
      dfs(board, row, col - 1, index + 1, cache) ||
      dfs(board, row + 1, col + 1, index + 1, cache) ||
      dfs(board, row + 1, col - 1, index + 1, cache) ||
      dfs(board, row - 1, col + 1, index + 1, cache) ||
      dfs(board, row - 1, col - 1, index + 1, cache)
      cache.delete([row, col].join(','))
       
      return result
      }
    
    return checkWords
  }
  //
  function dfs(board, row, col, index, word){
    if (index === word.length){
      return true
    }
    if(row < 0 || row > board.length - 1 || col < 0 || col > board[row].length - 1 || word[index] !== board[row][col] || board[row][col] === ''){
      return false;
    }
  
    let memory = board[row][col]
    board[row][col] = ''
    let result = [[row - 1,col], [row + 1, col], [row,col + 1], [row,col - 1], [row - 1,col - 1], [row - 1,col + 1], [row + 1,col - 1], [row + 1,col + 1]]
      .some(([row, col]) => dfs(board, row, col, index +1, word))
    board[row][col] = memory
     
    return result
    }
  
  function checkWord(board, word) {
    for(let i = 0; i < board.length; i++){
       for(let j = 0; j < board[i].length; j++){
        if(dfs(board, i, j, 0, word)){
          return true
        }
      }
    }
    return false
  }

  //рекурсия 21
function minPath(grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  
  const dp = Array.from({length : rowLength}, () => Array.from({length : colLength}))
  dp[0][0] = grid[0][0];
  
  for (let col = 1; col < colLength; col++) {
    dp[0][col] = dp[0][col - 1] + grid[0][col];
  }
  
  for (let row = 1; row < rowLength; row++) {
    dp[row][0] = dp[row - 1][0] + grid[row][0];
    for (let col = 1; col < colLength; col++) {
      dp[row][col] = grid[row][col] + Math.min(dp[row - 1][col], dp[row][col - 1]);
    }
  }
  return dp[rowLength - 1][colLength - 1];
}
/////
function minPath(grid, row = grid.length - 1, col = grid[0].length - 1, dp = Array.from({length: grid.length}, () => Array.from({length: grid[0].length}))) {
  if (row < 0 || col < 0){
    return Infinity;
  }
  if (row === 0 && col === 0){
   return grid[row][col];
  }
  if(dp[row][col] !== undefined){
    return dp[row][col]
  }
  dp[row][col] = grid[row][col] + Math.min(
    minPath(grid, row - 1, col, dp),
    minPath(grid, row, col - 1, dp),
  );
  return dp[row][col]
}

//рекурсия 22
function permutations(str) {
  if (str.length === 1) {
    return [str];
  }
  const results = [];

  for (let i = 0; i < str.length; i++) {
    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    const perms = permutations(remainingChars);

    for (let j = 0; j < perms.length; j++) {
      results.push(str[i] + perms[j]);
    }
  }
  return results;
}

//////
function permutations(s) {
  if (s.length === 0) {
    return [""];
  }

  return s
    .split("")
    .flatMap((_, i) => permutations(s.slice(0, i) + s.slice(i + 1)).map(x => x + s[i]))
}

//ООП - 1
class HttpRouter {
  memory = new Map()

  addHandler(api, get, funct){
    this.memory.set(`${api},${get}`, funct)
  }

runRequest(api, get){
  if(this.memory.has(`${api},${get}`)){
    return this.memory.get(`${api},${get}`)()
   } else{
    return "Error 404: Not Found"
  }
  }
}

//ООП - 2

class QueryParams {
  #data = {}
  qwe = {}

  constructor(data) {
    if (typeof data === 'string') {
      const str = data.split('&')
      for (const key of str) {
        const [keyObj, value] = key.split('=')
        this.#data[keyObj] ??= []
        this.#data[keyObj].push(value)
      }
    } else {
      for (const key in data) {
        const value = data[key]
        this.#data[key] = [value]
      }
    }
  }

  append(key, value) {
    this.#data[key] ??= []
    this.#data[key].push(value)
  }

  toString() {
    return Object.entries(this.#data)
      .flatMap(([key, value]) => value.map(item => `${key}=${item}`))
      .join('&')
  }


  get(key) {
    if (this.#data.hasOwnProperty(key)) {
      return this.#data[key][0]
    }
    return null;
  }
  getAll(key) {
    // return this.#data.hasOwnProperty(key) ? this.#data[key] : []
    return this.#data[key] ?? []
  }
  set(key, value) {
    // if (this.#data.hasOwnProperty(key)) {
    //   delete this.#data[key]
    // }
    this.#data[key] = [value]
  }

  delete(key) {
    delete this.#data[key]
  }

  has(key, value) {
    if(value === undefined){
     return this.#data.hasOwnProperty(key)
    }
    if(this.#data.hasOwnProperty(key)){
      return this.#data[key].includes(value)
    }
    return false
  }
}


//ООП - 3
class Randomizer {
  #memory;
  constructor(...args){
    if(args.length > 2){
      throw new Error('Много аргументов')
    }

    if(args.length === 0){
      throw new Error('Мало аргументов')
    }

    if(args.some(item => typeof item !== 'number')){
      throw new Error('Аргумент не число')
    }

    if(args.some(item => !Number.isInteger(item))){
      throw new Error('Число не целое')
    }

    if(args[0] > args[1]){
      throw new Error('Левая граница больше правой')
    }


    const [min, max] = args.length === 1 ? [0, args[0]] : args;

    // const minLength = args.length === 1 ? args[0] + 1 : args[1] - args[0] + 1;
    // const min = args.length === 1 ? 0 : args[0];

    this.#memory = Array(max - min + 1).fill(0).map((_, i) => min + i)
    this.#memory.sort(() => Math.random() - 0.5);

    // shuffle array
  }

  next(){    
    if(this.#memory.length === 0){
      throw new Error('Error')
    }
    //let random = Math.floor(Math.random() * this.#memory.length)
    //let result = this.#memory[random]
    return this.#memory.pop()
    }
  }

  //ООП-4
  function Tuple(...items) {
    // if (!(this instanceof Tuple)) {
    //   return new Tuple(...items);
    // }
    if(new.target === undefined){
      return new Tuple(...items);
    }
    this.items = items;
  }

  Tuple.prototype.equals = function(other) {
    if (!(other instanceof Tuple)) {
      return false;
    }
  
    if (this.items.length !== other.items.length) {
      return false;
    }
  
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] !== other.items[i]) {
        return false;
      }
    }
    return true;
  };

  // ООП - 5
  class VersionManager {
    constructor(arg = "0.1.0"){
        this.arg = [arg.split('.').map(Number)]
      }
    
    major(){
     const [major] = this.arg.at(-1)
      this.arg.push([major + 1, 0, 0])
      return this
    }
  
    minor(){
      const [major, minor] = this.arg.at(-1)
      this.arg.push([major, minor + 1, 0])
      return thisv
    }
  
    patch(){
      const [major, minor, patch] = this.arg.at(-1)
      this.arg.push([major, minor, patch + 1])
      return this
    }
  
    rollback(){
      if(this.arg.length <= 1){
        throw new Error('Cannot rollback!');
      }
        this.arg.pop()
        return this
    }
  
    release(){
      return this.arg.at(-1).join('.')
    }
  }


  //ООП - 6
  class BrowserHistory {
    constructor(url) {
      this.history = [url];
      this.currentIndex = 0
    }
    
    visit(url) {
      // this.history = this.history.slice(0, this.currentIndex + 1)
      this.history.length = this.currentIndex + 1;
      this.history.push(url);
      this.currentIndex++
      return url;
    }
    
    back() {
      if (this.currentIndex === 0) {
        return null;
      }
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    
    forward() {
      if (this.currentIndex === this.history.length - 1) {
        return null
      }
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
  }

  //ООП - 7
  
  function createCounter() {
    let curent = 0
    return {
      get count (){s
        return curent++
      },
    }
  }

//ООП - 8

function Person(firstName, lastName) {
  // this = { __proto__: Person.prototype }
  this.firstName = firstName
  this.lastName = lastName
  // return this
}

Object.defineProperty(Person.prototype, 'fullName', {
  set(full) {
    let [name, family] = full.split(' ')
    this.firstName = name
    this.lastName = family
  },
  get() {
    return `${this.firstName} ${this.lastName}`
  },
})

// ООП - 9
function objectAssign(target, ...sources) {
  sources.forEach(source => {
    let properties = {}
    Object.keys(source).forEach(element => {
      properties[element] = Object.getOwnPropertyDescriptor(source, element)
    });
    Object.defineProperties(target, properties)
  })
}

//ООП - 10
function groupBy(iterable, cb) {
  let obj = Object.create(null)
  let index = 0
  for(let item of iterable){
    const groupKey = cb(item, index)
    obj[groupKey] ??= []
    obj[groupKey].push(item)
    index++
  }
  return obj
}

// ООП - 11
function objectCreate(prototype) {
  if (typeof prototype !== 'object') {
    throw new TypeError('Object prototype may only be an Object or null');
  }
  let obj = {};
  // Object.setPrototypeOf(obj, prototype);
  obj.__proto__ = prototype;
  return obj;
}
// ООП - 12
Object.prototype.get = function (link) {
  let prev = this
  for(let item of link.split('.')){
      if(prev[item] === undefined){
          return undefined
      }
      prev = prev[item]
  }
  return prev
};
  //ООП - 13
  Object.prototype.set = function (link, target) {
    let patchObj = this
    link.split('.').forEach((key, index, array) => {
      if (index === array.length - 1) {
        patchObj[key] = target
      }
      if (!(key in patchObj)) {
        patchObj[key] = {}
      }
      patchObj = patchObj[key]
    });
  }
  
  Object.prototype.set = function (link, target) {
    let patchObj = this
    let linksArray = link.split('.')
    for (let i = 0; i < linksArray.length - 1; i++) {
      patchObj[linksArray[i]] ??= {}
      patchObj = patchObj[linksArray[i]]
    }
    patchObj[linksArray.at(-1)] = target
  }
  
  Object.prototype.set = function (patch, value) {
    const [key, ...restKeys] = patch.split('.')
  
    if(restKeys === 0){
      this[key] = value
      return
    }
  
    this[key] ??= {}
    this[key].set(restKeys.join("."), value);
  }
  //ООП - 14
  Array.prototype.map2 = function (callback, thisArg) {
    const arr = Array(this.length)
    for(let i = 0; i < this.length; i++){
      if(i in this){
        arr[i] = callback.call(thisArg, this[i], i, this)
      }
    }
    return arr
  }

  //ООП - 15
  Function.prototype.pipe = function (fn) {
    return (arg) => fn(this(arg))
    }


    Function.prototype.pipe = function (fn) {
  const thisArg = this
  return function inner(arg) {
    return  fn(thisArg(arg))
  }
}
 
Function.prototype.pipe = function (fn) {
  function inner(arg) {
    return fn(this(arg))
  }
  return inner.bind(this);
}
 
Function.prototype.pipe = function (fn) {
  return function(arg) {
    return fn(this(arg))
  }.bind(this);
}

// ООП - 16
function nouveau(constructor, ...arg) {
  let newIstance = {}
  newIstance.__proto__= constructor.prototype
  let result = constructor.apply(newIstance, arg)
  if((typeof result === 'object' || typeof result === 'function') && result !== null){
    return result
  }
  return newIstance
}
//ООП - 17
Function.prototype.call2 = function(thisArg, ...arg) {
  if(thisArg === undefined || thisArg === null){
  thisArg = globalThis
} else {
  thisArg = Object(thisArg)
}
  thisArg.launch = this
  const result = thisArg.launch(...arg)
  delete thisArg.launch
  return result
};

//ООП - 18
Function.prototype.bind2 = function (thisArg, ...args) {
  const thisLink = this
  return function (...restArgs) {
    if (thisArg === undefined) {
      return thisLink(...args, ...restArgs)
    } 
    const newThisArg = Object(thisArg)
    return thisLink.call(newThisArg, ...args, ...restArgs)
  }
}

//ООП - 19

function isInstanceOf(obj, clazz) {
  if(typeof clazz !== 'function' ){
    throw Error("Right-hand side of 'instanceof' is not an object!")
  }
  if( typeof obj !== 'object' || obj === null){
    return false
  }
  
  let proto = Object.getPrototypeOf(obj)
  while(proto !== null){
    if(proto === clazz.prototype){
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
  }

//ООП - 20

class ObservableSet extends Set {
  constructor(cb, iterable){
    super(iterable)
    this.cb = cb
  }

  add(arg){
    super.add(arg)
    this.cb?.('add', [arg]);
    return this
  }

  delete(arg){
    const result = super.delete(arg)
    this.cb('delete', [arg])
  return result
  }

  clear(){
    super.clear()
    this.cb('clear', [])
  return this
  }
}

//ООП - 21
class Cat extends Animal {
  meow() {
    return `${this.name} says meow`;
  }
}
///

function Cat (name, age){
  Animal.call(this, name, age)
}

Cat.prototype.meow = function(){
  return `${this.name} says meow`
}
console.log (Cat.prototype.__proto__)
Object.setPrototypeOf(Cat.prototype, Animal.prototype)
// Cat.prototype.__proto__ = Animal.prototype
console.log (Cat.prototype.__proto__)
//Cat.prototype = Object.create(Animal.prototype)
//Cat.prototype.constructor === Cat



// ES - 5
function Cat (name, age){
  Animal.call(this, name, age)
}
Cat.prototype = Object.create(Animal.prototype)

Cat.prototype.meow = function(){
  return `${this.name} says meow`
}

// Промисы - 1
function sum(p1, p2) {
  return p1.then(p1 => p2.then(p2 => p1 + p2))
}

//Промисы - 2
function sum(...args) {
  return Promise.all(args).then(argsArray =>
     argsArray.reduce((acc,item) => acc + item, 0))
}
////
function sum(...args){
  return args.reduce(
    (acc, item) => acc.then(value => item.then(value1 => value + value1)),
    Promise.resolve(0)
  )
}
//////
function sum(...args){
  if(args.length === 0){
    return Promise.resolve(0)
  } 

  const [first, ...rest] = args;
  return first.then(value1 => sum(...rest).then(value2 => value1 + value2))
}

//Промисы - 3
function and(p1, p2) {
  return Promise.all([p1, p2]).then(promis => promis)
}
///
function and(p1, p2){

  return new Promise((resolve, reject) => {
    let countPromise = 0

    const promisFunct = () => {
      countPromise++
      
      if(countPromise === 2){
        resolve()
      }
    }
    p1.then(promisFunct, reject)
    p2.then(promisFunct, reject)
    
  })
}
// Промисы - 4
function countFulfilledPromises(...args) {
  return Promise.allSettled(args).then(promis => promis
    .filter(item => item.status === 'fulfilled').length)
}
//
function sum(...args){
  return args.reduce((acc, item) => {
    // return item.then(value => acc.then(() => value + 1)).catch(() => acc)
    return acc.then(value => item.then(() => value + 1, () => acc))
  }, Promise.resolve(0))
}
//Промисы -5
function race(iterable) {
  return new Promise((resolve, reject) =>{
   for(const promis of iterable){
     Promise.resolve(promis).then(resolve, reject)
   }
  })
 }

 //Промисы - 6

 function all(promises) {
  return new Promise((resolve) => {
    const cache = []
    let innerCount = 0
    let promisCount = 0

    for (const promis of promises){
      const index = innerCount
      innerCount++

      Promise.resolve(promis).then(value => {
        cache[index] = value
        promisCount++

        if(promisCount === innerCount){
          resolve(cache)
        }
      })
    }

    if(innerCount === 0){
      resolve(cache)
    }
  })
}

//Промисы - 7

function all(promises) {
  return new Promise((resolve, reject) => {
    const cache = []
    let firstCount = 0
    let lastCount = 0

    for (const promis of promises){
      const index = firstCount
      firstCount++

      Promise.resolve(promis)
      .then(value => {
        cache[index] = value
        lastCount++

        if(lastCount === firstCount){
          resolve(cache)
        }
      }, error => reject(error))
    }

    if(firstCount === 0){
      resolve(cache)
    }
  })
}
//Промисы -8
function allSettled(iterable) {
  return new Promise((resolve) => {
    const cache = []
    let innerCount = 0
    let promisesCount = 0
    
    for(const promis of iterable){
      const index = innerCount
      innerCount++
      
      Promise.resolve(promis)
      .then(value => ({status: 'fulfilled', value}), reason => ({status: 'rejected', reason}))
      .then(obj => {
        cache[index] = obj
        promisesCount++
        if(innerCount === promisesCount){
          resolve(cache)
        }
       })
    }
    if(innerCount === 0){
      resolve(cache)
    }
  })
}
//Промисы - 9

function any(iterable) {
  return new Promise((resolve, reject) =>{
    const errors = []
    let innerCount = 0
    let promisesCount = 0
    for(const promise of iterable){
      const index = innerCount
      innerCount++

      Promise.resolve(promise).then(value => {
        resolve(value)
      }, error => {
        errors[index] = error
        promisesCount++

        if(promisesCount === innerCount){
          reject(new AggregateError(errors, "All promises were rejected"))
        }
      })
    }
    if(innerCount === 0){
      reject(new AggregateError(errors, "All promises were rejected"))
    }
  })
}

//Промисы - 10

function sleep(ms) {
  return (value) => new Promise(resolve => setTimeout(() => resolve(value), ms))
}

//Промисы 11
function timeLimit(fn, ms) {
  return (...value) => new Promise((resolve, reject) => {
    setTimeout(() => reject("Time Limit Exceeded"), ms)
    Promise.race([fn(...value)]).then(value => resolve(value), reason => reject(reason))
  })
}
///
function timeLimit(fn, ms){
  return (...value) => {
    return Promise.race([reason(ms), fn(...value)])
  }
}

function reason(ms){
  return new Promise((_, reject) => setTimeout(()=> reject("Time Limit Exceeded"), ms))
}
//Промисы - 12

function getState(promise) {
  return new Promise ((resolve) => {
    promise.then(() => {
      resolve('fulfilled')
    }, () => {
      resolve('rejected')
    })
    queueMicrotask(() => resolve('pending'))
 })
}

//Промисы - 13
Promise.prototype.myCatch = function(callback) {
  return this.then(undefined, callback)
}

//Промисы - 14
Promise.prototype.myFinally = function(callback) {
  return this.then(value => Promise.resolve(callback())
  .then(() => value), 
  reason => Promise.resolve(callback())
  .then(() => {
    throw reason
  }))
 }

 //Промисы - 15
 //1 - способ reduce 
 function compose(fns) {
  return (arg) => fns.reduceRight((acc, item) => acc.then(value => item(value)), Promise.resolve(arg))
 } 

//2 - способ 
function  compose(fns){
    return (arg) => fns.reduceRight(async (acc, fn) => fn(await acc), Promise.resolve(arg))
  } 
//3 - способ
 function compose(fns){
  if(fns.length === 0){
    return (x) => Promise.resolve(x)
  }
  // const [first, ...rest] = fns
  // const functRest = compose(rest)
  // return (arg) =>  functRest(arg).then(value => first(value))
  return (arg) => fns.at(-1)(arg)
    .then(value => compose(fns.slice(0, -1))(value))
 }
//4 способ
function compose(fns){
  return async (arg) => {
    let innerArg = arg
    for(let i = fns.length - 1; i >= 0; i--){
      innerArg = await fns[i](innerArg)
    }
    return innerArg
  }
}

function compose(fns){
  return fns.reduceRight(
    (acc, fn) => x => acc(x).then(fn),
    async x => x,
  );
}


// плохая статья
// https://learn.javascript.ru/call-apply-decorators

// хорошая статья
// https://blog.logrocket.com/understanding-javascript-decorators/#function-decorators

// Промисы 16
function polling(fetcher, isCompleted, delay) {
  return new Promise((resolve) =>{
    const result = setInterval(() => fetcher().then(value =>{
      if(isCompleted(value) === true){
        clearInterval(result)
        resolve(value)
      }
    }, () =>  result), delay)
  })
}

async function polling(fetcher, isCompleted, delay) {
  while (true) {
    try {
      const fetchResult = await fetcher()
      if (isCompleted(fetchResult)) {
        return fetchResult
      }
    } catch {
    }
    await new Promise(resolve => setTimeout(resolve, delay))
  }
}

function polling(fetcher, isCompleted, delay){
  return fetcher().then(value => {
    if(isCompleted(value) === true){
      return value
      }
      throw new Error
      // throw new Error()
      // throw Error()
      
      // throw Error
  }).catch(() => sleep(delay).then(() => polling(fetcher, isCompleted, delay)))
}
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
//Промисы 17
  //async function run(fns, limit) {
  //   let cache = []
  //    for(let i = 0; i < fns.length; i += limit){
  //     let functionResult = await Promise.all(fns.slice(i, i + limit).map(fn => fn()))
  //     cache.push(...functionResult)
  //     // cache.push(functionResult)
  //    }
  //   return cache
  // }  
  
  // const p1 = new Promise(resolve => resolve(1));
  // const p2 = new Promise(resolve => resolve(2));
  // const p3 = new Promise(resolve => resolve(3));
  
  // sum(p1, p2, p3).then((val) => console.log(val))
  // return fns[0]().then(x => sum += x)
  //   .then(() => fns[1]().then(x => sum += x))
  //   .then(() => fns[2]().then(x => sum += x))
  //   .then(() => fns[3]().then(x => sum += x))
  //   .then(() => fns[4]().then(x => sum += x))
  //   .then(() => sum);
  
  
  //         length === 6 limit === 2
  // function run(fns, limit) {
  //   let cache = []
  
  //   let p = Promise.resolve();
  //   for(let i = 0; i < fns.length; i += limit){
  // p = p.then(() => Promise.all(fns.slice(i, i + limit).map(fn => fn()))).then(arr => cache.push(...arr))
  //   }
  //   return p.then(() => cache);
  //}
  
  function run(fns, limit) {
    if (fns.length === 0) {
      return Promise.resolve([])
    }
  
    return Promise.all(fns.slice(0, limit).map(fn => fn()))
      .then(arr => run(fns.slice(limit), limit)
        .then(value => [...arr, ...value])
      );
  }

// Промисы - 18
function withRetry(fn, limit) {
  return async (...args) => {
    const errors = []

    while(true){
      try {
        // const resultFunction = await fn(...args)
        // return resultFunction
        return await fn(...args)
      } catch(error) {
        errors.push(error)
        if(errors.length === limit){
          throw new AggregateError(errors, "Too Many Calls")
        }
      }
    }
  }
}
///////////////
function withRetry(fn, limit){
  return async (...args) => {
    const errors = []

    for(let i = 0; i < limit; i++){
      try{
        return await fn(...args)
      } catch(error){
        errors.push(error)
      }
    }
    throw new AggregateError(errors, "Too Many Calls")
  }
}
///////////////
function withRetry(fn, limit){
  
  function inner (args, errors = []) {
    if(errors.length === limit){
      return Promise.reject(new AggregateError(errors, "Too Many Calls"))
    }

    return fn(...args).catch(error => {
      errors.push(error)
      return inner(args, errors)
    })
  }

  return (...args) => inner(args);
}

//Промисы - 19
async function run(fns, limit) {
  const results = new Array(fns.length)
  const cache = new Set()

  for (let i = 0; i < fns.length; i++) {
    const promiseFn = fns[i]()
    cache.add(promiseFn)
    promiseFn.then(value => {
      results[i] = value
      cache.delete(promiseFn)
    })
    if (cache.size >= limit) {
      await Promise.race(cache)
    }
  }
  await Promise.all(cache)
  return results
}

function run(fns, limit) {
  const { promise, resolve } = Promise.withResolvers();

  const results = [];
  let started = 0;
  let finished = 0;

  function helper() {
    if (finished === fns.length) {
      resolve(results);
      //  console.log("FINISHED", results)
    }
    if (started === fns.length) {
      return;
    }
    const i = started;
    started++;
    fns[i]().then((value) => {
      results[i] = value;
      finished++;
      helper();
    });
  }

  for (let i = 0; i < limit; i++) {
    helper();
  }

  return promise;
}

//  https://i.redd.it/sqv8b61ffod61.jpg

async function run(fns, limit) {
  const results = []
  let i = 0

  async function runer() {
    while (i < fns.length) {
      const currentIndex = i++
      const result = await fns[currentIndex]()
      results[currentIndex] = result
    }
  }

  const runners = Array.from({ length: limit }, () => runer())
  await Promise.all(runners)
  return results
}

// fns.length === 5;
// limit === 3

function run2(fns, limit) {
  const results = new Array(fns.length)
  const cache = new Set()

  const promiseFn0 = fns[0]();
  cache.add(promiseFn0);
  promiseFn0.then((value) => {
    results[0] = value;
    cache.delete(promiseFn0);
  })
  const promiseFn1 = fns[1]();
  cache.add(promiseFn1);
  promiseFn1.then((value) => {
    results[1] = value;
    cache.delete(promiseFn1);
  })
  const promiseFn2 = fns[2]();
  cache.add(promiseFn2);
  promiseFn2.then((value) => {
    results[2] = value;
    cache.delete(promiseFn2);
  })

  return Promise.race(cache).then(() => {
    const promiseFn3 = fns[3]();
    cache.add(promiseFn3);
    promiseFn3.then((value) => {
      results[3] = value;
      cache.delete(promiseFn3);
    })
    return Promise.race(cache).then(() => {
      const promiseFn4 = fns[4]();
      cache.add(promiseFn4);
      promiseFn4.then((value) => {
        results[4] = value;
        cache.delete(promiseFn4);
      })
      return Promise.all(cache).then(() => {
        return results;
      })
    })
  })
}
//Промисы - 20
function loadAll(urls, load, limit, cb) {
  const result = new Array(urls.length)
  const cache = new Map()
  let started = 0
  let finished = 0
  let active = 0

  if (urls.length === 0) {
    return cb(result)
  }

  function helper() {
    if (active === limit) {
      return;
    }

    if (finished === urls.length) {
      return cb(result);
    }

    if (started === urls.length) {
      return;
    }

    const i = started
    started++

    if (cache.has(urls[i])) {
      helper()
    } else {
      active++
      cache.set(
        urls[i],
        load(urls[i]).finally(() => active--),
      );
    }

    cache.get(urls[i]).then(value => {
      result[i] = value
      finished++
      helper()
    })
  }

  for (let i = 0; i < limit; i++) {
    helper()
  }
}

// Промисы -21
  // const promisFlat = arg =>{
  //   return arg.reduce((acc, item) => {
  //       if(Array.isArray(item)){
  //          acc.push(...promisFlat(item))
  //       } else{
  //           acc.push(item)
  //       }
  //       return acc
  //   }, [])
  // }
  
  async function flatten(value) {
    let promises = (await value.read()).map(async (item) => {
        if(item instanceof AA){
            return flatten(item)
        }
        return item
    })

    // return promisFlat(await Promise.all(promises))
    return Promise.all(promises).then(x => x.flat());
  }
  
// Промисы - 22

function promisify(fn) {
  return (...args) => {
      return new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
          if(err === null){
            resolve(result)
          } else {
            reject(err)
          }
        })
      })
  }
} 

// Промисы - 23
function callbackify(fn) {
  return (...arg) => {
    const cb = arg.at(-1)
    const args = arg.slice(0, -1)
    fn(...args).then(
      value => cb(null, value),
      error => cb(error),
    )
  }
}

// Промисы - 24
function compose(fns) {
  return fns.reduceRight(compose2, (x, cb) => cb(null, x))
}


function compose2(fn1, fn2){
return (arg, cb) => {
  fn1(arg, (err, result) => {
    if(err === null){
      fn2(result, (err2, result2) => {
        if(err2 === null){
          return cb(null, result2)
        }
          return cb(err2)
      })
    } else {
        return cb(err)
      }
  })
}
}

//Промисы - 25
function findAllJavascriptFiles(folder, callback) {
  if (typeof folder === 'string') {
    if (folder.endsWith('.js')) {
      callback([folder])
    } else {
      callback([])
    }
    return
  }

  folder.size((limit) => {
    if (limit === 0) {
      callback([])
    }
    let cache = []
    let countFile = 0
    for (let i = 0; i < limit; i++) {
      folder.read(i, (file) => {
        findAllJavascriptFiles(file, (result) => {
          cache.push(...result)
          countFile++
          if (countFile === limit) {
            callback(cache)
          }
        })
      })
    }
  })
}
///
async function findAllJavascriptFilesPromise(folder) {
  if (typeof folder === 'string') {
    if (folder.endsWith('.js')) {
      return [folder]
    }
    return []
  }

  const read = promisify(folder.read);
  const size = promisify(folder.size);

  const promises = []
  const limit = await size();

  for (let i = 0; i < limit; i++) {
    promises.push(read(i).then(findAllJavascriptFilesPromise));
  }

  const result = await Promise.all(promises);
  return result.flat();
}

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve) => {
      fn(...args, resolve);
    });
  };
}

// Промисы - 26

async function filterProducts(catalog, minPrice, maxPrice) {

  const getName = compose(
    withRetry,
    promisify
  )(catalog.getName.bind(catalog));

  const checkInStock = compose(
    rejectFn((x) => x),
    withRetry,
    promisify
  )(catalog.checkInStock.bind(catalog));
  
  
  const inStockPromise = checkInStock()

  if (catalog instanceof Product) {
    const getPrice = compose(
      rejectFn((x) => x >= minPrice && x <= maxPrice),
      withRetry,
      promisify
    )(catalog.getPrice.bind(catalog))
    const pricePromise = getPrice()

    try {
      const [name, price ] = await Promise.all([getName(), pricePromise, inStockPromise]);
        return [{ name, price }];
    } catch {
        return []
      }
    } 

  if (catalog instanceof Category) {
    const getChildren = compose(withRetry
      ,promisify
    )(catalog.getChildren.bind(catalog))
    try{
        const [children] = await Promise.all([getChildren(), inStockPromise]);
        const results = await Promise.all(children.map(child => filterProducts(child, minPrice, maxPrice)))
        return results.flat()
    } catch {
        return []
      }
  }
}
function compose(...fn){
  return (variable) => fn.reduceRight((acc, fn) => fn(acc), variable)
}
function rejectFn (rule){
  return function(fn) {
    return (...args) => {
      return fn(...args).then(value => {
        if(rule(value)){
          return value
        } 
        throw new Error()
      })
    }
  }
}
function promisify(fn) {
  return (...args) => {
      return new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
          if(err === null){
            resolve(result)
          } else {
            reject(err)
          }
        })
      })
  }
} 

function withRetry(fn) {
  return async (...args) => {
    while(true){
      try {
        return await fn(...args)
      } catch {
        }
    }
  }
}
// Таймеры -27
class TimeLimitedCache {
  #cache = new Map()
  #timeout = new Map()

  set(key, value, duration) {
    const timerId = setTimeout(() => {
      this.#cache.delete(key)
      this.#timeout.delete(key)
    }, duration)

    clearTimeout(this.#timeout.get(key))

    if(this.#cache.has(key)){
      this.#cache.set(key, value)
      this.#timeout.set(key, timerId)
      return true
    }

    this.#cache.set(key, value)
    this.#timeout.set(key, timerId)

    return false
  }

  get(key) {
    return this.#cache.get(key) ?? -1
  }

  count() { 
    return this.#cache.size
  }
}

// Таймеры - 28

function debounce(fn, ms) {
  let timeId
  return (...args) => {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}

//Таймеры - 29
function throttle(fn, ms) {
  let start = 0
  let timer
    return (...args) => {
    let finish = Date.now()
    if(finish - start >= ms){
      start = finish
      fn(...args)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        start = Date.now()
        fn(...args)
       }, ms - (finish - start))
      }
    }
  }
