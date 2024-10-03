import React from 'react'
import './initialPayment.css'

export function InitialPayment({name, limit, type}) {
  return (
    <>
    <h1 className='name'>{name}</h1>
    <div className='inputs'>
        <input className='inputValue'/>
        <input type='range' className='rangeInput'/>
    </div>
    <div className='buttons'>
        
    </div>
    </>
  )
}
