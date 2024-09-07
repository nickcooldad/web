export function vacationDay (vacation, day, month, year){
    return vacation[year] !== undefined 
    && vacation[year][month] !== undefined 
    && vacation[year][month].has(day)
  }