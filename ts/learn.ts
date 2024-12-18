interface Employees {
  name : string,
  level : "junior" | "middle" | "senior" | "teamlead",
  monthlyWage : number,
  tenure : number
}

function totalIncome(employees : Employees[]) : number {
  return employees.reduce((acc : number, user) => {
    return user.monthlyWage + acc
  }, 0)
}

const employees = [
  {
    name: "Andrew Clark",
    level: "junior",
    monthlyWage: 5000,
    tenure: 2,
  },
  {
    name: "Dan Abramov",
    level: "middle",
    monthlyWage: 6000,
    tenure: 4,
  },
  {
    name: "Sebastian Markbåge",
    level: "teamlead",
    monthlyWage: 10000,
    tenure: 10,
  },
  {
    name: "Sophie Alpert",
    level: "senior",
    monthlyWage: 9000,
    tenure: 9,
  },
  {
    name: "Tianyu Yao",
    level: "middle",
    monthlyWage: 7000,
    tenure: 3,
  },
];
console.log(totalIncome(employees))