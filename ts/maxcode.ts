//1
type inputObject = {
    firstName : string,
    lastName: string
    country: string
    continent: string
    age: number
    language: string
  }

  type outputObject = inputObject &
  {
    greeting : string
  }


  const greetDevelopers = (list : inputObject[]) : outputObject[] => {
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

