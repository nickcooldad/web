import React, { useState } from 'react'
import { monthList } from '../defenitionOnDayInYear/monthList'
import { defineInDays } from '../defenitionOnDayInYear/defineInDays'
import { PersonAttedance } from '../personAttedance/personAttedance';
import { visitPerson } from '../visitPerson/visitPerson';
import './tabbleAttedance.css'
export function TabbleAttedance({employees}) {

const [monthAndYear, setMonthAndYear] = useState({month: 1, year: 24})

const hundleClickNext = () => {
  setMonthAndYear((prev) => {
    if(prev.month >= 12){
      return {month: 1, year: prev.year + 1}
    } else{
      return {...prev, month: prev.month + 1}
    }
  })
}
const hundleClickBack = () => {
  setMonthAndYear((prev) => {
    if(prev.month <= 1){
      return {month: 12, year: prev.year - 1}
    } else{
      return {...prev, month: prev.month - 1}
    }
  })
}


  return (
    <div>
        <div className="table">
        <div className="topBlock">
          <button className='buttonLeft' onClick={hundleClickBack} >
              <img src='/images/arrow.svg' alt='arrowLeft' className="imgButtonLeft"/>
          </button>
          <div className="mothYear">{`${monthList[monthAndYear.month - 1]} 20${monthAndYear.year}`}</div>
          <button className='buttonRight' onClick={hundleClickNext}>
              <img  src='/images/arrow.svg' alt='arrowRight' className="imgButtonRight" />
          </button>
        </div>
        <div className='tableAttedance'>{
           <PersonAttedance employees={employees} numberDaysMoth={defineInDays(monthAndYear.year, monthAndYear.month - 1)} month={monthAndYear.month} year={monthAndYear.year}/>
          }</div>
      </div>
    </div>
  )
}
