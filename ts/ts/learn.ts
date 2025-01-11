interface Data{
  name: 'A'| 'B'|'C',
  age: number,
  location: string
}

function keysProjection<T extends object, K extends keyof T>(objects: T[], keys: K[]): Pick<T, K>[] {
  return objects.map(user => Object.fromEntries(Object.entries(user).filter(([key, _]) => keys.includes(key as K))) as Pick<T, K>);
}



const users: Data[] = [
  { name: "A", age: 11, location: "Qwe" },
  { name: "B", age: 54, location: "Asd" },
  { name: "C", age: 23, location: "Zxc" },
];

const t = keysProjection(users, ["name", "location"]);

t[0].name // ok
t[0].location // ok
t[0].age // err

console.log();
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
