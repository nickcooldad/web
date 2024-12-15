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
        const statsData = stats.map(method => [method.class, method.methods].flatMap(item => [item.]))
        console.log(statsData)
        // const limitData = statsData.map(el => [el.name, el.count])
        // console.log(limitData)
        return 
  }
  console.log(topMethods(stats, 4));
  console.log(topMethods(stats2, 3));