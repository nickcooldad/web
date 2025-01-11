//1
interface InputObject {
    firstName : string,
    lastName: string
    country: string
    continent: string
    age: number
    language: string
  }

  interface OutputObject extends InputObject {
    greeting : string

  }

  // type OutputObject = InputObject &
  // {
  //   greeting : string
  // }


  const greetDevelopers = (list : InputObject[]) : OutputObject[] => {
    return list.map(devoloper => ({...devoloper, greeting : `Hi ${devoloper.firstName}, what do you like the most about ${devoloper.language}?`}))
  }

  //2

function sortByFreq(str : string) : string {
    const data :  Record<string, number> = {}

    for(const part of str.split(' ')){
        data[part] = (data[part] || 0) + 1
    }

    return str.split(' ').sort((a, b) => {
        const diff = data[b] - data[a]
        if(diff !== 0){
            return diff
        }
        return a.localeCompare(b)
    }).join(' ')
}
//3
type Method  = {
    name : string,
    count : number
}
interface StatsType {
    class : string,
    methods : Method[],
}

type X = "A" | "B" | number;

  const topMethods = (stats : StatsType[], limit : number) : string[] => {
        const dataMethods = stats.flatMap((stat) => 
          stat.methods.map(method => ({name: `${stat.class}#${method.name}`, count : method.count}))
        )
        
        const sortedMethods = dataMethods.sort((a, b) => 
            b.count - a.count || a.name.localeCompare(b.name)
          );
        
        // if (sortedMethods.length < limit) {
        //   return sortedMethods.map(({ name }) => name);
        // }
      const cutOffCount = sortedMethods.length < limit ? 0 : sortedMethods[limit].count
      return sortedMethods.filter(({count}) => count > cutOffCount).map(({name}) => name)
      
      //                  |
      // 1 1 1 2 2 2 2 3 3 3 3 4 4 4 4 4 4 4
      
      // const equalMethods = sortedMethods.filter(({count}) => count === cutOffCount)
      // if(increasingMethods.length + equalMethods.length > limit){
      //   return increasingMethods.slice(0, limit).map(({name}) => name)
      // }
      //   return sortedMethods.slice(0, limit).map(({name}) => name)
  }
  //4

  type Game = [number,number,number,number]
  interface Team {
    team: number,
    points: number,
    goalDiff: number,
    goalsScored: number
  }
  function computeRanks(number : number, games : Game[]) : number[] {
    const teams: Team[] = Array.from({ length: number }, (_, i) =>
      ({ team: i, points: 0, goalDiff: 0, goalsScored: 0 }))
  
    for (const [teamA, teamB, goalA, goalB] of games) {
      teams[teamA].goalsScored += goalA
      teams[teamB].goalsScored += goalB
      teams[teamA].goalDiff += goalA - goalB
      teams[teamB].goalDiff += goalB - goalA
  
      if (goalA > goalB) {
        teams[teamA].points += 2
      }
      if (goalA < goalB) {
        teams[teamB].points += 2
      }
      if (goalA === goalB) {
        teams[teamA].points += 1
        teams[teamB].points += 1
      }
    }
  
    const sorting = (a: Team, b: Team) => b.points - a.points || b.goalDiff - a.goalDiff || b.goalsScored - a.goalsScored
  
    const sortTeams = [...teams].sort(sorting)
  
    const rankingArray = Array(number).fill(0)
  
    for (let i = 0; i < number; i++) {
      if (i > 0 && sorting(sortTeams[i], sortTeams[i - 1]) === 0) {
        rankingArray[sortTeams[i].team] = rankingArray[sortTeams[i - 1].team]
      } else {
        rankingArray[sortTeams[i].team] = i + 1
      }
    }
  
    return rankingArray
  }
  //5
  interface RootType {
    value : number,
    left : RootType | null
    right : RootType | null
  }
  
  
  function sumTheTreeValues(root : RootType | null) : number {
    if(root === null){
      return 0
    }
    
    let result = root.value

    result += sumTheTreeValues(root.left)
    result += sumTheTreeValues(root.right)
  
    return result
  }

  sumTheTreeValues(null);
  //6
  interface CatalogType {
    id : string,
    name : string,
    children : CatalogType[]
  }

  function id2parent(catalog : CatalogType, parent : string | null = null) : Record<string, string | null> {
    let result: Record<string, string | null> = {}
    result[catalog.id] = parent
    if(isArr(catalog.children)){
      for (const key of catalog.children){
        result[key.id] = parent
        Object.assign(result, id2parent(key, catalog.id))
      }
    }
  return result
  }
  const isArr = (arr : CatalogType[]) : boolean => arr !== undefined && arr.length !== 0

  //7

   class HttpRouter{
    response: Record<string, () => string | string[]> = {}
  
    addHandler(API : string, method : string, cb : () => string | string[]) : void{
      this.response[API + method] = cb
    }
  
    runRequest(API : string, method : string){
      if(this.response[API + method] !== undefined){
        return this.response[API + method]()
      }
      return "Error 404: Not Found"
    }
  }

  //const x = new HttpRouter().runRequest("qwe", "tyu");;

  //8
  class QueryParams {
    #data : Record<string, string[]> = {}
  
    constructor(data?: string | Record<string, string>) {
      if (data === undefined) {
        return;
      }

      if (typeof data === 'string') {
        const str = data.split('&')
        for (const key of str) {
          const [keyObj, value] = key.split('=')
          this.#data[keyObj] ??= []
          this.#data[keyObj].push(value)
        }
      } else {
        // for(const k in null){}
        // for(const k in undefined){}

        for (const key in data) {
          const value = data[key]
          this.#data[key] = [value]
        }
      }
    }
  
    append(key : string, value : string) : void {
      this.#data[key] ??= []
      this.#data[key].push(value)
    }
  
    toString() : string {
      return Object.entries(this.#data)
        .flatMap(([key, value]) => value.map(item => `${key}=${item}`))
        .join('&')
    }
  
  
    get(key : string){
      if (this.#data.hasOwnProperty(key)) {
        return this.#data[key][0]
      }
      return null;
    }

    getAll(key : string) : string[] {
      return this.#data[key] ?? []
    }

    set(key : string, value : string) :void {
      this.#data[key] = [value]
    }
  
    delete(key : string) : void {
      delete this.#data[key]
    }
  
    has(key : string, value? : string) : boolean {
      if(value === undefined){
       return this.#data.hasOwnProperty(key)
      }
      if(this.#data.hasOwnProperty(key)){
        return this.#data[key].includes(value)
      }
      return false
    }
  }
  // class QueryParams {

  //   constructor(data) {
  //     this.data = {}
  //     if (typeof data === 'string') {
  //       const str = data.split('&')
  //       for (const key of str) {
  //         const [keyObj, value] = key.split('=')
  //         this.data[keyObj] ??= []
  //         this.data[keyObj].push(value)
  //       }
  //     } else {
  //       for (const key in data) {
  //         const value = data[key]
  //         this.data[key] = [value]
  //       }
  //     }
  //   }
  
  //   append(key, value) {
  //     this.data[key] ??= []
  //     this.data[key].push(value)
  //   }
  
  //   toString() {
  //     return Object.entries(this.data)
  //       .flatMap(([key, value]) => value.map(item => `${key}=${item}`))
  //       .join('&')
  //   }
  
  
  //   get(key) {
  //     if (this.data.hasOwnProperty(key)) {
  //       return this.data[key][0]
  //     }
  //     return null;
  //   }
  //   getAll(key) {
  //     // return this.data.hasOwnProperty(key) ? this.data[key] : []
  //     return this.data[key] ?? []
  //   }
  //   set(key, value) {
  //     // if (this.data.hasOwnProperty(key)) {
  //     //   delete this.data[key]
  //     // }
  //     this.data[key] = [value]
  //   }
  
  //   delete(key) {
  //     delete this.data[key]
  //   }
  
  //   has(key, value) {
  //     if (value !== undefined) {
  //       return this.data[key].includes(value)
  //     }
  //       return this.data.hasOwnProperty(key)
  //   }
  // }
//9
  function findInteger(...arg : ((count : number) => boolean)[]){
    let count = 1
    while(true){
      if(!arg.every(cb => cb(count))){
        count += 1
      } else {
        return count
      }
    }
  }
//10
  function findAllJavascriptFiles(folder : Folder, callback : (arr : string[]) => void, result : string[] = []) : void {
    let countFolder = 0
    folder.size((limit) => {
      for(let i = 0; i < limit; i++){
        folder.read(i, (file) => {
          if(typeof file === 'object'){
            countFolder++
            findAllJavascriptFiles(file, callback, result)
          }
          if(typeof file === 'string' && file.endsWith('.js')){
            result.push(file)
          }
          if(i === limit - 1 && countFolder === 0 ){
            callback(result)
          }
        })
      }   
    })
  }
  interface Folder {
    size(cb: (len: number) => void): void;
    read(index: number, cb: (file: Folder | string) => void): void;
  }
  
  function Folder(files : (string| Folder)[] ) : Folder  {
    const rand = () => Math.random() * 500;
  
    return {
      read: (index, cb) => void setTimeout(cb, rand(), files[index]),
      size: (cb) => void setTimeout(cb, rand(), files.length),
    };
  } 
  //11
  type ColorName = 'r' | 'g' | 'b'

type Color = {
  [key in ColorName] : number
}
// Promise<string> 
function hex2rgb(str : string) : Record<ColorName, number> {
  return {
    r: parseInt(str.slice(1, 3), 16),
    g: parseInt(str.slice(3, 5), 16),
    b: parseInt(str.slice(5), 16),
    }
  }
  //12
  interface User {
    username : string,
    status : string,
    lastActivity : number
  }
  
  // interface UserStatus {
  //   online : string[],
  //   offline : string[]
  //   away : string[]
  // }

  type UserStatus = Record<'online' | 'offline' | 'away', string[]>
  
  function whosOnline(friends : User[]) {
    const result : UserStatus = {
      online : [],
      offline : [], 
      away : []
    }
    for(let {username, status, lastActivity} of friends){
      if(status === 'offline'){
        result.offline.push(username)
      } 
      else if(lastActivity <= 10){
        result.online.push(username)
      } else {
        result.away.push(username)
      }
    }
    return Object.fromEntries(Object.entries(result).filter(([status, users]) => users.length > 0)) as Partial<UserStatus>;
  }
  //13
  interface Employee {
    name : string,
    level : "junior" | "middle" | "senior" | "teamlead",
    monthlyWage : number,
    tenure : number
  }
  
  function totalIncome(employees : Employee[]) : number {
    return employees.reduce((acc, e) => acc + response[e.level](e), 0)
  }

  const response : Record<Employee["level"], (emploees : Employee) => number> = {
    'junior' : (emploees) => Math.round(emploees.monthlyWage*12),
    'middle' : (emploees) => Math.round((emploees.monthlyWage * 12) * 1.1),
    'senior' : (emploees) => Math.round((emploees.monthlyWage * 12) * (1.1 + (emploees.tenure * 0.05))),
    'teamlead' : (emploees) =>Math.round((emploees.monthlyWage * 12) * (1.2 + (emploees.tenure * 0.1)))
  }
  //14
function filter<T>(array: T[], callback : (item : T, index : number, array: T[]) => boolean) : T[] {
  let filterArray: T[] = []
  for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array)) {
          filterArray.push(array[i])
      }
  }
  return filterArray
}
//15
function forEach<T>(array : T[], callback: (item : T, index : number , array : T[]) => void) : void {
  for(let i = 0; i < array.length; i++){
    callback(array[i], i, array)
  }
}

