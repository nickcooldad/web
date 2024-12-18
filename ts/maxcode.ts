//1
type InputObject = {
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
  interface StringToNumberMap {
    [key : string] : number
}

function sortByFreq(str : string) : string {
    const data : StringToNumberMap = {}

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
  interface expectedIdChildren {
    [key : string] : string | null
  }
  function id2parent(catalog : CatalogType, parent : string | null = null) : expectedIdChildren {
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
  //9