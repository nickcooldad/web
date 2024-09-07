import React from 'react'
import cn from "classnames";
import s from './personAttedance.module.css'
import { visitPerson } from '../visitPerson/visitPerson';
import { vacationAllDay } from '../visitPerson/vacationAllDay';
import { vacationDay } from '../visitPerson/vacationDay';
//console.log(s);
 
export function PersonAttedance({employees, numberDaysMoth, month, year}) {
  const days = new Array(numberDaysMoth).fill(null).map((_, index) => index + 1)
  const styleAttedance = 
  {
    backgroundColor : '#fcdf03' 
  }
  
  const styleAttedanceAll = 
  {
    backgroundColor : 'red'
  }

  // https://www.npmjs.com/package/classnames

  return (
    <div classname={s.fullNameAndTable}>
      <div className={s.topBlock}>
        <div className={s.emptyBlock}></div>
           <div className={s.days}>{
             days.map((day) => {
               return <div className={s.day}>{day}</div>
                })
             }
          </div>
      </div>
        <div className='centerBlock'>
        {
          employees.map(person => {
            const vacation = visitPerson(person.vacations)
            return <div className={s.centerBlock}>
              <div className={s.fullName}>{person.name}</div>
              <div className={s.tableNumbers}>
              {
                days.map((day) => {
                  return <div className={ cn({
                    [s.block]: true,
                    [s.absentAll]: vacationAllDay(employees, day, month, year),
                    [s.absent]:  vacationDay(vacation, day, month, year),
                  })} />
                })
              }
              </div>
            </div>
          })
        }
        </div>
      </div>
  )
}
