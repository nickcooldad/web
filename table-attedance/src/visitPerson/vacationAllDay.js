import { visitPerson } from "./visitPerson"

export function vacationAllDay (employees, day, month, year){
    return employees.map(item => visitPerson(item.vacations))
    .every(data =>  data[year] !== undefined && data[year][month] !== undefined && data[year][month].has(day))
}
