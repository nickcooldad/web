//1
interface InputObject {
    firstName : string,
    lastName: string
    country: string
    continent: string
    age: number
    language: string
  }

  type OutputObject = InputObject &
  {
    greeting : string
  }


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

  const topMethods = (stats : StatsType[], limit : number) : string[] => {
        const dataMethods = stats.flatMap((stat) => 
          stat.methods.map(method => ({name: `${stat.class}#${method.name}`, count : method.count}))
        )
        
        const sortedMethods = dataMethods.sort((a, b) => 
            b.count - a.count || a.name.localeCompare(b.name)
          );
        
        if (sortedMethods.length < limit) {
          return sortedMethods.map(({ name }) => name);
        }
      const cutOffCount = sortedMethods.at(-1).count
      const increasingMethods = sortedMethods.filter(({count}) => count > cutOffCount)
      const equalMethods = sortedMethods.filter(({count}) => count === cutOffCount)
      
      if(increasingMethods.length + equalMethods.length > limit){
        return increasingMethods.slice(0, limit).map(({name}) => name)
      }
        return sortedMethods.slice(0, limit).map(({name}) => name)
  }
  //4
  function computeRanks(number : number, games : number[][]) : number[] {
    const teams = Array.from({ length: number }, (_, i) =>
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
  
    const sorting = (a, b) => b.points - a.points || b.goalDiff - a.goalDiff || b.goalsScored - a.goalsScored
  
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
  
  
  function sumTheTreeValues(root : RootType) : number {
    let result = root.value
    if(root.left !== null){
       result += sumTheTreeValues(root.left)
    }
  
    if(root.right !== null) {
      result += sumTheTreeValues(root.right)
    }
    return result
  }
  //6
  interface CatalogType {
    id : string,
    name : string,
    children : CatalogType[]
  }

  function id2parent(catalog : CatalogType, parent : string | null = null) : Record<string, string | null> {
    let result = {}
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
    response = {}
  
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

  //8
  class QueryParams {
    #data : Record<string, string[]> = {}
    qwe = {}
  
    constructor(data : string | Record<string, string[] | string>) {
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
          this.#data[key] = [...data[key]]
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
  
  
    get(key : string) : string{
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
  [key in `${ColorName}`] : number
}

function hex2rgb(str : string) : Color  {
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
  
  interface UserStatus {
    online : string[],
    offline : string[]
    away : string[]
  }
  
  function whosOnline(friends : User[]) : Partial<UserStatus> {
    const result = {
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
    return Object.fromEntries(Object.entries(result).filter(([status, users]) => users.length > 0))
  }
  //13
  interface Employee {
    name : string,
    level : "junior" | "middle" | "senior" | "teamlead",
    monthlyWage : number,
    tenure : number
  }
  
  function totalIncome(employees : Employee[]) : number {
    return employees.reduce((acc : number, {name, level, monthlyWage, tenure}) => {
      console.log(acc)
      if(level === 'middle'){
        return acc + Math.round((monthlyWage * 12) * 1.1)
      }
      if(level === 'senior'){
        return acc + Math.round((monthlyWage * 12) * (1.1 + (tenure * 0.05)))
      } 
      if(level === 'teamlead'){
        return acc + Math.round((monthlyWage * 12) * (1.2 + (tenure * 0.1)))
      }
  
      return acc + Math.round(monthlyWage*12)
    }, 0)
  }
  //14
function filter<T>(array: T[], callback : (item : T, index : number, array: T[]) => boolean) : T[] {
  let filterArray = []
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

function defaultCompare<T>(a : T , b : T) : number {
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