//16
function sort<T>(arr : T[], compareFn : (a : T, b : T) => number  = defaultCompare) {
  for(let start = 0; start < arr.length; start++) {
    let minIndex = start;
    for(let i = start; i < arr.length; i++) {
      if (compareFn(arr[i], arr[minIndex]) < 0) {
        minIndex = i;
      }
    }
    [arr[minIndex], arr[start]] = [arr[start], arr[minIndex]];
  }
}

function defaultCompare<T>(a : T , b : T) { 
  const strA = String(a);
  const strB = String(b);

  if (strA < strB) {
    return -1;
  }
  if (strA > strB) {
    return 1;
  }
  return 0;
}
//17
function map<T, U>(array : T[], callback: (item: T, index: number, array: T[]) => U) : U[] {
  const data: U[] = []
  for(let i = 0; i < array.length; i++){
    data.push(callback(array[i], i, array))
  }
  return data
}

//18
// https://github.com/WebKit/WebKit/blob/18fc2c8a829238a023b22f9c584ce09756d4b757/Source/JavaScriptCore/builtins/ArrayPrototype.js#L27
function reduce<T>(array: T[], callback: (acc: T, item: T, index: number, array: T[]) => T): T;
function reduce<T, U>(array: T[], callback: (acc: U, item: T, index: number, array: T[]) => U, initialValue: U): U;

