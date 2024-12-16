import { stat } from "fs";

const stats = [
    {
      class: "Object",
      methods: [
        { name: "toString", count: 5 },
        { name: "hasOwnProperty", count: 6 },
      ],
    },
    {
      class: "Array",
      methods: [
        { name: "filter", count: 17 },
        { name: "splice", count: 5 },
        { name: "map", count: 25 },
      ],
    },
    {
      class: "String",
      methods: [
        { name: "replace", count: 12 },
        { name: "slice", count: 8 },
      ],
    },
  ];
  
  
  const output = [
    "Array#map",
    "Array#filter",
    "String#replace",
    "String#slice",
  ];

  const stats2 = [
    {
      class: "Array",
      methods: [
        { name: "filter", count: 2 },
        { name: "map", count: 4 },
        { name: "keys", count: 1 },
        { name: "push", count: 4 },
        { name: "splice", count: 2 },
      ],
    },
  ];
   
  const output2 = [
    "Array#map",
    "Array#push",
  ];
  
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
        
        const sortedMethods = dataMethods.slice().sort((a,b) => {
          const diff = b.count - a.count
          if(diff !== 0){
            return diff
          }
          return a.name.localeCompare(b.name)
        })
   
        const result = []
        let counter = limit
        dataMethods.forEach(({name, count}, index, array) => {
          if(counter > 1){
            counter -= 1
            result.push(name)
          }
          if(counter === 1){
            if(count === array[index + 1].count){
              return
            }
          }
        })
          return result
        
  }
  console.log(topMethods(stats, 4));
  console.log(topMethods(stats2, 3));