function reduce(array: any, callback: any, initialValue?: any) {
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

//19
type PromiseStatus = 'fulfilled' | 'rejected' | 'pending'
function getState<T>(promise: Promise<T>): Promise<PromiseStatus> {
  return new Promise ((resolve) => {
    promise.then(() => {
      resolve('fulfilled')
    }, () => {
      resolve('rejected')
    })
    
    queueMicrotask(() => resolve('pending'))
 })
}

//20
function group<T>(arr: T[], isEqual: (firstEl: T, lastEl : T) => boolean) : T[][] {
  const result : T[][] = [];

  arr.forEach(element => {
    const group = result.find(groupArr => isEqual(element, groupArr[0]));

    if (group) {
      group.push(element);
    } else {
      result.push([element]);
    }
  });

  return result;
}

//21
function zip<T, U, Y>(a: T[], b: U[], callback: (firstEl: T, lastEl: U) => Y) : Y[] {
  const length = Math.min(a.length, b.length);
  const result: Y[] = [];

  for (let i = 0; i < length; i++) {
    result.push(callback(a[i], b[i]));
  }

  return result;
}

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

//22
function filterByShape<T>(arr: T[], parameter: Partial<T>): T[] {
  return arr.filter(el => Object.keys(parameter).every(item => (el as Partial<T>)[item as keyof Partial<T>] === parameter[item as keyof Partial<T>]))
 }
//23
function groupBy<T, Key, Acc>(
  array: T[],
  classifier: (groupName: T, index: number) => Key,
  downstream: (acc: Acc, el: T) => Acc,
  accumulatorSupplier: () => Acc,
) : Map<Key, Acc> {
  const cache = new Map<Key, Acc>();
  [...array].forEach((item,index) => {
    if(!cache.has(classifier(item, index))){
      cache.set(classifier(item, index), accumulatorSupplier())
    } 
      cache.set(classifier(item, index), downstream(cache.get(classifier(item, index))!, item))
  })
  return cache
}
interface Table {
  name : string,
  income: number,
  profession: string,
  age: number
}
const employees: Table[] = [
  { name: "James", income: 1000, profession: "developer", age: 23, },
  { name: "Robert", income: 1100, profession: "qa", age: 34, },
  { name: "John", income: 1200, profession: "designer", age: 32, },
  { name: "Mary", income: 1300, profession: "designer", age: 22, },
  { name: "Patricia", income: 1400, profession: "qa", age: 23, },
  { name: "Jennifer", income: 1500, profession: "developer", age: 45, },
  { name: "Max", income: 1600, profession: "developer", age: 27, },
];

const profession2totalIncome = groupBy<Table, string, number>(
  employees,
  employee => employee.profession, // group by profession
  (acc, employee) => acc + employee.income, // sum up incomes
  () => 0, // provide an initial value for map's value
);
console.log(profession2totalIncome)
// Map { 'developer' => 4100, 'qa' => 2500, 'designer' => 2500 }

const profession2names = groupBy<Table, string, string[]>(
  employees,
  employee => employee.profession,
  (acc, employee) => [...acc, employee.name],
  () => [],
);
console.log(profession2names)

//24
function groupBy1<T, U>(iterable: Iterable<T>, cb: (el: T, index: number) => U) : Map<U, T[]> {
  const cache = new Map<U, T[]>()
  let restAr = [...iterable]
  restAr.forEach((element, index) => {
    if(!cache.has(cb(element, index))){
      cache.set(cb(element, index), [])
    }
    cache.get(cb(element, index))!.push(element)
  });
  return cache
}


//25
function groupBy3<T, U extends PropertyKey>(iterable: Iterable<T>, cb: (el: T, index: number) => U): Partial<Record<U, T[]>> {
// function groupBy3<T>(iterable: Iterable<T>, cb: (el: T, index: number) => string): Partial<Record<string, T[]>> {
  let obj: Partial<Record<U, T[]>> = Object.create(null)
  let index = 0
  for(let item of iterable){
    const groupKey = cb(item, index)
    obj[groupKey] ??= []
    obj[groupKey].push(item)
    index++
  }
  return obj
}

const groupSet = groupBy3(new Set([1,2,3,4,5,6,7,8]), el => el % 2 ? 1 : 0);
groupSet[0]?.push(8);
// groupSet[6]?.push(8);
// groupSet["hu"]?.push(8);

// const groupSet = groupBy3(new Set([1,2,3,4,5,6,7,8]), el => el % 2 !== 1 ? "true" : "false");
const testGroup = Object.groupBy(new Set([1]), el => el % 2 !== 1 ? "true" : "false");
// const t = testGroup["jjiuj"]
const t2 = testGroup["true"]
// .push(888);


//26
interface Option<T, U> {
  criteria?: (el: T) => U,
  compareTo?: (first: U, second: U, third: number, fourth: number) => number 
}

function frequency<T, U = T>(arr: T[], options: Option<T,U> = {}) : [U, number][] {
  const cache = new Map<U, number>()
  const {
    criteria = (x: T) => x as unknown as U,
    compareTo = (val1, val2) => val1 > val2 ? 1 : -1,
  } = options

  arr.forEach((item) => {
    const key = criteria(item)
    if(!cache.has(key)){
      cache.set((key), 0)
    }
    cache.set(key, cache.get(key) as number + 1)
  })

  return [...cache].sort((a, b) => compareTo(a[0], b[0], a[1], b[1]))
}


const a2 = frequency(["qwe", "tyui"], { compareTo: (a, b, c, d) => c - d });
const a3 = frequency([66, 88], { compareTo: (a, b, c, d) => c - d });

//27

type Fn<T extends unknown[], U> = (...args: T) => U 

function once<T extends unknown[], U>(funct: Fn<T, U>) {
  let count = 0
 return (...args: T) => {
  if(count > 0){
    return undefined
  }
  count++
  return funct(...args)
 }
}

// const sum = (a: number, b: string) => a > b.length;
// //const double = (a: number) => a * 2;

// const onceSum = once(sum);
// //const onceDouble = once(double);

// console.log(onceSum(2, 'double')); // 5
// console.log(onceSum(5, 'double')); // undefined
// console.log(onceSum(2, 'double')); // undefined
// console.log(onceSum(1, 'double')); // undefined

// console.log(onceDouble(3)); // 6
// console.log(onceDouble(5)); // undefined
// console.log(onceDouble(4)); // undefined


//28 
type Predicate<T> = (...args: T[]) => boolean

function multiPredicate <T>(...args: Predicate<T>[]): Predicate<T> {
  return (arg: T) => args.every(funct => funct(arg))
  }
  
// 29

function compose(): <T>(arg: T) => T;
function compose<T,A>(f1: (arg: T) => A): (arg: T) => A;
function compose<T,A,U>(f1: (arg: A) => U, f2: (arg: T) => A) : (arg: T) => U;
function compose<A,B,C,D>(f1: (arg: C) => D, f2: (arg: B) => C, f3: (arg: A) => B) : (arg: A) => D;

function compose(...args: ((arg: any) => any)[]){
  return (variable: any) => {
    let result = variable
    for (let i = args.length - 1; i >= 0; i--){
       result = args[i](result)
    }
    return result
  }
}

// const double = (x: number): number => x * 2;
// const cube = (x: number): number => x ** 3;
// const inc = (x: number): number => x + 1;
// const res0 = double(cube(inc(0))); // 2
// const res1 = double(cube(inc(1))); // 16
// const res2 = double(cube(inc(2))); // 54 
// const foo = compose(double, cube, inc);
// const testCompose = compose()

// const resultTestCompose = testCompose('a')
// console.log(resultTestCompose)

// console.log(foo(0)); // 2
// console.log(foo(1)); // 16
// console.log(foo(2)); // 54
// const fill = (x : string) : string[] => Array(3).fill(x);
// //const repeat = (x : string): string => x.repeat(5);
// const last = (arr : string[]): string => arr.at(-1)!;

// const foo1 = compose(fill, repeat, last);

// console.log(foo1(["a", "b", "c"]));
// // ["ccccc", "ccccc", "ccccc"]
// const foo2 = compose();

// console.log(foo2("a")); // "a"
// console.log(foo2(5));   // 5


// 30
function memo<T, U>(fn: (arg: T) => U) : (arg: T) => U {
  const cache = new Map<T, U>()
  return (args: T) => {
    if (cache.has(args)){
      return cache.get(args)!
    }
    cache.set(args, fn(args))
    return cache.get(args)!
  }
}
//31
interface SpyParametr<T, R>{
  callCount : () => number,
  wasCalledWith : (arg: T) => boolean,
  returned: (arg: R) => boolean
}

function spy<T extends unknown[], R>(fn: (...arg: T) => R) : ((...arg: T) => R) & SpyParametr<T[number], R> {
  
  const argsArr: T[number][] = []
  const resultFn: R[] = []
  let counter: number = 0

  function spyOn(...args: T): R {
    const result = fn(...args)
    counter++
    argsArr.push(...args)
    resultFn.push(result)
    return result
  }
  
  spyOn.callCount = () : number => counter
  spyOn.wasCalledWith = (arg: T[number]): boolean => argsArr.includes(arg);
  spyOn.returned = (arg : R) : boolean => resultFn.includes(arg)

  return spyOn;
}

function repeat(str: string, count: number) {
  return str.repeat(count)
}

const spyRepeat = spy(repeat);

console.log(spyRepeat("abc", 2)); // === "abcabc"
console.log(spyRepeat("xx", 4)); // === "xxxxxxxx"

console.log(spyRepeat.callCount()); // === 2

console.log(spyRepeat.wasCalledWith("abc")); // === true
console.log(spyRepeat.wasCalledWith(4)); // === true
console.log(spyRepeat.wasCalledWith(5)); // === false

console.log(spyRepeat.returned("xxxxxxxx")); // === true
console.log(spyRepeat.returned("qwerty")); // === false

//32


type StatusObject = Record<'status', 'testing' | 'timeLimit' |'done'>

function polling<T, R extends T>(
  fetcher: () => Promise<T>,
  isCompleted: (arg: T) => arg is R,
  delay: number,
): Promise<R>{
  return fetcher().then(value => {
    if(isCompleted(value) === true){
      return value
      }
    return sleep(delay).then(() => polling(fetcher, isCompleted, delay))
  }, () => sleep(delay).then(() => polling(fetcher, isCompleted, delay)))
}

function sleep(ms: number) : Promise<void>{
  return new Promise(resolve => setTimeout(resolve, ms));
}

const okResponse = {
  status: "done",
  results: [
    { name: "Тест #1 ...", ok: true },
    { name: "Тест #2 ...", ok: true },
  ]
};

const testingResponse : Record<'status', 'testing'> = { status: "testing" };
const timeLimitResponse: Record<'status', 'timeLimit'> = { status: "timeLimit" };
let i = 0;

const fakeFetcher = async () : Promise<StatusObject> => {
  return i++ < 3 ? testingResponse : timeLimitResponse;
}

const result = polling(
  fakeFetcher,
  (response) => response.status !== "testing",
  500,
);

result.then(data => console.log(data));

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type SmallDigit = 0 | 1 | 2 | 3;

// never < 0 < SmallDigit < Digit < number < PropertyKey < unknown

// type MyType<T> = ...

type p1 = Exclude<6, 6>

function assertNever(x: never) {};

function foo(x: 0 | 1 | 2): string {
  if (x === 0) return "A";
  if (x === 1) return "B";
  if (x === 2) return "C";

  assertNever(x);

  return "";
}

const fakeFetcher1 = async () => {
  return Math.floor(10 * Math.random()) as Digit;
}

const okResponse1 = {
  status: 'done',
  results: [
    {user: 'user1', ok: true},
    {user: 'user2', ok: true}
  ]
}

// type guard

function isSmallDigit(digit: Digit): digit is SmallDigit {
  return digit <= 3;
}

// const x = Math.random() < 0.5 ? 3 : 7;

// if (isSmallDigit(x)) {
//   x
// }


const result1 = polling(
  fakeFetcher1,
  isSmallDigit,
  500
)

result1.then(data => console.log(data))
//33
// function promisify<T extends unknown[], R>(fn: (...args: [...T, (err: 'error' | null, result?: R) => void]) => void) : (...args: T) => Promise<R> {
//   return (...args: T): Promise<R> => {
//     return new Promise((resolve, reject) => {
//       fn(...args, (err : 'error' | null, result?: R) => {
//         if (err === null) {
//           resolve(result as R);
//         } else {
//           reject(err);
//         }
//       });
//     });
//   };
// }

// function sum(a: number, b: number, cb: (err: (null | 'error'), result?: number) => void): void {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       cb(null, a + b); // success
//     } else {
//       cb("error"); // bad luck
//     }
//   }, 0);
// }

// // Пример использования
// sum(2, 5, (err, result) => {
//   if (err === null) {
//     console.log(result); // 7
//   }
// });

// const promisifiedSum = promisify(sum);

// // Пример использования промисифицированной функции
// promisifiedSum(3, 4).then(
//   value => console.log(value), // 7
//   reason => console.log(reason), // "error"
// );

//34
class TimeLimitedCache<T,K> {
  #cache = new Map<T,K>()
  #timeout = new Map<T, ReturnType<typeof setTimeout>>()

  set(key: T, value: K, duration: number): boolean {
    const timerId : ReturnType<typeof setTimeout> = setTimeout(() => {
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

  get(key: T) : K | number {
    return this.#cache.get(key) ?? -1
  }

  count() : number {
    return this.#cache.size
  }
}

const cache = new TimeLimitedCache();

setTimeout(() => console.log(cache.set(1, 500, 450)),   0);   // false
setTimeout(() => console.log(cache.get(1)),           100);   // 500
setTimeout(() => console.log(cache.set(2, 600, 350)), 200);   // false
setTimeout(() => console.log(cache.get(2)),           300);   // 600
setTimeout(() => console.log(cache.count()),          400);   // 2
setTimeout(() => console.log(cache.set(2, 800, 250)), 500);   // true
setTimeout(() => console.log(cache.count()),          600);   // 1
setTimeout(() => console.log(cache.get(2)),           700);   // 800
//35
// export {}
// declare global {
//   interface Function {
//     pipe<T, U, V>(this: (arg: T)=> U, fn: (arg: U) => V): (arg: T) => V;
//   }
// }

// Function.prototype.pipe = function <T, U, V>(this: (arg: T) => U, fn: (arg: U) => V): (arg: T) => V {
//   const self = this
//   return function(arg: T): V {
//     return fn(self(arg));
//   }.bind(this);
// }
// const double = (x: number) => x * 2;
// const cube = (x: number) => x ** 3;
// const inc = (x: number) => x + 1;

// const foo = compose(double, cube, inc);

//  console.log(foo(2)); // 54

 //36
 export {}
declare global{
  interface Array<T> {
    map2<R>(cb:(item: T, index: number, array: T[], thisArg?: unknown) => R, thisArg?: unknown) : R[]
  }
}

Array.prototype.map2 = function<T,R,C>(this: T[], callback: (item: T, index: number, array: T[]) => R, thisArg?: unknown): R[] {
  const arr = new Array<R>(this.length)
  for(let i = 0; i < this.length; i++){
    if(i in this){
      if(thisArg !== undefined){
        arr[i] = callback.call(thisArg, this[i], i, this)
      } else{
        arr[i] = callback(this[i], i, this)
      }
    }
  }
  return arr
}
console.log([1, 2, 3].map2(x => x ** 2));
// [1, 4, 9]

console.log(["a", "b", "c", "d"].map2((x, i) => x.repeat(i)));
// ["", "b", "cc", "ddd"]
const multiplicator = {
  x: 5,
  multiply(num: number) {
    return num * this.x;    
  },
};

console.log([1, 2, 3].map2(multiplicator.multiply));
// [NaN, NaN, NaN]

console.log([1, 2, 3].map2(multiplicator.multiply, multiplicator));
// [5, 10, 15]

//37
interface Users{
  name: 'A'| 'B'|'C',
  age: number,
  location: string
}

function extractKey<T extends keyof Users>(objects: Users[], key: T): Users[T][] {
  return objects.map((item: Users) => item[key])
}

const users: Users[] = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

console.log(extractKey(users, "name")); // ["A", "B", "C"]
console.log(extractKey(users, "age")); // [11, 54, 23]
//38
interface Users{
  name: 'A'| 'B'|'C',
  age: number,
  location: string
}

function removeKey<T extends keyof Users>(objects : Users[], key: T ) : Omit<Users, T>[] {
  return objects.map(item => {
    const result = {...item}
    delete result[key]
    return result
})
}


const users: Users[] = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

console.log(removeKey(users, "name")); // ["A", "B", "C"]
console.log(removeKey(users, "age")); // [11, 54, 23]
//39
interface Users{
  name: 'A'| 'B'|'C',
  age: number,
  location: string
}

function keysProjection<T extends keyof Users>(objects: Users[], keys: T[]): Omit<Users, T>[] {
  return objects.map(user => Object.fromEntries(Object.entries(user).filter(([key, _]) => keys.includes(key as T)))) as Omit<Users, T>[]
}



const users: Users[] = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

console.log(keysProjection(users, ["name", "location"]));
// [
//   { name: "A", location: "Qwe" },
//   { name: "B", location: "Asd" },
//   { name: "C", location: "Zxc" },
// ]

console.log(keysProjection(users, ["age"]));
// [
//   { age: 11 },
//   { age: 54 },
//   { age: 23 },
// ]
